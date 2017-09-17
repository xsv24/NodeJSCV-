$(document).ready(function(){
    
    function set_background_pos(event_trig, xy_cord){
		child_logo = event_trig.children("#linkedin_logo, #git_hub_logo, #email_logo");
        child_logo.css("background-position", xy_cord);
    }

    $(".git_hub, #linkedin, #email_manual") 
        .mouseenter(function(){
            set_background_pos($(this), '-50px 0px');
        })
        .mouseleave(function(){
            set_background_pos($(this), '0px 0px');
        })
        .click(function(){
            var id = $(this).attr("id");
            var class_val = $(this).attr("class");

            if(id === "git_hub" || class_val === "git_hub")
                window.open("https://github.com/xsv24");
            else if(id === "linkedin")
                window.open("https://www.linkedin.com/in/thomas-pearson-4180b8138/");
            else if(id === "email_manual")
                window.location.href = "mailto:thomaspearson.dev@gmail.com";    
        }
    );

});
