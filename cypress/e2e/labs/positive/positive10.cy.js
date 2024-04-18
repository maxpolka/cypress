
//Просмотр вакансий в архиве (положительный сценарий10)
describe('авторизация', () => {
    it('Просмотр вакансий в архиве ', () => {
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

          cy.log('Вход в архив')
          .wait(1000)
          cy.get('[href="/archive/requests"] > .header__label')
          .click()

          cy.log("Перейти в вакансии")
          cy.get(':nth-child(3) > .menu-item__item-name')
          .click()

          })
        })
      })