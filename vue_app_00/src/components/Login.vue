<template>
  <div class="app-login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="name" class="hude"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>
    <mt-button type="primary" @click="btnLogin">登录</mt-button>
  </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
  data() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {
    btnLogin() {
      var reg = /^\w{3,8}$/;
      var reg1 = /^\d{3,8}$/;
      if (!reg.test(this.name)) {
        Toast("用户名格式错误");
        return;
      } else if (!reg1.test(this.pwd)) {
        Toast("密码格式错误");
        return;
      }
      this.axios
        .get("http://127.0.0.1:3000/login", {
          params: { name: this.name, pwd: this.pwd }
        })
        .then(res => {
          if(res.data.code==1){
            Toast("登录成功");
            setTimeout(()=>{
            this.$router.push("/shopCart");
          },3000)
          }else{
            Toast("登录失败")
          }
        });
    }
  }
};
</script>
<style scoped>
  .app-login/deep/.mint-field-core{
    border:none;
  }

</style>
<style >
  .mint-cell-text{
    color:turquoise;
  }

</style>