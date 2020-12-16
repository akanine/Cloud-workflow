<template>
	<div id="main">
		<el-row id="tou">
			<el-col :span="24"><p>平均响应时间统计</p></el-col>
		</el-row>
		<el-row id="nei">
			<el-table :data="tableData" style="width: 100%" :border="true" >
				<el-table-column prop="timestamp" label="时间"></el-table-column>
				<el-table-column prop="avgresponse" label="平均响应时间/s"></el-table-column>
			</el-table>
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="currentPage"
			  :page-sizes="[10, 20, 50, 100]"
			  :page-size="10"
			  layout="total, sizes, prev, pager, next, jumper"
			  :total="50">
			</el-pagination>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
        "totalNum":"",
        "time": [
            {
            "timestamp":"",
            "avgresponse":""
            }
        ]
        }
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
