const app = require('./app');

//! handling uncaught exceptional error
process.on('uncaughtException', (err: { message: string }) => {
  console.log(`Error:${err.message}`);
  console.log('shutting down server due to uncaught exceptional error');
});

//todo: listen to port
console.log('server working fine');
//@ts-ignore
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

//! handling unhandled promise rejections
process.on('unhandledRejection', (err: { message: string }) => {
  console.log(`Error:${err.message}`);
  console.log('shutting down server due to unhandled promise rejection');
});
