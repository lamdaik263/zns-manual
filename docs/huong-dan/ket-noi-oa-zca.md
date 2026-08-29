# Kết nối Zalo OA & ZCA

## Mục đích

Cho phép hệ thống sử dụng OA của doanh nghiệp để gửi tin nhắn ZNS.

## Các bước thực hiện

1. Mở **Thông báo ZNS → Kết nối OA & ZCA**.
2. Nhấn **Thêm kết nối OA**.
3. Đăng nhập Zalo và cấp quyền cho hệ thống.
4. Chọn OA cần kết nối.
5. Kiểm tra trạng thái hiển thị **Đã kết nối**.
6. Nếu token hết hạn, chọn làm mới token hoặc kết nối lại.

> **Cách nhận biết màn hình đúng:** Ở thanh điều hướng, mục **Kết nối OA & ZCA** nằm trong nhóm **Thông báo ZNS**. Trên trang này, nút **Thêm kết nối OA** thường nằm ở góc phải phía trên.

## Kết quả

Khi thấy trạng thái **Đã kết nối**, bạn có thể chuyển sang tạo mẫu tin hoặc tạo chiến dịch.

Nếu OA chưa kết nối, hàng đợi sẽ không gửi được và có thể phát sinh lỗi `ZNS_OA_NOT_CONNECTED`.

> **Kiểm tra kết quả:** Thẻ OA đã chọn phải hiển thị tên OA, OA ID/App ID và nhãn màu xanh **Đã kết nối**. Nếu vẫn thấy **Chưa kết nối**, **Làm mới token** hoặc nút **Kết nối OA**, chưa chuyển sang bước tạo mẫu tin.

> Nếu không thấy OA cần chọn, hãy kiểm tra tài khoản đăng nhập và quyền quản trị OA.
