export default () => ({
  app: {
    name: 'MingxiangLuo',
    isDev: process.env.NODE_ENV == 'development',
  },
  database: {
    url: 'localhost',
  },
  jwt: {
    tokenSecret:"secretKey"
  }
});
