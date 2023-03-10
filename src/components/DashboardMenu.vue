<template>
  <el-container>
    <el-aside width="300px" height="100%">
      <vs-sidebar absolute v-model="active" open>
        <template #logo>
          <img src="@/assets/logo.png" alt="image" width="100" />
        </template>
        <vs-sidebar-item class="text-dark">
          <template #icon>
            <i class="fa-solid fa-user"></i>
          </template>
          Welcome user!
        </vs-sidebar-item>
        <vs-sidebar-item class="text-dark">
          <template #icon>
            <i class="fa-solid fa-clipboard"></i>
          </template>
          <a href="" class="text-dark" @click.prevent="$router.push({ name: 'purchasedpoems' })"> Purchased Poems</a>
        </vs-sidebar-item>
        <vs-sidebar-item class="text-dark">
          <template #icon>
           <i class="fa-solid fa-file"></i>
          </template>
           <a href="" class="text-dark"  @click.prevent="$router.push({ name: 'purchasedstories' })"> Purchased Stories</a>
        </vs-sidebar-item>
        <vs-sidebar-item class="text-dark">
          <template #icon>
            <i class="fa-solid fa-file-pen"></i>
          </template>
           <a href="" class="text-dark"  @click.prevent="$router.push({ name: 'writepoem' })"> Write Poems</a>
        </vs-sidebar-item>
        <vs-sidebar-item class="text-dark">
          <template #icon>
           <i class="fa-solid fa-book"></i>
          </template>
            <a href="" class="text-dark"  @click.prevent="$router.push({ name: 'writestory' })">Write Stories</a>
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="" />
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class="bx bx-bell"></i>

              <template #badge> 28 </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </el-aside>
    <el-main>
        <slot>
          <h2 class="text-dark">Hello user! </h2>
          Write your own story
        </slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name:"DashboardMenu"
}
</script>
