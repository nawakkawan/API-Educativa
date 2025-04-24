import { Router } from 'express';
import { getdicas } from '../Controller/dicas.controller.js';

const router = Router();

router.get('/', getdicas);

export default router;
