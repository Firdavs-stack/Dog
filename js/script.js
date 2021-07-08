$(document).ready(function (){
	let items = $('.products__imagebox');
	for (let i  = 0; i< items.length; i++){
		let topBottom = ($(items[i]).height()-$(items[i]).children().height())/2;
		let rightLeft = ($(items[i]).width()-$(items[i]).children().width())/2;
		$(items[i]).css({
			'padding': `${topBottom}px ${rightLeft}px`,
		});	
	}
})