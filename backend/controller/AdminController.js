const AdoptForm = require('../Model/AdoptFormModel');
const Pet = require('../Model/PetModel');

// List all adoption requests
exports.adminList = async (req, res) => {
  try {
    const forms = await AdoptForm.find()
      .populate('user', 'username')
      .populate('pet', 'name species');
    res.json(forms);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Approve or reject a request
exports.adminUpdate = async (req, res) => {
  const { status } = req.body; // 'approved' or 'rejected'
  try {
    const form = await AdoptForm.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (status === 'approved') {
      await Pet.findByIdAndUpdate(form.pet, { status: 'adopted' });
    }
    res.json(form);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
