$(document).ready(function()
{
    var scroll = $('.mouse-click');

    
    //smooth scroll
    scroll.click(function(event)
    {
        //remove default actions
        event.preventDefault();

        $('body, html').animate(
            {
                scrollTop: $(this.hash).offset().top
            },1000
        )
    })
})