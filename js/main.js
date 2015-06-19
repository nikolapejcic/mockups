$( document ).ready(function() {
    $('button.filter-trigger').on('click', function() {
    	if ( $('section.filters').hasClass('open') ) {
    		$('section.filters ol').removeClass('show');
    		$('section.filters').removeClass('open');
    		$(this).text('Adjust your search');
    	} else {
    		$('section.filters ol').addClass('show');
    		$('section.filters').addClass('open');
    		$(this).text('Hide filters');
    	}
    });


    var options = {
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow: 2
            }
        };
        var jssor_slider1 = new $JssorSlider$('slider1_container', options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales
    //while window resizes
        function ScaleSlider() {
            var parentWidth = $('#slider1_container').parent().width();
            if (parentWidth < 600) {
                jssor_slider1.$ScaleWidth(parentWidth);
            } else if (parentWidth >= 600) {
                jssor_slider1.$ScaleWidth('600px');
            } else
                window.setTimeout(ScaleSlider, 30);
        }


        //Scale slider after document ready
        ScaleSlider();
                                        
        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end






});



