<template>
    <div>
     <div data-testId='Hello-component'>   {{msg}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            msg: {
                type: String,
                default: 'Light, camara, laser!!!',
            }
        }

    }
</script>

<style>

</style>