# ZNS Manual

Website tài liệu hướng dẫn sử dụng Zalo ZNS cho doanh nghiệp và developer.

## Docusaurus

Nội dung tài liệu nằm trong thư mục `docs/`. Menu được cấu hình trong `sidebars.js` và site được build bằng Docusaurus.

Build production tạo static site trong thư mục `build/`, có thể deploy lên GitHub Pages, Cloudflare Pages, Vercel hoặc Netlify.

## Đã có

- Giao diện tài liệu 3 cột: sidebar điều hướng, nội dung bài viết, mục lục bên phải.
- Nội dung mẫu cho bài “Giới thiệu Zalo ZNS”.
- Sidebar nhóm theo lộ trình: bắt đầu, tài khoản, mẫu tin, gửi tin, API và hỗ trợ.
- Tìm kiếm lọc nhanh menu, thu gọn nhóm tài liệu và menu mobile.
- Bảng so sánh ZNS/SMS, checklist điều kiện, quy trình 5 bước, FAQ và phản hồi bài viết.
- Responsive cho màn hình tablet và điện thoại.

## Chạy local

Project yêu cầu Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Mở `http://localhost:3000` để xem website.

## Build production

```bash
npm run build
npm run serve
```
