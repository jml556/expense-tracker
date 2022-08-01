const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  title: String,
  amount: Number,
  date: String,
  category: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

expenseSchema.set('toJSON', {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj.__v;
    delete returnedObj._id;
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;