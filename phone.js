var count =0;

  $(".num").on('click', function(){
    var num=($(this).clone().children().remove().end().text());
     if(count<11){
    $("#output").append('<span>' + num.trim() + '</span>');
    count++;
}
 });

 $('.fa-arrow-left').on('click',function(){
     $('#output span:last-child').remove();
     count--;
 });
console.log("hello");


