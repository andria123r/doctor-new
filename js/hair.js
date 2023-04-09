

$(document).ready(function(){
    $('#one').click(function(){
        $("div.one").addClass("hidden");
            $("div.two").removeClass("hidden");
            $("div.two").show();
          
       
    });
});

$(document).ready(function(){
    $('#two').click(function(){
        $("div.two").addClass("hidden");
        $("div.tree").removeClass("hidden");
        $("div.tree").show();
    });
});

$(document).ready(function(){
    $('#four').click(function(){
        $("div.tree").addClass("hidden");
        $("div.eleven").removeClass("hidden");
    $("div.eleven").show();
       
    });
});

       

$(document).ready(function(){
    $('#five').click(function(){
        $("div.tree").addClass("hidden");
        $("div.twelve").removeClass("hidden");
    $("div.twelve").show();
       
    });
});

$(document).ready(function(){
    $('#tree').click(function(){
        $("div.two").hide()
    $("div.four").show();
       
    });
});
$(document).ready(function(){
    $('#six').click(function(){
        $("div.four").hide()
    $("div.five").show();
       
    });
});

$(document).ready(function(){
    $('#eight').click(function(){
        $("div.five").hide()
    $("div.six").show();
       
    });
});
$(document).ready(function(){
    $('#nine').click(function(){
        $("div.five").hide()
    $("div.seven").show();
       
    });
});
$(document).ready(function(){
    $('#ten').click(function(){
        $("div.seven").hide()
    $("div.eight").show();
       
    });
});
$(document).ready(function(){
    $('#eleven').click(function(){
        $("div.seven").hide()
    $("div.nine").show();
       
    });
});
$(document).ready(function(){
    $('#seven').click(function(){
        $("div.four").hide()
    $("div.ten").show();
       
    });
});



