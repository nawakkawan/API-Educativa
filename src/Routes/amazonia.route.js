import { Router } from 'express';
import { getamazonia } from '../Controller/amazonia.controller.js';

const router = Router();

router.get('/', getamazonia);

export default router;
