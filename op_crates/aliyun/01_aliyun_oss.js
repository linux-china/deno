// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

((window) => {
    const core = window.Deno.core;

    function getBuckets() {
        return ["bucket-1", "bucket-2"];
    }

    function readFile(bucketName, filePath) {
        return {
            bucket: bucketName,
            name: filePath,
            content: "Welcome to aliyun"
        };
    }

    window.aliyun.oss = {
        getBuckets,
        readFile
    };
    window.__bootstrap = window.__bootstrap || {};
    window.__bootstrap.aliyun.oss = {
        getBuckets,
        readFile
    };
})(this);
