<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    messages: {
      type: Object as PropType<string[]>
    }
  }
})
</script>