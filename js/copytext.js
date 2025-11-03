$(function (){
    var mcopied = false,wcopied=false;
    $(document).on('click','.eventMAIL', function(){	    
        $.ajax({
            type: "POST",
            url: "/eventsRecord/",
            data: {
                eventval: $(this).attr("href").replace("mailto:", ""),
                fromPage: document.URL,
				event: 'click',
                loc: $(this).attr('data-loc'),
                item:1
            },
            dataType: "json",   
            error: function (){},
            success: function (e){},
            async: false
        })
    });
    $(document).on('copy','.eventMAIL', function(){
	    if(mcopied) return true;
        $.ajax({
            type: "POST",
            url: "/eventsRecord/",
            data: {
                eventval: $(this).text(),
                fromPage: document.URL,
				event: 'copy',
                loc: $(this).attr('data-loc'),
                item:1
            },
            dataType: "json",
            error: function (){},
            success: function (e){},
            async: false
        });
		mcopied = true;
    });
    $(document).on('click','.eventWA', function(){
		var val_string=$(this).attr("href").replace("https://wa.me/","").replace("https://api.whatsapp.com/send?phone=","");
		val_string=val_string.split('&')[0];
        $.ajax({
            type: "POST",
            url: "/eventsRecord/",
            data: {
                eventval: val_string,
                fromPage: document.URL,
				event: 'click',
                loc: $(this).attr('data-loc'),
                item:2
            },
            dataType: "json",
            error: function (){},
            success: function (e){},
            async: false
        })
    });
	
    $(document).on('copy','.eventWA', function(){
	    if(wcopied) return true;
        $.ajax({
            type: "POST",
            url: "/eventsRecord/",
            data: {
                eventval: $(this).text(),
                fromPage: document.URL,
				event: 'copy',
                loc: $(this).attr('data-loc'),
                item:2
            },
            dataType: "json",
            error: function (){},
            success: function (e){},
            async: false
        });
		wcopied = true;
    });
});