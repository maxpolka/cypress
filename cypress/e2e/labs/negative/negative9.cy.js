
//Заполнение управления над косвенными полями (Негативный сценарий9)
describe('Заполнение управления над косвенными полями', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)

            cy.log('Ввод логина');
            cy.get('.form-input--text')
                .type(data.login3)

            cy.log('Ввод пароля');
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()

            cy.get(':nth-child(4) > .menu-item__item-name')
                .click()

            cy.get('.group-forms__custom-fields > .base-card > .form > .form__buttons > .button')
                .click()

            cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > .labels > .labels__wrapper > :nth-child(1) > .form-control--responsive > .form-input--text')
                .type('404')
        })
    })
})