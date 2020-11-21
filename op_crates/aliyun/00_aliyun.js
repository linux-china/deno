// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

((window) => {
    const core = window.Deno.core;

    function getEnv() {
        return core.jsonOpSync("op_aliyun_get_env");
    }

    window.aliyun = {
        getEnv,
    };
    window.__bootstrap = window.__bootstrap || {};
    window.__bootstrap.aliyun = {
        getEnv,
    };
})(this);
