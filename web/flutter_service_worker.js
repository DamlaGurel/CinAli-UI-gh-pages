'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "761b593cb7787bc72e2c252418eba945",
"version.json": "be1d7114dd59e8d46fea116a9a8d8940",
"index.html": "945b02d9e83ccb0a7256670f9df7e313",
"/": "945b02d9e83ccb0a7256670f9df7e313",
"main.dart.js": "ff5d941fda2c0dc900ca64ca1eb5071f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5113f48dd36789fd375386829d7254a1",
".git/config": "579f16062cc166e0a82a641e3a55f38f",
".git/objects/66/2d8a0bba41bfdb661bc75ec54c5f935833ab16": "393c766dad2d4ae078390ad0ce22d0d5",
".git/objects/68/c429f47a27c5c112cbccb0be7bcd7b232dd590": "4f327a6517d20828589e701574c3b8c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/c599d97f806bd9bb444346e81406ba4be5d80b": "011759d9bd502f0f3edcf50a0a2390c7",
".git/objects/9b/ce78ab8d9f3b8d479f6174ada31594009f5039": "e6c0f7b967ab73960dd6b1757698128e",
".git/objects/9e/7ae7a8ef85492370aecff656aee77cd6fa2f57": "e6050afd5944386a3e0a66ab07c79a15",
".git/objects/6a/c6dfab74d29ee814765732859aac9b8c9a7caf": "b38579da9990bb75c02673a572a50d5e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/67/805e6518b7dd44b93a46c63e07acb874e0952a": "24708cb98bf8193e40dff6259fbb6ba2",
".git/objects/0e/0c9c153300ca94fab13fce9aa92bf31b0f5879": "21b8b6a83a94c4e03e9c58699f73edbf",
".git/objects/60/c255f1700515dc7fab4c105f91ae60ee26d72f": "48a50a44c81b01c81b3e0c3ec391f2e1",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/deb8be32df99c1919f1b0b229c711d58fd899e": "8ec2a6d6d802b22411e5fa1eea13fe17",
".git/objects/02/1b2202f5e7d738837716b1e73aed370e46591c": "162068799c9e3bf04e71ad49c8567fb5",
".git/objects/a3/026a42be77458abef601ecd6c9dd2cf6f6b79d": "7ecf8e76421a2c82f2ec72da0abd8ee9",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/d01309bb6d859932b6d0f7418a491537ed11b0": "99984e6405170f63ad0a430f550026d3",
".git/objects/ad/1875dab8f0a734c9280de1adaad1b4c17196d0": "6ae7c25341e504ccc5a83bb4d4ef0fe6",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/a0ec77d1a8a6a24585f5b621c1a01e0064f446": "438af94544956dabd58023c31b70474d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d1/1f0342d25c67d2caf1eca967e03c9ef8b06fda": "34697a5863158fbbdf2aa33e40cee7ee",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/5360c543d5595d6bce193a58dc841852ded344": "a7e41a58a7c01379558007f08b5acd3e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/99a63262d08e55f815e1525268ea1d70829ea6": "8ed937b5d47caaa81be10e1e534c89bc",
".git/objects/fd/9c2d79299a1992109395959c1d69dc4eecaddd": "c23553218da4d69216ea2e841de39943",
".git/objects/fd/431c5ed37888731625994170e5f5f43acc96f2": "a8faaca5d10a9b149c48a4f2788e0209",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/b98db77f9ad1459eee9ca71e4197c2de40d94b": "a3fcbce8857a1286ad90f330e2b23c7f",
".git/objects/4b/fc51d53304e3837a035d0b3c9f3c72738b2aa6": "151726edced4b9fdec71fc677ac11791",
".git/objects/11/c85f6cd88ac8e0cb192d45b020ab5d7047a822": "f0a160f693f59d56a71ad0c982c9c983",
".git/objects/1f/407db0b55923e03cd275cf52e522165b80853b": "bfc78ce2d4a7e418787fbd5dbfe03431",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/6e86a46e883dd91cf4f5cb7cb83ef34616235c": "5107ecde252dc9fb69dd6c210517ccd8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d56c65845e9399144f053d5739b17a25f70531": "0f5dba0c5fa830f7ae1f2e1edc5067f2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/128233929cbaa34ae6f6d2537b460c00eee67e": "2fce9eaa9259b1173e80499ff3aefe6b",
".git/objects/5c/9ff1f011ef4d642b6e54ef40b79c138064d8cf": "77f15aa99b78c7f22e4bf390c56e5104",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/bf/53d4d41b1c0231e48177f24611ccd29aeb379c": "1bf23d6d52c614c35c8c745ae9c0e833",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/33c8f1d045add7830772317bf1d8f5fe71ed5e": "ae4be32a6ac2ab16871919fb66f26cf8",
".git/objects/dd/4131996ca4c4c18783bfd3a7aadc297638073a": "81df184e42e9e1fbd09048b6e3a4463b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e5ae3883f7b08bad7745a893c32d54a58ebc7f": "de8890ed1871a140e6c785dc0d6999db",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/2c/72868f474a9994c64ddac68ccc7d2e3ebc7ac0": "78e1df67975a23f3645186387a7d7716",
".git/objects/48/a2e4b30aa80155078c470af830009ef66b3bae": "39e44f2b77c27b3f06d721f6d06c92b0",
".git/objects/24/d1217c5c8638ef3e8075abb68c4ad99861dd70": "5aab090c7584760a9d7393dfe073c28a",
".git/objects/23/8d84335404bae2e83180b57b9e2df90c66ef38": "b04368a45f414f1b892ffd416c88d5e2",
".git/objects/8c/91319b6f47a350e211ade547890ceb70dbc510": "50dd5184ff98b7764d1b22ce48a35b81",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/13/7dcea8bfd73816c7d5ec527cc785dfb899fc51": "d9981d7e15b313bc567416785ddd94a8",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9565842dfdbc20771f2dd1e5e9c7c14b",
".git/logs/refs/heads/gh-pages": "9565842dfdbc20771f2dd1e5e9c7c14b",
".git/logs/refs/remotes/origin/gh-pages": "eae8ec7931fd713e67d08131164c3984",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "395263562d8a714c7e4e73904fadd3f9",
".git/refs/remotes/origin/gh-pages": "395263562d8a714c7e4e73904fadd3f9",
".git/index": "e9f7a1319067d55addf6ceb9137012c1",
".git/COMMIT_EDITMSG": "7eb4ab317008534c03ea82757831486f",
"assets/AssetManifest.json": "aa73df35fb0af42d4ede0cb0ff707078",
"assets/NOTICES": "fda2f1440fb4486ee0540f1f2b568dcb",
"assets/FontManifest.json": "53912bcf683202195bc406217d79099a",
"assets/AssetManifest.bin.json": "13c0c07c036defa6d46ec79f229457ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7d8e06625c510daf036fa25971eb459f",
"assets/fonts/MaterialIcons-Regular.otf": "0b26bfe5110b09316b16c1376eefe485",
"assets/assets/pics/cinalimuze.jpeg": "67e452091f4b251f4c19a20472ee7ca1",
"assets/assets/fonts/FuturaPT-Book.ttf": "7fe7749499282203940bd8393a7d70ce",
"assets/assets/fonts/FuturaPT-Demi.ttf": "84a5b3528f25de01b902831231f16c57",
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
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
