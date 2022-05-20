import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import fontawesome from "./components/plugins/fontawesome";

import store from "./store";

const app = createApp(App).use(store).use(router);

fontawesome(app);

app.mount("#app");
