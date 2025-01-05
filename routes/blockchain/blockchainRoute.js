import { Router } from "express";

const router = Router();

router.get("/accounts", (req, res) => {
  res.send("All accounts");
});

export default router;
