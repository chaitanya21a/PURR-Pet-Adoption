const express = require('express');
const auth = require('../middleware/auth');
const { submitForm, getMyForms } = require('../Controller/AdoptFormController');
const router = express.Router();

// Submit form
router.post('/', auth, submitForm);

// Get my requests
router.get('/mine', auth, getMyForms);

module.exports = router;
