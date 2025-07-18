const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./Routes/auth');
const petRoute = require('./Routes/PetRoute');
const formRoute = require('./Routes/AdoptFormRoute');
const adminRoute = require('./Routes/AdminRoute');

const app = express();
app.use(express.json());
app.use(cors());

// Static folder for uploaded images (if any)
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/api/auth', authRoute);
app.use('/api/pets', petRoute);
app.use('/api/forms', formRoute);
app.use('/api/admin', adminRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
