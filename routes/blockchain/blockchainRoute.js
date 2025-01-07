import { Router } from "express";
import { getAccounts } from "../../controllers/blockchain/account/getAccounts";
import { getAccountSummary } from "../../controllers/blockchain/account/getAccountSummary";
import { getRegularAccount } from "../../controllers/blockchain/account/getAccount";
import { getWallets } from "../../controllers/blockchain/account/getWallets";
import { getPortfolios } from "../../controllers/blockchain/account/getPortfolios";
import { getTransactions } from "../../controllers/blockchain/account/getTransactions";
import { getBlocks } from "../../controllers/blockchain/block/getBlocks";

const router = Router();

// Account routes
router.get("/accounts", getAccounts);
router.get("/account-summary", getAccountSummary);
router.get("/accounts/:address", getRegularAccount);
router.get("/account/wallets/:address", getWallets);
router.get("/account/portfolios/:address", getPortfolios);
router.get("/account/transactions/:address", getTransactions);

// Block routes
router.get("/blocks", getBlocks);

export default router;
