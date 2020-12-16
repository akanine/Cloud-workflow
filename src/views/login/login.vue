<template>
	<div class="loginall">
		<div class="top-area" >
			<p class="top">多租户工作流服务平台</p>
		</div>

		<div class="login-wrap" v-show="showLogin">
			<h2>登录</h2>
			<p v-show="showTishi">{{tishi}}</p>
			<input id = "logininput" type="text" placeholder="请输入用户名" v-model="username">
			<input id = "logininput" type="password" placeholder="请输入密码" v-model="password">
			<button id="login1" v-on:click="login">登录</button>
			<span v-on:click="ToRegister">没有账号？点击注册</span>
		</div>

		<div class="register-wrap" v-show="showRegister">
			<h2>注册</h2>
			<p v-show="showTishi">{{tishi}}</p>
			<input id = "logininput" type="text" placeholder="请输入用户名" v-model="newUsername">
			<input id = "logininput" type="password" placeholder="请输入密码" v-model="newPassword">
			<input id = "logininput" type="password" placeholder="请再次输入密码" v-model="newPasswordagain">
			<button id="login1" v-on:click="register">注册</button>
			<span v-on:click="ToLogin">已有账号？点击登录</span>
		</div>
	</div>
</template>

<style>
	.loginall{
		position: absolute;
    	height: 100%;
    	width: 100%;
    	top:0;
    	left: 0;
		background-color:#DDDDDD;
	}
	.top-area{width:100%;height:50px;position:fixed;top:0;background-color:#4B4B4B;}
	.top{color:white;text-align:left;margin-left:40px;font-weight: bold;font-size:20px;margin-top:10px;}
	.login-wrap{width:600px; height:400px;position:absolute;text-align:center;background-color:white;left:50%; top:50%; margin-left: -300px; margin-top: -200px;}
	.register-wrap{width:600px; height:400px;position:absolute;text-align:center;background-color:white;left:50%; top:50%; margin-left: -300px; margin-top: -200px;}
	#logininput{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
	p{color:red;}
	#login1{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#0099FF; color:#fff; font-size:16px; margin-bottom:5px;}
	span{cursor:pointer;}
	span:hover{color:#0099FF;}
</style>

<script>
import { setCookie,getCookie } from '../../assets/js/cookie.js'
	export default{
		data(){
			return{
				username: '',
				password: '',
				newUsername: '',
				newPassword: '',
				newPasswordagain: '',
				tishi: '',
				showTishi: false,
				showLogin: '',
				showRegister: ''
			}
		},
		mounted: function(){
			this.showLogin = this.$route.query.showLoginKey
      		this.showRegister = this.$route.query.showRegisterKey
			if(getCookie('username')){
				this.$router.push('/home')
			}
		},
		methods: {
			login(){
				if(this.username == "" || this.password == ""){
					alert("请输入用户名或密码")
				}
				else{
					let data = {'username':this.username,'password':this.password}
					this.$http.post('http://bpmcp-core/extract/login',data).then((res)=>{
						console.log(res)
						if(res.body.statusCode == 200){
							this.tishi = "登陆成功"
							this.showTishi = true
							setCookie('username',this.username,1800)
							setCookie('access_token',res.body.access_token,1800)
							setTimeout(function(){
								this.$router.push({path:'/home'})
							}.bind(this),1000)
						}else{
							this.tishi = res.body.error_description
							this.showTishi = true
						}
					})
				}
			},
			ToRegister(){
				this.showRegister = true
				this.showLogin = false
			},
			ToLogin(){
				this.showRegister = false
				this.showLogin = true
			},
			register(){
				if(this.newUsername == "" || this.newPassword == "" || this.newPasswordagain == ""){
					alert("请输入用户名或密码")
				}
				else if(this.newPassword != this.newPasswordagain){
					alert("两次密码不一致")
				}
				else{
					let data = {'username':this.newUsername,'password':this.newPassword}
					this.$http.post('http://bpmcp-core/extract/register',data).then((res)=>{
						console.log(res)
						if(res.body.statusCode == 201){
							this.tishi = "注册成功"
							this.showTishi = true
							this.username = ''
							this.password = ''
							setTimeout(function(){
								this.showRegister = false
								this.showLogin = true
								this.showTishi = false
							}.bind(this),1000)
						}
						else if(res.body.statusCode == 409){
							this.tishi = res.body.errorMessage
							this.showTishi = true
							this.username = ''
							this.password = ''
							setTimeout(function(){
								this.showTishi = false
							}.bind(this),1000)
						}
						else if(res.body.statusCode == 500){
							this.tishi = res.body.errorMessage
							this.showTishi = true
							this.username = ''
							this.password = ''
							setTimeout(function(){
								this.showTishi = false
							}.bind(this),1000)
						}
					})
				}
			}
		}
	}
</script>