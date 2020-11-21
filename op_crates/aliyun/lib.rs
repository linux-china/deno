// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

#![deny(warnings)]

use deno_core::error::AnyError;
use deno_core::serde_json::Value;
use deno_core::JsRuntime;
use deno_core::OpState;
use deno_core::ZeroCopyBuf;

/// Execute this crates' JS source files.
pub fn init(isolate: &mut JsRuntime) {
    let files = vec![
        (
            "deno:op_crates/aliyun/00_aliyun.js",
            include_str!("00_aliyun.js"),
        ),
        (
            "deno:op_crates/aliyun/01_aliyun_oss.js",
            include_str!("01_aliyun_oss.js"),
        )];
    for (url, source_code) in files {
        isolate.execute(url, source_code).unwrap();
    }
}

pub fn op_aliyun_get_env(
    _state: &mut OpState,
    _args: Value,
    _zero_copy: &mut [ZeroCopyBuf],
) -> Result<Value, AnyError> {
    Ok(Value::from("DEV"))
}
