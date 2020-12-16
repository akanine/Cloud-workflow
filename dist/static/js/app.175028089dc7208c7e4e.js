webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = setCookie;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCookie;
/* harmony export (immutable) */ __webpack_exports__["b"] = delCookie;
function setCookie(c_name, value, expire) {
	var date = new Date();
	date.setSeconds(date.getSeconds() + expire);
	document.cookie = c_name + "=" + escape(value) + "; expires=" + date.toGMTString();
	console.log(document.cookie);
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		let c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			let c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

function delCookie(c_name) {
	setCookie(c_name, "", -1);
}

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(173)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(204),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(180)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(211),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(175)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(206),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(177)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(208),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_login_login_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_login_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_login_login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_main_main_vue__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_main_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_main_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_home_home_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_home_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_home_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_index_index_vue__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_index_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_index_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_users_users_vue__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_users_users_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_users_users_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_buy_buy_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_buy_buy_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_buy_buy_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_admin_admin_vue__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_admin_admin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_admin_admin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_admin_Resource_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_admin_Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__views_admin_Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_admin_Instance_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_admin_Instance_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__views_admin_Instance_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_admin_Quality_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_admin_Quality_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__views_admin_Quality_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_admin_Tenant_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_admin_Tenant_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__views_admin_Tenant_vue__);










//admin






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Index',
    component: __WEBPACK_IMPORTED_MODULE_6__views_index_index_vue___default.a
  }, {
    path: '/login',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_3__views_login_login_vue___default.a
  }, {
    path: '/main',
    name: 'Main',
    component: __WEBPACK_IMPORTED_MODULE_4__views_main_main_vue___default.a
  }, {
    path: '/home',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_5__views_home_home_vue___default.a
  }, {
    path: '/users',
    name: 'Users',
    component: __WEBPACK_IMPORTED_MODULE_7__views_users_users_vue___default.a
  }, {
    path: '/buy',
    name: 'Buy',
    component: __WEBPACK_IMPORTED_MODULE_8__views_buy_buy_vue___default.a
  },

  //admin
  {
    path: '/admin',
    name: 'admin',
    component: __WEBPACK_IMPORTED_MODULE_9__views_admin_admin_vue___default.a,
    children: [{
      path: '/admin/nodes',
      name: '资源管理',
      component: __WEBPACK_IMPORTED_MODULE_10__views_admin_Resource_vue___default.a
    }, {
      path: '/admin/proc_insts',
      name: '实例管理',
      component: __WEBPACK_IMPORTED_MODULE_11__views_admin_Instance_vue___default.a
    }, {
      path: '/admin/avg_response',
      name: '质量管理',
      component: __WEBPACK_IMPORTED_MODULE_12__views_admin_Quality_vue___default.a
    }, {
      path: '/admin/users',
      name: '租户管理',
      component: __WEBPACK_IMPORTED_MODULE_13__views_admin_Tenant_vue___default.a
    }]
  }]
}));

