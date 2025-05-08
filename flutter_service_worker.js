'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.ico": "a983ad2e326e94e9c4f3c5ad45da195f",
"index.html": "3cbfa47b59f2b2c0e5840a7fa328f355",
"/": "3cbfa47b59f2b2c0e5840a7fa328f355",
"drift_worker.dart.js": "90effdfcc99037ed718548b234ab5275",
"sqflite_sw.js": "27b8e8e5234ade44f4319929336c73e9",
"manifest.json": "d689a59ad186b1dbdf56566bbb6ae628",
"main.dart.js": "9bf166baa7ce543bbc9ce106a473a709",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter_bootstrap.js": "434d7facbdfd4fe7af901b0ed6131384",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "721fea7af016997d6953e6229e3467eb",
"icons/Icon-512.png": "99441fdbca2b2cd8dc8bf47e41a151c7",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/apple-touch-icon.png": "efb58cba3310160684d383c02fe69c02",
"icons/Icon-192.png": "97f4823bb51f886c9e31caa4aa18eb78",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/fonts/MaterialIcons-Regular.otf": "e83d2c9bed0d44450883cf2654f25459",
"assets/AssetManifest.bin": "ac25ac1daf5e84dd988476947fde4d5c",
"assets/AssetManifest.bin.json": "7a2cfcc33b640368848428535c5491cd",
"assets/NOTICES": "267c74822decd1e9aa4405e841bf7788",
"assets/assets/github_md.css": "4d4e7ac4031b3baf725cb43a528209a3",
"assets/assets/polimata/polimata_splash_bg.png": "3c774434a8fbca241e56c6f070d5e11b",
"assets/assets/polimata/polimata_icon.png": "274472a1ed6b33ef220c688d6667f5af",
"assets/assets/google_fonts/Ubuntu-Italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/assets/google_fonts/Ubuntu-LightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/assets/google_fonts/Ubuntu-Medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/google_fonts/Ubuntu-BoldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/assets/google_fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/google_fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/google_fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/google_fonts/Ubuntu-MediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/assets/google_fonts/UbuntuCondensed-Regular.ttf": "e9328261a2798be5f33510700e8db624",
"assets/assets/chatbot/ellipse_loading.gif": "71bf2cfe07592207651260d4fbc4b7b1",
"assets/assets/contact/Pablo_Biagioli_Resume.pdf": "bf4e43a176f106900a85234487abf3cb",
"assets/assets/contact/contact.md": "577525994150263c25d19221f509c296",
"assets/assets/pampanet_blog.sqlite": "3b4ba75dc1f5d29a80f773d2aea24152",
"assets/assets/spelltower/palabras_todas.txt": "4c286895aed80dfc5856444c363d5a41",
"assets/assets/spelltower/optionsopen.wav": "23cb19f7317fb626142cdaff87548fc8",
"assets/assets/spelltower/instrucciones.md": "0f5a310c69645a7bb2ed3666e22e1bec",
"assets/assets/spelltower/letter_freqs.json": "e5e69d8810ff92e57810ed11ae2e8420",
"assets/assets/spelltower/tiles_datasource.json": "5211c020f9f73adf019e71c32503ac47",
"assets/assets/spelltower/validation_v2.wav": "0c53b9befed2d4dcbacfb35e1f9a61b2",
"assets/assets/blog/archiver_tutorial.md": "0d6747a0c0e8f72cfa75423d1c140c7b",
"assets/assets/blog/blog_ddl.sql": "c49de2a5c2acf7c712ab7e2b405b728e",
"assets/assets/blog/our_mission.md": "8afb23c5b84f84d3c3b4019fbbaa44c0",
"assets/assets/blog/save_as_sandbox.md": "fa6008e0428c02b059e216ae08e9fdc9",
"assets/assets/blog/first_entry.md": "0ed58792cbe0fd27bfb10b204df76d2c",
"assets/assets/blog/flutter_mvvm.gif": "62819b9dae6ebc361222937bcc7afdca",
"assets/assets/donate/donate.md": "a6722608fce35d546d27686c8bf6c063",
"assets/assets/products/product_archiver.md": "a9d3d8f6e41a3cb4ce43e621877aa00f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "4c81054dc6ee2d961ab22742c9ac5c16",
"version.json": "8db3823ef11942c827a1a8c37fca8df3"};
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
