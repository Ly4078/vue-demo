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
    <textarea name="homes" id="homeid" cols="30" rows="4" v-model="fatherValue"></textarea>
    <button @click="handhome">父组件事件</button>
    <Child :inputName="inputName" v-on:childByValue="childByValue"></Child>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Child from '@/views/child.vue';
import { mapActions, mapState } from "vuex"; //注册 action 和 state
export default {
  name: 'home',
  data(){
    return{
      weatherKey:'c4542dd6d57f692e2ca980b962f1dea4', 
      weatheObj:{},
      fatherValue:'',
      inputName:'',
      today:{},
      userObj:{}
    }
  },
  components: {
    HelloWorld,
    Child
  },
  computed: {
    //在这里映射 store.state.count，使用方法和 computed 里的其他属性一样
    ...mapState(["count"])
  },
  methods:{
    ...mapActions(["addcount", "changeUser"]),
    handhome:function(){
      console.log('handhome:')
      this.inputName = this.fatherValue;
    },
    childByValue:function(value){
      this.fatherValue=value;
    },
    getweatherInfo:function(){
       console.log(returnCitySN);
      let city = returnCitySN.cname,_this = this;
      let _Url = "api/weather/index?cityname=武汉&key="+this.weatherKey;
      _Url=encodeURI(_Url);
      console.log("_Url:",_Url);
      this.$axios.get(_Url).then(res => {
        if(res.data.error_code == 0){
          _this.weatheObj = res.data.result;
          _this.today = res.data.result.today;
        }
      });
    }
  },
  created(){

    // 以下 接收前一页面带过来的参数值 
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

