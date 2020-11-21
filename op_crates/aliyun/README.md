# deno aliyun

Op crate that connects aliyun services.

# Steps

* Add `op_crates/aliyun` in root's Cargo.toml
* Add  `op_crates/aliyun` in cli/Cargo.toml

```toml
[build-dependencies]
deno_aliyun = { path = "../op_crates/aliyun", version = "0.1.0" }

[dependencies]
deno_aliyun = { path = "../op_crates/aliyun", version = "0.1.0" }
```

* Create cli/ops/aliyun.rs to add register op methods

```
use deno_aliyun::op_hello_aliyun;

pub fn init(rt: &mut deno_core::JsRuntime) {
    super::reg_json_sync(rt, "op_hello_aliyun", op_hello_aliyun);
}
```

* Add init hook in cli/workers.rs

```
  ops::crypto::init(js_runtime, program_state.flags.seed);
  ops::aliyun::init(js_runtime);
```

* Add hook in cli/build.rs

```
  deno_crypto::init(&mut js_runtime);
  deno_aliyun::init(&mut js_runtime);
```

* Add aliyun.d.ts in cli/dts
