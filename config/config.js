const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET || "YOUR_secret_key",
  DB_URL: process.env.MONGODB_URI || 'mongodb://mern:mern123@ds263571.mlab.com:63571/mern',
  LOGIN_TYPE: {
       DEFAULT: 0,
       GOOGLE: 1,
       FACEBOOK: 2
  },
  VERIFY: {
      DEFAULT: false,
      VERIFIED: true
  },
  EMAIL: {
     OWNER : "sunnysavita18@gmail.com"
  }
}

export default config
