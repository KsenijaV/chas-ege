(function() {
	'use strict';
	chas2.task.setTask({
		text: 'В каком предложении вместо слова ВЕЧНЫЙ нужно употребить ВЕКОВОЙ?' + '<br/>',
		answers: [
			'Густые заросли кустарника чередовались с ВЕЧНЫМИ дубовыми рощами и берёзовыми лесочками.',
		],
		wrongAnswers: [
			'Долгими осенними вечерами хозяин не выходил из комнаты и в неизменном халате, с ВЕЧНОЮ трубкою в зубах, сидел у окна.',
			'Среди ВЕЧНЫХ человеческих ценностей наиболее важной для него была честность.',
			'В районах ВЕЧНОЙ мерзлоты дома строятся по специальным проектам.',
		],
		analys: 'ВЕЧНЫЕ рощи — рощи, живущие всегда. По контексту подразумеваются ВЕКОВЫЕ рощи.',
	});
	AtoB();

})();
