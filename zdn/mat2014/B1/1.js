(function(){

var a=sluchch(0,window.dlina.m.length-1);
var b=sluchch(10,100,5);
var g=window.dlina.m[a];
var d=window.transportm.ie.iz();

var question = window.profesj.ie.iz().toZagl()+' '+om.imenaj.ie.iz()+' '+window.otchestvaj.ie.iz()+
	' '+window.deistviaj.iz()+
	' '+d+', на спидометре которого скорость отображается в '+window.dlina.pm[a]+' в час,'+
	' и отправилась в путь. По дороге ей встретился сотрудник ГАИ с прибором для выявления нарушителей скоростного режима,'+
	' на котором скорость отображается в километрах в час с округлением до целого числа.'+
	' '+d.toZagl()+' двигался со скоростью '+b+' '+window.dlina.rm[a]+' в час. '+
	window.dlina.ie[a].toZagl()+' - это '+g+' метра.'+
	' Какое число отобразится на экране прибора для выявления нарушителей скоростного режима?';


NAtask.setTask({ text : question, answers : (b*g/1000).round(), tags : ["log", "prz", "drs", "tri"] });
})();
//Обзад 26640
