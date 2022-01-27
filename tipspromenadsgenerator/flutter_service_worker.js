'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"main.dart.js": "2461832c4cf09659887532aab681b5b4",
"version.json": "c136ca6eb79e0bde1e3c94d3701cea67",
"assets/assets/dummy_quiz.json": "3c13df260ed49d3cc66cf68f649e4e17",
"assets/assets/palaceholder_image.png": "d4e7815f4ad7a73dfb9e44205ec22a47",
"assets/assets/sound.png": "827b1a7b4028d5950927b405f28bc03e",
"assets/assets/SignLanguageIcon.ttf": "481708c3bb3cb4a481f909bc10cc0c94",
"assets/assets/video.png": "5341ccd53b60750f723e022288f1fed2",
"assets/assets/tspsymbol.png": "305e7af10aa75be5210ea7e7a0043a92",
"assets/assets/launch_image.png": "c639351dd7bade2e8d48a96d14631582",
"assets/assets/launch_image_invert.png": "acbb4f3d589b0bde521410be06bc8951",
"assets/assets/pdfprintblanket.svg": "dc371b8186365aa4c656f55fee45199f",
"assets/assets/pdfprintcorrect.svg": "a123515f652adb2475c21b8a30a93916",
"assets/assets/Pdfprintquizlandscape.svg": "1a0b5ee0282dd22c66ebbdac84f20c7d",
"assets/assets/Pdfprintquiz.svg": "7c499a27324692bf9a9d8793723406c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "12205d3b621a374a0b4f61220fe48702",
"assets/FontManifest.json": "0e063ef88c5506b6fc6a551836c27426",
"assets/NOTICES": "d5fbc0ed6622f2e1284748e2f7645cdb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "e77a1218d180ecc35b0ae45ef1d581eb",
"/": "14958b5d703946c1ea6ad083d25d18dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/favicon-16x16.png": "526fd6a46d040ef7259e53557b288961",
"icons/favicon-32x32.png": "3f2d494e92983c47ffe113bb2fcec4e5",
"icons/favicon.ico": "6cf7c3da890e6952f7c8c05cbaaba0cc",
"manifest.json": "9af4ae2adb570bd6e86c76df1f4819ab",
"splash/style.css": "82f166bc1f89bb6b2289727b7b74de36",
"splash/img/light-1x.png": "faba0caba3e678f3813a01f72f3f22c5",
"splash/img/light-2x.png": "353148e829e268a43bde4d45e556a12b",
"splash/img/light-3x.png": "d3505293cafac2016c11bd581b6ac4f4",
"splash/img/light-4x.png": "a21ce47e5cfc488d0251738214847c81",
"splash/img/dark-1x.png": "cde9d92e642794ad5157e33b23fe829a",
"splash/img/dark-2x.png": "53c4314c676fe6b2394895021dd9b7ff",
"splash/img/dark-3x.png": "1fb968afdb75318bc562f235d91651a0",
"splash/img/dark-4x.png": "37175c8644d6f5b8ea99c6abcd2766c9",
"favicon.ico": "6cf7c3da890e6952f7c8c05cbaaba0cc",
"tipspromenadsgenerator/assets/assets/dummy_quiz.json": "3c13df260ed49d3cc66cf68f649e4e17",
"tipspromenadsgenerator/assets/assets/palaceholder_image.png": "d4e7815f4ad7a73dfb9e44205ec22a47",
"tipspromenadsgenerator/assets/assets/sound.png": "827b1a7b4028d5950927b405f28bc03e",
"tipspromenadsgenerator/assets/assets/SignLanguageIcon.ttf": "481708c3bb3cb4a481f909bc10cc0c94",
"tipspromenadsgenerator/assets/assets/video.png": "5341ccd53b60750f723e022288f1fed2",
"tipspromenadsgenerator/assets/assets/tspsymbol.png": "305e7af10aa75be5210ea7e7a0043a92",
"tipspromenadsgenerator/assets/assets/launch_image.png": "c639351dd7bade2e8d48a96d14631582",
"tipspromenadsgenerator/assets/assets/launch_image_invert.png": "acbb4f3d589b0bde521410be06bc8951",
"tipspromenadsgenerator/assets/assets/pdfprintblanket.svg": "f012e607540ee5ad41f3d652a1752e01",
"tipspromenadsgenerator/assets/assets/pdfprintcorrect.svg": "9b52c3933a87f7f401b5c543d4cd474f",
"tipspromenadsgenerator/assets/assets/Pdfprintquizlandscape.svg": "5c6ccf250ed25c1e990f3051d2aa42e8",
"tipspromenadsgenerator/assets/assets/Pdfprintquiz.svg": "b92597ffc064dfcf595a29cff19447c8",
"tipspromenadsgenerator/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"tipspromenadsgenerator/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"tipspromenadsgenerator/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"tipspromenadsgenerator/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"tipspromenadsgenerator/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"tipspromenadsgenerator/assets/AssetManifest.json": "12205d3b621a374a0b4f61220fe48702",
"tipspromenadsgenerator/assets/FontManifest.json": "0e063ef88c5506b6fc6a551836c27426",
"tipspromenadsgenerator/assets/NOTICES": "dce930c147746020930917285ee43fab",
"tipspromenadsgenerator/canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"tipspromenadsgenerator/canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"tipspromenadsgenerator/canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"tipspromenadsgenerator/canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"tipspromenadsgenerator/favicon.ico": "6cf7c3da890e6952f7c8c05cbaaba0cc",
"tipspromenadsgenerator/icons/Icon-192.png": "948efa842dd979ee87a8decdee450af3",
"tipspromenadsgenerator/icons/Icon-512.png": "c6c530338fa143986a00dfde1e5db3f4",
"tipspromenadsgenerator/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"tipspromenadsgenerator/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"tipspromenadsgenerator/icons/favicon-16x16.png": "526fd6a46d040ef7259e53557b288961",
"tipspromenadsgenerator/icons/favicon-32x32.png": "3f2d494e92983c47ffe113bb2fcec4e5",
"tipspromenadsgenerator/icons/favicon.ico": "6cf7c3da890e6952f7c8c05cbaaba0cc",
"tipspromenadsgenerator/version.json": "e839f714c688654d5aad2b6ab2d67e0a",
"tipspromenadsgenerator/splash/style.css": "82f166bc1f89bb6b2289727b7b74de36",
"tipspromenadsgenerator/splash/img/light-1x.png": "faba0caba3e678f3813a01f72f3f22c5",
"tipspromenadsgenerator/splash/img/light-2x.png": "353148e829e268a43bde4d45e556a12b",
"tipspromenadsgenerator/splash/img/light-3x.png": "d3505293cafac2016c11bd581b6ac4f4",
"tipspromenadsgenerator/splash/img/light-4x.png": "a21ce47e5cfc488d0251738214847c81",
"tipspromenadsgenerator/splash/img/dark-1x.png": "cde9d92e642794ad5157e33b23fe829a",
"tipspromenadsgenerator/splash/img/dark-2x.png": "53c4314c676fe6b2394895021dd9b7ff",
"tipspromenadsgenerator/splash/img/dark-3x.png": "1fb968afdb75318bc562f235d91651a0",
"tipspromenadsgenerator/splash/img/dark-4x.png": "37175c8644d6f5b8ea99c6abcd2766c9",
"tipspromenadsgenerator/manifest.json": "9af4ae2adb570bd6e86c76df1f4819ab",
"tipspromenadsgenerator/main.dart.js": "98a00fc50aa34b7b64ced511ef2fd416",
"tipspromenadsgenerator/index.html": "14958b5d703946c1ea6ad083d25d18dc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
