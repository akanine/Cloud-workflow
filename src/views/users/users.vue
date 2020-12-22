<template>
  <div class="usersall">
    <div class="utop-area">
      <p class="utop">多租户工作流服务平台 租户界面</p>
      <button id="index7" v-on:click="index7_">首页</button>
      <button id="index8" v-on:click="index8_">产品与服务</button>
      <span style="color: white">{{ userName }}</span>
      <Avatar id="avatar" icon="ios-person" />
    </div>

    <div class="utopic">
      <p class="utopicp">欢迎使用BPMN工作流产品</p>
    </div>

    <div class="layout">
      <Layout style="height: 100%">
        <Sider
          ref="side1"
          hide-trigger
          collapsible
          :collapsed-width="78"
          v-model="isCollapsed"
        >
          <Menu
            active-name="1-1"
            theme="dark"
            width="auto"
            :class="menuitemClasses"
          >
            <MenuItem name="1-1" @click.native="switchToTable">
              <span class="iconfont icon-liucheng"></span>
              <span>流程</span>
            </MenuItem>
            <MenuItem name="1-2" @click.native="switchToForm">
              <span class="iconfont icon-xinjian"></span>
              <span>新建</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{ padding: 0 }" class="layout-header-bar">
            <Icon
              @click.native="collapsedSider"
              :class="rotateIcon"
              :style="{ margin: '0 20px' }"
              type="md-menu"
              size="24"
            ></Icon>
          </Header>
          <Content
            :style="{ margin: '20px', background: '#fff', minHeight: '260px' }"
          >
            <div id="table" v-if="switchItem == 1">
              <Table border :columns="tableColumns" :data="tableData">
                <template slot-scope="{ row }" slot="name">
                  <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                  <Button
                    type="primary"
                    size="small"
                    style="margin-right: 5px"
                    @click="startLine(index)"
                    v-if="row.status == 'SUSPENDED'"
                    >启动</Button
                  >
                  <Button
                    type="warning"
                    size="small"
                    style="margin-right: 5px"
                    @click="stopLine(index)"
                    v-if="row.status == 'RUNNING'"
                    >暂停</Button
                  >
                  <Button type="error" size="small" @click="removeLine(index)">删除</Button>
                </template>
              </Table>
            </div>
            <div id="form" v-if="switchItem == 2">
              <span
                style="
                  font-size: 1.5rem;
                  font-weight: bolder;
                  display: block;
                  margin-bottom: 20px;
                "
                >新建BPMN流程</span
              >
              <Input
                v-model="inputName"
                placeholder="请输入sla主键"
                style="width: 300px"
              />
              <Input
                v-model="inputValue"
                placeholder="请输入流程定义variables"
                style="width: 300px"
              />
              <br /><br />
              <Button
                @click="() => (this.inputName = '')"
                style="margin-right: 50px"
                >取消</Button
              >
              <Button @click="submit" type="primary">确认</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<style>
@import "../../assets/icons/iconfont.css";
.usersall {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #dddddd;
  font-size: 0.8rem;
}
.utop-area {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #4b4b4b;
}
.utop {
  display: inline-block;
  color: white;
  text-align: left;
  margin-top: 10px;
  margin-right: 70%;
  font-weight: bold;
  font-size: 1rem;
}
.utopic {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 50px;
}
.utopicp {
  color: black;
  text-align: left;
  margin-left: 5%;
  margin-top: 40px;
}
#avatar {
  margin-left: 10px;
}

.layout {
  height: 75%;
  margin-top: 140px;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  text-align: left;
}
.layout-header-bar {
  background: #fff !important;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

.workflow-list-wrap {
  margin-top: 10px;
}
.workflow-add-wrap {
  margin-top: 10px;
}
#form {
  display: block;
  margin: 20px 50px;
}
#index7 {
  background-color: transparent;
  border-style: none;
  color: white;
  font-size: 24px;
  position: absolute;
  top: 13px;
  left: 550px;
  outline: none;
  cursor: pointer;
}
#index8 {
  background-color: transparent;
  border-style: none;
  color: white;
  font-size: 24px;
  position: absolute;
  top: 13px;
  left: 700px;
  outline: none;
  cursor: pointer;
}
</style>

<script>
import axios from 'axios';
import { setCookie, getCookie, delCookie } from "../../assets/js/cookie.js";
export default {
  data() {
    return {
      userName: "",
      isCollapsed: false,
      switchItem: 1,
      tableColumns: [
        {
          title: "工作流主键",
          key: "workflowId",
        },
        {
          title: "sla主键",
          key: "slaId",
        },
        {
          title: "用户名",
          key: "tenantId",
        },
        {
          title: "流程定义主键",
          key: "definitionId",
        },
        {
          title: "流程实例id",
          key: "instanceId",
        },
        {
          title: "创建时间",
          key: "createTime",
        },
        {
          title: "流程状态",
          key: "status",
        },
        {
          title: "可用操作",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      tableData: [],
      pageNum: 100,
      inputName: "",
      inputValue: "",
      URL: "",
      access_token: "",
      index: "",
      pageSize: 10,
      pageIndex: 1,
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  mounted() {
    let uname = getCookie("username");
    this.userName = uname;
    if (uname == "") {
      this.$router.push("/");
    }
    let token = getCookie("access_token");
    this.access_token = token;
    this.$http.get("/api/core/workflows",{headers:{Authorization: "Bearer " + this.access_token}}).then((res) => {
        this.pageNum = res.body.totalNum;
        this.tableData = res.body.workflows;
      });
  },
  methods: {
    index7_() {
      this.$router.replace("/home");
    },
    index8_() {
      this.$router.replace("/buy");
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    switchToTable() {
      this.switchItem = 1;
    },
    switchToForm() {
      this.switchItem = 2;
    },
    startLine(index) {
      this.index = index;
      URL = "/api/core/workflows/" + this.tableData[index].workflowId + "/resume";
      let data={}
      this.$http.post(URL,data,{headers:{Authorization: "Bearer " + this.access_token}}).then((res) => {
        console.log(res);
        this.$router.replace("/users");
      });
    },
    stopLine(index) {
      this.index = index;
      URL = "/api/core/workflows/" + this.tableData[index].workflowId + "/suspend"
      let data={}
      this.$http.post(URL,data,{headers:{Authorization: "Bearer " + this.access_token}}).then((res) => {
        console.log(res);
        this.$router.replace("/users");
      });
    },
    removeLine(index) {
      this.index = index;
      URL = "/api/core/workflows/" + this.tableData[index].workflowId
      let data={}
      axios({
        url: URL,
        method: 'DELETE',
        headers: {
          Authorization: "Bearer " + this.access_token
        },
        params: data
      }).then((res) => {
        console.log(res);
        this.$router.replace("/users");
      });
    },
    submit() {
      if (this.inputName == "") {
        alert("未输入流程实例id");
      } else {
        let data_ = JSON.parse(this.inputValue)
        console.log(data_)
        let data = { slaId: this.inputName,variables:data_ };
        console.log(data)
        let params = JSON.stringify(data);
        console.log(params)
        this.$http.post("/api/core/workflows", params, {headers:{Authorization: "Bearer " + this.access_token,'Content-Type':"application/json"}}).then((res) => {
          console.log(res);
          alert("新建成功");
          this.switchItem = 1;
          this.$router.replace("/users");
        });
      }
    },
  },
};
</script>