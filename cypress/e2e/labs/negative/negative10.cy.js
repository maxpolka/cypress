
//Поиск и фильтрация (Негативный сценарий9)
describe('Поиск и фильтрация', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)

            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label')
                .click()

            cy.get('.form-input--text')
                .type('404', { force: true })

            cy.get(':nth-child(2) > .radio-component__input')
                .click()

            cy.get(':nth-child(3) > .radio-component__input')
                .click()

            cy.wait(4000)
            cy.get('div.search-input__field > .button')
                .click()


        })
    })
})