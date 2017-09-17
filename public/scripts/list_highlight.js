$(document).ready(function(){
    
    $("li")
        .mouseenter(function(){
           // on mouse enter set padding larger.
            $(this).find(".fill_skill_star, .skill_star")
                .stop()
                .velocity({
                    letterSpacing: "2px",
                    easing: "ease-in-out"
                });
        })
        // on mouse leave reset to orginal padding.
        .mouseleave(function(){
            $(this).find(".fill_skill_star, .skill_star")
                .stop()
                .velocity({
                    letterSpacing: "0px",
                    easing: "ease-in-out"
                });
        });
});
