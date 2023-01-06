<template>
    <div>
        <header>
            <navbar-component/>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer></footer>
    </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue"
    export default {
        name:'TemplateView',
        components:{NavbarComponent}
    }
</script>

<style lang="scss" scoped>

</style>