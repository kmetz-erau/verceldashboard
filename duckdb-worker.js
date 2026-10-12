// Same-origin worker entry point for Vercel. The browser can construct this
// worker because this file is hosted by the app; it then loads DuckDB's worker
// implementation from jsDelivr inside the worker context.
importScripts('https://cdn.jsdelivr.net/npm/@duckdb/duckdb-wasm@1.29.0/dist/duckdb-browser-eh.worker.js');
