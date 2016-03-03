require('dotenv').load();
process.env.DATABASE_URL || require('./.env')

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: true,
    pool: {
      min: 1,
      max: 1
    }
  }
};
