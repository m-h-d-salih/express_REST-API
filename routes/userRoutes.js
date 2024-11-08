import express from 'express';
import { createUser, getUser, getUsers, updateUser } from '../controller/userController.js';

const router=express.Router();

router.route('/user/register')
.post(createUser)
router.route('/user')
.get(getUsers)

router.route('/user/:id')
.get(getUser)
.put(updateUser)
export {router}