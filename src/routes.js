/**
 * Created by kevin on 16/7/22.
 */

export default function(router) {

    router.map({
        '/': {
            name: 'home',
            component: require('./components/Home/index.vue')
        },
        '/problems': {
            name: 'problems',
            component: require('./components/Problem/problem-list.vue')
        },
        '/sub': {
            name: 'sub',
            component: {
                template: '<div class="foo">' +
                '<h2>This is Foo!</h2>' +
                '<router-view></router-view>' + // <- 嵌套的外链
                '</div>'
            },
            subRoutes: {
                '/': {
                    component: {
                        template: '<p>Default sub view for Foo</p>'
                    }
                },
                '/foo': {
                    component: {
                        template: '<p>This is subRoute foo</p>'
                    }
                }
            }
        },
        '/user/:username/': {
            name: 'path',
            component: {
                template: '<p>用户名是{{$route.params.username}}</p>'
            }
        },

        // not found handler
        '*': {
            component: require('./components/NotFound.vue')
        },
    })
}