$( document ).ready(function() {
  //main page login function
  var passwords = {'ethel': 1211, 'tyshawn': 1213, 'DeMarco': 1213, 'suzy': 1214};

  $(".login #loginBtn").click(function(){
    inputuser = $("#user").val();
    inputpassword = $("#password").val();
     if(inputpassword == passwords[inputuser]){
       window.location = 'http://ruby-on-rails-123235.nitrousapp.com:5000/main.html'}
    else{
      alert("Wrong password!");
    }
  });


  //Entering new text function
  $("#text-enter").click(function(){
    var textInput = $('#task').val();
    //add text to cleaning
    if($(".selection").val() == 1){
      $(".cleaningBoard ol").append('<li>' + textInput + '</li>');
      $(document).on('click','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
      });
    }
    if($(".selection").val()== 2){
      //add text to shopping
      $(".shoppingBoard ol").append('<li>' + textInput + '</li>');
      $(document).on('click','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
      });
    }
    if($(".selection").val()== 0){
      alert("Please select a place to put your To-Do!");
    }
  });

});