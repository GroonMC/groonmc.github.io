// 当页面加载完成后，延迟5秒后隐藏加载动画
window.addEventListener('load', function() {
  var loader = document.querySelector('.loader');
  setTimeout(function() {
    loader.style.display = 'none';
  }, 5000); // 5秒钟的延迟
});
