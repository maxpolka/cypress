
//Верификация (негативный сценарий4)
describe('Верификации', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)

            cy.log('Ввод некорректного логина');
            cy.get('.form-input--text')
                .type(data.login4)

            cy.log('Ввод некорректного пароля');
            cy.get('.form-input--password')
                .type(data.password4)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()

            cy.log('Верификация');
            cy.get('.message-student > .button')
                .click()

            cy.log('Выбор учреждения');
            cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
                .type('ттит')
                .wait(2000)

            cy.get('.search-input__item')
                .first()
                .click();

            cy.log('Выбрать специальность');
            cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
                .type('11.02.08 Средства связи с подвижными объектам')
                .wait(2000)

            cy.get('.search-input__item')
                .first()
                .click();

            cy.log('Квалификация');
            cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
                .type('Бакалавриат')

            cy.log('Курс');
            cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(3)')
                .click();

            cy.log('Год начала обучения')
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
                .type('2022')

            cy.log('Год начала обучения')
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
                .type('2034')


        })
    })
})