import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from 'vue-i18n'

import App from "./App.vue";
import router from "./router";
import locales from "./locales";

import "./assets/main.css";

const app = createApp(App);

const i18n = createI18n({
    locale: navigator.languages.join(',').indexOf('zh') > -1 ? 'zh' : 'en',
    fallbackLocale: 'zh',
    messages: locales,
})

app.use(createPinia());
app.use(i18n)
app.use(router);

app.mount("#app");
