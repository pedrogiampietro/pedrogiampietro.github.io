/*
O debounce, assim como o throttle, limita a quantidade de vezes que um determinado trecho de código é executado em relação ao tempo. Mas diferentemente do throttle — que assegura que aconteçam no máximo 1 execução a cada X milisegundos —, o debounce irá postergar a execução do código caso ele seja invocado novamente em menos de X segundos.
*/
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


//Scroll Suave

$('.menu-nav a[href^="#"]').click(function(e){ //Quando se tem o '^⁼' - quer dizer para selecionar todos com itens que comecem com o que for selecionado
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('.menu').innerHeight(),
        targetOffset = $(id).offset().top;
    
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },1000);
});

//Ir para o topo da página
$('.logo').click(function(e){
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: 0
    },800);
});

$('.logo-rodape').click(function(e){
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: 0
    },800);
});



//Scroll Suave link Ativo

$('section').each(function(){
    var height = $(this).height(),
        offsetTop = $(this).offset().top,
        menuHeight = $('.menu').innerHeight(),
        id = $(this).attr('id'),
        $itemMenu = $('a[href="#' + id + '"]');

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(((offsetTop - menuHeight) < scrollTop)&&((offsetTop - menuHeight) + height > scrollTop)){
            $itemMenu.addClass('active');
        }else{
            $itemMenu.removeClass('active');
        }
    });

});



//Menu Mobile 

$('.mobile-btn').click(function(){
    $(this).toggleClass('active'); //Adiciona a classe caso não exista e retira caso exista
    $('.mobile-menu').toggleClass('active');
});



//Slide
(function(){ //Funções Imediatas JavaScript(IIFE)
    function slider(sliderName, velocidade){
        var sliderClass = '.' + sliderName,
            activeClass = 'active',
            rotate = setInterval(rotateSlide, velocidade);
            

        $(sliderClass + ' > :first').addClass(activeClass);

        //Quando estiver com o mouse por cima do slide
        $(sliderClass).hover(function(){
            clearInterval(rotate);
        }, function(){
            rotate = setInterval(rotateSlide, velocidade); 
        });

        function rotateSlide() {
            var activeSlide = $(sliderClass + ' > .' + activeClass),
                nextSlide = activeSlide.next();

            //verificar se o próximo elemento existe
            if(nextSlide.length == 0){
                nextSlide = $(sliderClass + ' > :first');
            }
            activeSlide.removeClass(activeClass);
            nextSlide.addClass(activeClass);
        }

    }

    slider('introducao', 4000); //Chamando a função

})();





