describe("Storybook/Menu", () => {
    it("Rendering all variations", () => {
      // eslint-disable-next-line no-undef
      cy.visit("iframe.html?selectedKind=Menu&selectedStory=all%20variations");
      // eslint-disable-next-line no-undef
      cy.get("#root > div > div > div").first().each((element, index) => {
        const name = `icon-button-${index}`;
        // eslint-disable-next-line no-undef
        cy.wrap(element).matchImageSnapshot(name);
      });
    });
  });
  