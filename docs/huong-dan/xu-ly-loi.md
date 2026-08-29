# Xử lý lỗi thường gặp

Khi gửi tin không thành công, hãy kiểm tra theo thứ tự bên dưới. Bạn không cần hiểu mã kỹ thuật để tự xử lý bước đầu.

## Kiểm tra đầu tiên

1. **Kiểm tra kết nối OA:** OA còn hiển thị **Đã kết nối** và token còn hiệu lực không?
2. **Kiểm tra Credit:** Tài khoản còn đủ Credit và quota không?
3. **Kiểm tra mẫu tin:** Mẫu đã được duyệt, đồng bộ và có Template ID chưa?
4. **Kiểm tra dữ liệu:** Số điện thoại, biến dữ liệu và file Excel có đúng định dạng không?
5. **Kiểm tra hàng đợi:** Queue có đang trong giờ cấm, đã hẹn giờ hoặc đang chờ retry không?

> **Cách khoanh vùng lỗi:** Trong **Hàng đợi gửi**, lọc lần lượt theo **Trạng thái**, **Kênh gửi** và **Thời điểm gửi**. Ghi lại Job ID/Campaign ID, nhưng không chia sẻ số điện thoại hay dữ liệu khách hàng.

## Không thấy mẫu tin để chọn

Mẫu tin có thể chưa được tạo, chưa đồng bộ hoặc chưa được Zalo phê duyệt.

**Cách xử lý:** Vào **Mẫu tin ZNS**, kiểm tra trạng thái mẫu. Chỉ chọn mẫu có trạng thái **Đã duyệt/Đang hoạt động**.

## Hàng đợi không gửi

**Bạn có thể thấy:** Tin đứng ở trạng thái **Chờ gửi**, **Đã hẹn giờ** hoặc không chuyển sang **Đang gửi**.

**Cách xử lý:** Kiểm tra kết nối OA, token, Credit, quota, giờ cấm, trạng thái queue và thời điểm chạy tiếp theo.

> **Mã kỹ thuật (chỉ gửi cho đội ngũ hỗ trợ nếu được yêu cầu):** `ZNS_OA_NOT_CONNECTED` nghĩa là OA chưa kết nối hoặc token đã hết hạn.

## Tin thất bại ngay sau khi gửi

**Cách xử lý:** Kiểm tra số điện thoại, Template ID, trạng thái OA và dữ liệu biến của người nhận. Không retry liên tục nếu chưa xác định nguyên nhân.

> **Mã kỹ thuật:** `ZNS_TEMPLATE_ID_MISSING` nghĩa là mẫu chưa có mã Template ID được đồng bộ từ Zalo.

## Mẫu tin thiếu nút thao tác

**Bạn có thể thấy:** Mẫu tin bị từ chối hoặc không thể gửi vì chưa có nút bấm.

**Cách xử lý:** Mở mẫu tin, bổ sung ít nhất một CTA gồm nhãn nút và URL HTTPS hợp lệ, sau đó lưu và gửi duyệt lại.

> **Mã kỹ thuật:** `-1132`. Người dùng chỉ cần làm theo cách xử lý ở trên.

> **Tự kiểm tra CTA:** Trong phần CTA, đối chiếu ba trường **Nhãn nút**, **Loại CTA** và **URL**. Nhãn phải mô tả đúng trang mở ra, loại CTA phải khớp với domain và URL phải dùng HTTPS.

## Mẫu tin thiếu Logo hoặc hình ảnh đầu trang

**Bạn có thể thấy:** Mẫu tùy chỉnh bị từ chối vì thiếu Logo/Hình ảnh.

**Cách xử lý:** Nếu chọn Logo, tải đủ hai phiên bản sáng/tối và chờ hệ thống trả về hai Media ID trước khi lưu mẫu.

> **Mã kỹ thuật:** `-153`.

> **Tự kiểm tra media:** Sau khi tải **Logo/Hình ảnh header**, kiểm tra tên file, trạng thái tải thành công và preview Light/Dark. Chỉ dùng ảnh có quyền sử dụng, nền trong suốt khi yêu cầu và không chứa dữ liệu cá nhân.

Nếu Zalo báo **Logo cần sử dụng nền trong suốt**, hãy kiểm tra file PNG có nền trong suốt, không phải nền trắng hoặc đen. Không dùng ảnh chụp màn hình logo. Nếu mẫu đã bị từ chối, tạo mẫu mới sau khi thay media.

Zalo có thể yêu cầu điền biểu mẫu hỗ trợ tại [go.zalo.me/zbs-support](https://go.zalo.me/zbs-support). Đây là kênh hỗ trợ, không phải URL CTA của mẫu tin.

## Zalo từ chối link hoặc domain

**Cách xử lý:** Kiểm tra URL thực tế đang dẫn đến đâu và chọn đúng phân loại CTA. Nếu URL là website của đơn vị khác, không khai báo là website của OA. Domain phải đồng nhất với OA hoặc có quyền sử dụng.

> **Tự kiểm tra phân loại:** Mở URL trong trình duyệt riêng tư, ghi nhận domain và trang đích thực tế, rồi chọn loại CTA theo đúng đích đến. Không chọn chỉ dựa theo tên nút.

## Zalo từ chối hình ảnh do bản quyền

**Cách xử lý:** Thay ảnh cá nhân, người bệnh hoặc người nổi tiếng bằng logo chính thức của OA/đơn vị hoặc ảnh có quyền sử dụng hợp lệ. Ảnh xuất hiện trên báo công khai không đồng nghĩa với việc được phép sử dụng lại.

## Không nhập được người nhận từ Excel

**Cách xử lý:** Kiểm tra file có cột `phone` hoặc `sdt`, số điện thoại hợp lệ và tên cột biến đúng với key trong mẫu tin.

> **File Excel tối thiểu để kiểm tra:** Dùng dữ liệu giả với các cột `phone`, `name`, `customer_name`, `order_code`. Sau khi import, cần thấy số dòng hợp lệ và tên biến được nhận diện; không dùng file chứa dữ liệu khách hàng thật để kiểm tra.

## Mini App không có khách hàng

**Cách xử lý:** Kiểm tra khách hàng có nguồn Mini App, đang hoạt động, có dữ liệu Zalo và thuộc đúng doanh nghiệp.

## Khi nào cần gửi đội ngũ hỗ trợ?

Nếu đã kiểm tra các bước trên nhưng lỗi vẫn còn, gửi kèm:

- Job ID và Campaign ID.
- Thời điểm gửi.
- Trạng thái queue.
- Ảnh chụp lỗi đã che dữ liệu nhạy cảm.
- Mã kỹ thuật nếu hệ thống hiển thị.

> **Thông tin cần ghi nhận:** Mở chi tiết queue lỗi và sao chép **Job ID**, **Campaign ID**, **Trạng thái**, **Mã lỗi** và **Nội dung lỗi**. Khi gửi hỗ trợ, chỉ cung cấp các mã kỹ thuật; che tên, số điện thoại và dữ liệu khách hàng.
