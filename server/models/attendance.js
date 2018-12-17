import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
      date:{
        type: Date,
        default: Date.now
      },
      presence:{
           type: Boolean,
           default: false
      },
      students_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students'
      }
});
export default mongoose.model('attendance', AttendanceSchema);
