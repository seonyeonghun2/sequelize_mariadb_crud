import User from "../models/User.js"
/**
 * 사용자 등록
 * POST /users
 */

const addUser = async (req, res) => {
  try {
    const { name, age, married } = req.body;
    const user = await User.create({
        name,
        age,
        married
    })
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

export default { addUser }