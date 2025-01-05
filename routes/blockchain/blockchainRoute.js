import { Router } from "express";
import { getAccounts } from "../../controllers/blockchain/account/getAccounts";
import { getAccountSummary } from "../../controllers/blockchain/account/getAccountSummary";

const router = Router();

router.get("/accounts", getAccounts);
router.get("/account-summary", getAccountSummary);

export default router;
