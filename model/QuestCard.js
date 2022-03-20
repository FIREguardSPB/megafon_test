import mongoose from 'mongoose';

const QuestCard = new mongoose.Schema({
  title: {type: String, required: true},
  rate: {type: Number, required: true, default: 0}
})
export default mongoose.model('QuestCard', QuestCard)