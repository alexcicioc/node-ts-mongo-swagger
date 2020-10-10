import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  title: String,
  items: Array,
  status: String,
});

export default mongoose.model('Menu', menuSchema);
