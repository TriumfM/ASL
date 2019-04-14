<template>
  <div class="col-md-12 menu-content">
    <div class="menu-content_header">
      <h2 class="title_side">Album {{album.title}}</h2>
    </div>
    <div class="horizontal__line"></div>
    <div class="album_photos">
      <div class="photo" v-for="photo in photos" v-if="photos" @click="showPhoto(photo.id)">
        <img :src="photo.thumbnailUrl"/>
      </div>
    </div>
    <transition name="modal" v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header-customize">
              <span class="modal-title">Photo {{photo.title}}</span>
              <div class="modal-close" @click="showModal = false"><i class="fa fa-times"></i></div>
            </div>
            <div class="modal-body-customize">
              <img :src="photo.url"/>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: [],
  data () {
    return {
      albums: {},
      album: {},
      photos: [],
      photo: {},
      showModal: false
    }
  },
  computed: {
    idAdmin: function () {
      return this.$route.params.albumId
    }
  },
  watch: {
    idAdmin: function () {
      this.getDetails(this.idAdmin)
      this.getPhotoAlbum(this.idAdmin)
    }
  },
  mounted () {
    this.getDetails(this.idAdmin)
    this.getPhotoAlbum(this.idAdmin)
  },
  methods: {
    getDetails: function (idAlbum) {
      axios.get(`https://jsonplaceholder.typicode.com/albums/` + idAlbum)
        .then(res => {
          this.album = res.data
        })
        .catch(e => {
          console.log('Error!')
        })
    },
    getPhotoAlbum: function (idAlbum) {
      axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
        .then(res => {
          for(var i = 0; i < res.data.length; i++) {
            if(res.data[i].albumId == idAlbum) {
              this.photos.push(res.data[i])
            }
          }
        })
        .catch(e => {
          console.log(e.response)
        })
    },
    getDetailsPhoto: function (idPhoto) {
      axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
        .then(res => {
          for(var i = 0; i < res.data.length; i++) {
            if(res.data[i].id === idPhoto) {
              this.photo = res.data[i]
            }
          }
        })
        .catch(e => {
          console.log('Error!')
        })
    },
    showPhoto: function (idPhoto) {
      this.getDetailsPhoto(idPhoto)
      this.showModal = true
    }
  }
}
</script>
