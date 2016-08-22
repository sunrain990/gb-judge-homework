<template>
    <div>
        <Display></Display>
        <Increment></Increment>
        <Decrement></Decrement>
    </div>
</template>

<script>
    import Display from './components/counter/Display.vue'
    import Increment from './components/counter/Increment.vue'
    import Decrement from './components/counter/Decrement.vue'
    import store from './vuex/store'

    export default {
        components: {
            Display: Display,
            Increment: Increment,
            Decrement
        },
        store: store
    }
</script>