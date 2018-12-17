<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import { mapActions, mapState , mapMutations} from "vuex"; //注册 action 和 state、mutations
export default {
  name:'about',
  data(){
    return{
      msg:'this is an about page'
    }
  },
  computed: {
    //在这里映射 store.state.userInfo computed 里的其他属性一样
    ...mapState(["userInfo","count"])
  },
  methods:{
     //在这里引入 Mutations 里的方法，使用方法和 methods 里的其他方法一样
    ...mapMutations(["addcount", "changeUser"]),//获取store中的值 
    showinfo:function(){
      console.log('showinfo')
      console.log("count:",this.count)//使用获取到storek中的值 
      console.log("userInfo:",this.userInfo)
    }
  },
  created(){
    this.showinfo();
  }
}
</script>

