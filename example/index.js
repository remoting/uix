const Koa = require('koa');
const static = require('koa-static')

const app = new Koa();

app.use(static(__dirname + '/static/'));
app.use(static(__dirname + '/../src/'));

app.listen(80, () => {
    console.log(__dirname)
    console.log('server is starting at port 80');
})