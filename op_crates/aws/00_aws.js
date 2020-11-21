// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

((window) => {
    const core = window.Deno.core;

    function getEnv() {
        return core.jsonOpSync("op_aws_get_env");
    }

    window.aws = {
        getEnv,
    };
    window.__bootstrap = window.__bootstrap || {};
    window.__bootstrap.aws = {
        getEnv,
    };
})(this);
