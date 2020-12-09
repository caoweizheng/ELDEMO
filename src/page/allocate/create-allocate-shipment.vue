<template>
  <div>
    <app-steps class="m-b-20 bg-w p-v-20"></app-steps>
    <basic-info class="bg-w p-20"></basic-info>
  </div>

</template>

<script>
import basicInfo from "./basic-info";
export default {
  name: 'createAllocateShipment',
  components:{
    basicInfo
  }
}
</script>
