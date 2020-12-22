<template>
	<div class="homeall">
        <header>
            <button id="index1_">首页</button>
            <button id="index2_" v-on:click="service_">产品与服务</button>
            <div id="avatar_">
                <span style="color: white" v-on:click="users_">{{ name }}</span>
                <Avatar style=margin-left:10px icon="ios-person"/>
                <a href="javascript:void(0);" @click="quit" style=margin-left:10px>注销登录</a>
            </div>
        </header>
        <div class="title_">
            <p class="titlep-">工作流云服务产品</p>
            <p class="titlep_-">在线获取云资源，即点即用的工作流服务</p>
        </div>
    </div>
</template>

<style>
	.homeall{
        position: absolute;
    	height: 100%;
    	width: 100%;
    	top:0;
    	left: 0;
        background-image: url(background.png);
        background-size:cover;
    }
    #index1_{
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
    #index2_{
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
    .title_{
        margin-left:auto;
        margin-right:auto;
        margin:250px;
    }
    .titlep-{
        color:white;
        font-size:70px;
    }
    .titlep_-{
        color:white;
        font-size:25px;
    }
    #avatar_{
        position:absolute;
        top:30px;
        right:250px;
    }
</style>

<script>
import { setCookie,getCookie,delCookie } from '../../assets/js/cookie.js'
	export default{
		data(){
			return{
				name: ''
			}
		},
		mounted(){
			let uname = getCookie('username')
			this.name = uname
			if(uname == ""){
				this.$router.push('/')
			}
		},
		methods:{
			quit(){
				delCookie('username')
				this.$router.push('/')
			},
            service_(){
                this.$router.replace('/buy')
            },
            users_(){
                this.$router.replace('/users')
            },
		}
	}
</script>