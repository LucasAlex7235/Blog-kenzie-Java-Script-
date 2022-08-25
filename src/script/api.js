export class ApiRequest {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async registerUser(body) {
        const userRegister = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign('../../index.html')
        })
        .catch(err => console.log(err))

        return userRegister
    }

    static async loginUser(body) {
        const loginUser = await fetch(`${this.baseUrl}/users/login`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieBlog:token", res.token)
            localStorage.setItem("@kenzieBlog:User_id", res.userId)
            if(localStorage.getItem("@kenzieBlog:token") != "undefined")
            window.location.assign('../../src/pages/dashboard.html')
        })
        .catch(err => console.log(err))
        
        
    }

    static async carsUsers() {
        const baseUrl = await fetch(`${this.baseUrl}/posts?page=1`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log(err))

        return baseUrl
    }
}

// static async login(body){
    //     // const userLogin = await fetch(`${this.baseUrl}/users/register`, {
    //     //     method: "POST",
    //     //     headers: this.headers,
    //     //     body: JSON.stringify(body)
    //     // })
    //     // .then(res => res.json())
    //     // .then(res => {
    //     //     localStorage.setItem("kenzieBlog:token", res.token)
    //     //     localStorage.setItem("@kenzieBlog:User_id", res.user.id)
    //     //     return res
    //     // })
    //     // .catch(err => console.log(err))

    //     // return userLogin
    // }