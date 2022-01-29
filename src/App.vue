<template>
  <div>
    <message-form @send="updateMessages"/>
    <message-list :messages="messages"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MessageForm from './components/MessageForm.vue'
import MessageList from "./components/MessageList.vue";

interface Data {
  messages: string[]
}

export default Vue.extend({
  data: (): Data => ({
    messages: []
  }),
  methods: {
    updateMessages(message: string) {
      this.messages.push(message)
    }
  },
  components: {
    MessageForm,
    MessageList
  }
});
</script>