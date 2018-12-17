import mongoose from 'mongoose'
import config from '../../config/config'

const StudentSchema = new mongoose.Schema({
      name:{
         type: String
      },
      email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Not a valid Email'],
        required: 'Email is required'
      },
      phone:{
         type: Number
      },
      roll_no:{
          type: Number,
          default:0
      },
      branch:{
          type: String
      },
      updated: Date,
      created:{
         type: Date,
         default: Date.now
      }
});

StudentSchema.pre('save', function(next){
      console.log(this);
      next();
})

export default mongoose.model('students', StudentSchema);
