var global = (function() {

  var base64Decode = function(string) {
    return window.atob(string);
  };
  
  return {
    filesystem: {
      root: {"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:29:07.000Z","mtime":"2015-05-09T22:29:07.000Z","size":358,"type":"file"},"__ref":"72fa8c389466158a82c7277577aabbaa"},"application.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:42:09.000Z","mtime":"2015-05-09T22:42:09.000Z","size":641,"type":"file"},"__ref":"b8ccd15313f6ed0ffa64a9936c67ab37"},"complex.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:40:18.000Z","mtime":"2015-05-09T22:40:18.000Z","size":3513,"type":"file"},"__ref":"fd9fab0350fade8734d83c730d6c4d0e"},"valid_complex.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:41:01.000Z","mtime":"2015-05-09T22:41:01.000Z","size":4900,"type":"file"},"__ref":"ec8acb6c7d908e7ff9d09cc618a2dabc"},"node_modules":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":238,"type":"directory"},"testify":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":238,"type":"directory"},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1358,"type":"file"},"__ref":"8fe09ac0857c5363f6b066edd0f081af"},"node_modules":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":170,"type":"directory"},"colors":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":340,"type":"directory"},"colors.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-08-21T23:13:23.000Z","size":10646,"type":"file"},"__ref":"23a08b63b337fc80259e39814c3304f5"},"example.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-08-21T21:21:02.000Z","size":2423,"type":"file"},"__ref":"d6a358179f5edaab86caf4d73a100b9a"},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1096,"type":"file"},"__ref":"58f4e206f7b3589225bf60ef0c3b49c1"},"test.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-08-21T21:31:17.000Z","size":2138,"type":"file"},"__ref":"f281098536a9e02598817e541e8e15a3"},"themes":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":136,"type":"directory"},"winston-dark.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-07-26T05:36:07.000Z","size":198,"type":"file"},"__ref":"a5e50735f6652e9757ac1c7a63cf85ef"},"winston-light.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-07-26T05:36:07.000Z","size":197,"type":"file"},"__ref":"8ae0394cb9f1165729513b6c35767b27"}}}},"src":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":238,"type":"directory"},"context.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-01-20T18:07:33.000Z","size":4411,"type":"file"},"__ref":"792a59c9cd45e9d24a579478940e0b73"},"minfinite.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-10-22T15:55:26.000Z","size":1338,"type":"file"},"__ref":"4aaff567286b962812b471b15e32f666"},"reporters.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-11-10T20:37:22.000Z","size":7133,"type":"file"},"__ref":"6df4c234a331d8bc981a82363868cf27"},"test.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-11-10T20:19:04.000Z","size":2595,"type":"file"},"__ref":"050548a41a962e5b0452e54fc85da5be"},"testify.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-11-10T20:18:51.000Z","size":833,"type":"file"},"__ref":"59107395271234b20bff477d0fedfb12"}}},"jsck":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2015-05-09T22:24:48.000Z","size":170,"type":"directory"},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2015-05-09T22:24:48.000Z","size":1631,"type":"file"},"__ref":"8691eda8450a09dcba0ee618e26fa262"},"lib":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2015-05-09T22:24:48.000Z","size":374,"type":"directory"},"common":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2015-05-09T22:24:48.000Z","size":272,"type":"directory"},"arrays.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":3308,"type":"file"},"__ref":"fcbf09d38223d8721fcec773d944da19"},"comparison.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":1622,"type":"file"},"__ref":"5085b1987602c5cc3de30fa8c476f916"},"numeric.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":1452,"type":"file"},"__ref":"0825fbdd4a442b652f36331c1b73e22c"},"objects.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":3275,"type":"file"},"__ref":"2902efcef20d31b413fadba8a15cac6b"},"strings.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":1334,"type":"file"},"__ref":"295a0f39ea98ea0f4511853811a7cbbf"},"type.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":2724,"type":"file"},"__ref":"d7e904df3f42b10af0645577cf399ef8"}},"draft3":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2015-05-09T22:24:48.000Z","size":204,"type":"directory"},"logical.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":2738,"type":"file"},"__ref":"7bb82b4ac1f33a96bff44d31899c2f46"},"numeric.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":358,"type":"file"},"__ref":"6ea6e764028452ccb91d02dfd7b53dc6"},"objects.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":3261,"type":"file"},"__ref":"89d9c5da01849c2220d750a63f165757"},"strings.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":3588,"type":"file"},"__ref":"a12ff331af1d351c4f5886c1d034dc4e"}},"draft3.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":483,"type":"file"},"__ref":"163be958855978a098f73ffe8c509d9a"},"draft4":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2015-05-09T22:24:48.000Z","size":238,"type":"directory"},"logical.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":3846,"type":"file"},"__ref":"8722e7b9b982389af8a8c6b83514774f"},"numeric.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":477,"type":"file"},"__ref":"e3b896bd2da06d1f807540db7d6eab02"},"objects.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":4666,"type":"file"},"__ref":"6dcc0a696a5bf6fe5e5382c2037332ae"},"strings.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":3581,"type":"file"},"__ref":"94014b32f4a639edfe48a29492d62632"},"type.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":1722,"type":"file"},"__ref":"7daa123d95e1e99f4a4d1b07472b1ea7"}},"draft4.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":491,"type":"file"},"__ref":"6f8da8312748e493eab65c184393064f"},"index.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":303,"type":"file"},"__ref":"4aa62b8577fce12b86586ac4dacede6b"},"uri.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":775,"type":"file"},"__ref":"41b9174eb5668c337d2a0636d6509a5a"},"util.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":1751,"type":"file"},"__ref":"1160423dddc4853f78f51b62c0cca8d1"},"validator.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:24:48.000Z","mtime":"2014-12-24T19:29:03.000Z","size":13399,"type":"file"},"__ref":"e179c5313f9e071cb445bef3bec54458"}}},"json-schema-tests":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":272,"type":"directory"},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1653,"type":"file"},"__ref":"21e6cfd1cacf1232f9b6e875791112d2"},"JSON-Schema-Test-Suite":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":306,"type":"directory"},"remotes":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":170,"type":"directory"},"folder":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-20T21:55:53.000Z","size":102,"type":"directory"},"folderInteger.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-20T21:55:53.000Z","size":25,"type":"file"},"__ref":"d09e79c2cac61ab1f98de488f12336ae"}},"integer.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-20T21:55:53.000Z","size":25,"type":"file"},"__ref":"d09e79c2cac61ab1f98de488f12336ae"},"subSchemas.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-20T21:55:53.000Z","size":110,"type":"file"},"__ref":"f255bc29c11a7e1b356dfc55be7d2113"}}},"node_modules":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":170,"type":"directory"},"glob":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":374,"type":"directory"},"examples":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":136,"type":"directory"},"g.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-02-26T07:22:55.000Z","size":228,"type":"file"},"__ref":"2ac12c75d060b2e97566c7c8efa928cc"},"usr-local.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-02-26T07:22:55.000Z","size":218,"type":"file"},"__ref":"457ed37c1d7c0e1dc4c52db26ed6be5c"}},"glob.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-02-26T07:26:52.000Z","size":19564,"type":"file"},"__ref":"b831074a08f86efa53c9c3f2e8c96516"},"node_modules":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":136,"type":"directory"},"inherits":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":272,"type":"directory"},"inherits.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-05-16T14:22:57.000Z","size":42,"type":"file"},"__ref":"93c060d3dbadbf5b71bea0128dd3894a"},"inherits_browser.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-05-16T14:39:58.000Z","size":672,"type":"file"},"__ref":"7c26fc24b695f2afbc284bbd5f64d6a4"},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1211,"type":"file"},"__ref":"8bd460ead2e03171dc75eb226b667b47"},"test.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-05-16T14:43:08.000Z","size":510,"type":"file"},"__ref":"88a2f874fdc12dd1b1fcd6c9746edeb1"}},"minimatch":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-05-09T22:30:12.000Z","size":306,"type":"directory"},"minimatch.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-05-13T00:46:55.000Z","size":28511,"type":"file"},"__ref":"7fac57700855500d7665f727d28e48ef"},"node_modules":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-05-09T22:30:12.000Z","size":136,"type":"directory"},"lru-cache":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-05-09T22:30:12.000Z","size":374,"type":"directory"},"bar.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-04-15T20:18:00.000Z","size":63,"type":"file"},"__ref":"1c3366e52bad0c28e654fc4c1666f9b5"},"foo.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-04-15T20:18:08.000Z","size":26,"type":"file"},"__ref":"5c949b856330ff40ecf3603886fb4fb3"},"lib":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-04-24T22:13:21.000Z","size":102,"type":"directory"},"lru-cache.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-04-24T22:13:21.000Z","size":6758,"type":"file"},"__ref":"a9a901aa71a9cbc5a64febc1805ea9a0"}},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-05-09T22:30:12.000Z","size":1427,"type":"file"},"__ref":"da4d01c92c189045c7a2f803927d7088"}},"sigmund":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-05-09T22:30:12.000Z","size":272,"type":"directory"},"bench.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2012-08-13T15:57:47.000Z","size":6918,"type":"file"},"__ref":"6590f59d9cf842e95afe0b5f899e0e24"},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2015-05-09T22:30:12.000Z","size":3190,"type":"file"},"__ref":"f18c338b94236d2bd71748fd389bdd03"},"sigmund.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:12.000Z","mtime":"2012-08-13T15:57:47.000Z","size":1146,"type":"file"},"__ref":"e410aee77c9cf4c364847c88c19b84cc"}}},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1340,"type":"file"},"__ref":"364210f1678d18cebe7b6680a2424be3"}}},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1365,"type":"file"},"__ref":"248408a885e454d8c0c68b38f8bf696e"}},"testify":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":238,"type":"directory"},"node_modules":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":170,"type":"directory"},"colors":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":340,"type":"directory"},"colors.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-08-21T23:13:23.000Z","size":10646,"type":"file"},"__ref":"23a08b63b337fc80259e39814c3304f5"},"example.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-08-21T21:21:02.000Z","size":2423,"type":"file"},"__ref":"d6a358179f5edaab86caf4d73a100b9a"},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1113,"type":"file"},"__ref":"cb15ef1102902454ba7d7b5da9c478e1"},"test.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-08-21T21:31:17.000Z","size":2138,"type":"file"},"__ref":"f281098536a9e02598817e541e8e15a3"},"themes":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":136,"type":"directory"},"winston-dark.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-07-26T05:36:07.000Z","size":198,"type":"file"},"__ref":"a5e50735f6652e9757ac1c7a63cf85ef"},"winston-light.js":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-07-26T05:36:07.000Z","size":197,"type":"file"},"__ref":"8ae0394cb9f1165729513b6c35767b27"}}}},"package.json":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":1355,"type":"file"},"__ref":"7d21c7d01fda6d466a46e2a40c0b076e"},"src":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":238,"type":"directory"},"context.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2014-01-20T18:07:33.000Z","size":4411,"type":"file"},"__ref":"792a59c9cd45e9d24a579478940e0b73"},"minfinite.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2013-10-22T15:55:26.000Z","size":1338,"type":"file"},"__ref":"4aaff567286b962812b471b15e32f666"},"reporters.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-21T15:38:11.000Z","size":7485,"type":"file"},"__ref":"fb0af819920efafd60e3dd09a43e4816"},"test.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-21T15:36:12.000Z","size":2569,"type":"file"},"__ref":"a086f5e1525818f1ec0007950761c180"},"testify.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-21T15:36:41.000Z","size":849,"type":"file"},"__ref":"ae4a35de06d401449ed2ceb422083a5c"}}}},"src":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-05-09T22:30:11.000Z","size":136,"type":"directory"},"index.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-21T18:26:40.000Z","size":237,"type":"file"},"__ref":"b7bac5f3a9a771d0eaaf24eea0fd6281"},"suite_runner.coffee":{"__stat":{"atime":"2015-05-09T22:42:12.000Z","ctime":"2015-05-09T22:30:11.000Z","mtime":"2015-01-21T18:28:23.000Z","size":3314,"type":"file"},"__ref":"a1a7c2c986b4e93caa6b192d14e30a95"}}}}},
      content: {"72fa8c389466158a82c7277577aabbaa":"ewogICJuYW1lIjogImpzY2stYnJvd3Nlci10ZXN0cyIsCiAgInZlcnNpb24iOiAiMC4xLjAiLAogICJkZXNjcmlwdGlvbiI6ICJUZXN0aW5nIEpTQ0sgaW4gdGhlIGJyb3dzZXIiLAogICJtYWluIjogImFwcGxpY2F0aW9uLmNvZmZlZSIsCiAgInJlcG9zaXRvcnkiOiAiIiwKICAiYXV0aG9yIjogIk1hdHRoZXcgS2luZyIsCiAgImxpY2Vuc2UiOiAiTUlUIiwKICAiZGVwZW5kZW5jaWVzIjogewogICAgImpzY2siOiAiXjAuMi40IiwKICAgICJqc29uLXNjaGVtYS10ZXN0cyI6ICJeMC4xLjEiLAogICAgInRlc3RpZnkiOiAiMC4yLngiCiAgfSwKICAiZGV2RGVwZW5kZW5jaWVzIjogewogICAgImFyayI6ICJeMC41LjIiCiAgfQp9Cg==","b8ccd15313f6ed0ffa64a9936c67ab37":"YjhjY2QxNTMxM2Y2ZWQwZmZhNjRhOTkzNmM2N2FiMzc=","fd9fab0350fade8734d83c730d6c4d0e":"ZmQ5ZmFiMDM1MGZhZGU4NzM0ZDgzYzczMGQ2YzRkMGU=","ec8acb6c7d908e7ff9d09cc618a2dabc":"ZWM4YWNiNmM3ZDkwOGU3ZmY5ZDA5Y2M2MThhMmRhYmM=","8fe09ac0857c5363f6b066edd0f081af":"ewogICJuYW1lIjogInRlc3RpZnkiLAogICJ2ZXJzaW9uIjogIjAuMi4xMSIsCiAgImRlc2NyaXB0aW9uIjogInNpbXBsZSBhc3luY2hyb25vdXMgdGVzdGluZyB1c2luZyBhc3NlcnRpb25zIG9mIHlvdXIgY2hvaWNlIiwKICAibWFpbiI6ICJzcmMvdGVzdGlmeS5jb2ZmZWUiLAogICJiaW4iOiB7CiAgICAidGVzdGlmeSI6ICJiaW4vdGVzdGlmeSIKICB9LAogICJmaWxlcyI6IFsKICAgICJzcmMiLAogICAgImJpbi8iLAogICAgIlJFQURNRS5tZCIKICBdLAogICJkZXBlbmRlbmNpZXMiOiB7CiAgICAiY29mZmVlLXNjcmlwdCI6ICI+PTAuNC4wIiwKICAgICJjb2xvcnMiOiAiMC42LngiCiAgfSwKICAicmVwb3NpdG9yeSI6IHsKICAgICJ0eXBlIjogImdpdCIsCiAgICAidXJsIjogImdpdEBnaXRodWIuY29tOmF1dG9tYXR0aGV3L3Rlc3RpZnkuZ2l0IgogIH0sCiAgImF1dGhvciI6IHsKICAgICJuYW1lIjogIk1hdHRoZXcgS2luZyIsCiAgICAiZW1haWwiOiAiYXV0b21hdHRoZXdAZ21haWwuY29tIgogIH0sCiAgImxpY2Vuc2UiOiAiTUlUIiwKICAiZ2l0SGVhZCI6ICI3MDg0ZjI1MTE1ZDE4YjE0ZTgzYjY0MjEyZGVhNjgzZTViNDQ2NjgzIiwKICAiYnVncyI6IHsKICAgICJ1cmwiOiAiaHR0cHM6Ly9naXRodWIuY29tL2F1dG9tYXR0aGV3L3Rlc3RpZnkvaXNzdWVzIgogIH0sCiAgImhvbWVwYWdlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9hdXRvbWF0dGhldy90ZXN0aWZ5IiwKICAiX2lkIjogInRlc3RpZnlAMC4yLjExIiwKICAic2NyaXB0cyI6IHt9LAogICJfc2hhc3VtIjogIjQxM2VkNjA4MjRkMTRkNzJjZDIxODY2ZjY3OGU0ZmI4OWFlMzQ0YTMiLAogICJfZnJvbSI6ICJ0ZXN0aWZ5QDAuMi54IiwKICAiX25wbVZlcnNpb24iOiAiMS40LjE2IiwKICAiX25wbVVzZXIiOiB7CiAgICAibmFtZSI6ICJhdXRvbWF0dGhldyIsCiAgICAiZW1haWwiOiAiYXV0b21hdHRoZXdAZ21haWwuY29tIgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJhdXRvbWF0dGhldyIsCiAgICAgICJlbWFpbCI6ICJhdXRvbWF0dGhld0BnbWFpbC5jb20iCiAgICB9CiAgXSwKICAiZGlzdCI6IHsKICAgICJzaGFzdW0iOiAiNDEzZWQ2MDgyNGQxNGQ3MmNkMjE4NjZmNjc4ZTRmYjg5YWUzNDRhMyIsCiAgICAidGFyYmFsbCI6ICJodHRwOi8vcmVnaXN0cnkubnBtanMub3JnL3Rlc3RpZnkvLS90ZXN0aWZ5LTAuMi4xMS50Z3oiCiAgfSwKICAiZGlyZWN0b3JpZXMiOiB7fSwKICAiX3Jlc29sdmVkIjogImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL3Rlc3RpZnkvLS90ZXN0aWZ5LTAuMi4xMS50Z3oiLAogICJyZWFkbWUiOiAiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kISIKfQo=","23a08b63b337fc80259e39814c3304f5":"MjNhMDhiNjNiMzM3ZmM4MDI1OWUzOTgxNGMzMzA0ZjU=","d6a358179f5edaab86caf4d73a100b9a":"ZDZhMzU4MTc5ZjVlZGFhYjg2Y2FmNGQ3M2ExMDBiOWE=","58f4e206f7b3589225bf60ef0c3b49c1":"ewogICJuYW1lIjogImNvbG9ycyIsCiAgImRlc2NyaXB0aW9uIjogImdldCBjb2xvcnMgaW4geW91ciBub2RlLmpzIGNvbnNvbGUgbGlrZSB3aGF0IiwKICAidmVyc2lvbiI6ICIwLjYuMiIsCiAgImF1dGhvciI6IHsKICAgICJuYW1lIjogIk1hcmFrIFNxdWlyZXMiCiAgfSwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL01hcmFrL2NvbG9ycy5qcyIsCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9NYXJhay9jb2xvcnMuanMvaXNzdWVzIgogIH0sCiAgImtleXdvcmRzIjogWwogICAgImFuc2kiLAogICAgInRlcm1pbmFsIiwKICAgICJjb2xvcnMiCiAgXSwKICAicmVwb3NpdG9yeSI6IHsKICAgICJ0eXBlIjogImdpdCIsCiAgICAidXJsIjogImh0dHA6Ly9naXRodWIuY29tL01hcmFrL2NvbG9ycy5qcy5naXQiCiAgfSwKICAiZW5naW5lcyI6IHsKICAgICJub2RlIjogIj49MC4xLjkwIgogIH0sCiAgIm1haW4iOiAiY29sb3JzIiwKICAiX2lkIjogImNvbG9yc0AwLjYuMiIsCiAgImRpc3QiOiB7CiAgICAic2hhc3VtIjogIjI0MjNmZTY2NzhhYzBjNWRhZTg4NTJlNWQwZTViZTA4Yzk5N2FiY2MiLAogICAgInRhcmJhbGwiOiAiaHR0cDovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9jb2xvcnMvLS9jb2xvcnMtMC42LjIudGd6IgogIH0sCiAgIl9mcm9tIjogImNvbG9yc0AwLjYueCIsCiAgIl9ucG1WZXJzaW9uIjogIjEuMi4zMCIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAibWFyYWsiLAogICAgImVtYWlsIjogIm1hcmFrLnNxdWlyZXNAZ21haWwuY29tIgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJtYXJhayIsCiAgICAgICJlbWFpbCI6ICJtYXJhay5zcXVpcmVzQGdtYWlsLmNvbSIKICAgIH0KICBdLAogICJkaXJlY3RvcmllcyI6IHt9LAogICJfc2hhc3VtIjogIjI0MjNmZTY2NzhhYzBjNWRhZTg4NTJlNWQwZTViZTA4Yzk5N2FiY2MiLAogICJfcmVzb2x2ZWQiOiAiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvY29sb3JzLy0vY29sb3JzLTAuNi4yLnRneiIsCiAgInJlYWRtZSI6ICJFUlJPUjogTm8gUkVBRE1FIGRhdGEgZm91bmQhIgp9Cg==","f281098536a9e02598817e541e8e15a3":"ZjI4MTA5ODUzNmE5ZTAyNTk4ODE3ZTU0MWU4ZTE1YTM=","a5e50735f6652e9757ac1c7a63cf85ef":"YTVlNTA3MzVmNjY1MmU5NzU3YWMxYzdhNjNjZjg1ZWY=","8ae0394cb9f1165729513b6c35767b27":"OGFlMDM5NGNiOWYxMTY1NzI5NTEzYjZjMzU3NjdiMjc=","792a59c9cd45e9d24a579478940e0b73":"NzkyYTU5YzljZDQ1ZTlkMjRhNTc5NDc4OTQwZTBiNzM=","4aaff567286b962812b471b15e32f666":"NGFhZmY1NjcyODZiOTYyODEyYjQ3MWIxNWUzMmY2NjY=","6df4c234a331d8bc981a82363868cf27":"NmRmNGMyMzRhMzMxZDhiYzk4MWE4MjM2Mzg2OGNmMjc=","050548a41a962e5b0452e54fc85da5be":"MDUwNTQ4YTQxYTk2MmU1YjA0NTJlNTRmYzg1ZGE1YmU=","59107395271234b20bff477d0fedfb12":"NTkxMDczOTUyNzEyMzRiMjBiZmY0NzdkMGZlZGZiMTI=","8691eda8450a09dcba0ee618e26fa262":"ewogICJuYW1lIjogImpzY2siLAogICJ2ZXJzaW9uIjogIjAuMi40IiwKICAiZGVzY3JpcHRpb24iOiAiSlNPTiBTY2hlbWEgQ29tcGlsZWQgY2hlY0siLAogICJzY3JpcHRzIjogewogICAgInRlc3QiOiAiY29mZmVlIHRlc3QiLAogICAgInByZXB1Ymxpc2giOiAiY29mZmVlIHRhc2tzL2J1aWxkIgogIH0sCiAgIm1haW4iOiAibGliL2luZGV4LmpzIiwKICAiZmlsZXMiOiBbCiAgICAibGliLyIsCiAgICAiUkVBRE1FLm1kIgogIF0sCiAgImRlcGVuZGVuY2llcyI6IHt9LAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAiSlNWIjogIn40LjAuMiIsCiAgICAiYW1hbmRhIjogIn4wLjUuMSIsCiAgICAiY29mZmVlLXNjcmlwdCI6ICJ+MS43IiwKICAgICJnbG9iIjogIn4zLjIuNiIsCiAgICAiamF5c2NoZW1hIjogIn4wLjMuMSIsCiAgICAianNvbi1nYXRlIjogIn4wLjguMjEiLAogICAgImpzb25zY2hlbWEiOiAifjEuMC4wIiwKICAgICJtaWNyb3RpbWUiOiAiXjEuMC4xIiwKICAgICJyZXF1ZXN0IjogIn4yLjQ4LjAiLAogICAgInNoZWxsanMiOiAiXjAuMy4wIiwKICAgICJzaW1wbGUtaHR0cC1zZXJ2ZXIiOiAifjAuMS44IiwKICAgICJ0ZXN0aWZ5IjogIn4wLjIuMTEiLAogICAgInR2NCI6ICJ+MS4xLjQiLAogICAgInotc2NoZW1hIjogIn4zLjEuMiIKICB9LAogICJyZXBvc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0QGdpdGh1Yi5jb206cGFuZGFzdHJpa2UvanNjay5naXQiCiAgfSwKICAiYXV0aG9yIjogewogICAgIm5hbWUiOiAiTWF0dGhldyBLaW5nIiwKICAgICJlbWFpbCI6ICJtYXR0aGV3QHBhbmRhc3RyaWtlLmNvbSIKICB9LAogICJsaWNlbnNlIjogIk1JVCIsCiAgImdpdEhlYWQiOiAiNDJkOTFjZDgyOGE5ODE5ZjVlZTMzODdjYzIzZmYzNjU3NzhmNWRlYSIsCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9wYW5kYXN0cmlrZS9qc2NrL2lzc3VlcyIKICB9LAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20vcGFuZGFzdHJpa2UvanNjayIsCiAgIl9pZCI6ICJqc2NrQDAuMi40IiwKICAiX3NoYXN1bSI6ICIzMTc5OTkzNmI4MjJiMzVkZGYyZDU4ZGZiNDQwYWU0OWNiNWNhOTA0IiwKICAiX2Zyb20iOiAianNja0AiLAogICJfbnBtVmVyc2lvbiI6ICIxLjQuMTYiLAogICJfbnBtVXNlciI6IHsKICAgICJuYW1lIjogImF1dG9tYXR0aGV3IiwKICAgICJlbWFpbCI6ICJhdXRvbWF0dGhld0BnbWFpbC5jb20iCiAgfSwKICAibWFpbnRhaW5lcnMiOiBbCiAgICB7CiAgICAgICJuYW1lIjogImF1dG9tYXR0aGV3IiwKICAgICAgImVtYWlsIjogImF1dG9tYXR0aGV3QGdtYWlsLmNvbSIKICAgIH0KICBdLAogICJkaXN0IjogewogICAgInNoYXN1bSI6ICIzMTc5OTkzNmI4MjJiMzVkZGYyZDU4ZGZiNDQwYWU0OWNiNWNhOTA0IiwKICAgICJ0YXJiYWxsIjogImh0dHA6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvanNjay8tL2pzY2stMC4yLjQudGd6IgogIH0sCiAgImRpcmVjdG9yaWVzIjoge30sCiAgIl9yZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9qc2NrLy0vanNjay0wLjIuNC50Z3oiLAogICJyZWFkbWUiOiAiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kISIKfQo=","fcbf09d38223d8721fcec773d944da19":"ZmNiZjA5ZDM4MjIzZDg3MjFmY2VjNzczZDk0NGRhMTk=","5085b1987602c5cc3de30fa8c476f916":"NTA4NWIxOTg3NjAyYzVjYzNkZTMwZmE4YzQ3NmY5MTY=","0825fbdd4a442b652f36331c1b73e22c":"MDgyNWZiZGQ0YTQ0MmI2NTJmMzYzMzFjMWI3M2UyMmM=","2902efcef20d31b413fadba8a15cac6b":"MjkwMmVmY2VmMjBkMzFiNDEzZmFkYmE4YTE1Y2FjNmI=","295a0f39ea98ea0f4511853811a7cbbf":"Mjk1YTBmMzllYTk4ZWEwZjQ1MTE4NTM4MTFhN2NiYmY=","d7e904df3f42b10af0645577cf399ef8":"ZDdlOTA0ZGYzZjQyYjEwYWYwNjQ1NTc3Y2YzOTllZjg=","7bb82b4ac1f33a96bff44d31899c2f46":"N2JiODJiNGFjMWYzM2E5NmJmZjQ0ZDMxODk5YzJmNDY=","6ea6e764028452ccb91d02dfd7b53dc6":"NmVhNmU3NjQwMjg0NTJjY2I5MWQwMmRmZDdiNTNkYzY=","89d9c5da01849c2220d750a63f165757":"ODlkOWM1ZGEwMTg0OWMyMjIwZDc1MGE2M2YxNjU3NTc=","a12ff331af1d351c4f5886c1d034dc4e":"YTEyZmYzMzFhZjFkMzUxYzRmNTg4NmMxZDAzNGRjNGU=","163be958855978a098f73ffe8c509d9a":"MTYzYmU5NTg4NTU5NzhhMDk4ZjczZmZlOGM1MDlkOWE=","8722e7b9b982389af8a8c6b83514774f":"ODcyMmU3YjliOTgyMzg5YWY4YThjNmI4MzUxNDc3NGY=","e3b896bd2da06d1f807540db7d6eab02":"ZTNiODk2YmQyZGEwNmQxZjgwNzU0MGRiN2Q2ZWFiMDI=","6dcc0a696a5bf6fe5e5382c2037332ae":"NmRjYzBhNjk2YTViZjZmZTVlNTM4MmMyMDM3MzMyYWU=","94014b32f4a639edfe48a29492d62632":"OTQwMTRiMzJmNGE2MzllZGZlNDhhMjk0OTJkNjI2MzI=","7daa123d95e1e99f4a4d1b07472b1ea7":"N2RhYTEyM2Q5NWUxZTk5ZjRhNGQxYjA3NDcyYjFlYTc=","6f8da8312748e493eab65c184393064f":"NmY4ZGE4MzEyNzQ4ZTQ5M2VhYjY1YzE4NDM5MzA2NGY=","4aa62b8577fce12b86586ac4dacede6b":"NGFhNjJiODU3N2ZjZTEyYjg2NTg2YWM0ZGFjZWRlNmI=","41b9174eb5668c337d2a0636d6509a5a":"NDFiOTE3NGViNTY2OGMzMzdkMmEwNjM2ZDY1MDlhNWE=","1160423dddc4853f78f51b62c0cca8d1":"MTE2MDQyM2RkZGM0ODUzZjc4ZjUxYjYyYzBjY2E4ZDE=","e179c5313f9e071cb445bef3bec54458":"ZTE3OWM1MzEzZjllMDcxY2I0NDViZWYzYmVjNTQ0NTg=","21e6cfd1cacf1232f9b6e875791112d2":"ewogICJuYW1lIjogImpzb24tc2NoZW1hLXRlc3RzIiwKICAidmVyc2lvbiI6ICIwLjEuMSIsCiAgImRlc2NyaXB0aW9uIjogIlRvb2wgZm9yIHJ1bm5pbmcgdGhlIE9mZmljaWFsIEpTT04gU2NoZW1hIFRlc3QgU3VpdGUiLAogICJtYWluIjogInNyYy9pbmRleC5jb2ZmZWUiLAogICJiaW4iOiB7CiAgICAianNvbi1zY2hlbWEtdGVzdHMiOiAiYmluL2pzb24tc2NoZW1hLXRlc3RzIgogIH0sCiAgImZpbGVzIjogWwogICAgImJpbiIsCiAgICAic3JjIiwKICAgICJKU09OLVNjaGVtYS1UZXN0LVN1aXRlIiwKICAgICJSRUFETUUubWQiCiAgXSwKICAiZGVwZW5kZW5jaWVzIjogewogICAgImdsb2IiOiAifjMuMi42IiwKICAgICJ0ZXN0aWZ5IjogIl4wLjMuMCIKICB9LAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAiaXMtbXktanNvbi12YWxpZCI6ICJeMS40LjEiLAogICAgImpzY2siOiAiXjAuMi40IiwKICAgICJqc29uLWdhdGUiOiAiXjAuOC4yMiIsCiAgICAidHY0IjogIl4xLjEuNSIKICB9LAogICJyZXBvc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0QGdpdGh1Yi5jb206cGFuZGFzdHJpa2UvanNvbi1zY2hlbWEtdGVzdHMuZ2l0IgogIH0sCiAgImF1dGhvciI6IHsKICAgICJuYW1lIjogIk1hdHRoZXcgS2luZyIsCiAgICAiZW1haWwiOiAibWF0dGhld0BwYW5kYXN0cmlrZS5jb20iCiAgfSwKICAibGljZW5zZSI6ICJNSVQiLAogICJnaXRIZWFkIjogIjkxNjg3OWNiOWYzN2FmOTg5YzNkNmQ0MjU4YTM4NDIyOTdlY2Y3YWEiLAogICJidWdzIjogewogICAgInVybCI6ICJodHRwczovL2dpdGh1Yi5jb20vcGFuZGFzdHJpa2UvanNvbi1zY2hlbWEtdGVzdHMvaXNzdWVzIgogIH0sCiAgImhvbWVwYWdlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9wYW5kYXN0cmlrZS9qc29uLXNjaGVtYS10ZXN0cyIsCiAgIl9pZCI6ICJqc29uLXNjaGVtYS10ZXN0c0AwLjEuMSIsCiAgInNjcmlwdHMiOiB7fSwKICAiX3NoYXN1bSI6ICJjYzNhY2FlODZhNDdiN2U1NDRmNDczMWIwMDAwODdiMDY0YjJlNThmIiwKICAiX2Zyb20iOiAianNvbi1zY2hlbWEtdGVzdHNAXjAuMS4xIiwKICAiX25wbVZlcnNpb24iOiAiMS40LjE2IiwKICAiX25wbVVzZXIiOiB7CiAgICAibmFtZSI6ICJhdXRvbWF0dGhldyIsCiAgICAiZW1haWwiOiAiYXV0b21hdHRoZXdAZ21haWwuY29tIgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJhdXRvbWF0dGhldyIsCiAgICAgICJlbWFpbCI6ICJhdXRvbWF0dGhld0BnbWFpbC5jb20iCiAgICB9LAogICAgewogICAgICAibmFtZSI6ICJkeW9kZXIiLAogICAgICAiZW1haWwiOiAiZGFuaWVseW9kZXJAZ21haWwuY29tIgogICAgfQogIF0sCiAgImRpc3QiOiB7CiAgICAic2hhc3VtIjogImNjM2FjYWU4NmE0N2I3ZTU0NGY0NzMxYjAwMDA4N2IwNjRiMmU1OGYiLAogICAgInRhcmJhbGwiOiAiaHR0cDovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9qc29uLXNjaGVtYS10ZXN0cy8tL2pzb24tc2NoZW1hLXRlc3RzLTAuMS4xLnRneiIKICB9LAogICJkaXJlY3RvcmllcyI6IHt9LAogICJfcmVzb2x2ZWQiOiAiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvanNvbi1zY2hlbWEtdGVzdHMvLS9qc29uLXNjaGVtYS10ZXN0cy0wLjEuMS50Z3oiCn0K","d09e79c2cac61ab1f98de488f12336ae":"ewogICAgInR5cGUiOiAiaW50ZWdlciIKfQ==","f255bc29c11a7e1b356dfc55be7d2113":"ewogICAgImludGVnZXIiOiB7CiAgICAgICAgInR5cGUiOiAiaW50ZWdlciIKICAgIH0sIAogICAgInJlZlRvSW50ZWdlciI6IHsKICAgICAgICAiJHJlZiI6ICIjL2ludGVnZXIiCiAgICB9Cn0=","2ac12c75d060b2e97566c7c8efa928cc":"MmFjMTJjNzVkMDYwYjJlOTc1NjZjN2M4ZWZhOTI4Y2M=","457ed37c1d7c0e1dc4c52db26ed6be5c":"NDU3ZWQzN2MxZDdjMGUxZGM0YzUyZGIyNmVkNmJlNWM=","b831074a08f86efa53c9c3f2e8c96516":"YjgzMTA3NGEwOGY4NmVmYTUzYzljM2YyZThjOTY1MTY=","93c060d3dbadbf5b71bea0128dd3894a":"OTNjMDYwZDNkYmFkYmY1YjcxYmVhMDEyOGRkMzg5NGE=","7c26fc24b695f2afbc284bbd5f64d6a4":"N2MyNmZjMjRiNjk1ZjJhZmJjMjg0YmJkNWY2NGQ2YTQ=","8bd460ead2e03171dc75eb226b667b47":"ewogICJuYW1lIjogImluaGVyaXRzIiwKICAiZGVzY3JpcHRpb24iOiAiQnJvd3Nlci1mcmllbmRseSBpbmhlcml0YW5jZSBmdWxseSBjb21wYXRpYmxlIHdpdGggc3RhbmRhcmQgbm9kZS5qcyBpbmhlcml0cygpIiwKICAidmVyc2lvbiI6ICIyLjAuMSIsCiAgImtleXdvcmRzIjogWwogICAgImluaGVyaXRhbmNlIiwKICAgICJjbGFzcyIsCiAgICAia2xhc3MiLAogICAgIm9vcCIsCiAgICAib2JqZWN0LW9yaWVudGVkIiwKICAgICJpbmhlcml0cyIsCiAgICAiYnJvd3NlciIsCiAgICAiYnJvd3NlcmlmeSIKICBdLAogICJtYWluIjogIi4vaW5oZXJpdHMuanMiLAogICJicm93c2VyIjogIi4vaW5oZXJpdHNfYnJvd3Nlci5qcyIsCiAgInJlcG9zaXRvcnkiOiB7CiAgICAidHlwZSI6ICJnaXQiLAogICAgInVybCI6ICJnaXQ6Ly9naXRodWIuY29tL2lzYWFjcy9pbmhlcml0cyIKICB9LAogICJsaWNlbnNlIjogIklTQyIsCiAgInNjcmlwdHMiOiB7CiAgICAidGVzdCI6ICJub2RlIHRlc3QiCiAgfSwKICAiYnVncyI6IHsKICAgICJ1cmwiOiAiaHR0cHM6Ly9naXRodWIuY29tL2lzYWFjcy9pbmhlcml0cy9pc3N1ZXMiCiAgfSwKICAiX2lkIjogImluaGVyaXRzQDIuMC4xIiwKICAiZGlzdCI6IHsKICAgICJzaGFzdW0iOiAiYjE3ZDA4ZDMyNmI0NDIzZTU2OGVmZjcxOWY5MWIwYjFjYmRmNjlmMSIsCiAgICAidGFyYmFsbCI6ICJodHRwOi8vcmVnaXN0cnkubnBtanMub3JnL2luaGVyaXRzLy0vaW5oZXJpdHMtMi4wLjEudGd6IgogIH0sCiAgIl9mcm9tIjogImluaGVyaXRzQDIiLAogICJfbnBtVmVyc2lvbiI6ICIxLjMuOCIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAiaXNhYWNzIiwKICAgICJlbWFpbCI6ICJpQGl6cy5tZSIKICB9LAogICJtYWludGFpbmVycyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiaXNhYWNzIiwKICAgICAgImVtYWlsIjogImlAaXpzLm1lIgogICAgfQogIF0sCiAgImRpcmVjdG9yaWVzIjoge30sCiAgIl9zaGFzdW0iOiAiYjE3ZDA4ZDMyNmI0NDIzZTU2OGVmZjcxOWY5MWIwYjFjYmRmNjlmMSIsCiAgIl9yZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9pbmhlcml0cy8tL2luaGVyaXRzLTIuMC4xLnRneiIsCiAgInJlYWRtZSI6ICJFUlJPUjogTm8gUkVBRE1FIGRhdGEgZm91bmQhIiwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL2lzYWFjcy9pbmhlcml0cyIKfQo=","88a2f874fdc12dd1b1fcd6c9746edeb1":"ODhhMmY4NzRmZGMxMmRkMWIxZmNkNmM5NzQ2ZWRlYjE=","7fac57700855500d7665f727d28e48ef":"N2ZhYzU3NzAwODU1NTAwZDc2NjVmNzI3ZDI4ZTQ4ZWY=","1c3366e52bad0c28e654fc4c1666f9b5":"MWMzMzY2ZTUyYmFkMGMyOGU2NTRmYzRjMTY2NmY5YjU=","5c949b856330ff40ecf3603886fb4fb3":"NWM5NDliODU2MzMwZmY0MGVjZjM2MDM4ODZmYjRmYjM=","a9a901aa71a9cbc5a64febc1805ea9a0":"YTlhOTAxYWE3MWE5Y2JjNWE2NGZlYmMxODA1ZWE5YTA=","da4d01c92c189045c7a2f803927d7088":"ewogICJuYW1lIjogImxydS1jYWNoZSIsCiAgImRlc2NyaXB0aW9uIjogIkEgY2FjaGUgb2JqZWN0IHRoYXQgZGVsZXRlcyB0aGUgbGVhc3QtcmVjZW50bHktdXNlZCBpdGVtcy4iLAogICJ2ZXJzaW9uIjogIjIuNi4yIiwKICAiYXV0aG9yIjogewogICAgIm5hbWUiOiAiSXNhYWMgWi4gU2NobHVldGVyIiwKICAgICJlbWFpbCI6ICJpQGl6cy5tZSIKICB9LAogICJrZXl3b3JkcyI6IFsKICAgICJtcnUiLAogICAgImxydSIsCiAgICAiY2FjaGUiCiAgXSwKICAic2NyaXB0cyI6IHsKICAgICJ0ZXN0IjogInRhcCB0ZXN0IC0tZ2MiCiAgfSwKICAibWFpbiI6ICJsaWIvbHJ1LWNhY2hlLmpzIiwKICAicmVwb3NpdG9yeSI6IHsKICAgICJ0eXBlIjogImdpdCIsCiAgICAidXJsIjogImdpdDovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtbHJ1LWNhY2hlLmdpdCIKICB9LAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAidGFwIjogIl4wLjcuMSIsCiAgICAid2VhayI6ICIiCiAgfSwKICAibGljZW5zZSI6IHsKICAgICJ0eXBlIjogIk1JVCIsCiAgICAidXJsIjogImh0dHA6Ly9naXRodWIuY29tL2lzYWFjcy9ub2RlLWxydS1jYWNoZS9yYXcvbWFzdGVyL0xJQ0VOU0UiCiAgfSwKICAiZ2l0SGVhZCI6ICIyNzhkMDVmY2M3MTQ2MzZlZWVkYjM5NTliY2E4MGMyMGMxOWE2MWRmIiwKICAiYnVncyI6IHsKICAgICJ1cmwiOiAiaHR0cHM6Ly9naXRodWIuY29tL2lzYWFjcy9ub2RlLWxydS1jYWNoZS9pc3N1ZXMiCiAgfSwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL2lzYWFjcy9ub2RlLWxydS1jYWNoZSNyZWFkbWUiLAogICJfaWQiOiAibHJ1LWNhY2hlQDIuNi4yIiwKICAiX3NoYXN1bSI6ICI3Nzc0MTYzOGM2ZGM5NzJlNTAzZGJlNDFkY2I2YmZkZmJhNDk5YTM4IiwKICAiX2Zyb20iOiAibHJ1LWNhY2hlQDIiLAogICJfbnBtVmVyc2lvbiI6ICIyLjguNCIsCiAgIl9ub2RlVmVyc2lvbiI6ICIxLjQuMiIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAiaXNhYWNzIiwKICAgICJlbWFpbCI6ICJpc2FhY3NAbnBtanMuY29tIgogIH0sCiAgImRpc3QiOiB7CiAgICAic2hhc3VtIjogIjc3NzQxNjM4YzZkYzk3MmU1MDNkYmU0MWRjYjZiZmRmYmE0OTlhMzgiLAogICAgInRhcmJhbGwiOiAiaHR0cDovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9scnUtY2FjaGUvLS9scnUtY2FjaGUtMi42LjIudGd6IgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJpc2FhY3MiLAogICAgICAiZW1haWwiOiAiaUBpenMubWUiCiAgICB9CiAgXSwKICAiZGlyZWN0b3JpZXMiOiB7fSwKICAiX3Jlc29sdmVkIjogImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL2xydS1jYWNoZS8tL2xydS1jYWNoZS0yLjYuMi50Z3oiLAogICJyZWFkbWUiOiAiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kISIKfQo=","6590f59d9cf842e95afe0b5f899e0e24":"NjU5MGY1OWQ5Y2Y4NDJlOTVhZmUwYjVmODk5ZTBlMjQ=","f18c338b94236d2bd71748fd389bdd03":"ewogICJuYW1lIjogInNpZ211bmQiLAogICJ2ZXJzaW9uIjogIjEuMC4wIiwKICAiZGVzY3JpcHRpb24iOiAiUXVpY2sgYW5kIGRpcnR5IHNpZ25hdHVyZXMgZm9yIE9iamVjdHMuIiwKICAibWFpbiI6ICJzaWdtdW5kLmpzIiwKICAiZGlyZWN0b3JpZXMiOiB7CiAgICAidGVzdCI6ICJ0ZXN0IgogIH0sCiAgImRlcGVuZGVuY2llcyI6IHt9LAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAidGFwIjogIn4wLjMuMCIKICB9LAogICJzY3JpcHRzIjogewogICAgInRlc3QiOiAidGFwIHRlc3QvKi5qcyIsCiAgICAiYmVuY2giOiAibm9kZSBiZW5jaC5qcyIKICB9LAogICJyZXBvc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0Oi8vZ2l0aHViLmNvbS9pc2FhY3Mvc2lnbXVuZCIKICB9LAogICJrZXl3b3JkcyI6IFsKICAgICJvYmplY3QiLAogICAgInNpZ25hdHVyZSIsCiAgICAia2V5IiwKICAgICJkYXRhIiwKICAgICJwc3ljaG9hbmFseXNpcyIKICBdLAogICJhdXRob3IiOiB7CiAgICAibmFtZSI6ICJJc2FhYyBaLiBTY2hsdWV0ZXIiLAogICAgImVtYWlsIjogImlAaXpzLm1lIiwKICAgICJ1cmwiOiAiaHR0cDovL2Jsb2cuaXpzLm1lLyIKICB9LAogICJsaWNlbnNlIjogIkJTRCIsCiAgInJlYWRtZSI6ICIjIHNpZ211bmRcblxuUXVpY2sgYW5kIGRpcnR5IHNpZ25hdHVyZXMgZm9yIE9iamVjdHMuXG5cblRoaXMgaXMgbGlrZSBhIG11Y2ggZmFzdGVyIGBkZWVwRXF1YWxzYCBjb21wYXJpc29uLCB3aGljaCByZXR1cm5zIGFcbnN0cmluZyBrZXkgc3VpdGFibGUgZm9yIGNhY2hlcyBhbmQgdGhlIGxpa2UuXG5cbiMjIFVzYWdlXG5cbmBgYGphdmFzY3JpcHRcbmZ1bmN0aW9uIGRvU29tZXRoaW5nIChzb21lT2JqKSB7XG4gIHZhciBrZXkgPSBzaWdtdW5kKHNvbWVPYmosIG1heERlcHRoKSAvLyBtYXggZGVwdGggZGVmYXVsdHMgdG8gMTBcbiAgdmFyIGNhY2hlZCA9IGNhY2hlLmdldChrZXkpXG4gIGlmIChjYWNoZWQpIHJldHVybiBjYWNoZWQpXG5cbiAgdmFyIHJlc3VsdCA9IGV4cGVuc2l2ZUNhbGN1bGF0aW9uKHNvbWVPYmopXG4gIGNhY2hlLnNldChrZXksIHJlc3VsdClcbiAgcmV0dXJuIHJlc3VsdFxufVxuYGBgXG5cblRoZSByZXN1bHRpbmcga2V5IHdpbGwgYmUgYXMgdW5pcXVlIGFuZCByZXByb2R1Y2libGUgYXMgY2FsbGluZ1xuYEpTT04uc3RyaW5naWZ5YCBvciBgdXRpbC5pbnNwZWN0YCBvbiB0aGUgb2JqZWN0LCBidXQgaXMgbXVjaCBmYXN0ZXIuXG5JbiBvcmRlciB0byBhY2hpZXZlIHRoaXMgc3BlZWQsIHNvbWUgZGlmZmVyZW5jZXMgYXJlIGdsb3NzZWQgb3Zlci5cbkZvciBleGFtcGxlLCB0aGUgb2JqZWN0IGB7MDonZm9vJ31gIHdpbGwgYmUgdHJlYXRlZCBpZGVudGljYWxseSB0byB0aGVcbmFycmF5IGBbJ2ZvbyddYC5cblxuQWxzbywganVzdCBhcyB0aGVyZSBpcyBubyB3YXkgdG8gc3VtbW9uIHRoZSBzb3VsIGZyb20gdGhlIHNjcmliYmxpbmdzXG5vZiBhIGNvY2Fpbi1hZGRsZWQgcHN5Y2hvYW5hbHlzdCwgdGhlcmUgaXMgbm8gd2F5IHRvIHJldml2ZSB0aGUgb2JqZWN0XG5mcm9tIHRoZSBzaWduYXR1cmUgc3RyaW5nIHRoYXQgc2lnbXVuZCBnaXZlcyB5b3UuICBJbiBmYWN0LCBpdCdzXG5iYXJlbHkgZXZlbiByZWFkYWJsZS5cblxuQXMgd2l0aCBgc3lzLmluc3BlY3RgIGFuZCBgSlNPTi5zdHJpbmdpZnlgLCBsYXJnZXIgb2JqZWN0cyB3aWxsXG5wcm9kdWNlIGxhcmdlciBzaWduYXR1cmUgc3RyaW5ncy5cblxuQmVjYXVzZSBzaWdtdW5kIGlzIGEgYml0IGxlc3Mgc3RyaWN0IHRoYW4gdGhlIG1vcmUgdGhvcm91Z2hcbmFsdGVybmF0aXZlcywgdGhlIHN0cmluZ3Mgd2lsbCBiZSBzaG9ydGVyLCBhbmQgYWxzbyB0aGVyZSBpcyBhXG5zbGlnaHRseSBoaWdoZXIgY2hhbmNlIGZvciBjb2xsaXNpb25zLiAgRm9yIGV4YW1wbGUsIHRoZXNlIG9iamVjdHNcbmhhdmUgdGhlIHNhbWUgc2lnbmF0dXJlOlxuXG4gICAgdmFyIG9iajEgPSB7YTonYicsYzovZGVmLyxnOlsnaCcsJ2knLHtqOicnLGs6J2wnfV19XG4gICAgdmFyIG9iajIgPSB7YTonYicsYzonL2RlZi8nLGc6WydoJywnaScsJ3tqa2wnXX1cblxuTGlrZSBhIGdvb2QgRnJldWRpYW4sIHNpZ211bmQgaXMgbW9zdCBlZmZlY3RpdmUgd2hlbiB5b3UgYWxyZWFkeSBoYXZlXG5zb21lIHVuZGVyc3RhbmRpbmcgb2Ygd2hhdCB5b3UncmUgbG9va2luZyBmb3IuICBJdCBjYW4gaGVscCB5b3UgaGVscFxueW91cnNlbGYsIGJ1dCB5b3UgbXVzdCBiZSB3aWxsaW5nIHRvIGRvIHNvbWUgd29yayBhcyB3ZWxsLlxuXG5DeWNsZXMgYXJlIGhhbmRsZWQsIGFuZCBjeWNsaWNhbCBvYmplY3RzIGFyZSBzaWxlbnRseSBvbWl0dGVkICh0aG91Z2hcbnRoZSBrZXkgaXMgaW5jbHVkZWQgaW4gdGhlIHNpZ25hdHVyZSBvdXRwdXQuKVxuXG5UaGUgc2Vjb25kIGFyZ3VtZW50IGlzIHRoZSBtYXhpbXVtIGRlcHRoLCB3aGljaCBkZWZhdWx0cyB0byAxMCxcbmJlY2F1c2UgdGhhdCBpcyB0aGUgbWF4aW11bSBvYmplY3QgdHJhdmVyc2FsIGRlcHRoIGNvdmVyZWQgYnkgbW9zdFxuaW5zdXJhbmNlIGNhcnJpZXJzLlxuIiwKICAiX2lkIjogInNpZ211bmRAMS4wLjAiLAogICJkaXN0IjogewogICAgInNoYXN1bSI6ICI2NmEyYjNhNzQ5YWU4YjVmYjg5ZWZkNGZjYzAxZGM5NGZiZTAyMjk2IiwKICAgICJ0YXJiYWxsIjogImh0dHA6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvc2lnbXVuZC8tL3NpZ211bmQtMS4wLjAudGd6IgogIH0sCiAgIl9ucG1WZXJzaW9uIjogIjEuMS40OCIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAiaXNhYWNzIiwKICAgICJlbWFpbCI6ICJpQGl6cy5tZSIKICB9LAogICJtYWludGFpbmVycyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiaXNhYWNzIiwKICAgICAgImVtYWlsIjogImlAaXpzLm1lIgogICAgfQogIF0sCiAgIl9zaGFzdW0iOiAiNjZhMmIzYTc0OWFlOGI1ZmI4OWVmZDRmY2MwMWRjOTRmYmUwMjI5NiIsCiAgIl9mcm9tIjogInNpZ211bmRAfjEuMC4wIiwKICAiX3Jlc29sdmVkIjogImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL3NpZ211bmQvLS9zaWdtdW5kLTEuMC4wLnRneiIsCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9pc2FhY3Mvc2lnbXVuZC9pc3N1ZXMiCiAgfSwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL2lzYWFjcy9zaWdtdW5kIgp9Cg==","e410aee77c9cf4c364847c88c19b84cc":"ZTQxMGFlZTc3YzljZjRjMzY0ODQ3Yzg4YzE5Yjg0Y2M=","364210f1678d18cebe7b6680a2424be3":"ewogICJhdXRob3IiOiB7CiAgICAibmFtZSI6ICJJc2FhYyBaLiBTY2hsdWV0ZXIiLAogICAgImVtYWlsIjogImlAaXpzLm1lIiwKICAgICJ1cmwiOiAiaHR0cDovL2Jsb2cuaXpzLm1lIgogIH0sCiAgIm5hbWUiOiAibWluaW1hdGNoIiwKICAiZGVzY3JpcHRpb24iOiAiYSBnbG9iIG1hdGNoZXIgaW4gamF2YXNjcmlwdCIsCiAgInZlcnNpb24iOiAiMC4zLjAiLAogICJyZXBvc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0Oi8vZ2l0aHViLmNvbS9pc2FhY3MvbWluaW1hdGNoLmdpdCIKICB9LAogICJtYWluIjogIm1pbmltYXRjaC5qcyIsCiAgInNjcmlwdHMiOiB7CiAgICAidGVzdCI6ICJ0YXAgdGVzdC8qLmpzIgogIH0sCiAgImVuZ2luZXMiOiB7CiAgICAibm9kZSI6ICIqIgogIH0sCiAgImRlcGVuZGVuY2llcyI6IHsKICAgICJscnUtY2FjaGUiOiAiMiIsCiAgICAic2lnbXVuZCI6ICJ+MS4wLjAiCiAgfSwKICAiZGV2RGVwZW5kZW5jaWVzIjogewogICAgInRhcCI6ICIiCiAgfSwKICAibGljZW5zZSI6IHsKICAgICJ0eXBlIjogIk1JVCIsCiAgICAidXJsIjogImh0dHA6Ly9naXRodWIuY29tL2lzYWFjcy9taW5pbWF0Y2gvcmF3L21hc3Rlci9MSUNFTlNFIgogIH0sCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9pc2FhY3MvbWluaW1hdGNoL2lzc3VlcyIKICB9LAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL21pbmltYXRjaCIsCiAgIl9pZCI6ICJtaW5pbWF0Y2hAMC4zLjAiLAogICJfc2hhc3VtIjogIjI3NWQ4ZWRhYWM0ZjFiYjMzMjY0NzIwODllNzk0OWM4Mzk0Njk5ZGQiLAogICJfZnJvbSI6ICJtaW5pbWF0Y2hAMC4zIiwKICAiX25wbVZlcnNpb24iOiAiMS40LjEwIiwKICAiX25wbVVzZXIiOiB7CiAgICAibmFtZSI6ICJpc2FhY3MiLAogICAgImVtYWlsIjogImlAaXpzLm1lIgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJpc2FhY3MiLAogICAgICAiZW1haWwiOiAiaUBpenMubWUiCiAgICB9CiAgXSwKICAiZGlzdCI6IHsKICAgICJzaGFzdW0iOiAiMjc1ZDhlZGFhYzRmMWJiMzMyNjQ3MjA4OWU3OTQ5YzgzOTQ2OTlkZCIsCiAgICAidGFyYmFsbCI6ICJodHRwOi8vcmVnaXN0cnkubnBtanMub3JnL21pbmltYXRjaC8tL21pbmltYXRjaC0wLjMuMC50Z3oiCiAgfSwKICAiZGlyZWN0b3JpZXMiOiB7fSwKICAiX3Jlc29sdmVkIjogImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL21pbmltYXRjaC8tL21pbmltYXRjaC0wLjMuMC50Z3oiLAogICJyZWFkbWUiOiAiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kISIKfQo=","248408a885e454d8c0c68b38f8bf696e":"ewogICJhdXRob3IiOiB7CiAgICAibmFtZSI6ICJJc2FhYyBaLiBTY2hsdWV0ZXIiLAogICAgImVtYWlsIjogImlAaXpzLm1lIiwKICAgICJ1cmwiOiAiaHR0cDovL2Jsb2cuaXpzLm1lLyIKICB9LAogICJuYW1lIjogImdsb2IiLAogICJkZXNjcmlwdGlvbiI6ICJhIGxpdHRsZSBnbG9iYmVyIiwKICAidmVyc2lvbiI6ICIzLjIuMTEiLAogICJyZXBvc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0Oi8vZ2l0aHViLmNvbS9pc2FhY3Mvbm9kZS1nbG9iLmdpdCIKICB9LAogICJtYWluIjogImdsb2IuanMiLAogICJlbmdpbmVzIjogewogICAgIm5vZGUiOiAiKiIKICB9LAogICJkZXBlbmRlbmNpZXMiOiB7CiAgICAiaW5oZXJpdHMiOiAiMiIsCiAgICAibWluaW1hdGNoIjogIjAuMyIKICB9LAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAidGFwIjogIn4wLjQuMCIsCiAgICAibWtkaXJwIjogIjAiLAogICAgInJpbXJhZiI6ICIxIgogIH0sCiAgInNjcmlwdHMiOiB7CiAgICAidGVzdCI6ICJ0YXAgdGVzdC8qLmpzIiwKICAgICJ0ZXN0LXJlZ2VuIjogIlRFU1RfUkVHRU49MSBub2RlIHRlc3QvMDAtc2V0dXAuanMiCiAgfSwKICAibGljZW5zZSI6ICJCU0QiLAogICJnaXRIZWFkIjogIjczZjU3ZTk5NTEwNTgyYjIwMjRiNzYyMzA1OTcwZWJjZjliNzBhYTIiLAogICJidWdzIjogewogICAgInVybCI6ICJodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ2xvYi9pc3N1ZXMiCiAgfSwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL2lzYWFjcy9ub2RlLWdsb2IiLAogICJfaWQiOiAiZ2xvYkAzLjIuMTEiLAogICJfc2hhc3VtIjogIjRhOTczZjYzNWI5MTkwZjcxNWQxMDk4N2Q1YzAwZmQyODE1ZWJlM2QiLAogICJfZnJvbSI6ICJnbG9iQH4zLjIuNiIsCiAgIl9ucG1WZXJzaW9uIjogIjEuNC4xMCIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAiaXNhYWNzIiwKICAgICJlbWFpbCI6ICJpQGl6cy5tZSIKICB9LAogICJtYWludGFpbmVycyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiaXNhYWNzIiwKICAgICAgImVtYWlsIjogImlAaXpzLm1lIgogICAgfQogIF0sCiAgImRpc3QiOiB7CiAgICAic2hhc3VtIjogIjRhOTczZjYzNWI5MTkwZjcxNWQxMDk4N2Q1YzAwZmQyODE1ZWJlM2QiLAogICAgInRhcmJhbGwiOiAiaHR0cDovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9nbG9iLy0vZ2xvYi0zLjIuMTEudGd6IgogIH0sCiAgImRpcmVjdG9yaWVzIjoge30sCiAgIl9yZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9nbG9iLy0vZ2xvYi0zLjIuMTEudGd6IiwKICAicmVhZG1lIjogIkVSUk9SOiBObyBSRUFETUUgZGF0YSBmb3VuZCEiCn0K","cb15ef1102902454ba7d7b5da9c478e1":"ewogICJuYW1lIjogImNvbG9ycyIsCiAgImRlc2NyaXB0aW9uIjogImdldCBjb2xvcnMgaW4geW91ciBub2RlLmpzIGNvbnNvbGUgbGlrZSB3aGF0IiwKICAidmVyc2lvbiI6ICIwLjYuMiIsCiAgImF1dGhvciI6IHsKICAgICJuYW1lIjogIk1hcmFrIFNxdWlyZXMiCiAgfSwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL01hcmFrL2NvbG9ycy5qcyIsCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9NYXJhay9jb2xvcnMuanMvaXNzdWVzIgogIH0sCiAgImtleXdvcmRzIjogWwogICAgImFuc2kiLAogICAgInRlcm1pbmFsIiwKICAgICJjb2xvcnMiCiAgXSwKICAicmVwb3NpdG9yeSI6IHsKICAgICJ0eXBlIjogImdpdCIsCiAgICAidXJsIjogImh0dHA6Ly9naXRodWIuY29tL01hcmFrL2NvbG9ycy5qcy5naXQiCiAgfSwKICAiZW5naW5lcyI6IHsKICAgICJub2RlIjogIj49MC4xLjkwIgogIH0sCiAgIm1haW4iOiAiY29sb3JzIiwKICAiX2lkIjogImNvbG9yc0AwLjYuMiIsCiAgImRpc3QiOiB7CiAgICAic2hhc3VtIjogIjI0MjNmZTY2NzhhYzBjNWRhZTg4NTJlNWQwZTViZTA4Yzk5N2FiY2MiLAogICAgInRhcmJhbGwiOiAiaHR0cDovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9jb2xvcnMvLS9jb2xvcnMtMC42LjIudGd6IgogIH0sCiAgIl9mcm9tIjogImNvbG9yc0AwLjYueCIsCiAgIl9ucG1WZXJzaW9uIjogIjEuMi4zMCIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAibWFyYWsiLAogICAgImVtYWlsIjogIm1hcmFrLnNxdWlyZXNAZ21haWwuY29tIgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJtYXJhayIsCiAgICAgICJlbWFpbCI6ICJtYXJhay5zcXVpcmVzQGdtYWlsLmNvbSIKICAgIH0KICBdLAogICJkaXJlY3RvcmllcyI6IHt9LAogICJfc2hhc3VtIjogIjI0MjNmZTY2NzhhYzBjNWRhZTg4NTJlNWQwZTViZTA4Yzk5N2FiY2MiLAogICJfcmVzb2x2ZWQiOiAiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvY29sb3JzLy0vY29sb3JzLTAuNi4yLnRneiIsCiAgInJlYWRtZSI6ICJFUlJPUjogTm8gUkVBRE1FIGRhdGEgZm91bmQhIiwKICAic2NyaXB0cyI6IHt9Cn0K","7d21c7d01fda6d466a46e2a40c0b076e":"ewogICJuYW1lIjogInRlc3RpZnkiLAogICJ2ZXJzaW9uIjogIjAuMy4wIiwKICAiZGVzY3JpcHRpb24iOiAic2ltcGxlIGFzeW5jaHJvbm91cyB0ZXN0aW5nIHVzaW5nIGFzc2VydGlvbnMgb2YgeW91ciBjaG9pY2UiLAogICJtYWluIjogInNyYy90ZXN0aWZ5LmNvZmZlZSIsCiAgImJpbiI6IHsKICAgICJ0ZXN0aWZ5IjogImJpbi90ZXN0aWZ5IgogIH0sCiAgImZpbGVzIjogWwogICAgInNyYyIsCiAgICAiYmluLyIsCiAgICAiUkVBRE1FLm1kIgogIF0sCiAgImRlcGVuZGVuY2llcyI6IHsKICAgICJjb2ZmZWUtc2NyaXB0IjogIj49MC40LjAiLAogICAgImNvbG9ycyI6ICIwLjYueCIKICB9LAogICJyZXBvc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0QGdpdGh1Yi5jb206YXV0b21hdHRoZXcvdGVzdGlmeS5naXQiCiAgfSwKICAiYXV0aG9yIjogewogICAgIm5hbWUiOiAiTWF0dGhldyBLaW5nIiwKICAgICJlbWFpbCI6ICJhdXRvbWF0dGhld0BnbWFpbC5jb20iCiAgfSwKICAibGljZW5zZSI6ICJNSVQiLAogICJnaXRIZWFkIjogImVkZDFjZWNjMDc4MTk4N2IyY2U5N2Q2MTcwZTc4NTZkZDIxYThiM2IiLAogICJidWdzIjogewogICAgInVybCI6ICJodHRwczovL2dpdGh1Yi5jb20vYXV0b21hdHRoZXcvdGVzdGlmeS9pc3N1ZXMiCiAgfSwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL2F1dG9tYXR0aGV3L3Rlc3RpZnkiLAogICJfaWQiOiAidGVzdGlmeUAwLjMuMCIsCiAgInNjcmlwdHMiOiB7fSwKICAiX3NoYXN1bSI6ICI0ZjI3N2FmNTEyYjU4YzVjNTdhYjE5ZmU2NjA1OTY1MDYxMDYyMGVhIiwKICAiX2Zyb20iOiAidGVzdGlmeUBeMC4zLjAiLAogICJfbnBtVmVyc2lvbiI6ICIxLjQuMTYiLAogICJfbnBtVXNlciI6IHsKICAgICJuYW1lIjogImF1dG9tYXR0aGV3IiwKICAgICJlbWFpbCI6ICJhdXRvbWF0dGhld0BnbWFpbC5jb20iCiAgfSwKICAibWFpbnRhaW5lcnMiOiBbCiAgICB7CiAgICAgICJuYW1lIjogImF1dG9tYXR0aGV3IiwKICAgICAgImVtYWlsIjogImF1dG9tYXR0aGV3QGdtYWlsLmNvbSIKICAgIH0KICBdLAogICJkaXN0IjogewogICAgInNoYXN1bSI6ICI0ZjI3N2FmNTEyYjU4YzVjNTdhYjE5ZmU2NjA1OTY1MDYxMDYyMGVhIiwKICAgICJ0YXJiYWxsIjogImh0dHA6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvdGVzdGlmeS8tL3Rlc3RpZnktMC4zLjAudGd6IgogIH0sCiAgImRpcmVjdG9yaWVzIjoge30sCiAgIl9yZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy90ZXN0aWZ5Ly0vdGVzdGlmeS0wLjMuMC50Z3oiLAogICJyZWFkbWUiOiAiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kISIKfQo=","fb0af819920efafd60e3dd09a43e4816":"ZmIwYWY4MTk5MjBlZmFmZDYwZTNkZDA5YTQzZTQ4MTY=","a086f5e1525818f1ec0007950761c180":"YTA4NmY1ZTE1MjU4MThmMWVjMDAwNzk1MDc2MWMxODA=","ae4a35de06d401449ed2ceb422083a5c":"YWU0YTM1ZGUwNmQ0MDE0NDllZDJjZWI0MjIwODNhNWM=","b7bac5f3a9a771d0eaaf24eea0fd6281":"YjdiYWM1ZjNhOWE3NzFkMGVhYWYyNGVlYTBmZDYyODE=","a1a7c2c986b4e93caa6b192d14e30a95":"YTFhN2MyYzk4NmI0ZTkzY2FhNmIxOTJkMTRlMzBhOTU=","c4f9141dbd0d7a4e3dd3d1dc0a64c667":"YzRmOTE0MWRiZDBkN2E0ZTNkZDNkMWRjMGE2NGM2Njc=","5d6e2c2d895132330e91af96bc1409c7":"NWQ2ZTJjMmQ4OTUxMzIzMzBlOTFhZjk2YmMxNDA5Yzc=","bb74bebad46ddddc2a292472e1e4766b":"YmI3NGJlYmFkNDZkZGRkYzJhMjkyNDcyZTFlNDc2NmI=","e78828afe729e92d62b73d30c483888f":"ZTc4ODI4YWZlNzI5ZTkyZDYyYjczZDMwYzQ4Mzg4OGY=","223f09f17e4aff9f2d05493c688f7934":"MjIzZjA5ZjE3ZTRhZmY5ZjJkMDU0OTNjNjg4Zjc5MzQ=","ddeff58ff67e5d2d686891fc66ebb2b7":"ZGRlZmY1OGZmNjdlNWQyZDY4Njg5MWZjNjZlYmIyYjc=","7b51c3f0555ccb0c0f1fcd91d389ea1a":"N2I1MWMzZjA1NTVjY2IwYzBmMWZjZDkxZDM4OWVhMWE=","d0c9d6cc2490c964b789d43ae4803b7b":"ZDBjOWQ2Y2MyNDkwYzk2NGI3ODlkNDNhZTQ4MDNiN2I=","b499eb63a89b9e6fb99ef1209a65ace6":"YjQ5OWViNjNhODliOWU2ZmI5OWVmMTIwOWE2NWFjZTY=","54c69a095dc8e4a9173bd8284c4e8ad7":"NTRjNjlhMDk1ZGM4ZTRhOTE3M2JkODI4NGM0ZThhZDc=","f0d5935f094eb3d9fb70c67795bd4caf":"ZjBkNTkzNWYwOTRlYjNkOWZiNzBjNjc3OTViZDRjYWY=","a8aae685be6eeb8ec844ae9c4f5fd189":"YThhYWU2ODViZTZlZWI4ZWM4NDRhZTljNGY1ZmQxODk="},
      modules: {
        api: {"assert":"c4f9141dbd0d7a4e3dd3d1dc0a64c667","http":"5d6e2c2d895132330e91af96bc1409c7","https":"bb74bebad46ddddc2a292472e1e4766b","fs":"e78828afe729e92d62b73d30c483888f","module":"223f09f17e4aff9f2d05493c688f7934","util":"ddeff58ff67e5d2d686891fc66ebb2b7","path":"7b51c3f0555ccb0c0f1fcd91d389ea1a","url":"d0c9d6cc2490c964b789d43ae4803b7b","events":"b499eb63a89b9e6fb99ef1209a65ace6","querystring":"54c69a095dc8e4a9173bd8284c4e8ad7","stream":"f0d5935f094eb3d9fb70c67795bd4caf","crypto":"a8aae685be6eeb8ec844ae9c4f5fd189"},
        function: {
          
            "b8ccd15313f6ed0ffa64a9936c67ab37": // from: application.coffee
function(exports,require,module,__filename,__dirname) {
var Testify, assert, draft4, schema, suite, valid;

Testify = require("testify");

assert = require("assert");

draft4 = require("jsck").draft4;

suite = require("json-schema-tests");

schema = require("./complex");

valid = require("./valid_complex");

window.onload = function() {
  Testify.reporter = new Testify.DOMReporter("testify", 1000);
  return Testify.test("JSCK Browser Testing", function(context) {
    return context.test("basic", function(context) {
      var validator;
      validator = new draft4(schema);
      context.test("valid", function() {
        var result;
        result = validator.validate(valid);
        return assert.equal(result.valid, true);
      });
      return context.test("invalid", function() {
        var result;
        result = validator.validate({
          foo: null
        });
        return assert.equal(result.valid, false);
      });
    });
  });
};
  
}
,
          
            "fd9fab0350fade8734d83c730d6c4d0e": // from: complex.coffee
function(exports,require,module,__filename,__dirname) {

module.exports = {
  type: "array",
  items: {
    $ref: "#transaction"
  },
  minItems: 1,
  definitions: {
    base58: {
      id: "#base58",
      type: "string",
      pattern: "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$"
    },
    hex: {
      id: "#hex",
      type: "string",
      pattern: "^[0123456789A-Fa-f]+$"
    },
    tx_id: {
      id: "#tx_id",
      allOf: [
        {
          $ref: "#hex"
        }, {
          minLength: 64,
          maxLength: 64
        }
      ]
    },
    address: {
      id: "#address",
      allOf: [
        {
          $ref: "#base58"
        }, {
          minLength: 34,
          maxLength: 34
        }
      ]
    },
    signature: {
      id: "#signature",
      allOf: [
        {
          $ref: "#hex"
        }, {
          minLength: 128,
          maxLength: 128
        }
      ]
    },
    transaction: {
      id: "#transaction",
      additionalProperties: false,
      required: ["metadata", "hash", "inputs", "outputs"],
      properties: {
        metadata: {
          type: "object",
          required: ["amount", "fee"],
          properties: {
            amount: {
              type: "integer"
            },
            fee: {
              type: "integer",
              multipleOf: 10000
            },
            status: {
              type: "string",
              "enum": ["unsigned", "unconfirmed", "confirmed", "invalid"]
            },
            confirmations: {
              type: "integer",
              minimum: 0
            },
            block_time: {
              type: "integer"
            }
          }
        },
        version: {
          type: "integer"
        },
        lock_time: {
          type: "integer"
        },
        hash: {
          $ref: "#tx_id"
        },
        inputs: {
          type: "array",
          items: {
            $ref: "#input"
          },
          minItems: 1
        },
        outputs: {
          type: "array",
          items: {
            $ref: "#output"
          },
          minItems: 1
        }
      }
    },
    input: {
      id: "#input",
      type: "object",
      additionalProperties: false,
      required: ["index", "output", "script_sig"],
      properties: {
        index: {
          type: "integer",
          minimum: 0
        },
        output: {
          $ref: "#output"
        },
        sig_hash: {
          $ref: "#hex"
        },
        script_sig: {
          $ref: "#hex"
        },
        signatures: {
          type: "object",
          description: "A dictionary of signatures.  Keys represent keypair names",
          minProperties: 1,
          maxProperties: 3,
          additionalProperties: {
            $ref: "#signature"
          }
        }
      }
    },
    output: {
      id: "#output",
      type: "object",
      additionalProperties: false,
      required: ["hash", "index", "value", "script"],
      properties: {
        hash: {
          $ref: "#tx_id"
        },
        index: {
          type: "integer",
          minimum: 0
        },
        value: {
          type: "integer"
        },
        script: {
          type: "object",
          properties: {
            type: {
              type: "string",
              "enum": ["standard", "p2sh"]
            },
            asm: {
              type: "string"
            }
          }
        },
        address: {
          $ref: "#address"
        },
        metadata: {
          type: "object",
          dependencies: {
            wallet_path: ["public_seeds"]
          },
          properties: {
            wallet_path: {
              type: "string"
            },
            public_seeds: {
              type: "object",
              minProperties: 1,
              maxProperties: 3,
              additionalProperties: {
                anyOf: [
                  {
                    $ref: "#base58"
                  }, {
                    $ref: "#hex"
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
};
  
}
,
          
            "ec8acb6c7d908e7ff9d09cc618a2dabc": // from: valid_complex.coffee
function(exports,require,module,__filename,__dirname) {
var $;

$ = module.exports = [];

$.push({
  metadata: {
    amount: 38043749285,
    fee: 2 * 10000,
    status: "confirmed",
    confirmations: 73,
    block_time: 1415993584376
  },
  version: 1,
  lock_time: 0,
  hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
  inputs: [
    {
      index: 0,
      script_sig: "3046022100be69797cf5d784412b1258256eb657c191a04893479dfa2ae5c7f2088c7adbe0022100e6b000bd633b286ed1b9bc7682fe753d9fdad61fbe5da2a6e9444198e33a670f01",
      signatures: {
        primary: "3046022100be69797cf5d784412b1258256eb657c191a04893479dfa2ae5c7f2088c7adbe0022100e6b000bd633b286ed1b9bc7682fe753d9fdad61fbe5da2a7",
        cosigner: "a2ad5ebf16dadf9d357ef2867cb9b1de682b336db000b6e0012200ebda7c8802f7c5ea2afd97439840a191c756be6528521b214487d5fc79796eb00122064037"
      },
      output: {
        hash: "6b040cd7a4676b5c7b11f144e73c1958c177fcd79e934f6be8ce02c8cd12546d",
        index: 1,
        value: 38043749285,
        script: {
          type: "standard",
          asm: "OP_DUP OP_HASH160 7d4e6d55e1dffb0df85f509343451d170d147551 OP_EQUALVERIFY OP_CHECKSIG"
        }
      }
    }
  ],
  outputs: [
    {
      hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
      index: 0,
      value: 38042249285,
      script: {
        type: "standard",
        asm: "OP_DUP OP_HASH160 7d4e6d55e1dffb0df85f509343451d170d147551 OP_EQUALVERIFY OP_CHECKSIG"
      },
      address: "1CRZRBwfuwUaVSPJtd6DBuezbm7XPBHLa1",
      metadata: {
        type: "change",
        wallet_path: "m/44/0/1/356",
        public_seeds: {
          primary: "xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8",
          cosigner: "xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8"
        }
      }
    }, {
      hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
      index: 1,
      value: 1500000,
      script: {
        type: "standard",
        asm: "OP_DUP OP_HASH160 3bc576e6960a9d45201ba5087e39224d0a05a079 OP_EQUALVERIFY OP_CHECKSIG"
      },
      address: "16T3RPZLmxtXQCgWi1S8kef5Ca6jqXhoeT"
    }
  ]
});

$.push({
  metadata: {
    amount: 38043749285,
    fee: 2 * 10000,
    status: "unconfirmed",
    confirmations: 73,
    block_time: 1415993584376
  },
  version: 1,
  lock_time: 0,
  hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
  inputs: [
    {
      index: 0,
      script_sig: "3046022100be69797cf5d784412b1258256eb657c191a04893479dfa2ae5c7f2088c7adbe0022100e6b000bd633b286ed1b9bc7682fe753d9fdad61fbe5da2a6e9444198e33a670f01",
      output: {
        hash: "6b040cd7a4676b5c7b11f144e73c1958c177fcd79e934f6be8ce02c8cd12546d",
        index: 1,
        value: 38043749285,
        script: {
          type: "standard",
          asm: "OP_DUP OP_HASH160 7d4e6d55e1dffb0df85f509343451d170d147551 OP_EQUALVERIFY OP_CHECKSIG"
        }
      }
    }
  ],
  outputs: [
    {
      hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
      index: 0,
      value: 38042249285,
      script: {
        type: "standard",
        asm: "OP_DUP OP_HASH160 7d4e6d55e1dffb0df85f509343451d170d147551 OP_EQUALVERIFY OP_CHECKSIG"
      },
      address: "1CRZRBwfuwUaVSPJtd6DBuezbm7XPBHLa1",
      metadata: {
        type: "change"
      }
    }, {
      hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
      index: 1,
      value: 1500000,
      script: {
        type: "standard",
        asm: "OP_DUP OP_HASH160 3bc576e6960a9d45201ba5087e39224d0a05a079 OP_EQUALVERIFY OP_CHECKSIG"
      },
      address: "16T3RPZLmxtXQCgWi1S8kef5Ca6jqXhoeT"
    }
  ]
});

$.push({
  metadata: {
    amount: 38043749285,
    fee: 2 * 10000,
    status: "unconfirmed",
    confirmations: 73,
    block_time: 1415993584376
  },
  version: 1,
  lock_time: 0,
  hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
  inputs: [
    {
      index: 0,
      script_sig: "3046022100be69797cf5d784412b1258256eb657c191a04893479dfa2ae5c7f2088c7adbe0022100e6b000bd633b286ed1b9bc7682fe753d9fdad61fbe5da2a6e9444198e33a670f01",
      output: {
        hash: "6b040cd7a4676b5c7b11f144e73c1958c177fcd79e934f6be8ce02c8cd12546d",
        index: 1,
        value: 38043749285,
        script: {
          type: "standard",
          asm: "OP_DUP OP_HASH160 7d4e6d55e1dffb0df85f509343451d170d147551 OP_EQUALVERIFY OP_CHECKSIG"
        }
      }
    }
  ],
  outputs: [
    {
      hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
      index: 0,
      value: 38042249285,
      script: {
        type: "standard",
        asm: "OP_DUP OP_HASH160 7d4e6d55e1dffb0df85f509343451d170d147551 OP_EQUALVERIFY OP_CHECKSIG"
      },
      address: "1CRZRBwfuwUaVSPJtd6DBuezbm7XPBHLa1",
      metadata: {
        type: "change"
      }
    }, {
      hash: "60c1f1a3160042152114e2bba45600a5045711c3a8a458016248acec59653471",
      index: 1,
      value: 1500000,
      script: {
        type: "standard",
        asm: "OP_DUP OP_HASH160 3bc576e6960a9d45201ba5087e39224d0a05a079 OP_EQUALVERIFY OP_CHECKSIG"
      },
      address: "16T3RPZLmxtXQCgWi1S8kef5Ca6jqXhoeT"
    }
  ]
});
  
}
,
          
            "23a08b63b337fc80259e39814c3304f5": // from: node_modules/json-schema-tests/node_modules/testify/node_modules/colors/colors.js
function(exports,require,module,__filename,__dirname) {
/*
colors.js

Copyright (c) 2010

Marak Squires
Alexis Sellier (cloudhead)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var isHeadless = false;

if (typeof module !== 'undefined') {
  isHeadless = true;
}

if (!isHeadless) {
  var exports = {};
  var module = {};
  var colors = exports;
  exports.mode = "browser";
} else {
  exports.mode = "console";
}

//
// Prototypes the string object to have additional method calls that add terminal colors
//
var addProperty = function (color, func) {
  exports[color] = function (str) {
    return func.apply(str);
  };
  String.prototype.__defineGetter__(color, func);
};

function stylize(str, style) {

  var styles;

  if (exports.mode === 'console') {
    styles = {
      //styles
      'bold'      : ['\x1B[1m',  '\x1B[22m'],
      'italic'    : ['\x1B[3m',  '\x1B[23m'],
      'underline' : ['\x1B[4m',  '\x1B[24m'],
      'inverse'   : ['\x1B[7m',  '\x1B[27m'],
      'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
      //text colors
      //grayscale
      'white'     : ['\x1B[37m', '\x1B[39m'],
      'grey'      : ['\x1B[90m', '\x1B[39m'],
      'black'     : ['\x1B[30m', '\x1B[39m'],
      //colors
      'blue'      : ['\x1B[34m', '\x1B[39m'],
      'cyan'      : ['\x1B[36m', '\x1B[39m'],
      'green'     : ['\x1B[32m', '\x1B[39m'],
      'magenta'   : ['\x1B[35m', '\x1B[39m'],
      'red'       : ['\x1B[31m', '\x1B[39m'],
      'yellow'    : ['\x1B[33m', '\x1B[39m'],
      //background colors
      //grayscale
      'whiteBG'     : ['\x1B[47m', '\x1B[49m'],
      'greyBG'      : ['\x1B[49;5;8m', '\x1B[49m'],
      'blackBG'     : ['\x1B[40m', '\x1B[49m'],
      //colors
      'blueBG'      : ['\x1B[44m', '\x1B[49m'],
      'cyanBG'      : ['\x1B[46m', '\x1B[49m'],
      'greenBG'     : ['\x1B[42m', '\x1B[49m'],
      'magentaBG'   : ['\x1B[45m', '\x1B[49m'],
      'redBG'       : ['\x1B[41m', '\x1B[49m'],
      'yellowBG'    : ['\x1B[43m', '\x1B[49m']
    };
  } else if (exports.mode === 'browser') {
    styles = {
      //styles
      'bold'      : ['<b>',  '</b>'],
      'italic'    : ['<i>',  '</i>'],
      'underline' : ['<u>',  '</u>'],
      'inverse'   : ['<span style="background-color:black;color:white;">',  '</span>'],
      'strikethrough' : ['<del>',  '</del>'],
      //text colors
      //grayscale
      'white'     : ['<span style="color:white;">',   '</span>'],
      'grey'      : ['<span style="color:gray;">',    '</span>'],
      'black'     : ['<span style="color:black;">',   '</span>'],
      //colors
      'blue'      : ['<span style="color:blue;">',    '</span>'],
      'cyan'      : ['<span style="color:cyan;">',    '</span>'],
      'green'     : ['<span style="color:green;">',   '</span>'],
      'magenta'   : ['<span style="color:magenta;">', '</span>'],
      'red'       : ['<span style="color:red;">',     '</span>'],
      'yellow'    : ['<span style="color:yellow;">',  '</span>'],
      //background colors
      //grayscale
      'whiteBG'     : ['<span style="background-color:white;">',   '</span>'],
      'greyBG'      : ['<span style="background-color:gray;">',    '</span>'],
      'blackBG'     : ['<span style="background-color:black;">',   '</span>'],
      //colors
      'blueBG'      : ['<span style="background-color:blue;">',    '</span>'],
      'cyanBG'      : ['<span style="background-color:cyan;">',    '</span>'],
      'greenBG'     : ['<span style="background-color:green;">',   '</span>'],
      'magentaBG'   : ['<span style="background-color:magenta;">', '</span>'],
      'redBG'       : ['<span style="background-color:red;">',     '</span>'],
      'yellowBG'    : ['<span style="background-color:yellow;">',  '</span>']
    };
  } else if (exports.mode === 'none') {
    return str + '';
  } else {
    console.log('unsupported mode, try "browser", "console" or "none"');
  }
  return styles[style][0] + str + styles[style][1];
}

function applyTheme(theme) {

  //
  // Remark: This is a list of methods that exist
  // on String that you should not overwrite.
  //
  var stringPrototypeBlacklist = [
    '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', 'charAt', 'constructor',
    'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf', 'charCodeAt',
    'indexOf', 'lastIndexof', 'length', 'localeCompare', 'match', 'replace', 'search', 'slice', 'split', 'substring',
    'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight'
  ];

  Object.keys(theme).forEach(function (prop) {
    if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
      console.log('warn: '.red + ('String.prototype' + prop).magenta + ' is probably something you don\'t want to override. Ignoring style name');
    }
    else {
      if (typeof(theme[prop]) === 'string') {
        addProperty(prop, function () {
          return exports[theme[prop]](this);
        });
      }
      else {
        addProperty(prop, function () {
          var ret = this;
          for (var t = 0; t < theme[prop].length; t++) {
            ret = exports[theme[prop][t]](ret);
          }
          return ret;
        });
      }
    }
  });
}


//
// Iterate through all default styles and colors
//
var x = ['bold', 'underline', 'strikethrough', 'italic', 'inverse', 'grey', 'black', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta', 'greyBG', 'blackBG', 'yellowBG', 'redBG', 'greenBG', 'blueBG', 'whiteBG', 'cyanBG', 'magentaBG'];
x.forEach(function (style) {

  // __defineGetter__ at the least works in more browsers
  // http://robertnyman.com/javascript/javascript-getters-setters.html
  // Object.defineProperty only works in Chrome
  addProperty(style, function () {
    return stylize(this, style);
  });
});

function sequencer(map) {
  return function () {
    if (!isHeadless) {
      return this.replace(/( )/, '$1');
    }
    var exploded = this.split(""), i = 0;
    exploded = exploded.map(map);
    return exploded.join("");
  };
}

var rainbowMap = (function () {
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
  return function (letter, i, exploded) {
    if (letter === " ") {
      return letter;
    } else {
      return stylize(letter, rainbowColors[i++ % rainbowColors.length]);
    }
  };
})();

exports.themes = {};

exports.addSequencer = function (name, map) {
  addProperty(name, sequencer(map));
};

exports.addSequencer('rainbow', rainbowMap);
exports.addSequencer('zebra', function (letter, i, exploded) {
  return i % 2 === 0 ? letter : letter.inverse;
});

exports.setTheme = function (theme) {
  if (typeof theme === 'string') {
    try {
      exports.themes[theme] = require(theme);
      applyTheme(exports.themes[theme]);
      return exports.themes[theme];
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    applyTheme(theme);
  }
};


addProperty('stripColors', function () {
  return ("" + this).replace(/\x1B\[\d+m/g, '');
});

// please no
function zalgo(text, options) {
  var soul = {
    "up" : [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚'
    ],
    "down" : [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣'
    ],
    "mid" : [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉'
    ]
  },
  all = [].concat(soul.up, soul.down, soul.mid),
  zalgo = {};

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function is_char(character) {
    var bool = false;
    all.filter(function (i) {
      bool = (i === character);
    });
    return bool;
  }

  function heComes(text, options) {
    var result = '', counts, l;
    options = options || {};
    options["up"] = options["up"] || true;
    options["mid"] = options["mid"] || true;
    options["down"] = options["down"] || true;
    options["size"] = options["size"] || "maxi";
    text = text.split('');
    for (l in text) {
      if (is_char(l)) {
        continue;
      }
      result = result + text[l];
      counts = {"up" : 0, "down" : 0, "mid" : 0};
      switch (options.size) {
      case 'mini':
        counts.up = randomNumber(8);
        counts.min = randomNumber(2);
        counts.down = randomNumber(8);
        break;
      case 'maxi':
        counts.up = randomNumber(16) + 3;
        counts.min = randomNumber(4) + 1;
        counts.down = randomNumber(64) + 3;
        break;
      default:
        counts.up = randomNumber(8) + 1;
        counts.mid = randomNumber(6) / 2;
        counts.down = randomNumber(8) + 1;
        break;
      }

      var arr = ["up", "mid", "down"];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0 ; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  return heComes(text);
}


// don't summon zalgo
addProperty('zalgo', function () {
  return zalgo(this);
});
  
}
,
          
            "d6a358179f5edaab86caf4d73a100b9a": // from: node_modules/json-schema-tests/node_modules/testify/node_modules/colors/example.js
function(exports,require,module,__filename,__dirname) {
var colors = require('./colors');

//colors.mode = "browser";

var test = colors.red("hopefully colorless output");
console.log('Rainbows are fun!'.rainbow);
console.log('So '.italic + 'are'.underline + ' styles! '.bold + 'inverse'.inverse); // styles not widely supported
console.log('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported
//console.log('zalgo time!'.zalgo);
console.log(test.stripColors);
console.log("a".grey + " b".black);
console.log("Zebras are so fun!".zebra);
console.log('background color attack!'.black.whiteBG)

//
// Remark: .strikethrough may not work with Mac OS Terminal App
//
console.log("This is " + "not".strikethrough + " fun.");
console.log(colors.rainbow('Rainbows are fun!'));
console.log(colors.italic('So ') + colors.underline('are') + colors.bold(' styles! ') + colors.inverse('inverse')); // styles not widely supported
console.log(colors.bold(colors.italic(colors.underline(colors.red('Chains are also cool.'))))); // styles not widely supported
//console.log(colors.zalgo('zalgo time!'));
console.log(colors.stripColors(test));
console.log(colors.grey("a") + colors.black(" b"));

colors.addSequencer("america", function(letter, i, exploded) {
  if(letter === " ") return letter;
  switch(i%3) {
    case 0: return letter.red;
    case 1: return letter.white;
    case 2: return letter.blue;
  }
});

colors.addSequencer("random", (function() {
  var available = ['bold', 'underline', 'italic', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];

  return function(letter, i, exploded) {
    return letter === " " ? letter : letter[available[Math.round(Math.random() * (available.length - 1))]];
  };
})());

console.log("AMERICA! F--K YEAH!".america);
console.log("So apparently I've been to Mars, with all the little green men. But you know, I don't recall.".random);

//
// Custom themes
//

// Load theme with JSON literal
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text
console.log("this is an error".error);

// outputs yellow text
console.log("this is a warning".warn);

// outputs grey text
console.log("this is an input".input);

// Load a theme from file
colors.setTheme('./themes/winston-dark.js');

console.log("this is an input".input);

  
}
,
          
            "f281098536a9e02598817e541e8e15a3": // from: node_modules/json-schema-tests/node_modules/testify/node_modules/colors/test.js
function(exports,require,module,__filename,__dirname) {
var assert = require('assert'),
    colors = require('./colors');

var s = 'string';

function a(s, code) {
  return '\x1B[' + code.toString() + 'm' + s + '\x1B[39m';
}

function aE(s, color, code) {
  assert.equal(s[color], a(s, code));
  assert.equal(colors[color](s), a(s, code));
  assert.equal(s[color], colors[color](s));
  assert.equal(s[color].stripColors, s);
  assert.equal(s[color].stripColors, colors.stripColors(s));
}

function h(s, color) {
  return '<span style="color:' + color + ';">' + s + '</span>';
}

var stylesColors = ['white', 'black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];
var stylesAll = stylesColors.concat(['bold', 'italic', 'underline', 'inverse', 'rainbow']);

colors.mode = 'console';
assert.equal(s.bold, '\x1B[1m' + s + '\x1B[22m');
assert.equal(s.italic, '\x1B[3m' + s + '\x1B[23m');
assert.equal(s.underline, '\x1B[4m' + s + '\x1B[24m');
assert.equal(s.strikethrough, '\x1B[9m' + s + '\x1B[29m');
assert.equal(s.inverse, '\x1B[7m' + s + '\x1B[27m');
assert.ok(s.rainbow);
aE(s, 'white', 37);
aE(s, 'grey', 90);
aE(s, 'black', 30);
aE(s, 'blue', 34);
aE(s, 'cyan', 36);
aE(s, 'green', 32);
aE(s, 'magenta', 35);
aE(s, 'red', 31);
aE(s, 'yellow', 33);
assert.equal(s, 'string');

colors.setTheme({error:'red'});

assert.equal(typeof("astring".red),'string');
assert.equal(typeof("astring".error),'string');

colors.mode = 'browser';
assert.equal(s.bold, '<b>' + s + '</b>');
assert.equal(s.italic, '<i>' + s + '</i>');
assert.equal(s.underline, '<u>' + s + '</u>');
assert.equal(s.strikethrough, '<del>' + s + '</del>');
assert.equal(s.inverse, '<span style="background-color:black;color:white;">' + s + '</span>');
assert.ok(s.rainbow);
stylesColors.forEach(function (color) {
  assert.equal(s[color], h(s, color));
  assert.equal(colors[color](s), h(s, color));
});

assert.equal(typeof("astring".red),'string');
assert.equal(typeof("astring".error),'string');

colors.mode = 'none';
stylesAll.forEach(function (style) {
  assert.equal(s[style], s);
  assert.equal(colors[style](s), s);
});

assert.equal(typeof("astring".red),'string');
assert.equal(typeof("astring".error),'string');
  
}
,
          
            "a5e50735f6652e9757ac1c7a63cf85ef": // from: node_modules/json-schema-tests/node_modules/testify/node_modules/colors/themes/winston-dark.js
function(exports,require,module,__filename,__dirname) {
module['exports'] = {
  silly: 'rainbow',
  input: 'black',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
};  
}
,
          
            "8ae0394cb9f1165729513b6c35767b27": // from: node_modules/json-schema-tests/node_modules/testify/node_modules/colors/themes/winston-light.js
function(exports,require,module,__filename,__dirname) {
module['exports'] = {
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
};  
}
,
          
            "792a59c9cd45e9d24a579478940e0b73": // from: node_modules/json-schema-tests/node_modules/testify/src/context.coffee
function(exports,require,module,__filename,__dirname) {
var Context, EventEmitter, FSM,
  __slice = [].slice;

EventEmitter = require("events").EventEmitter;

FSM = require("./minfinite");

module.exports = Context = (function() {

  Context.prototype.on = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (_ref = this.emitter).on.apply(_ref, args);
  };

  Context.prototype.once = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (_ref = this.emitter).once.apply(_ref, args);
  };

  function Context(name, work, parent) {
    var _this = this;
    this.name = name;
    this.work = work;
    this.parent = parent;
    if (this.work.length === 0) {
      this.type = "sync";
    } else {
      this.type = "async";
    }
    if (this.parent) {
      this.level = this.parent.level + 1;
    } else {
      this.level = 0;
    }
    this.children = [];
    this.emitter = new EventEmitter();
    this.fsm = new FSM();
    this.fsm.emitter.once("COMPLETE", function() {
      return _this.emitter.emit("done", _this.result);
    });
    this.fsm.define({
      START: {
        sync_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "SYNC"
        },
        async_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "ASYNC"
        },
        childless: {
          action: function() {},
          next: "CHILDLESS"
        },
        completion: {
          action: function() {
            return _this.notify_parent();
          },
          next: "COMPLETE"
        },
        end_of_block: {
          action: function() {
            return _this.notify_parent();
          },
          next: "COMPLETE"
        }
      },
      SYNC: {
        sync_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "SYNC"
        },
        async_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "ASYNC"
        },
        end_of_block: {
          action: function() {
            return _this.notify_parent();
          },
          next: "COMPLETE"
        },
        completion: {
          action: function() {
            return _this.notify_parent();
          },
          next: "COMPLETE"
        }
      },
      ASYNC: {
        sync_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "ASYNC"
        },
        async_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "ASYNC"
        },
        end_of_block: {
          action: function() {},
          next: "ASYNC"
        },
        completion: {
          action: function() {
            return _this.notify_parent();
          },
          next: "COMPLETE"
        }
      },
      CHILDLESS: {
        sync_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "SYNC"
        },
        async_child: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "ASYNC"
        },
        completion: {
          action: function() {
            return _this.notify_parent();
          },
          next: "COMPLETE"
        }
      },
      COMPLETE: {
        completion: {
          action: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          },
          next: "COMPLETE"
        },
        reset: {
          action: function() {},
          next: "START"
        },
        end_of_block: {
          action: function() {},
          next: "COMPLETE"
        }
      }
    });
  }

  Context.prototype.state = function() {
    return this.fsm.state;
  };

  Context.prototype.event = function() {
    var args, name, _ref;
    name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return (_ref = this.fsm).event.apply(_ref, [name].concat(__slice.call(args)));
  };

  Context.prototype.is_done = function() {
    return this.children.every(function(child) {
      return child.state() === "COMPLETE";
    });
  };

  Context.prototype.notify_parent = function() {
    var _this = this;
    return setTimeout((function() {
      var _ref, _ref1;
      if ((_ref = _this.parent) != null ? _ref.is_done() : void 0) {
        return (_ref1 = _this.parent) != null ? _ref1.event("completion", _this) : void 0;
      }
    }), 0);
  };

  Context.prototype.done = function() {
    return this.event("completion");
  };

  Context.prototype.child = function(description, work) {
    var child;
    child = new this.constructor(description, work, this);
    if (child.type === "sync") {
      this.event("sync_child", child);
    } else if (child.type === "async") {
      this.event("async_child", child);
    } else {
      throw new Error("bad type: " + child.type);
    }
    this.children.push(child);
    this.emitter.emit("child", child);
    child._run();
    return child;
  };

  Context.prototype.result = function(result) {
    this.result = result;
  };

  Context.prototype._run = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.work(this);
    if (this.type === "sync" || this.children.length > 0) {
      return this.event("end_of_block");
    } else {
      return this.event("childless");
    }
  };

  return Context;

})();
  
}
,
          
            "4aaff567286b962812b471b15e32f666": // from: node_modules/json-schema-tests/node_modules/testify/src/minfinite.coffee
function(exports,require,module,__filename,__dirname) {
var EventEmitter, FSM,
  __slice = [].slice;

EventEmitter = require("events").EventEmitter;

module.exports = FSM = (function() {

  function FSM(initial_state) {
    if (initial_state == null) {
      initial_state = "START";
    }
    this.state = initial_state;
    this.emitter = new EventEmitter();
  }

  FSM.prototype.define = function(table) {
    if (this.validate(table)) {
      return this.table = table;
    } else {
      throw new Error("Invalid state table");
    }
  };

  FSM.prototype.validate = function(table) {
    var action, def, event, next, state, transition;
    for (state in table) {
      def = table[state];
      if (!(Object.keys(def).length > 0)) {
        return false;
      }
      for (event in def) {
        transition = def[event];
        action = transition.action, next = transition.next;
        if (typeof action !== "function") {
          console.log("Action for " + state + ", " + event + " is not a function");
          return false;
        }
        if (typeof next !== "string") {
          console.log("Next state for " + state + ", " + event + " is not a string");
          return false;
        }
        if (!table[next]) {
          console.log("Next state for " + state + ", " + event + " does not exist");
          return false;
        }
      }
    }
    return true;
  };

  FSM.prototype.event = function() {
    var action, args, current_state, error, name, next, transition;
    name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    current_state = this.state;
    transition = this.table[this.state][name];
    if (!transition) {
      error = new Error("State(" + this.state + ") has no transition for Event(" + name + ")");
      error.state = this.state;
      error.event = name;
      throw error;
    } else {
      action = transition.action, next = transition.next;
      action.apply(null, args);
      this.state = next;
      if (this.state !== current_state) {
        return this.emitter.emit(this.state);
      }
    }
  };

  return FSM;

})();
  
}
,
          
            "6df4c234a331d8bc981a82363868cf27": // from: node_modules/testify/src/reporters.coffee
function(exports,require,module,__filename,__dirname) {
var ConsoleReporter, DOMReporter;

ConsoleReporter = (function() {

  function ConsoleReporter(_arg) {
    var _this = this;
    this.color = _arg.color;
    this.counts = {
      passed: 0,
      failed: 0,
      errored: 0,
      incomplete: 0
    };
    process.on("exit", function() {
      _this.summarize();
      if (_this.counts.failed > 0) {
        return process.exit(1);
      }
    });
  }

  ConsoleReporter.prototype.summarize = function() {
    var summary;
    summary = [this.colorize("pass", "Passed: " + this.counts.passed)];
    if (this.counts.failed > 0) {
      summary.push(this.colorize("failure", "Failed: " + this.counts.failed));
    }
    if (this.counts.errored > 0) {
      summary.push(this.colorize("error", "Errored: " + this.counts.errored));
    }
    if (this.counts.incomplete > 0) {
      summary.push(this.colorize("incomplete", "Incomplete: " + this.counts.errored));
    }
    console.log();
    return console.log(summary.join("    "));
  };

  ConsoleReporter.prototype.add_suite = function(suite) {
    var _this = this;
    suite.emitter.on("child", function(child) {
      return _this.hook(child);
    });
    return suite.fsm.emitter.on("COMPLETE", function() {
      return process.nextTick((function() {
        return _this.report_suite(suite);
      }));
    });
  };

  ConsoleReporter.prototype.hook = function(child) {
    var _this = this;
    child.emitter.on("child", function(context) {
      return _this.hook(context);
    });
    return child.emitter.on("status", function(status) {
      return _this.status(status);
    });
  };

  ConsoleReporter.prototype.status = function(type) {
    var abbrev;
    if (abbrev = this.abbreviation[type]) {
      return process.stdout.write(this.colorize(type, abbrev));
    }
  };

  ConsoleReporter.prototype.abbreviation = {
    pass: ".",
    incomplete: "I",
    failure: "F",
    error: "E"
  };

  ConsoleReporter.prototype.report_suite = function(suite) {
    var level, result, test, _i, _len, _results;
    if (suite._reported) {
      return;
    } else {
      suite._reported = true;
    }
    if (suite.failed) {
      suite.name = "" + suite.name + " (FAILED)";
    } else {
      suite.name = "" + suite.name + " (PASSED)";
    }
    result = [];
    this.collect(suite, result);
    _results = [];
    for (_i = 0, _len = result.length; _i < _len; _i++) {
      test = result[_i];
      level = test.level;
      if (test.state() !== "COMPLETE") {
        this.result("" + test.name + " ( incomplete )", {
          type: "incomplete",
          level: level
        });
        _results.push(this.counts.incomplete++);
      } else if (test.failed === false) {
        this.result(test.name, {
          type: "pass",
          level: level
        });
        _results.push(this.counts.passed++);
      } else if (test.failed.constructor === String || test.failed.name === "AssertionError") {
        this.result("" + test.name + " ( " + (test.failed.toString()) + " )", {
          type: "failure",
          level: level,
          stack: test.failed.stack
        });
        if (test.failed !== "subtest failures") {
          _results.push(this.counts.failed++);
        } else {
          _results.push(void 0);
        }
      } else {
        this.result("" + test.name + " ( " + (test.failed.toString()) + " )", {
          type: "error",
          level: level,
          stack: test.failed.stack
        });
        _results.push(this.counts.errored++);
      }
    }
    return _results;
  };

  ConsoleReporter.prototype.collect = function(context, array) {
    var item, _i, _len, _ref, _results;
    if (array == null) {
      array = [];
    }
    array.push(context);
    _ref = context.children;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      _results.push(this.collect(item, array));
    }
    return _results;
  };

  ConsoleReporter.prototype.result = function(string, options) {
    var level, match, regex, space, where;
    if (options == null) {
      options = {};
    }
    if (!this._receiving_results) {
      console.log();
      this._receiving_results = true;
    }
    if (options.type) {
      string = this.colorize(options.type, string);
    }
    space = "";
    if (level = options.level) {
      while (level--) {
        space = space + "    ";
      }
      string = space + string;
    }
    console.log(string);
    if (options.stack) {
      where = options.stack.split("\n")[1];
      regex = /\((.*)\)/;
      match = regex.exec(where);
      try {
        return console.log(space + match[1]);
      } catch (error) {
        return console.log(space + where.slice(7));
      }
    }
  };

  ConsoleReporter.prototype.colorize = function(type, string) {
    var color;
    if (this.color && (color = this.color_map[type])) {
      return string[color];
    } else {
      return string;
    }
  };

  ConsoleReporter.prototype.color_map = {
    pass: "green",
    incomplete: "magenta",
    failure: "red",
    error: "yellow"
  };

  return ConsoleReporter;

})();

DOMReporter = (function() {

  function DOMReporter(id, options) {
    if (options == null) {
      options = {};
    }
    this.timeout = options.timeout || 2000;
    this.root = document.getElementById(id);
    this.suites = [];
  }

  DOMReporter.prototype.add_suite = function(suite) {
    var _this = this;
    this.suite_dom(suite);
    suite.emitter.on("child", function(child) {
      return _this.handle_child(suite, child);
    });
    suite.fsm.emitter.on("COMPLETE", function() {
      return _this.report_suite(suite);
    });
    return setTimeout((function() {
      return _this.report_suite(suite);
    }), this.timeout);
  };

  DOMReporter.prototype.handle_child = function(suite, child) {
    var _this = this;
    this.test_dom(child);
    child.emitter.on("child", function(context) {
      return _this.handle_child(suite, context);
    });
    return child.emitter.on("status", function(status) {
      return _this.status(suite, child, status);
    });
  };

  DOMReporter.prototype.report_suite = function(suite) {
    var level, test, tests, _i, _j, _len, _len1, _ref, _results;
    if (suite._reported) {
      return;
    } else {
      suite._reported = true;
    }
    if (suite.state() !== "COMPLETE") {
      suite._html.title.classList.add("incomplete");
    } else if (suite.failed === false) {
      suite._html.title.classList.add("pass");
    } else {
      suite._html.title.classList.add("failed");
    }
    tests = [];
    _ref = suite.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      test = _ref[_i];
      this.collect(test, tests);
    }
    _results = [];
    for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
      test = tests[_j];
      level = test.level;
      if (test.state() !== "COMPLETE") {
        _results.push(this.result(test, {
          type: "incomplete"
        }));
      } else if (test.failed === false) {
        _results.push(this.result(test, {
          type: "pass"
        }));
      } else if (test.failed.constructor === String || test.failed.name === "AssertionError") {
        _results.push(this.result(test, {
          type: "failure",
          stack: test.failed.stack
        }));
      } else {
        _results.push(this.result(test, {
          type: "error",
          stack: test.failed.stack
        }));
      }
    }
    return _results;
  };

  DOMReporter.prototype.collect = function(context, array) {
    var item, _i, _len, _ref;
    if (array == null) {
      array = [];
    }
    array.push(context);
    _ref = context.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      this.collect(item, array);
    }
    return array;
  };

  DOMReporter.prototype.suite_dom = function(suite) {
    var main, tests, title, _ref;
    suite._html = {
      main: document.createElement("div"),
      title: document.createElement("h3"),
      tests: document.createElement("ul")
    };
    _ref = suite._html, main = _ref.main, tests = _ref.tests, title = _ref.title;
    main.classList.add("testify_suite");
    title.textContent = suite.name;
    main.appendChild(title);
    main.appendChild(tests);
    return this.root.appendChild(main);
  };

  DOMReporter.prototype.test_dom = function(test) {
    var span, tests;
    test._html = {
      name: document.createElement("li")
    };
    test._html.name.classList.add("testify_test");
    span = document.createElement("span");
    span.classList.add("testify_test_name");
    span.textContent = test.name;
    test._html.name.appendChild(span);
    if (test.parent._html.tests) {

    } else {
      tests = test.parent._html.tests = document.createElement("ul");
      test.parent._html.name.appendChild(tests);
    }
    return test.parent._html.tests.appendChild(test._html.name);
  };

  DOMReporter.prototype.status = function(suite, test, type) {
    var fn,
      _this = this;
    fn = function() {
      var element, match, regex, span, stacky, where;
      element = test._html.name;
      span = element.children[0];
      span.classList.add(type);
      if (type === "failure" || type === "error") {
        span.textContent = span.textContent + (" (" + (test.failed.toString()) + ")");
        stacky = document.createElement("pre");
        where = test.failed.stack.split("\n")[1];
        regex = /\((.*)\)/;
        match = regex.exec(where);
        try {
          stacky.textContent = match[1];
        } catch (error) {
          stacky.textContent = where.slice(7);
        }
        stacky.classList.add("stack");
        return element.insertBefore(stacky, span.nextSibling);
      } else if (type === "incomplete") {
        return span.textContent = span.textContent + " (incomplete)";
      }
    };
    return setTimeout(fn, 50);
  };

  DOMReporter.prototype.result = function(test, options) {
    var element, span, type_string;
    if (test.children.length > 0 || options.type === "incomplete") {
      element = test._html.name;
      if (options.type) {
        span = element.children[0];
        span.classList.add(options.type);
        type_string = " (" + options.type + ")";
        if (options.type === "failure") {
          return span.textContent = span.textContent + (" (" + (test.failed.toString()) + ")");
        } else if (options.type === "incomplete") {
          return span.textContent = span.textContent + " (incomplete)";
        }
      }
    }
  };

  return DOMReporter;

})();

module.exports = {
  ConsoleReporter: ConsoleReporter,
  DOMReporter: DOMReporter
};
  
}
,
          
            "050548a41a962e5b0452e54fc85da5be": // from: node_modules/testify/src/test.coffee
function(exports,require,module,__filename,__dirname) {
var Context, TestContext, colors,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

colors = require("colors");

Context = require("./context");

module.exports = TestContext = (function(_super) {

  __extends(TestContext, _super);

  function TestContext() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    TestContext.__super__.constructor.apply(this, args);
    this.failed = false;
  }

  TestContext.prototype.test = function(description, work) {
    return this.child(description, work);
  };

  TestContext.prototype.run = function() {
    TestContext.reporter.add_suite(this);
    return this._run();
  };

  TestContext.prototype._run = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.work(this);
    if (this.type === "sync" || this.children.length > 0) {
      return this.event("end_of_block");
    } else {
      return this.event("childless");
    }
  };

  TestContext.prototype._run = function() {
    var _this = this;
    this.fsm.emitter.once("COMPLETE", function() {
      if (_this.timeout_id) {
        clearTimeout(_this.timeout_id);
      }
      return _this.timeout_id = void 0;
    });
    try {
      if (!this.failed) {
        this.work(this);
      }
      if (this.type === "sync" || this.children.length > 0) {
        this.event("end_of_block");
        return this.status("pass", ".");
      } else {
        if (!this.failed) {
          return this.event("childless");
        }
      }
    } catch (error) {
      this.fail(error);
      return this.event("end_of_block");
    }
  };

  TestContext.prototype.event = function() {
    var args, current, my_error;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    try {
      current = this.fsm.state;
      return TestContext.__super__.event.apply(this, args);
    } catch (error) {
      if (error.state === "COMPLETE" && error.event === "async_child") {
        my_error = new Error("Asynchronous test created after parent had completed");
        my_error.stack = error.stack.split("\n").slice(5).join("\n");
        return args[1].fail(my_error);
      } else if (error.state === "COMPLETE" && error.event === "sync_child") {
        my_error = new Error("Synchronous test created after parent had completed");
        my_error.stack = error.stack.split("\n").slice(5).join("\n");
        return args[1].fail(my_error);
      } else {
        throw error;
      }
    }
  };

  TestContext.prototype.status = function(type) {
    return this.emitter.emit("status", type);
  };

  TestContext.prototype.pass = function() {
    if (!this.failed) {
      this.status("pass");
      return this.done();
    }
  };

  TestContext.prototype.fail = function(error) {
    var message, throwaway;
    if (error.constructor === String) {
      this.status("failure");
      throwaway = new Error(error);
      message = error.toString();
      error = {
        name: "AssertionError",
        stack: throwaway.stack.split("\n").slice(1).join("\n"),
        toString: function() {
          return message;
        }
      };
    } else if (error.name === "AssertionError") {
      this.status("failure");
    } else {
      this.status("error");
    }
    if (this.type === "async") {
      this.event("completion");
    }
    return this.propagate_failure(error);
  };

  TestContext.prototype.timeout = function(milliseconds, message) {
    var fn,
      _this = this;
    fn = function() {
      return _this.fail(message || ("Timed out after " + milliseconds + " milliseconds"));
    };
    return this.timeout_id = setTimeout(fn, milliseconds);
  };

  TestContext.prototype.propagate_failure = function(error) {
    var _ref;
    this.failed = error;
    return (_ref = this.parent) != null ? _ref.propagate_failure("subtest failures") : void 0;
  };

  return TestContext;

})(Context);
  
}
,
          
            "59107395271234b20bff477d0fedfb12": // from: node_modules/testify/src/testify.coffee
function(exports,require,module,__filename,__dirname) {
var EventEmitter, TestContext, Testify,
  __slice = [].slice;

EventEmitter = require("events").EventEmitter;

TestContext = require("./test");

Testify = {
  Context: require("./context"),
  ConsoleReporter: require("./reporters").ConsoleReporter,
  DOMReporter: require("./reporters").DOMReporter,
  TestContext: TestContext,
  count: 0,
  emitter: new EventEmitter(),
  once: function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (_ref = Testify.emitter).once.apply(_ref, args);
  },
  options: {
    color: true
  },
  test: function(name, fn) {
    var suite;
    TestContext.options = Testify.options;
    TestContext.reporter || (TestContext.reporter = Testify.reporter || new Testify.ConsoleReporter(Testify.options));
    suite = new TestContext(name, fn);
    Testify.count++;
    suite.fsm.emitter.once("COMPLETE", function() {
      Testify.count--;
      if (Testify.count === 0) {
        return Testify.emitter.emit("done");
      }
    });
    suite.run();
    return suite;
  }
};

module.exports = Testify;
  
}
,
          
            "fcbf09d38223d8721fcec773d944da19": // from: node_modules/jsck/lib/common/arrays.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  maxItems: function(value, context) {
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("array", data)) {
          if (data.length > value) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  },
  minItems: function(value, context) {
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("array", data)) {
          if (data.length < value) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  },
  items: function(definition, context) {
    var test;
    if (this.test_type("array", definition)) {
      return test = this._tuple_items(definition, context);
    } else if (this.test_type("object", definition)) {
      test = this.compile(context, definition);
      return (function(_this) {
        return function(data, runtime) {
          var i, item, _i, _len;
          for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
            item = data[i];
            test(item, runtime.child(i));
          }
          return null;
        };
      })(this);
    } else {
      throw new Error("The 'items' attribute must be an object or an array");
    }
  },
  _additionalItems: function(definition, context) {
    var test;
    if (this.test_type("object", definition)) {
      test = this.compile(context, definition);
    } else if (definition === false) {
      test = function(data, runtime) {
        return runtime.error(context, data);
      };
    } else if (definition === true) {

    } else {
      throw new Error("The 'additionalItems' attribute must be an object or false");
    }
    return (function(_this) {
      return function(data, runtime) {
        var i, item, _i, _len;
        for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
          item = data[i];
          test(item, runtime.child(i));
        }
        return null;
      };
    })(this);
  },
  _tuple_items: function(definition, context) {
    var add_item_test, additionalItems, i, schema, tests, _i, _len;
    additionalItems = context.modifiers.additionalItems;
    if (additionalItems != null) {
      add_item_test = this._additionalItems(additionalItems, context.sibling("additionalItems"));
    } else {
      add_item_test = null;
    }
    tests = [];
    for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
      schema = definition[i];
      if (!this.test_type("object", schema)) {
        throw new Error("The 'items' attribute must be an object or an array");
      }
      tests.push(this.compile(context.child(i), schema));
    }
    return (function(_this) {
      return function(data, runtime) {
        var test, _j, _len1;
        if (_this.test_type("array", data)) {
          for (i = _j = 0, _len1 = tests.length; _j < _len1; i = ++_j) {
            test = tests[i];
            test(data[i], runtime.child(i));
          }
          if ((data.length > tests.length) && add_item_test) {
            return add_item_test(data.slice(tests.length), runtime);
          }
        }
      };
    })(this);
  },
  uniqueItems: function(definition, context) {
    console.error("uniqueItems is a no-op");
    return null;
  }
};
  
}
,
          
            "5085b1987602c5cc3de30fa8c476f916": // from: node_modules/jsck/lib/common/comparison.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  "enum": function(definition, context) {
    if (this.test_type("array", definition)) {
      return (function(_this) {
        return function(data, runtime) {
          var value, _i, _len;
          for (_i = 0, _len = definition.length; _i < _len; _i++) {
            value = definition[_i];
            if (_this.equal(data, value)) {
              return;
            }
          }
          return runtime.error(context, data);
        };
      })(this);
    } else {
      throw new Error("Value of 'enum' MUST be an Array");
    }
  },
  equal: function(got, want) {
    if (want instanceof Array) {
      return this.array_equal(got, want);
    } else if (this.is_object(want)) {
      return this.object_equal(got, want);
    } else {
      return got === want;
    }
  },
  array_equal: function(got, want) {
    var i, item, _i, _len;
    if (!(got instanceof Array)) {
      return false;
    }
    if (want.length === 0) {
      return true;
    }
    if (got.length !== want.length) {
      return false;
    }
    for (i = _i = 0, _len = want.length; _i < _len; i = ++_i) {
      item = want[i];
      if (!this.equal(got[i], item)) {
        return false;
      }
    }
    return true;
  },
  object_equal: function(got, want) {
    var key, value;
    if (!this.is_object(got)) {
      return false;
    }
    if (Object.keys(got).length !== Object.keys(want).length) {
      return false;
    }
    for (key in want) {
      value = want[key];
      if (!this.equal(got[key], value)) {
        return false;
      }
    }
    return true;
  }
};
  
}
,
          
            "0825fbdd4a442b652f36331c1b73e22c": // from: node_modules/jsck/lib/common/numeric.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  minimum: function(value, context) {
    var exclusiveMinimum;
    exclusiveMinimum = context.modifiers.exclusiveMinimum;
    if (exclusiveMinimum) {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data > value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    } else {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data >= value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    }
  },
  maximum: function(value, context) {
    var exclusiveMaximum;
    exclusiveMaximum = context.modifiers.exclusiveMaximum;
    if (exclusiveMaximum) {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data < value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    } else {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type("number", data)) {
            if (!(data <= value)) {
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    }
  }
};
  
}
,
          
            "2902efcef20d31b413fadba8a15cac6b": // from: node_modules/jsck/lib/common/objects.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  patternProperties: function(definition, context) {
    var additionalProperties, pattern, schema, tests;
    additionalProperties = context.modifiers.additionalProperties;
    if (additionalProperties) {
      return null;
    }
    if (!this.test_type("object", definition)) {
      throw new Error("The 'patternProperties' attribute must be an object");
    }
    if (Object.keys(definition).length === 0) {
      throw new Error("The 'patternProperties' object should not be empty");
    }
    tests = {};
    for (pattern in definition) {
      schema = definition[pattern];
      if (!this.test_type("object", schema)) {
        throw new Error("Values of 'patternProperties' must be an objects");
      }
      tests[pattern] = {
        regex: new RegExp(pattern),
        test: this.compile(context.child(pattern), schema)
      };
    }
    return (function(_this) {
      return function(data, runtime) {
        var object, property, value;
        for (property in data) {
          value = data[property];
          for (pattern in tests) {
            object = tests[pattern];
            if (object.regex.test(property)) {
              object.test(value, runtime.child(property));
            }
          }
        }
        return null;
      };
    })(this);
  },
  additionalProperties: function(definition, context) {
    var add_prop_test, pattern, patternProperties, patterns, properties, schema, _ref;
    _ref = context.modifiers, properties = _ref.properties, patternProperties = _ref.patternProperties;
    if (this.test_type("object", definition)) {
      add_prop_test = this.compile(context, definition);
    } else if (definition === false) {
      add_prop_test = (function(_this) {
        return function(data, runtime) {
          return runtime.error(context, data);
        };
      })(this);
    } else if (definition === void 0) {
      add_prop_test = null;
    } else {
      throw new Error("The 'additionalProperties' attribute must be an object or false");
    }
    patterns = {};
    for (pattern in patternProperties) {
      schema = patternProperties[pattern];
      patterns[pattern] = {
        regex: new RegExp(pattern),
        test: this.compile(context.sibling("patternProperties").child(pattern), schema)
      };
    }
    return (function(_this) {
      return function(data, runtime) {
        var explicit, object, patterned, property, value;
        if (_this.test_type("object", data)) {
          for (property in data) {
            value = data[property];
            explicit = false;
            patterned = false;
            if (properties != null ? properties[property] : void 0) {
              explicit = true;
            }
            if (patterns) {
              for (pattern in patterns) {
                object = patterns[pattern];
                if (object.regex.test(property)) {
                  patterned = true;
                  object.test(value, runtime.child(property));
                }
              }
            }
            if (!explicit && !patterned && add_prop_test) {
              add_prop_test(value, runtime.child(property));
            }
          }
          return null;
        }
      };
    })(this);
  }
};
  
}
,
          
            "295a0f39ea98ea0f4511853811a7cbbf": // from: node_modules/jsck/lib/common/strings.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  pattern: function(pattern, context) {
    var regex;
    if (!this.test_type("string", pattern)) {
      throw new Error("Value of 'pattern' must be a string");
    }
    regex = new RegExp(pattern);
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("string", data)) {
          if (!regex.test(data)) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  },
  minLength: function(value, context) {
    if (!this.test_type("integer", value)) {
      throw new Error("Value of 'minLength' must be an integer");
    }
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("string", data)) {
          if (!(data.length >= value)) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  },
  maxLength: function(value, context) {
    if (!this.test_type("integer", value)) {
      throw new Error("Value of 'maxLength' must be an integer");
    }
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("string", data)) {
          if (!(data.length <= value)) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  }
};
  
}
,
          
            "d7e904df3f42b10af0645577cf399ef8": // from: node_modules/jsck/lib/common/type.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  type: function(definition, context) {
    var tests, type, _fn, _i, _len;
    if (this.test_type("array", definition)) {
      tests = [];
      _fn = (function(_this) {
        return function(type) {
          var test;
          if (_this.test_type("object", type)) {
            test = _this.compile(context, type);
            return tests.push(function(data, runtime) {
              var temp;
              temp = new runtime.constructor({
                pointer: "",
                errors: []
              });
              test(data, temp);
              return temp.errors.length === 0;
            });
          } else {
            return tests.push(function(data, runtime) {
              return _this.test_type(type, data);
            });
          }
        };
      })(this);
      for (_i = 0, _len = definition.length; _i < _len; _i++) {
        type = definition[_i];
        _fn(type);
      }
      return (function(_this) {
        return function(data, runtime) {
          var test, valid, _j, _len1;
          valid = false;
          for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
            test = tests[_j];
            if (test(data, runtime)) {
              valid = true;
            }
          }
          if (valid === false) {
            return runtime.error(context, data);
          }
        };
      })(this);
    } else if (this.test_type("object", definition)) {
      return this.compile(context, definition);
    } else {
      return (function(_this) {
        return function(data, runtime) {
          if (!_this.test_type(definition, data)) {
            return runtime.error(context, data);
          }
        };
      })(this);
    }
  },
  is_object: function(data) {
    return (data != null) && (typeof data) === "object" && !(data instanceof Array) && !(data instanceof Date);
  },
  is_primitive: function(name) {
    return name === "integer" || name === "number" || name === "string" || name === "object" || name === "array" || name === "boolean" || name === "null";
  },
  test_type: function(type_name, data) {
    switch (type_name) {
      case "integer":
        return typeof data === "number" && data % 1 === 0;
      case "number":
        return typeof data === "number";
      case "string":
        return typeof data === "string";
      case "object":
        return this.is_object(data);
      case "array":
        return data instanceof Array;
      case "boolean":
        return typeof data === "boolean";
      case "null":
        return data === null;
      case "any":
        return true;
      default:
        throw new Error("Bad type: '" + type_name + "'");
    }
  }
};
  
}
,
          
            "7bb82b4ac1f33a96bff44d31899c2f46": // from: node_modules/jsck/lib/draft3/logical.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var URI;

URI = require("../uri");

module.exports = {
  "extends": function(schemas, context) {
    var i, new_context, parent, ref, schema, tests, uri, _i, _j, _len, _len1;
    if (!this.test_type("array", schemas)) {
      schemas = [schemas];
    }
    for (i = _i = 0, _len = schemas.length; _i < _len; i = ++_i) {
      schema = schemas[i];
      if ((ref = schema.$ref) != null) {
        uri = URI.resolve(context.scope, ref);
        parent = this.find(uri);
        if (!parent) {
          throw new Error("No schema found for $ref '" + ref + "'");
        } else {
          schemas[i] = parent;
        }
      }
    }
    tests = [];
    for (i = _j = 0, _len1 = schemas.length; _j < _len1; i = ++_j) {
      schema = schemas[i];
      new_context = context.child(i);
      tests.push(this.compile(new_context, schema));
    }
    return (function(_this) {
      return function(data, runtime) {
        var test, _k, _len2, _results;
        _results = [];
        for (_k = 0, _len2 = tests.length; _k < _len2; _k++) {
          test = tests[_k];
          _results.push(test(data, runtime));
        }
        return _results;
      };
    })(this);
  },
  disallow: function(definition, context) {
    var i, tests, type, _fn, _i, _len;
    if (this.test_type("array", definition)) {
      tests = [];
      _fn = (function(_this) {
        return function(i) {
          var inverse;
          if (_this.test_type("object", type)) {
            inverse = _this.compile(context, type);
            return tests.push(function(data, runtime) {
              var temp;
              temp = new runtime.constructor({
                pointer: "",
                errors: []
              });
              inverse(data, temp);
              if (temp.errors.length === 0) {
                return runtime.error(context, data);
              }
            });
          } else {
            return tests.push(_this.disallow(type, context));
          }
        };
      })(this);
      for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
        type = definition[i];
        _fn(i);
      }
      return (function(_this) {
        return function(data, runtime) {
          var test, _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
            test = tests[_j];
            _results.push(test(data, runtime));
          }
          return _results;
        };
      })(this);
    } else {
      return (function(_this) {
        return function(data, runtime) {
          if (_this.test_type(definition, data)) {
            return runtime.error(context, data);
          }
        };
      })(this);
    }
  }
};
  
}
,
          
            "6ea6e764028452ccb91d02dfd7b53dc6": // from: node_modules/jsck/lib/draft3/numeric.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  divisibleBy: function(value, context) {
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("number", data)) {
          if (!((data / value) % 1 === 0)) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  }
};
  
}
,
          
            "89d9c5da01849c2220d750a63f165757": // from: node_modules/jsck/lib/draft3/objects.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  properties: function(definition, context) {
    var new_context, property, required, schema, test, tests;
    if (!this.test_type("object", definition)) {
      throw new Error("The 'properties' attribute must be an object");
    }
    tests = {};
    required = [];
    for (property in definition) {
      schema = definition[property];
      new_context = context.child(property);
      test = this.compile(new_context, schema);
      tests[property] = test;
      if (schema.required === true) {
        required.push(property);
      }
    }
    return (function(_this) {
      return function(data, runtime) {
        var key, value, _i, _len;
        if (_this.test_type("object", data)) {
          for (property in data) {
            value = data[property];
            if ((test = tests[property]) != null) {
              test(value, runtime.child(property));
            }
          }
          for (_i = 0, _len = required.length; _i < _len; _i++) {
            key = required[_i];
            if (data[key] === void 0) {
              runtime.error(context.child(key).child("required"));
            }
          }
          return true;
        }
      };
    })(this);
  },
  dependencies: function(definition, context) {
    var dependency, fn, property, tests;
    if (!this.test_type("object", definition)) {
      throw new Error("Value of 'dependencies' must be an object");
    } else {
      tests = [];
      for (property in definition) {
        dependency = definition[property];
        if (this.test_type("string", dependency)) {
          tests.push((function(_this) {
            return function(data, runtime) {
              if ((data[property] != null) && (data[dependency] == null)) {
                return runtime.child(property).error(context);
              }
            };
          })(this));
        } else if (this.test_type("array", dependency)) {
          tests.push((function(_this) {
            return function(data, runtime) {
              var item, _i, _len;
              if (data[property] != null) {
                for (_i = 0, _len = dependency.length; _i < _len; _i++) {
                  item = dependency[_i];
                  if (data[item] == null) {
                    runtime.child(property).error(context);
                  }
                }
                return null;
              }
            };
          })(this));
        } else if (this.test_type("object", dependency)) {
          fn = this.compile(context, dependency);
          tests.push((function(_this) {
            return function(data, runtime) {
              if (data[property]) {
                return fn(data, runtime);
              } else {
                return true;
              }
            };
          })(this));
        } else {
          throw new Error("Invalid dependency");
        }
      }
    }
    return (function(_this) {
      return function(data, runtime) {
        var test, _i, _len;
        if (_this.test_type("object", data)) {
          for (_i = 0, _len = tests.length; _i < _len; _i++) {
            test = tests[_i];
            test(data, runtime);
          }
          return null;
        }
      };
    })(this);
  }
};
  
}
,
          
            "a12ff331af1d351c4f5886c1d034dc4e": // from: node_modules/jsck/lib/draft3/strings.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var format_regexes;

module.exports = {
  format: function(format_name, context) {
    var regex;
    if (format_name === "regex") {
      return (function(_this) {
        return function(data, runtime) {
          var error;
          if (_this.test_type("string", data)) {
            try {
              return new RegExp(data);
            } catch (_error) {
              error = _error;
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    } else if (regex = format_regexes[format_name]) {
      return (function(_this) {
        return function(regex) {
          return function(data, runtime) {
            if (_this.test_type("string", data)) {
              if (!regex.test(data)) {
                return runtime.error(context, data);
              }
            }
          };
        };
      })(this)(regex);
    } else {
      throw new Error("Invalid format_name for 'format'");
    }
  }
};

format_regexes = {
  "date-time": /^(\d{4}-(?:0[0-9]|1[0-2])-[0-9]{2}(T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.\d+)?(Z|(\-|\+)[0-9]{2}:[0-9]{2})?)?)$/,
  date: /^(\d{4}-(?:0[0-9]|1[0-2])-[0-9]{2})$/,
  time: /^\d{2}:\d{2}:\d{2}$/,
  email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
  "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
  color: /^(((#[0-9A-Fa-f]{3,6}))|(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)|(rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
  "host-name": /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])){0,3}\.?)$/,
  alpha: /^[a-zA-Z]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  "utc-millisec": function(input) {
    return (typeof input === "string") && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
  },
  style: /\s*(.+?):\s*([^;]+);?/g,
  phone: /^\+(?:[0-9] ?){6,14}[0-9]$/
};
  
}
,
          
            "163be958855978a098f73ffe8c509d9a": // from: node_modules/jsck/lib/draft3.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var modules, name, validator;

validator = require("./validator");

modules = ["logical", "numeric", "objects", "strings"];

module.exports = validator({
  uri: "http://json-schema.org/draft-03/schema#",
  mixins: (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = modules.length; _i < _len; _i++) {
      name = modules[_i];
      _results.push(require("./draft3/" + name));
    }
    return _results;
  })()
});
  
}
,
          
            "8722e7b9b982389af8a8c6b83514774f": // from: node_modules/jsck/lib/draft4/logical.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  anyOf: function(definition, context) {
    var i, new_context, schema, tests, _i, _len;
    if (!this.test_type("array", definition)) {
      throw new Error("The 'anyOf' attribute must be an array");
    }
    if (definition.length === 0) {
      throw new Error("The 'anyOf' array may not be empty");
    }
    tests = [];
    for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
      schema = definition[i];
      if (!this.test_type("object", schema)) {
        throw new Error("The 'anyOf' array values must be objects");
      }
      new_context = context.child(i);
      tests.push(this.compile(new_context, schema));
    }
    return (function(_this) {
      return function(data, runtime) {
        var answer;
        answer = tests.some(function(test) {
          var temp;
          temp = new runtime.constructor({
            pointer: "",
            errors: []
          });
          test(data, temp);
          return temp.errors.length === 0;
        });
        if (!answer) {
          return runtime.error(context, data);
        }
      };
    })(this);
  },
  allOf: function(definition, context) {
    var i, new_context, schema, tests, _i, _len;
    if (!this.test_type("array", definition)) {
      throw new Error("The 'allOf' attribute must be an array");
    }
    if (definition.length === 0) {
      throw new Error("The 'allOf' array may not be empty");
    }
    tests = [];
    for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
      schema = definition[i];
      if (!this.test_type("object", schema)) {
        throw new Error("The 'allOf' array values must be objects");
      }
      new_context = context.child(i);
      tests.push(this.compile(new_context, schema));
    }
    return (function(_this) {
      return function(data, runtime) {
        var test, _j, _len1;
        for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
          test = tests[_j];
          test(data, runtime);
        }
        return null;
      };
    })(this);
  },
  oneOf: function(definition, context) {
    var i, new_context, schema, tests, _i, _len;
    if (!this.test_type("array", definition)) {
      throw new Error("The 'oneOf' attribute must be an array");
    }
    if (definition.length === 0) {
      throw new Error("The 'oneOf' array may not be empty");
    }
    tests = [];
    for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
      schema = definition[i];
      if (!this.test_type("object", schema)) {
        throw new Error("The 'oneOf' array values must be objects");
      }
      new_context = context.child(i);
      tests.push(this.compile(new_context, schema));
    }
    return (function(_this) {
      return function(data, runtime) {
        var temp, test, valids, _j, _len1;
        valids = 0;
        for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
          test = tests[_j];
          temp = new runtime.constructor({
            pointer: "",
            errors: []
          });
          test(data, temp);
          if (temp.errors.length === 0) {
            valids++;
          }
        }
        if (valids !== 1) {
          return runtime.error(context, data);
        }
      };
    })(this);
  },
  not: function(definition, context) {
    var inverse;
    if (!this.test_type("object", definition)) {
      throw new Error("The 'not' attribute must be an object");
    }
    inverse = this.compile(context, definition);
    return (function(_this) {
      return function(data, runtime) {
        var temp;
        temp = new runtime.constructor({
          pointer: "",
          errors: []
        });
        inverse(data, temp);
        if (temp.errors.length === 0) {
          return runtime.error(context, data);
        }
      };
    })(this);
  }
};
  
}
,
          
            "e3b896bd2da06d1f807540db7d6eab02": // from: node_modules/jsck/lib/draft4/numeric.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  multipleOf: function(value, context) {
    if (!this.test_type("number", value)) {
      throw new Error("The 'multipleOf' attribute must be a number");
    }
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("number", data)) {
          if (!((data / value) % 1 === 0)) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  }
};
  
}
,
          
            "6dcc0a696a5bf6fe5e5382c2037332ae": // from: node_modules/jsck/lib/draft4/objects.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  required: function(definition, context) {
    var i, property, _i, _len;
    if (!this.test_type("array", definition)) {
      throw new Error("The 'required' attribute must be an array");
    }
    if (definition.length === 0) {
      throw new Error("The 'required' array must have at least one element");
    }
    for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
      property = definition[i];
      if (!this.test_type("string", property)) {
        throw new Error("The 'required' array may only contain strings");
      }
    }
    return (function(_this) {
      return function(data, runtime) {
        var _j, _len1;
        for (i = _j = 0, _len1 = definition.length; _j < _len1; i = ++_j) {
          property = definition[i];
          if (data[property] === void 0) {
            runtime.error(context.child(i));
          }
        }
        return null;
      };
    })(this);
  },
  properties: function(definition, context) {
    var new_context, property, schema, test, tests;
    if (!this.test_type("object", definition)) {
      throw new Error("The 'properties' attribute must be an object");
    }
    tests = {};
    for (property in definition) {
      schema = definition[property];
      if (!this.test_type("object", schema)) {
        throw new Error("The 'properties' attribute must be an object");
      }
      new_context = context.child(property);
      test = this.compile(new_context, schema);
      tests[property] = test;
    }
    return (function(_this) {
      return function(data, runtime) {
        var value;
        if (_this.test_type("object", data)) {
          for (property in data) {
            value = data[property];
            if ((test = tests[property]) != null) {
              test(value, runtime.child(property));
            }
          }
          return null;
        }
      };
    })(this);
  },
  minProperties: function(definition, context) {
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("object", data)) {
          if (Object.keys(data).length < definition) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  },
  maxProperties: function(definition, context) {
    return (function(_this) {
      return function(data, runtime) {
        if (_this.test_type("object", data)) {
          if (Object.keys(data).length > definition) {
            return runtime.error(context, data);
          }
        }
      };
    })(this);
  },
  dependencies: function(definition, context) {
    var dependency, fn, name, property, tests, _i, _len;
    if (!this.test_type("object", definition)) {
      throw new Error("Value of 'dependencies' must be an object");
    } else {
      tests = [];
      for (property in definition) {
        dependency = definition[property];
        if (this.test_type("array", dependency)) {
          if (dependency.length === 0) {
            throw new Error("Arrays in 'dependencies' may not be empty");
          }
          for (_i = 0, _len = dependency.length; _i < _len; _i++) {
            name = dependency[_i];
            if (!this.test_type("string", name)) {
              throw new Error("Vales of 'dependencies' arrays must be strings");
            }
          }
          tests.push((function(_this) {
            return function(data, runtime) {
              var item, _j, _len1;
              if (data[property] != null) {
                for (_j = 0, _len1 = dependency.length; _j < _len1; _j++) {
                  item = dependency[_j];
                  if (data[item] == null) {
                    runtime.child(property).error(context);
                  }
                }
                return null;
              }
            };
          })(this));
        } else if (this.test_type("object", dependency)) {
          fn = this.compile(context, dependency);
          tests.push((function(_this) {
            return function(data, runtime) {
              if (data[property]) {
                return fn(data, runtime);
              } else {
                return true;
              }
            };
          })(this));
        } else {
          throw new Error("Invalid dependency");
        }
      }
    }
    return (function(_this) {
      return function(data, runtime) {
        var test, _j, _len1;
        if (_this.test_type("object", data)) {
          for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
            test = tests[_j];
            test(data, runtime);
          }
          return null;
        }
      };
    })(this);
  }
};
  
}
,
          
            "94014b32f4a639edfe48a29492d62632": // from: node_modules/jsck/lib/draft4/strings.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var format_regexes;

module.exports = {
  format: function(format_name, context) {
    var regex;
    if (format_name === "regex") {
      return (function(_this) {
        return function(data, runtime) {
          var error;
          if (_this.test_type("string", data)) {
            try {
              return new RegExp(data);
            } catch (_error) {
              error = _error;
              return runtime.error(context, data);
            }
          }
        };
      })(this);
    } else if (regex = format_regexes[format_name]) {
      return (function(_this) {
        return function(regex) {
          return function(data, runtime) {
            if (_this.test_type("string", data)) {
              if (!regex.test(data)) {
                return runtime.error(context, data);
              }
            }
          };
        };
      })(this)(regex);
    } else {
      throw new Error("Invalid format_name for 'format'");
    }
  }
};

format_regexes = {
  "date-time": /^(\d{4}-(?:0[0-9]|1[0-2])-[0-9]{2}(T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.\d+)?(Z|(\-|\+)[0-9]{2}:[0-9]{2})?)?)$/,
  date: /^(\d{4}-(?:0[0-9]|1[0-2])-[0-9]{2})$/,
  time: /^\d{2}:\d{2}:\d{2}$/,
  email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
  "ipv4": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
  color: /^(((#[0-9A-Fa-f]{3,6}))|(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)|(rgb\(\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
  "hostname": /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])){0,3}\.?)$/,
  alpha: /^[a-zA-Z]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  "utc-millisec": function(input) {
    return (typeof input === "string") && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
  },
  style: /\s*(.+?):\s*([^;]+);?/g,
  phone: /^\+(?:[0-9] ?){6,14}[0-9]$/
};
  
}
,
          
            "7daa123d95e1e99f4a4d1b07472b1ea7": // from: node_modules/jsck/lib/draft4/type.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
module.exports = {
  type: function(definition, context) {
    var tests, type, _fn, _i, _len;
    if (this.test_type("array", definition)) {
      if (definition.length === 0) {
        throw new Error("Invalid 'type': arrays may not be empty");
      }
      tests = [];
      _fn = (function(_this) {
        return function(type) {
          return tests.push(function(data, runtime) {
            return _this.test_type(type, data);
          });
        };
      })(this);
      for (_i = 0, _len = definition.length; _i < _len; _i++) {
        type = definition[_i];
        if (!this.is_primitive(type)) {
          throw new Error("Invalid 'type': " + type + " is not a primitive type");
        }
        _fn(type);
      }
      return (function(_this) {
        return function(data, runtime) {
          var test, valid, _j, _len1;
          valid = false;
          for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
            test = tests[_j];
            if (test(data, runtime)) {
              valid = true;
            }
          }
          if (valid === false) {
            return runtime.error(context, data);
          }
        };
      })(this);
    } else if (this.test_type("string", definition)) {
      if (!this.is_primitive(definition)) {
        throw new Error("Invalid 'type': " + definition + " is not a primitive type");
      }
      return (function(_this) {
        return function(data, runtime) {
          if (!_this.test_type(definition, data)) {
            return runtime.error(context, data);
          }
        };
      })(this);
    } else {
      throw new Error("The value of 'type' must be a string or an array");
    }
  }
};
  
}
,
          
            "6f8da8312748e493eab65c184393064f": // from: node_modules/jsck/lib/draft4.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var modules, name, validator;

validator = require("./validator");

modules = ["type", "logical", "numeric", "objects", "strings"];

module.exports = validator({
  uri: "http://json-schema.org/draft-04/schema#",
  mixins: (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = modules.length; _i < _len; _i++) {
      name = modules[_i];
      _results.push(require("./draft4/" + name));
    }
    return _results;
  })()
});
  
}
,
          
            "4aa62b8577fce12b86586ac4dacede6b": // from: node_modules/jsck/lib/index.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var lazy_require;

lazy_require = function(path) {
  return {
    get: (function() {
      return require(path);
    }),
    enumerable: true
  };
};

Object.defineProperties(module.exports, {
  draft3: lazy_require("./draft3"),
  draft4: lazy_require("./draft4")
});
  
}
,
          
            "41b9174eb5668c337d2a0636d6509a5a": // from: node_modules/jsck/lib/uri.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var is_absolute, is_url, resolve;

is_absolute = function(string) {
  return /^[\w\d+.-]+:/.test(string);
};

is_url = function(string) {
  return /^[\w\d+.-]+:\/\//.test(string);
};

resolve = function(scope, uri) {
  var main, _frag, _ref;
  if (is_absolute(uri)) {
    return uri;
  } else {
    scope = scope.replace(/#$/, "");
    if (uri.indexOf("#") === 0) {
      _ref = scope.split("#"), main = _ref[0], _frag = _ref[1];
      return main + uri;
    } else {
      if (is_url(scope) || scope.indexOf("/") !== -1) {
        return scope.replace(/\/[^/]+$/, "/" + uri);
      } else {
        return "" + scope + "/" + uri;
      }
    }
  }
};

module.exports = {
  is_absolute: is_absolute,
  is_url: is_url,
  resolve: resolve
};
  
}
,
          
            "1160423dddc4853f78f51b62c0cca8d1": // from: node_modules/jsck/lib/util.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var Context, Runtime;

module.exports = {
  escape: function(string) {
    return string.replace(/~0/g, "~").replace(/~1/g, "/").replace(/%25/g, "%");
  },
  Runtime: Runtime = (function() {
    function Runtime(_arg) {
      this.errors = _arg.errors, this.pointer = _arg.pointer;
    }

    Runtime.prototype.child = function(token) {
      return new this.constructor({
        errors: this.errors,
        pointer: "" + this.pointer + "/" + (token.toString())
      });
    };

    Runtime.prototype.error = function(context, value) {
      return this.errors.push({
        schema: {
          pointer: context.pointer,
          attribute: context._attribute,
          definition: context.definition
        },
        document: {
          pointer: this.pointer,
          value: value
        }
      });
    };

    return Runtime;

  })(),
  Context: Context = (function() {
    function Context(_arg) {
      this.pointer = _arg.pointer, this.scope = _arg.scope, this._attribute = _arg._attribute;
    }

    Context.prototype.attribute = function(name) {
      return new Context({
        pointer: "" + this.pointer + "/" + (name.toString()),
        scope: this.scope,
        _attribute: name
      });
    };

    Context.prototype.child = function(token) {
      return new Context({
        pointer: "" + this.pointer + "/" + (token.toString()),
        scope: this.scope,
        _attribute: this._attribute
      });
    };

    Context.prototype.sibling = function(token) {
      var pointer;
      pointer = this.pointer.replace(/\/.*$/, "/" + (token.toString()));
      return new Context({
        pointer: pointer,
        scope: this.scope
      });
    };

    return Context;

  })()
};
  
}
,
          
            "e179c5313f9e071cb445bef3bec54458": // from: node_modules/jsck/lib/validator.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
var Context, Runtime, URI, clone, escape, _ref,
  __slice = [].slice;

URI = require("./uri");

_ref = require("./util"), escape = _ref.escape, Runtime = _ref.Runtime, Context = _ref.Context;

clone = function(value) {
  return JSON.parse(JSON.stringify(value));
};

module.exports = function(_arg) {
  var Validator, mixins, uri;
  uri = _arg.uri, mixins = _arg.mixins;
  return Validator = (function() {
    var SCHEMA_URI, common, common_modules, method, mixin, name, _i, _len;

    Validator.modifiers = {
      patternProperties: ["additionalProperties"],
      additionalProperties: ["properties", "patternProperties"],
      items: ["additionalItems"],
      minimum: ["exclusiveMinimum"],
      maximum: ["exclusiveMaximum"]
    };

    SCHEMA_URI = uri;

    common_modules = ["type", "numeric", "comparison", "arrays", "objects", "strings"];

    common = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = common_modules.length; _i < _len; _i++) {
        name = common_modules[_i];
        mixin = require("./common/" + name);
        _results.push((function() {
          var _results1;
          _results1 = [];
          for (name in mixin) {
            method = mixin[name];
            _results1.push(Validator.prototype[name] = method);
          }
          return _results1;
        })());
      }
      return _results;
    })();

    for (_i = 0, _len = mixins.length; _i < _len; _i++) {
      mixin = mixins[_i];
      for (name in mixin) {
        method = mixin[name];
        Validator.prototype[name] = method;
      }
    }

    function Validator() {
      var schema, schemas, _j, _len1;
      schemas = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      this.uris = {};
      this.media_types = {};
      this.unresolved = {};
      for (_j = 0, _len1 = schemas.length; _j < _len1; _j++) {
        schema = schemas[_j];
        if ((schema["$schema"] != null) && schema["$schema"] !== SCHEMA_URI) {
          throw "This validator doesn't support this JSON schema.";
        }
        this.add(schema);
      }
    }

    Validator.prototype.add = function(schema) {
      var context;
      schema = clone(schema);
      if (schema.id) {
        schema.id = schema.id.replace(/#?$/, "#");
      }
      context = new Context({
        pointer: schema.id || "#",
        scope: schema.id || "#"
      });
      this.compile_references(context, schema);
      return this.compile(context, schema);
    };

    Validator.prototype.validate = function(data) {
      return this.validator("#").validate(data);
    };

    Validator.prototype.validator = function(arg) {
      var schema;
      if ((schema = this.find(arg)) != null) {
        return {
          validate: (function(_this) {
            return function(data) {
              var attribute, base, error, errors, pointer, runtime, valid, _base, _j, _k, _len1, _ref1, _ref2;
              errors = [];
              runtime = new Runtime({
                errors: errors,
                pointer: "#"
              });
              schema._test(data, runtime);
              if (errors.length > 0) {
                for (_j = 0, _len1 = errors.length; _j < _len1; _j++) {
                  error = errors[_j];
                  _ref1 = error.schema.pointer.split("/"), base = 2 <= _ref1.length ? __slice.call(_ref1, 0, _k = _ref1.length - 1) : (_k = 0, []), attribute = _ref1[_k++];
                  pointer = base.join("/");
                  if ((_base = error.schema).definition == null) {
                    _base.definition = (_ref2 = _this.resolve_uri(pointer)) != null ? _ref2[attribute] : void 0;
                  }
                }
              }
              valid = runtime.errors.length === 0;
              return {
                valid: valid,
                errors: errors
              };
            };
          })(this),
          toJSON: function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return schema;
          }
        };
      } else {
        throw new Error("No schema found for '" + (JSON.stringify(arg)) + "'");
      }
    };

    Validator.prototype.find = function(arg) {
      var media_type;
      if (this.test_type("string", arg)) {
        uri = escape(arg);
        return this.uris[uri];
      } else if ((uri = arg.uri) != null) {
        uri = escape(uri);
        return this.uris[uri];
      } else if ((media_type = arg.mediaType) != null) {
        return this.media_types[media_type];
      } else {
        return null;
      }
    };

    Validator.prototype.resolve_uri = function(uri, scope) {
      var schema;
      if ((schema = this.find(uri)) != null) {
        if (schema.$ref) {
          return this.resolve_uri(URI.resolve(scope, schema.$ref));
        } else {
          return schema;
        }
      }
    };

    Validator.prototype.register = function(uri, schema) {
      var media_type;
      this.uris[uri] = schema;
      if ((media_type = schema.mediaType) != null) {
        if (media_type !== "application/json") {
          return this.media_types[media_type] = schema;
        }
      }
    };

    Validator.prototype.compile_references = function(context, schema) {
      var found_schema, key, pointers, ref, scope, _ref1, _ref2;
      this.schema_references(context, schema);
      _ref1 = this.unresolved;
      for (ref in _ref1) {
        _ref2 = _ref1[ref], scope = _ref2.scope, uri = _ref2.uri;
        if ((found_schema = this.resolve_uri(uri, scope)) != null) {
          delete this.unresolved[ref];
          this.register(ref, found_schema);
        }
      }
      if (Object.keys(this.unresolved).length > 0) {
        pointers = (function() {
          var _ref3, _results;
          _ref3 = this.unresolved;
          _results = [];
          for (key in _ref3) {
            uri = _ref3[key].uri;
            _results.push(uri);
          }
          return _results;
        }).call(this);
        throw new Error("Unresolvable $ref values: " + (JSON.stringify(pointers)));
      }
    };

    Validator.prototype.schema_references = function(context, schema) {
      var attribute, definition, i, new_context, pointer, s, scope, _results;
      if (!this.test_type("object", schema)) {
        throw new Error("Schema must be an object - " + context.pointer);
      }
      scope = context.scope, pointer = context.pointer;
      this.register(pointer, schema);
      if (schema.id && schema.id.indexOf("#") === 0) {
        uri = URI.resolve(scope, schema.id);
        schema.id = uri;
        this.register(uri, schema);
      }
      _results = [];
      for (attribute in schema) {
        definition = schema[attribute];
        if ("$ref" === attribute) {
          _results.push(this.resolve_reference(context, schema, definition));
        } else {
          new_context = context.child(attribute);
          if ("properties" === attribute) {
            _results.push(this.properties_references(new_context, definition));
          } else if ("items" === attribute) {
            _results.push(this.items_references(new_context, definition));
          } else if ("definitions" === attribute) {
            _results.push(this.definitions_references(new_context, definition));
          } else if (this.test_type("object", definition)) {
            _results.push(this.schema_references(new_context, definition));
          } else if (attribute === "allOf" || attribute === "anyOf" || attribute === "not") {
            _results.push((function() {
              var _j, _len1, _results1;
              _results1 = [];
              for (i = _j = 0, _len1 = definition.length; _j < _len1; i = ++_j) {
                s = definition[i];
                _results1.push(this.schema_references(new_context.child(i), s));
              }
              return _results1;
            }).call(this));
          } else {
            _results.push(void 0);
          }
        }
      }
      return _results;
    };

    Validator.prototype.resolve_reference = function(context, schema, definition) {
      var found_schema, k, pointer, scope, v;
      scope = context.scope, pointer = context.pointer;
      uri = URI.resolve(scope, definition);
      if (pointer.indexOf(uri + "/") !== 0) {
        if ((found_schema = this.resolve_uri(uri, scope)) != null) {
          delete schema.$ref;
          for (k in found_schema) {
            v = found_schema[k];
            schema[k] = v;
          }
          return this.schema_references(context, schema);
        } else {
          return this.unresolved[pointer] = {
            scope: scope,
            uri: uri
          };
        }
      }
    };

    Validator.prototype.properties_references = function(context, properties) {
      var property, schema, _results;
      if (!this.test_type("object", properties)) {
        throw new Error("Properties must be an object - " + context.pointer);
      }
      _results = [];
      for (property in properties) {
        schema = properties[property];
        _results.push(this.schema_references(context.child(property), schema));
      }
      return _results;
    };

    Validator.prototype.items_references = function(context, definition) {
      var def, i, _j, _len1, _results;
      if (this.test_type("array", definition)) {
        _results = [];
        for (i = _j = 0, _len1 = definition.length; _j < _len1; i = ++_j) {
          def = definition[i];
          _results.push(this.schema_references(context.child(i), def));
        }
        return _results;
      } else {
        return this.schema_references(context, definition);
      }
    };

    Validator.prototype.definitions_references = function(context, object) {
      var schema, _results;
      if (!this.test_type("object", object)) {
        throw new Error("Value of 'definitions' must be an object - " + context.pointer);
      }
      _results = [];
      for (name in object) {
        schema = object[name];
        _results.push(this.schema_references(context.child(name), schema));
      }
      return _results;
    };

    Validator.prototype.compile = function(context, schema) {
      var definition, key, new_context, pointer, scope, test, test_function, tests, _ref1, _ref2;
      scope = context.scope, pointer = context.pointer;
      tests = [];
      if ((uri = schema.$ref) != null) {
        uri = URI.resolve(scope, uri);
        if (pointer.indexOf(uri) === 0) {
          return this.recursive_test(schema, context);
        }
        schema = this.find(uri);
        if (!schema) {
          throw new Error("No schema found for $ref '" + uri + "'");
        }
      }
      for (key in schema) {
        definition = schema[key];
        if (!(key !== "_test")) {
          continue;
        }
        new_context = context.attribute(key);
        if (this[key] != null) {
          test = this.compile_attribute(new_context, key, schema, definition);
          if (test) {
            tests.push(test);
          }
        } else {
          this.compile_definitions(new_context, definition);
        }
      }
      test_function = function(data, runtime) {
        var _j, _len1;
        for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
          test = tests[_j];
          test(data, runtime);
        }
        return null;
      };
      if ((_ref1 = this.find(pointer)) != null) {
        _ref1._test = test_function;
      }
      if (schema.id) {
        uri = URI.resolve(scope, schema.id);
        if ((_ref2 = this.find(uri)) != null) {
          _ref2._test = test_function;
        }
      }
      return test_function;
    };

    Validator.prototype.compile_attribute = function(context, attribute, schema, definition) {
      var key, modifiers, test, _j, _len1;
      context.modifiers = {};
      if ((modifiers = Validator.modifiers[attribute]) != null) {
        for (_j = 0, _len1 = modifiers.length; _j < _len1; _j++) {
          key = modifiers[_j];
          context.modifiers[key] = schema[key];
        }
      }
      if (this[attribute] != null) {
        if ((test = this[attribute](definition, context)) != null) {
          return test;
        }
      }
    };

    Validator.prototype.compile_definitions = function(context, object) {
      var definition, _results;
      if (this.is_schema(object)) {
        return this.compile(context, object);
      } else if (this.test_type("object", object)) {
        _results = [];
        for (name in object) {
          definition = object[name];
          _results.push(this.compile_definitions(context.child(name), definition));
        }
        return _results;
      }
    };

    Validator.prototype.is_schema = function(object) {
      return (object.type != null) || (object.$ref != null) || (object.allOf != null) || (object.anyOf != null) || (object.not != null);
    };

    Validator.prototype.recursive_test = function(schema, _arg1) {
      var pointer, scope;
      scope = _arg1.scope, pointer = _arg1.pointer;
      uri = URI.resolve(scope, schema.$ref);
      if ((schema = this.find(uri)) != null) {
        return function(data, runtime) {
          return schema._test(data, runtime);
        };
      } else {
        throw new Error("No schema found for $ref '" + uri + "'");
      }
    };

    return Validator;

  })();
};
  
}
,
          
            "2ac12c75d060b2e97566c7c8efa928cc": // from: node_modules/json-schema-tests/node_modules/glob/examples/g.js
function(exports,require,module,__filename,__dirname) {
var Glob = require("../").Glob

var pattern = "test/a/**/[cg]/../[cg]"
console.log(pattern)

var mg = new Glob(pattern, {mark: true, sync:true}, function (er, matches) {
  console.log("matches", matches)
})
console.log("after")
  
}
,
          
            "457ed37c1d7c0e1dc4c52db26ed6be5c": // from: node_modules/json-schema-tests/node_modules/glob/examples/usr-local.js
function(exports,require,module,__filename,__dirname) {
var Glob = require("../").Glob

var pattern = "{./*/*,/*,/usr/local/*}"
console.log(pattern)

var mg = new Glob(pattern, {mark: true}, function (er, matches) {
  console.log("matches", matches)
})
console.log("after")
  
}
,
          
            "b831074a08f86efa53c9c3f2e8c96516": // from: node_modules/json-schema-tests/node_modules/glob/glob.js
function(exports,require,module,__filename,__dirname) {
// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
// readdir(PREFIX) as ENTRIES
//   If fails, END
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $])
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $])
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.



module.exports = glob

var fs = require("fs")
, minimatch = require("minimatch")
, Minimatch = minimatch.Minimatch
, inherits = require("inherits")
, EE = require("events").EventEmitter
, path = require("path")
, isDir = {}
, assert = require("assert").ok

function glob (pattern, options, cb) {
  if (typeof options === "function") cb = options, options = {}
  if (!options) options = {}

  if (typeof options === "number") {
    deprecated()
    return
  }

  var g = new Glob(pattern, options, cb)
  return g.sync ? g.found : g
}

glob.fnmatch = deprecated

function deprecated () {
  throw new Error("glob's interface has changed. Please see the docs.")
}

glob.sync = globSync
function globSync (pattern, options) {
  if (typeof options === "number") {
    deprecated()
    return
  }

  options = options || {}
  options.sync = true
  return glob(pattern, options)
}

this._processingEmitQueue = false

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (!(this instanceof Glob)) {
    return new Glob(pattern, options, cb)
  }

  if (typeof options === "function") {
    cb = options
    options = null
  }

  if (typeof cb === "function") {
    this.on("error", cb)
    this.on("end", function (matches) {
      cb(null, matches)
    })
  }

  options = options || {}

  this._endEmitted = false
  this.EOF = {}
  this._emitQueue = []

  this.paused = false
  this._processingEmitQueue = false

  this.maxDepth = options.maxDepth || 1000
  this.maxLength = options.maxLength || Infinity
  this.cache = options.cache || {}
  this.statCache = options.statCache || {}

  this.changedCwd = false
  var cwd = process.cwd()
  if (!options.hasOwnProperty("cwd")) this.cwd = cwd
  else {
    this.cwd = options.cwd
    this.changedCwd = path.resolve(options.cwd) !== cwd
  }

  this.root = options.root || path.resolve(this.cwd, "/")
  this.root = path.resolve(this.root)
  if (process.platform === "win32")
    this.root = this.root.replace(/\\/g, "/")

  this.nomount = !!options.nomount

  if (!pattern) {
    throw new Error("must provide pattern")
  }

  // base-matching: just use globstar for that.
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar")
    }
    pattern = "**/" + pattern
  }

  this.strict = options.strict !== false
  this.dot = !!options.dot
  this.mark = !!options.mark
  this.sync = !!options.sync
  this.nounique = !!options.nounique
  this.nonull = !!options.nonull
  this.nosort = !!options.nosort
  this.nocase = !!options.nocase
  this.stat = !!options.stat

  this.debug = !!options.debug || !!options.globDebug
  if (this.debug)
    this.log = console.error

  this.silent = !!options.silent

  var mm = this.minimatch = new Minimatch(pattern, options)
  this.options = mm.options
  pattern = this.pattern = mm.pattern

  this.error = null
  this.aborted = false

  // list of all the patterns that ** has resolved do, so
  // we can avoid visiting multiple times.
  this._globstars = {}

  EE.call(this)

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  this.minimatch.set.forEach(iterator.bind(this))
  function iterator (pattern, i, set) {
    this._process(pattern, 0, i, function (er) {
      if (er) this.emit("error", er)
      if (-- n <= 0) this._finish()
    })
  }
}

Glob.prototype.log = function () {}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)

  var nou = this.nounique
  , all = nou ? [] : {}

  for (var i = 0, l = this.matches.length; i < l; i ++) {
    var matches = this.matches[i]
    this.log("matches[%d] =", i, matches)
    // do like the shell, and spit out the literal glob
    if (!matches) {
      if (this.nonull) {
        var literal = this.minimatch.globSet[i]
        if (nou) all.push(literal)
        else all[literal] = true
      }
    } else {
      // had matches
      var m = Object.keys(matches)
      if (nou) all.push.apply(all, m)
      else m.forEach(function (m) {
        all[m] = true
      })
    }
  }

  if (!nou) all = Object.keys(all)

  if (!this.nosort) {
    all = all.sort(this.nocase ? alphasorti : alphasort)
  }

  if (this.mark) {
    // at *some* point we statted all of these
    all = all.map(this._mark, this)
  }

  this.log("emitting end", all)

  this.EOF = this.found = all
  this.emitMatch(this.EOF)
}

function alphasorti (a, b) {
  a = a.toLowerCase()
  b = b.toLowerCase()
  return alphasort(a, b)
}

function alphasort (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}

Glob.prototype._mark = function (p) {
  var c = this.cache[p]
  var m = p
  if (c) {
    var isDir = c === 2 || Array.isArray(c)
    var slash = p.slice(-1) === '/'

    if (isDir && !slash)
      m += '/'
    else if (!isDir && slash)
      m = m.slice(0, -1)

    if (m !== p) {
      this.statCache[m] = this.statCache[p]
      this.cache[m] = this.cache[p]
    }
  }

  return m
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit("abort")
}

Glob.prototype.pause = function () {
  if (this.paused) return
  if (this.sync)
    this.emit("error", new Error("Can't pause/resume sync glob"))
  this.paused = true
  this.emit("pause")
}

Glob.prototype.resume = function () {
  if (!this.paused) return
  if (this.sync)
    this.emit("error", new Error("Can't pause/resume sync glob"))
  this.paused = false
  this.emit("resume")
  this._processEmitQueue()
  //process.nextTick(this.emit.bind(this, "resume"))
}

Glob.prototype.emitMatch = function (m) {
  this.log('emitMatch', m)
  this._emitQueue.push(m)
  this._processEmitQueue()
}

Glob.prototype._processEmitQueue = function (m) {
  this.log("pEQ paused=%j processing=%j m=%j", this.paused,
           this._processingEmitQueue, m)
  var done = false
  while (!this._processingEmitQueue &&
         !this.paused) {
    this._processingEmitQueue = true
    var m = this._emitQueue.shift()
    this.log(">processEmitQueue", m === this.EOF ? ":EOF:" : m)
    if (!m) {
      this.log(">processEmitQueue, falsey m")
      this._processingEmitQueue = false
      break
    }

    if (m === this.EOF || !(this.mark && !this.stat)) {
      this.log("peq: unmarked, or eof")
      next.call(this, 0, false)
    } else if (this.statCache[m]) {
      var sc = this.statCache[m]
      var exists
      if (sc)
        exists = sc.isDirectory() ? 2 : 1
      this.log("peq: stat cached")
      next.call(this, exists, exists === 2)
    } else {
      this.log("peq: _stat, then next")
      this._stat(m, next)
    }

    function next(exists, isDir) {
      this.log("next", m, exists, isDir)
      var ev = m === this.EOF ? "end" : "match"

      // "end" can only happen once.
      assert(!this._endEmitted)
      if (ev === "end")
        this._endEmitted = true

      if (exists) {
        // Doesn't mean it necessarily doesn't exist, it's possible
        // we just didn't check because we don't care that much, or
        // this is EOF anyway.
        if (isDir && !m.match(/\/$/)) {
          m = m + "/"
        } else if (!isDir && m.match(/\/$/)) {
          m = m.replace(/\/+$/, "")
        }
      }
      this.log("emit", ev, m)
      this.emit(ev, m)
      this._processingEmitQueue = false
      if (done && m !== this.EOF && !this.paused)
        this._processEmitQueue()
    }
  }
  done = true
}

Glob.prototype._process = function (pattern, depth, index, cb_) {
  assert(this instanceof Glob)

  var cb = function cb (er, res) {
    assert(this instanceof Glob)
    if (this.paused) {
      if (!this._processQueue) {
        this._processQueue = []
        this.once("resume", function () {
          var q = this._processQueue
          this._processQueue = null
          q.forEach(function (cb) { cb() })
        })
      }
      this._processQueue.push(cb_.bind(this, er, res))
    } else {
      cb_.call(this, er, res)
    }
  }.bind(this)

  if (this.aborted) return cb()

  if (depth > this.maxDepth) return cb()

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === "string") {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      prefix = pattern.join("/")
      this._stat(prefix, function (exists, isDir) {
        // either it's there, or it isn't.
        // nothing more to do, either way.
        if (exists) {
          if (prefix && isAbsolute(prefix) && !this.nomount) {
            if (prefix.charAt(0) === "/") {
              prefix = path.join(this.root, prefix)
            } else {
              prefix = path.resolve(this.root, prefix)
            }
          }

          if (process.platform === "win32")
            prefix = prefix.replace(/\\/g, "/")

          this.matches[index] = this.matches[index] || {}
          this.matches[index][prefix] = true
          this.emitMatch(prefix)
        }
        return cb()
      })
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's "absolute" like /foo/bar,
      // or "relative" like "../baz"
      prefix = pattern.slice(0, n)
      prefix = prefix.join("/")
      break
  }

  // get the list of entries.
  var read
  if (prefix === null) read = "."
  else if (isAbsolute(prefix) || isAbsolute(pattern.join("/"))) {
    if (!prefix || !isAbsolute(prefix)) {
      prefix = path.join("/", prefix)
    }
    read = prefix = path.resolve(prefix)

    // if (process.platform === "win32")
    //   read = prefix = prefix.replace(/^[a-zA-Z]:|\\/g, "/")

    this.log('absolute: ', prefix, this.root, pattern, read)
  } else {
    read = prefix
  }

  this.log('readdir(%j)', read, this.cwd, this.root)

  return this._readdir(read, function (er, entries) {
    if (er) {
      // not a directory!
      // this means that, whatever else comes after this, it can never match
      return cb()
    }

    // globstar is special
    if (pattern[n] === minimatch.GLOBSTAR) {
      // test without the globstar, and with every child both below
      // and replacing the globstar.
      var s = [ pattern.slice(0, n).concat(pattern.slice(n + 1)) ]
      entries.forEach(function (e) {
        if (e.charAt(0) === "." && !this.dot) return
        // instead of the globstar
        s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1)))
        // below the globstar
        s.push(pattern.slice(0, n).concat(e).concat(pattern.slice(n)))
      }, this)

      s = s.filter(function (pattern) {
        var key = gsKey(pattern)
        var seen = !this._globstars[key]
        this._globstars[key] = true
        return seen
      }, this)

      if (!s.length)
        return cb()

      // now asyncForEach over this
      var l = s.length
      , errState = null
      s.forEach(function (gsPattern) {
        this._process(gsPattern, depth + 1, index, function (er) {
          if (errState) return
          if (er) return cb(errState = er)
          if (--l <= 0) return cb()
        })
      }, this)

      return
    }

    // not a globstar
    // It will only match dot entries if it starts with a dot, or if
    // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
    var pn = pattern[n]
    var rawGlob = pattern[n]._glob
    , dotOk = this.dot || rawGlob.charAt(0) === "."

    entries = entries.filter(function (e) {
      return (e.charAt(0) !== "." || dotOk) &&
             e.match(pattern[n])
    })

    // If n === pattern.length - 1, then there's no need for the extra stat
    // *unless* the user has specified "mark" or "stat" explicitly.
    // We know that they exist, since the readdir returned them.
    if (n === pattern.length - 1 &&
        !this.mark &&
        !this.stat) {
      entries.forEach(function (e) {
        if (prefix) {
          if (prefix !== "/") e = prefix + "/" + e
          else e = prefix + e
        }
        if (e.charAt(0) === "/" && !this.nomount) {
          e = path.join(this.root, e)
        }

        if (process.platform === "win32")
          e = e.replace(/\\/g, "/")

        this.matches[index] = this.matches[index] || {}
        this.matches[index][e] = true
        this.emitMatch(e)
      }, this)
      return cb.call(this)
    }


    // now test all the remaining entries as stand-ins for that part
    // of the pattern.
    var l = entries.length
    , errState = null
    if (l === 0) return cb() // no matches possible
    entries.forEach(function (e) {
      var p = pattern.slice(0, n).concat(e).concat(pattern.slice(n + 1))
      this._process(p, depth + 1, index, function (er) {
        if (errState) return
        if (er) return cb(errState = er)
        if (--l === 0) return cb.call(this)
      })
    }, this)
  })

}