/***/ }),
/* 78 */,
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(178)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(209),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  methods: {
    setCookie: function (c_name, value, expire) {
      var date = new Date();
      date.setSeconds(date.getSeconds() + expire);
      document.cookie = c_name + "=" + escape(value) + "; expires=" + date.toGMTString();
      console.log(document.cookie);
    },
    getCookie: function (c_name) {
      if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          let c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) c_end = document.cookie.length;
          return unescape(document.cookie.substring(c_start, c_end));
        }
      }
      return "";
    }
  }

});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			"procInsts": [{
				"procInstId": "",
				"username": "",
				"procDefId": "",
				"createTime": "",
				"status": ""
			}],
			"totalNum": ""
		};
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	}
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			"totalNum": "",
			"time": [{
				"timestamp": "",
				"avgresponse": ""
			}]
		};
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	}
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			//暂不确定展示数据
		};
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	}
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			//currentPage:1,
			tableData: [{
				"id": "1b03aff6-1ed6-44a7-98ef-06ff5f7eb721",
				"createdTimestamp": 1528382908880,
				"username": "hradmin",
				"isAdmin": true
			}]
		};
	},

	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	}
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Resource_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Instance_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Instance_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Instance_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Quality_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Quality_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Quality_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tenant_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tenant_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Tenant_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'admin',
	components: {
		Resource: __WEBPACK_IMPORTED_MODULE_0__Resource_vue___default.a,
		Instance: __WEBPACK_IMPORTED_MODULE_1__Instance_vue___default.a
	},
	methods: {
		handleSelect(key, keyPath) {
			switch (key) {
				case '1':
					this.$router.push('/admin/nodes');
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
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      access_token: "",
      userName: "",
      tableColumns_buy: [{
        title: "流程id",
        key: "definitonId"
      }, {
        title: "流程购买状态（true:已购买/false:未购买）",
        key: "isBought"
      }, {
        title: "可用操作",
        slot: "action",
        width: 150,
        align: "center"
      }],
      tableData_buy: [],
      showModal: false,
      rar: "",
      rtl: "",
      index: "",
      pageNum: 100,
      index: "",
      pageSize: 10,
      pageIndex: 1
    };
  },
  mounted() {
    let uname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["a" /* getCookie */])("username");
    this.userName = uname;
    if (uname == "") {
      this.$router.push("/");
    }
    let token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["a" /* getCookie */])("access_token");
    this.access_token = token;
    this.$http.get("http://localhost:8080/definitions").then(res => {
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
      this.$http.get(`http://localhost:8080/definitions?page=${this.pageIndex}&size=${this.pageSize}`).then(res => {
        this.pageNum = res.body.totalNum;
        this.tableData_buy = res.body.definitons;
      });
    },
    changePageSize(size) {
      this.pageSize = size;
      this.$http.get(`http://localhost:8080/definitions?page=1&size=${this.pageSize}`).then(res => {
        this.pageNum = res.body.totalNum;
        this.tableData_buy = res.body.definitons;
      });
    },
    buyclickOK_() {
      if (this.rar == "" || this.rtl == "") {
        alert("请输入rar和rtl");
      } else if (this.rar < 1 || this.rtl < 1 || this.rar > 10 || this.rtl > 10) {
        alert("rar和rtl范围为1-10");
      } else {
        let data = {
          definitionId: this.tableData_buy[this.index].definitonId,
          rar: this.rar,
          rtl: this.rtl
        };
        this.$http.post("http://localhost:8080/services", data).then(res => {
          console.log(res);
          alert("购买成功，流程slaId为" + res.body.slaId + "，流程tenantId为" + res.body.tenantId + "，rar为" + this.rar + "，rtl为" + this.rtl);
          this.showModal = false;
          this.tableData_buy[this.index].isBought = true;
        });
      }
    }
  }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			name: ''
		};
	},
	mounted() {
		let uname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["a" /* getCookie */])('username');
		this.name = uname;
		if (uname == "") {
			this.$router.push('/');
		}
	},
	methods: {
		quit() {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["b" /* delCookie */])('username');
			this.$router.push('/');
		},
		service_() {
			this.$router.replace('/buy');
		},
		users_() {
			this.$router.replace('/users');
		}
	}
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        index() {
            this.$router.replace('/');
        },
        login_() {
            this.$router.push({
                path: '/login',
                query: {
                    showLoginKey: true,
                    showRegisterKey: false
                }
            });
        },
        register_() {
            this.$router.push({
                path: '/login',
                query: {
                    showLoginKey: false,
                    showRegisterKey: true
                }
            });
        }
    }
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			username: '',
			password: '',
			newUsername: '',
			newPassword: '',
			newPasswordagain: '',
			tishi: '',
			showTishi: false,
			showLogin: '',
			showRegister: ''
		};
	},
	mounted: function () {
		this.showLogin = this.$route.query.showLoginKey;
		this.showRegister = this.$route.query.showRegisterKey;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["a" /* getCookie */])('username')) {
			this.$router.push('/home');
		}
	},
	methods: {
		login() {
			if (this.username == "" || this.password == "") {
				alert("请输入用户名或密码");
			} else {
				let data = { 'username': this.username, 'password': this.password };
				this.$http.post('http://bpmcp-core/extract/login', data).then(res => {
					console.log(res);
					if (res.body.statusCode == 200) {
						this.tishi = "登陆成功";
						this.showTishi = true;
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["c" /* setCookie */])('username', this.username, 1800);
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["c" /* setCookie */])('access_token', res.body.access_token, 1800);
						setTimeout(function () {
							this.$router.push({ path: '/home' });
						}.bind(this), 1000);
					} else {
						this.tishi = res.body.error_description;
						this.showTishi = true;
					}
				});
			}
		},
		ToRegister() {
			this.showRegister = true;
			this.showLogin = false;
		},
		ToLogin() {
			this.showRegister = false;
			this.showLogin = true;
		},
		register() {
			if (this.newUsername == "" || this.newPassword == "" || this.newPasswordagain == "") {
				alert("请输入用户名或密码");
			} else if (this.newPassword != this.newPasswordagain) {
				alert("两次密码不一致");
			} else {
				let data = { 'username': this.newUsername, 'password': this.newPassword };
				this.$http.post('http://bpmcp-core/extract/register', data).then(res => {
					console.log(res);
					if (res.body.statusCode == 201) {
						this.tishi = "注册成功";
						this.showTishi = true;
						this.username = '';
						this.password = '';
						setTimeout(function () {
							this.showRegister = false;
							this.showLogin = true;
							this.showTishi = false;
						}.bind(this), 1000);
					} else if (res.body.statusCode == 409) {
						this.tishi = res.body.errorMessage;
						this.showTishi = true;
						this.username = '';
						this.password = '';
						setTimeout(function () {
							this.showTishi = false;
						}.bind(this), 1000);
					} else if (res.body.statusCode == 500) {
						this.tishi = res.body.errorMessage;
						this.showTishi = true;
						this.username = '';
						this.password = '';
						setTimeout(function () {
							this.showTishi = false;
						}.bind(this), 1000);
					}
				});
			}
		}
	}
});

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			list: ''
		};
	},
	mounted() {
		this.$http.get('http://localhost/vueapi/index.php/Home/user/index').then(res => {
			this.list = res.data;
			console.log(res);
		});
	}
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      userName: "",
      isCollapsed: false,
      switchItem: 1,
      tableColumns: [{
        title: "工作流主键",
        key: "workflowId"
      }, {
        title: "sla主键",
        key: "slaId"
      }, {
        title: "用户名",
        key: "tenantId"
      }, {
        title: "流程定义主键",
        key: "definitionId"
      }, {
        title: "流程实例id",
        key: "instanceId"
      }, {
        title: "创建时间",
        key: "createTime"
      }, {
        title: "流程状态",
        key: "status"
      }, {
        title: "可用操作",
        slot: "action",
        width: 150,
        align: "center"
      }],
      tableData: [],
      pageNum: 100,
      inputName: "",
      URL: "",
      access_token: "",
      index: "",
      pageSize: 10,
      pageIndex: 1
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  mounted() {
    let uname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["a" /* getCookie */])("username");
    this.userName = uname;
    if (uname == "") {
      this.$router.push("/");
    }
    let token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assets_js_cookie_js__["a" /* getCookie */])("access_token");
    this.access_token = token;
    this.$http.get(`http://localhost:8080/workflows?page=${this.pageIndex}&size=${this.pageSize}`).then(res => {
      this.pageNum = res.body.totalNum;
      this.tableData = res.body.workflows;
    });
  },
  methods: {
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
      URL = "http://localhost:8080/workflows/{" + this.tableData[index].workflowId + "}/start";
      this.$http.post(URL).then(res => {
        console.log(res);
      });
    },
    stopLine(index) {
      this.index = index;
      URL = "http://localhost:8080/workflows/{" + this.tableData[index].workflowId + "}/suspend";
      this.$http.post(URL).then(res => {
        console.log(res);
      });
    },
    removeLine(index) {
      this.data6.splice(index, 1);
      this.index = index;
      URL = "http://localhost:8080/workflows/{" + this.tableData[index].workflowId + "}";
      this.$http.post(URL).then(res => {
        console.log(res);
      });
    },
    switchPage(index) {
      this.pageIndex = index;
      this.$http.get(`http://localhost:8080/workflows?page=${this.pageIndex}&size=${this.pageSize}`).then(res => {
        this.pageNum = res.body.totalNum;
        this.tableData = res.body.workflows;
      });
    },
    changePageSize(size) {
      this.pageSize = size;
      this.$http.get(`http://localhost:8080/workflows?page=1&size=${this.pageSize}`).then(res => {
        this.pageNum = res.body.totalNum;
        this.tableData = res.body.workflows;
      });
    },
    submit() {
      if (this.inputName == "") {
        alert("未输入流程实例id");
      } else {
        let data = { slaId: this.inputName };
        this.$http.post("http://localhost:8080/workflows", data).then(res => {
          console.log(res);
          alert("新建成功");
          this.switchItem = 1;
        });
      }
    }
  }
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview_dist_styles_iview_css__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_index_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_element_ui_lib_theme_chalk_index_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







