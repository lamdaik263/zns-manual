"use client";

import { useMemo, useState } from "react";

const navGroups = [
  { label: "Bắt đầu", items: ["Giới thiệu ZNS", "Lộ trình triển khai", "Thuật ngữ thường gặp"] },
  { label: "Thiết lập tài khoản", items: ["Điều kiện sử dụng", "Tạo Zalo OA", "Xác thực Zalo OA", "Kết nối hệ thống"] },
  { label: "Quản lý mẫu tin", items: ["Tạo mẫu tin ZNS", "Gửi duyệt mẫu tin", "Xử lý mẫu tin bị từ chối"] },
  { label: "Gửi và theo dõi", items: ["Gửi tin đầu tiên", "Báo cáo gửi tin", "Đối soát chi phí"] },
  { label: "Dành cho developer", items: ["Tổng quan API", "Webhook / Callback", "Mã lỗi API", "Ví dụ tích hợp"] },
  { label: "Hỗ trợ", items: ["Xử lý lỗi", "Câu hỏi thường gặp", "Chính sách và chi phí"] },
];

const sections = [
  { id: "zns-la-gi", label: "Zalo ZNS là gì?" },
  { id: "vi-sao-zns", label: "Vì sao doanh nghiệp chọn ZNS?" },
  { id: "so-sanh", label: "ZNS và các kênh khác" },
  { id: "dieu-kien", label: "Điều kiện sử dụng" },
  { id: "quy-trinh", label: "Quy trình bắt đầu" },
  { id: "faq", label: "Câu hỏi thường gặp" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [openGroups, setOpenGroups] = useState<string[]>(navGroups.map((group) => group.label));
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return navGroups;
    const normalized = query.toLowerCase();
    return navGroups.map((group) => ({ ...group, items: group.items.filter((item) => item.toLowerCase().includes(normalized)) })).filter((group) => group.items.length);
  }, [query]);

  function toggleGroup(label: string) {
    setOpenGroups((current) => current.includes(label) ? current.filter((item) => item !== label) : [...current, label]);
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="ZNS Manual trang chủ">
          <span className="brand-mark">z</span>
          <span>ZNS Manual</span>
        </a>
        <div className="topbar-actions">
          <div className="top-search">
            <span aria-hidden="true">⌕</span>
            <input aria-label="Tìm kiếm tài liệu" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm kiếm tài liệu..." />
            <kbd>⌘ K</kbd>
          </div>
          <button className="language" type="button">VI <span>⌄</span></button>
          <a className="github-link" href="https://developers.zalo.me/" target="_blank" rel="noreferrer">Tài liệu API <span>↗</span></a>
        </div>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">☰</button>
      </header>

      <div className="docs-layout" id="top">
        <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
          <div className="mobile-search top-search">
            <span aria-hidden="true">⌕</span><input aria-label="Tìm kiếm" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm kiếm..." />
          </div>
          <div className="sidebar-intro"><span className="status-dot" /> Tài liệu đang cập nhật</div>
          <nav aria-label="Điều hướng tài liệu">
            {filteredGroups.map((group) => (
              <div className="nav-group" key={group.label}>
                <button className="nav-heading" type="button" onClick={() => toggleGroup(group.label)}><span>{group.label}</span><span className={`chevron ${openGroups.includes(group.label) ? "expanded" : ""}`}>›</span></button>
                {openGroups.includes(group.label) && <div className="nav-items">{group.items.map((item, index) => <a className={item === "Giới thiệu ZNS" ? "active" : ""} href={item === "Giới thiệu ZNS" ? "#top" : `#${item.toLowerCase().replaceAll(" ", "-")}`} key={item}>{item}{index === 0 && group.label === "Bắt đầu" ? <span className="new-pill">Mới</span> : null}</a>)}</div>}
              </div>
            ))}
          </nav>
          <div className="sidebar-footer"><span className="help-icon">?</span><div><strong>Cần trợ giúp?</strong><span>Gửi câu hỏi cho đội ngũ ZNS</span></div><span>→</span></div>
        </aside>

        <main className="main-content">
          <div className="breadcrumbs"><a href="#top">Trang chủ</a><span>/</span><a href="#top">Bắt đầu</a><span>/</span><span>Giới thiệu ZNS</span></div>
          <article>
            <div className="eyebrow">BẮT ĐẦU VỚI ZNS</div>
            <h1>Giới thiệu Zalo ZNS</h1>
            <p className="lead">Tìm hiểu cách Zalo ZNS giúp doanh nghiệp gửi thông báo chăm sóc khách hàng đúng lúc, đúng ngữ cảnh và dễ dàng đo lường.</p>
            <div className="article-meta"><span className="avatar">ZM</span><span>Đội ngũ ZNS Manual</span><span className="meta-divider" /><span>Cập nhật ngày 09/08/2026</span><span className="read-time">5 phút đọc</span></div>

            <div className="callout callout-blue"><span className="callout-icon">i</span><p><strong>Mục tiêu bài viết</strong><br />Sau khi đọc xong, bạn sẽ hiểu ZNS là gì, khi nào nên sử dụng và cần chuẩn bị những gì trước khi bắt đầu.</p></div>

            <section id="zns-la-gi"><h2>Zalo ZNS là gì?</h2><p><strong>Zalo Notification Service (ZNS)</strong> là dịch vụ gửi thông báo chăm sóc khách hàng qua Zalo, được kích hoạt theo một giao dịch hoặc sự kiện cụ thể. Doanh nghiệp có thể gửi thông tin đến khách hàng ngay cả khi họ chưa theo dõi Zalo Official Account (OA).</p><p>ZNS phù hợp với những thông báo có tính hữu ích và liên quan trực tiếp đến khách hàng như xác nhận đơn hàng, cập nhật vận chuyển, nhắc lịch hẹn hoặc thông báo thay đổi trạng thái dịch vụ.</p></section>

            <section id="vi-sao-zns"><h2>Vì sao doanh nghiệp chọn ZNS?</h2><div className="feature-grid"><div className="feature-card"><span className="feature-icon green">✦</span><h3>Đúng thời điểm</h3><p>Gửi thông báo ngay khi có sự kiện phát sinh, giúp khách hàng luôn nắm được thông tin mới nhất.</p></div><div className="feature-card"><span className="feature-icon purple">↗</span><h3>Nội dung phong phú</h3><p>Hỗ trợ hình ảnh, bảng thông tin, biến động và nút CTA để dẫn khách hàng đến bước tiếp theo.</p></div><div className="feature-card"><span className="feature-icon orange">◎</span><h3>Dễ đo lường</h3><p>Theo dõi trạng thái gửi, lượt mở và tương tác để tối ưu trải nghiệm khách hàng.</p></div></div></section>

            <section id="so-sanh"><h2>ZNS và các kênh khác</h2><p>ZNS nằm giữa thông báo giao dịch và chăm sóc khách hàng. Bảng dưới đây giúp bạn chọn đúng kênh cho từng nhu cầu.</p><div className="compare-table"><div className="table-row table-head"><span>Tiêu chí</span><span className="highlight-col">Zalo ZNS</span><span>SMS truyền thống</span></div><div className="table-row"><span>Nội dung</span><span className="highlight-col">Text, hình ảnh, bảng, CTA</span><span>Text, tối đa 160 ký tự</span></div><div className="table-row"><span>Đối tượng nhận</span><span className="highlight-col">Khách hàng có số điện thoại Zalo</span><span>Số điện thoại hợp lệ</span></div><div className="table-row"><span>Tương tác</span><span className="highlight-col">Có thể tiếp tục qua Zalo OA</span><span>Một chiều</span></div></div></section>

            <section id="dieu-kien"><h2>Điều kiện sử dụng</h2><p>Trước khi bắt đầu, hãy chuẩn bị các thông tin sau:</p><div className="check-list"><div><span>✓</span><p><strong>Zalo OA đã xác minh</strong><small>OA là kênh đại diện chính thức của doanh nghiệp trên Zalo.</small></p></div><div><span>✓</span><p><strong>Tệp khách hàng phù hợp</strong><small>Có số điện thoại khách hàng và sự kiện cần gửi thông báo.</small></p></div><div><span>✓</span><p><strong>Mẫu tin được phê duyệt</strong><small>Nội dung ZNS cần được duyệt trước khi gửi thực tế.</small></p></div></div></section>

            <section id="quy-trinh"><h2>Quy trình bắt đầu</h2><p>Đi theo 5 bước dưới đây để gửi tin ZNS đầu tiên:</p><div className="steps"><div className="step"><span>01</span><div><strong>Tạo Zalo OA</strong><p>Đăng ký Official Account cho doanh nghiệp.</p></div></div><div className="step"><span>02</span><div><strong>Xác thực OA</strong><p>Hoàn tất xác minh để mở các tính năng nhắn tin.</p></div></div><div className="step"><span>03</span><div><strong>Kết nối hệ thống</strong><p>Kết nối OA với nền tảng gửi tin hoặc API của bạn.</p></div></div><div className="step"><span>04</span><div><strong>Tạo và gửi duyệt mẫu tin</strong><p>Thiết kế nội dung theo đúng chính sách của Zalo.</p></div></div><div className="step"><span>05</span><div><strong>Gửi tin và theo dõi</strong><p>Gửi theo sự kiện, kiểm tra báo cáo và xử lý lỗi.</p></div></div></div></section>

            <div className="callout callout-yellow"><span className="callout-icon">!</span><p><strong>Lưu ý về chính sách</strong><br />Quy định về mẫu tin, giá và giới hạn gửi có thể thay đổi. Luôn kiểm tra tài liệu chính thức trước khi đưa vào vận hành.</p></div>

            <section id="faq"><h2>Câu hỏi thường gặp</h2><details><summary>ZNS có gửi được cho tất cả số điện thoại không?</summary><p>Tin được gửi đến số điện thoại đang sử dụng Zalo và đáp ứng các điều kiện của nền tảng tại thời điểm gửi.</p></details><details><summary>Người nhận có cần follow OA không?</summary><p>Không nhất thiết. ZNS được gửi theo ngữ cảnh giao dịch, khác với tin nhắn chủ động trên OA.</p></details><details><summary>Tin gửi thất bại có bị tính phí không?</summary><p>Hãy kiểm tra chính sách giá hiện hành của nhà cung cấp dịch vụ trước khi đối soát.</p></details></section>

            <div className="article-nav"><a href="#top"><span>← Bài trước</span><strong>Bắt đầu</strong></a><a href="#quy-trinh" className="next"><span>Bài tiếp theo →</span><strong>Lộ trình triển khai</strong></a></div>
            <div className="feedback"><span>Bài viết này có hữu ích không?</span><button className={feedback === "up" ? "selected" : ""} onClick={() => setFeedback("up")} aria-label="Có, hữu ích">👍</button><button className={feedback === "down" ? "selected" : ""} onClick={() => setFeedback("down")} aria-label="Không hữu ích">👎</button>{feedback && <small>Cảm ơn phản hồi của bạn!</small>}</div>
          </article>
        </main>

        <aside className="toc"><div className="toc-title">TRÊN TRANG NÀY</div>{sections.map((section, index) => <a href={`#${section.id}`} className={index === 0 ? "toc-active" : ""} key={section.id}>{section.label}</a>)}<div className="toc-divider" /><a href="#top" className="back-top">↑ Về đầu trang</a></aside>
      </div>
    </div>
  );
}
