const btn = () =>{
    const btnSignupPage = document.getElementById("handleSignup")
    const btnLoginPage = document.getElementById("btnSignup")

    if(btnSignupPage){
        btnSignupPage.addEventListener("click", (event)=>{
        window.location.assign('../../src/pages/signup.html')
    })}
    if(btnLoginPage){
        
        btnLoginPage.addEventListener("click", (event)=>{
        event.preventDefault()
        window.location.assign('../../index.html')
    })}
    

}
btn()

