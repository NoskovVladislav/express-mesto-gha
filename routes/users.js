const router = require('express').Router();
const {
  getUser,
  getUserId,
  createUser,
  updateUserInfo,
  updateAvatar,
} = require('../controllers/users');

router.get('/', getUser);
router.get('/:userId', getUserId);
router.post('/', createUser);
router.patch('/me', updateUserInfo);
router.patch('/me/avatar', updateAvatar);

module.exports = router;
