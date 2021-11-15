//animaciones

$(document).ready(function(){
    
    $("#caja")
        .css("background-color", "dodgerblue")
            .animate({ height:"300px", width:"1200px"}, "slow")
                .animate({ height:"100px", width:"500px"}, "slow");

    $("#title2")
        .html("CUMPLIMOS TUS SUEÑOS")
            .css("color", "white")
                .css("font-size", "30px") 
                    .fadeOut(2000) 
                        .delay(3000)  
                            .fadeIn(2000) ;
                    
})