function gsKey (pattern) {
  return '**' + pattern.map(function (p) {
    return (p === minimatch.GLOBSTAR) ? '**' : (''+p)
  }).join('/')
}

Glob.prototype._stat = function (f, cb) {
  assert(this instanceof Glob)
  var abs = f
  if (f.charAt(0) === "/") {
    abs = path.join(this.root, f)
  } else if (this.changedCwd) {
    abs = path.resolve(this.cwd, f)
  }

  if (f.length > this.maxLength) {
    var er = new Error("Path name too long")
    er.code = "ENAMETOOLONG"
    er.path = f
    return this._afterStat(f, abs, cb, er)
  }

  this.log('stat', [this.cwd, f, '=', abs])

  if (!this.stat && this.cache.hasOwnProperty(f)) {
    var exists = this.cache[f]
    , isDir = exists && (Array.isArray(exists) || exists === 2)
    if (this.sync) return cb.call(this, !!exists, isDir)
    return process.nextTick(cb.bind(this, !!exists, isDir))
  }

  var stat = this.statCache[abs]
  if (this.sync || stat) {
    var er
    try {
      stat = fs.statSync(abs)
    } catch (e) {
      er = e
    }
    this._afterStat(f, abs, cb, er, stat)
  } else {
    fs.stat(abs, this._afterStat.bind(this, f, abs, cb))
  }
}

