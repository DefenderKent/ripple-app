import Vue from "vue";
import App from "./App.vue";

import Repple from "./components/Repple.vue";
import ReppleColor from "./components/color";

Vue.config.productionTip = false;

Vue.component("ripple", Repple);
Vue.directive("colored", ReppleColor);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
