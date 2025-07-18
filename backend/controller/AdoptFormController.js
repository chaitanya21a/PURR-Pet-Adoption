const AdoptForm = require('../Model/AdoptFormModel');

// Submit adoption form
exports.submitForm = async (req, res) => {
  const { pet, message } = req.body;
  try {
    const form = await new AdoptForm({
      user: req.user.id,
      pet,
      message,
    }).save();
    res.json(form);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get current user’s forms
exports.getMyForms = async (req, res) => {
  try {
    const forms = await AdoptForm.find({ user: req.user.id })
      .populate('pet', 'name species')
      .sort('-createdAt');
    res.json(forms);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
