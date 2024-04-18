
//Проверка откликов (положительный сценарий7)
describe('Проверка откликов', () => {
  it('Кабинет', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.login_url)

          cy.log('Ввод логина');
          cy.get('.form-input--text')
              .type(data.login2)

          cy.log('Ввод пароля');
          cy.get('.form-input--password')
              .type(data.password)

          cy.log('Войти');
          cy.get(':nth-child(3) > .button')
              .click()

          cy.log('Отклики')
          cy.get(':nth-child(4) > .menu-item__item-name')
              .click()

          cy.log('На рассмотрении')
          cy.get(':nth-child(4) > .menu-item__item-name')
              .click()

          cy.log('Одобренны')
          cy.get(':nth-child(3) > .navigation-item__title')
              .click()

          cy.log('Отклонены')
          cy.get(':nth-child(4) > .navigation-item__title')
              .click()

          cy.log('Открытие выбора')
          cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
              .click({ force: true })

          cy.log('вакансии')
          cy.get('.form-select__items > :nth-child(2)')
              .click()
              .wait(2000)

          cy.log('Открытие выбора')
          cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
              .click({ force: true })


          cy.log('Потребности')
          cy.get('.form-select__items > :nth-child(3)')
              .click()
              .wait(2000)

          cy.log('Открытие выбора')
          cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
              .click({ force: true })

          cy.log('Стажировка')
          cy.get('.form-select__items > :nth-child(4)')
              .click()
              .wait(2000)

      })
  })
})