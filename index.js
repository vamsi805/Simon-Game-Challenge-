
var ca=["green","red","yellow","blue"];
var s=[];
var i=0;
var n=0;
$(document).keydown(function()
{
  if(i==0)
   { a();
   }
})

function a(){
  i+=1;
  $("#level-title").text("Level "+i);
  var r=Math.floor((Math.random())*4);
    s.push(ca[r]);
$("#"+ca[r]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
var audio =new Audio("sounds/"+ca[r]+".mp3");
audio.play();
n=0;

}

function w()
{
  $("#level-title").text("Game Over, Press Any Key to Restart");
  $("body").addClass("game-over");
  setTimeout(function(){ $("body").removeClass("game-over"); },100);
  var audio =new Audio("sounds/wrong.mp3");
  audio.play();
  i=0;
  n=0;
  s=[];
}

  $(".btn").click(function(){
      n+=1;
      var k=$(this).css("background-color");
      var l=$("#"+s[n-1]).css("background-color");
      if(n>i)
       { w();}
      else if(n<i)
      {
          if(k==l)
            {
              var audio =new Audio("sounds/"+s[n-1]+".mp3");
              audio.play();
              z(s[n-1]);

            }
          else
          {w();}
      }
      else if(n==i)
      {   if(k!=l)
          {
            w();
          }
        else {
          var audio =new Audio("sounds/"+s[n-1]+".mp3");
          audio.play();
           z(s[n-1]);
            n=0;
          setTimeout(function(){a(); },500); }
      }

  })

  function z(v){
    $("."+v).addClass("pressed");
    setTimeout(function(){$("."+v).removeClass("pressed"); },50);
  }
