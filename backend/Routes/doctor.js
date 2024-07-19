import express from "express";
import { updateDoctor, deleteDoctor,getAllDoctor,getSingleDoctor, getDoctorProfile } from "../Controllers/doctorController";

import { authenticate, restrict } from "../auth/verifyToken";
import reviewRouter from "./review";

const router = express.Router();

// nested route
router.use("/:doctorID/reviews",reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/",getAllDoctor);
router.put("/:id", authenticate, restrict(['doctor']),updateDoctor);
router.delete("/:id", authenticate, restrict(['doctor']), deleteDoctor);

router.get("/profile/me", authenticate, restrict(['doctor']), getDoctorProfile);

export default router;