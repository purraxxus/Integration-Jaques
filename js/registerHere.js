var niks="sdlf";

function dropdownUsername() {

    $("#username").css("margin-top", "5%").css("transition", "1s").css("height", "100%");

}

function dropdownPassword() {

    $("#password").css("margin-top", "5%").css("transition", "1s").css("height", "100%");

}

function clickOutUsername() {
    var input = document.getElementById("username").value;
    if (input == "" || input.length == 0 || input == null) {
        $("#username").css("margin-top", "0%");
    } else {}
}

function clickOutPassword() {
    var input = document.getElementById("password").value;
    if (input == "" || input.length == 0 || input == null) {
        $("#password").css("margin-top", "0%");
    } else {

    }
}


function dropdownRepeatPassword() {

    $("#repeatPassword").css("margin-top", "5%").css("transition", "1s").css("height", "100%");

}

function clickOutresetPassword() {
    var input = document.getElementById("repeatPassword").value;
    if (input == "" || input.length == 0 || input == null) {
        $("#repeatPassword").css("margin-top", "0%");
    } else {

    }
}



function register() {
    var user = document.getElementById("username").value;

    var pass = document.getElementById("password").value;
    
    var repeatPass = document.getElementById("repeatPassword").value;

    if (user !== "" && pass == repeatPass && pass.match(/^(?=.*\d).{8,}$/)){
        sessionStorage.setItem("naam", user);
        sessionStorage.setItem("passwoord", pass);
        window.location.assign("/html/profielLogIn.html")
        console.log(sessionStorage);
        
        }else{
            console.log('error,passwoord moet mininum 8 tekens lang zijn en moet 1 cijfer bevatten');
        }
    
    
    
    
    console.log(user);
    console.log(pass);
    console.log(repeatPass);
}
// pass.match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$)/")