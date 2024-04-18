
//Ссылка (негативный сценарий7)
describe('Ссылка', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)

            cy.log('Ввод корректного логина');
            cy.get('.form-input--text')
                .type(data.login2)

            cy.log('Ввод корректного пароля');
            cy.get('.form-input--password')
                .type(data.password4)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()

            cy.get(':nth-child(2) > .menu-item__item-name')
                .click()

            cy.get('.base-card > .form > .form__buttons > .button')
                .click()

            cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > .labels > .labels__wrapper > .label > .form-control--responsive > .form-input--text')
                .type('404')
        })
    })
})
