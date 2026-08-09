# ZNS Manual

Website tài liệu hướng dẫn sử dụng Zalo ZNS cho doanh nghiệp và developer.

## Đã có trong MVP

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

Mở URL local mà terminal in ra để xem website.

## Định hướng tiếp theo

1. Tách mỗi bài thành route hoặc file Markdown riêng.
2. Thêm trang “Tạo Zalo OA”, “Tạo mẫu tin” và “Gửi tin đầu tiên”.
3. Bổ sung ảnh chụp màn hình và link đến nguồn chính thức của Zalo.
4. Thêm tìm kiếm toàn văn, form phản hồi và ngày cập nhật tự động.
