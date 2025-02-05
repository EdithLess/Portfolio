import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.sendFile("index.html");
});

export default router;
