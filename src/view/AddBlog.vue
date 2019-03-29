<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action v-if="!submmited">
      <label>博客标题：</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容：</label>
      <textarea v-model="blog.content"></textarea>
      <div class="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories">
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
        <h3>您的博客发布成功！</h3>
    </div>
    <div class="preview">
      <h3>博客纵览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
    
    <p>博客分类：</p>
    <ul>
        <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author:""
      },
      authors:["郭烨强","赵莉","贾帅"],
      submmited:false
    };
  },
  methods:{
      post(){
          axios.post("https://myblog-ea781.firebaseio.com/blogs.json",this.blog)
          .then(res=>{
              this.submmited=true;
              console.log(res);
          })
      }
  }
};
</script>

<style scoped>

#add-blog *{
    box-sizing:border-box;
}

#add-blog{
    margin:20px auto;
    max-width:600px;
    padding:20px;
}

label{
    display: block;
    margin:20px 0 10px;
}

input[type="text"],textarea,select{
    display: block;
    width:100%;
    padding:8px;
}

textarea{
    height: 120px;
}

.checkboxes label{
    display: inline-block;
    margin-top:0;
}

.checkboxes input{
    display: inline-block;
    margin-right: 10px;
}

button{
    display: block;
    margin:20px 0;
    background:crimson;
    color:#ffffff;
    border:0;
    padding:14px;
    border-radius:5px;
    font-size: 18px;
    cursor: pointer;
}

.preview{
    padding:10px 20px;
    border:1px solid #cccccc;
    margin:30px 0;
}

h3{
    margin-top: 10px;
}

</style>
