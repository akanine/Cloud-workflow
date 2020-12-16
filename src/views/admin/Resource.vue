<template>
	<div id="main">
		<el-row id="tou">
			<el-col :span="24"><p>资源列表</p></el-col>
		</el-row>
		<el-row id="nei">
			<el-table :data="tableData" style="width: 100%" :border="true" >
				<el-table-column prop="name" label="资源名"></el-table-column>
				<el-table-column prop="tab" label="标识"></el-table-column>
				<el-table-column prop="id" label="资源名id"></el-table-column>
				<el-table-column prop="num" label="资源数量"></el-table-column>
				<el-table-column prop="state" label="状态"></el-table-column>
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
		//暂不确定展示数据
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
