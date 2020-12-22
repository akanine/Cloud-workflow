<template>
	<div id="main">
		<el-row id="tou">
			<el-col :span="24" align="left"><h>实例管理</h></el-col>
		</el-row>
		<el-row id="nei">
			<el-table :data="procInsts.slice(0,2)" style="width: 100%" :border="true">
				<el-table-column prop="procInstId" label="实例名称"></el-table-column>
				<el-table-column prop="procDefId" label="id"></el-table-column>
				<el-table-column prop="username" label="所属用户"></el-table-column>
				<el-table-column prop="status" label="实例状态"></el-table-column>
				<el-table-column prop="createTime" label="创建时间"></el-table-column>
			</el-table>
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="1"
			  :page-sizes="[5, 10, 20, 50]"
			  :page-size="5"
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
            "procInsts": [
        {
            "procInstId": "",
            "username": "",
            "procDefId": "",
            "createTime": "",
            "status": ""
        }
    ],
    "totalNum": "",
	access_token: ""
	}
	},
	mounted() {
    let token = getCookie("access_token");
    this.access_token = token;
    this.$http.get("/api/core/admin/proc_insts",{headers:{Authorization: "Bearer " + this.access_token}}).then((res) => {
        this.totalNum = res.body.totalNum;
        this.procInsts = res.body.procInsts;
      });
  },
  method:{

	  handleSizeChange(val) {
		console.log(`每页 ${val} 条`);
	  },
	  handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
	  }
	  },
}
</script>

<style>
	#main{
		background: white;
		height: 50vh;
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