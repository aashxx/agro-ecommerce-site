import connectToMongo from "../backend/db";
import { Router } from "express";

const router = Router();

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
