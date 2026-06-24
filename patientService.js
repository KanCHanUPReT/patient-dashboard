import { patients } from "./patients";

export const getPatients = () => patients;

export const getPatientById = (id) =>
  patients.find((p) => p.id === id);

export const searchPatients = (query) =>
  patients.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

export const getStats = () => {
  const active = patients.filter(p => p.status === "active").length;

  return {
    total: patients.length,
    active
  };
};