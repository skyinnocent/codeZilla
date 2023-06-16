import { Router } from "express";
const router = Router();

/**import all controllers */

import * as controller from "../controller/appController.js";
/**Post Methods */
router.route("/register").post(controller.register);
// router.route("/registerMail").post();
router.route("/authenticate").post((req, res) => res.end());
router.route("/login").post(controller.login);

/**Get Methods */
router.route("/user/:username").get(controller.getUser);
router.route("/user/:generateOTP").get(controller.generateOTP);
router.route("/user/:verifyOTP").get(controller.verifyOTP);
router.route("/user/:createResetSession").get(controller.createResetSession);

/**Update Methods */
router.route("/updateuser").put(controller.updateUser);
router.route("/resetPassword").put(controller.resetPassword);

/**Delete Methods */

export default router;
