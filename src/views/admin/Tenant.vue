<template>
	<div id="main">
		<el-row id="tou">
			<el-col :span="24" align="left"><h>租户列表</h></el-col>
		</el-row>
		<el-row id="nei">
			<el-table :data="users.slice(0,3)" style="width: 100%" :border="true" >
				<el-table-column prop="id" label="用户id"></el-table-column>
                <el-table-column prop="username" label="用户名"></el-table-column>
				<el-table-column prop="createdTimestamp" label="注册日期"></el-table-column>
				<el-table-column prop="isAdmin" label="是否为管理员" :formatter="formatBoolean"></el-table-column>
			</el-table>
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="1"
			  :page-sizes="[10, 20, 50, 100]"
			  :page-size="10"
			  layout="total, sizes, prev, pager, next, jumper"
			  :total="50">
			</el-pagination>
		</el-row>
	</div>
</template>

<script>

import { setCookie, getCookie, delCookie } from "../../assets/js/cookie.js";
export default {
	data() {
    return{
	 "users": [
    {
        "id": "",
        "username": "",
        "createdTimestamp":"",
        "isAdmin":""
    }
    ],
        access_token: ""
        }  
    },

	mounted() {
    let token = getCookie("access_token");
    this.access_token = token;
    this.$http.get("/api/core/admin/users",{headers:{Authorization: "Bearer " + this.access_token}}).then((res) => {
        this.totalNum = res.body.totalNum;
        this.users = res.body.users;
      });
  },

	methods: {
    formatBoolean: function(row, column, cellValue) {
                if (cellValue) {
                    return "管理员";  //根据自己的需求设定
                } else {
                     return "普通租户";
                }
                },
	  handleSizeChange(val) {
		console.log(`每页 ${val} 条`);
	  },
	  handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
	  }
	}
}
</script>

<style>
    #main{
        background: white;
        height: 70vh;
    }
    #tou{
        height: 120px;
        line-height: 100px;
        font-size: 22px;
        padding-left: 5%;
    }
    #nei{
        width: 75%;
        margin: auto;
        /* border: 1px solid silver; */
    }
    .el-pagination{
        margin-top: 15px;
    }
</style>