Glob.prototype._afterStat = function (f, abs, cb, er, stat) {
  var exists
  assert(this instanceof Glob)

  if (abs.slice(-1) === "/" && stat && !stat.isDirectory()) {
    this.log("should be ENOTDIR, fake it")

    er = new Error("ENOTDIR, not a directory '" + abs + "'")
    er.path = abs
    er.code = "ENOTDIR"
    stat = null
  }

  var emit = !this.statCache[abs]
  this.statCache[abs] = stat

  if (er || !stat) {
    exists = false
  } else {
    exists = stat.isDirectory() ? 2 : 1
    if (emit)
      this.emit('stat', f, stat)
  }
  this.cache[f] = this.cache[f] || exists
  cb.call(this, !!exists, exists === 2)
}

Glob.prototype._readdir = function (f, cb) {
  assert(this instanceof Glob)
  var abs = f
  if (f.charAt(0) === "/") {
    abs = path.join(this.root, f)
  } else if (isAbsolute(f)) {
    abs = f
  } else if (this.changedCwd) {
    abs = path.resolve(this.cwd, f)
  }

  if (f.length > this.maxLength) {
    var er = new Error("Path name too long")
    er.code = "ENAMETOOLONG"
    er.path = f
    return this._afterReaddir(f, abs, cb, er)
  }

  this.log('readdir', [this.cwd, f, abs])
  if (this.cache.hasOwnProperty(f)) {
    var c = this.cache[f]
    if (Array.isArray(c)) {
      if (this.sync) return cb.call(this, null, c)
      return process.nextTick(cb.bind(this, null, c))
    }

    if (!c || c === 1) {
      // either ENOENT or ENOTDIR
      var code = c ? "ENOTDIR" : "ENOENT"
      , er = new Error((c ? "Not a directory" : "Not found") + ": " + f)
      er.path = f
      er.code = code
      this.log(f, er)
      if (this.sync) return cb.call(this, er)
      return process.nextTick(cb.bind(this, er))
    }

    // at this point, c === 2, meaning it's a dir, but we haven't
    // had to read it yet, or c === true, meaning it's *something*
    // but we don't have any idea what.  Need to read it, either way.
  }

  if (this.sync) {
    var er, entries
    try {
      entries = fs.readdirSync(abs)
    } catch (e) {
      er = e
    }
    return this._afterReaddir(f, abs, cb, er, entries)
  }

  fs.readdir(abs, this._afterReaddir.bind(this, f, abs, cb))
}

