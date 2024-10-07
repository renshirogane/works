"use strict"
const splide = new Splide(".splide", {
  type: "loop", // スライダーをループさせる
  pauseOnHover: false, // カーソルが乗っても停止しない
  pauseOnFocus: false, // フォーカスを当てても停止しない
  interval: 2000, // 自動再生の間隔
  speed: 1000, // スライドの移動速度
  perPage: 2, // デフォルトの表示枚数
  breakpoints: {
    1080: {
      perPage: 1, // 1015px未満では1枚だけ表示
      focus: 'center', // スライドを中央に配置
    },
  },
}).mount();


// Accordionとハンバーガーメニューのイベントリスナーはそのまま
$(".accordion_force_clicked").click(function () {
  var faqBox = $(this).closest(".faq__box");
  faqBox.find(".accordion_action_clicked_icon").toggleClass('_emergent');
  faqBox.find(".accordion_action_clicked").slideToggle();
});

$(".hamburger_force_clicked").click(function () {
  $(".hamburger_action_clicked").toggleClass('_emergent');
});