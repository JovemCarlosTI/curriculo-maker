import Database from 'sqlite-async';
import { resolve } from 'path';

const dbFile = resolve(process.cwd(), 'server', 'database', 'db.sqlite');
console.log(dbFile)

async function connect() {
  return await Database.open(dbFile);
}

export default { connect };