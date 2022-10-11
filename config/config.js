require('dotenv').config();
const dev = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:5000/userDemo',
  },
}

module.exports=dev;