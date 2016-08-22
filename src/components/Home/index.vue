<template>
    <Sidebar :index-img="indexImg"></Sidebar>
    data : {{ data | json }}
</template>

<script>
    import Sidebar from './sidebar.vue'
    import { getDemosData } from '../../vuex/getters'
    import { getDemo } from '../../vuex/actions'

    export default {
        components: {
            Sidebar
        },
        vuex: {
            getters: {
                data: getDemosData
            },
            actions: {
                getDemo
            }
        },
        created() {
            this.getDemo()
        },
        methods: {

        }
    }
</script>