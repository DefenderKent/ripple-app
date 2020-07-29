import Vue from "vue";
import App from "./App.vue";

import Ripple from "./components/Ripple.vue";
import RippleColor from "./components/color";

Vue.config.productionTip = false;

Vue.component("ripple", Ripple);
Vue.directive("colored", RippleColor);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
