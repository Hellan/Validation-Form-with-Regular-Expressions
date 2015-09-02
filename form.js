$(document).ready(function() {

    var firstN = $('#firstName');
    var lastN = $("#lastName");
    var email = $('#emailAddress');
    var pass = $('#passWord');
    var firstNameReg = /^[A-Z][a-z]+$/;
    var lastNameReg = /^[A-Z][a-z]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var passReg = /^([a-zA-Z0-9@*#!''&+=]{8,30})$/;


    (function($) {
        $.fn.delayKeyup = function(callback, ms) {
            var timer = 0;
            $(this).keyup(function() {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            });
            return $(this);
        };
    })(jQuery);



    $('#firstName').delayKeyup(function() {

        $("#firstNameColour").removeClass('red');
        $("#firstName").removeClass('redtext');



        if (firstN.is(":blank")) {

            alert('Please enter your first name');
            $("#firstNameColour").addClass('red');
        } else if (!firstNameReg.test(firstN.val())) {
            alert('Please enter valid first name');
            $("#firstName").addClass('redtext');

        } else {
            return firstN;

        }

    }, 2000);




    $('#lastName').delayKeyup(function() {


        $("#lastNameColour").removeClass('red');
        $("#lastName").removeClass('redtext');


        if (lastN.is(":blank")) {
            alert('Please enter your last name');
            $("#lastNameColour").addClass('red');
        } else if (!lastNameReg.test(lastN.val())) {
            alert('Please enter valid last name');
            $("#lastName").addClass('redtext');
        } else {
            return lastN;

        }

    }, 2000);



    $('#emailAddress').delayKeyup(function() {

        $("#emailAddressColour").removeClass('red');
        $("#emailAddress").removeClass('redtext');


        if (email.is(":blank")) {
            alert('Please enter your email address');
            $("#emailAddressColour").addClass('red');
        } else if (!emailReg.test(email.val())) {
            alert('Please enter valid email address');
            $("#emailAddress").addClass('redtext');
        } else {
            return email;
        }

    }, 2000);

    $('#passWord').delayKeyup(function() {

        $("#passWordColour").removeClass('red');
        $("#passWord").removeClass('redtext');


        if (pass.is(":blank")) {
            alert('Please enter your password');
            $("#passWordColour").addClass('red');
        } else if (!passReg.test(pass.val())) {
            alert('Please enter valid password');
            $("#passWord").addClass('redtext');
        } else {
            return pass;
        }

    }, 2000);

    $('#submitBtn').click(function() {
        if (firstN.is(":blank")) {
            alert('Please enter your first name');
            $("#firstNameColour").addClass('red');
        }
        if (lastN.is(":blank")) {
            alert('Please enter your last name');
            $("#lastNameColour").addClass('red');
        }
        if (email.is(":blank")) {
            alert('Please enter your email address');
            $("#emailAddressColour").addClass('red');
        }
        if (pass.is(":blank")) {
            alert('Please enter your password');
            $("#passWordColour").addClass('red');
        } else {
            $("<a href='www.google.com'></a>").click();
        }

    });

    $('#submitBtn').mouseenter(function() {
        $(this).css({
            "color": "black",
            "background-color": "orange"
        });
    });
    $('#submitBtn').mouseleave(function() {
        $(this).css({
            "color": "white",
            "background-color": "green"
        });
    });

});
