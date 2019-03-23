const images = [
  "assets/images/websightdemo.gif",
  "assets/images/autocad-web.png",
  "assets/images/macos-performance-unity.png",
  "assets/images/codesize-unity.png",
  "assets/images/sourcemap-decoder-benchmark.png",
  "assets/images/cloudflare-isolates.png",
  "assets/images/cloudflare-faas-benchmark.png",
  "assets/images/wasmer-nginx.png"
];

setTimeout(() => {
  images.forEach(url => {
    if (typeof Image !== "undefined") {
      const img = new Image();
      img.src = url;
      console.log(img);
    }
  });
}, 0);
