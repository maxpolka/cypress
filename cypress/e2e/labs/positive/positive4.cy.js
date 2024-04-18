
//Заявка на верификацию аккаунта студента (положительный сценарий4)
describe('авторизация', () => {
    it('Авторизация', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)
  
            cy.log('Ввод логина');
            cy.get('.form-input--text')
            .type(data.login);
  
            cy.log('Ввод пароля');
            cy.get('.form-input--password')
            .type(data.password);
  
            cy.log('Войти')
            cy.get(':nth-child(3) > .button')
            .click();

            cy.log('Пройти верификацию')
            cy.get('.message-student > .button')
            .click();

            cy.log('Выбор учреждения');
            cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
            .type('ттит') 
            .wait(1000) 

            cy.get('.search-input__item')
            .first() 
            .click(); 

            cy.log('Выбрать специальность')
            cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
            .type('21.02.06 Информационные системы обеспечения градостроительной деятельности')
            .wait(1000)

            cy.get('.search-input__item')
            .first() 
            .click(); 

            cy.log('квалификация')
            cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
            .type('Бакалавриат')

            cy.log('курс обучения')
            cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(3)')
            .click();

            cy.log('Выбор года обучения')
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
            .click();

            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
            .type('2022');

            cy.log('Выбор года обучения')

            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
            .click();

            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
            .type('2025');

            cy.log('Создать заявку')
            cy.get('.desktop-modal__content > .student-form > .button')
            .click();



        })
    })
  })