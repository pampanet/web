'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dd291151e01ff1db26c7b79ea66f98c6",
"version.json": "569cf2869a602ead020315be0fb5119e",
"index.html": "9cc2312c82b8fa2630844f0cc387a300",
"/": "9cc2312c82b8fa2630844f0cc387a300",
"main.dart.js": "5d1dc3d997a838d6d69486bcd5e33c3f",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5aa4ecbca43c4affa162e8f011d011a9",
"sqflite_sw.js": "27b8e8e5234ade44f4319929336c73e9",
"icons/Icon-192.png": "50c7a867e292d354b5d91c74778dfcb9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "3243bcbdb102f87fb9b383cdf0f5d1e8",
"manifest.json": "d689a59ad186b1dbdf56566bbb6ae628",
"drift_worker.dart.js": "90effdfcc99037ed718548b234ab5275",
"assets/AssetManifest.json": "6347aa335f5fe965bd9b8ddca5cbd417",
"assets/NOTICES": "522527f45d6af7a1f0d3864f298ea962",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.bin.json": "6a31f5a604326e47f84cb54beb8a3f30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dc62b94eea8a005d37ef5940441c9feb",
"assets/fonts/MaterialIcons-Regular.otf": "058d79bbd4bd54204f0482b39321833e",
"assets/assets/contact/contact.md": "577525994150263c25d19221f509c296",
"assets/assets/contact/Pablo_Biagioli_Resume.pdf": "bf4e43a176f106900a85234487abf3cb",
"assets/assets/products/product_archiver.md": "a9d3d8f6e41a3cb4ce43e621877aa00f",
"assets/assets/donate/donate.md": "a6722608fce35d546d27686c8bf6c063",
"assets/assets/chatbot/ellipse_loading.gif": "71bf2cfe07592207651260d4fbc4b7b1",
"assets/assets/blog/archiver_tutorial.md": "0d6747a0c0e8f72cfa75423d1c140c7b",
"assets/assets/blog/first_entry.md": "0ed58792cbe0fd27bfb10b204df76d2c",
"assets/assets/blog/save_as_sandbox.md": "fa6008e0428c02b059e216ae08e9fdc9",
"assets/assets/blog/flutter_mvvm.gif": "62819b9dae6ebc361222937bcc7afdca",
"assets/assets/blog/blog_ddl.sql": "c49de2a5c2acf7c712ab7e2b405b728e",
"assets/assets/blog/our_mission.md": "8afb23c5b84f84d3c3b4019fbbaa44c0",
"assets/assets/github_md.css": "4d4e7ac4031b3baf725cb43a528209a3",
"assets/assets/spelltower/palabras_todas.txt": "4c286895aed80dfc5856444c363d5a41",
"assets/assets/spelltower/instrucciones.md": "0f5a310c69645a7bb2ed3666e22e1bec",
"assets/assets/spelltower/tiles_datasource.json": "5211c020f9f73adf019e71c32503ac47",
"assets/assets/spelltower/letter_freqs.json": "e5e69d8810ff92e57810ed11ae2e8420",
"assets/assets/pampanet_blog.sqlite": "3b4ba75dc1f5d29a80f773d2aea24152",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
