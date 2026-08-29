# Tạo chiến dịch ZNS

Vào **Thông báo ZNS → Chiến dịch Broadcast → Tạo chiến dịch mới**.

## Bước 1: Chọn mẫu tin

Chọn một mẫu đã được duyệt. Hệ thống hiển thị nội dung và các biến của mẫu.

## Bước 2: Điền tham số

- Nhập tên chiến dịch.
- Nhập giá trị mặc định cho các biến.
- Giá trị mặc định được dùng nếu người nhận không có giá trị riêng.

## Bước 3: Chọn nguồn khách hàng

### Nhập tay

Mỗi dòng một người nhận theo định dạng `số điện thoại, tên`:

```text
0912345678, Nguyễn Văn A
0987654321, Trần Thị B
```

Số điện thoại bắt buộc, tên là tùy chọn.

### Nhập từ Excel

1. Chọn nguồn **Nhập từ Excel**.
2. Chọn file XLSX, XLS hoặc CSV.
3. File cần có cột `phone` hoặc `sdt`.
4. Có thể thêm `name` và các cột trùng với key biến của mẫu tin.

Ví dụ cột: `phone`, `name`, `customer_name`, `order_code`.

File được đọc trên trình duyệt. Kiểm tra số lượng và dữ liệu biến trước khi chuyển bước.

> **Tự kiểm tra sau khi tải Excel:** File phải hiện số người nhận hợp lệ lớn hơn 0; có cột `phone` hoặc `sdt`; tên các cột biến phải khớp với placeholder trong mẫu tin. Nếu hệ thống báo dòng lỗi, sửa file rồi tải lại trước khi tiếp tục.

### Khách hàng từ Mini App

1. Chọn nguồn **Khách hàng từ Mini App**.
2. Kiểm tra số lượng khách hàng được tải.
3. Kiểm tra và bổ sung các biến riêng nếu cần.

Nếu danh sách rỗng, kiểm tra nguồn khách hàng, trạng thái hoạt động và dữ liệu liên kết Zalo.

> **Tự kiểm tra nguồn Mini App:** Danh sách phải có số lượng khách hàng và trạng thái liên kết Zalo hợp lệ. Nếu số lượng bằng 0, kiểm tra Mini App đang hoạt động và khách hàng đã liên kết đúng OA.

## Bước 4: Đặt lịch và xác nhận

- **Gửi ngay:** tạo hàng đợi và bắt đầu xử lý.
- **Hẹn giờ gửi:** chọn ngày và giờ gửi.

Trước khi xác nhận, kiểm tra tên chiến dịch, mẫu tin, tổng số người nhận, nội dung và thời điểm gửi.

> **Tự kiểm tra trước khi xác nhận:** Đọc lại theo thứ tự **Tên chiến dịch → Mẫu tin → Số người nhận → Kênh gửi → Gửi ngay/Hẹn giờ**. Chỉ xác nhận khi cả năm thông tin đều đúng.
