import { mount } from '@vue/test-utils'
import MessageForm from '@/components/MessageForm.vue'

describe("MessageForm", () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(MessageForm)
  })

  describe("Hitting the send button", () => {
    beforeEach(() => {
      wrapper.find("[data-test='messageText']").setValue("A different message")

      wrapper.find("[data-test='sendButton']").trigger("click")
    })

    it("Clears the text field", () => {
      const { element } = wrapper.find("[data-test='messageText']")

      expect(element.value).toEqual("")
    })

    it("Emits the send event", () => {
      expect(wrapper.emitted().send[0]).toEqual(["A different message"])
    })
  })
})