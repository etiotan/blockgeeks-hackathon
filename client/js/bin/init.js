(function($){
  $(function(){

    $('.button-collapse').sideNav({
//	  menuWidth: 130, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });

	$('#accept-terms').click(function() {
  	if ($(this).is(':checked')) {
  		$('#accept-terms-submit').removeClass('disabled');
  	} else {
  		$('#accept-terms-submit').addClass('disabled');
  	}});

  // card dropdown fab
  $('#art-card.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );

  $('#art-card.dropdown-button-fab').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'right', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );

  // $( "#art-card.card" ).click(function() {
  //       alert('button pressed.');
  //       $(this).parent.hasClass('.cdropdown.contract').dropdown('open');
  // });

  $( ".dropdown-fab" ).click(function() {
        alert('button pressed.');
        $(this).parent.hasClass('.dropdown-content.contract').dropdown('open');
        $(this).parent.hasClass('.dropdown-content.contract').dropdown('open');
  });


// Custom code to make art-card selectable
// see http://stackoverflow.com/questions/5057191/toggleclass-and-remove-class-from-all-other-elements
    $("div#art-card").click(function(){
      $(this).toggleClass('selected');
      if($("div#art-card").hasClass('selected')){
        $(this).removeClass('selected');
      };
    });

 $("div#art-card").click(function(){
    $('div#art-card.selected').not(this).removeClass('selected');
    $(this).toggleClass('selected');
 })

// Form Validation
/*
  if ($("#login-form").length) {
    $("#login-form").validate({
        rules: {
            team_name: {
                required: true,
            },
            company: {
                required: true,
            },
            phone_day: {
                required: true,
            },
            phone_eve: {
                required: true,
            },
            email: {
                required: true,
                email:true
            },
            contact_address: {
                required: true,
            },
            team_gender:"required",
            team_ranking:"required",


            artist_name: {
                required: true,
            },
            first_name: {
                required: true,
            },
            last_name: {
                required: true,
            },
            cemail: {
                required: true,
                email:true
            },
            password: {
                required: true,
                minlength: 4
            },
            cpassword: {
                required: true,
                minlength: 4,
                equalTo: "#password"
            },
            curl: {
                required: true,
                url:true
            },
            crole:"required",
            address: {
              required: false,
//              minlength: 15
            },
            cagree:"required",
        },
        //For custom messages
        messages: {
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
};
*/
// END - Form Validation





  }); // end of document ready
})(jQuery); // end of jQuery name space