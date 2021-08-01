const mongoose =  require('mongoose');

const GroupSchema = new mongoose.Schema({
name:{
    type: String,
    required: [true, 'Please add a group name'],
    unique: true,
    trim: true,
    maxlenght: [20, 'Name cannot be more than 20 characters']
},

isSearchAble: {
    type: Boolean,
    default: true,
  },
periodicAmount: Number,

description:{
    type: String,
    required: [true, 'Please add a description'],
    maxlenght: [500, 'Name cannot be more than 20 characters']
},

maxCapacity:Number,

createdAt: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('Group', GroupSchema);

