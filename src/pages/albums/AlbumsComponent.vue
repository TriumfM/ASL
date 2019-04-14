<template>
  <div class="col-md-12 menu-content">
    <div class="menu-content_header">
      <h2 class="title_side">All Albums</h2>
    </div>
    <div class="horizontal__line"></div>
    <div class="table__main">
      <router-link :to="{name: 'album-details', params: { albumId: album.id}}" class="table__row" v-for="album in albums">
        <div class='table-data table-data_click'>
          <div class="table__th">Title: </div>
          <div class='table__td'>{{album.title}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: [],
  data () {
    return {
      albums: {}
    }
  },
  filters: {
  },
  watch: {
  },
  mounted () {
    this.getAll()
  },
  methods: {
    getAll: function () {
      axios.get(`https://jsonplaceholder.typicode.com/albums`)
        .then(res => {
          this.albums= res.data
        })
        .catch(e => {
          console.log('Error!')
        })
    }
  }
}
</script>
