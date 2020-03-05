var developMode = false;

if (developMode) {
  require.config({
    baseUrl: '../Source',

    paths: {
      Zlib: './Workers/zlib.min',
    },
    shim: {
      Zlib: {
        deps: [],
        exports: 'Zlib',
      },
    },
  });
} else {
  require.config({
    // baseUrl: "https://cdn.jsdelivr.net/npm/iclient3d-9d-911@1.0.1/vendor/Cesium",
    // baseUrl: "http://localhost:8081",
    waitSeconds: 600,
    paths: {
      // CDN
      Cesium: 'https://cdn.jsdelivr.net/npm/iclient3d-10i@1.0.0/vendor/Cesium/Cesium',
      // 官网Cesium
      // Cesium: 'http://support.supermap.com.cn:8090/webgl/Build/Cesium/Cesium',
      // 本地Cesium,位于vendor/Cesium目录
      // Cesium: '../vendor/Cesium/Cesium',
    },
    shim: {
      Cesium: {
        exports: 'Cesium',
      },
    },
  });
}

if (typeof Cesium !== 'undefined') {
  onload(Cesium);
} else if (typeof require === 'function') {
  require(['Cesium'], onload);
}