const im = document.createElement('script');
im.type = 'importmap';
im.textContent = JSON.stringify({
    imports: {
    'vue':"https://cdn.jsdelivr.net/npm/vue@next/dist/vue.esm-browser.js",
    'vue-router':"https://cdn.jsdelivr.net/npm/vue-router@next/dist/esm-browser.js"
    }
});
document.currentScript.after(im);


import * as vue from "vue";
console.log(vue)