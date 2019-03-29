<template>
    <div class="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link v-bind:to="'/edit/'+id">编辑</router-link>
    </div>
</template>
<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{

            }
        }
    },
    created(){
        this.$http.get('https://myblog-ea781.firebaseio.com/blogs/'+this.id+".json")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
           this.blog=data;
        })
    },
    methods: {
        deleteSingleBlog(){
            this.$http.delete('https://myblog-ea781.firebaseio.com/blogs/'+this.id+".json")
            .then(res=>{
                console.log(res);
                this.$router.push({path:"/"})
            })
        }
    },
}
</script>
<style scoped>
.single-blog{
    max-width:960px;
    margin:0 auto;
    padding:20px;
    background:#eeeeee;
    broder:1px dotted #aaaaaa;
}
</style>
