<template>
    <div class="child">
        <textarea name="childs" id="childid" cols="30" rows="3" v-model="childInput"></textarea>
        <button @click="handchild">子组件按钮</button>
    </div>
</template>
<script>
  // 引入公共的bug，来做为中间传达的工具
import Bus from '../assets/bus.js'
export default {
    name:'child',
    data(){
        return{
            childInput:''
        }
    },
    props: {
      inputName: String,
      required: true
    },
    watch:{
        inputName:function(){
            this.childInput=this.inputName
        }
    },
    methods:{
        handchild:function(){
            console.log('handchild')
            this.$emit('childByValue', this.childInput);//向父组件发消息
            Bus.$emit('val', this.childInput)//向兄弟组件发消息
        }
    }
}
</script>

