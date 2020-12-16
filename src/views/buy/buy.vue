<template>
  <div>
    <div class="buyall">
      <div class="btop-area">
        <p class="btop">多租户工作流服务平台 服务购买界面</p>
        <button id="index5" v-on:click="index_">首页</button>
        <button id="index6" v-on:click="service_">产品与服务</button>
        <span style="color: white" v-on:click="users_">{{ userName }}</span>
        <Avatar id="avatar" icon="ios-person" />
      </div>

      <div id="table_buy">
        <Table border :columns="tableColumns_buy" :data="tableData_buy">
          <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="openmodel(index)"
              v-if="row.isBought == 'false'"
              >购买</Button
            >
          </template>
        </Table>
        <Page
          :total="pageNum"
          show-sizer
          :page-size="pageSize"
          :current="pageIndex"
          style="margin-top: 2rem"
          @on-change="switchPage"
          @on-page-size-change="changePageSize"
        />
      </div>
    </div>

    <div class="rar_rtl" v-if="showModal">
      <h2>欢迎选购</h2>
      <input
        id="buyinput"
        type="number"
        placeholder="请输入rar"
        v-model="rar"
      />
      <input
        id="buyinput"
        type="number"
        placeholder="请输入rtl"
        v-model="rtl"
      />
      <button id="buyclickOK" v-on:click="buyclickOK_">确定</button>
      <button id="buyclickESC" @click="showModal = false">取消</button>
    </div>
  </div>
</template>

<style>
.buyall {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #dddddd;
  font-size: 0.8rem;
  z-index: 1;
}
.rar_rtl {
  background-color: white;
  position: absolute;
  top: 100px;
  left: 50%;
  width: 500px;
  height: 200px;
  z-index: 2;
}
.btop-area {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #4b4b4b;
}
.btop {
  display: inline-block;
  color: white;
  text-align: left;
  margin-top: 10px;
  margin-right: 70%;
  font-weight: bold;
  font-size: 1rem;
}
#index5 {
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
#index6 {
  background-color: transparent;
  border-style: none;
  color: white;
  font-size: 24px;
  position: absolute;
  top: 13px;
  left: 800px;
  outline: none;
  cursor: pointer;
}
#table_buy {
  margin-top: 100px;
  text-align: center;
}
#buyinput {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
</style>

<script>
import { setCookie, getCookie, delCookie } from "../../assets/js/cookie.js";
export default {
  data() {
    return {
      access_token: "",
      userName: "",
      tableColumns_buy: [
        {
          title: "流程id",
          key: "definitonId",
        },
        {
          title: "流程购买状态（true:已购买/false:未购买）",
          key: "isBought",
        },
        {
          title: "可用操作",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      tableData_buy: [],
      showModal: false,
      rar: "",
      rtl: "",
      index: "",
      pageNum: 100,
      index: "",
      pageSize: 10,
      pageIndex: 1,
    };
  },
  mounted() {
    let uname = getCookie("username");
    this.userName = uname;
    if (uname == "") {
      this.$router.push("/");
    }
    let token = getCookie("access_token");
    this.access_token = token;
    this.$http.get("http://localhost:8080/definitions").then((res) => {
      console.log(res);
      this.tableData_buy = [...res.body.definitons];
    });
  },
  methods: {
    index_() {
      this.$router.replace("/home");
    },
    service_() {
      this.$router.replace("/buy");
    },
    users_() {
      this.$router.replace("/users");
    },
    openmodel(index) {
      this.showModal = true;
      this.index = index;
    },
    switchPage(index) {
      this.pageIndex = index;
      this.$http
        .get(
          `http://localhost:8080/definitions?page=${this.pageIndex}&size=${this.pageSize}`
        )
        .then((res) => {
          this.pageNum = res.body.totalNum;
          this.tableData_buy = res.body.definitons;
        });
    },
    changePageSize(size) {
      this.pageSize = size;
      this.$http
        .get(`http://localhost:8080/definitions?page=1&size=${this.pageSize}`)
        .then((res) => {
          this.pageNum = res.body.totalNum;
          this.tableData_buy = res.body.definitons;
        });
    },
    buyclickOK_() {
      if (this.rar == "" || this.rtl == "") {
        alert("请输入rar和rtl");
      } else if (
        this.rar < 1 ||
        this.rtl < 1 ||
        this.rar > 10 ||
        this.rtl > 10
      ) {
        alert("rar和rtl范围为1-10");
      } else {
        let data = {
          definitionId: this.tableData_buy[this.index].definitonId,
          rar: this.rar,
          rtl: this.rtl,
        };
        this.$http.post("http://localhost:8080/services", data).then((res) => {
          console.log(res);
          alert(
            "购买成功，流程slaId为" +
              res.body.slaId +
              "，流程tenantId为" +
              res.body.tenantId +
              "，rar为" +
              this.rar +
              "，rtl为" +
              this.rtl
          );
          this.showModal = false;
          this.tableData_buy[this.index].isBought = true;
        });
      }
    },
  },
};
</script>