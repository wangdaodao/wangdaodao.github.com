/* Kill IE6 */

;(function() {
    var killie6 = document.createElement('div');
    killie6.id = 'killie6';
    killie6.innerHTML = '<div class="killie6r4"></div><div class="killie6r2"></div><div class="killie6r1"></div><div class="killie6r1"></div><div class="killie6c"><span class="killie6pic"></span><p class="killie6text">您正在使用 Internet Explorer 6 上网。如果您 <strong>升级到 Internet Explorer 8</strong> 或 <strong>转换到另一款浏览器</strong>，将会得到更好的浏览体验。</p><p class="killie6browsers"><a rel="nofollow" class="killie6ie8" href="http://windows.microsoft.com/zh-CN/internet-explorer/products/ie/home">IE 8</a><a rel="nofollow" class="killie6chrome" href="http://www.google.cn/chrome/">Chrome</a><a rel="nofollow" class="killie6firefox" href="http://firefox.com.cn/">Firefox</a><a rel="nofollow" class="killie6opera" href="http://www.opera.com/browser/">Opera</a></p></div><div class="killie6r1"></div><div class="killie6r1"></div><div class="killie6r2"></div><div class="killie6r4"></div>';
    document.body.appendChild(killie6);
    var scrolling,
        relocateY,
        distanceY,
        currentY,
        startY = killie6.offsetTop;
    var refloat = function() {
        currentY = killie6.offsetTop;
        distanceY = relocateY - currentY;
        switch(true) {
            case (distanceY > 0):
                killie6.style.top = currentY + Math.ceil(distanceY / 10) + 'px';
                scrolling = setTimeout(refloat, 16);
                break;
            case (distanceY < 0):
                killie6.style.top = currentY + Math.floor(distanceY / 10) + 'px';
                scrolling = setTimeout(refloat, 16);
                break;
            default:
                return;
        };
    };
    var relocate = function() {
        relocateY = document.documentElement.scrollTop + startY;
        clearTimeout(scrolling);
        scrolling = setTimeout(refloat, 16);
    };
    window.attachEvent('onscroll', relocate);
})();