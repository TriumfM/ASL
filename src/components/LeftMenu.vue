<template>
  <div class="menu">
    <div class="menu_head">
      <div class="menu_head-icon"></div>
      <span class="menu_head-title">ASL</span>
    </div>
    <div class='list'>
      <router-link to="/posts" :class="{'list__tile--link' : true, 'list__tile--link-active' : $route.name === 'posts'}">
        <span class="active__span"></span>
        <div class="list__tile__icon active__icon">
          <i class="fa fa-square-o"></i>
        </div>
        <div class="list__tile__title">
          <span>Posts</span>
        </div>
      </router-link>
      <router-link to="/albums" :class="{'list__tile--link' : true, 'list__tile--link-active' : $route.name === 'albums' ||  $route.name === 'album-details'}">
        <span class="active__span"></span>
        <div class="list__tile__icon active__icon">
          <i class="fa fa-file-image-o"></i>
        </div>
        <div class="list__tile__title">
          <span>Albums</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  props: [],
  data () {
    return {
    }
  },
  filters: {
  },
  watch: {
  },
  mounted: {
  },
  methods: {
  }
}
</script>
