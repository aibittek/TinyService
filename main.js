const Koa = require('koa');

let app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

// 监听服务器启动端口
app.listen(5000, () => {
  console.log('服务器已经启动');
});
