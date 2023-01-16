<template>
    <section class="bg-light py-2">
       
        <div class="container d-flex justify-content-between align-items-center h-100">
            <div>
                Logo
            </div>

            <div>
                <div>
                    <select class="form-select form-select-sm" name="" id="">
                        <option selected>Browse</option>
                        <option value="">Poems</option>
                        <option value="">Stories</option>
                    </select>
                </div>
            </div>

            <div>
                <input type="search" class="form-control" placeholder="Search poem/book">
            </div>

            <div>
                <div>
                    <select class="form-select form-select-sm" name="" id="">
                        <option selected>English</option>
                        <option value="">English</option>
                        <option value="">Nepali</option>
                    </select>
                </div>
            </div>

            <div>
                <button class="btn btn-primary">Write</button>
            </div>

            <div>
                <div>
                    <select class="form-select form-select-sm" name="" id="">
                        <option selected>Theme</option>
                        <option value="">Dark</option>
                        <option value="">Light</option>
                    </select>
                </div>
            </div>

            
                <div>
                    <select class="form-select form-select-sm" name="" id="">
                        <option selected>Welcome Sayari</option>
                        <option value="">Profile</option>
                        <option value="">Logout</option>
                    </select>
                </div>
            

        </div>
    </section>
</template>

<script>
    export default {
        name:"DashboardMenu",
    }
</script>

<style lang="scss" scoped>

</style>