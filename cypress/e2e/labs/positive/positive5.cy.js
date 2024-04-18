

//Отчет по профориентационной деятельности (положительный сценарий5)
describe('авторизация', () => {
    it('Авторизация', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)
  
            cy.log('Ввод логина');
            cy.get('.form-input--text')
           .type(data.login3);
  
           cy.log('Ввод пароля');
           cy.get('.form-input--password')
          .type(data.password);
  
            cy.log('Клик по кнопке "Войти"')
            cy.get('.form__buttons > :nth-child(3)')
            .click();

            cy.log('Переход на список студентов')
            cy.get(':nth-child(5) > .menu-item__item-name')
            .click();

            cy.log('переход на студента')
            cy.get(':nth-child(1) > .responses-list-item__content-company > .responses-list-item__about > .responses-list-item__text > .responses-list-item__title')
            .click();

          })
        })
      })
