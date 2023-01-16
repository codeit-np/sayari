<template>
    <div>
        <!-- Menu -->
        <dashboard-menu/>
        <section class="py-5">
            <div class="container">
                <h5>Trending for you</h5>
                <div class="row g-4" v-for="(book,index) in 10" :key="index">
                    <div class="col-md-3 my-4">
                        Image
                    </div>
                    <div class="col-md-9 my-4">
                        <h1>Book Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, consequatur explicabo inventore officiis est maxime, in dolorum iste odio, esse asperiores. Culpa facilis, recusandae maxime quia illo nemo ipsam odit harum alias sapiente veritatis aspernatur possimus assumenda nobis sit expedita ea ratione molestiae beatae cupiditate autem. Omnis, non necessitatibus.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </section>
    </div>  
</template>

<script>
import DashboardMenu from "@/components/DashboardMenu.vue"

    export default {
  components:{DashboardMenu}
        
    }
</script>

<style lang="scss" scoped>

</style>