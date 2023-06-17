import { createContext, useContext } from "react";

// Contexte pour les compétences
const CompetencesContext = createContext(null);

// Contexte pour la description
const DescriptionContext = createContext(null);

// Contexte pour les formations professionnelles
const FormationsProContext = createContext(null);

// Contexte pour les formations personnelles
const FormationsPersoContext = createContext(null);

// Custom hook pour accéder au contexte des compétences
const useCompetencesContext = () => useContext(CompetencesContext);

// Custom hook pour accéder au contexte de la description
const useDescriptionContext = () => useContext(DescriptionContext);

// Custom hook pour accéder au contexte des formations professionnelles
const useFormationsProContext = () => useContext(FormationsProContext);

// Custom hook pour accéder au contexte des formations personnelles
const useFormationsPersoContext = () => useContext(FormationsPersoContext);

export {
  CompetencesContext,
  DescriptionContext,
  FormationsProContext,
  FormationsPersoContext,
  useCompetencesContext,
  useDescriptionContext,
  useFormationsProContext,
  useFormationsPersoContext,
};
