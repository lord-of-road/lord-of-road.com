import Vue from "vue"
import Router from "vue-router"

import { IConfig } from "@/config"

export default (config: IConfig) => {
    Vue.use(Router)

    return new Router({
        mode: "history",
        base: process.env.BASE_URL,
        routes: [
            {
                path: "/",
                name: "main",
                component: async () => import("@/router/views/Main.vue"),
            },
            {
                path: "*",
                name: "not-found",
                component: async () => import("@/router/views/NotFound.vue"),
            },
        ],
    })
}
