import Vue from "vue"
import VueMeta from "vue-meta"

import initConfig from "@/config"
import initRouter from "@/router"
import initStore from "@/store"
import "@/registerServiceWorker"
import App from "@/App.vue"

const cnfg = initConfig()

Vue.config.productionTip = false
Vue.prototype.$config = cnfg

Vue.use(VueMeta)

new Vue({
    router: initRouter(cnfg),
    store: initStore(),
    render: (h) => h(App),
}).$mount("#app")
