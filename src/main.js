import { createApp } from "vue";
import App from "./App.vue";
import './index.css'
import fontawesome from "./components/plugins/fontawesome";

import store from "./store";

const app = createApp(App)
    .use(store)

fontawesome(app);

app.mount('#app');