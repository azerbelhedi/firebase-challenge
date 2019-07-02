function getUserData(){
    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let phone = document.querySelector("#phone").value
    let school = document.querySelector("#school").value
    let course = document.querySelector("#course").value

    let userData = { name , email , phone , school , course }

    return userData 
}