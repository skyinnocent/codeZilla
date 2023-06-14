import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { profileValidation } from "../helpers/validate";
import convertToBase64 from "../helpers/convert";
import extend from "./../styles/Profile.module.css";
import styles from "../styles/UserName.module.css";
import { useState } from "react";

export default function Profile() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={`${styles.glass} ${extend.glass}`}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Welocme Update your Details
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={`${styles.profile_img} ${extend.profile_img}`}
                  alt="avatar"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("firstname")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="first name"
                />
                <input
                  {...formik.getFieldProps("lastname")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="last name"
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("mobile")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="mobile no."
                />
                <input
                  {...formik.getFieldProps("email")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="email"
                />
              </div>
              <input
                {...formik.getFieldProps("address")}
                className={`${styles.textbox} ${extend.textbox}`}
                type="text"
                placeholder="address"
              />
              <button className={styles.btn} type="submit">
                update
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Comeback Later
                <Link className="text-red-500" to="/">
                  Log Out
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
