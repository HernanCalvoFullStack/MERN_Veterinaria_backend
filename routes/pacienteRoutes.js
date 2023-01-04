import express from "express";
const router = express.Router();
import {
  agregarPacientes,
  obtenerPacientes,
  obtenerPaciente,
  actualizarPaciente,
  eliminarPaciente,
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

router.get("/", checkAuth, obtenerPacientes);
router.post("/", checkAuth, agregarPacientes);

router.get("/:id", checkAuth, obtenerPaciente);
router.put("/:id", checkAuth, actualizarPaciente);
router.delete("/:id", checkAuth, eliminarPaciente);

export default router;
