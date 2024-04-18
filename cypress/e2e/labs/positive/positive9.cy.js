
//Посмотреть уведомления (положительный сценарий9)
describe('Уведомления', () => {
    it('None-existent login test', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.login_url)

        cy.log('Ввод логина');
         cy.get('.form-input--text')
         .type(data.login)

        cy.log('Ввод пароля');
        cy.get('.form-input--password')
        .type(data.password);

          cy.log('Клик по кнопке "Войти"')
          cy.get(':nth-child(3) > .button')
          .click()
          .wait(1000)

          cy.log('Вход в уведомления')
          .wait(1000)
          cy.get('.router-link-active > .header__label')
          .click()

          cy.log("Посмотреть подробности")
          cy.get(':nth-child(1) > .notification-list-item > .button')
          .click()

          })
        })
      })