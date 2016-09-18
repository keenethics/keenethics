module.exports = {
  servers: {
    keenethics: {
      host: '107.170.121.178',
      username: 'root',
      password: '-----',
    },
  },

  meteor: {
    name: 'keenethics',
    path: '.',

    servers: {
      keenethics: {},
    },

    env: {
      PORT: 8000,
      ROOT_URL: 'http://keenethics.com/',
      MONGO_URL: 'mongodb://127.0.0.1:27017/keenethics',
    },

    deployCheckWait: 60,
  },

  mongo: {
    port: 27017,
    servers: {
      keenethics: {},
    },
  },
};
