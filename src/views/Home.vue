<template>
  <div class="home">
    <div class="home_top">
      <img alt="Vue logo" src="../assets/logo.png">
      <span>欢迎你,{{userObj.name}},今天是{{today.date_y}},{{today.week}},{{today.city}}今天天气{{today.weather}}温度{{today.temperature}},{{today.dressing_advice}}</span>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapState } from "vuex"; //注册 action 和 state
export default {
  name: 'home',
  data(){
    return{
      weatherKey:'c4542dd6d57f692e2ca980b962f1dea4', 
      weatheObj:{},
      today:{},
      userObj:{}
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    //在这里映射 store.state.count，使用方法和 computed 里的其他属性一样
    ...mapState(["count"])
  },
  methods:{
    ...mapActions(["addcount", "changeUser"]),
    getweatherInfo:function(){
       console.log(returnCitySN);
      let city = returnCitySN.cname,_this = this;
      this.$axios.get("api/weather/index?cityname=武汉&key="+this.weatherKey,).then(res => {
        if(res.data.error_code == 0){
          _this.weatheObj = res.data.result;
          _this.today = res.data.result.today;
        }
      });
    }
  },
  created(){

    // 以下 接受前一页面带过来的参数值 
    //  this.$route.query
    //  this.$route.params


    if(Object.keys(this.$route.query).length>0){  //判断query中是否有值 
      this.userObj=this.$route.query;
    }else if(Object.keys(this.$route.params).length>0){//判断params中是否有值 
      this.userObj=this.$route.params; 
    }
    this.getweatherInfo();
  }
}
</script>
<style lang="less">
  .home{
    .home_top{
      float: left;
      img{
        width: 50px;
        height: 50px;
      }
    }
    
  }
</style>

