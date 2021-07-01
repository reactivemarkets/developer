/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c6f89e5c5a93f884f527070b88cbff6d"
  },
  {
    "url": "api/flatbuffers/install/index.html",
    "revision": "d94fd6f57a9c2aecb53e604c907f4131"
  },
  {
    "url": "api/flatbuffers/schema/index.html",
    "revision": "e1578cda5360882e963e3c33acded1ac"
  },
  {
    "url": "api/index.html",
    "revision": "f46bc07a75ca0b85482d9a5279ae0eb5"
  },
  {
    "url": "api/websocket/index.html",
    "revision": "2aab113e295700ed7b50c305273e4a93"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b217ea963ec2cf3748d55ec1d7766a78"
  },
  {
    "url": "articles/limitorderbooks/index.html",
    "revision": "556eec4ca172f5b593d22630f8fd3f47"
  },
  {
    "url": "assets/css/0.styles.4a9311fe.css",
    "revision": "f96b2a73fd92f3a137042ca5065848d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54b693fa.js",
    "revision": "d05197095ac08d48986af7d89513182d"
  },
  {
    "url": "assets/js/11.24d043bc.js",
    "revision": "2db5105e0495a21ce01983e935a7b01f"
  },
  {
    "url": "assets/js/12.7b7ebe87.js",
    "revision": "bce1a1018b820edc980d81d593a1909f"
  },
  {
    "url": "assets/js/13.446d46d7.js",
    "revision": "48e5a312f012c2f060022e470be7c586"
  },
  {
    "url": "assets/js/14.f4e76d76.js",
    "revision": "ea102f67a43b03193779842ec2b58b5f"
  },
  {
    "url": "assets/js/15.d146a1a0.js",
    "revision": "cc7f78c06248ab0a7280f320dc446704"
  },
  {
    "url": "assets/js/16.36b375b0.js",
    "revision": "44062e1aeba7cb186ad125d6aa00bbde"
  },
  {
    "url": "assets/js/17.87df74d1.js",
    "revision": "8c45930e11f3f4b65f56f85e87dd99c9"
  },
  {
    "url": "assets/js/2.74ccfd3e.js",
    "revision": "1b341720e6b0115bf2f0f24096f954ac"
  },
  {
    "url": "assets/js/3.a2b8f81a.js",
    "revision": "1e41f0a874148041e163cb197f6d5237"
  },
  {
    "url": "assets/js/4.7a808544.js",
    "revision": "94e7568824a1110e4722b6004316e680"
  },
  {
    "url": "assets/js/5.c3384e5f.js",
    "revision": "e8f75adb859187ee1a90c8011b77b2f6"
  },
  {
    "url": "assets/js/6.99955cae.js",
    "revision": "9606649f2485882badf33719f86e0c5c"
  },
  {
    "url": "assets/js/7.df198ed1.js",
    "revision": "bada98934e82cbfd6f8d3876e77f9c3b"
  },
  {
    "url": "assets/js/8.c1383005.js",
    "revision": "22ab671c833e8fd1693c6cc5868075ce"
  },
  {
    "url": "assets/js/9.9625e66a.js",
    "revision": "300b34f75a0ad2073091b339a0be8112"
  },
  {
    "url": "assets/js/app.bd0e3155.js",
    "revision": "5e0a41e2c5311147fbe95d7a2966bdbe"
  },
  {
    "url": "devices.png",
    "revision": "73bf6c10c4e9e5e769bc4bac81e3b024"
  },
  {
    "url": "favicon-128.png",
    "revision": "9164c616e213164328aaf8071f5e8d5a"
  },
  {
    "url": "favicon-16.png",
    "revision": "5bc043dba2ae3b27e16bb63e89c0970e"
  },
  {
    "url": "favicon-32.png",
    "revision": "280e893552a95d932583dc3f1084e596"
  },
  {
    "url": "favicon-512.png",
    "revision": "5b7f6b1b0d488319a8475e8f6c878275"
  },
  {
    "url": "favicon-64.png",
    "revision": "6e2b7a92606ce45a9f57356fbb32a7c9"
  },
  {
    "url": "icon-128.png",
    "revision": "0e9ddec1ca8bceae0dda830cebf8aa9f"
  },
  {
    "url": "icon-192.png",
    "revision": "fd6d32cbbee16ff26a3975d585970597"
  },
  {
    "url": "icon-256.png",
    "revision": "c71800b2c4f701b9540b77d9ea0f336c"
  },
  {
    "url": "icon-512.png",
    "revision": "bd295da788c068ddba15fadc5a6c74b0"
  },
  {
    "url": "index.html",
    "revision": "ffc8990162b567ea3e07ea8eadd93602"
  },
  {
    "url": "logo-light.png",
    "revision": "7c6a2a5395c741fbe271ef2a5d8a25ac"
  },
  {
    "url": "sdk/java/index.html",
    "revision": "650025a5fee9361f5edbe544daf18da3"
  },
  {
    "url": "sdk/js/index.html",
    "revision": "37801aebb121c4459e091434ce8e9b82"
  },
  {
    "url": "sdk/py/index.html",
    "revision": "8f04a5219c2dcf2ac637ecaf5cc26dd5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
