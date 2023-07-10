import express from 'express';
import ctrl from '../controllers/users'

/* Creating a new router object. */
const router = express.Router();

router.route('/users').get(ctrl.userList)

export default router