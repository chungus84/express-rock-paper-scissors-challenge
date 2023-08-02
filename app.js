import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const host = process.env.HOST;

console.log(host);
