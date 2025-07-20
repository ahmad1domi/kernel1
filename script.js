function toggleSubMenu() {
  const menu = document.getElementById('submenu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';

  // Hide content when hiding submenu
  if (menu.style.display === 'none') {
    document.getElementById('content-area').style.display = 'none';
  }
}

function showContent(type) {
  const contentArea = document.getElementById('content-area');
  let content = '';

  if (type === 'who') {
    content = `نحن كيرنال منصة تقنية لتقديم العروض والشروحات والأفكار التقنية. تم تخصيص هذه المنصة للأغراض التعليمية وإنشاء تعاونات قوية مع عدة أساتذة ودكاترة في الجامعات ومدراء شركات. ويتم من خلالنا عرض دورات تقنية لجميع المجالات التقنية.`;
  } else if (type === 'what') {
    content = `نُقدم كورسات تعليمية تقنية في عدة مجالات مثل:
    <br>💡 بايثون
    <br>💡 الأمن السيبراني (مقدمة)
    <br>💡 BTEC IT
    <br>💡 C++
    <br>💡 الذكاء الاصطناعي
    <br>💡 تحليل البيانات`;
  } else if (type === 'goal') {
    content = `🎯 تقديم أفضل تجربة لطلاب الأردن التقنيين.
    <br>🎯 تقديم المعرفة بأسعار رمزية.
    <br>🎯 الحصول على اعتمادات جامعية ومن الشركات.`;
  }

  contentArea.innerHTML = content;
  contentArea.style.display = 'block';
}

function openPopup() {
  window.open("popup.html", "_blank", "width=600,height=500");
}
