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

    window.aws.s3 = {
        getBuckets,
        readFile
    };
    window.__bootstrap = window.__bootstrap || {};
    window.__bootstrap.aws.s3 = {
        getBuckets,
        readFile
    };
})(this);
