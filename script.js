var textInput

$(document).ready(function(){
  //main page login function
  var passwords = {'ethel': 1211, 'tyshawn': 1213, 'DeMarco': 1213, 'suzy': 1214};

  $('.downloader').hide();

  $(".login #loginBtn").click(function(){
    inputuser = $("#user").val();
    inputpassword = $("#password").val();
     if(inputpassword == passwords[inputuser]){
       $('.downloader').show();

       function modifValues(){
         var val = $('.downloading-progress-bar').attr('data-value');
         if(val>=100){window.location = "/main.html";}
         var newVal = val*1+0.5;
         var txt = Math.floor(newVal)+'%';
         $('.downloading-progress-bar').attr('data-value',newVal);
         $('.percentage').html(txt);
         $('.downloading-progress-bar').css("width", txt);
       }
       setInterval(function(){ modifValues(); },10);
     }
    else{
      alert("Wrong password!");
    }
  });

var currentUser = $("#user").val();
  //Entering new text function
  $("#text-enter").click(function(){
    textInput = $('#task').val();
    //add text to cleaning
    if($(".selection").val() == 1){
      $(".cleaningBoard ol").append('<li>' + textInput + '</li>');
    }
    if($(".selection").val()== 2){
      //add text to shopping
      $(".shoppingBoard ol").append('<li>' + textInput + '</li>');
    }
    if($(".selection").val()== 0){
      alert("Please select a place to put your To-Do!");
    }
  });

  $(document).on('click','.cleaningBoard li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
        $(".updateSidebar ol").append('<li>'+"You completed the task '" + textInput + "' from the Cleaning board."+'</li>');
      });

  $(document).on('click','.shoppingBoard li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
        console.log(textInput);
        $(".updateSidebar ol").append('<li>'+"You completed the task '" + textInput + "' from the Shopping board."+ '</li>');
      });

  $("#task").keyup(function(event){
    if(event.keyCode == 13){
        $("#text-enter").click();
    }
});
  $("#password").keyup(function(event){
    if(event.keyCode == 13){
        $("#loginBtn").click();
    }
});


});