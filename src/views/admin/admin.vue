<template>
	<div class="admin">
		<el-container>
			<el-header id="head">
				<el-row id="head_1">
					<el-col :span="18"><h3>云租户工作流服务平台</h3></el-col>
					<el-col :span="6">
						<h4>
							管理员
							<i class="el-icon-user-solid"></i>
						</h4>
					</el-col>
				</el-row>
				<el-row id="head_2"><el-col :span="24">您好，欢迎回到管理员中心</el-col></el-row>
			</el-header>

			<el-container>
				<el-aside width="200px">
					<el-menu default-active="1" @select="handleSelect">
						<el-menu-item index="1"><span slot="title">资源管理 ></span></el-menu-item>
						<el-menu-item index="2"><span slot="title">实例管理 ></span></el-menu-item>
						<el-menu-item index="3"><span slot="title">质量管理 ></span></el-menu-item>
						<el-menu-item index="4"><span slot="title">租户管理 ></span></el-menu-item>
					</el-menu>
				</el-aside>
				<el-main><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import Resource from '@/views/admin/Resource.vue';
import Instance from '@/views/admin/Instance.vue';
import Quality from '@/views/admin/Quality.vue';
import Tenant from '@/views/admin/Tenant.vue';

export default {
	name: 'admin',
	components: {
		Resource,
		Instance,
	},
	mounted() {
    	let token = getCookie("access_token");
    	this.access_token = token;
  	},
	methods: {
		handleSelect(key, keyPath) {
			switch (key) {
				case '1':
					this.$router.push('/admin/resource');
					break;
				case '2':
					this.$router.push('/admin/proc_insts');
					break;
				case '3':
					this.$router.push('/admin/avg_response');
					break;
				case '4':
					this.$router.push('/admin/users');
					break;
			}
		}
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
.h1{
	font-size:20px;
}
#head {
	height: 180px !important;
	padding: 0 !important;
}
#head_1 {
	color: white;
	height: 60px;
	line-height: 60px;
	padding-left: 10%;
	font-size: 20px;
	font-weight: 800;
	background: #333333;
}
#head_2 {
	height: 130px;
	line-height: 130px;
	color: black;
	font-size: 26px;
	font-weight: 500;
	padding-left: 10%;
}
.el-container {
	background: #f5f5f5;
	height: 100vh;
}
.el-aside {
	color: #333;
	text-align: center;
}
.el-menu {
	background: #f5f5f5 !important;
	border: 0px !important;
	margin-top: 25px !important;
}
.el-menu span {
	font-size: 20px !important;
}
</style>