import express from 'express';
import users from './users'
const router = express.Router();

router.use('/web',users);


export default router;