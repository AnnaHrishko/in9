
function passwordCheck(){
    let auth
    let savePassword = getCookie(auth);
    let password = prompt("Please enter the password:");
    if (password=="1234", savePassword=="true"){
        auth = true
        window.location="index.html";
    } else if (password!='' && password!=null) {
        while(password !=="1234", savePassword !=="true"){
            password = prompt("Please enter the correct password:");
        }
    }
    // function localstorage(){
    //     if (localStorage.auth) {
    //         password.hide()
    //       } else {
    //         password = prompt("Please enter the correct password:");
    //     }
    // }
    // return localstorage();
}
window.onload=passwordCheck;

