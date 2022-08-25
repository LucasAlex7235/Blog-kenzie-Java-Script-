import { ApiRequest } from './api.js'

class ApiResponse {
    static async createUserResponse() {
        const nameUserInput = document.getElementById('nameInputSignup')
        const emailUserInput = document.getElementById('emailInputSignup')
        const photoUserInput = document.getElementById('photoInputSignup')
        const passUserInput = document.getElementById('passwordInputSignup')
        const registrationUser = document.getElementById("btnSignup")

        if (registrationUser) {
            registrationUser.addEventListener('click', (event) => {
                event.preventDefault()

                const data = {
                    "username": nameUserInput.value,
                    "email": emailUserInput.value,
                    "avatarUrl": photoUserInput.value,
                    "password": passUserInput.value
                }

                ApiRequest.registerUser(data)
            })
        }

    }

    static loginUserResponse() {
        const emailInput = document.getElementById('emailInput')
        const passwordInput = document.getElementById('passwordInput')
        const btnLogin = document.getElementById('btnLogin')
        const token = localStorage.getItem("@kenzieBlog:token")


        if (btnLogin) {
            btnLogin.addEventListener('click', async (event) => {
                event.preventDefault()

                const data = {
                    "email": emailInput.value,
                    "password": passwordInput.value
                }

                await ApiRequest.loginUser(data)
                //anderson_caue_galvao@jelo.com
                // Teste123
                // window.location.reload()
            })
        }
    }

    static notHasRegister() {
        const btnSignupPage = document.getElementById("handleSignup")
        const token = localStorage.getItem("@kenzieBlog:token")
        const location = window.location.href == "http://127.0.0.1:5500/src/pages/dashboard.html"

        if (btnSignupPage) {
            btnSignupPage.addEventListener("click", (event) => {
                window.location.assign('../../src/pages/signup.html')
            })
        }
        if (location && token == null || token == "undefined") {
            window.location.assign('../../index.html')
        }
    }

    static async createCards() {
        const ulDashboard = document.querySelector(".dashboard__container")
        const data = await ApiRequest.carsUsers()
         

        data.forEach(elem => {
            const cardUser = document.createElement("li")
            cardUser.classList.add("card")
            const figure = document.createElement("figure")
            const cardUserPhoto = document.createElement("img")
            const nameUser = document.createElement("h3")

            const divDescription = document.createElement("div")
            divDescription.classList.add("card__user--description")
            const description = document.createElement("p")
            const dateDay = document.createElement("span")
            const divEdit = document.createElement("div")
            divEdit.classList.add("card__user--edit")
            const buttonEdit = document.createElement("button")
            const buttonDelete = document.createElement("button")

            const buttonEditImg = document.createElement("img")
            const buttonDeleteImg = document.createElement("img")

            nameUser.innerText = elem.user.username
            description.innerText = elem.content
            dateDay.innerText = elem.createdAt
            cardUserPhoto.src = elem.user.avatarUrl
            buttonEditImg.src = "./../img/edit 1.png"
            buttonDeleteImg.src = "./../img/trash-bin 1.png"

            buttonDelete.append(buttonDeleteImg)
            buttonEdit.append(buttonEditImg)
            divEdit.append(buttonEdit, buttonDelete)
            divDescription.append(description)
            figure.append(cardUserPhoto)
            cardUser.append(figure, nameUser, divDescription, dateDay, divEdit)

            ulDashboard.append(cardUser)
        });


        const blurredBackground = document.getElementById("blurredBackground")
        const editMessage = document.getElementById("editMessage")
        const deleteMessage = document.getElementById("deleteMessage")
    }

}

ApiResponse.createUserResponse()
ApiResponse.loginUserResponse()
ApiResponse.notHasRegister()
ApiResponse.createCards()


















// const btn = () => {
//     const btnSignupPage = document.getElementById("handleSignup")
//     const btnLoginPage = document.getElementById("btnSignup")
//     const btnEntrar = document.getElementById("btnLogin")

//     if (btnSignupPage) {
//         btnSignupPage.addEventListener("click", (event) => {
//             window.location.assign('../../src/pages/signup.html')
//         })
//     }
//     // if (btnLoginPage) {

//     //     btnLoginPage.addEventListener("click", (event) => {
//     //         event.preventDefault()
//     //         console.log("oii")
//     //     })
//     // }

//     // if (btnEntrar) {

//     //     btnEntrar.addEventListener("click", (event) => {
//     //         event.preventDefault()
//     //         window.location.assign('../../src/pages/dashboard.html')
//     //     })
//     // }
// }

// // }
// btn()

