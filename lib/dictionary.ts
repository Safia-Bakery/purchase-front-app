import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
  // uz: () => import("@/dictionaries/uz.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

// // Define your dictionaries
// const dictionaries = {
//   ru: async () => import("@/dictionaries/ru.json"), // Adjust the path to your actual JSON file
//   // uz: async () => import("@/dictionaries/uz.json"), // Adjust the path to your actual JSON file
//   // Add other locales as needed
// };

// export const getDictionary = async (locale: Locale) => {
//   if (dictionaries[locale]) {
//     return await dictionaries[locale]();
//   }
// };
