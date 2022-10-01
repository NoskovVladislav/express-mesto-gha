const router = require('express').Router();
const {
  getCard,
  createCard,
  likeCard,
  dislikeCard,
  deleteCard,
} = require('../controllers/cards');

router.get('/', getCard);
router.post('/', createCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId', deleteCard);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
