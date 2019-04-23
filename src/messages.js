/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  startProjectHeader: {
    id: 'boilerplate.containers.HomePage.title.header',
    defaultMessage: 'Akarata',
  },
  startProjectMessage: {
    id: 'boilerplate.containers.HomePage.desc.message',
    defaultMessage: 'Pustaka JavaScript untuk mengambil kata dasar dari kata berimbuhan pada bahasa Indonesia.',
  },
  cobaSayaHeader: {
    id: 'boilerplate.containers.HomePage.coba.header',
    defaultMessage: 'Coba saya!',
  },
  cobaSayaMessage: {
    id: 'boilerplate.containers.HomePage.demo.message',
    defaultMessage: 'Demo',
  },
  stemmingTitle: {
    id: 'boilerplate.containers.HomePage.stemming.title',
    defaultMessage: 'Stemming',
  },
  stemmingDesc: {
    id: 'boilerplate.containers.HomePage.stemming.desc',
    defaultMessage: 'Stemming adalah proses mengubah kata berimbuhan menjadi kata dasar. Contohnya:',
  },
  contohPertama: {
    id: 'boilerplate.containers.HomePage.contoh.pertama',
    defaultMessage: 'Penyakit => sakit',
  },
  contohKedua: {
    id: 'boilerplate.containers.HomePage.contoh.kedua',
    defaultMessage: 'Belajar => ajar',
  },
});
