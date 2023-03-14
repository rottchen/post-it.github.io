<template>
    <a class="btn-nueva" @click="crear()">Nueva</a>
</template>

<script>
export default {
    name: 'Btn-Create-Note',
    methods: {
        crear() {
            this.$router.push("/crear")
        }
    },
}
</script>

<style>
.btn-nueva {
    background-image: url(../assets/mas.png);
    background-position: center center;
    background-size: 30px;
    background-repeat: no-repeat;
    background-color: var(--color-primary);;
    width: 55px;
    height: 55px;
    padding: 20px;
    border-radius: 100%;
    position: fixed;
    bottom: 15px;
    right: 15px;
    text-indent: 40px;
    overflow: hidden;
    cursor: pointer;
}
</style>