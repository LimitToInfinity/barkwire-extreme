<template>
    <div @click="selectDog" class="dog-card">
        <h3>{{dog.name}}</h3>
        <img :src="dog.imageUrl" :alt="dog.name" />
    </div>
</template>

<script>
export default {
    props: {
        dog: Object,
    },
    methods: {
        selectDog() {
            this.$emit("selectDog", this.dog)
        }
    }
}
</script>

<style lang="scss">
.dog-card {
    margin: 0 5rem;

    img {
        max-width: 20rem;
    }
}
</style>