<template>
    <div style="margin:0 auto;width: 1100px;">
        <BuyGood></BuyGood>
        <GoodDetail></GoodDetail>
    </div>
</template>

<script>
    import BuyGood from "./buyGood";
    import GoodDetail from "./goodDetail";
    export default {
        name: "index",
        components: {GoodDetail, BuyGood}
    }
</script>

<style scoped>

</style>
