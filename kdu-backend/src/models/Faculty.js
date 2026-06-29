import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  title: {
    type: String,
    enum: ['Prof.', 'Dr.', 'Assoc. Prof.', 'Asst. Prof.', 'Lecturer', 'Instructor'],
    default: 'Dr.'
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  biography: {
    type: String,
    maxlength: 5000
  },
  teachingPhilosophy: {
    type: String,
    maxlength: 2000
  },
  education: [{
    degree: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    field: String
  }],
  researchInterests: [String],
  specializations: [String],
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  publications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publication'
  }],
  office: {
    building: String,
    room: String,
    hours: String
  },
  contactInfo: {
    phone: String,
    email: {
      type: String,
      lowercase: true
    },
    website: String
  },
  socialMedia: {
    linkedin: String,
    googleScholar: String,
    researchGate: String,
    twitter: String
  },
  achievements: [String],
  profileImage: String,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create indexes for search
facultySchema.index({ 'department': 1, 'isActive': 1 });
facultySchema.index({ 'researchInterests': 1 });
facultySchema.index({ 'biography': 'text', 'title': 'text' });

export default mongoose.model('Faculty', facultySchema);