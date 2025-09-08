'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "d689a59ad186b1dbdf56566bbb6ae628",
"icons/apple-touch-icon.png": "efb58cba3310160684d383c02fe69c02",
"icons/Icon-192.png": "97f4823bb51f886c9e31caa4aa18eb78",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "99441fdbca2b2cd8dc8bf47e41a151c7",
"drift_worker.dart.js": "90effdfcc99037ed718548b234ab5275",
"main.dart.js": "dc32aeec56e948c8307d1892d55d8e7e",
"version.json": "aac4b1fbf1bbd1acdd8a20dc10a06d54",
"assets/NOTICES": "cfc995d8dfda8cf62782bfca2fc5460b",
"assets/fonts/MaterialIcons-Regular.otf": "bff367fb048786a5a974e7ef72f3dc9d",
"assets/AssetManifest.json": "4c81054dc6ee2d961ab22742c9ac5c16",
"assets/assets/pampanet_blog.sqlite": "3b4ba75dc1f5d29a80f773d2aea24152",
"assets/assets/github_md.css": "4d4e7ac4031b3baf725cb43a528209a3",
"assets/assets/spelltower/validation_v2.wav": "0c53b9befed2d4dcbacfb35e1f9a61b2",
"assets/assets/spelltower/optionsopen.wav": "23cb19f7317fb626142cdaff87548fc8",
"assets/assets/spelltower/tiles_datasource.json": "5211c020f9f73adf019e71c32503ac47",
"assets/assets/spelltower/instrucciones.md": "0f5a310c69645a7bb2ed3666e22e1bec",
"assets/assets/spelltower/palabras_todas.txt": "4c286895aed80dfc5856444c363d5a41",
"assets/assets/spelltower/letter_freqs.json": "e5e69d8810ff92e57810ed11ae2e8420",
"assets/assets/donate/donate.md": "a6722608fce35d546d27686c8bf6c063",
"assets/assets/polimata/polimata_icon.png": "274472a1ed6b33ef220c688d6667f5af",
"assets/assets/polimata/polimata_splash_bg.png": "3c774434a8fbca241e56c6f070d5e11b",
"assets/assets/chatbot/ellipse_loading.gif": "71bf2cfe07592207651260d4fbc4b7b1",
"assets/assets/products/product_archiver.md": "a9d3d8f6e41a3cb4ce43e621877aa00f",
"assets/assets/google_fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/google_fonts/Ubuntu-LightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/assets/google_fonts/UbuntuCondensed-Regular.ttf": "e9328261a2798be5f33510700e8db624",
"assets/assets/google_fonts/Ubuntu-BoldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/assets/google_fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/google_fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/google_fonts/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/assets/google_fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/google_fonts/Ubuntu-Italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/assets/contact/contact.md": "577525994150263c25d19221f509c296",
"assets/assets/contact/Pablo_Biagioli_Resume.pdf": "bf4e43a176f106900a85234487abf3cb",
"assets/assets/blog/archiver_tutorial.md": "0d6747a0c0e8f72cfa75423d1c140c7b",
"assets/assets/blog/flutter_mvvm.gif": "62819b9dae6ebc361222937bcc7afdca",
"assets/assets/blog/first_entry.md": "0ed58792cbe0fd27bfb10b204df76d2c",
"assets/assets/blog/our_mission.md": "8afb23c5b84f84d3c3b4019fbbaa44c0",
"assets/assets/blog/blog_ddl.sql": "c49de2a5c2acf7c712ab7e2b405b728e",
"assets/assets/blog/save_as_sandbox.md": "fa6008e0428c02b059e216ae08e9fdc9",
"assets/FontManifest.json": "aed2b02323ee1c15e32a18f07088b8e3",
"assets/AssetManifest.bin.json": "7a2cfcc33b640368848428535c5491cd",
"assets/AssetManifest.bin": "ac25ac1daf5e84dd988476947fde4d5c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"flutter_bootstrap.js": "e2ad52bd3c844c08a6f6e0bcff7d214b",
"favicon.ico": "a983ad2e326e94e9c4f3c5ad45da195f",
"sqflite_sw.js": "27b8e8e5234ade44f4319929336c73e9",
"privacy_google.html": "f22878918fbcabe397231ba8cb81e289",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"favicon.png": "721fea7af016997d6953e6229e3467eb",
"index.html": "2146d9fe1ca690988fd4d4628612112f",
"/": "2146d9fe1ca690988fd4d4628612112f"};
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
