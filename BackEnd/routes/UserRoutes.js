const express = require('express');
const {PutUser, DeleteUser, GetUser, GetAllUser, ChangeProfile } = require('../controllers/UserControllers');
const router = express.Router()
const { VerifyToken } = require('../middleware/Verify-Token');
const { RefreshToken } = require('../middleware/Refresh-Token');
const { PostUser } = require('../controllers/User-Authorization');
const { Upload } = require('../config/Database');
router.post('/user/signup',Upload, PostUser)
.get('/user', GetUser).get('/user/Alluser', GetAllUser).put('/user/:id', PutUser).put('/user/Profile/:id',Upload ,PutUser).delete('/user/:id', DeleteUser)
// .get('/refresh/user',RefreshToken, VerifyToken, GetUser).get('/refresh/user/Alluser',RefreshToken, VerifyToken, GetAllUser).put('/refresh/user/:id',RefreshToken,VerifyToken, PutUser).delete('/refresh/user/:id',RefreshToken,VerifyToken, DeleteUser)
module.exports = router;