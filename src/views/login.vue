<template>
  <div class="login">
    <ul>
      <li>
        <span>账号：</span>
        <input type="text" v-model="username">
      </li>
      <li>
        <span>密码：</span>
        <input type="text" v-model="passwrod">
      </li>
    </ul>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { mapActions, mapState ,mapMutations} from "vuex"; //注册 action 和 state、mutations
export default {
  name: "login",
  data() {
    return {
      username: "",
      passwrod: ""
    };
  },
  computed: {
    //在这里映射 store.state.userInfo computed 里的其他属性一样
    ...mapState(["userInfo","count"])
  },
  methods: {
    //在这里引入 Mutations 里的方法，使用方法和 methods 里的其他方法一样
    ...mapMutations(["addcount", "changeUser"]),
    login() {
      let _this = this;
      if (!_this.username) {
        console.log("输入账号");
      } else if (!_this.passwrod) {
        console.log("输入密码");
      } else {
        let userObj = {
          name: _this.username,
          pass: _this.passwrod
        };
        _this.addcount();
        _this.changeUser(userObj);
        // 两种方式都可以实现页面跳转切换
        // 二者区别，query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，
        // 而params相当于post请求，参数不会再地址栏中显示,更安全

        _this.$router.push({ name: "home", params: userObj });
        // this.$router.push({ path: "/home", query: userObj});
      }
    }
  }
};
</script>
<style lang="less">
.login {
  li {
    list-style: none;
  }
}
</style>


