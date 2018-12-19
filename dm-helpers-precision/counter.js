jQuery(document).ready(function($){
   //do initial
   $(".dm-counter").each(function(){
    var initial = parseInt($(this).attr("data-initial"));
    $(this).html(initial);
    $(this).attr("current",initial);
   });
   setTimeout(InitUpdate, 100);


   function InitUpdate()
    {
        $(".dm-counter").each(function(){
            var initial = parseInt($(this).attr("data-initial"));
            var current = parseInt($(this).attr("current"));
            var rate = parseFloat($(this).attr("data-rate"));
            result = CalcValue(initial, rate);
            var increment = (result/1000);

            if(current < result)
            {
                var nf = new Intl.NumberFormat();
                var newval = Math.floor(current + increment);
                $(this).attr("current",newval);

                $(this).html(nf.format(newval));
                setTimeout(InitUpdate, 100);
            } else {
                setTimeout(UpdateTime, 1000);
            }
        });  
    }
    function UpdateTime()
    {
        jQuery(".dm-counter").each(function(){
            var initial = parseInt(jQuery(this).attr("data-initial"));
            var rate = parseFloat(jQuery(this).attr("data-rate"));
            result = CalcValue(initial, rate);      
            var nf = new Intl.NumberFormat();    
            jQuery(this).html(nf.format(result));
            setTimeout(UpdateTime, 1000);
        });  

    }

    function CalcValue(initial, rate)
    {
        var dt =  new Date();
        var secs = dt.getSeconds() + (60 * (dt.getMinutes() + (60 * dt.getHours())));
        var result = Math.floor(initial + (secs * rate));
        return result;
        //var nf = new Intl.NumberFormat();
        //return nf.format(result);
    }
});

