const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: String,
  hashedPassword: {
    type: String,
    required: true,
  },
  expenses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Expense',
    },
  ],
});

userSchema.set('toJSON', {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj.__v;
    delete returnedObj._id;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;