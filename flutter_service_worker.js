'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a543d7c5ac3b68838f6d7db215a1a13c",
"assets/AssetManifest.json": "03bc22c94c19b62ff201969cd05b4610",
"assets/BooksTitles/aa_kisi_roz.jpg": "bd03a0cdc3c759d536b522df5e74d888",
"assets/BooksTitles/aa_laga_jungle.jpg": "bb31172cb86f0dddbe37b7a34efb71de",
"assets/BooksTitles/abi_khwab_hai.jpg": "044a36ac906356066d91854101122807",
"assets/BooksTitles/ae_ishq_hamen_azad_kro.jpg": "15e0990173516c6f97d6bcbf1fe8809b",
"assets/BooksTitles/alwida_pakistan.jpg": "4db2c9152c12a61dc46da531ede7a7f0",
"assets/BooksTitles/ankhon_k_par_chand.jpg": "fdf2ab65abbb7d8acc82b05878a5d920",
"assets/BooksTitles/aor_tum_ao.jpg": "a8fcd1b063c1cca68d54a7592eadd7b5",
"assets/BooksTitles/awara_mizaaj.jpg": "8530186032364a7b24e521b03937d258",
"assets/BooksTitles/barishon_k_mosam_main.jpg": "60c5212864d05e96167745c1dd5e9e89",
"assets/BooksTitles/chand_per_zor_nahi.jpg": "7b8102e87f74ade45a169145a3279d91",
"assets/BooksTitles/dil_de_hath_muhaar.jpg": "0405d3f014b11aeae2737e22de21ef9a",
"assets/BooksTitles/do_bol_muhabbat_k.jpg": "ed6546deb82b50adc6c20f9a4c8c5b0c",
"assets/BooksTitles/dukh_bolte_hain.jpg": "ca3918d05a91c51126c501a111bdb587",
"assets/BooksTitles/gher_matbua_kalam.jpg": "6d2d19bde2927a8b8c88db6c037b841f",
"assets/BooksTitles/heer_farhat_shah.jpg": "c44a92b430d1643e5b936f65086a215d",
"assets/BooksTitles/hijr_ibadat_ban_jata_hai.jpg": "b7c8286172169de15d399ccff11e3424",
"assets/BooksTitles/hum_akele_hain_bohot.jpg": "f91185b502603189377fa475025d9795",
"assets/BooksTitles/hum_jese_awara_dil.jpg": "1d79d8c08ec99b03983bede5237af16a",
"assets/BooksTitles/ikeesven_saadi_ki_pehli_nazm.jpg": "c2ea117ced554a625f148972fd9c1da8",
"assets/BooksTitles/ik_bar_kaho_tum_mere_ho.jpg": "982691c56f237afac206f2ef99e03a76",
"assets/BooksTitles/ishq_nirala_mazhab_hai.jpg": "454bb74adabee348a41330735a402882",
"assets/BooksTitles/jam_gya_sabr_meri_ankhon_main.jpg": "5415fa979d313e3bca505c5cd26b1a4c",
"assets/BooksTitles/judayi_rasta_roke_kharri_hai.jpg": "f50b212b41fff09225dc439d1e276e30",
"assets/BooksTitles/kahan_ho_tum.jpg": "7765de97a18557480629bffd7060384f",
"assets/BooksTitles/khaton_main_dafnaya_hua_jeevan.jpg": "78b7eb43a8469a3ab9e2704a95feb364",
"assets/BooksTitles/khyal_so_rahay_ho_tum.jpg": "997e736bb2213e456b764d67fa3cca06",
"assets/BooksTitles/mahabbat_chup_nahi_rehti.jpg": "1468ca3335877d7792467627886daaf1",
"assets/BooksTitles/mann_panchi_bechain.jpg": "7b27f254bc2460e5a46bb67e074c2a60",
"assets/BooksTitles/mat_bol_piya_ke_lehje_main.jpg": "ffe2eb339caad66aa2fcb7cd4d3d7789",
"assets/BooksTitles/mera_intazar_qadeem_hai.jpg": "d24fda49ea3bccfae5806be396599a8a",
"assets/BooksTitles/mere_veeran_kamre_main.jpg": "6b38814ce53c02ef78ee28f23410663e",
"assets/BooksTitles/milo_hum_se.jpg": "2b91e7b96454375e6fd07a4c171b147c",
"assets/BooksTitles/moat_zada.jpg": "c2667ed222d037a7feae9efb36ea0576",
"assets/BooksTitles/muhabbat_gumshuda_meri.jpg": "9698d5a4f537455acaa84e6bb8431c0d",
"assets/BooksTitles/muhabbat_ki_akhri_adhoori_nazm.jpg": "37748b1549526cdad758083ddafe82b2",
"assets/BooksTitles/muhabbat_zaat_hoti_hai.jpg": "37b083597b630825cc81453615943f2f",
"assets/BooksTitles/mujhe_tum_yad_ate_ho.jpg": "775fe452885d5c65ddfc1a780e866e18",
"assets/BooksTitles/mujh_se_naraz_na_ho.jpg": "4a9265a573c921b3b916a93c0feae838",
"assets/BooksTitles/roag.jpg": "e24ccf976bfb3e98560771a9259d49b9",
"assets/BooksTitles/roz_hon_gi_mulaqaten_ae_dil.jpg": "8f4acc6a9b41f8db5cd0429f234e7232",
"assets/BooksTitles/sarabi.jpg": "d7f042dde1fc5655fd8c9cc1dfec328c",
"assets/BooksTitles/sawal_dard_ka_hai.jpg": "d23c21cea230883df4bbb75fdd0e0266",
"assets/BooksTitles/sehra_khareed_laye_hain.jpg": "4b7644b692ec3ff81fcd443a2cc5c07a",
"assets/BooksTitles/sham_ke_baad_1.jpg": "952aaa7bb3507947db234bff0dbf4cef",
"assets/BooksTitles/sham_ke_baad_2.jpg": "008b3b0168a8b16f99200d74510d621d",
"assets/BooksTitles/sham_ke_baad_3.jpg": "9aa2c3786d10d12002a11df895cf5cbd",
"assets/BooksTitles/tajdar_e_harram.jpg": "504d4583333f348ecdf4aa9aac8b908f",
"assets/BooksTitles/tere_kuch_khwab.jpg": "922b5e9c3bb0637192a95896e6f8f702",
"assets/BooksTitles/udas_shamen_ujar_rastay.jpg": "2cd5fd8e4ea97f1aa4754d9c83253be5",
"assets/BooksTitles/udas_udas.jpg": "a5e0a212300617945e1c47d80b371086",
"assets/BooksTitles/wo_kehti_hai.jpg": "d656f4d99693455e050571e691bf0ad4",
"assets/BooksTitles/yad_aon_agar_udasi_main.jpg": "6a5ae3914494568b27d458f3d40f0bb7",
"assets/database/farhatabbasshahhivedbbox.hive": "66615d918895797511b2441c33289353",
"assets/FontManifest.json": "1c6978df90c9ed0944c797ffccee8a2b",
"assets/fonts/MaterialIcons-Regular.otf": "aa826a2817289dacd6dff7d27b381400",
"assets/fonts/MehrNastaliqWebRegular.ttf": "6494901bb738a94414f0ecaf3d212f27",
"assets/fonts/RobotoRegular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/icons/adsfree.png": "d5e10e612313350fb2b3a3bf10914c70",
"assets/icons/circle_logo.png": "f2a764ae8e9f0eae3022620733762723",
"assets/icons/home_unicode.png": "b73f5f57a1053a5a21e14aff40e37f56",
"assets/icons/ic_admin.png": "275e0c0c3215510b1df1728a2c5ca43d",
"assets/icons/ic_audio_books.png": "7ddcc80a8a6cc922db9939fde07628f9",
"assets/icons/ic_books.png": "93cd8b75b109392a0d0a6cb2e8edcb2a",
"assets/icons/ic_books1.png": "643431420592ace4cfc8e8917e429d73",
"assets/icons/ic_facebook.png": "9e419c7394232881b9314462d1624c73",
"assets/icons/ic_gallery.png": "d1c916f78f6ba982a1679135eca41b99",
"assets/icons/ic_insta.png": "6b3f428fe4ef77356f5c77402658f484",
"assets/icons/ic_lughat.png": "5786d1ad21097474a903ec2204191645",
"assets/icons/ic_lughat1.png": "25b299bfcff4d98fea1089bd23119361",
"assets/icons/ic_lughat_n.png": "006c6b03a3919ab16e20da6799c7ea1a",
"assets/icons/ic_pdf.png": "5c29f8b0b478ea706c5fc3bb146e195c",
"assets/icons/ic_pdf_n1.png": "ef1d824f4af246c879881e49506629e1",
"assets/icons/ic_pdf_n2.png": "e6634873bb9e55a5f41f7fe70d75c7cf",
"assets/icons/ic_pdf_n3.png": "35e5d2367d305d0dda2939eda847daa3",
"assets/icons/ic_pdf_n4.png": "faa37dee70b5c4b140a20644226d795d",
"assets/icons/ic_search.png": "aa3e17d573b65370e3261c466dbcd036",
"assets/icons/ic_search_n.png": "6029b3803889957b77bac60d3d4b0540",
"assets/icons/ic_twitter.png": "2b67c20e015189221bbd07d99f229132",
"assets/icons/ic_videos.png": "2a2971137771f67b185122495b2390d0",
"assets/icons/ic_whatsapp.png": "8bcb6b0a8a64a7c566133be479dfe760",
"assets/icons/ic_whatsappgroup.png": "beb45c39fef6e9781e157ef2a7b4e7a4",
"assets/icons/ic_youtube.png": "259315b7472e55642e9387ff28df2097",
"assets/icons/ic_youtube1.png": "391badcb0d9002ddd11511c565fb7299",
"assets/icons/ic_yt.png": "7897ff28669f5468e5bf50e8daaaa5a8",
"assets/icons/intisab_logo.png": "bd70b7b3075fcab04d23a79a869d0315",
"assets/icons/offline_pdf.png": "43447e66c00f33f03b006610accc748f",
"assets/icons/zic_facebook.png": "9b57d807a057f2f920104f8a57a0dc6d",
"assets/icons/zic_insta.png": "edee0823d947d8826751ea63299a2a3c",
"assets/icons/zic_linkedin.png": "05bc8fe22da6164e7a06af93d74e328d",
"assets/icons/zic_snapchat.png": "4a819825f542d90e59eb2255ec832c7d",
"assets/icons/zic_twitter.png": "f948b78c9d1961a9d2d67b2d712de658",
"assets/icons/zic_whatsapp.png": "247b861b68ebab2383325d1c83633921",
"assets/icons/zic_youtube.png": "9bb53f815ee5d655ac4d0c7509c2597d",
"assets/images/add_image.png": "5865ec546ce5fdafe56fa982886868f7",
"assets/images/admin_zain.jpg": "4288d93cd1c445734ae52d1cd6dad437",
"assets/images/developer_image.png": "50127070ba83a9d9fd9a62c1e221c2fe",
"assets/images/developer_image1.png": "d5fe6eb282a9d7fefd0c66d27776d208",
"assets/images/developer_image2.png": "194cd232f1ad4511d12c83e95f2f4e8f",
"assets/images/dev_dp.png": "9ef2f1422236e0430b41a136da8a7718",
"assets/images/drawer_icon.png": "f356846ad8d574304d55d68daef81323",
"assets/images/intisaab.jpg": "dafca55bb3b1ee3b79f388969b267c4c",
"assets/images/splash_screen.jpg": "291279b2609cade85b98d6d7802f84ad",
"assets/images/splash_screen_web.jpg": "d92739077ce5d1572e7586e6781786c2",
"assets/NOTICES": "fc0ada282ddad6ac3f887b3679ca274c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "9f647e88a2c89f31d67d971ec50b3d0b",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "b5bf2f07a1846067b8b3459264aa7670",
"icons/Icon-512.png": "4ce7a0ca989dc87e05782de49deef465",
"icons/Icon-maskable-192.png": "724c84641d66a6c2faae00320bc66cd1",
"icons/Icon-maskable-512.png": "6106f3bfbf42d2664326b2c4d8aa31cd",
"index.html": "66bde8b36a5aa163173ffd2142182c9c",
"/": "66bde8b36a5aa163173ffd2142182c9c",
"main.dart.js": "bcc34ad3ab0596f2e4352a74b7e83475",
"manifest.json": "c9e263b9ee4261b297a12f932d00caca",
"version.json": "a01e47c30bdd80e75d6b4fc9d517e312"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
