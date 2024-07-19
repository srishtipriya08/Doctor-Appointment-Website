import express from "expresss";
import { getAllReviews, createReview } from "../Controllers/reviewController";
import { authenticate, restrict } from "../auth/verifyToken";

const router = express.Router({mergeParams: true});

router.route("/").get(getAllReviews).post(authenticate, restrict(["patient"]), createReview);

export default router;