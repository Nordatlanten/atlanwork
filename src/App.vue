<template>
    <div id="app">
        <AtlanWork />
    </div>
</template>

<script>
    import AtlanWork from './components/atlanwork.vue'

    export default {
        name: 'App',
        components: {
            AtlanWork
        }
    }
</script>

<style>
    /* Normalizing the document (for each component) */
    html,
    body {
        margin: 0;
        padding: 0;
    }

    /* Adding fonts */

    @font-face {
        font-family: Lovelo-Black;
        src: url('../public/fonts/Lovelo/Lovelo-Black.ttf');
    }


    #app {
        font-family: Lovelo-Black;
        /* font-family: Avenir, Helvetica, Arial, sans-serif; */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;

    }
</style>
