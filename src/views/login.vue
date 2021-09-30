<template>
    login
</template>
<script>
import {onBeforeMount, onMounted} from 'vue'

export default {
  name: 'App',
  setup() {
      onBeforeMount(() => {
          // 在挂载前执行某些代码
      });
      onMounted(() => {
          // 在挂载后执行某些代码
          console.log("login mmm")
      }); 
  }
}
</script>