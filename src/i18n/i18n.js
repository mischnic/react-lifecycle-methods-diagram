import once from 'lodash.once';
import { getUserLocales } from 'get-user-locale';

export const defaultLocale = 'en-US';

export const languageFiles = {
  'ar-YE': Promise.resolve(require('./json/ar-YE.json')),
  'be-BY': Promise.resolve(require('./json/be-BY.json')),
  'de-DE': Promise.resolve(require('./json/de-DE.json')),
  'es-ES': Promise.resolve(require('./json/es-ES.json')),
  'fa-IR': Promise.resolve(require('./json/fa-IR.json')),
  'fr-FR': Promise.resolve(require('./json/fr-FR.json')),
  'id-ID': Promise.resolve(require('./json/id-ID.json')),
  'it-IT': Promise.resolve(require('./json/it-IT.json')),
  'ja-JP': Promise.resolve(require('./json/ja-JP.json')),
  'ko-KR': Promise.resolve(require('./json/ko-KR.json')),
  'kz-KZ': Promise.resolve(require('./json/kz-KZ.json')),
  'pl-PL': Promise.resolve(require('./json/pl-PL.json')),
  'pt-BR': Promise.resolve(require('./json/pt-BR.json')),
  'ru-RU': Promise.resolve(require('./json/ru-RU.json')),
  'sq-AL': Promise.resolve(require('./json/sq-AL.json')),
  'th-TH': Promise.resolve(require('./json/th-TH.json')),
  'tr-TR': Promise.resolve(require('./json/tr-TR.json')),
  'uk-UA': Promise.resolve(require('./json/uk-UA.json')),
  'vn-VN': Promise.resolve(require('./json/vn-VN.json')),
  'zh-CN': Promise.resolve(require('./json/zh-CN.json')),
  'zh-TW': Promise.resolve(require('./json/zh-TW.json')),
};

export const supportedLocales = [defaultLocale].concat(Object.keys(languageFiles));

/**
 * Extends language codes if necessary. For example, given:
 *   ['en-US', 'pl']
 * will return:
 *   ['en-US', 'pl-PL']
 *
 * @param {String[]} arr
 */
function extendLanguageCodes(arr) {
  return arr.map(el => (
    el.includes('-') ? el : `${el}-${el.toUpperCase()}`
  ));
}

const getExtendedUserLocales = once(() => {
  const userLocales = getUserLocales();
  return extendLanguageCodes(userLocales);
});

/**
 * Finds a locale which both we support and user prefers.
 */
export const getMatchingLocale = once(() => {
  const extendedUserLocales = getExtendedUserLocales();
  const matchingLocale = extendedUserLocales.find(locale => supportedLocales.includes(locale));
  return matchingLocale;
});
