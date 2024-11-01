
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
/*
describe('Form Doldurma Testleri', () => {
  beforeEach(() => {
    // Testler başlamadan önce localhost'ta form sayfasına git
    cy.visit('http://localhost:5173/'); // Uygulamanızın çalıştığı portu belirtin
  });

  it('Başarılı form doldurulduğunda success sayfası açılıyor', () => {
    cy.get('#email').type('test@example.com'); // email alanına doğru bir email yaz
    cy.get('#password').type('correctpassword'); // password alanına doğru bir şifre yaz
    cy.get('#terms').check(); // Kullanım koşullarını kabul et
    
    cy.get('#submit').click(); // Gönder butonuna tıkla
    cy.url().should('include', '/success'); // success sayfasının açıldığını kontrol et
  });

  it('Hatalı email girildiğinde doğru hata mesajı görünüyor ve buton disabled kalıyor', () => {
    cy.get('#email').type('wrong-email'); // Hatalı bir email gir
    cy.get('#submit').should('be.disabled'); // Gönder butonunun disabled olduğunu kontrol et
    cy.get('.error-message').should('have.length', 1); // Sadece 1 hata mesajı var mı kontrol et
    cy.contains('Lütfen geçerli bir email adresi girin'); // Beklenen hata mesajının doğru olduğunu kontrol et
  });

  it('Email ve password yanlış girildiğinde iki hata mesajı görüntüleniyor', () => {
    cy.get('#email').type('wrong-email'); // Hatalı bir email gir
    cy.get('#password').type('short'); // Hatalı bir şifre gir
    cy.get('#submit').should('be.disabled'); // Gönder butonunun disabled olduğunu kontrol et
    cy.get('.error-message').should('have.length', 2); // İki hata mesajı var mı kontrol et
    cy.contains('Lütfen geçerli bir email adresi girin'); // Email için hata mesajını kontrol et
    cy.contains('Şifre en az 8 karakter olmalıdır'); // Şifre için hata mesajını kontrol et
  });

  it('Email ve password doğru ama kurallar kabul edilmediyse buton disabled durumda kalıyor', () => {
    cy.get('#email').type('test@example.com'); // Doğru email gir
    cy.get('#password').type('correctpassword'); // Doğru şifre gir
    cy.get('#submit').should('be.disabled'); // Kurallar kabul edilmediği için butonun disabled olduğunu kontrol et
  });
}); */
