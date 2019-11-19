<template>
    <div class="dog-list">
        <ul>
            <li v-for="dog in dogs" :key="dog.id">
                <DogCard 
                    :dog="dog"
                    @selectDog="selectDog"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import DogCard from "@/components/DogCard"
export default {
    components: {
        DogCard,
    },
    props: {
        dogs: Array,
    },
    methods: {
        selectDog(dog) {
            this.$emit("selectDog", dog)
        }
    }
}
</script>

<style lang="scss">
.dog-list {
    ul {
        display: flex;
        flex-flow: wrap;
    }
}
</style>