<template>
    <div>
        <Head></Head>
        <div>
            <router-view/>
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
    import Head from "./head";
    import Foot from "./foot";
    export default {
        name: "index",
        components: {Foot, Head}
    }
</script>

<style scoped>

</style>
