/* ============================================================
   The face — compressed GLB rendered inline in the text wall.
   Idle turntable spin; click = home link (handled by main.js
   via the onHome callback). One renderer, one scene: the same
   canvas element is re-parented into the sheet head when a
   case study opens, and back to the index when it closes.
   ============================================================ */
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SPIN_SPEED = 0.55; /* rad/s — slow idle turntable */
/* Confirmed against a screenshot — this is the exact angle the head
   should start at, every load, on both the index and the sheet header. */
const INITIAL_YAW = 0;

export function createFace(onHome) {
  const slot = document.createElement('span');
  slot.className = 'face-slot';
  slot.setAttribute('role', 'link');
  slot.setAttribute('tabindex', '0');
  slot.setAttribute('aria-label', 'Samuel Hoh — home');

  /* click / keyboard = home — wired before three even loads */
  slot.addEventListener('click', onHome);
  slot.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onHome(); }
  });

  let resizeFn = null;
  let startFn = null;

  /* three.js loads lazily so the text wall paints first */
  init(slot, (r, s) => { resizeFn = r; startFn = s; });

  return {
    slot,
    /* re-parent the live canvas into a new home (index ↔ sheet head) */
    moveTo(parent, before = null) {
      parent.insertBefore(slot, before);
      if (resizeFn) resizeFn();
      if (startFn) startFn();
    }
  };
}

async function init(slot, ready) {
  const [THREE, { GLTFLoader }, { DRACOLoader }] = await Promise.all([
    import('three'),
    import('three/examples/jsm/loaders/GLTFLoader.js'),
    import('three/examples/jsm/loaders/DRACOLoader.js')
  ]);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  slot.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 78 / 104, 0.1, 20);
  camera.position.set(0, 0.06, 2.6);

  scene.add(new THREE.AmbientLight(0xffffff, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(1.5, 2, 2.5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x94f643, 0.7); /* whisper of the accent green */
  rim.position.set(-2, 0.5, -2);
  scene.add(rim);

  const pivot = new THREE.Group();
  scene.add(pivot);

  const draco = new DRACOLoader();
  draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);

  const base = import.meta.env.BASE_URL;
  loader.load(`${base}model/face.glb`, (gltf) => {
    const head = gltf.scene;
    /* centre + normalise scale so the head fills the slot */
    const box = new THREE.Box3().setFromObject(head);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    head.position.sub(centre);
    const s = 1.15 / Math.max(size.x, size.y, size.z);
    head.scale.setScalar(s);
    pivot.add(head);
    pivot.rotation.y = INITIAL_YAW;
    render(0);
  });

  /* ---- render loop: only spins when visible & tab active ---- */
  const clock = new THREE.Clock();
  let running = false;
  let rafId = 0;

  function render() {
    if (!REDUCED) pivot.rotation.y += SPIN_SPEED * clock.getDelta();
    renderer.render(scene, camera);
    if (running && !REDUCED) rafId = requestAnimationFrame(render);
  }
  function start() {
    if (running || !slot.isConnected) return;
    running = true;
    clock.getDelta(); /* flush */
    rafId = requestAnimationFrame(render);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  new IntersectionObserver((entries) =>
    entries[0].isIntersecting ? start() : stop()
  ).observe(slot);
  document.addEventListener('visibilitychange', () =>
    document.hidden ? stop() : start()
  );

  function resize() {
    const w = slot.clientWidth || 78;
    const h = slot.clientHeight || 104;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }
  new ResizeObserver(resize).observe(slot);

  resize();
  ready(resize, start);
}
