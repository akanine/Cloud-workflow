<template>
	<div id="main">
		<el-row id="tou">
			<el-col :span="24" align="left"><h>平均响应时间统计</h></el-col>
		</el-row>
		<el-row id="nei">
			<el-table :data="time.slice(0,5)" style="width: 100%" :border="true" >
				<el-table-column prop="timestamp" label="时间"></el-table-column>
				<el-table-column prop="avgResponse" label="平均响应时间/s"></el-table-column>
			</el-table>
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="totalNum"
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
		return {
        "totalNum":"",
        "time": [
            {
            "timestamp":"",
            "avgResponse":""
            }
		],
		access_token: ""
        }
	},
	mounted() {
    	let token = getCookie("access_token");
    	this.access_token = token;
  	},
  	mounted() {
    let token = getCookie("access_token");
    this.access_token = token;
    this.$http.get("/api/core/admin/avg_response",{headers:{Authorization: "Bearer " + this.access_token}}).then((res) => {
        this.totalNum = res.body.totalNum;
        this.time = res.body.time;
      });
  },
	methods: {
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

