// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
use deno_aws::op_aws_get_env;

pub fn init(rt: &mut deno_core::JsRuntime) {
    super::reg_json_sync(rt, "op_aws_get_env", op_aws_get_env);
}
