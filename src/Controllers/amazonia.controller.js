import { readFileSync } from 'fs';

const db = JSON.parse(readFileSync(new URL('../data/db.json', import.meta.url)));

export const getamazonia = (req, res) => {
  res.json(db.amazonia);
};

