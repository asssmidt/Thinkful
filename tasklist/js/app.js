//validate input for blank and spaces
function validate(){
    var task = document.form.input;
    if(!input.value || /^ *$/.test(input.value)){
        alert("please enter a value");
        return false;
    }
    taskText = document.form.input.value;

    
//clone hidden task template
    $("#task-template").clone().appendTo("#task-wrapper").removeAttr("id").removeClass("hidden");
    
//insert taskText as value to new task
    $('#task-wrapper div:nth-child(2)>input[type="text"]').attr('value', taskText);
    
//reset and focus on input
    document.getElementById('form').reset();
    $('#input').focus();
}