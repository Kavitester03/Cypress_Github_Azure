class Admin
{
    admin_menu="//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a";
    admin_heading="//*[@id='app']/div[1]/div[1]/header/div[1]/div[1]/span/h6[1]";
    admin_addbutton="//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button";
    admin_userrole_dropdown="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]/i";
    admin_empname="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input";
    admin_status="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]/i";
    admin_username="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input";
    admin_password="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input"
    admin_confirmpassword="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input";
    admin_savebutton="//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]"
    admin_usertable="//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div"

    clickAdminMenu()
    {
        cy.xpath(this.admin_menu).click();
    }

    verifyAdminHeading()
    {
        cy.xpath(this.admin_heading).should('have.text','Admin');

    }

    clickAdminAddButton()
    {
        cy.xpath(this.admin_addbutton).click();
    }

    selectUserRole()
    {
        cy.xpath(this.admin_userrole_dropdown).click();
        cy.get('body').type('{downarrow}').type('{enter}');
       // cy.xpath(this.admin_userrole_dropdown).select('ESS');
    }

    setEmpName(empname)
    {
        cy.xpath(this.admin_empname).type('a');
        cy.wait(5000); // Wait for 4 seconds
        cy.get('body').type('{downarrow}').type('{enter}'); 
    }

    selectStatus()
    {
        cy.xpath(this.admin_status).click();
        cy.get('body').type('{downarrow}').type('{enter}');
    }

    setUserName(username)
    {
        cy.xpath(this.admin_username).type('VWTestUser_kavi03');
    }

    setPassword(password)
    {
        cy.xpath(this.admin_password).type('Testing123');
    }

    setConfirmPassword(confirmpassword)
    {
        cy.xpath(this.admin_confirmpassword).type('Testing123');
    }

    clickSave()
    {
        cy.xpath(this.admin_savebutton).click();
    }

    verifyEnteredUser()
    {
        //cy.xpath(this.admin_usertable,{ timeout: 10000 }).contains('VW_TestUser_kavi').should('exist');
        cy.xpath(this.admin_usertable, { timeout: 10000 }).invoke('text').should('include', 'VWTestUser_kavi03');

    }
}
export default Admin;