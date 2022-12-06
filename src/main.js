import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// primevue part
import PrimeVue from "primevue/config";
import "/node_modules/primeflex/primeflex.css"; // PrimeFlex
import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import Dialog from "primevue/dialog";

import Menubar from "primevue/menubar"; // menubar

const app = createApp(App);

app.use(PrimeVue);
app.component("Menubar", Menubar);
app.component("Dialog", Dialog);

app.use(store).use(router).mount("#app");
