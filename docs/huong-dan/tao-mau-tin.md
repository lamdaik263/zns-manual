# Tạo và quản lý mẫu tin ZNS

## Tạo mẫu

1. Mở **Thông báo ZNS → Mẫu tin ZNS**.
2. Chọn **Tạo mẫu tin**.
3. Chọn **Loại mẫu** phù hợp. Với thông báo hành chính thông thường, chọn **Văn bản**.
4. Chọn **Loại thông báo**:
   - **Giao dịch (TAG 1):** thông báo gắn với hồ sơ, thủ tục hoặc giao dịch cụ thể.
   - **Chăm sóc khách hàng (TAG 2):** hỗ trợ trong quá trình người dân sử dụng dịch vụ.
   - **Hậu mãi (TAG 3):** thông tin hỗ trợ sau khi người dân đã liên hệ, đăng ký hoặc sử dụng dịch vụ.
5. Nhập **Mục đích gửi**, mô tả rõ người nhận là ai, đã phát sinh quan hệ gì với đơn vị và vì sao họ nhận được tin.
6. Tải **Logo chính thức của OA/đơn vị**:
   - Chọn **Logo**, không chọn Hình ảnh nếu chỉ có logo.
   - Upload đủ **Logo giao diện sáng** và **Logo giao diện tối**.
   - Mỗi file PNG 400×96 px, nền trong suốt.
   - Hai phiên bản phải cùng thiết kế và tỷ lệ; bản tối dùng màu sáng để dễ đọc.
   - Không dùng cờ Việt Nam, quốc huy tự chế, ảnh người dân, ảnh cán bộ hoặc banner quảng cáo.
7. Nhập tiêu đề và nội dung. Nội dung phải nói rõ đơn vị gửi, thông tin gì, gửi cho ai và mục đích gì.
8. Khai báo tham số bằng placeholder, ví dụ `<customer_name>`. Mỗi tham số phải có giá trị mẫu.
9. Nhập CTA bắt buộc: nhãn nút 5–30 ký tự và URL HTTPS đến đúng trang đích. Không dùng link rút gọn, `zalo.me`, link nhóm chat hoặc trang yêu cầu đăng nhập.
10. Kiểm tra **Checklist trước khi gửi duyệt**.
11. Chọn **Đồng ý điều khoản → Lưu bản nháp → Gửi duyệt**.
12. Chọn **Đồng bộ từ Zalo** để cập nhật trạng thái và lý do từ chối nếu có.

> 📸 **Ảnh minh họa cần bổ sung:** Chụp form tạo mẫu tin có **Loại mẫu**, **Loại thông báo**, **Mục đích gửi**, upload logo sáng/tối, **Tiêu đề**, **Nội dung**, **Biến** và **CTA**.

## Mẫu khuyến nghị cho thông báo hành chính

**Tên mẫu:** `Thông tin hỗ trợ người dân tại xã Vạn Tường`

**Loại mẫu:** `Văn bản`

**Loại thông báo:** `Hậu mãi (TAG 3)`

**Mục đích gửi:**

```text
Gửi thông tin chính thức đến người dân đã liên hệ hoặc nhận hỗ trợ từ Công an xã Vạn Tường, giúp người dân theo dõi nội dung hỗ trợ và thông tin liên quan tại địa phương.
```

**Tiêu đề:**

```text
Thông tin hỗ trợ người dân tại xã Vạn Tường
```

**Văn bản:**

```text
Kính gửi <customer_name>,

Công an xã Vạn Tường gửi bạn thông tin về hoạt động hỗ trợ người dân tại địa phương.

Nội dung được đăng tải trên Cổng Thông tin điện tử Bộ Công an. Vui lòng nhấn nút bên dưới để xem thông tin chi tiết.

Trân trọng.
```

**Logo:** upload đủ phiên bản sáng và tối.

**CTA:** nhãn `Xem thông tin`, chọn loại **Đến trang web/Zalo Mini App khác (mã 7)** và dẫn đến bài viết đầy đủ có liên quan trực tiếp.

> 📸 **Ảnh minh họa cần bổ sung:** Chụp preview mẫu ở cả chế độ **Sáng** và **Tối**, trong đó logo, nền, chữ và khung tin đều hiển thị rõ.

## Checklist trước khi gửi duyệt

- Tên mẫu dài 10–60 ký tự, dễ nhận biết và không chứa tên chiến dịch tạm thời.
- Đã chọn đúng mục đích gửi; nếu người nhận đã liên hệ hoặc sử dụng dịch vụ thì chọn **Hậu mãi (TAG 3)**.
- Nếu chọn Logo, đã upload đủ bản sáng và tối; cả hai file là PNG 400×96 px, nền trong suốt.
- Khi chuyển preview **Sáng/Tối**, logo, nền, chữ và khung tin đều hiển thị rõ.
- Tiêu đề tối đa 65 ký tự; mỗi đoạn văn từ 9–400 ký tự; viết tiếng Việt rõ ràng.
- Chỉ dùng tham số cần thiết và có giá trị mẫu; khi gửi thật mọi tham số phải có dữ liệu.
- Có tối thiểu một CTA mô tả đúng hành động.
- URL CTA mở được, dùng HTTPS, dẫn đúng nội dung; domain phải đồng nhất với OA hoặc có quyền sử dụng.
- Không dùng quảng cáo, khuyến mại, lời kêu gọi mơ hồ, link nhóm chat, link cá nhân hoặc ảnh chưa được phép sử dụng.

## Sau khi gửi duyệt

- **Mới tạo:** chỉ được lưu trong hệ thống, chưa gửi Zalo.
- **Chờ duyệt:** đã gửi sang Zalo; không sửa nội dung, media hoặc CTA.
- **Đã duyệt/Đang hoạt động:** có thể dùng để tạo chiến dịch.
- **Bị từ chối:** đọc lý do, sửa đúng nguyên nhân, lưu lại và gửi duyệt lại. Không chỉ đổi tên mẫu rồi gửi lại.

Zalo kiểm tra nội dung, mục đích, logo/hình ảnh, tham số và CTA như một tổng thể. Chỉ mẫu đã duyệt/đang hoạt động mới được dùng để gửi.

Nếu mẫu thiếu mã template trên Zalo, queue có thể phát sinh lỗi `ZNS_TEMPLATE_ID_MISSING`.

> 📸 **Ảnh minh họa cần bổ sung:** Chụp danh sách mẫu tin có các trạng thái **Mới tạo**, **Chờ duyệt**, **Đã duyệt/Đang hoạt động** và **Bị từ chối**, kèm vị trí hiển thị Template ID nếu có.