Glob.prototype._afterReaddir = function (f, abs, cb, er, entries) {
  assert(this instanceof Glob)
  if (entries && !er) {
    this.cache[f] = entries
    // if we haven't asked to stat everything for suresies, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.  This also gets us one step
    // further into ELOOP territory.
    if (!this.mark && !this.stat) {
      entries.forEach(function (e) {
        if (f === "/") e = f + e
        else e = f + "/" + e
        this.cache[e] = true
      }, this)
    }

    return cb.call(this, er, entries)
  }

  // now handle errors, and cache the information
  if (er) switch (er.code) {
    case "ENOTDIR": // totally normal. means it *does* exist.
      this.cache[f] = 1
      return cb.call(this, er)
    case "ENOENT": // not terribly unusual
    case "ELOOP":
    case "ENAMETOOLONG":
    case "UNKNOWN":
      this.cache[f] = false
      return cb.call(this, er)
    default: // some unusual error.  Treat as failure.
      this.cache[f] = false
      if (this.strict) this.emit("error", er)
      if (!this.silent) console.error("glob error", er)
      return cb.call(this, er)
  }
}

var isAbsolute = process.platform === "win32" ? absWin : absUnix

function absWin (p) {
  if (absUnix(p)) return true
  // pull off the device/UNC bit from a windows path.
  // from node's lib/path.js
  var splitDeviceRe =
      /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/
    , result = splitDeviceRe.exec(p)
    , device = result[1] || ''
    , isUnc = device && device.charAt(1) !== ':'
    , isAbsolute = !!result[2] || isUnc // UNC paths are always absolute

  return isAbsolute
}

