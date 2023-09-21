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

    it('TC02_AdminFunction',()=>{
              
          cy.fixture('testdata').then((data)=>{
             const url=data.testurl;
             cy.visit(url);
             const ln=new Login();
             ln.setUserName(data.username);
             ln.setPassword(data.password),
             ln.clickSubmit();
             const an=new Admin();
             an.clickAdminMenu();
             an.verifyAdminHeading();
             an.clickAdminAddButton();
             an.selectUserRole();
             an.setEmpName();
             an.selectStatus();
             an.setUserName();
             an.setPassword();
             an.setConfirmPassword();
             an.clickSave();
             an.verifyEnteredUser();


         })
         
         
     })
})