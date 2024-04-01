let isLogged = localStorage.getItem("auth");
if(!isLogged) {
    let password = prompt("Please enter the password:")
    if(password === "1234"){
        localStorage.setItem("auth", true)
        window.location = "index.html"
    }
}

