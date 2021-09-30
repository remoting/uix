const Koa = require('koa');
const static = require('koa-static')
const compress = require('koa-compress')
const pages = require("./routers/pages.js");
const app = new Koa();

app.use(compress({ threshold: 2048 }));
app.use(static(__dirname + '/static/'));
app.use(static(__dirname + '/../src/'));

// 服务端页面
app.use(pages.routes(), pages.allowedMethods());

app.listen(80, () => {
    console.log(__dirname)
    console.log('server is starting at port 80');
})