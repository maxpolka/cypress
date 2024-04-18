//Сетевой город с некоректными данными (Негативный сценарий2)
describe('Сетевой город', () => {
    it('Проверка сетевого города', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации');
            cy.visit(data.login_url);
  
            cy.log('Проверка отображения кнопки "Сетевой город"');
            cy.get('.button-login__network-city-desktop')
                .click();
  
            cy.log('Ввод некорректного логина');
            cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
                .type('неверныйлогин');
  
            cy.log('Ввод некорректного пароля');
            cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
                .type('неверныйпароль');
  
  
            cy.log('Проверка отображения сетевого города');
            cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button > .button')
                .click();
        });
    });
  });