import appSignUp from "../Models/jobApplicationSign-up.js";

export const getAppSignUp = async (req, res) => {
  console.log({req})
  try {
    const postSignUpData = await appSignUp.find();

    res.status(200).json(postSignUpData);

  } catch (error) {
    console.error(error.message);
  }
}

export const createSignUpData = async (req, res) => {
  const body = req.body;

  const newPost = appSignUp({...body, createdAt: new Date().toISOString()});
  console.log(newPost);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.log(error.message);
  }
}cl