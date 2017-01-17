function addRow() {
    var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML = 'First Name: <input type="text" name="name" value="" /><br>\
        Last Name: <input type="text" name="value" value="" /><br>\
        <button type="button" value="Remove" onclick="removeRow(this)">Remove</button><hr>';

     document.getElementById('guests').appendChild(div);
}

function removeRow(input) {
    document.getElementById('guests').removeChild( input.parentNode );
}


jQuery(document).ready(function($){
	smoothScroll.init();
	
	var timelineBlocks = $('.cd-timeline-block'),
		offset = .8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});