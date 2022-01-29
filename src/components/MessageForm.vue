<template>
  <div>
    <input type="text" v-model="input" data-test="messageText" />
    <button @click="handleSend" data-test="sendButton">Send</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    input: "",
  }),
  methods: {
    handleSend() {
      this.$emit("send", this.input)
      this.input = "";
    },
  },
});
</script>