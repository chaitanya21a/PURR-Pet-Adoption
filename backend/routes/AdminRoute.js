const express = require('express');
const auth = require('../middleware/auth');
const { adminList, adminUpdate } = require('../Controller/AdminController');
const { admin } = require('../middleware/roles');
const router = express.Router();

// List all forms
router.get('/requests', auth, admin, adminList);

// Approve/Reject
router.put('/requests/:id', auth, admin, adminUpdate);

module.exports = router;
