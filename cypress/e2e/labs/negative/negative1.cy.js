//Вход с неправильными данными (Негативный сценарий1)
describe('Негативный сценарий авторизации', () => {
  it('Попытка входа с некорректными учетными данными', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации');
          cy.visit(data.login_url);

          cy.log('Ввод некорректного логина');
          cy.get('.form-input--text').type('тест');

          cy.log('Ввод некорректного пароля');
          cy.get('.form-input--password').type('неверныйТест');

          cy.log('Клик по кнопке "Войти"');
          cy.get(':nth-child(3) > .button').click();
      })
  })
})