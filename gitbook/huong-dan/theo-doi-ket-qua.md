# Theo dõi kết quả

Sau khi xác nhận chiến dịch, mở khu vực hàng đợi hoặc báo cáo gửi để kiểm tra tiến độ.

| Trạng thái | Ý nghĩa |
| --- | --- |
| Chờ gửi | Tin đang chờ hệ thống xử lý. |
| Đang gửi | Hệ thống đang gửi tin đến người nhận. |
| Đã gửi | Gửi thành công. |
| Thử lại | Hệ thống sẽ gửi lại theo cơ chế retry. |
| Thất bại | Không thể gửi; cần kiểm tra nguyên nhân. |

## Kiểm tra sau chiến dịch

- Đối chiếu số lượng tin thành công và thất bại.
- Kiểm tra các bản ghi ở trạng thái **Thử lại** hoặc **Thất bại**.
- Kiểm tra Credit còn lại nếu dịch vụ có tính phí.
