
//Отклик на вакансию (положительный сценарий8)
describe('авторизация', () => {
    it('Авторизация', () => {
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

          cy.log('Вход в стажировку')
          .wait(1000)
          cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label')
          .click()

          cy.log("Узнать подробнее")
          cy.get(':nth-child(1) > .header__nav > [href="/internships"] > .header__label')
          .click()

          cy.log('Откликнуться')
          cy.get('.card-main__button-flag')
          .click()

          })
        })
      })