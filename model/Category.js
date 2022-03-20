import mongoose from 'mongoose';

const Category = new mongoose.Schema({
  title: {type: String, required: true},
  // title: {type: String, required: true},
  // content: {type: String, required: true},
  // picture: {type: String}
  quests: {type: Array, ref: 'QuestCard', default: []}
})
export default mongoose.model('Category', Category)