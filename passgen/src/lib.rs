use wasm_bindgen::prelude::*;
pub(crate) mod mac;
pub(crate) mod utils;

use crate::utils::log;

extern crate console_error_panic_hook;

#[wasm_bindgen]
pub fn greet() {
    console_log!("Hello svelte");
}
