class Login
{
    txtUserName="//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input";
    txtPassword="//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input";
    btnSubmit="//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button";
    lblmsg="//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[8]/a";

    setUserName(username)
    {
        cy.xpath(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.xpath(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.xpath(this.btnSubmit).click();
    }

    verifyLogin()
    {
        cy.xpath(this.lblmsg).should('have.text','Dashboard');
    }
}
export default Login;