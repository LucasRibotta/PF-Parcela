// Contact.js
const mongoose = require('mongoose');

const contact = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  reason: String,
  message: String,
});

const Contact = mongoose.model('Contact', contact);

module.exports = Contact;
