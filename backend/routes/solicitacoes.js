const express = require('express');
const solicitacoesController = require('../controllers/solicitacoes');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', auth, solicitacoesController.fetchAll);

router.post(
  '/insert',
    solicitacoesController.insert
);

router.delete('/:id', auth, solicitacoesController.deletePost);

module.exports = router;
