
//Сетевой город с корректными данными (положительный сценарий2)
describe('Сетевой город', () => {
  it('Проверка сетевого города', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.login_url);

          cy.log('Проверка отображения кнопки "Сетевой город"');
          cy.get('.button-login__network-city-desktop')
              .click();

          cy.log('Проверка отображения сетевого города');
          cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button')
              .click();
      })
  })
})