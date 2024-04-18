//смена аватара (негативный сценарий8)
describe('Смена аватара', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)

            cy.log('Ввод логина');
            cy.get('.form-input--text')
                .type(data.login2)

            cy.log('Ввод пароля');
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button')
                .click()

            cy.get(':nth-child(2) > .menu-item__item-name')
                .click()

            cy.get('.base-card.profile-forms__form > .button')
                .click()
        })
    })
})
