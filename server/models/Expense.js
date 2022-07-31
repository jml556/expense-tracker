const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  title: String,
  amount: Number,
  date: Date,
  category: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

expenseSchema.set('toJSON', {
  transform: (doc, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj.__v;
    delete returnedObj._id;
  },
});

const Expense = mongoose.model('expense', expenseSchema);

module.exports = Expense;