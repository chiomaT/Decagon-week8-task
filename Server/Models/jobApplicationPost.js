import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  location: String,
  phoneNumber: String,
  uploadCv: String
});

const createJobs = mongoose.model('createJobs', postSchema);

export default createJobs;