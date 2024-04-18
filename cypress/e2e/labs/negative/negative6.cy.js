
// Регистрация (негативный сценари6)
describe('Регистрация', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)


            cy.log('Регистрация');
            cy.get('[href="/registration"] > .button')
                .click();

            cy.log('Имя');
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
                .type('Иванов')

            cy.log('Email');
            cy.get('.form-input--email')
                .type('maximivanov@gmail.com')

            cy.log('Пароль');
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
                .type('404')

            cy.log('Пароль');
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
                .type('404')
        })
    })
})