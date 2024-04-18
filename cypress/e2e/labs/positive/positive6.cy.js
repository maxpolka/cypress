
//Потребности (положительный сценарий6)
describe('Потребности', () => {
  it('Протребности', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.login_url)

          cy.log('Ввод некорректного логина');
          cy.get('.form-input--text')
              .type(data.login1)

          cy.log('Ввод некорректного пароля');
          cy.get('.form-input--password')
              .type(data.password)

          cy.log('Клик по кнопке "Войти"');
          cy.get('.form__buttons > :nth-child(3)')
              .click();

          cy.log('Переход по кнопке вакансии');
          cy.get(':nth-child(6) > .menu-item__item-name')
              .click();

          cy.log('Переход к создании потребности');
          cy.get('.needs-block__filters-wrapper > .button')
              .click();
          
          cy.log('Вписываем название потребности');
          cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
              .type('Кладовщик', {force: true});
    
          cy.log('Заработная плата')
          cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__label')
              .click();
      
          cy.log('Обязанности')
          cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
              .type('кладовщик');

          cy.log('Требования')
          cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
              .type('Уметь все делать');

          cy.log('Тип занятости')
          cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-select > :nth-child(2) > .form-select__selected')
              .click();
          cy.get('.form-select__items > :nth-child(3)')
              .click({force: true });
             
          cy.log('Опубликовать')
          cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
              .click({force: true });

            })
          })
       })