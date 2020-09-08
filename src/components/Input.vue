<template>
  <div class="Input">
    <input :value="currentValue" type="text">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props:{
    currentValue:{
      type: String,
      default: 'yyyyyyy'
    }
  },
  data() {
    return {
    
    }
  }
}
</script>

<style>

</style>
