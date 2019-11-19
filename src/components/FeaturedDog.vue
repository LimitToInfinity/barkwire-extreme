<template>
    <p>The dog of the month is: {{dog.name}}</p>
</template>

<script>
export default {
    props: {
        dog: Object,
    }
}
</script>