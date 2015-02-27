(function($){

    jQuery.fn.ebcaptcha = function(options){

        var element = this; 
        var submit = $(this).find('span[id=mathCap]');
        $('<p style="font-size: 14px; font-family: Arial,Helvetica,sans-serif; font-weight: bold;"><label id="ebcaptchatext"></label></p>').insertBefore(submit);
        $('<p class="feature-border" align="left" valign="middle" width="66%"><input type="text" required class="textbox" id="ebcaptchainput" placeholder="*Answer" /></p>').insertBefore(submit);
        var input = this.find('#ebcaptchainput'); 
        var label = this.find('#ebcaptchatext'); 

        $(element).find('input[type=submit]').attr('disabled','disabled'); 

        var randomNr1 = 0; 
        var randomNr2 = 0;
        var totalNr = 0;


        randomNr1 = Math.floor(Math.random()*10);
        randomNr2 = Math.floor(Math.random()*10);
        totalNr = randomNr1 + randomNr2;
        var texti = "What is "+randomNr1+" + "+randomNr2;
        $(label).text(texti);

        $(input).keyup(function(){

            var nr = $(this).val();
            if(nr==totalNr)
            {
                $(element).find('input[type=submit]').removeAttr('disabled');            }
            else{
                $(element).find('input[type=submit]').attr('disabled','disabled');
            }
        });

        $(document).keypress(function(e)
        {
            if(e.which==13)
            {
                if((element).find('input[type=submit]').is(':disabled')==true)
                {
                    e.preventDefault();
                    return false;
                }
            }

        });

    };

})(jQuery);