const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  userAvatarValid,
  parameterIdValid,
  userValid,
} = require('../middlewares/validationJoi');

const {
  getUsers,
  getUserId,
  updateUserInfo,
  updateAvatar,
  getUserMe,
  getUsers,
} = require('../controllers/users');

router.get('/me', auth, getUserMe);
router.get('/', auth, getUsers);
router.get('/:userId', auth, parameterIdValid('userId'), getUserId);
router.patch('/me', auth, userValid, updateUserInfo);
router.patch('/me/avatar', userAvatarValid, updateAvatar);

module.exports = router;
