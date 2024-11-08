import express from 'express';
import { createUser, getUsers } from '../controller/userController.js';

const router=express.Router();

router.route('/user/register')
.post(createUser)
router.route('/user')
.get(getUsers)
export {router}