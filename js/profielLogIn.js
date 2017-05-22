function dropdownUsername (){
    
    $("#username").css("margin-top","5%").css("transition", "1s");
    
}

function dropdownPassword (){
    
    $("#password").css("margin-top","5%").css("transition", "1s");
    
}

function clickOutUsername (){
    var input = document.getElementById("username").value;
    if (input == "" || input.length == 0 || input == null)
{
     $("#username").css("margin-top","0%");
    }else{
}
}

function clickOutPassword (){
    var input = document.getElementById("password").value;
    if (input == "" || input.length == 0 || input == null)
{
     $("#password").css("margin-top","0%");
    }else{
        
    }
}

