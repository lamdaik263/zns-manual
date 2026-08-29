# Theo dõi hàng đợi gửi

Vào **Thông báo ZNS → Hàng đợi gửi** để kiểm tra tiến độ. Có thể lọc theo người nhận, số điện thoại, trạng thái và kênh gửi.

| Trạng thái | Ý nghĩa |
| --- | --- |
| Chờ gửi | Đã tạo queue, chờ cron xử lý. |
| Đã hẹn giờ | Chưa đến thời điểm gửi. |
| Đang gửi | Đang được xử lý. |
| Thử lại | Gửi lỗi tạm thời, đang chờ retry. |
| Đã gửi | Gửi thành công. |
| Thất bại | Hết lượt retry hoặc lỗi không thể retry. |
| Tạm dừng | Người dùng đã tạm dừng queue. |

Queue đã hủy không hiển thị trong danh sách.

> **Cách đọc hàng đợi:** **Chờ gửi/Đã hẹn giờ** là chưa gửi; **Đang gửi** là hệ thống đang xử lý; **Thử lại** là lỗi tạm thời; **Đã gửi** là thành công; **Thất bại** cần mở nguyên nhân; **Tạm dừng** cần người dùng tiếp tục hoặc hủy queue.

## Sau chiến dịch

- Đối chiếu số lượng tin thành công và thất bại.
- Kiểm tra các bản ghi **Thử lại** hoặc **Thất bại**.
- Kiểm tra Credit còn lại nếu dịch vụ có tính phí.
- Kiểm tra queue cũ để tránh gửi trùng.
