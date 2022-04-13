import mongoose from "mongoose";

const appSchema = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  dateOfBirth: {
    day: String,
    month: String,
    year: String
  },
  gender: String,
  nationality: String,
  location: String,
  countryCode: String,
  mobileNo: String,
  createdAt: String
}

const appSignUp = 
  mongoose.model('appSignUp', appSchema);

  export default appSignUp;
