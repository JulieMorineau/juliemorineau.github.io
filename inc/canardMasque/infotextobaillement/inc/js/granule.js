var imgClic = (function() {
    const self = {};
    self.autoEvent = function () {
        var imgs = document.querySelectorAll("img.zoom");
        for (var i = 0; i < imgs.length; i++) {
            self.ImgRemoveAddEventLister(imgs[i]);
        }
    };
    self.ImgRemoveAddEventLister = function (img) {
        img.removeEventListener("click", self.handler);
        img.addEventListener("click", self.handler);
    };
    self.closeRemoveAddEventLister = function (btClose) {
        btClose.removeEventListener("click", self.handlerClose);
        btClose.addEventListener("click", self.handlerClose);
    };
    self.handler = function (event) {
        self.openModal(event);
    };
    self.handlerClose = function () {
        self.closeModal();
    };
    self.openModal = function (event) {
        var src = event.target && event.target.src ? event.target.src : null;
        var hasEnoughWidth = (event.target && event.target.clientWidth && event.target.clientWidth > 100);
        var parentNodeName = event.target
        && event.target.parentElement
        && event.target.parentElement.nodeName ? event.target.parentElement.nodeName : null;

        if (parentNodeName == 'A' || !src || src.match('/z.gif') || false == hasEnoughWidth) {
            return;
        }
        var el = document.getElementById('img-in-modal');
        if (el && el.length) {
            self.closeModal();
        }
        self.createModal(src);
    };
    self.createModal = function (src) {
        var modal = document.createElement('div');
        modal.id = 'img-in-modal';
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.right = 0;
        modal.style.bottom = 0;
        modal.style.backgroundColor = "#3e1741";
        modal.style.backgroundImage = "url('" + src + "')";
        modal.style.backgroundSize = "contain";
        modal.style.backgroundPosition = "center center";
        modal.style.backgroundRepeat = "no-repeat";
        modal.style.zIndex = "100000";

        var close = document.createElement('span');
        close.innerHTML = "X";
        close.style.position = 'absolute';
        close.style.top = '20px';
        close.style.right = '20px';
        close.style.fontSize = '17pt';
        close.style.color = '#fff';
        close.style.cursor = 'pointer';
        close.style.width = '30px';
        close.style.height = '30px';
        close.style.textAlign = 'center';
        close.style.backgroundColor = '#000';
        close.style.borderRadius = '20px';

        self.closeRemoveAddEventLister(close);
        modal.appendChild(close);
        document.getElementsByTagName('body')[0].appendChild(modal);
    };
    self.closeModal = function () {
        document.getElementById('img-in-modal').remove();
    };
    return self;
})();

imgClic.autoEvent();