function absUnix (p) {
  return p.charAt(0) === "/" || p === ""
}
  
}
,
          
            "93c060d3dbadbf5b71bea0128dd3894a": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/inherits/inherits.js
function(exports,require,module,__filename,__dirname) {
module.exports = require('util').inherits
  
}
,
          
            "7c26fc24b695f2afbc284bbd5f64d6a4": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/inherits/inherits_browser.js
function(exports,require,module,__filename,__dirname) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}
  
}
,
          
            "88a2f874fdc12dd1b1fcd6c9746edeb1": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/inherits/test.js
function(exports,require,module,__filename,__dirname) {
var inherits = require('./inherits.js')
var assert = require('assert')

function test(c) {
  assert(c.constructor === Child)
  assert(c.constructor.super_ === Parent)
  assert(Object.getPrototypeOf(c) === Child.prototype)
  assert(Object.getPrototypeOf(Object.getPrototypeOf(c)) === Parent.prototype)
  assert(c instanceof Child)
  assert(c instanceof Parent)
}

function Child() {
  Parent.call(this)
  test(this)
}

function Parent() {}

inherits(Child, Parent)

var c = new Child
test(c)

console.log('ok')
  
}
,
          
            "7fac57700855500d7665f727d28e48ef": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/minimatch/minimatch.js
