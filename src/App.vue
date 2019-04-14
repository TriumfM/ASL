<template>
  <div class="app__container">
    <left-menu></left-menu>
    <router-view/>
  </div>
</template>

<script>
  import LeftMenu from '@/components/LeftMenu'

  export default {
    name: 'App',
    components: {
      LeftMenu
    }
  }
</script>
