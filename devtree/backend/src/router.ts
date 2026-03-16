import { Router } from "express";

const router = Router();

/* Auth & Register */

router.post("/login", (req, res) => {
  res.send("LOGIN");
});

router.post("/register", (req, res) => {
  res.send("REGISTER");
});

export default router;
