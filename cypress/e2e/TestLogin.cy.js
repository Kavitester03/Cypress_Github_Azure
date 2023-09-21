import Admin from "../pageobjects/AdminPage";
import Login from "../pageobjects/LoginPage"
describe('pom', ()=>{
    it('TC01_LoginTest',()=>{
       // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      

        cy.fixture('testdata').then((data)=>{
            const url=data.testurl;
            cy.visit(url);
            const ln=new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password),
            ln.clickSubmit();
            ln.verifyLogin();
        })
        
        
    })

})