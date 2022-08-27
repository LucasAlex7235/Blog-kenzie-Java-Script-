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
                //ss@ggggggg
                // Teste123
                // window.location.reload()
            })
        }
    }

    static notHasRegister() {
        const btnSignupPage = document.getElementById("handleSignup")
        const token = localStorage.getItem("@kenzieBlog:token")
        //const location = window.location.href == "http://127.0.0.1:5500/src/pages/dashboard.html"

        if (btnSignupPage) {
            btnSignupPage.addEventListener("click", (event) => {
                window.location.assign('../../src/pages/signup.html')
            })
        }
        // if (location && token == null || token == "undefined") {
        //     window.location.assign('../../index.html')
        // }
    }

    static async createCards() {
        const ulDashboard = document.querySelector(".dashboard__container")
        const data = await ApiRequest.carsUsers()
        const token = localStorage.getItem("@kenzieBlog:User_id")

        data.forEach(elem => {
            const cardUser = document.createElement("li")
            cardUser.classList.add("card")
            cardUser.setAttribute("id", elem.id)
            const figure = document.createElement("figure")
            const cardUserPhoto = document.createElement("img")
            const nameUser = document.createElement("h3")

            const divDescription = document.createElement("div")
            divDescription.classList.add("card__user--description")
            const description = document.createElement("p")
            const dateDay = document.createElement("span")
            const divEdit = document.createElement("div")
            divEdit.classList.add("card__user--edit")

            if (elem.user.id != token) {
                divEdit.classList.add("hiden")
            }

            const buttonEdit = document.createElement("button")
            const buttonDelete = document.createElement("button")

            const buttonEditImg = document.createElement("img")

            buttonEditImg.classList.add("edit")
            const buttonDeleteImg = document.createElement("img")
            buttonDeleteImg.classList.add("delete")

            nameUser.innerText = elem.user.username
            description.innerText = elem.content
            dateDay.innerText = elem.createdAt.split("").splice(0,10).join("").split("-").reverse().join("/")
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

    static postUser() {
        const post = document.getElementById("postsUser")
        const postDesktop = document.getElementById("postsUserDesktop")
        const inputPost = document.getElementById("sendMessage")

        if (post || postDesktop) {
            post.addEventListener("click", (event) => {
                event.preventDefault()
 
                const data = {
                    "content": inputPost.value
                }

                ApiRequest.newPostUser(data)

            })

            postDesktop.addEventListener("click", (event) => {
                event.preventDefault()

                const data = {
                    "content": inputPost.value
                }

                ApiRequest.newPostUser(data)

            })
        }
    }

    static async editPostUser() {
        const data = await ApiRequest.carsUsers()

        const edit = document.querySelectorAll(".edit")
        const editField = document.getElementById("editMessage")
        const editFieldInput = document.getElementById("editMessageInput")
        const editFieldSubmit = document.getElementById("submit")

        const delet = document.querySelectorAll(".delete")
        const deletField = document.getElementById("deleteMessage")
        const deletFieldDelete = document.getElementById("delete")
        
        const blurredBackground = document.getElementById("blurredBackground")
        


        if (edit) {
            edit.forEach(elem => {
                elem.addEventListener("click", (event) => {
                    data.forEach(element => {
                        if (elem.parentElement.parentElement.parentElement.id == element.id) {
                            editField.classList.remove("hiden")
                            blurredBackground.classList.remove("hiden")


                            editFieldSubmit.addEventListener("click", (event) => {
                                const data = {
                                    "content": editFieldInput.value
                                }

                                ApiRequest.editNewPost(data, element.id)
                            })

                        }
                    })

                })
            })
        }


        if (delet) {
            delet.forEach(elem => {

                elem.addEventListener("click", (event) => {
                    data.forEach(element => {
                        if (elem.parentElement.parentElement.parentElement.id == element.id) {
                            deletField.classList.remove("hiden")
                            blurredBackground.classList.remove("hiden")


                            deletFieldDelete.addEventListener("click", (event) => {
                                ApiRequest.deletePostUser(element.id)
                            })

                        }
                    })

                })
            })
        }

    }

    static exitUser() {
        const exit = document.getElementById("exit")

        if (exit) {
            exit.addEventListener("click", () => {
                window.location.assign('../../index.html')
            })
        }

    }

    static async photoAndName() {
        const photo = document.getElementById("photoUser")
        const name = document.getElementById("nameUser")
        const token = localStorage.getItem("@kenzieBlog:User_id")
        const data = await ApiRequest.newPhotoAndName(token)
       
        if(photo){
            photo.src = data.avatarUrl
            name.innerText = data.username
        }
    }

    static deletPost () {
        
    }

}

ApiResponse.createUserResponse()
ApiResponse.loginUserResponse()
ApiResponse.notHasRegister()
ApiResponse.createCards()
ApiResponse.postUser()
ApiResponse.editPostUser()
ApiResponse.exitUser()
ApiResponse.photoAndName()
ApiResponse.deletPost()















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

