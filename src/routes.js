/**
 * Created by kevin on 16/7/22.
 */
export default function(router) {
    router.map({
        '/': {
            name: 'home',
            component: require('./components/Home/index.vue')
        }
    })
}