function(exports,require,module,__filename,__dirname) {
;(function (require, exports, module, platform) {

if (module) module.exports = minimatch
else exports.minimatch = minimatch

if (!require) {
  require = function (id) {
    switch (id) {
      case "sigmund": return function sigmund (obj) {
        return JSON.stringify(obj)
      }
      case "path": return { basename: function (f) {
        f = f.split(/[\/\\]/)
        var e = f.pop()
        if (!e) e = f.pop()
        return e
      }}
      case "lru-cache": return function LRUCache () {
        // not quite an LRU, but still space-limited.
        var cache = {}
        var cnt = 0
        this.set = function (k, v) {
          cnt ++
          if (cnt >= 100) cache = {}
          cache[k] = v
        }
        this.get = function (k) { return cache[k] }
      }
    }
  }
}

minimatch.Minimatch = Minimatch

var LRU = require("lru-cache")
  , cache = minimatch.cache = new LRU({max: 100})
  , GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
  , sigmund = require("sigmund")

var path = require("path")
  // any single thing other than /
  // don't need to escape / when using new RegExp()
  , qmark = "[^/]"

  // * => any number of characters
  , star = qmark + "*?"

  // ** when dots are allowed.  Anything goes, except .. and .
  // not (^ or / followed by one or two dots followed by $ or /),
  // followed by anything, any number of times.
  , twoStarDot = "(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?"

  // not a ^ or / followed by a dot,
  // followed by anything, any number of times.
  , twoStarNoDot = "(?:(?!(?:\\\/|^)\\.).)*?"

  // characters that need to be escaped in RegExp.
  , reSpecials = charSet("().*{}+?[]^$\\!")

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split("").reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}


function minimatch (p, pattern, options) {
  if (typeof pattern !== "string") {
    throw new TypeError("glob pattern string required")
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === "#") {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === "") return p === ""

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options, cache)
  }

  if (typeof pattern !== "string") {
    throw new TypeError("glob pattern string required")
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows: need to use /, not \
  // On other platforms, \ is a valid (albeit bad) filename char.
  if (platform === "win32") {
    pattern = pattern.split("\\").join("/")
  }

  // lru storage.
  // these things aren't particularly big, but walking down the string
  // and turning it into a regexp can get pretty costly.
  var cacheKey = pattern + "\n" + sigmund(options)
  var cached = minimatch.cache.get(cacheKey)
  if (cached) return cached
  minimatch.cache.set(cacheKey, this)

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function() {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === "#") {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return -1 === s.indexOf(false)
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
    , negate = false
    , options = this.options
    , negateOffset = 0

  if (options.nonegate) return

  for ( var i = 0, l = pattern.length
      ; i < l && pattern.charAt(i) === "!"
      ; i ++) {
    negate = !negate
    negateOffset ++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return new Minimatch(pattern, options).braceExpand()
}

Minimatch.prototype.braceExpand = braceExpand
function braceExpand (pattern, options) {
  options = options || this.options
  pattern = typeof pattern === "undefined"
    ? this.pattern : pattern

  if (typeof pattern === "undefined") {
    throw new Error("undefined pattern")
  }

  if (options.nobrace ||
      !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  var escaping = false

  // examples and comments refer to this crazy pattern:
  // a{b,c{d,e},{f,g}h}x{y,z}
  // expected:
  // abxy
  // abxz
  // acdxy
  // acdxz
  // acexy
  // acexz
  // afhxy
  // afhxz
  // aghxy
  // aghxz

  // everything before the first \{ is just a prefix.
  // So, we pluck that off, and work with the rest,
  // and then prepend it to everything we find.
  if (pattern.charAt(0) !== "{") {
    this.debug(pattern)
    var prefix = null
    for (var i = 0, l = pattern.length; i < l; i ++) {
      var c = pattern.charAt(i)
      this.debug(i, c)
      if (c === "\\") {
        escaping = !escaping
      } else if (c === "{" && !escaping) {
        prefix = pattern.substr(0, i)
        break
      }
    }

    // actually no sets, all { were escaped.
    if (prefix === null) {
      this.debug("no sets")
      return [pattern]
    }

   var tail = braceExpand.call(this, pattern.substr(i), options)
    return tail.map(function (t) {
      return prefix + t
    })
  }

  // now we have something like:
  // {b,c{d,e},{f,g}h}x{y,z}
  // walk through the set, expanding each part, until
  // the set ends.  then, we'll expand the suffix.
  // If the set only has a single member, then'll put the {} back

  // first, handle numeric sets, since they're easier
  var numset = pattern.match(/^\{(-?[0-9]+)\.\.(-?[0-9]+)\}/)
  if (numset) {
    this.debug("numset", numset[1], numset[2])
    var suf = braceExpand.call(this, pattern.substr(numset[0].length), options)
      , start = +numset[1]
      , end = +numset[2]
      , inc = start > end ? -1 : 1
      , set = []
    for (var i = start; i != (end + inc); i += inc) {
      // append all the suffixes
      for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
        set.push(i + suf[ii])
      }
    }
    return set
  }

  // ok, walk through the set
  // We hope, somewhat optimistically, that there
  // will be a } at the end.
  // If the closing brace isn't found, then the pattern is
  // interpreted as braceExpand("\\" + pattern) so that
  // the leading \{ will be interpreted literally.
  var i = 1 // skip the \{
    , depth = 1
    , set = []
    , member = ""
    , sawEnd = false
    , escaping = false

  function addMember () {
    set.push(member)
    member = ""
  }

  this.debug("Entering for")
  FOR: for (i = 1, l = pattern.length; i < l; i ++) {
    var c = pattern.charAt(i)
    this.debug("", i, c)

    if (escaping) {
      escaping = false
      member += "\\" + c
    } else {
      switch (c) {
        case "\\":
          escaping = true
          continue

        case "{":
          depth ++
          member += "{"
          continue

        case "}":
          depth --
          // if this closes the actual set, then we're done
          if (depth === 0) {
            addMember()
            // pluck off the close-brace
            i ++
            break FOR
          } else {
            member += c
            continue
          }

        case ",":
          if (depth === 1) {
            addMember()
          } else {
            member += c
          }
          continue

        default:
          member += c
          continue
      } // switch
    } // else
  } // for

  // now we've either finished the set, and the suffix is
  // pattern.substr(i), or we have *not* closed the set,
  // and need to escape the leading brace
  if (depth !== 0) {
    this.debug("didn't close", pattern)
    return braceExpand.call(this, "\\" + pattern, options)
  }

  // x{y,z} -> ["xy", "xz"]
  this.debug("set", set)
  this.debug("suffix", pattern.substr(i))
  var suf = braceExpand.call(this, pattern.substr(i), options)
  // ["b", "c{d,e}","{f,g}h"] ->
  //   [["b"], ["cd", "ce"], ["fh", "gh"]]
  var addBraces = set.length === 1
  this.debug("set pre-expanded", set)
  set = set.map(function (p) {
    return braceExpand.call(this, p, options)
  }, this)
  this.debug("set expanded", set)


  // [["b"], ["cd", "ce"], ["fh", "gh"]] ->
  //   ["b", "cd", "ce", "fh", "gh"]
  set = set.reduce(function (l, r) {
    return l.concat(r)
  })

  if (addBraces) {
    set = set.map(function (s) {
      return "{" + s + "}"
    })
  }

  // now attach the suffixes.
  var ret = []
  for (var i = 0, l = set.length; i < l; i ++) {
    for (var ii = 0, ll = suf.length; ii < ll; ii ++) {
      ret.push(set[i] + suf[ii])
    }
  }
  return ret
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === "**") return GLOBSTAR
  if (pattern === "") return ""

  var re = ""
    , hasMagic = !!options.nocase
    , escaping = false
    // ? => one single character
    , patternListStack = []
    , plType
    , stateChar
    , inClass = false
    , reClassStart = -1
    , classStart = -1
    // . and .. never match anything that doesn't start with .,
    // even when options.dot is set.
    , patternStart = pattern.charAt(0) === "." ? "" // anything
      // not (start or / followed by . or .. followed by / or end)
      : options.dot ? "(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))"
      : "(?!\\.)"
    , self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case "*":
          re += star
          hasMagic = true
          break
        case "?":
          re += qmark
          hasMagic = true
          break
        default:
          re += "\\"+stateChar
          break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for ( var i = 0, len = pattern.length, c
      ; (i < len) && (c = pattern.charAt(i))
      ; i ++ ) {

    this.debug("%s\t%s %s %j", pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += "\\" + c
      escaping = false
      continue
    }

    SWITCH: switch (c) {
      case "/":
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case "\\":
        clearStateChar()
        escaping = true
        continue

      // the various stateChar values
      // for the "extglob" stuff.
      case "?":
      case "*":
      case "+":
      case "@":
      case "!":
        this.debug("%s\t%s %s %j <-- stateChar", pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === "!" && i === classStart + 1) c = "^"
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
        continue

      case "(":
        if (inClass) {
          re += "("
          continue
        }

        if (!stateChar) {
          re += "\\("
          continue
        }

        plType = stateChar
        patternListStack.push({ type: plType
                              , start: i - 1
                              , reStart: re.length })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === "!" ? "(?:(?!" : "(?:"
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
        continue

      case ")":
        if (inClass || !patternListStack.length) {
          re += "\\)"
          continue
        }

        clearStateChar()
        hasMagic = true
        re += ")"
        plType = patternListStack.pop().type
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        switch (plType) {
          case "!":
            re += "[^/]*?)"
            break
          case "?":
          case "+":
          case "*": re += plType
          case "@": break // the default anyway
        }
        continue

      case "|":
        if (inClass || !patternListStack.length || escaping) {
          re += "\\|"
          escaping = false
          continue
        }

        clearStateChar()
        re += "|"
        continue

      // these are mostly the same in regexp and glob
      case "[":
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += "\\" + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
        continue

      case "]":
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += "\\" + c
          escaping = false
          continue
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
        continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
                   && !(c === "^" && inClass)) {
          re += "\\"
        }

        re += c

    } // switch
  } // for


  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    var cs = pattern.substr(classStart + 1)
      , sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + "\\[" + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  var pl
  while (pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + 3)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2})*)(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = "\\"
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + "|"
    })

    this.debug("tail=%j\n   %s", tail, tail)
    var t = pl.type === "*" ? star
          : pl.type === "?" ? qmark
          : "\\" + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart)
       + t + "\\("
       + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += "\\\\"
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case ".":
    case "[":
    case "(": addPatternStart = true
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== "" && hasMagic) re = "(?=.)" + re

  if (addPatternStart) re = patternStart + re

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [ re, hasMagic ]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? "i" : ""
    , regExp = new RegExp("^" + re + "$", flags)

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) return this.regexp = false
  var options = this.options

  var twoStar = options.noglobstar ? star
      : options.dot ? twoStarDot
      : twoStarNoDot
    , flags = options.nocase ? "i" : ""

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
           : (typeof p === "string") ? regExpEscape(p)
           : p._src
    }).join("\\\/")
  }).join("|")

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = "^(?:" + re + ")$"

  // can match anything, as long as it's not this.
  if (this.negate) re = "^(?!" + re + ").*$"

  try {
    return this.regexp = new RegExp(re, flags)
  } catch (ex) {
    return this.regexp = false
  }
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug("match", f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ""

  if (f === "/" && partial) return true

  var options = this.options

  // windows: need to use /, not \
  // On other platforms, \ is a valid (albeit bad) filename char.
  if (platform === "win32") {
    f = f.split("\\").join("/")
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, "split", f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, "set", set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename;
  for (var i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (var i = 0, l = set.length; i < l; i ++) {
    var pattern = set[i], file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug("matchOne",
              { "this": this
              , file: file
              , pattern: pattern })

  this.debug("matchOne", file.length, pattern.length)

  for ( var fi = 0
          , pi = 0
          , fl = file.length
          , pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi ++, pi ++ ) {

    this.debug("matchOne loop")
    var p = pattern[pi]
      , f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
        , pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for ( ; fi < fl; fi ++) {
          if (file[fi] === "." || file[fi] === ".." ||
              (!options.dot && file[fi].charAt(0) === ".")) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      WHILE: while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while',
                    file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === "." || swallowee === ".." ||
              (!options.dot && swallowee.charAt(0) === ".")) {
            this.debug("dot detected!", file, fr, pattern, pr)
            break WHILE
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr ++
        }
      }
      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug("\n>>> no match, partial?", file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === "string") {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug("string match", p, f, hit)
    } else {
      hit = f.match(p)
      this.debug("pattern match", p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === "")
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error("wtf?")
}


// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, "$1")
}


function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}

})( typeof require === "function" ? require : null,
    this,
    typeof module === "object" ? module : null,
    typeof process === "object" ? process.platform : "win32"
  )
  
}
,
          
            "1c3366e52bad0c28e654fc4c1666f9b5": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/minimatch/node_modules/lru-cache/bar.js
function(exports,require,module,__filename,__dirname) {
console.log("bar");module.exports = "bar"; require("./foo.js")
  
}
,
          
            "5c949b856330ff40ecf3603886fb4fb3": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/minimatch/node_modules/lru-cache/foo.js
function(exports,require,module,__filename,__dirname) {
console.log(require("."))
  
}
,
          
            "a9a901aa71a9cbc5a64febc1805ea9a0": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/minimatch/node_modules/lru-cache/lib/lru-cache.js
function(exports,require,module,__filename,__dirname) {
;(function () { // closure for web browsers

if (typeof module === 'object' && module.exports) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  this.LRUCache = LRUCache
}

function hOP (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function naiveLength () { return 1 }

function LRUCache (options) {
  if (!(this instanceof LRUCache))
    return new LRUCache(options)

  if (typeof options === 'number')
    options = { max: options }

  if (!options)
    options = {}

  this._max = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
    this._max = Infinity

  this._lengthCalculator = options.length || naiveLength
  if (typeof this._lengthCalculator !== "function")
    this._lengthCalculator = naiveLength

  this._allowStale = options.stale || false
  this._maxAge = options.maxAge || null
  this._dispose = options.dispose
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, "max",
  { set : function (mL) {
      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
      this._max = mL
      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._max }
  , enumerable : true
  })

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, "lengthCalculator",
  { set : function (lC) {
      if (typeof lC !== "function") {
        this._lengthCalculator = naiveLength
        this._length = this._itemCount
        for (var key in this._cache) {
          this._cache[key].length = 1
        }
      } else {
        this._lengthCalculator = lC
        this._length = 0
        for (var key in this._cache) {
          this._cache[key].length = this._lengthCalculator(this._cache[key].value)
          this._length += this._cache[key].length
        }
      }

      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._lengthCalculator }
  , enumerable : true
  })

Object.defineProperty(LRUCache.prototype, "length",
  { get : function () { return this._length }
  , enumerable : true
  })


Object.defineProperty(LRUCache.prototype, "itemCount",
  { get : function () { return this._itemCount }
  , enumerable : true
  })

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  var i = 0
  var itemCount = this._itemCount

  for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
    i++
    var hit = this._lruList[k]
    if (isStale(this, hit)) {
      del(this, hit)
      if (!this._allowStale) hit = undefined
    }
    if (hit) {
      fn.call(thisp, hit.value, hit.key, this)
    }
  }
}

LRUCache.prototype.keys = function () {
  var keys = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    keys[i++] = hit.key
  }
  return keys
}

LRUCache.prototype.values = function () {
  var values = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    values[i++] = hit.value
  }
  return values
}

LRUCache.prototype.reset = function () {
  if (this._dispose && this._cache) {
    for (var k in this._cache) {
      this._dispose(k, this._cache[k].value)
    }
  }

  this._cache = Object.create(null) // hash of items by key
  this._lruList = Object.create(null) // list of items in order of use recency
  this._mru = 0 // most recently used
  this._lru = 0 // least recently used
  this._length = 0 // number of items in the list
  this._itemCount = 0
}

// Provided for debugging/dev purposes only. No promises whatsoever that
// this API stays stable.
LRUCache.prototype.dump = function () {
  return this._cache
}

LRUCache.prototype.dumpLru = function () {
  return this._lruList
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this._maxAge
  var now = maxAge ? Date.now() : 0

  if (hOP(this._cache, key)) {
    // dispose of the old one before overwriting
    if (this._dispose)
      this._dispose(key, this._cache[key].value)

    this._cache[key].now = now
    this._cache[key].maxAge = maxAge
    this._cache[key].value = value
    this.get(key)
    return true
  }

  var len = this._lengthCalculator(value)
  var hit = new Entry(key, value, this._mru++, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this._max) {
    if (this._dispose) this._dispose(key, value)
    return false
  }

  this._length += hit.length
  this._lruList[hit.lu] = this._cache[key] = hit
  this._itemCount ++

  if (this._length > this._max)
    trim(this)

  return true
}

LRUCache.prototype.has = function (key) {
  if (!hOP(this._cache, key)) return false
  var hit = this._cache[key]
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var hit = this._lruList[this._lru]
  del(this, hit)
  return hit || null
}

LRUCache.prototype.del = function (key) {
  del(this, this._cache[key])
}

function get (self, key, doUse) {
  var hit = self._cache[key]
  if (hit) {
    if (isStale(self, hit)) {
      del(self, hit)
      if (!self._allowStale) hit = undefined
    } else {
      if (doUse) use(self, hit)
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale(self, hit) {
  if (!hit || (!hit.maxAge && !self._maxAge)) return false
  var stale = false;
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self._maxAge && (diff > self._maxAge)
  }
  return stale;
}

function use (self, hit) {
  shiftLU(self, hit)
  hit.lu = self._mru ++
  self._lruList[hit.lu] = hit
}

function trim (self) {
  while (self._lru < self._mru && self._length > self._max)
    del(self, self._lruList[self._lru])
}

function shiftLU (self, hit) {
  delete self._lruList[ hit.lu ]
  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
}

function del (self, hit) {
  if (hit) {
    if (self._dispose) self._dispose(hit.key, hit.value)
    self._length -= hit.length
    self._itemCount --
    delete self._cache[ hit.key ]
    shiftLU(self, hit)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, lu, length, now, maxAge) {
  this.key = key
  this.value = value
  this.lu = lu
  this.length = length
  this.now = now
  if (maxAge) this.maxAge = maxAge
}

})()
  
}
,
          
            "6590f59d9cf842e95afe0b5f899e0e24": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/minimatch/node_modules/sigmund/bench.js
function(exports,require,module,__filename,__dirname) {
// different ways to id objects
// use a req/res pair, since it's crazy deep and cyclical

// sparseFE10 and sigmund are usually pretty close, which is to be expected,
// since they are essentially the same algorithm, except that sigmund handles
// regular expression objects properly.


var http = require('http')
var util = require('util')
var sigmund = require('./sigmund.js')
var sreq, sres, creq, cres, test

http.createServer(function (q, s) {
  sreq = q
  sres = s
  sres.end('ok')
  this.close(function () { setTimeout(function () {
    start()
  }, 200) })
}).listen(1337, function () {
  creq = http.get({ port: 1337 })
  creq.on('response', function (s) { cres = s })
})

function start () {
  test = [sreq, sres, creq, cres]
  // test = sreq
  // sreq.sres = sres
  // sreq.creq = creq
  // sreq.cres = cres

  for (var i in exports.compare) {
    console.log(i)
    var hash = exports.compare[i]()
    console.log(hash)
    console.log(hash.length)
    console.log('')
  }

  require('bench').runMain()
}

function customWs (obj, md, d) {
  d = d || 0
  var to = typeof obj
  if (to === 'undefined' || to === 'function' || to === null) return ''
  if (d > md || !obj || to !== 'object') return ('' + obj).replace(/[\n ]+/g, '')

  if (Array.isArray(obj)) {
    return obj.map(function (i, _, __) {
      return customWs(i, md, d + 1)
    }).reduce(function (a, b) { return a + b }, '')
  }

  var keys = Object.keys(obj)
  return keys.map(function (k, _, __) {
    return k + ':' + customWs(obj[k], md, d + 1)
  }).reduce(function (a, b) { return a + b }, '')
}

function custom (obj, md, d) {
  d = d || 0
  var to = typeof obj
  if (to === 'undefined' || to === 'function' || to === null) return ''
  if (d > md || !obj || to !== 'object') return '' + obj

  if (Array.isArray(obj)) {
    return obj.map(function (i, _, __) {
      return custom(i, md, d + 1)
    }).reduce(function (a, b) { return a + b }, '')
  }

  var keys = Object.keys(obj)
  return keys.map(function (k, _, __) {
    return k + ':' + custom(obj[k], md, d + 1)
  }).reduce(function (a, b) { return a + b }, '')
}

function sparseFE2 (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    Object.keys(v).forEach(function (k, _, __) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') return
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') return
      soFar += k + ':'
      ch(v[k], depth + 1)
    })
    soFar += '}'
  }
  ch(obj, 0)
  return soFar
}

function sparseFE (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    Object.keys(v).forEach(function (k, _, __) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') return
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') return
      soFar += k
      ch(v[k], depth + 1)
    })
  }
  ch(obj, 0)
  return soFar
}

function sparse (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    for (var k in v) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') continue
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') continue
      soFar += k
      ch(v[k], depth + 1)
    }
  }
  ch(obj, 0)
  return soFar
}

function noCommas (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    for (var k in v) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') continue
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') continue
      soFar += k + ':'
      ch(v[k], depth + 1)
    }
    soFar += '}'
  }
  ch(obj, 0)
  return soFar
}


function flatten (obj, maxDepth) {
  var seen = []
  var soFar = ''
  function ch (v, depth) {
    if (depth > maxDepth) return
    if (typeof v === 'function' || typeof v === 'undefined') return
    if (typeof v !== 'object' || !v) {
      soFar += v
      return
    }
    if (seen.indexOf(v) !== -1 || depth === maxDepth) return
    seen.push(v)
    soFar += '{'
    for (var k in v) {
      // pseudo-private values.  skip those.
      if (k.charAt(0) === '_') continue
      var to = typeof v[k]
      if (to === 'function' || to === 'undefined') continue
      soFar += k + ':'
      ch(v[k], depth + 1)
      soFar += ','
    }
    soFar += '}'
  }
  ch(obj, 0)
  return soFar
}

exports.compare =
{
  // 'custom 2': function () {
  //   return custom(test, 2, 0)
  // },
  // 'customWs 2': function () {
  //   return customWs(test, 2, 0)
  // },
  'JSON.stringify (guarded)': function () {
    var seen = []
    return JSON.stringify(test, function (k, v) {
      if (typeof v !== 'object' || !v) return v
      if (seen.indexOf(v) !== -1) return undefined
      seen.push(v)
      return v
    })
  },

  'flatten 10': function () {
    return flatten(test, 10)
  },

  // 'flattenFE 10': function () {
  //   return flattenFE(test, 10)
  // },

  'noCommas 10': function () {
    return noCommas(test, 10)
  },

  'sparse 10': function () {
    return sparse(test, 10)
  },

  'sparseFE 10': function () {
    return sparseFE(test, 10)
  },

  'sparseFE2 10': function () {
    return sparseFE2(test, 10)
  },

  sigmund: function() {
    return sigmund(test, 10)
  },


  // 'util.inspect 1': function () {
  //   return util.inspect(test, false, 1, false)
  // },
  // 'util.inspect undefined': function () {
  //   util.inspect(test)
  // },
  // 'util.inspect 2': function () {
  //   util.inspect(test, false, 2, false)
  // },
  // 'util.inspect 3': function () {
  //   util.inspect(test, false, 3, false)
  // },
  // 'util.inspect 4': function () {
  //   util.inspect(test, false, 4, false)
  // },
  // 'util.inspect Infinity': function () {
  //   util.inspect(test, false, Infinity, false)
  // }
}

/** results
**/
  
}
,
          
            "e410aee77c9cf4c364847c88c19b84cc": // from: node_modules/json-schema-tests/node_modules/glob/node_modules/minimatch/node_modules/sigmund/sigmund.js
function(exports,require,module,__filename,__dirname) {
module.exports = sigmund
function sigmund (subject, maxSessions) {
    maxSessions = maxSessions || 10;
    var notes = [];
    var analysis = '';
    var RE = RegExp;

    function psychoAnalyze (subject, session) {
        if (session > maxSessions) return;

        if (typeof subject === 'function' ||
            typeof subject === 'undefined') {
            return;
        }

        if (typeof subject !== 'object' || !subject ||
            (subject instanceof RE)) {
            analysis += subject;
            return;
        }

        if (notes.indexOf(subject) !== -1 || session === maxSessions) return;

        notes.push(subject);
        analysis += '{';
        Object.keys(subject).forEach(function (issue, _, __) {
            // pseudo-private values.  skip those.
            if (issue.charAt(0) === '_') return;
            var to = typeof subject[issue];
            if (to === 'function' || to === 'undefined') return;
            analysis += issue;
            psychoAnalyze(subject[issue], session + 1);
        });
    }
    psychoAnalyze(subject, 0);
    return analysis;
}

// vim: set softtabstop=4 shiftwidth=4:
  
}
,
          
            "fb0af819920efafd60e3dd09a43e4816": // from: node_modules/json-schema-tests/node_modules/testify/src/reporters.coffee
function(exports,require,module,__filename,__dirname) {
var ConsoleReporter, DOMReporter, colors;

colors = require("colors");

ConsoleReporter = (function() {

  function ConsoleReporter(_arg) {
    var _this = this;
    this.color = _arg.color, this.stack = _arg.stack;
    this.counts = {
      passed: 0,
      failed: 0,
      errored: 0,
      incomplete: 0
    };
    process.on("exit", function() {
      _this.summarize();
      if (_this.counts.failed > 0) {
        return process.exit(1);
      }
    });
  }

  ConsoleReporter.prototype.summarize = function() {
    var summary;
    summary = [this.colorize("pass", "Passed: " + this.counts.passed)];
    if (this.counts.failed > 0) {
      summary.push(this.colorize("failure", "Failed: " + this.counts.failed));
    }
    if (this.counts.errored > 0) {
      summary.push(this.colorize("error", "Errored: " + this.counts.errored));
    }
    if (this.counts.incomplete > 0) {
      summary.push(this.colorize("incomplete", "Incomplete: " + this.counts.errored));
    }
    console.log();
    return console.log(summary.join("    "));
  };

  ConsoleReporter.prototype.add_suite = function(suite) {
    var _this = this;
    suite.emitter.on("child", function(child) {
      return _this.hook(child);
    });
    return suite.fsm.emitter.on("COMPLETE", function() {
      return process.nextTick((function() {
        return _this.report_suite(suite);
      }));
    });
  };

  ConsoleReporter.prototype.hook = function(child) {
    var _this = this;
    child.emitter.on("child", function(context) {
      return _this.hook(context);
    });
    return child.emitter.on("status", function(status) {
      return _this.status(status);
    });
  };

  ConsoleReporter.prototype.status = function(type) {
    var abbrev;
    if (abbrev = this.abbreviation[type]) {
      return process.stdout.write(this.colorize(type, abbrev));
    }
  };

  ConsoleReporter.prototype.abbreviation = {
    pass: ".",
    incomplete: "I",
    failure: "F",
    error: "E"
  };

  ConsoleReporter.prototype.report_suite = function(suite) {
    var level, result, test, _i, _len, _results;
    if (suite._reported) {
      return;
    } else {
      suite._reported = true;
    }
    if (suite.failed) {
      suite.name = "" + suite.name + " (FAILED)";
    } else {
      suite.name = "" + suite.name + " (PASSED)";
    }
    result = [];
    this.collect(suite, result);
    _results = [];
    for (_i = 0, _len = result.length; _i < _len; _i++) {
      test = result[_i];
      level = test.level;
      if (test.state() !== "COMPLETE") {
        this.result("" + test.name + " ( incomplete )", {
          type: "incomplete",
          level: level
        });
        _results.push(this.counts.incomplete++);
      } else if (test.failed === false) {
        this.result(test.name, {
          type: "pass",
          level: level
        });
        _results.push(this.counts.passed++);
      } else if (test.failed.constructor === String || test.failed.name === "AssertionError") {
        if (test.failed === "subtest failures") {
          _results.push(this.result("" + test.name + " ( " + (test.failed.toString()) + " )", {
            type: "container",
            level: level,
            stack: test.failed.stack
          }));
        } else {
          this.result("" + test.name + " ( " + (test.failed.toString()) + " )", {
            type: "failure",
            level: level,
            stack: test.failed.stack
          });
          _results.push(this.counts.failed++);
        }
      } else {
        this.result("" + test.name + " ( " + (test.failed.toString()) + " )", {
          type: "error",
          level: level,
          stack: test.failed.stack
        });
        _results.push(this.counts.errored++);
      }
    }
    return _results;
  };

  ConsoleReporter.prototype.collect = function(context, array) {
    var item, _i, _len, _ref, _results;
    if (array == null) {
      array = [];
    }
    array.push(context);
    _ref = context.children;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      _results.push(this.collect(item, array));
    }
    return _results;
  };

  ConsoleReporter.prototype.result = function(string, options) {
    var level, match, regex, space, where;
    if (options == null) {
      options = {};
    }
    if (!this._receiving_results) {
      console.log();
      this._receiving_results = true;
    }
    if (options.type) {
      string = this.colorize(options.type, string);
    }
    space = "";
    if (level = options.level) {
      while (level--) {
        space = space + "    ";
      }
      string = space + string;
    }
    console.log(string);
    if (this.stack && options.stack) {
      where = options.stack.split("\n")[1];
      regex = /\((.*)\)/;
      match = regex.exec(where);
      try {
        return console.log(space + match[1]);
      } catch (error) {
        return console.log(space + where.slice(7));
      }
    }
  };

  ConsoleReporter.prototype.colorize = function(type, string) {
    var color, value, _i, _len;
    if (this.color && (color = this.color_map[type])) {
      if (typeof color === "string") {
        return string[color];
      } else {
        for (_i = 0, _len = color.length; _i < _len; _i++) {
          value = color[_i];
          string = string[value];
        }
        return string;
      }
    } else {
      return string;
    }
  };

  ConsoleReporter.prototype.color_map = {
    pass: "green",
    incomplete: "magenta",
    failure: ["red", "underline"],
    error: "yellow",
    container: ["red"]
  };

  return ConsoleReporter;

})();

DOMReporter = (function() {

  function DOMReporter(id, options) {
    if (options == null) {
      options = {};
    }
    this.timeout = options.timeout || 2000;
    this.root = document.getElementById(id);
    this.suites = [];
  }

  DOMReporter.prototype.add_suite = function(suite) {
    var _this = this;
    this.suite_dom(suite);
    suite.emitter.on("child", function(child) {
      return _this.handle_child(suite, child);
    });
    suite.fsm.emitter.on("COMPLETE", function() {
      return _this.report_suite(suite);
    });
    return setTimeout((function() {
      return _this.report_suite(suite);
    }), this.timeout);
  };

  DOMReporter.prototype.handle_child = function(suite, child) {
    var _this = this;
    this.test_dom(child);
    child.emitter.on("child", function(context) {
      return _this.handle_child(suite, context);
    });
    return child.emitter.on("status", function(status) {
      return _this.status(suite, child, status);
    });
  };

  DOMReporter.prototype.report_suite = function(suite) {
    var level, test, tests, _i, _j, _len, _len1, _ref, _results;
    if (suite._reported) {
      return;
    } else {
      suite._reported = true;
    }
    if (suite.state() !== "COMPLETE") {
      suite._html.title.classList.add("incomplete");
    } else if (suite.failed === false) {
      suite._html.title.classList.add("pass");
    } else {
      suite._html.title.classList.add("failed");
    }
    tests = [];
    _ref = suite.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      test = _ref[_i];
      this.collect(test, tests);
    }
    _results = [];
    for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
      test = tests[_j];
      level = test.level;
      if (test.state() !== "COMPLETE") {
        _results.push(this.result(test, {
          type: "incomplete"
        }));
      } else if (test.failed === false) {
        _results.push(this.result(test, {
          type: "pass"
        }));
      } else if (test.failed.constructor === String || test.failed.name === "AssertionError") {
        _results.push(this.result(test, {
          type: "failure",
          stack: test.failed.stack
        }));
      } else {
        _results.push(this.result(test, {
          type: "error",
          stack: test.failed.stack
        }));
      }
    }
    return _results;
  };

  DOMReporter.prototype.collect = function(context, array) {
    var item, _i, _len, _ref;
    if (array == null) {
      array = [];
    }
    array.push(context);
    _ref = context.children;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      this.collect(item, array);
    }
    return array;
  };

  DOMReporter.prototype.suite_dom = function(suite) {
    var main, tests, title, _ref;
    suite._html = {
      main: document.createElement("div"),
      title: document.createElement("h3"),
      tests: document.createElement("ul")
    };
    _ref = suite._html, main = _ref.main, tests = _ref.tests, title = _ref.title;
    main.classList.add("testify_suite");
    title.textContent = suite.name;
    main.appendChild(title);
    main.appendChild(tests);
    return this.root.appendChild(main);
  };

  DOMReporter.prototype.test_dom = function(test) {
    var span, tests;
    test._html = {
      name: document.createElement("li")
    };
    test._html.name.classList.add("testify_test");
    span = document.createElement("span");
    span.classList.add("testify_test_name");
    span.textContent = test.name;
    test._html.name.appendChild(span);
    if (test.parent._html.tests) {

    } else {
      tests = test.parent._html.tests = document.createElement("ul");
      test.parent._html.name.appendChild(tests);
    }
    return test.parent._html.tests.appendChild(test._html.name);
  };

  DOMReporter.prototype.status = function(suite, test, type) {
    var fn,
      _this = this;
    fn = function() {
      var element, match, regex, span, stacky, where;
      element = test._html.name;
      span = element.children[0];
      span.classList.add(type);
      if (type === "failure" || type === "error") {
        span.textContent = span.textContent + (" (" + (test.failed.toString()) + ")");
        stacky = document.createElement("pre");
        where = test.failed.stack.split("\n")[1];
        regex = /\((.*)\)/;
        match = regex.exec(where);
        try {
          stacky.textContent = match[1];
        } catch (error) {
          stacky.textContent = where.slice(7);
        }
        stacky.classList.add("stack");
        return element.insertBefore(stacky, span.nextSibling);
      } else if (type === "incomplete") {
        return span.textContent = span.textContent + " (incomplete)";
      }
    };
    return setTimeout(fn, 50);
  };

  DOMReporter.prototype.result = function(test, options) {
    var element, span, type_string;
    if (test.children.length > 0 || options.type === "incomplete") {
      element = test._html.name;
      if (options.type) {
        span = element.children[0];
        span.classList.add(options.type);
        type_string = " (" + options.type + ")";
        if (options.type === "failure") {
          return span.textContent = span.textContent + (" (" + (test.failed.toString()) + ")");
        } else if (options.type === "incomplete") {
          return span.textContent = span.textContent + " (incomplete)";
        }
      }
    }
  };

  return DOMReporter;

})();

