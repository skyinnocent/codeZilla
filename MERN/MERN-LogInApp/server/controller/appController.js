import bcrypt from "bcrypt";
import UserModel from "../models/User.model.js";
/**POST http://localhost:8000/api/register */
export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;
    // check the existing user
    const existUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, function (err, user) {
        if (err) reject(new Error(err));
        if (user) reject({ error: "Please use unique username" });

        resolve();
      });
    });
    // check for existing email
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, function (err, email) {
        if (err) reject(new Error(err));
        if (email) reject({ error: "Please use unique Email" });

        resolve();
      });
    });
    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || "",
                email,
              });
              // return save result as a response
              user
                .save()
                .then((result) =>
                  res.status(201).send({ msg: "User Register Successfully" })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              return res.status(500).send({
                error: "Enable to hashed password",
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({ error });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}

/**POST http://localhost:8000/api/login */
export async function login(req, res) {
  res.json("login route");
}
/**GET http://localhost:8000/api/user/example123 */
export async function getUser(req, res) {
  res.json("get user");
}
/**PUT http://localhost:8000/api/updateuser */
export async function updateUser(req, res) {
  res.json("updauser route");
}
/**GET http://localhost:8000/api/generateOTP */
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}
/**GET http://localhost:8000/api/verifyOTP */
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}
/**GET http://localhost:8000/api/createResetSession */
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}
/**PUT http://localhost:8000/api/resetPassword */
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
