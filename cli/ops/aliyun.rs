// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
use deno_aliyun::op_aliyun_get_env;

pub fn init(rt: &mut deno_core::JsRuntime) {
    super::reg_json_sync(rt, "op_aliyun_get_env", op_aliyun_get_env);
}