//import axios from 'axios'

//admin


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_element_ui___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
//Vue.prototype.$http=axios
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_iview___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.options.emulateHTTP = true;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.options.emulateJSON = true;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 173 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 176 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 181 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(182)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(213),
  /* scopeId */
  "data-v-ae3babaa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(172)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(203),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(179)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(210),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(184)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(215),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(181)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(212),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(183)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(214),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(176)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(207),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(174)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(205),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "admin"
  }, [_c('el-container', [_c('el-header', {
    attrs: {
      "id": "head"
    }
  }, [_c('el-row', {
    attrs: {
      "id": "head_1"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('p', [_vm._v("云租户工作流服务平台")])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('p', [_vm._v("\n\t\t\t\t\t\t用户名\n\t\t\t\t\t\t"), _c('i', {
    staticClass: "el-icon-user-solid"
  })])])], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "id": "head_2"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_vm._v("您好，欢迎回到管理员中心")])], 1)], 1), _vm._v(" "), _c('el-container', [_c('el-aside', {
    attrs: {
      "width": "200px"
    }
  }, [_c('el-menu', {
    attrs: {
      "default-active": "1"
    },
    on: {
      "select": _vm.handleSelect
    }
  }, [_c('el-menu-item', {
    attrs: {
      "index": "1"
    }
  }, [_c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("资源管理 >")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2"
    }
  }, [_c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("实例管理 >")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "3"
    }
  }, [_c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("质量管理 >")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "4"
    }
  }, [_c('span', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("租户管理 >")])])], 1)], 1), _vm._v(" "), _c('el-main', [_c('router-view')], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "main"
    }
  }, [_c('el-row', {
    attrs: {
      "id": "tou"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('p', [_vm._v("实例管理")])])], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "id": "nei"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": true
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "procInstId",
      "label": "实例名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "procDefId",
      "label": "id"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "username",
      "label": "所属用户"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "status",
      "label": "实例状态"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createTime",
      "label": "创建时间"
    }
  })], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 50, 100],
      "page-size": 10,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": 50
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports={render:function (){
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "usersall"
  }, [_c('div', {
    staticClass: "utop-area"
  }, [_c('p', {
    staticClass: "utop"
  }, [_vm._v("多租户工作流服务平台 租户界面")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "white"
    }
  }, [_vm._v(_vm._s(_vm.userName))]), _vm._v(" "), _c('Avatar', {
    attrs: {
      "id": "avatar",
      "icon": "ios-person"
    }
  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "layout"
  }, [_c('Layout', {
    staticStyle: {
      "height": "100%"
    }
  }, [_c('Sider', {
    ref: "side1",
    attrs: {
      "hide-trigger": "",
      "collapsible": "",
      "collapsed-width": 78
    },
    model: {
      value: (_vm.isCollapsed),
      callback: function($$v) {
        _vm.isCollapsed = $$v
      },
      expression: "isCollapsed"
    }
  }, [_c('Menu', {
    class: _vm.menuitemClasses,
    attrs: {
      "active-name": "1-1",
      "theme": "dark",
      "width": "auto"
    }
  }, [_c('MenuItem', {
    attrs: {
      "name": "1-1"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.switchToTable($event)
      }
    }
  }, [_c('span', {
    staticClass: "iconfont icon-liucheng"
  }), _vm._v(" "), _c('span', [_vm._v("流程")])]), _vm._v(" "), _c('MenuItem', {
    attrs: {
      "name": "1-2"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.switchToForm($event)
      }
    }
  }, [_c('span', {
    staticClass: "iconfont icon-xinjian"
  }), _vm._v(" "), _c('span', [_vm._v("新建")])])], 1)], 1), _vm._v(" "), _c('Layout', [_c('Header', {
    staticClass: "layout-header-bar",
    style: ({
      padding: 0
    })
  }, [_c('Icon', {
    class: _vm.rotateIcon,
    style: ({
      margin: '0 20px'
    }),
    attrs: {
      "type": "md-menu",
      "size": "24"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.collapsedSider($event)
      }
    }
  })], 1), _vm._v(" "), _c('Content', {
    style: ({
      margin: '20px',
      background: '#fff',
      minHeight: '260px'
    })
  }, [(_vm.switchItem == 1) ? _c('div', {
    attrs: {
      "id": "table"
    }
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.tableColumns,
      "data": _vm.tableData
    },
    scopedSlots: _vm._u([{
      key: "name",
      fn: function(ref) {
        var row = ref.row;

        return [_c('strong', [_vm._v(_vm._s(row.name))])]
      }
    }, {
      key: "action",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(row.status == 'timeout') ? _c('Button', {
          staticStyle: {
            "margin-right": "5px"
          },
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.startLine(index)
            }
          }
        }, [_vm._v("启动")]) : _vm._e(), _vm._v(" "), (row.status == 'running') ? _c('Button', {
          staticStyle: {
            "margin-right": "5px"
          },
          attrs: {
            "type": "warning",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.stopLine(index)
            }
          }
        }, [_vm._v("暂停")]) : _vm._e(), _vm._v(" "), _c('Button', {
          attrs: {
            "type": "error",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.removeLine(index)
            }
          }
        }, [_vm._v("删除")])]
      }
    }], null, false, 2426118787)
  }), _vm._v(" "), _c('Page', {
    staticStyle: {
      "margin-top": "2rem"
    },
    attrs: {
      "total": _vm.pageNum,
      "show-sizer": "",
      "page-size": _vm.pageSize,
      "current": _vm.pageIndex
    },
    on: {
      "on-change": _vm.switchPage,
      "on-page-size-change": _vm.changePageSize
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.switchItem == 2) ? _c('div', {
    attrs: {
      "id": "form"
    }
  }, [_c('span', {
    staticStyle: {
      "font-size": "1.5rem",
      "font-weight": "bolder",
      "display": "block",
      "margin-bottom": "20px"
    }
  }, [_vm._v("新建BPMN流程")]), _vm._v(" "), _c('Input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "请输入流程实例id"
    },
    model: {
      value: (_vm.inputName),
      callback: function($$v) {
        _vm.inputName = $$v
      },
      expression: "inputName"
    }
  }), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('Button', {
    staticStyle: {
      "margin-right": "50px"
    },
    on: {
      "click": function () { return (this$1.inputName = ''); }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("确认")])], 1) : _vm._e()])], 1)], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "utopic"
  }, [_c('p', {
    staticClass: "utopicp"
  }, [_vm._v("欢迎使用BPMN工作流产品")])])
}]}

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "main"
    }
  }, [_c('el-row', {
    attrs: {
      "id": "tou"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('p', [_vm._v("资源列表")])])], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "id": "nei"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": true
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "资源名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "tab",
      "label": "标识"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "资源名id"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "num",
      "label": "资源数量"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "state",
      "label": "状态"
    }
  })], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 50, 100],
      "page-size": 10,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": 50
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h3', [_vm._v("所有注册用户")]), _vm._v(" "), _c('ul', _vm._l((_vm.list), function(item) {
    return _c('li', [_vm._v("\n\t\t\t" + _vm._s(item.username) + "\n\t\t")])
  }), 0)])
},staticRenderFns: []}

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "main"
    }
  }, [_c('el-row', {
    attrs: {
      "id": "tou"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('p', [_vm._v("租户列表")])])], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "id": "nei"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": true
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "id",
      "label": "用户id"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "createdTimestamp",
      "label": "注册日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "username",
      "label": "用户名"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "isAdmin",
      "label": "是否为管理员"
    }
  })], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 50, 100],
      "page-size": 10,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": 50
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "buyall"
  }, [_c('div', {
    staticClass: "btop-area"
  }, [_c('p', {
    staticClass: "btop"
  }, [_vm._v("多租户工作流服务平台 服务购买界面")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "index5"
    },
    on: {
      "click": _vm.index_
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "index6"
    },
    on: {
      "click": _vm.service_
    }
  }, [_vm._v("产品与服务")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "white"
    },
    on: {
      "click": _vm.users_
    }
  }, [_vm._v(_vm._s(_vm.userName))]), _vm._v(" "), _c('Avatar', {
    attrs: {
      "id": "avatar",
      "icon": "ios-person"
    }
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "table_buy"
    }
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.tableColumns_buy,
      "data": _vm.tableData_buy
    },
    scopedSlots: _vm._u([{
      key: "name",
      fn: function(ref) {
        var row = ref.row;

        return [_c('strong', [_vm._v(_vm._s(row.name))])]
      }
    }, {
      key: "action",
      fn: function(ref) {
        var row = ref.row;
        var index = ref.index;

        return [(row.isBought == 'false') ? _c('Button', {
          staticStyle: {
            "margin-right": "5px"
          },
          attrs: {
            "type": "primary",
            "size": "small"
          },
          on: {
            "click": function($event) {
              return _vm.openmodel(index)
            }
          }
        }, [_vm._v("购买")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('Page', {
    staticStyle: {
      "margin-top": "2rem"
    },
    attrs: {
      "total": _vm.pageNum,
      "show-sizer": "",
      "page-size": _vm.pageSize,
      "current": _vm.pageIndex
    },
    on: {
      "on-change": _vm.switchPage,
      "on-page-size-change": _vm.changePageSize
    }
  })], 1)]), _vm._v(" "), (_vm.showModal) ? _c('div', {
    staticClass: "rar_rtl"
  }, [_c('h2', [_vm._v("欢迎选购")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.rar),
      expression: "rar"
    }],
    attrs: {
      "id": "buyinput",
      "type": "number",
      "placeholder": "请输入rar"
    },
    domProps: {
      "value": (_vm.rar)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.rar = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.rtl),
      expression: "rtl"
    }],
    attrs: {
      "id": "buyinput",
      "type": "number",
      "placeholder": "请输入rtl"
    },
    domProps: {
      "value": (_vm.rtl)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.rtl = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "id": "buyclickOK"
    },
    on: {
      "click": _vm.buyclickOK_
    }
  }, [_vm._v("确定")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "buyclickESC"
    },
    on: {
      "click": function($event) {
        _vm.showModal = false
      }
    }
  }, [_vm._v("取消")])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "main"
    }
  }, [_c('el-row', {
    attrs: {
      "id": "tou"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('p', [_vm._v("平均响应时间统计")])])], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "id": "nei"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": true
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "timestamp",
      "label": "时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "avgresponse",
      "label": "平均响应时间/s"
    }
  })], 1), _vm._v(" "), _c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": [10, 20, 50, 100],
      "page-size": 10,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": 50
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "indexall"
  }, [_c('header', [_c('button', {
    attrs: {
      "id": "index1"
    },
    on: {
      "click": _vm.index
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "index2"
    },
    on: {
      "click": _vm.service
    }
  }, [_vm._v("产品与服务")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "index3"
    },
    on: {
      "click": _vm.login_
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "index4"
    },
    on: {
      "click": _vm.register_
    }
  }, [_vm._v("注册")])]), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('p', {
    staticClass: "titlep"
  }, [_vm._v("工作流云服务产品")]), _vm._v(" "), _c('p', {
    staticClass: "titlep_"
  }, [_vm._v("在线获取云资源，即点即用的工作流服务")])])
}]}

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', [_vm._v(_vm._s(_vm.msg))]), _vm._v(" "), _c('h2', [_vm._v("Essential Links")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("Ecosystem")]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://vuejs.org",
      "target": "_blank"
    }
  }, [_vm._v("Core Docs")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://forum.vuejs.org",
      "target": "_blank"
    }
  }, [_vm._v("Forum")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://gitter.im/vuejs/vue",
      "target": "_blank"
    }
  }, [_vm._v("Gitter Chat")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://twitter.com/vuejs",
      "target": "_blank"
    }
  }, [_vm._v("Twitter")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://vuejs-templates.github.io/webpack/",
      "target": "_blank"
    }
  }, [_vm._v("Docs for This Template")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "http://router.vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("vue-router")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://vuex.vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("vuex")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://vue-loader.vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("vue-loader")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/awesome-vue",
      "target": "_blank"
    }
  }, [_vm._v("awesome-vue")])])])
}]}

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loginall"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showLogin),
      expression: "showLogin"
    }],
    staticClass: "login-wrap"
  }, [_c('h2', [_vm._v("登录")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showTishi),
      expression: "showTishi"
    }]
  }, [_vm._v(_vm._s(_vm.tishi))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "id": "logininput",
      "type": "text",
      "placeholder": "请输入用户名"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "id": "logininput",
      "type": "password",
      "placeholder": "请输入密码"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "id": "login1"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.ToRegister
    }
  }, [_vm._v("没有账号？点击注册")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showRegister),
      expression: "showRegister"
    }],
    staticClass: "register-wrap"
  }, [_c('h2', [_vm._v("注册")]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showTishi),
      expression: "showTishi"
    }]
  }, [_vm._v(_vm._s(_vm.tishi))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newUsername),
      expression: "newUsername"
    }],
    attrs: {
      "id": "logininput",
      "type": "text",
      "placeholder": "请输入用户名"
    },
    domProps: {
      "value": (_vm.newUsername)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newUsername = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPassword),
      expression: "newPassword"
    }],
    attrs: {
      "id": "logininput",
      "type": "password",
      "placeholder": "请输入密码"
    },
    domProps: {
      "value": (_vm.newPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPassword = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newPasswordagain),
      expression: "newPasswordagain"
    }],
    attrs: {
      "id": "logininput",
      "type": "password",
      "placeholder": "请再次输入密码"
    },
    domProps: {
      "value": (_vm.newPasswordagain)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newPasswordagain = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "id": "login1"
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("注册")]), _vm._v(" "), _c('span', {
    on: {
      "click": _vm.ToLogin
    }
  }, [_vm._v("已有账号？点击登录")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top-area"
  }, [_c('p', {
    staticClass: "top"
  }, [_vm._v("多租户工作流服务平台")])])
}]}

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homeall"
  }, [_c('header', [_c('button', {
    attrs: {
      "id": "index1_"
    }
  }, [_vm._v("首页")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "index2_"
    },
    on: {
      "click": _vm.service_
    }
  }, [_vm._v("产品与服务")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "avatar_"
    }
  }, [_c('span', {
    staticStyle: {
      "color": "white"
    },
    on: {
      "click": _vm.users_
    }
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('Avatar', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "icon": "ios-person"
    }
  }), _vm._v(" "), _c('a', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "href": "javascript:void(0);"
    },
    on: {
      "click": _vm.quit
    }
  }, [_vm._v("注销登录")])], 1)]), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title_"
  }, [_c('p', {
    staticClass: "titlep-"
  }, [_vm._v("工作流云服务产品")]), _vm._v(" "), _c('p', {
    staticClass: "titlep_-"
  }, [_vm._v("在线获取云资源，即点即用的工作流服务")])])
}]}

/***/ }),
/* 216 */,
/* 217 */,
/* 218 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[97]);
//# sourceMappingURL=app.175028089dc7208c7e4e.js.map