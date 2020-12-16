<template>
	<div id="main">
		<el-row id="tou">
			<el-col :span="24"><p>租户列表</p></el-col>
		</el-row>
		<el-row id="nei">
			<el-table :data="tableData" style="width: 100%" :border="true">
				<el-table-column prop="id" label="用户id"></el-table-column>
				<el-table-column prop="createdTimestamp" label="注册日期"></el-table-column>
				<el-table-column prop="username" label="用户名"></el-table-column>
				<el-table-column prop="isAdmin" label="是否为管理员"></el-table-column>
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
			//currentPage:1,
			tableData:[
			{
                "id": "1b03aff6-1ed6-44a7-98ef-06ff5f7eb721",
                "createdTimestamp": 1528382908880,
                "username": "hradmin",
                "isAdmin": true
            },
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
