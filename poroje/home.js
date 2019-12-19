$('#toggle').click(function(){
    $('aside').toggleClass('open');
    
    if($('aside').hasClass('open')){
        $('#toggle').html('close');
    }
    else{
        $('#toggle').html('open');
    }
});