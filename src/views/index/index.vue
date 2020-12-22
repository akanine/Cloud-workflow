<template>
    <div class="indexall">
        <header>
            <button id="index1" v-on:click="index">首页</button>
            <button id="index2" v-on:click="service">产品与服务</button>
            <button id="index3" v-on:click="login_">登录</button>
            <button id="index4" v-on:click="register_">注册</button>
        </header>
        <div class="title">
            <p class="titlep">工作流云服务产品</p>
            <p class="titlep_">在线获取云资源，即点即用的工作流服务</p>
        </div>
    </div>
</template>

<style>
    .indexall{
        position: absolute;
    	height: 100%;
    	width: 100%;
    	top:0;
    	left: 0;
        background-image: url(background.png);
        background-size:cover;
    }
    #index1{
        background-color:transparent;
        border-style:none;
        color:white;
        font-size:24px;
        position:absolute;
        top:30px;
        left:250px;
        outline: none;
        cursor:pointer; 
    }
    #index2{
        background-color:transparent;
        border-style:none;
        color:white;
        font-size:24px;
        position:absolute;
        top:30px;
        left:400px;
        outline: none;
        cursor:pointer; 
    }
    #index3{
        background-color:transparent;
        color:white;
        font-size:24px;
        position:absolute;
        top:30px;
        right:400px;
        outline: none;
        cursor:pointer; 
        border-color:white;
        width:130px;
    }
    #index4{
        background-color:transparent;
        color:white;
        font-size:24px;
        position:absolute;
        top:30px;
        right:200px;
        outline: none;
        cursor:pointer; 
        border-color:white;
        width:130px;
    }
    .title{
        margin-left:auto;
        margin-right:auto;
        margin:250px;
    }
    .titlep{
        color:white;
        font-size:70px;
    }
    .titlep_{
        color:white;
        font-size:25px;
    }
</style>

<script>
    export default{
        methods: {
            index(){
                this.$router.replace('/')
            },
            login_(){
                this.$router.push({
                    path: '/login',
                    query:{
                        showLoginKey:true,
                        showRegisterKey:false
                    }
                })
            },
            register_(){
                this.$router.push({
                    path: '/login',
                    query:{
                        showLoginKey:false,
                        showRegisterKey:true
                    }
                })
            },
        }
    }
</script>