/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userGuide: [
    {type: 'doc', id: 'intro', label: 'Trang chủ'},
    {type: 'category', label: 'Bắt đầu', items: ['gioi-thieu-zns', 'thuat-ngu']},
    {type: 'category', label: 'Hướng dẫn người dùng', items: [
      'huong-dan/quy-trinh-tong-quat', 'huong-dan/chuan-bi-truoc-khi-gui', 'huong-dan/ket-noi-oa-zca',
      'huong-dan/tao-mau-tin', 'huong-dan/chon-loai-cta', 'huong-dan/tao-chien-dich', 'huong-dan/kenh-gui',
      'huong-dan/gio-cam-va-retry', 'huong-dan/theo-doi-ket-qua', 'huong-dan/credit-va-bao-cao',
      'huong-dan/xu-ly-loi', 'huong-dan/tham-khao-zalo',
    ]},
  ],
  developer: [{type: 'doc', id: 'developer/tong-quan-api', label: 'Tổng quan API'}],
};

module.exports = sidebars;
