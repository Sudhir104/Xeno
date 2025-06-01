import express from 'express';
import { isAuthenticated } from '../../middlewares/auth.middleware';
import { handleError } from '../../utils/response';
import { createCampaign } from '../controllers/campaign.controller';
// routes
const router = express.Router();

router.route("/create").post(
    isAuthenticated,
    handleError(createCampaign)
)

export default router;