module.exports = {
  ConsoleReporter: ConsoleReporter,
  DOMReporter: DOMReporter
};
  
}
,
          
            "a086f5e1525818f1ec0007950761c180": // from: node_modules/json-schema-tests/node_modules/testify/src/test.coffee
function(exports,require,module,__filename,__dirname) {
var Context, TestContext,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

Context = require("./context");

module.exports = TestContext = (function(_super) {

  __extends(TestContext, _super);

  function TestContext() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    TestContext.__super__.constructor.apply(this, args);
    this.failed = false;
  }

  TestContext.prototype.test = function(description, work) {
    return this.child(description, work);
  };

  TestContext.prototype.run = function() {
    TestContext.reporter.add_suite(this);
    return this._run();
  };

  TestContext.prototype._run = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.work(this);
    if (this.type === "sync" || this.children.length > 0) {
      return this.event("end_of_block");
    } else {
      return this.event("childless");
    }
  };

  TestContext.prototype._run = function() {
    var _this = this;
    this.fsm.emitter.once("COMPLETE", function() {
      if (_this.timeout_id) {
        clearTimeout(_this.timeout_id);
      }
      return _this.timeout_id = void 0;
    });
    try {
      if (!this.failed) {
        this.work(this);
      }
      if (this.type === "sync" || this.children.length > 0) {
        this.event("end_of_block");
        return this.status("pass", ".");
      } else {
        if (!this.failed) {
          return this.event("childless");
        }
      }
    } catch (error) {
      this.fail(error);
      return this.event("end_of_block");
    }
  };

  TestContext.prototype.event = function() {
    var args, current, my_error;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    try {
      current = this.fsm.state;
      return TestContext.__super__.event.apply(this, args);
    } catch (error) {
      if (error.state === "COMPLETE" && error.event === "async_child") {
        my_error = new Error("Asynchronous test created after parent had completed");
        my_error.stack = error.stack.split("\n").slice(5).join("\n");
        return args[1].fail(my_error);
      } else if (error.state === "COMPLETE" && error.event === "sync_child") {
        my_error = new Error("Synchronous test created after parent had completed");
        my_error.stack = error.stack.split("\n").slice(5).join("\n");
        return args[1].fail(my_error);
      } else {
        throw error;
      }
    }
  };

  TestContext.prototype.status = function(type) {
    return this.emitter.emit("status", type);
  };

  TestContext.prototype.pass = function() {
    if (!this.failed) {
      this.status("pass");
      return this.done();
    }
  };

  TestContext.prototype.fail = function(error) {
    var message, throwaway;
    if (error.constructor === String) {
      this.status("failure");
      throwaway = new Error(error);
      message = error.toString();
      error = {
        name: "AssertionError",
        stack: throwaway.stack.split("\n").slice(1).join("\n"),
        toString: function() {
          return message;
        }
      };
    } else if (error.name === "AssertionError") {
      this.status("failure");
    } else {
      this.status("error");
    }
    if (this.type === "async") {
      this.event("completion");
    }
    return this.propagate_failure(error);
  };

  TestContext.prototype.timeout = function(milliseconds, message) {
    var fn,
      _this = this;
    fn = function() {
      return _this.fail(message || ("Timed out after " + milliseconds + " milliseconds"));
    };
    return this.timeout_id = setTimeout(fn, milliseconds);
  };

  TestContext.prototype.propagate_failure = function(error) {
    var _ref;
    this.failed = error;
    return (_ref = this.parent) != null ? _ref.propagate_failure("subtest failures") : void 0;
  };

  return TestContext;

})(Context);
  
}
,
          
            "ae4a35de06d401449ed2ceb422083a5c": // from: node_modules/json-schema-tests/node_modules/testify/src/testify.coffee
function(exports,require,module,__filename,__dirname) {
var EventEmitter, TestContext, Testify,
  __slice = [].slice;

EventEmitter = require("events").EventEmitter;

TestContext = require("./test");

Testify = {
  Context: require("./context"),
  ConsoleReporter: require("./reporters").ConsoleReporter,
  DOMReporter: require("./reporters").DOMReporter,
  TestContext: TestContext,
  count: 0,
  emitter: new EventEmitter(),
  once: function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (_ref = Testify.emitter).once.apply(_ref, args);
  },
  options: {
    color: true,
    stack: true
  },
  test: function(name, fn) {
    var suite;
    TestContext.options = Testify.options;
    TestContext.reporter || (TestContext.reporter = Testify.reporter || new Testify.ConsoleReporter(Testify.options));
    suite = new TestContext(name, fn);
    Testify.count++;
    suite.fsm.emitter.once("COMPLETE", function() {
      Testify.count--;
      if (Testify.count === 0) {
        return Testify.emitter.emit("done");
      }
    });
    suite.run();
    return suite;
  }
};

module.exports = Testify;
  
}
,
          
            "b7bac5f3a9a771d0eaaf24eea0fd6281": // from: node_modules/json-schema-tests/src/index.coffee
function(exports,require,module,__filename,__dirname) {
var SuiteRunner, path;

path = require("path");

SuiteRunner = require("./suite_runner");

module.exports = function(_arg) {
  var attribute, ignores, runner, test_number, validate, version;
  version = _arg.version, validate = _arg.validate, attribute = _arg.attribute, test_number = _arg.test_number, ignores = _arg.ignores;
  runner = new SuiteRunner({
    version: version,
    ignores: ignores
  });
  return runner.test({
    validate: validate,
    attribute: attribute,
    test_number: test_number
  });
};
  
}
,
          
            "a1a7c2c986b4e93caa6b192d14e30a95": // from: node_modules/json-schema-tests/src/suite_runner.coffee
function(exports,require,module,__filename,__dirname) {
var SuiteRunner, Testify, assert, fs, glob, path, test_path;

fs = require("fs");

path = require("path");

glob = require("glob");

assert = require("assert");

Testify = require("testify");

Testify.options.stack = false;

test_path = path.resolve(__dirname, "..", "JSON-Schema-Test-Suite/tests");

module.exports = SuiteRunner = (function() {

  function SuiteRunner(_arg) {
    this.version = _arg.version, this.ignores = _arg.ignores;
    this.suites = {};
    this.read();
  }

  SuiteRunner.prototype.read = function() {
    var file, files, key, prefix_length, string, _i, _len, _ref, _results;
    files = glob.sync("" + test_path + "/" + this.version + "/**/*.json");
    prefix_length = ("" + test_path + "/" + this.version + "/").length;
    _results = [];
    for (_i = 0, _len = files.length; _i < _len; _i++) {
      file = files[_i];
      key = file.slice(prefix_length, -5);
      if (((_ref = this.ignores) != null ? _ref[key] : void 0) === true) {
        continue;
      }
      string = fs.readFileSync(file, "utf8");
      _results.push(this.suites[key] = require(file));
    }
    return _results;
  };

  SuiteRunner.prototype.test = function(_arg) {
    var attribute, test_number, validate,
      _this = this;
    validate = _arg.validate, attribute = _arg.attribute, test_number = _arg.test_number;
    return Testify.test("JSON Schema: " + this.version, function(context) {
      var attribute_suite, _ref;
      if (attribute) {
        attribute_suite = _this.suites[attribute];
        if (!attribute_suite) {
          throw new Error("No such attribute to test: '" + attribute + "'");
        } else {
          _this.run_attribute({
            validate: validate,
            context: context,
            attribute: attribute,
            attribute_suite: attribute_suite,
            test_number: test_number
          });
        }
        if ((_ref = _this.ignores) != null ? _ref[attribute] : void 0) {
          return process.on("exit", function() {
            return console.log("Ignored these tests for " + _this.version + ":", _this.ignores[attribute]);
          });
        }
      } else {
        _this.run_all({
          validate: validate,
          context: context,
          suites: _this.suites
        });
        if (_this.ignores) {
          return process.on("exit", function() {
            var val, _ref1, _results;
            console.log("Ignored these tests for " + _this.version + ":");
            _ref1 = _this.ignores;
            _results = [];
            for (attribute in _ref1) {
              val = _ref1[attribute];
              if (val === true) {
                _results.push(console.log("\t", attribute));
              } else {
                _results.push(console.log("\t", "" + attribute + ":", val));
              }
            }
            return _results;
          });
        }
      }
    });
  };

  SuiteRunner.prototype.run_all = function(_arg) {
    var attribute, attribute_suite, context, suites, validate, _results,
      _this = this;
    validate = _arg.validate, context = _arg.context, suites = _arg.suites;
    _results = [];
    for (attribute in suites) {
      attribute_suite = suites[attribute];
      _results.push(context.test(attribute, function(context) {
        var i, suite, _i, _len, _ref, _ref1, _results1;
        _results1 = [];
        for (i = _i = 0, _len = attribute_suite.length; _i < _len; i = ++_i) {
          suite = attribute_suite[i];
          if (!((_ref = _this.ignores) != null ? (_ref1 = _ref[attribute]) != null ? _ref1.some(function(item) {
            return item === suite.description;
          }) : void 0 : void 0)) {
            _results1.push(context.test(suite.description, function() {
              var document, result, _j, _len1, _ref2, _ref3, _ref4, _results2;
              _ref2 = suite.tests;
              _results2 = [];
              for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                document = _ref2[_j];
                if (!((_ref3 = _this.ignores) != null ? (_ref4 = _ref3[attribute]) != null ? _ref4.some(function(item) {
                  return item === document.description;
                }) : void 0 : void 0)) {
                  result = validate(suite.schema, document.data);
                  _results2.push(assert.equal(result.valid, document.valid, "Failed '" + document.description + "'"));
                } else {
                  _results2.push(void 0);
                }
              }
              return _results2;
            }));
          } else {
            _results1.push(void 0);
          }
        }
        return _results1;
      }));
    }
    return _results;
  };

  SuiteRunner.prototype.run_attribute = function(_arg) {
    var attribute, attribute_suite, context, test_number, validate,
      _this = this;
    validate = _arg.validate, context = _arg.context, attribute = _arg.attribute, attribute_suite = _arg.attribute_suite, test_number = _arg.test_number;
    return context.test(attribute, function(context) {
      var i, suite, _i, _len, _ref, _ref1, _results;
      if (test_number) {
        if (suite = attribute_suite[parseInt(test_number)]) {
          return _this.run_subsuite({
            validate: validate,
            context: context,
            suite: suite
          });
        } else {
          console.log("Usage error: " + attribute + " only has " + attribute_suite.length + " tests");
          return process.exit();
        }
      } else {
        _results = [];
        for (i = _i = 0, _len = attribute_suite.length; _i < _len; i = ++_i) {
          suite = attribute_suite[i];
          if (!((_ref = _this.ignores) != null ? (_ref1 = _ref[attribute]) != null ? _ref1.some(function(item) {
            return item === suite.description;
          }) : void 0 : void 0)) {
            _results.push(_this.run_subsuite({
              attribute: attribute,
              validate: validate,
              context: context,
              suite: suite
            }));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    });
  };

  SuiteRunner.prototype.run_subsuite = function(_arg) {
    var attribute, context, suite, validate,
      _this = this;
    attribute = _arg.attribute, validate = _arg.validate, context = _arg.context, suite = _arg.suite;
    return context.test(suite.description, function(context) {
      var document, _i, _len, _ref, _ref1, _ref2, _results;
      _ref = suite.tests;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        document = _ref[_i];
        if (!((_ref1 = _this.ignores) != null ? (_ref2 = _ref1[attribute]) != null ? _ref2.some(function(item) {
          return item === document.description;
        }) : void 0 : void 0)) {
          _results.push(context.test(document.description, function() {
            var result, x;
            result = validate(suite.schema, document.data);
            if (result.valid) {
              x = "valid";
            } else {
              x = "invalid";
            }
            return assert.equal(result.valid, document.valid, "Result was " + x);
          }));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    });
  };

  return SuiteRunner;

})();
  
}
,
          
            "c4f9141dbd0d7a4e3dd3d1dc0a64c667": // from: 
function(exports,require,module,__filename,__dirname) {
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// UTILITY
var util = require('util');
var pSlice = Array.prototype.slice;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.message = options.message;
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (value === undefined) {
    return '' + value;
  }
  if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (typeof value === 'function' || value instanceof RegExp) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (typeof s == 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

assert.AssertionError.prototype.toString = function() {
  if (this.message) {
    return [this.name + ':', this.message].join(' ');
  } else {
    return [
      this.name + ':',
      truncate(JSON.stringify(this.actual, replacer), 128),
      this.operator,
      truncate(JSON.stringify(this.expected, replacer), 128)
    ].join(' ');
  }
};

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!!!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (Buffer.isBuffer(actual) && Buffer.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (actual instanceof RegExp && expected instanceof RegExp) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (typeof actual != 'object' && typeof expected != 'object') {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = Object.keys(a),
        kb = Object.keys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (expected instanceof RegExp) {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};
  
}
,
          
            "5d6e2c2d895132330e91af96bc1409c7": // from: 
function(exports,require,module,__filename,__dirname) {
//
// Adapted from http-browserify
//


var http = module.exports;
var EventEmitter = require('events').EventEmitter;
var Request;

http.request = function (params, cb) {
    if (!params) params = {};
    if (!params.host) params.host = window.location.host.split(':')[0];
    if (!params.port) params.port = window.location.port;
    
    var req = new Request(new xhrHttp, params);
    if (cb) req.on('response', cb);
    return req;
};

http.get = function (params, cb) {
    params.method = 'GET';
    var req = http.request(params, cb);
    req.end();
    return req;
};

http.Agent = function () {};
http.Agent.defaultMaxSockets = 4;

var xhrHttp = (function () {
    if (typeof window === 'undefined') {
        throw new Error('no window object present');
    }
    else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
    }
    else if (window.ActiveXObject) {
        var axs = [
            'Msxml2.XMLHTTP.6.0',
            'Msxml2.XMLHTTP.3.0',
            'Microsoft.XMLHTTP'
        ];
        for (var i = 0; i < axs.length; i++) {
            try {
                var ax = new(window.ActiveXObject)(axs[i]);
                return function () {
                    if (ax) {
                        var ax_ = ax;
                        ax = null;
                        return ax_;
                    }
                    else {
                        return new(window.ActiveXObject)(axs[i]);
                    }
                };
            }
            catch (e) {}
        }
        throw new Error('ajax not supported in this browser')
    }
    else {
        throw new Error('ajax not supported in this browser');
    }
})();


Request = (function() {
  var EventEmitter = require('events').EventEmitter;
  var Response;
  var concatStream;

  var Request = function (xhr, params) {
      var self = this;
      self.xhr = xhr;
      self.body = concatStream()

      var uri = params.host + ':' + params.port + (params.path || '/');

      xhr.open(
          params.method || 'GET',
          (params.scheme || 'http') + '://' + uri,
          true
      );

      if (params.headers) {
          Object.keys(params.headers).forEach(function (key) {
              if (!self.isSafeRequestHeader(key)) return;
              var value = params.headers[key];
              if (Array.isArray(value)) {
                  value.forEach(function (v) {
                      xhr.setRequestHeader(key, v);
                  });
              }
              else xhr.setRequestHeader(key, value)
          });
      }

      var res = new Response(xhr);
      res.on('ready', function () {
          self.emit('response', res);
      });

      xhr.onreadystatechange = function () {
          res.handle(xhr);
      };
  };

  Request.prototype = new EventEmitter;

  Request.prototype.setHeader = function (key, value) {
      if ((Array.isArray && Array.isArray(value))
      || value instanceof Array) {
          for (var i = 0; i < value.length; i++) {
              this.xhr.setRequestHeader(key, value[i]);
          }
      }
      else {
          this.xhr.setRequestHeader(key, value);
      }
  };

  Request.prototype.write = function (s) {
      this.body.write(s);
  };

  Request.prototype.end = function (s) {
      if (s !== undefined) this.body.write(s);
      this.body.end()
      this.xhr.send(this.body.getBody());
  };

  // Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
  Request.unsafeHeaders = [
      "accept-charset",
      "accept-encoding",
      "access-control-request-headers",
      "access-control-request-method",
      "connection",
      "content-length",
      "cookie",
      "cookie2",
      "content-transfer-encoding",
      "date",
      "expect",
      "host",
      "keep-alive",
      "origin",
      "referer",
      "te",
      "trailer",
      "transfer-encoding",
      "upgrade",
      "user-agent",
      "via"
  ];

  Request.prototype.isSafeRequestHeader = function (headerName) {
      if (!headerName) return false;
      return (Request.unsafeHeaders.indexOf(headerName.toLowerCase()) === -1)
  };
  
  Response = (function() {
    
    var EventEmitter = require('events').EventEmitter;

    var Response = function (xhr) {
        this.xhr = xhr;
        this.offset = 0;
    };

    Response.prototype = new EventEmitter;

    var capable = {
        streaming : true,
        status2 : true
    };

    function parseHeaders (xhr) {
        var lines = xhr.getAllResponseHeaders().split(/\r?\n/);
        var headers = {};
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line === '') continue;

            var m = line.match(/^([^:]+):\s*(.*)/);
            if (m) {
                var key = m[1].toLowerCase(), value = m[2];

                if (headers[key] !== undefined) {
                    if ((Array.isArray && Array.isArray(headers[key]))
                    || headers[key] instanceof Array) {
                        headers[key].push(value);
                    }
                    else {
                        headers[key] = [ headers[key], value ];
                    }
                }
                else {
                    headers[key] = value;
                }
            }
            else {
                headers[line] = true;
            }
        }
        return headers;
    }

    Response.prototype.getResponse = function (xhr) {
        var respType = xhr.responseType.toLowerCase();
        if (respType === "blob") return xhr.responseBlob;
        if (respType === "arraybuffer") return xhr.response;
        return xhr.responseText;
    }

    Response.prototype.getHeader = function (key) {
        return this.headers[key.toLowerCase()] || this.xhr.getResponseHeader(key);
    };

    Response.prototype.handle = function (xhr) {
        if (xhr.readyState === 2 && capable.status2) {
            try {
                this.statusCode = xhr.status;
                this.headers = parseHeaders(xhr);
            }
            catch (err) {
                capable.status2 = false;
            }

            if (capable.status2) {
                this.emit('ready');
            }
        }
        else if (capable.streaming && xhr.readyState === 3) {
            try {
                if (!this.statusCode) {
                    this.statusCode = xhr.status;
                    this.headers = parseHeaders(xhr);
                    this.emit('ready');
                }
            }
            catch (err) {}

            try {
                this.write(xhr);
            }
            catch (err) {
                capable.streaming = false;
            }
        }
        else if (xhr.readyState === 4) {
            if (!this.statusCode) {
                this.statusCode = xhr.status;
                this.emit('ready');
            }
            this.write(xhr);

            if (xhr.error) {
                this.emit('error', this.getResponse(xhr));
            }
            else this.emit('end');
        }
    };

    Response.prototype.write = function (xhr) {
        var respBody = this.getResponse(xhr);
        if (respBody.toString().match(/ArrayBuffer/)) {
            this.emit('data', new Uint8Array(respBody, this.offset));
            this.offset = respBody.byteLength;
            return;
        }
        if (respBody.length > this.offset) {
            this.emit('data', respBody.slice(this.offset));
            this.offset = respBody.length;
        }
    };
    
    return Response;
    
  })();
  
  concatStream = (function() {
    
    var stream = require('stream')
    var util = require('util')

    function ConcatStream(cb) {
      stream.Stream.call(this)
      this.writable = true
      if (cb) this.cb = cb
      this.body = []
      this.on('error', function(err) {
        if (this.cb) this.cb(err)
      })
    }

    util.inherits(ConcatStream, stream.Stream)

    ConcatStream.prototype.write = function(chunk) {
      this.body.push(chunk)
    }

    ConcatStream.prototype.destroy = function() {}

    ConcatStream.prototype.arrayConcat = function(arrs) {
      if (arrs.length === 0) return []
      if (arrs.length === 1) return arrs[0]
      return arrs.reduce(function (a, b) { return a.concat(b) })
    }

    ConcatStream.prototype.isArray = function(arr) {
      var isArray = Array.isArray(arr)
      var isTypedArray = arr.toString().match(/Array/)
      return isArray || isTypedArray
    }

    ConcatStream.prototype.getBody = function () {
      if (this.body.length === 0) return
      if (typeof(this.body[0]) === "string") return this.body.join('')
      if (this.isArray(this.body[0])) return this.arrayConcat(this.body)
      if (typeof(Buffer) !== "undefined" && Buffer.isBuffer(this.body[0])) {
        return Buffer.concat(this.body)
      }
      return this.body
    }

    ConcatStream.prototype.end = function() {
      if (this.cb) this.cb(false, this.getBody())
    }

    var exports = function(cb) {
      return new ConcatStream(cb)
    }

    exports.ConcatStream = ConcatStream
    
    return exports;
    
  })();

  return Request;
    
})();


  
}
,
          
            "bb74bebad46ddddc2a292472e1e4766b": // from: 
function(exports,require,module,__filename,__dirname) {
// Adapted from https-browserify
var http = require('http');

var https = module.exports;

for (var key in http) {
    if (http.hasOwnProperty(key)) https[key] = http[key];
};

https.request = function (params, cb) {
    if (!params) params = {};
    params.scheme = 'https';
    return http.request.call(this, params, cb);
}  
}
,
          
            "e78828afe729e92d62b73d30c483888f": // from: 
function(exports,require,module,__filename,__dirname) {
var Stat, base64Decode, fs, getFile;

getFile = function(path) {
  var file, part, parts, _i, _len;
  parts = path.split("/").slice(1);
  file = global.filesystem.root;
  for (_i = 0, _len = parts.length; _i < _len; _i++) {
    part = parts[_i];
    if (!(file = file[part])) {
      throw "File not found at '" + path + "'";
    }
  }
  return file;
};

Stat = (function() {

  function Stat(path) {
    this.file = getFile(path);
  }

  Stat.prototype.isDirectory = function() {
    return this.file.__stat.type === "directory";
  };

  Stat.prototype.isFile = function() {
    return this.file.__stat.type === "file";
  };

  Stat.prototype.isSymbolicLink = function() {
    return false;
  };

  return Stat;

})();

base64Decode = function(string) {
  return decodeURIComponent(escape(window.atob(string)));
};

var fs = {
  readFileSync: function(path, encoding) {
    var file;
    file = getFile(path);
    return global.filesystem.read(file);
  },
  readdirSync: function(path) {
    var file;
    file = getFile(path);
    if (file.__stat.type === "directory") {
      var result = [];
      for (var key in file) {
        // TODO: this is not a great convention, since it's hardly
        // impossible that a file might start with two underscores
        if (!(/^__/.test(key))) {
          result.push( key );
        }
      }
      return result;
    } else {
      throw "Not a directory: '" + path + "'" ;
    }
  },
  statSync: function(path) {
    return new Stat(path);
  },
  lstatSync: function(path) {
    return this.statSync(path);
  },
  // realpath Sync adapted from Node source
  realpathSync: function realpathSync(p, cache) {

    var isWindows = process.platform === 'win32';

    // Regexp that finds the next partion of a (partial) path
    // result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
    if (isWindows) {
      var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
      var nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }

    // Regex to find the device root, including trailing slash. E.g. 'c:\\'.
    if (isWindows) {
      var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
      var splitRootRe = /^[\/]*/;
    }

    var pathModule = NativeModule.require("path");
    var normalize = pathModule.normalize;

    // make p is absolute
    p = pathModule.resolve(p);

    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
      return cache[p];
    }

    var original = p,
        seenLinks = {},
        knownHard = {};

    // current character position in p
    var pos;
    // the partial path so far, including a trailing slash if any
    var current;
    // the partial path without a trailing slash (except when pointing at a root)
    var base;
    // the partial path scanned in the previous round, with slash
    var previous;

    start();

    function start() {
      // Skip over roots
      var m = splitRootRe.exec(p);
      pos = m[0].length;
      current = m[0];
      base = m[0];
      previous = '';

      // On windows, check that the root exists. On unix there is no need.
      if (isWindows && !knownHard[base]) {
        fs.lstatSync(base);
        knownHard[base] = true;
      }
    }

    // walk down the path, swapping out linked pathparts for their real
    // values
    // NB: p.length changes.
    while (pos < p.length) {
      // find the next part
      nextPartRe.lastIndex = pos;
      var result = nextPartRe.exec(p);
      previous = current;
      current += result[0];
      base = previous + result[1];
      pos = nextPartRe.lastIndex;

      // continue if not a symlink
      if (knownHard[base] || (cache && cache[base] === base)) {
        continue;
      }

      var resolvedLink;
      if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
        // some known symbolic link.  no need to stat again.
        resolvedLink = cache[base];
      } else {
        var stat = fs.lstatSync(base);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache) cache[base] = base;
          continue;
        }

        // read the link if it wasn't read before
        // dev/ino always return 0 on windows, so skip the check.
        var linkTarget = null;
        if (!isWindows) {
          var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            linkTarget = seenLinks[id];
          }
        }
        if (linkTarget === null) {
          fs.statSync(base);
          linkTarget = fs.readlinkSync(base);
        }
        resolvedLink = pathModule.resolve(previous, linkTarget);
        // track this, if given a cache.
        if (cache) cache[base] = resolvedLink;
        if (!isWindows) seenLinks[id] = linkTarget;
      }

      // resolve the link, then start over
      p = pathModule.resolve(resolvedLink, p.slice(pos));
      start();
    }

    if (cache) cache[original] = p;

    return p;
  }
};

module.exports = fs;  
}
,
          
            "223f09f17e4aff9f2d05493c688f7934": // from: 
function(exports,require,module,__filename,__dirname) {
//
// Adapted from Node source
//

var NativeModule = require('native_module');
var Script = process.binding('evals').NodeScript;
var runInThisContext = Script.runInThisContext;
var runInNewContext = Script.runInNewContext;
var assert = require('assert').ok;


// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  if (parent && parent.children) {
    parent.children.push(this);
  }

  this.filename = null;
  this.loaded = false;
  this.children = [];
}
module.exports = Module;

// Set the environ variable NODE_MODULE_CONTEXTS=1 to make node load all
// modules in thier own context.
Module._contextLoad = (+process.env['NODE_MODULE_CONTEXTS'] > 0);
Module._cache = {};
Module._pathCache = {};
Module._extensions = {};
var modulePaths = [];
Module.globalPaths = [];

Module.wrapper = NativeModule.wrapper;
Module.wrap = NativeModule.wrap;

var path = NativeModule.require('path');

Module._debug = function() {};
if (process.env.NODE_DEBUG && /module/.test(process.env.NODE_DEBUG)) {
  Module._debug = function(x) {
    console.error(x);
  };
}


// We use this alias for the preprocessor that filters it out
var debug = Module._debug;


// given a module name, and a list of paths to test, returns the first
// matching file in the following precedence.
//
// require("a.<ext>")
//   -> a.<ext>
//
// require("a")
//   -> a
//   -> a.<ext>
//   -> a/index.<ext>

function statPath(path) {
  var fs = NativeModule.require('fs');
  try {
    return fs.statSync(path);
  } catch (ex) {}
  return false;
}

// check if the directory is a package.json dir
var packageCache = {};

function readPackage(requestPath) {
  if (hasOwnProperty(packageCache, requestPath)) {
    return packageCache[requestPath];
  }

  var fs = NativeModule.require('fs');
  try {
    var jsonPath = path.resolve(requestPath, 'package.json');
    var json = fs.readFileSync(jsonPath, 'utf8');
  } catch (e) {
    return false;
  }

  try {
    var pkg = packageCache[requestPath] = JSON.parse(json);
  } catch (e) {
    e.path = jsonPath;
    e.message = 'Error parsing ' + jsonPath + ': ' + e.message;
    throw e;
  }
  return pkg;
}

function tryPackage(requestPath, exts) {
  var pkg = readPackage(requestPath);

  if (!pkg || !pkg.main) return false;

  var filename = path.resolve(requestPath, pkg.main);
  return tryFile(filename) || tryExtensions(filename, exts) ||
         tryExtensions(path.resolve(filename, 'index'), exts);
}

// In order to minimize unnecessary lstat() calls,
// this cache is a list of known-real paths.
// Set to an empty object to reset.
Module._realpathCache = {};

// check if the file exists and is not a directory
function tryFile(requestPath) {
  var fs = NativeModule.require('fs');
  var stats = statPath(requestPath);
  if (stats && !stats.isDirectory()) {
    return fs.realpathSync(requestPath, Module._realpathCache);
  }
  return false;
}

// given a path check a the file exists with any of the set extensions
function tryExtensions(p, exts) {
  for (var i = 0, EL = exts.length; i < EL; i++) {
    var filename = tryFile(p + exts[i]);

    if (filename) {
      return filename;
    }
  }
  return false;
}


Module._findPath = function(request, paths) {
  var exts = Object.keys(Module._extensions);

  if (request.charAt(0) === '/') {
    paths = [''];
  }

  var trailingSlash = (request.slice(-1) === '/');

  var cacheKey = JSON.stringify({request: request, paths: paths});
  if (Module._pathCache[cacheKey]) {
    return Module._pathCache[cacheKey];
  }

  // For each path
  for (var i = 0, PL = paths.length; i < PL; i++) {
    var basePath = path.resolve(paths[i], request);
    var filename;

    if (!trailingSlash) {
      // try to join the request to the path
      filename = tryFile(basePath);

      if (!filename && !trailingSlash) {
        // try it with each of the extensions
        filename = tryExtensions(basePath, exts);
      }
    }

    if (!filename) {
      filename = tryPackage(basePath, exts);
    }

    if (!filename) {
      // try it with each of the extensions at "index"
      filename = tryExtensions(path.resolve(basePath, 'index'), exts);
    }

    if (filename) {
      Module._pathCache[cacheKey] = filename;
      return filename;
    }
  }
  return false;
};

// 'from' is the __dirname of the module.
Module._nodeModulePaths = function(from) {
  // guarantee that 'from' is absolute.
  from = path.resolve(from);

  // note: this approach *only* works when the path is guaranteed
  // to be absolute.  Doing a fully-edge-case-correct path.split
  // that works on both Windows and Posix is non-trivial.
  var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\//;
  // yes, '/' works on both, but let's be a little canonical.
  var joiner = process.platform === 'win32' ? '\\' : '/';
  var paths = [];
  var parts = from.split(splitRe);

  for (var tip = parts.length - 1; tip >= 0; tip--) {
    // don't search in .../node_modules/node_modules
    if (parts[tip] === 'node_modules') continue;
    var dir = parts.slice(0, tip + 1).concat('node_modules').join(joiner);
    paths.push(dir);
  }

  return paths;
};


Module._resolveLookupPaths = function(request, parent) {
  if (NativeModule.exists(request)) {
    return [request, []];
  }

  var start = request.substring(0, 2);
  if (start !== './' && start !== '..') {
    var paths = modulePaths;
    if (parent) {
      if (!parent.paths) parent.paths = [];
      paths = parent.paths.concat(paths);
    }
    return [request, paths];
  }

  // with --eval, parent.id is not set and parent.filename is null
  if (!parent || !parent.id || !parent.filename) {
    // make require('./path/to/foo') work - normally the path is taken
    // from realpath(__filename) but with eval there is no filename
    var mainPaths = ['.'].concat(modulePaths);
    mainPaths = Module._nodeModulePaths('.').concat(mainPaths);
    return [request, mainPaths];
  }

  // Is the parent an index module?
  // We can assume the parent has a valid extension,
  // as it already has been accepted as a module.
  var isIndex = /^index\.\w+?$/.test(path.basename(parent.filename));
  var parentIdPath = isIndex ? parent.id : path.dirname(parent.id);
  var id = path.resolve(parentIdPath, request);

  // make sure require('./path') and require('path') get distinct ids, even
  // when called from the toplevel js file
  if (parentIdPath === '.' && id.indexOf('/') === -1) {
    id = './' + id;
  }

  debug('RELATIVE: requested:' + request +
        ' set ID to: ' + id + ' from ' + parent.id);

  return [id, [path.dirname(parent.filename)]];
};


Module._load = function(request, parent, isMain) {
  if (parent) {
    debug('Module._load REQUEST  ' + (request) + ' parent: ' + parent.id);
  }

  var filename = Module._resolveFilename(request, parent);

  var cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;
  }

  if (NativeModule.exists(filename)) {
    // REPL is a special case, because it needs the real require.
    if (filename == 'repl') {
      var replModule = new Module('repl');
      replModule._compile(NativeModule.getSource('repl'), 'repl.js');
      NativeModule._cache.repl = replModule;
      return replModule.exports;
    }

    debug('load native module ' + request);
    return NativeModule.require(filename);
  }

  var module = new Module(filename, parent);

  if (isMain) {
    process.mainModule = module;
    module.id = '.';
  }

  Module._cache[filename] = module;

  var hadException = true;

  try {
    module.load(filename);
    hadException = false;
  } finally {
    if (hadException) {
      delete Module._cache[filename];
    }
  }

  return module.exports;
};

