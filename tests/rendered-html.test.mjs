import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the ZNS Manual documentation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>ZNS Manual — Hướng dẫn sử dụng Zalo ZNS<\/title>/i);
  assert.match(html, /Giới thiệu Zalo ZNS/);
  assert.match(html, /Hướng dẫn gửi tin nhắn ZNS/);
  assert.match(html, /Kết nối Zalo OA &amp; ZCA/);
  assert.match(html, /Tạo chiến dịch gửi tin/);
  assert.match(html, /Theo dõi kết quả gửi/);
  assert.match(html, /Chờ gửi/);
  assert.match(html, /Thất bại/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|SkeletonPreview/);
});

test("keeps the site metadata and guide content in the source", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Hướng dẫn người dùng/);
  assert.match(page, /Kết nối OA &amp; ZCA/);
  assert.match(page, /Tạo mẫu tin ZNS/);
  assert.match(page, /Xử lý lỗi khi gửi/);
  assert.match(layout, /ZNS Manual — Hướng dẫn sử dụng Zalo ZNS/);
  assert.match(layout, /<html lang="vi">/);
});
