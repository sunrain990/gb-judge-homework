/**
 * Created by kevin on 16/7/22.
 */
/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './routes'
import filters from './utils/filters'
import App from './components/App.vue'

Vue.use(VueRouter)
Vue.use(VueValidator)
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

const router = new VueRouter({
    history: true,
    saveScrollPosition: true,
    suppressTransitionError: true
})
configRouter(router)
sync(store, router)

router.start(Vue.extend(App), '#root')
window.router = router