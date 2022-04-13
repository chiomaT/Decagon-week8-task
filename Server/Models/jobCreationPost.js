import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  jobTitle: String,
  companyName: String,
  location: String,
  employmentType: String,
  salary: String,
  submissionDeadline: String,
  phoneNumber: String,
  sector: String,
  description: String
});

const postJobs = mongoose.model('PostJobs',postSchema);

export default postJobs;