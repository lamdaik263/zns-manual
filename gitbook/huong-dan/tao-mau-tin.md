# Tạo và quản lý mẫu tin ZNS

## Tạo mẫu

1. Mở **Thông báo ZNS → Mẫu tin ZNS**.
2. Chọn **Tạo mẫu tin**.
3. Chọn **Loại mẫu** phù hợp. Với thông báo hành chính thông thường, chọn **Văn bản**.
4. Chọn **Loại thông báo**:
   - **Giao dịch:** gắn với một hồ sơ, thủ tục hoặc giao dịch cụ thể.
   - **Chăm sóc khách hàng:** hỗ trợ sau khi khách hàng đã sử dụng một dịch vụ cụ thể.
   - **Truyền thông:** tuyên truyền, cảnh báo hoặc thông báo cộng đồng.
5. Tải logo chính thức của OA/đơn vị.
6. Nhập tiêu đề và nội dung, nói rõ đơn vị gửi, thông tin gì, gửi cho ai và mục đích gì.
7. Khai báo tham số bằng placeholder, ví dụ `<customer_name>`. Mỗi tham số phải có ví dụ minh họa và dữ liệu truyền tương ứng.
8. Thêm ít nhất một CTA:
   - Nhãn nút từ 5–30 ký tự, ví dụ `Xem thông tin`.
   - URL HTTPS đến đúng trang đích liên quan.
   - Không dùng link rút gọn, `zalo.me`, link nhóm chat hoặc trang yêu cầu đăng nhập.
9. Kiểm tra checklist, chọn **Lưu bản nháp**, sau đó chọn **Gửi Zalo**.
10. Chọn **Đồng bộ từ Zalo** để cập nhật kết quả xét duyệt.

> 📸 **Ảnh minh họa cần bổ sung:** Chụp màn hình form tạo mẫu tin, bao gồm các vùng **Loại mẫu**, **Loại thông báo**, **Logo**, **Tiêu đề**, **Nội dung**, **Biến** và **CTA**.

## Checklist trước khi gửi duyệt

- Tên mẫu dài 10–60 ký tự, dễ nhận biết, không chứa tên chiến dịch tạm thời.
- Chọn đúng mục đích gửi; không chọn **Chăm sóc khách hàng** cho nội dung chỉ là tuyên truyền cộng đồng.
- Logo/hình ảnh thuộc OA/đơn vị hoặc có quyền sử dụng hợp lệ.
- Tiêu đề tối đa 65 ký tự; mỗi đoạn từ 9–400 ký tự; tiếng Việt rõ ràng.
- Chỉ dùng tham số cần thiết và có giá trị mẫu.
- Có tối thiểu một CTA mô tả đúng hành động.
- URL CTA dùng HTTPS, mở được và dẫn đúng nội dung.
- Không dùng nội dung quảng cáo, khuyến mại, lời kêu gọi mơ hồ, link nhóm chat, link cá nhân hoặc ảnh chưa được phép sử dụng.

## Trạng thái sau khi gửi

| Trạng thái | Ý nghĩa |
| --- | --- |
| Mới tạo | Chỉ được lưu trong hệ thống, chưa gửi Zalo. |
| Chờ duyệt | Đã gửi sang Zalo; không sửa nội dung, media hoặc CTA. |
| Đã duyệt/Đang hoạt động | Có thể dùng để tạo chiến dịch. |
| Bị từ chối | Đọc lý do, sửa đúng nguyên nhân và gửi duyệt lại. |

Zalo kiểm tra nội dung, mục đích, logo/hình ảnh, tham số và CTA như một tổng thể. Không chỉ đổi tên mẫu rồi gửi lại. Chỉ mẫu đã duyệt/đang hoạt động mới được dùng để gửi.

Nếu mẫu thiếu mã template trên Zalo, hàng đợi có thể phát sinh lỗi `ZNS_TEMPLATE_ID_MISSING`.

> 📸 **Ảnh minh họa cần bổ sung:** Chụp màn hình danh sách mẫu tin có các trạng thái **Mới tạo**, **Chờ duyệt**, **Đã duyệt/Đang hoạt động** và **Bị từ chối**. Nếu có thể, chụp thêm vị trí hiển thị **Template ID**.

## Mẫu tham khảo cho thông báo hành chính

**Tên mẫu:** `Thông tin hỗ trợ người dân tại xã Vạn Tường`

**Loại mẫu:** `Văn bản`
**Loại thông báo:** `Truyền thông`

```text
Kính gửi <customer_name>,

Công an xã Vạn Tường thông tin đến người dân về hoạt động hỗ trợ trường hợp cần được chăm sóc sức khỏe tại địa phương.

Nội dung nhằm tuyên truyền, nâng cao nhận thức và hướng dẫn người dân chủ động liên hệ cơ quan Công an hoặc cơ sở y tế khi cần hỗ trợ.

Trân trọng.
```

CTA: nhãn `Xem thông tin`, dẫn đến bài viết đầy đủ có liên quan trực tiếp.

> Không đưa mã công dân, thông tin sức khỏe, ảnh nhận diện hoặc thông tin nhạy cảm vào một mẫu truyền thông chung nếu không thật sự cần thiết.
