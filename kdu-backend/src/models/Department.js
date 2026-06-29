import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  description: {
    type: String,
    maxlength: 1000
  },
  head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  },
  faculty: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  }],
  programs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program'
  }],
  researchAreas: [String],
  contactEmail: String,
  contactPhone: String,
  officeLocation: String,
  metaData: {
    established: String,
    vision: String,
    mission: String,
    achievements: [String]
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Department', departmentSchema);