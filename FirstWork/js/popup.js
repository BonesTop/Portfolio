 $(document).ready(function(){
for(var i=0;i<$(".food-list").length;i++){
$(".food-list img").eq(i).attr("src",array[i].photo);
$(".food-list h4").eq(i).html(array[i].title);
$(".food-list").eq(i).data("id",i);
}
  });
  var array = [
     {title:'Салат з тунцем і авокадо',
     photo:"receips-images/salat-ztuncem.jpg",
     info:"<ul class='foodingredients'><li>1 авокадо</li><li>2 середніх помідора</li><li>2 банки тунця у воді</li><li>2 ст. л. кедрових горішків;</li>\
     <li>2 ст. л. оливкової олії</li><li>сік половини лайма (або лимона)</li><li>кінза</li><li>морська сіль</li><li>мелений перець.</li></ul>"
    },

     {title:'Літній овочевий салат',
     photo:"receips-images/salat-summer.jpg",
     info:"<ul class='foodingredients'><li>1 молодий кабачок</li><li>1 болгарський перець</li><li> 1 цибулина</li><li>2 помідори</li><li>2 зубчики часнику</li>\
     <li>2 ст. л. яблучного оцту</li><li>2 ст. л. рослинного масла</li><li>щіпку солі і чорного меленого перцю</li>"
    },

        {title:'Салат з кабачків і капусти',
     photo:"receips-images/salat-zkabachkv.jpg",
     info:"<ul class='foodingredients'><li>1 молодий кабачок</li><li>200 г молодої капусти</li><li> невелика цибулина</li><li>середній пучок кропу</li>\
     <li>щіпка солі</li><li>2 ст. л. лимонного соку</li><li>щіпка свіжомеленого чорного перцю</li>"
    },
      {title:'Панцанела',
     photo:"receips-images/salat-italyskiy.jpg",
     info:"<ul class='foodingredients'><li>1 огірок</li><li>1 помідор</li><li>1 скибочка білого хліба</li><li> 1 невелика цибулина</li>\
     <li>невеликий шматочок бринзи</li><li>1/3 банки оливок</li><li>1 ст. л. оливкової олії</li><li>гілочка базиліку</li><li>кілька крапель бальзамічного оцту</li>"
    },
    
    
     
  ];
 
$(".food-list").click(function() {
var foodIndex=$(this).data("id");
$(".foodlist").removeAttr("data-toggle");  
$(".foodlist").removeAttr("data-target").removeData("target"); 
$(".food-photo").removeAttr("src");  
$(".modal-title").empty();
$(".modal-body").empty(); 
$(this).attr("data-toggle","modal");
$(this).attr("data-target","#myModal");
$(".food-photo").attr("src",array[foodIndex].photo);
$(".modal-title").html(array[foodIndex].title);
$(".modal-body").html(array[foodIndex].info);

});