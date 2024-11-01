
/*

VISIT URL
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
  })
})

FIND
describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
}) 

FIND & CLICK ON IT
describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})


ASSERTION
describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})


PROJECT DIRECTIONS

a) Başarılı form doldurulduğunda submit edebiliyorum:

success sayfasını açabiliyorum.
b) Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.

email yanlış girdim:

ekranda 1 tane hata mesajı var
ekranda doğru hata mesajı var
buton disabled durumda
email ve password yanlış

ekranda 2 tane hata mesajı var
ekranda password hata mesajı var
email ve password doğru ama kuralları kabul etmedim.

buton disabled mı

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

... cy.get('[data-cy="submit"]').click()
*/
//  Test için erdem.guntay@wit.com.tr adresini 9fxIH0GXesEwH_I şifresini kullanabilirsin.
describe("1-) Başarılı form doldurulduğunda submit edebiliyorum:", () => {
  it("success sayfasını açabiliyorum.", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="email"]').type("erdem.guntay@wit.com.tr")
    cy.get('[data-cy="password"]').type("9fxIH0GXesEwH_I")
    cy.get('[data-cy="terms"]').click()
    //  cy.contains("I agree").click();
    cy.get('[data-cy="submit"]').click()
  });
})

describe("2-) Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.", () => {
  it("email yanlış girdim:", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="email"]').should('contain', 'asd')
    cy.get('[data-cy="password"]').should('contain', 'asd')
    // cy.get('h1').should('contain', 'jane.lane')
  });
})

  