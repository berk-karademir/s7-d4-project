
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

cy.get('[data-cy="submit"]').click()
*/


//  Test için erdem.guntay@wit.com.tr adresini 9fxIH0GXesEwH_I şifresini kullanabilirsin.
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})



  beforeEach(() => {
    // connect url in every test
    cy.visit("http://localhost:5173");
  })

  

describe("1-) Başarılı form doldurulduğunda submit edebiliyorum:", () => {
  
  it("success sayfasını açabiliyorum.", () => {
    
    cy.get('[data-cy="email"]').type("erdem.guntay@wit.com.tr")
    cy.get('[data-cy="password"]').type("9fxIH0GXesEwH_I")
    cy.get('[data-cy="terms"]').click()
    //  cy.contains("I agree").click();
    cy.get('[data-cy="submit"]').click()

    
  });
  it("email yanlış girdim:", () => {
    cy.get('[data-cy="email"]').type("asdasdasdads")
    cy.get('[data-cy="error"]').should('have.length', 1)
    cy.get('[data-cy="error"]').contains(/please enter/i)
    // cy.contains('Please enter a valid email address').should('be.visible');
    // cy.get('h1').should('contain', 'jane.lane')
  });
})


describe ("Success testler:", () => {
  it ("success", () => {
    cy.get('[data-cy="email"]').type("erdem.guntay@wit.com.tr")
    cy.get('[data-cy="password"]').type("9fxIH0GXesEwH_I")
    cy.get('[data-cy="terms"]').check()
    cy.get('[data-cy="submit"]').click()
    cy.url().should("contain", "/main")
  })
})
//  login olursa Success'a at.
/*

b) Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.

email yanlış girdim:

ekranda 1 tane hata mesajı var
ekranda doğru hata mesajı var
buton disabled durumda
email ve password yanlış

ekranda 2 tane hata mesajı var
ekranda password hata mesajı var
email ve password doğru ama kuralları kabul etmedim.

buton disabled mı */
// AAA 
// ARRANGE -> visit 
//- ACT  -> geçersiz email yazdır
//- ASSERT  -> "1" hata mesajı
 


  