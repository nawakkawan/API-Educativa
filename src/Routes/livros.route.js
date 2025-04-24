import { Router } from 'express';
import { getlivros } from '../Controller/livros.controller.js';

const router = Router();

router.get('/', getlivros);

export default router;
