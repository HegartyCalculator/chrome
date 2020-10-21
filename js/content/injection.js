var libs = 'js/content/libs'
var toInject = [libs + '/algebra-0.2.6.min.js', libs + '/latex-to-js.js', libs + '/math.min.js', libs + '/equations.js', 'js/content/content.js', "js/content/dark-mode.js"]
// ENSURE ALL ARE PERMITTED IN MANIFEST

toInject.forEach((script, i) => {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL(script);
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
    i++;
})