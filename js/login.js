function login(){
    let username = $("#user").val().trim();
    let password = $("#pwd").val().trim();

    console.log(username)
    

    if( username != "" && password != "" ){
        $.ajax({
            url:'https://localhost:5002/Login',
            type:'post',
            data:JSON.stringify({Name:username,Password:password}),
            contentType:"application/json; charset=utf-8",
            success:function(response){
                if(response){
                    window.location = "welcome.html";
                } else {
                    alert('Error!');
                }
            },
            error:function(){
                $("#error").fadeIn();
            }
        });
    } else {
        alert('Por favor, rellene todos los campos')
    }
}

function openRegister(){
    window.location = "register.html";
}


