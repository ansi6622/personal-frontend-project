require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: true,
    pool: {
      min: 1,
      max: 1
    }
  }
};
