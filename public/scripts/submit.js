$(document).ready(function(){

    // helper functions
    
    function isEmailOkay(email){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function capitalize(str_val){
        return str_val.charAt(0).toUpperCase() + str_val.slice(1);
    }

    function set_error(msg){
        $("#error_text").text(msg).css("visibility", "visible");
    }
   
    // toggle selection of text and default text on email form
    $(".email_form").children().not("br").on({
        click: function(){
            $(this).val("");
        },
        focusin : function(){
            $(this).select();
        },
        focusout :function(){
            val = $(this).val();
            if(val == ""){
                $(this).val( capitalize($(this).attr("name")) );
            }
        }
    });

    // response of mail success or fail
    function response_handler(res){
        console.log(res);
		
        if(res.success === true){
            console.log("success");
            $("#progress").removeClass("progress");
            $("#progress").addClass("complete_tick");
        }else{
            console.log("Fail" + res.error_msg);
            set_error("Failed to Send!");
        }
    }

    // post_data for email
    function post_data(contents){
		var json = JSON.parse(contents);
		console.log(json);
        console.log("json sent: " + json);
        $.ajax({
            type:"post",
            url:"/email.js",
            data:json,
            success: function(data){
                response_handler(data);
            }
               
        })   
    }

    function contents_okay(id, val){
    
        if(id === val || val === ""){
            set_error("Please fill in the complete form!");
            return false;
        
        }else if(id === "email"){
            if(!isEmailOkay(val)){
                set_error("Please check email is correct");
                return false;
            }
        }
        return true;
    }

    // Submit button click
    $("#submit").click(function(){
        var contents = "";
        var input_okay = true;

        set_error("");
        $("#progress").removeClass("complete_tick");

        $(".email_form").children().not("br")
            .each(function(index, input_val){
                var id = input_val.id.toLowerCase();
                var val = input_val.value.toLowerCase();

                if(contents_okay(id, val)){
                    contents += '"' + id  + '":"' + input_val.value +'",';
                }else{
                    input_okay = false;
                    return false;
                }
            }
        );
        
        if(input_okay){
            contents = "{" + contents.substr(0, contents.length -1)+ "}";
           $("#progress").addClass("progress");
           post_data(contents);
        }
    });
});



