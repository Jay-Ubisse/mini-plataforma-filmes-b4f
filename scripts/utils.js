// Funções utilitárias
import { films } from "../data/db.js";

localStorage.setItem("films", JSON.stringify(films));

export const db = localStorage.getItem("films");
