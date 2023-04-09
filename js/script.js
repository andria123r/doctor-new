let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
 
    $("#js-dd-head_and_nick").click(function(){
        $(".medium-up-3, .medium-up-3>.column").removeClass("hidden");
      });
  ;
  $(document).ready(function () {
    $("#js-dd-head_and_nick").click(function(){
        $("ul").append('<li class="symptom-item"><a href="https://www.webteb.com/symptoms/head-and-neck/تساقط-الشعر-عند-الرجال" title="تساقط الشعر عند الرجال |ويب طب">تساقط الشعر عند الرجال</a></li>');
    })
    
  });
  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").addClass("important blue");
    });
  });
  function RemoveDDhighlight() {
    $('ul.list.hover li').each(function() {
        var $this = $(this);
        if (!$this.children('a').hasClass('js-dd-selected'))
            $this.removeClass("active");
    });
}

$(function() {
    //change avatar img src on hover
    function hoverAvatar(selector, event, imgSrc) {
        switch (event.type) {
            case 'mouseenter':
                $(selector).attr('src', $(selector).attr('data-imghover'));
                break;
            case 'mouseleave':
                $(selector).attr('src', $(selector).attr('data-img'));
                break;
        }
    }

    //avatar img hover event
    $('.js-avatar-img').on('mouseenter mouseleave', function(event) {
        hoverAvatar($(this), event);
    });

    //avatar gender button hover event
    $('.js-avatar-btn').hover(function(event) {
        var selector = $(this).attr('data-avatarimgid');
        hoverAvatar($('#' + selector), event);
    });

    //body part click event on a
    $('ul.list.hover li a').click(function(e) {
        var $this = $(this);
        var url = $this.data('href');
        var decodedUrl = $this.attr('href');
        var key = $this.data('id');
        //remove all selected from a
        $('.js-dd-selected').removeClass('js-dd-selected');
        //add selected to a
        $this.addClass('js-dd-selected');
        RemoveDDhighlight();
        e.preventDefault();
        AddGAPageView('/symptoms/' + decodedUrl, true, true);
        console.log('/symptoms/' + decodedUrl);
        GetSymptoms(url, decodedUrl, key);
    });

    //map area click event
    $('area').click(function(event) {
        var url = $(this).data('href');
        var decodedUrl = $(this).attr('href');
        var selector = $(this).attr('data-id');
        //remove active from all dd
        $('.active').removeClass('active');
        //add active to dd
        $('#js-dd-' + selector).addClass('active');
        //remove selected from a
        $('.js-dd-selected').removeClass('js-dd-selected');
        //add selected to a
        $('#js-dd-' + selector).children('a').addClass('js-dd-selected');
        event.preventDefault();
        AddGAPageView('/symptoms/' + decodedUrl, true, true);
        console.log('/symptoms/' + decodedUrl);
        GetSymptoms(url, decodedUrl, selector);
    });

    //body part and symptom hover event
    $(document).on('mouseenter mouseleave', 'ul.list.hover li', function(event) {
        switch (event.type) {
            case 'mouseenter':
                $(this).addClass("active");
                break;
            case 'mouseleave':
                //debugger;
                RemoveDDhighlight();
                break;
        }
    });

    //map area hover event
    $('area').hover(function(event) {
        var selector = $(this).attr('data-id');
        var bodyPartImgSrc = $('#' + selector).attr('src');
        var avatar = $('#s-avatar');
        switch (event.type) {
            case 'mouseenter':
                avatar.attr('src', bodyPartImgSrc);
                $('#js-dd-' + selector).addClass('active');
                break;
            case 'mouseleave':
                avatar.attr('src', avatar.attr('data-originalImg'));
                if (!$('#js-dd-' + selector).children('a').hasClass('js-dd-selected'))
                    $('#js-dd-' + selector).removeClass('active');

                break;
        }
    });

    $(document).on('mouseenter mouseleave', 'ul.hover li a', function(e) {
        var selector = $(this).attr('data-id');
        var bodyPartImgSrc = $('#' + selector).attr('src');
        var avatar = $('#s-avatar');
        switch (e.type) {
            case 'mouseenter':
                avatar.attr('src', bodyPartImgSrc);
                break;
            case 'mouseleave':
                avatar.attr('src', avatar.attr('data-originalImg'));
                break;
        }
    });

    if (Settings.IsMobile) {
        $('#showSelectBodyPart').click(function(e) {
            $('#bodyPartsContainer').fadeOut(fadeDuration, function() {
                $('.part-select-text').hide().fadeIn(fadeDuration);
                $('#showSelectBodyPart').hide();
            });
            e.preventDefault();
        });
    }
});

function GetSymptoms(url, decodedUrl, key) {
    for (var i = 0; i < symptomsByBodyParts.length; i++) {
        var symptom = symptomsByBodyParts[i];
        if (symptom.bodyPart.key == key) {
            $("#bodyPartHeader").html(symptom.bodyPart.arabicName);

            var html = '';
            for (var j = 0; j < symptom.symptoms.length; j++) {
                html += '<li class="symptom-item"><a href="' + symptom.symptoms[j].url + '" title="' + symptom.symptoms[j].seoTitle + '">' + symptom.symptoms[j].name + '</a></li>';
            }

            $("#symptomsUl").html(html);

            if (Settings.IsMobile) {
                $('.part-select-text').fadeOut(fadeDuration, function() {
                    $("#bodyPartsContainer").hide().fadeIn(fadeDuration);
                    $('#showSelectBodyPart').show();
                });
            } else {
                $("#bodyPartsContainer").hide().fadeIn(fadeDuration, function() { });
            }

            decodedUrl = decodedUrl.split('webteb.com')[1];
            AddGAPageView(decodedUrl, true, true);
            console.log(decodedUrl);
        }
    }
};

function handleCredentialResponse(response) {
  var url = "https://accounts.webteb.com/onetapsignin";
  var form = document.getElementById("oneTapSignin");
  var tocken = document.getElementById("tocken");
  var returnUrl = document.getElementById("url");
  tocken.value = response.credential;
  returnUrl.value = "https://www.webteb.com/symptoms/male";
  form.setAttribute("action", url);
  form.submit();
}