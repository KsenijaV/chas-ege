(function(){

var nazvdet=sklonlxkand(['школьник','ребёнок','пионер','учащийся','участник',].iz());
var gramm=sl(10,100,10);
var chel=sl(100,300);
var dni=sl(3,30);

NAtask.setTask({
	text : 'В '+
	['летнем','спортивном','пионерском','детском','детском оздоровительном','оздоровительном',].iz()+
	' лагере на каждого '+nazvdet.re+' полагается '+gramm+
	' г сахара в день. В лагере '+chislitM(chel,'человек','человека','человек')+
	'. Сколько килограммовых '+['пачек','упаковок','мешков','пакетов','коробок',].iz()+
	' сахара понадобится на весь лагерь на '+chislitlx(dni,'день')+'?',
	answers : (gramm*chel*dni/1000).ceil().ts(),
});
})();
//Обзад 26634
