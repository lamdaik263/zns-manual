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

![Màn hình Kết nối OA & Zalo Cloud Account, nút Kết nối OA được đánh dấu](/img/01-ket-noi-oa/01-them-ket-noi-oa.png)

*Màn hình **Kết nối OA & Zalo Cloud Account**, trong đó nút **Kết nối OA** được đánh dấu.*

## Kết quả

Khi thấy trạng thái **Đã kết nối**, bạn có thể chuyển sang tạo mẫu tin hoặc tạo chiến dịch.

Nếu OA chưa kết nối, hàng đợi sẽ không gửi được và có thể phát sinh lỗi `ZNS_OA_NOT_CONNECTED`.

![Trạng thái OA đã kết nối thành công](/img/01-ket-noi-oa/03-oa-da-ket-noi.png)

*Trạng thái **Đã kết nối** sau khi chọn OA thành công. Đây là trạng thái cần đối chiếu trước khi sang bước tiếp theo.*

> Nếu không thấy OA cần chọn, hãy kiểm tra tài khoản đăng nhập và quyền quản trị OA.
