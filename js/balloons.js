$(document).ready($(function(){
    
    $('#birthday-header').complete(function() {
        pick = Math.floor((Math.random() * 12) + 1);
        switch(pick) {
            case 1:
                $('#birthday-header').removeClass.addClass('animate__animated animate__bounce')
                break;
            case 2:
                $('#birthday-header').removeClass.addClass('animate__animated animate__flash')
                break;
            case 3:
                $('#birthday-header').removeClass.addClass('animate__animated animate__pulse')
                break;
            case 4:
                $('#birthday-header').removeClass.addClass('animate__animated animate__rubberBand')
                break;
            case 5:
                $('#birthday-header').removeClass.addClass('animate__animated animate__shakeX')
                break;
            case 6:
                $('#birthday-header').removeClass.addClass('animate__animated animate__shakeY')
                break;
            case 7:
                $('#birthday-header').removeClass.addClass('animate__animated animate__headShake')
                break;
            case 8:
                $('#birthday-header').removeClass.addClass('animate__animated animate__swing')
                break;
            case 9:
                $('#birthday-header').removeClass.addClass('animate__animated animate__tada')
                break;
            case 10:
                $('#birthday-header').removeClass.addClass('animate__animated animate__wobble')
                break;
            case 11:
                $('#birthday-header').removeClass.addClass('animate__animated animate__jello')
                break;
            case 12:
                $('#birthday-header').removeClass.addClass('animate__animated animate__heartBeat')
                break;
        }
    })
    
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $('#check').click( function() {
        $('#birthday-header').removeClass().addClass('animate__animated animate__heartBeat')
        if(!$('#red').is(':checked')||!$('#black').is(':checked')||!$('#blue').is(':checked')){
            // toggle red and bounce in
            $('#red').prop('checked', true)
            $('#redImg').css('visibility', 'visible')
            $('#red').is(':checked') ?
            $('#redImg').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#redImg').addClass('animate__animated animate__bounceOutUp');
            // toggle black and bounce in
            $('#black').prop('checked', true)
            $('#blackImg').css('visibility', 'visible')
            $('#black').is(':checked') ?
            $('#blackImg').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#blackImg').addClass('animate__animated animate__bounceOutUp');
            // toggle blue and bounce in
            $('#blue').prop('checked', true)
            $('#blueImg').css('visibility', 'visible')
            $('#blue').is(':checked') ?
            $('#blueImg').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#blueImg').addClass('animate__animated animate__bounceOutUp');
        }
        else {
            // toggle red and bounce out
            $('#red').prop('checked', false)
            $('#red').is(':checked') ?
            $('#redImg').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#redImg').addClass('animate__animated animate__bounceOutUp');
            // toggle black and bounce out
            $('#black').prop('checked', false)
            $('#black').is(':checked') ?
            $('#blackImg').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#blackImg').addClass('animate__animated animate__bounceOutUp');
            // toggle blue and bounce out
            $('#blue').prop('checked', false)
            $('#blue').is(':checked') ?
            $('#blueImg').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#blueImg').addClass('animate__animated animate__bounceOutUp');
        }
        
        
    });

    $('.form-check-input').mouseover( function() {
        if($('#red').is(':hover')){
            $('#birthday-header').css('color','red')
        }
        if($('#blue').is(':hover')){
            $('#birthday-header').css('color','blue')
        }
        if($('#black').is(':hover')){
            $('#birthday-header').css('color','black')
        }
    });

    $('.form-check-input').mouseleave( function() {
        $('#birthday-header').css('color','slategray')
    });

    $('#submit').click( function(e) {
        e.preventDefault();
        if(!$('#red').is(':checked')&&!$('#black').is(':checked')&&!$('#blue').is(':checked')){
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });
}));

