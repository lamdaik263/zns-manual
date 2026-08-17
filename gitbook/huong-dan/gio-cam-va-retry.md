# Giờ cấm gửi và cơ chế retry

## Giờ cấm gửi ban đêm

Hệ thống mặc định không gửi ZNS trong khoảng **22:00–06:00**. Tin đến hạn trong khoảng này được giữ trong hàng đợi.

Tại màn **Hàng đợi gửi**, người dùng có thể chọn giờ bắt đầu từ 06:00 đến trước 22:00. Ví dụ chọn 08:00 thì các tin rơi vào giờ cấm sẽ được giữ lại và gửi từ 08:00.

## Cơ chế retry

Mỗi hàng đợi mặc định có tối đa 3 lượt, bao gồm lần gửi đầu tiên:

1. Lượt 1: gửi lần đầu.
2. Nếu lỗi có thể retry: chờ khoảng thời gian cấu hình rồi gửi lượt 2.
3. Nếu tiếp tục lỗi: gửi lượt 3.
4. Hết 3 lượt thì chuyển sang **Thất bại**.

Khoảng retry mặc định là 5 phút và có thể đặt trong khoảng 5–10 phút.

Không phải lỗi nào cũng retry. Lỗi thiếu số điện thoại, thiếu Template ID hoặc OA chưa kết nối có thể thất bại ngay.

Với queue **Thất bại**, chọn nút retry để bắt đầu lại. Retry thủ công reset bộ đếm và tạo một chu kỳ tối đa 3 lượt mới.
