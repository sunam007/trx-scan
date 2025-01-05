import { Router } from "express";
import { getAccounts } from "../../controllers/blockchain/account/getAccounts";

const router = Router();

router.get("/accounts", getAccounts);

export default router;