Module._resolveFilename = function(request, parent) {
  if (NativeModule.exists(request)) {
    return request;
  }

  var resolvedModule = Module._resolveLookupPaths(request, parent);
  var id = resolvedModule[0];
  var paths = resolvedModule[1];

  // look up the filename first, since that's the cache key.
  debug('looking for ' + JSON.stringify(id) +
        ' in ' + JSON.stringify(paths));

  var filename = Module._findPath(request, paths);
  if (!filename) {
    var err = new Error("Cannot find module '" + request + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }
  return filename;
};


Module.prototype.load = function(filename) {
  debug('load ' + JSON.stringify(filename) +
        ' for module ' + JSON.stringify(this.id));

  assert(!this.loaded);
  this.filename = filename;
  this.paths = Module._nodeModulePaths(path.dirname(filename));

  var extension = path.extname(filename) || '.js';
  if (!Module._extensions[extension]) extension = '.js';
  Module._extensions[extension](this, filename);
  this.loaded = true;
};


Module.prototype.require = function(path) {
  return Module._load(path, this);
};


// Resolved path to process.argv[1] will be lazily placed here
// (needed for setting breakpoint when called with --debug-brk)
var resolvedArgv;


// Returns exception if any
Module.prototype._compile = function(content, filename) {
  var self = this;
  // remove shebang
  content = content.replace(/^\#\!.*/, '');

  function require(path) {
    return self.require(path);
  }

  require.resolve = function(request) {
    return Module._resolveFilename(request, self);
  };

  Object.defineProperty(require, 'paths', { get: function() {
    throw new Error('require.paths is removed. Use ' +
                    'node_modules folders, or the NODE_PATH ' +
                    'environment variable instead.');
  }});

  require.main = process.mainModule;

  // Enable support to add extra extension types
  require.extensions = Module._extensions;
  require.registerExtension = function() {
    throw new Error('require.registerExtension() removed. Use ' +
                    'require.extensions instead.');
  };

  require.cache = Module._cache;

  var dirname = path.dirname(filename);

  if (Module._contextLoad) {
    if (self.id !== '.') {
      debug('load submodule');
      // not root module
      var sandbox = {};
      for (var k in global) {
        sandbox[k] = global[k];
      }
      sandbox.require = require;
      sandbox.exports = self.exports;
      sandbox.__filename = filename;
      sandbox.__dirname = dirname;
      sandbox.module = self;
      sandbox.global = sandbox;
      sandbox.root = root;

      return runInNewContext(content, sandbox, filename, true);
    }

    debug('load root module');
    // root module
    global.require = require;
    global.exports = self.exports;
    global.__filename = filename;
    global.__dirname = dirname;
    global.module = self;

    return runInThisContext(content, filename, true);
  }

  // create wrapper function
  var wrapper = Module.wrap(content);

  var compiledWrapper = runInThisContext(wrapper, filename, true);
  if (global.v8debug) {
    if (!resolvedArgv) {
      // we enter the repl if we're not given a filename argument.
      if (process.argv[1]) {
        resolvedArg = Module._resolveFilename(process.argv[1], null);
      } else {
        resolvedArg = 'repl';
      }
    }

    // Set breakpoint on module start
    if (filename === resolvedArgv) {
      global.v8debug.Debug.setBreakPoint(compiledWrapper, 0, 0);
    }
  }
  var args = [self.exports, require, self, filename, dirname];
  return compiledWrapper.apply(self.exports, args);
};


function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}


// Native extension for .js
Module._extensions['.js'] = function(module, filename) {
  var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
  module._compile(stripBOM(content), filename);
};

// We've already pre-compiled the CoffeeScript so we can embed the source and
// have it show up in the debugger
Module._extensions['.coffee'] = Module._extensions['.js']


// Native extension for .json
Module._extensions['.json'] = function(module, filename) {
  var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
  try {
    module.exports = JSON.parse(stripBOM(content));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};


//Native extension for .node
Module._extensions['.node'] = function(module, filename) {
  process.dlopen(filename, module.exports);
};


// bootstrap main module.
Module.runMain = function() {
  // Load the main module--the command line argument.
  Module._load(process.argv[1], null, true);
};

Module._initPaths = function() {
  var paths = [path.resolve(process.execPath, '..', '..', 'lib', 'node')];

  if (process.env['HOME']) {
    paths.unshift(path.resolve(process.env['HOME'], '.node_libraries'));
    paths.unshift(path.resolve(process.env['HOME'], '.node_modules'));
  }

  if (process.env['NODE_PATH']) {
    var splitter = process.platform === 'win32' ? ';' : ':';
    paths = process.env['NODE_PATH'].split(splitter).concat(paths);
  }

  modulePaths = paths;

  // clone as a read-only copy, for introspection.
  Module.globalPaths = modulePaths.slice(0);
};

// bootstrap repl
Module.requireRepl = function() {
  return Module._load('repl', '.');
};

Module._initPaths();

// backwards compatibility
Module.Module = Module;
  
}
,
          
            "ddeff58ff67e5d2d686891fc66ebb2b7": // from: 
function(exports,require,module,__filename,__dirname) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (typeof f !== 'string') {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j': return JSON.stringify(args[i++]);
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (x === null || typeof x !== 'object') {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


exports.print = function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(String(arguments[i]));
  }
};


exports.puts = function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
};


exports.debug = function(x) {
  process.stderr.write('DEBUG: ' + x + '\n');
};


var error = exports.error = function(x) {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stderr.write(arguments[i] + '\n');
  }
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: colors ? stylizeWithColor : stylizeNoColor
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    return String(value.inspect(recurseTimes));
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (typeof value === 'function') {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}
exports.isArray = isArray;


function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;


function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;


function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}
exports.isError = isError;


function objectToString(o) {
  return Object.prototype.toString.call(o);
}


exports.p = exports.deprecate(function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    error(exports.inspect(arguments[i]));
  }
}, 'util.p: Use console.error() instead.');


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


exports.log = function(msg) {
  exports.puts(timestamp() + ' - ' + msg.toString());
};


exports.exec = exports.deprecate(function() {
  return require('child_process').exec.apply(this, arguments);
}, 'util.exec is now called `child_process.exec`.');


function pump(readStream, writeStream, callback) {
  var callbackCalled = false;

  function call(a, b, c) {
    if (callback && !callbackCalled) {
      callback(a, b, c);
      callbackCalled = true;
    }
  }

  readStream.addListener('data', function(chunk) {
    if (writeStream.write(chunk) === false) readStream.pause();
  });

  writeStream.addListener('drain', function() {
    readStream.resume();
  });

  readStream.addListener('end', function() {
    writeStream.end();
  });

  readStream.addListener('close', function() {
    call();
  });

  readStream.addListener('error', function(err) {
    writeStream.end();
    call(err);
  });

  writeStream.addListener('error', function(err) {
    readStream.destroy();
    call(err);
  });
}
exports.pump = exports.deprecate(pump,
    'util.pump() is deprecated. Use ReadableStream.prototype.pump() instead.');


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || typeof add !== 'object') return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
  
}
,
          
            "7b51c3f0555ccb0c0f1fcd91d389ea1a": // from: 
function(exports,require,module,__filename,__dirname) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var isWindows = process.platform === 'win32';
var util = require('util');


// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}


if (isWindows) {
  // Regex to split a windows path into three parts: [*, device, slash,
  // tail] windows-only
  var splitDeviceRe =
      /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?([\\\/])?([\s\S]*?)$/;

  // Regex to split the tail part of the above into [*, dir, basename, ext]
  var splitTailRe =
      /^([\s\S]+[\\\/](?!$)|[\\\/])?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/\\]*)?)$/;

  // Function to split a filename into [root, dir, basename, ext]
  // windows version
  var splitPath = function(filename) {
    // Separate device+slash from tail
    var result = splitDeviceRe.exec(filename),
        device = (result[1] || '') + (result[2] || ''),
        tail = result[3] || '';
    // Split the tail into dir, basename and extension
    var result2 = splitTailRe.exec(tail),
        dir = result2[1] || '',
        basename = result2[2] || '',
        ext = result2[3] || '';
    return [device, dir, basename, ext];
  };

  // path.resolve([from ...], to)
  // windows version
  exports.resolve = function() {
    var resolvedDevice = '',
        resolvedTail = '',
        resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1; i--) {
      var path;
      if (i >= 0) {
        path = arguments[i];
      } else if (!resolvedDevice) {
        path = process.cwd();
      } else {
        // Windows has the concept of drive-specific current working
        // directories. If we've resolved a drive letter but not yet an
        // absolute path, get cwd for that drive. We're sure the device is not
        // an unc path at this points, because unc paths are always absolute.
        path = process.env['=' + resolvedDevice];
        // Verify that a drive-local cwd was found and that it actually points
        // to our drive. If not, default to the drive's root.
        if (!path || path.substr(0, 3).toLowerCase() !==
            resolvedDevice.toLowerCase() + '\\') {
          path = resolvedDevice + '\\';
        }
      }

      // Skip empty and invalid entries
      if (typeof path !== 'string' || !path) {
        continue;
      }

      var result = splitDeviceRe.exec(path),
          device = result[1] || '',
          isUnc = device && device.charAt(1) !== ':',
          isAbsolute = !!result[2] || isUnc, // UNC paths are always absolute
          tail = result[3];

      if (device &&
          resolvedDevice &&
          device.toLowerCase() !== resolvedDevice.toLowerCase()) {
        // This path points to another device so it is not applicable
        continue;
      }

      if (!resolvedDevice) {
        resolvedDevice = device;
      }
      if (!resolvedAbsolute) {
        resolvedTail = tail + '\\' + resolvedTail;
        resolvedAbsolute = isAbsolute;
      }

      if (resolvedDevice && resolvedAbsolute) {
        break;
      }
    }

    // Replace slashes (in UNC share name) by backslashes
    resolvedDevice = resolvedDevice.replace(/\//g, '\\');

    // At this point the path should be resolved to a full absolute path,
    // but handle relative paths to be safe (might happen when process.cwd()
    // fails)

    // Normalize the tail path

    function f(p) {
      return !!p;
    }

    resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/).filter(f),
                                  !resolvedAbsolute).join('\\');

    return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) ||
           '.';
  };

  // windows version
  exports.normalize = function(path) {
    var result = splitDeviceRe.exec(path),
        device = result[1] || '',
        isUnc = device && device.charAt(1) !== ':',
        isAbsolute = !!result[2] || isUnc, // UNC paths are always absolute
        tail = result[3],
        trailingSlash = /[\\\/]$/.test(tail);

    // Normalize the tail path
    tail = normalizeArray(tail.split(/[\\\/]+/).filter(function(p) {
      return !!p;
    }), !isAbsolute).join('\\');

    if (!tail && !isAbsolute) {
      tail = '.';
    }
    if (tail && trailingSlash) {
      tail += '\\';
    }

    // Convert slashes to backslashes when `device` points to an UNC root.
    device = device.replace(/\//g, '\\');

    return device + (isAbsolute ? '\\' : '') + tail;
  };

  // windows version
  exports.join = function() {
    function f(p) {
      return p && typeof p === 'string';
    }

    var paths = Array.prototype.filter.call(arguments, f);
    var joined = paths.join('\\');

    // Make sure that the joined path doesn't start with two slashes
    // - it will be mistaken for an unc path by normalize() -
    // unless the paths[0] also starts with two slashes
    if (/^[\\\/]{2}/.test(joined) && !/^[\\\/]{2}/.test(paths[0])) {
      joined = joined.substr(1);
    }

    return exports.normalize(joined);
  };

  // path.relative(from, to)
  // it will solve the relative path from 'from' to 'to', for instance:
  // from = 'C:\\orandea\\test\\aaa'
  // to = 'C:\\orandea\\impl\\bbb'
  // The output of the function should be: '..\\..\\impl\\bbb'
  // windows version
  exports.relative = function(from, to) {
    from = exports.resolve(from);
    to = exports.resolve(to);

    // windows is not case sensitive
    var lowerFrom = from.toLowerCase();
    var lowerTo = to.toLowerCase();

    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }

      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }

      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }

    var toParts = trim(to.split('\\'));

    var lowerFromParts = trim(lowerFrom.split('\\'));
    var lowerToParts = trim(lowerTo.split('\\'));

    var length = Math.min(lowerFromParts.length, lowerToParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (lowerFromParts[i] !== lowerToParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    if (samePartsLength == 0) {
      return to;
    }

    var outputParts = [];
    for (var i = samePartsLength; i < lowerFromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));

    return outputParts.join('\\');
  };

  exports.sep = '\\';

} else /* posix */ {

  // Split a filename into [root, dir, basename, ext], unix version
  // 'root' is just a slash, or nothing.
  var splitPathRe =
      /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/;
  var splitPath = function(filename) {
    var result = splitPathRe.exec(filename);
    return [result[1] || '', result[2] || '', result[3] || '', result[4] || ''];
  };

  // path.resolve([from ...], to)
  // posix version
  exports.resolve = function() {
    var resolvedPath = '',
        resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = (i >= 0) ? arguments[i] : process.cwd();

      // Skip empty and invalid entries
      if (typeof path !== 'string' || !path) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charAt(0) === '/';
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function(p) {
      return !!p;
    }), !resolvedAbsolute).join('/');

    return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
  };

  // path.normalize(path)
  // posix version
  exports.normalize = function(path) {
    var isAbsolute = path.charAt(0) === '/',
        trailingSlash = path.substr(-1) === '/';

    // Normalize the path
    path = normalizeArray(path.split('/').filter(function(p) {
      return !!p;
    }), !isAbsolute).join('/');

    if (!path && !isAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }

    return (isAbsolute ? '/' : '') + path;
  };


  // posix version
  exports.join = function() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return exports.normalize(paths.filter(function(p, index) {
      return p && typeof p === 'string';
    }).join('/'));
  };


  // path.relative(from, to)
  // posix version
  exports.relative = function(from, to) {
    from = exports.resolve(from).substr(1);
    to = exports.resolve(to).substr(1);

    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }

      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }

      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }

    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));

    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));

    return outputParts.join('/');
  };

  exports.sep = '/';
}


exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};


exports.exists = util.deprecate(function(path, callback) {
  require('fs').exists(path, callback);
}, 'path.exists is now called `fs.exists`.');


exports.existsSync = util.deprecate(function(path) {
  return require('fs').existsSync(path);
}, 'path.existsSync is now called `fs.existsSync`.');


if (isWindows) {
  exports._makeLong = function(path) {
    path = '' + path;
    if (!path) {
      return '';
    }

    var resolvedPath = exports.resolve(path);

    if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
      // path is local filesystem path, which needs to be converted
      // to long UNC path.
      return '\\\\?\\' + resolvedPath;
    } else if (/^\\\\[^?.]/.test(resolvedPath)) {
      // path is network UNC path, which needs to be converted
      // to long UNC path.
      return '\\\\?\\UNC\\' + resolvedPath.substring(2);
    }

    return path;
  };
} else {
  exports._makeLong = function(path) {
    return path;
  };
}
  
}
,
          
            "d0c9d6cc2490c964b789d43ae4803b7b": // from: 
function(exports,require,module,__filename,__dirname) {
var punycode = { encode : function (s) { return s } };

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

function arrayIndexOf(array, subject) {
    for (var i = 0, j = array.length; i < j; i++) {
        if(array[i] == subject) return i;
    }
    return -1;
}

var objectKeys = Object.keys || function objectKeys(object) {
    if (object !== Object(object)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in object) if (object.hasOwnProperty(key)) keys[keys.length] = key;
    return keys;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]+$/,
    // RFC 2396: characters reserved for delimiting URLs.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '~', '[', ']', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''],
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#']
      .concat(unwise).concat(autoEscape),
    nonAuthChars = ['/', '@', '?', '#'].concat(delims),
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-zA-Z0-9][a-z0-9A-Z_-]{0,62}$/,
    hostnamePartStart = /^([a-zA-Z0-9][a-z0-9A-Z_-]{0,62})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always have a path component.
    pathedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && typeof(url) === 'object' && url.href) return url;

  if (typeof url !== 'string') {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var out = {},
      rest = url;

  // cut off any delimiters.
  // This is to support parse stuff like "<http://foo.com>"
  for (var i = 0, l = rest.length; i < l; i++) {
    if (arrayIndexOf(delims, rest.charAt(i)) === -1) break;
  }
  if (i !== 0) rest = rest.substr(i);


  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    out.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      out.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    // don't enforce full RFC correctness, just be unstupid about it.

    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the first @ sign, unless some non-auth character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    var atSign = arrayIndexOf(rest, '@');
    if (atSign !== -1) {
      // there *may be* an auth
      var hasAuth = true;
      for (var i = 0, l = nonAuthChars.length; i < l; i++) {
        var index = arrayIndexOf(rest, nonAuthChars[i]);
        if (index !== -1 && index < atSign) {
          // not a valid auth.  Something like http://foo.com/bar@baz/
          hasAuth = false;
          break;
        }
      }
      if (hasAuth) {
        // pluck off the auth portion.
        out.auth = rest.substr(0, atSign);
        rest = rest.substr(atSign + 1);
      }
    }

    var firstNonHost = -1;
    for (var i = 0, l = nonHostChars.length; i < l; i++) {
      var index = arrayIndexOf(rest, nonHostChars[i]);
      if (index !== -1 &&
          (firstNonHost < 0 || index < firstNonHost)) firstNonHost = index;
    }

    if (firstNonHost !== -1) {
      out.host = rest.substr(0, firstNonHost);
      rest = rest.substr(firstNonHost);
    } else {
      out.host = rest;
      rest = '';
    }

    // pull out port.
    var p = parseHost(out.host);
    var keys = objectKeys(p);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      out[key] = p[key];
    }

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    out.hostname = out.hostname || '';

    // validate a little.
    if (out.hostname.length > hostnameMaxLen) {
      out.hostname = '';
    } else {
      var hostparts = out.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            out.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    // hostnames are always lower case.
    out.hostname = out.hostname.toLowerCase();

    // IDNA Support: Returns a puny coded representation of "domain".
    // It only converts the part of the domain name that
    // has non ASCII characters. I.e. it dosent matter if
    // you call it with a domain that already is in ASCII.
    var domainArray = out.hostname.split('.');
    var newOut = [];
    for (var i = 0; i < domainArray.length; ++i) {
      var s = domainArray[i];
      newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
          'xn--' + punycode.encode(s) : s);
    }
    out.hostname = newOut.join('.');

    out.host = (out.hostname || '') +
        ((out.port) ? ':' + out.port : '');
    out.href += out.host;
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }

    // Now make sure that delims never appear in a url.
    var chop = rest.length;
    for (var i = 0, l = delims.length; i < l; i++) {
      var c = arrayIndexOf(rest, delims[i]);
      if (c !== -1) {
        chop = Math.min(c, chop);
      }
    }
    rest = rest.substr(0, chop);
  }


  // chop off from the tail first.
  var hash = arrayIndexOf(rest, '#');
  if (hash !== -1) {
    // got a fragment string.
    out.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = arrayIndexOf(rest, '?');
  if (qm !== -1) {
    out.search = rest.substr(qm);
    out.query = rest.substr(qm + 1);
    if (parseQueryString) {
      out.query = querystring.parse(out.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    out.search = '';
    out.query = {};
  }
  if (rest) out.pathname = rest;
  if (slashedProtocol[proto] &&
      out.hostname && !out.pathname) {
    out.pathname = '/';
  }

  //to support http.request
  if (out.pathname || out.search) {
    out.path = (out.pathname ? out.pathname : '') +
               (out.search ? out.search : '');
  }

  // finally, reconstruct the href based on what has been validated.
  out.href = urlFormat(out);
  return out;
}

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (typeof(obj) === 'string') obj = urlParse(obj);

  var auth = obj.auth || '';
  if (auth) {
    auth = auth.split('@').join('%40');
    for (var i = 0, l = nonAuthChars.length; i < l; i++) {
      var nAC = nonAuthChars[i];
      auth = auth.split(nAC).join(encodeURIComponent(nAC));
    }
    auth += '@';
  }

  var protocol = obj.protocol || '',
      host = (obj.host !== undefined) ? auth + obj.host :
          obj.hostname !== undefined ? (
              auth + obj.hostname +
              (obj.port ? ':' + obj.port : '')
          ) :
          false,
      pathname = obj.pathname || '',
      query = obj.query &&
              ((typeof obj.query === 'object' &&
                objectKeys(obj.query).length) ?
                 querystring.stringify(obj.query) :
                 '') || '',
      search = obj.search || (query && ('?' + query)) || '',
      hash = obj.hash || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (obj.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  return protocol + host + pathname + search + hash;
}

function urlResolve(source, relative) {
  return urlFormat(urlResolveObject(source, relative));
}

function urlResolveObject(source, relative) {
  if (!source) return relative;

  source = urlParse(urlFormat(source), false, true);
  relative = urlParse(urlFormat(relative), false, true);

  // hash is always overridden, no matter what.
  source.hash = relative.hash;

  if (relative.href === '') {
    source.href = urlFormat(source);
    return source;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    relative.protocol = source.protocol;
    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[relative.protocol] &&
        relative.hostname && !relative.pathname) {
      relative.path = relative.pathname = '/';
    }
    relative.href = urlFormat(relative);
    return relative;
  }

  if (relative.protocol && relative.protocol !== source.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      relative.href = urlFormat(relative);
      return relative;
    }
    source.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      relative.pathname = relPath.join('/');
    }
    source.pathname = relative.pathname;
    source.search = relative.search;
    source.query = relative.query;
    source.host = relative.host || '';
    source.auth = relative.auth;
    source.hostname = relative.hostname || relative.host;
    source.port = relative.port;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.slashes = source.slashes || relative.slashes;
    source.href = urlFormat(source);
    return source;
  }

  var isSourceAbs = (source.pathname && source.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host !== undefined ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (source.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = source.pathname && source.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = source.protocol &&
          !slashedProtocol[source.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // source.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {

    delete source.hostname;
    delete source.port;
    if (source.host) {
      if (srcPath[0] === '') srcPath[0] = source.host;
      else srcPath.unshift(source.host);
    }
    delete source.host;
    if (relative.protocol) {
      delete relative.hostname;
      delete relative.port;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      delete relative.host;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    source.host = (relative.host || relative.host === '') ?
                      relative.host : source.host;
    source.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : source.hostname;
    source.search = relative.search;
    source.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    source.search = relative.search;
    source.query = relative.query;
  } else if ('search' in relative) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      source.hostname = source.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ?
                       source.host.split('@') : false;
      if (authInHost) {
        source.auth = authInHost.shift();
        source.host = source.hostname = authInHost.shift();
      }
    }
    source.search = relative.search;
    source.query = relative.query;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.href = urlFormat(source);
    return source;
  }
  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    delete source.pathname;
    //to support http.request
    if (!source.search) {
      source.path = '/' + source.search;
    } else {
      delete source.path;
    }
    source.href = urlFormat(source);
    return source;
  }
  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (source.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    source.hostname = source.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especialy happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ?
                     source.host.split('@') : false;
    if (authInHost) {
      source.auth = authInHost.shift();
      source.host = source.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (source.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  source.pathname = srcPath.join('/');
  //to support request.http
  if (source.pathname !== undefined || source.search !== undefined) {
    source.path = (source.pathname ? source.pathname : '') +
                  (source.search ? source.search : '');
  }
  source.auth = relative.auth || source.auth;
  source.slashes = source.slashes || relative.slashes;
  source.href = urlFormat(source);
  return source;
}

function parseHost(host) {
  var out = {};
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    out.port = port.substr(1);
    host = host.substr(0, host.length - port.length);
  }
  if (host) out.hostname = host;
  return out;
}
  
}
,
          
            "b499eb63a89b9e6fb99ef1209a65ace6": // from: 
function(exports,require,module,__filename,__dirname) {
if (!process.EventEmitter) process.EventEmitter = function () {};

var EventEmitter = exports.EventEmitter = process.EventEmitter;
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    }
;

// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
var defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!this._events) this._events = {};
  this._events.maxListeners = n;
};


EventEmitter.prototype.emit = function(type) {
  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events || !this._events.error ||
        (isArray(this._events.error) && !this._events.error.length))
    {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }
  }

  if (!this._events) return false;
  var handler = this._events[type];
  if (!handler) return false;

  if (typeof handler == 'function') {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        var args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
    return true;

  } else if (isArray(handler)) {
    var args = Array.prototype.slice.call(arguments, 1);

    var listeners = handler.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
    return true;

  } else {
    return false;
  }
};

// EventEmitter is defined in src/node_events.cc
// EventEmitter.prototype.emit() is also defined there.
EventEmitter.prototype.addListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('addListener only takes instances of Function');
  }

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type == "newListeners"! Before
  // adding it to the listeners, first emit "newListeners".
  this.emit('newListener', type, listener);

  if (!this._events[type]) {
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  } else if (isArray(this._events[type])) {

    // Check for listener leak
    if (!this._events[type].warned) {
      var m;
      if (this._events.maxListeners !== undefined) {
        m = this._events.maxListeners;
      } else {
        m = defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        console.trace();
      }
    }

    // If we've already got an array, just append.
    this._events[type].push(listener);
  } else {
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  var self = this;
  self.on(type, function g() {
    self.removeListener(type, g);
    listener.apply(this, arguments);
  });

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('removeListener only takes instances of Function');
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (!this._events || !this._events[type]) return this;

  var list = this._events[type];

  if (isArray(list)) {
    var i = list.indexOf(listener);
    if (i < 0) return this;
    list.splice(i, 1);
    if (list.length == 0)
      delete this._events[type];
  } else if (this._events[type] === listener) {
    delete this._events[type];
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  // does not use listeners(), so no side effect of creating _events[type]
  if (type && this._events && this._events[type]) this._events[type] = null;
  return this;
};

EventEmitter.prototype.listeners = function(type) {
  if (!this._events) this._events = {};
  if (!this._events[type]) this._events[type] = [];
  if (!isArray(this._events[type])) {
    this._events[type] = [this._events[type]];
  }
  return this._events[type];
};
  
}
,
          
            "54c69a095dc8e4a9173bd8284c4e8ad7": // from: 
function(exports,require,module,__filename,__dirname) {
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    };

var objectKeys = Object.keys || function objectKeys(object) {
    if (object !== Object(object)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in object) if (object.hasOwnProperty(key)) keys[keys.length] = key;
    return keys;
}


/*!
 * querystring
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Library version.
 */

exports.version = '0.3.1';

/**
 * Object#toString() ref for stringify().
 */

var toString = Object.prototype.toString;

/**
 * Cache non-integer test regexp.
 */

var notint = /[^0-9]/;

/**
 * Parse the given query `str`, returning an object.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(str){
  if (null == str || '' == str) return {};

  function promote(parent, key) {
    if (parent[key].length == 0) return parent[key] = {};
    var t = {};
    for (var i in parent[key]) t[i] = parent[key][i];
    parent[key] = t;
    return t;
  }

  return String(str)
    .split('&')
    .reduce(function(ret, pair){
      try{ 
        pair = decodeURIComponent(pair.replace(/\+/g, ' '));
      } catch(e) {
        // ignore
      }

      var eql = pair.indexOf('=')
        , brace = lastBraceInKey(pair)
        , key = pair.substr(0, brace || eql)
        , val = pair.substr(brace || eql, pair.length)
        , val = val.substr(val.indexOf('=') + 1, val.length)
        , parent = ret;

      // ?foo
      if ('' == key) key = pair, val = '';

      // nested
      if (~key.indexOf(']')) {
        var parts = key.split('[')
          , len = parts.length
          , last = len - 1;

        function parse(parts, parent, key) {
          var part = parts.shift();

          // end
          if (!part) {
            if (isArray(parent[key])) {
              parent[key].push(val);
            } else if ('object' == typeof parent[key]) {
              parent[key] = val;
            } else if ('undefined' == typeof parent[key]) {
              parent[key] = val;
            } else {
              parent[key] = [parent[key], val];
            }
          // array
          } else {
            obj = parent[key] = parent[key] || [];
            if (']' == part) {
              if (isArray(obj)) {
                if ('' != val) obj.push(val);
              } else if ('object' == typeof obj) {
                obj[objectKeys(obj).length] = val;
              } else {
                obj = parent[key] = [parent[key], val];
              }
            // prop
            } else if (~part.indexOf(']')) {
              part = part.substr(0, part.length - 1);
              if(notint.test(part) && isArray(obj)) obj = promote(parent, key);
              parse(parts, obj, part);
            // key
            } else {
              if(notint.test(part) && isArray(obj)) obj = promote(parent, key);
              parse(parts, obj, part);
            }
          }
        }

        parse(parts, parent, 'base');
      // optimize
      } else {
        if (notint.test(key) && isArray(parent.base)) {
          var t = {};
          for(var k in parent.base) t[k] = parent.base[k];
          parent.base = t;
        }
        set(parent.base, key, val);
      }

      return ret;
    }, {base: {}}).base;
};

/**
 * Turn the given `obj` into a query string
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

var stringify = exports.stringify = function(obj, prefix) {
  if (isArray(obj)) {
    return stringifyArray(obj, prefix);
  } else if ('[object Object]' == toString.call(obj)) {
    return stringifyObject(obj, prefix);
  } else if ('string' == typeof obj) {
    return stringifyString(obj, prefix);
  } else {
    return prefix;
  }
};

/**
 * Stringify the given `str`.
 *
 * @param {String} str
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyString(str, prefix) {
  if (!prefix) throw new TypeError('stringify expects an object');
  return prefix + '=' + encodeURIComponent(str);
}

/**
 * Stringify the given `arr`.
 *
 * @param {Array} arr
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyArray(arr, prefix) {
  var ret = [];
  if (!prefix) throw new TypeError('stringify expects an object');
  for (var i = 0; i < arr.length; i++) {
    ret.push(stringify(arr[i], prefix + '[]'));
  }
  return ret.join('&');
}

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyObject(obj, prefix) {
  var ret = []
    , keys = objectKeys(obj)
    , key;
  for (var i = 0, len = keys.length; i < len; ++i) {
    key = keys[i];
    ret.push(stringify(obj[key], prefix
      ? prefix + '[' + encodeURIComponent(key) + ']'
      : encodeURIComponent(key)));
  }
  return ret.join('&');
}

/**
 * Set `obj`'s `key` to `val` respecting
 * the weird and wonderful syntax of a qs,
 * where "foo=bar&foo=baz" becomes an array.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {String} val
 * @api private
 */

function set(obj, key, val) {
  var v = obj[key];
  if (undefined === v) {
    obj[key] = val;
  } else if (isArray(v)) {
    v.push(val);
  } else {
    obj[key] = [v, val];
  }
}

/**
 * Locate last brace in `str` within the key.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function lastBraceInKey(str) {
  var len = str.length
    , brace
    , c;
  for (var i = 0; i < len; ++i) {
    c = str[i];
    if (']' == c) brace = false;
    if ('[' == c) brace = true;
    if ('=' == c && !brace) return i;
  }
}
  
}
,
          
            "f0d5935f094eb3d9fb70c67795bd4caf": // from: 
function(exports,require,module,__filename,__dirname) {
var events = require('events');
var util = require('util');

function Stream() {
  events.EventEmitter.call(this);
}
util.inherits(Stream, events.EventEmitter);
module.exports = Stream;
// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once, and
  // only when all sources have ended.
  if (!dest._isStdio && (!options || options.end !== false)) {
    dest._pipeCount = dest._pipeCount || 0;
    dest._pipeCount++;

    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest._pipeCount--;

    // remove the listeners
    cleanup();

    if (dest._pipeCount > 0) {
      // waiting for other incoming streams to end.
      return;
    }

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest._pipeCount--;

    // remove the listeners
    cleanup();

    if (dest._pipeCount > 0) {
      // waiting for other incoming streams to end.
      return;
    }

    dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (this.listeners('error').length === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('end', cleanup);
    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('end', cleanup);
  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};
  
}
,
          
            "a8aae685be6eeb8ec844ae9c4f5fd189": // from: 
function(exports,require,module,__filename,__dirname) {
// TODO  
}
,
          
        }
      },
      read: function(reference) {
        if (reference.__ref != null) {
          reference = reference.__ref;
        }
        return base64Decode(global.filesystem.content[reference]);
      }
    }
  };
})();

var process = (function() {
  var scopes;
  scopes = {
    evals: {
      NodeScript: {
        runInThisContext: function(source, filename, returnResult) {
          return global.filesystem.modules.function[source];
        },
        runInNewContext: function(source, filename, returnResult) {
          console.log("WARNING: runInNewContext doesn't work " +
            "in the browser.");
          return global.filesystem.module.function[source];
        }
      }
    }
  };
  return {
    platform: "browser",
    moduleLoadList: [],
    env: {},
    argv: ["node", "/"],
    binding: function(scope) {
      return scopes[scope];
    },
    cwd: function() {
      return "/";
    },
    nextTick: function(fn) {
      setTimeout( fn, 0 );
    },
    stdout: {
      write: function(string) {
        console.log( string.trim() );
      }
    },
    stderr: {
      write: function(string) {
        console.error( string.trim() )
      }
    }
  };
})();

var NativeModule = (function() {
  var name, ref, runInThisContext, _ref;
  runInThisContext = process.binding('evals').NodeScript.runInThisContext;
    
  function NativeModule(id) {
    this.filename = id + '.js';
    this.id = id;
    this.exports = {};
    this.loaded = false;
  }

  NativeModule._source = {}
  NativeModule._cache = {};

  NativeModule.require = function(id) {
    if (id == 'native_module') {
      return NativeModule;
    }

    var cached = NativeModule.getCached(id);
    if (cached) {
      return cached.exports;
    }

    if (!NativeModule.exists(id)) {
      throw new Error('No such native module ' + id);
    }

    process.moduleLoadList.push('NativeModule ' + id);

    var nativeModule = new NativeModule(id);

    nativeModule.compile();
    nativeModule.cache();

    return nativeModule.exports;
  };

  NativeModule.getCached = function(id) {
    return NativeModule._cache[id];
  }

  NativeModule.exists = function(id) {
    return NativeModule._source.hasOwnProperty(id);
  }

  NativeModule.getSource = function(id) {
    return NativeModule._source[id];
  }

  NativeModule.wrap = function(script) {
    // return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
    return script;
  };

  // NativeModule.wrapper = [
  //   '(function (exports, require, module, __filename, __dirname) { ',
  //   '\n});'
  // ];

  NativeModule.prototype.compile = function() {
    var source = NativeModule.getSource(this.id);
    source = NativeModule.wrap(source);
    var fn = runInThisContext(source, this.filename, true);
    fn(this.exports, NativeModule.require, this, this.filename);

    this.loaded = true;
  };

  NativeModule.prototype.cache = function() {
    NativeModule._cache[this.id] = this;
  };
  ;

  _ref = global.filesystem.modules.api;
  for (name in _ref) {
    ref = _ref[name];
    NativeModule._source[name] = global.filesystem.read(ref);
  }
  return NativeModule;
})();

NativeModule.require("module").runMain();