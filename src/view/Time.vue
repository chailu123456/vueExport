<template>
  <div class="time">
    {{timer}}
  </div>
</template>

<script>
export default {
  name: 'Time',
  data () {
    return {
      timer: 1,
      a: null
    }
  },
  mounted() {
    this.creatInterval('world')
  },
  // beforeDestroy() {
  //   console.log(666)
  //   clearInterval(this.a)
  // },
  methods:{
    creatInterval(msg) {
      let timer = setInterval(() => {
          this.timer++
      }, 1000)
      this.$once('hook:beforeDestroy', function() {
        console.log('销毁')
          clearInterval(timer)
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>