
$("input").on('change',function(){

var findSubmit = $(this).parent().siblings(".button");
/** якщо кнопка вже з'явилася просто позначаємо відповідь користувача */
if (findSubmit.hasClass("invisible") == false){
$(this).siblings("input").removeClass("selected");
$(this).addClass("selected");   
}
/** при натисненні radiobutton зїявляється кнопка */
else{
$(this).siblings("input").removeClass("selected");
$(this).addClass("selected");
findSubmit.removeClass("invisible");
}
});


var rightans=["так","ні","не знаю","так","ні","так"];
var userans = [];
var result = 0; 
var point = 2;

$(".button").on("click",function(){
    /** створюємо нові питання при натиснені відправити */
   $(this).parent().next(".quest-block").removeClass("hider");
/** додаємо в масив відповіді користувача */
userans.push($(this).siblings("form").children(".selected").val());
/** видаляємо питання на яке ми вже відповіли*/
var btnindex=($(this).parent().index()-1);
$(".quest-block").eq(btnindex).slideUp('slow', function(){$(".quest-block").eq(btnindex).remove(); });

/** робимо підрахунки якщо кількість відповідей
 *  користувача рівна кількості правильних відповідей*/
if(userans.length == rightans.length){
for (var i=0;i<userans.length;i++){

    if( userans[i]==rightans[i]){
        result = result+point;
    }
    else{
        result =result;
    }
}
/** пвидаляємо сторінку з тестом */
$(".test").remove();
/** створюємо  блок з результатом */
$(".res").removeClass("hider");
$(".res").append("<span >"+"<font class='grade' size='6'>"+result+"</font>"+"</span>")
}; 
});


$(window).keydown(function(){
if (event.keyCode == 13){
    event.preventDefault();
    return false;}  
});