
//Смена имени пользователя (негативный сценарий5)
describe('Смена имени пользователя', () => {
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

            cy.log('Профиль');
            cy.get(':nth-child(2) > .menu-item__item-name')
                .click()

            cy.log('Имя')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text')
                .type('Иван')

            cy.log('Фамилия')
            cy.get(':nth-child(2) > .form-control--max > .form-input--text')
                .clear('Смирнов')

            cy.log('Отчество')
            cy.get(':nth-child(2) > :nth-child(1) > .form-control--max > .form-input--text')
                .type('404')

            cy.log('Email')
            cy.get('.form-input--email')
                .type('gmail.ijwsnjwhw')

            cy.get('.profile-forms > .form.edit-form > .form__buttons > .button')
                .click()
        })
    })
})