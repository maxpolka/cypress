//Вакансии и создании вакансии (положительный сценарий3)
describe('Вакансии', () => {
  it('Вход', () => {
      cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.login_url)

            cy.log('Ввод логина');
            cy.get('.form-input--text')
              .type(data.login1)

            cy.log('Ввод пароля');
            cy.get('.form-input--password')
              .type(data.password)

            cy.log('Клик по кнопке "Войти"');
            cy.get('.form__buttons > :nth-child(3)')
              .click();

            cy.log('Переход по кнопке вакансии');
            cy.get(':nth-child(7) > .menu-item__item-name')
              .click();

            cy.log('Переход к созданию вакансии')
            cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
            .click();

            cy.log('Вписываем название вакансии');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
            .type('Программист', {force: true});

            cy.log('Выбор зп')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__input')
            .click();

            cy.log('Тип занятости')
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
            .click();
            cy.get('.form-select__items > :nth-child(2)')
            .click();

            cy.log('Граффик работы');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(3) > .radio-component__input')
            .click();

            cy.log('Описание граффика');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(1) > .radio-component__input')
            .click();

            cy.log('Требования');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
            .type('Знания новых языков программировния', {force: true});

            cy.log('Обязанности');
            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
            .type('Делать сайты', {force: true});

            cy.log('Подтвердить');
            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
            .click({force: true }); 
      })
  })
})