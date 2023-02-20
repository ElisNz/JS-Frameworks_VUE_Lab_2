
<script>

export default {
  props: ['name', 'temperature'],
  }

</script>

<template>
  <div id="display">
    <div><h2>The current temperature in {{name}} is:</h2></div>
    <br>
    <div>
      <h2>{{temperature}}°C</h2>
    </div>
  </div>
  
</template>

<style scoped>
  

  #display{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 20px;
  }
</style>