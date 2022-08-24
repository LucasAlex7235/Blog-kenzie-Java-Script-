const btn = () =>{
    const btnSignupPage = document.getElementById("handleSignup")
    const btnLoginPage = document.getElementById("btnSignup")
    const btnEntrar = document.getElementById("btnLogin")

    if(btnSignupPage){
        btnSignupPage.addEventListener("click", (event)=>{
        window.location.assign('../../src/pages/signup.html')
    })}
    if(btnLoginPage){
        
        btnLoginPage.addEventListener("click", (event)=>{
        event.preventDefault()
        window.location.assign('../../index.html')
    })}

    if(btnEntrar){
        
        btnEntrar.addEventListener("click", (event)=>{
        event.preventDefault()
        window.location.assign('../../src/pages/dashboard.html')
    })}
    

}
btn()

