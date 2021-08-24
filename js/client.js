$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        if(this.id === "seasoning"){
            $('#product').html("<strong class='mr-auto' id='product'>Chef Anton's Italian Seasoning</strong>")
            $('#code').html('<strong id="code">5487</strong>')
        }
        if(this.id === "genen"){
            $('#product').html("<strong class='mr-auto' id='product'>Genen Shouyu</strong>")
            $('#code').html('<strong id="code">8462</strong>')
        }
        if(this.id === "schoko"){
            $('#product').html("<strong class='mr-auto' id='product'>Schoggi Schokolade</strong>")
            $('#code').html('<strong id="code">9321</strong>')
        }
        $('#toast').toast({ autohide: false }).toast('show');
        

    });

    $(document).on('keydown', function(e) {
        if(e.key == "Escape") {
            $('#toast').toast({ autohide: false }).toast('hide');
        }
    });
    
});