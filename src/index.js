const im = document.createElement('script');
im.type = 'importmap';
im.textContent = JSON.stringify({
    imports: {
        'vue':"/lib/vue.js",
        'vue-router':"/lib/vue-router.js",
        'axios':"/lib/axios.js",
        'js-cookie':"/lib/js.cookie.js",
        "element-plus":"/lib/element-plus.js"
    }
});
document.currentScript.after(im);