var textInput

Parse.initialize("BzMNaRxNdLPjdFFHO9ie8LRR7ZJjLxKLYqfIBMlr", "UT5aDxsOE1PiMmH8DWYtOv3Vijvod7ERYSdIMTPk");

$(document).ready(function(){
  $('.downloader').hide();

  $("#logoutButton").click(function(){
    Parse.User.logOut();
    window.location = "/ChoreBoard"
  });

  var passwords = {'ethel': 1211, 'tyshawn': 1213, 'DeMarco': 1213, 'suzy': 1214};

  //main page login function

  $(".login #loginBtn").click(function(){
    Parse.User.logIn($("#user").val(), $("#password").val(), {
      success: function(user){
       $('.downloader').show();

       function modifValues(){
         var val = $('.downloading-progress-bar').attr('data-value');
         var newVal = val*1+0.5;
         var txt = Math.floor(newVal)+'%';
         if(val==100){window.location = "/ChoreBoard/main.html";}
         $('.downloading-progress-bar').attr('data-value',newVal);
         $('.percentage').html(txt);
         $('.downloading-progress-bar').css("width", txt);
         //console.log(Parse.User.current()["attributes"]["username"]);
       }
       setInterval(function(){ modifValues(); },10);
      },
      error: function(user,error){
        alert("Wrong password!");
      }
    });
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
      $("#task").val("");
    }
});
  $("#password").keyup(function(event){
    if(event.keyCode == 13){
        $("#loginBtn").click();
      $("#task").val("");
    }
});


});