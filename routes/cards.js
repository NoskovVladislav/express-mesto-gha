const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  createCardValid,
  parameterIdValid,
} = require('../middlewares/validationJoi');
const {
  getCard,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard,
} = require('../controllers/cards');

router.get('/', auth, getCard);
router.post('/', auth, createCardValid, createCard);
router.put('/:cardId/likes', auth, parameterIdValid('cardId'), likeCard);
router.delete('/:cardId', auth, parameterIdValid('cardId'), deleteCard);
router.delete('/:cardId/likes', auth, parameterIdValid('cardId'), dislikeCard);

module.exports = router;
