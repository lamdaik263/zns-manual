# Quy trình sử dụng ZNS tổng quát

1. Kết nối Zalo OA.
2. Tạo mẫu tin theo checklist và gửi Zalo duyệt.
3. Đồng bộ trạng thái đến khi mẫu được duyệt và có Template ID.
4. Chuẩn bị nguồn khách hàng.
5. Tạo chiến dịch gửi.
6. Theo dõi hàng đợi, retry và báo cáo.

## Điều kiện trước khi gửi

- OA đã kết nối và token còn hiệu lực.
- Mẫu tin đã được phê duyệt và có mã template trên Zalo.
- Người nhận có số điện thoại hợp lệ hoặc dữ liệu Zalo phù hợp.
- Đơn vị còn Credit nếu mẫu tin có tính phí.
- Nội dung và các biến đã được kiểm tra.

## Hai kênh gửi

- **SĐT/ZNS:** gửi theo số điện thoại, thường có tính phí.
- **In-App:** gửi đến Zalo UID khi khách hàng có dữ liệu theo dõi OA phù hợp.
