const Koa = require('koa');

let app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

// ���������������˿�
app.listen(5000, () => {
  console.log('�������Ѿ�����');
});
