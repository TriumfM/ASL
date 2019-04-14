<template>
  <div class="col-md-12 menu-content">
    <div class="menu-content_header">
      <h2 class="title_side">All Posts</h2>
    </div>
    <div class="horizontal__line"></div>
    <div>
      <button @click="sortBy('title')">Sort by title desc</button>
      <input type='number' min=1 @keyup="getAll(user)" placeholder="Posts of user with id ..." v-model="user"/>
    </div>
    <div class="posts">
      <div class="post" v-for="(post,index) in orderBy(posts, sort.field, sort.desc)">
        <div class="post_header">
            <span>{{post.title}}</span>
          </div>
        <div class="post_body" @click="showComments(index, post.id)">
            <span>{{post.body}}</span>
          </div>
        <div class="comments"  v-if="rowID === index">
          <span class="comment_title">Comments</span>
          <div class="comment_content" v-for="comment in comments">
            <div class="comment_name">
              <span>User: {{comment.email}}</span>
            </div>
            <div class="comment_body">
              <span>Comment: {{comment.body}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  props: [],
  mixins: [Vue2Filters.mixin],
  data () {
    return {
      posts: [],
      comments: [],
      user: '',
      showCommentsPost: false,
      rowID: -1,
      sortKey: '',
      reverse: false,
      sort: {
        field: 'id',
        desc: true
      }
    }
  },
  filters: {
  },
  watch: {
  },
  mounted () {
    this.getAll('')
  },
  methods: {
    getAll: function (idUser) {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
          this.posts = []
          console.log(res.data)
          if (idUser === "") {
            this.posts = res.data
          }else {
            for(var i = 0; i < res.data.length; i++) {
              if(res.data[i].userId == idUser) {
                this.posts.push(res.data[i])
              }
            }
          }

        })
        .catch(e => {
          console.log('Error!')
        })
    },
    getCommentsPost: function (idPost) {
      axios.get(`https://jsonplaceholder.typicode.com/albums/`+ idPost +`/comments`)
        .then(res => {
          for(var i = 0; i < res.data.length; i++) {
            if(res.data[i].postId == idPost) {
              this.comments.push(res.data[i])
            }
          }
        })
        .catch(e => {
          console.log('Error!')
        })
    },
    showComments: function (rowID,postId) {
      this.getCommentsPost(postId)
      if (this.rowID === rowID) {
        this.rowID = -1
      } else {
        this.rowID = rowID
      }
    },
    sortBy: function(field){
      this.sort.field = field
      this.sort.desc = -1

    }
  }
}
</script>
