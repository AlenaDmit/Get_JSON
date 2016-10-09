function showJson(object) {
    for(var key in object){
       
       console.log(object[key] + " type: "+ $.type(object[key])); 
        if ($.type(object[key]) == "object"){
            $('#package').append("<div>"+key+"</div>");
            showJson(object[key]);
        }
        else
            $('#package').append("<div>"+key+": "+object[key]+"</div>");
    }
};

jQuery(document).ready(function($) {
    $('button').click(function(){
        console.log("hell");
        $.getJSON('package.json', function(object) {
            showJson(object);
        });
    });
});

