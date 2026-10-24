// Generated into out/sw.js by scripts/generate-sw.mjs — edit the template, not the output.
const VERSION = "4af1760d059a";
const BASE = "/recipes";
const PRECACHE = [
  "/recipes/",
  "/recipes/404/",
  "/recipes/__next.__PAGE__.txt",
  "/recipes/__next._full.txt",
  "/recipes/__next._tree.txt",
  "/recipes/_next/static/chunks/0bma92pht_c97.js",
  "/recipes/_next/static/chunks/0bv943lpqbc4-.js",
  "/recipes/_next/static/chunks/0cz1d0mv5g_q7.js",
  "/recipes/_next/static/chunks/0eo1cde-rr3bs.js",
  "/recipes/_next/static/chunks/0ifhdxyspqp5x.js",
  "/recipes/_next/static/chunks/0jk1ctuhrffhx.js",
  "/recipes/_next/static/chunks/0slr7st8r0bjp.js",
  "/recipes/_next/static/chunks/0xqzthxeqc6us.js",
  "/recipes/_next/static/chunks/14ujzjy9o--zd.js",
  "/recipes/_next/static/chunks/1hha-o_pdhjx_.css",
  "/recipes/_next/static/chunks/1p17-l2r4swd2.js",
  "/recipes/_next/static/chunks/1p5vr_p96o9l3.js",
  "/recipes/_next/static/chunks/1qmohgwfvhr0g.js",
  "/recipes/_next/static/chunks/2k9o7ht8pdx8o.js",
  "/recipes/_next/static/chunks/2umiaj1t03eiu.js",
  "/recipes/_next/static/chunks/2wme9948s-7uz.js",
  "/recipes/_next/static/chunks/30y89xob_0efr.js",
  "/recipes/_next/static/chunks/310vm2bl3xxpt.js",
  "/recipes/_next/static/chunks/37kselvb4g2q1.js",
  "/recipes/_next/static/chunks/3a1xmirtue5ym.js",
  "/recipes/_next/static/chunks/3fibdol2303io.js",
  "/recipes/_next/static/chunks/3fntmmi971322.js",
  "/recipes/_next/static/chunks/3xsc0mk_i-isf.js",
  "/recipes/_next/static/chunks/3xz3bqiu4jyv9.js",
  "/recipes/_next/static/chunks/turbopack-3rluj0t0nwd67.js",
  "/recipes/_next/static/me8NT3bX4BW8YUaISsMGw/_buildManifest.js",
  "/recipes/_next/static/me8NT3bX4BW8YUaISsMGw/_clientMiddlewareManifest.js",
  "/recipes/_next/static/me8NT3bX4BW8YUaISsMGw/_ssgManifest.js",
  "/recipes/_next/static/media/07454f8ad8aaac57-s.p.2kjei9psvcorz.woff2",
  "/recipes/_next/static/media/224e262ef877bfa4-s.1zkvd_innyig_.woff2",
  "/recipes/_next/static/media/7f11d98043fdedc9-s.p.2c8-7nzo1jf9r.woff2",
  "/recipes/_next/static/media/d8cb5ab3660140cd-s.2demiz2t05dx4.woff2",
  "/recipes/_next/static/media/e6d00ff86ef9e699-s.1vcas2uk12q5a.woff2",
  "/recipes/categories/",
  "/recipes/categories/__next._full.txt",
  "/recipes/categories/__next._tree.txt",
  "/recipes/categories/__next.categories/__PAGE__.txt",
  "/recipes/categories/index.txt",
  "/recipes/edit/",
  "/recipes/edit/__next._full.txt",
  "/recipes/edit/__next._tree.txt",
  "/recipes/edit/__next.edit/__PAGE__.txt",
  "/recipes/edit/index.txt",
  "/recipes/icons/apple-touch-icon.png",
  "/recipes/icons/icon-192.png",
  "/recipes/icons/icon-512.png",
  "/recipes/icons/icon-maskable-512.png",
  "/recipes/index.txt",
  "/recipes/manifest.webmanifest",
  "/recipes/new/",
  "/recipes/new/__next._full.txt",
  "/recipes/new/__next._tree.txt",
  "/recipes/new/__next.new/__PAGE__.txt",
  "/recipes/new/index.txt",
  "/recipes/recipe/",
  "/recipes/recipe/__next._full.txt",
  "/recipes/recipe/__next._tree.txt",
  "/recipes/recipe/__next.recipe/__PAGE__.txt",
  "/recipes/recipe/index.txt",
  "/recipes/roulette/",
  "/recipes/roulette/__next._full.txt",
  "/recipes/roulette/__next._tree.txt",
  "/recipes/roulette/__next.roulette/__PAGE__.txt",
  "/recipes/roulette/index.txt",
  "/recipes/settings/",
  "/recipes/settings/__next._full.txt",
  "/recipes/settings/__next._tree.txt",
  "/recipes/settings/__next.settings/__PAGE__.txt",
  "/recipes/settings/index.txt"
];
const CACHE = `recipes-${VERSION}`;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

function isHashedAsset(url) {
  return url.pathname.startsWith(`${BASE}/_next/static/`) || url.pathname.startsWith(`${BASE}/icons/`);
}

async function networkFirst(request, fallbackPath) {
  const cache = await caches.open(CACHE);
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const response = await fetch(request, { signal: controller.signal });
    clearTimeout(timer);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (err) {
    const cached =
      (await cache.match(request, { ignoreSearch: true })) ||
      (fallbackPath && (await cache.match(fallbackPath)));
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(`${BASE}/`)) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, `${BASE}/`));
    return;
  }
  if (isHashedAsset(url)) {
    event.respondWith(cacheFirst(request));
    return;
  }
  event.respondWith(networkFirst(request));
});
