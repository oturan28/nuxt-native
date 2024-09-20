<script setup lang="ts">
const { user } = useUserStore()
const { data } = await useFetch('/api/todos')

</script>
<template>
  <MainNavbar></MainNavbar>
  <div class="container mt-10 mx-auto">
    <p class="mr-3" v-if="user.isAuthenticated">logged in</p>
    <p class="mr-3" v-if="!user.isAuthenticated">logged out</p>
    <pre>{{ data }}</pre>
  </div>
</template>
