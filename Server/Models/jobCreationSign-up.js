import mongoose from "mongoose";

const employerSchema = {
  firstName: String,
  lastName: String,
  workEmail: String,
  createPassword: String,
  position: String,
  phoneNumber: String,
}

const employerSignUp = mongoose.model("employerSignUp", employerSchema);

export default employerSignUp;