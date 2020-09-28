let basicUsers = [
    supersUser = {
    userName: 'Eugene',
    password: '123',
    role: 'admin',
}, {
    userName: 'Ivan',
    password: '123',
    role: 'super user',
}, {
    userName: 'Ihor',
    password: '123',
    role: 'user',
}]

let users = []
let deletedUsers = []

let signUp = document.querySelector('#sign__up')
let createNewUser = document.querySelector('#create__new-user')
let showUserList = document.querySelector('#show__user-list')
let deleteUser = document.querySelector('#delete-user')
let signUpBlock = document.querySelector('.sign__up-block')
let createBlock = document.querySelector('.create__user-block')
let deleteBlock = document.querySelector('.delete__user-block')

signUp.addEventListener ("click", () => {
    let login = document.querySelector('#login').value
    let password = document.querySelector('#password').value

    let arr = users.find(s => s.userName == login && s.password == password)

    if (arr.role == 'admin') {
        signUpBlock.style.display = 'none'
        createBlock.style.display = 'block'
        deleteBlock.style.display = 'block'
    } else if (arr.role == 'super user') {
        signUpBlock.style.display = 'none'
        createBlock.style.display = 'block'
    } else if (arr.role == 'user') {
        signUpBlock.style.display = 'none'
        alert('You can nothing, but send messages, enjoy yourself')
    }
})

class user {
    static canSendMessage = true;
    constructor(userName, password, role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }
}

class superUser extends user {
    constructor(userName, password, role) {
        super(userName, password, role)
    }

    newUser() {
        createNewUser.addEventListener('click', () =>{
            let login = document.querySelector('#new__login').value
            let password = document.querySelector('#new__password').value
            let u4 = new user(login, password, 'user')
            users.push(u4)
            console.log(users)
        })
    }

    showUsers() {
        showUserList.addEventListener('click', () =>{
            let div1 = document.querySelector('.user-list')
            let div2 = document.querySelector('.inner__user-list')
            div1.removeChild(div2)
            let newDiv = document.createElement('div')
            newDiv.className = "inner__user-list";
            div1.appendChild(newDiv)
            users.map(function(n){
                if (n.role == 'admin') {
                    let text = `Login = ${n.userName}, password = ***; `
                    let block = document.querySelector('.inner__user-list')
                    let p = document.createElement('p')
                    p.innerHTML = `${text}`
                    return block.appendChild(p)
                } else {
                    let text = `Login = ${n.userName}, password = ${n.password}; `
                    let block = document.querySelector('.inner__user-list')
                    let p = document.createElement('p')
                    p.innerHTML = `${text}`
                    return block.appendChild(p)
                }
            })
        })
    }
}

class admin extends superUser {
    constructor(userName, password, role) {
        super(userName, password, role)
    }

    deleteUserFun() {
        deleteUser.addEventListener('click', () =>{
            let login = document.querySelector('#delete-input').value
            let arr = users.findIndex(s => s.userName == login)
            if (arr != -1) {
                deletedUsers.push
                users.splice(arr, 1)
                return users
            } else return
        })
    }
}

let u1 = new admin(basicUsers[0].userName, basicUsers[0].password, 'admin')
let u2 = new superUser(basicUsers[1].userName, basicUsers[1].password, 'super user')
let u3 = new user(basicUsers[2].userName, basicUsers[2].password, 'user')
users.push(u1, u2, u3)
console.log(users)

u2.newUser()
u2.showUsers()
u1.deleteUserFun()

