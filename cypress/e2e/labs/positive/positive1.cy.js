//Авторизация с правильными данными (положительный сценарий1)
describe('авторизация', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)
  
            cy.log('Ввод логина');
           cy.get('.form-input--text')
           .type(data.login);
  
           cy.log('Ввод пароля');
          cy.get('.form-input--password')
          .type(data.password);
  
            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
            .click();
        })
    })
  })