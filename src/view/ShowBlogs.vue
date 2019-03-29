<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
        <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blog',
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  computed: {
    filteredBlogs(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  created(){
      this.$http.get("https://myblog-ea781.firebaseio.com/blogs.json")
      .then(res=>res.json())
      .then(data=>{
        var blogsArray=[];
        for(let key in data){
          data[key].id=key;
          blogsArray.push(data[key]);
        }
        this.blogs=blogsArray;
      })
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin:0 auto;
}

.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background: #eeeeee;
    border:1px dotted #aaaaaa;
}

#show-blogs a{
  color:#444444;
  text-decoration: none;
}

input[type="text"]{
  padding:8px;
  width:100%;
  box-sizing: border-box;
}

</style>
