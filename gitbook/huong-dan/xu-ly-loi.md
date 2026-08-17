# Xử lý lỗi thường gặp

## Kiểm tra đầu tiên

1. **OA:** OA đã kết nối và token còn hiệu lực chưa?
2. **Credit:** Tài khoản có đủ Credit và quota không?
3. **Mẫu tin:** Mẫu đã được duyệt, đồng bộ và có Template ID chưa?
4. **Dữ liệu:** Số điện thoại, biến dữ liệu và định dạng khách hàng có hợp lệ không?
5. **Queue:** Kiểm tra trạng thái, giờ cấm và thời điểm chạy tiếp theo.

## Các lỗi cụ thể

### Không có mẫu tin

Mẫu chưa được tạo, chưa đồng bộ hoặc chưa được Zalo phê duyệt.

### Queue không gửi

Kiểm tra OA, token, Credit, quota, giờ cấm, trạng thái queue và thời điểm chạy tiếp theo.

### `ZNS_OA_NOT_CONNECTED`

OA chưa được kết nối hoặc token hết hạn. Làm mới token hoặc kết nối lại OA & ZCA.

### `ZNS_TEMPLATE_ID_MISSING`

Mẫu chưa được đồng bộ mã Template ID trên Zalo. Đồng bộ lại mẫu và chỉ dùng mẫu đã duyệt/đang hoạt động.

### Lỗi thiếu button/CTA (`-1132`)

Mẫu chưa có nút thao tác. Bổ sung ít nhất một CTA gồm nhãn nút và URL HTTPS hợp lệ, sau đó lưu và gửi duyệt lại.

### Lỗi thiếu Logo/Hình ảnh header (`-153`)

Mẫu tùy chỉnh type 7 yêu cầu Logo hoặc Hình ảnh. Tải logo chính thức của OA/đơn vị, chờ hệ thống trả về Media ID rồi lưu mẫu và gửi lại.

### Zalo từ chối do CTA hoặc domain

Kiểm tra URL thực tế đang dẫn đến đâu và chọn đúng phân loại CTA. Nếu URL là website của đơn vị khác, không khai báo là website của OA. Domain phải đồng nhất với OA hoặc có quyền/ủy quyền sử dụng.

### Zalo từ chối do bản quyền hình ảnh

Thay ảnh cá nhân, người bệnh hoặc người nổi tiếng bằng logo chính thức của OA/đơn vị hoặc ảnh có quyền sử dụng hợp lệ.

### Excel không tạo được người nhận

Kiểm tra file có cột `phone` hoặc `sdt`, số điện thoại hợp lệ và tên cột biến đúng với key trong mẫu tin.

### Mini App không có khách

Kiểm tra khách hàng có nguồn Mini App, đang hoạt động, có dữ liệu Zalo và thuộc đúng doanh nghiệp.

## Lưu ý vận hành

- Gửi thử cho một số nội bộ trước khi gửi diện rộng.
- Không retry liên tục khi chưa xem nguyên nhân lỗi.
- Kiểm tra số dư và trạng thái OA trước các chiến dịch lớn.
- Sau khi đổi giờ gửi sau giờ cấm, kiểm tra lại queue đang chờ hoặc retry.
