const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const { postPetRequest, approveRequest, deletePost, allPets } = require('../Controller/PetController');

const upload = multer({ storage });

router.get('/requests', (req, res) => allPets('Pending', req, res));
router.get('/approvedPets', (req, res) => allPets('Approved', req, res));
router.get('/adoptedPets', (req, res) => allPets('Adopted', req, res));
router.post('/services', upload.single('picture'), postPetRequest);
router.put('/approving/:id', approveRequest);
router.delete('/delete/:id', deletePost);

module.exports = router;
