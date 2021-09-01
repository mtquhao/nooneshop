<template>
    <div style="margin:0 auto;width: 1100px;">
        <List></List>
        <ClassifyGoods></ClassifyGoods>
    </div>
</template>

<script>
    import List from "./list";
    import ClassifyGoods from "./ClassifyGoods";
    export default {
        name: "index",
        components: {ClassifyGoods, List}
    }
</script>

<style scoped>

</style>
