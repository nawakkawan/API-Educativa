import { readFileSync } from 'fs';

const db = JSON.parse(readFileSync(new URL('../data/db.json', import.meta.url)));

export const getlivros = (req, res) => {
  res.json(db.livros);
};
