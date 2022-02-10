import { content as ruContent } from "./content/RU";
import { content as enContent } from "./content/EN";

const localizationMap = {
  'en': enContent,
  'ru': ruContent,
};

export default localizationMap;

export const DEFAULT_LOCALE = 'en';
