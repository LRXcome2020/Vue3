<template>
   <a-button @click="add" type="primary">
    点我加{{ count }}
  </a-button>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    const count = ref(0); //声明简单的数据类类型
    const state = reactive({ //声明比较复杂的数据类型
        a:0
    });
    const add = () => {
      count.value += 1
    }
    const add2 =(type) =>{
     state[type]+= 1
    }
    return {
      add,
      count,
      state,
      add2
    }
  }
}
</script>
