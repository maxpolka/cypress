
//Создание вакансий (Негативный сценарий3)
describe('Создание вакансии', () => {
  it('Должен завершиться неуспешно', () => {
    cy.fixture('cypressTest').then(data => {
      
      cy.visit(data.login_url);

      cy.log('Ввод логина');
      cy.get('.form-input--text')
          .type(data.login1);
      cy.log('Ввод пароля');
      cy.get('.form-input--password')
          .type(data.password);

          cy.log('вход');
          cy.get('.form__buttons > :nth-child(3)')
              .click();

          cy.log('Переход к созданию вакансии')
          cy.get(':nth-child(7) > .menu-item__item-name')
              .click()
          .wait(200)

          cy.log('Переход к созданию вакансии')
          cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
              .click()

          cy.log('Подтвердить');
          cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
              .click({ force: true })
    });
  });
});