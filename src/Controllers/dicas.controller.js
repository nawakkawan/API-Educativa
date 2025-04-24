import { readFileSync } from 'fs';

const db = JSON.parse(readFileSync(new URL('../data/db.json', import.meta.url)));

export const getdicas = (req, res) => {
  res.json(db.dicas);
};

