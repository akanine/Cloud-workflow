<template>
	<div id="main">
		<el-tabs v-model="activeName">
			<el-tab-pane label="Pod" name="first" :key="first">
				<child></child>
			</el-tab-pane>
			<el-tab-pane label="Container" name="second" :key="second">
				<child></child>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import pod from '@/views/admin/pod'
import container from '@/views/admin/container'
export default {
    id: 'main',
    components:{
        child1:pod,
        child2:container
    },
    data() {
        return {
            //默认第一个选项卡
            activeName: "first",
        }
    },
       mounted(){
        
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
