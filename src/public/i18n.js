import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import zh from './i18n/zh';
import en from './i18n/en';
import {initReactI18next} from 'react-i18next'


i18n.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources:{
        zh:{
            translation:zh
        },
        en:{
            translation:en
        }
    },
    lng: 'zh',
    fallbackLng: "zh",
    debug: false,
    //useSuspense: false,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    react: { 
        useSuspense: false //   <---- this will do the magic
    }
})

export default i18n;

