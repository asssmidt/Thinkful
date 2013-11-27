//focus on input
$('#input').focus();

//validate input for blank and spaces
function validate(){
    var task = document.form.input;
    if(!input.value || /^ *$/.test(input.value)){
        $(".alert-danger").removeClass("hidden");
        
        document.getElementById('form').reset();
        $('#input').focus();
        return false;
    }
    
    //capture the input value as taskText
    taskText = document.form.input.value;

    
    //clone hidden task template
    $("#task-template").clone().insertAfter("#task-template").removeAttr("id").removeClass("hidden");
    
    //insert taskText as value to new task
    $('#task-wrapper div:nth-child(2)>input[type="text"]').attr('value', taskText);
    
    //reset and focus on input
    document.getElementById('form').reset();
    $('#input').focus();
}

//strikethrough text if checkbox is checked (and vice versa)
$(document).on("click", ".checkbox", function(){
    $(this).parents(".task-template").toggleClass('task-done');
    //if checked, disable text input
    if($(this).is(":checked")){
        $(this).parents(".task-template").find(".input").prop("disabled", true);
    //if un-checked, enable text input
    } else {
        $(this).parents(".task-template").find(".input").prop("disabled", false);
    }          
});

//clear tasks marked done when clicking button
$("#btn-task-clear").click(function(){
    $("#task-wrapper").find(".task-done").remove();
    
     //reset and focus on input
    document.getElementById('form').reset();
    $('#input').focus();
});

//save new value on open task
$(document).on('keyup', '.input', function(){
    var value = $(this).val();
    $(this).attr("value", value);
});