describe("Creating a message", () => {
  it("Displays the message in the list", () => {
    // User visits the site
    cy.visit("/")

    // They enter a new message
    cy.get("[data-test='messageText']").type("Hello everybody, how are we doing?")

    // They hit the send button
    cy.get("[data-test='sendButton']").click()

    // The message field gets emptied out
    cy.get("[data-test='messageText']").should("have.value", "")

    // The new message appears on screen
    cy.contains("Hello everybody, how are we doing?")
  })
})