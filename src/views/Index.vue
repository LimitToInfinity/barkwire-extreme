<template>
    <div class="index">
        <p>Welcome to BarkWire</p>
        <FeaturedDog 
            v-if="selectedDog.name"
            :dog="selectedDog"
        />
        <DogList 
            :dogs="dogs"
            @selectDog="selectDog"
        />
    </div>
</template>

<script>
import DogList from "@/components/DogList"
import FeaturedDog from "@/components/FeaturedDog"
export default {
    components: {
        DogList,
        FeaturedDog,
    },
    mounted() { // or created(){}
        this.$store.dispatch("fetchDogs")
    },
    computed: {
        dogs() {
            return this.$store.state.dogs
        },
        selectedDog() {
            return this.$store.state.selectedDog
        }
    },
    methods: {
        selectDog(dog) {
            this.$store.dispatch("setSelectedDog", dog)
        }
    }
}
</script>

<style lang="scss">
.index {
}
</style>