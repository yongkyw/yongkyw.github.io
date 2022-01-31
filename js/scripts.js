// JS document

// Preloader
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
    document.getElementById("navbutton-close").classList.add("hidden");
})


// Favicons
$(document).ready(function() {
    if (!window.matchMedia)
        return;

    var current = $('head > link[rel="icon"][media]');
    $.each(current, function(i, icon) {
        var match = window.matchMedia(icon.media);
        function swap() {
            if (match.matches) {
                current.remove();
                current = $(icon).appendTo('head');
            }
        }
        match.addListener(swap);
        swap();
    });
});


// Spinning logo
$(window).scroll(function() {
    var spinningLogo = $(window).scrollTop() / 500 % Math.PI * 2;
    $('#logo').css({
        transform: 'rotate(' + spinningLogo + 'rad)'
    });
});


// Scroll verder icon fade out
$(window).scroll(function() {
    $(".hero-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
});


// Back to top button
$(document).ready(function() {
    $("#back-top").hide();

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        $('a#back-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            return false;
        });
    });
});


// Scroll indicator
window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
}


// Hamburger
if ($(window).width() >= 900) {
    $("#navbutton-container").mouseleave(function (e) {
        TweenMax.to(this, 0.3, { height: 150, width: 150 });
        TweenMax.to(".navbutton-circle, .navbutton-hamburger", 0.3, { scale: 1, x: 0, y: 0 });
    });

    $("#navbutton-container").mouseenter(function (e) {
        TweenMax.to(this, 0.3, { height: 200, width: 200 });
        TweenMax.to(".navbutton-circle", 0.3, { scale: 1.3 });
    });

    $("#navbutton-container").mousemove(function (e) {
        callParallax(e);
    });

    function callParallax(e) {
        parallaxIt(e, ".navbutton-circle", 80);
        parallaxIt(e, ".navbutton-hamburger", 40);
    }

    function parallaxIt(e, target, movement) {
        var $this = $("#navbutton-container");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 0.3, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
        });
    }
}

function openNav() {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("navbutton-hamburger").classList.add("hidden");
    document.getElementById("navbutton-close").classList.remove("hidden");
    $('.navbutton-circle').css('border', 'solid 1px #fff');
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
    document.getElementById("navbutton-close").classList.add("hidden");
    document.getElementById("navbutton-hamburger").classList.remove("hidden");
    $('.navbutton-circle').css('border', '');
}

function openNavPG() {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("navbutton-hamburger").classList.add("hidden");
    document.getElementById("navbutton-close").classList.remove("hidden");
    $('.navbutton-circle').css('border', 'solid 1px #fff');
    $('#logo').css('filter', 'invert(100%)');
}

function closeNavPG() {
    document.getElementById("nav").style.height = "0%";
    document.getElementById("navbutton-close").classList.add("hidden");
    document.getElementById("navbutton-hamburger").classList.remove("hidden");
    $('.navbutton-circle').css('border', '');
    $('#logo').css('filter', 'invert(0%)');
}


// Clients
$(function() {
    $('.client-ste').hover(function() {
        $('.client-huis360').css('opacity', '.4');
        $('.client-hms').css('opacity', '.4');
        $('.client-falconea').css('opacity', '.4');
        $('.client-strijp-t').css('opacity', '.4');
        $('.client-delta').css('opacity', '.4');
        $('.client-coppers-services').css('opacity', '.4');
        $('.client-rcwebshop').css('opacity', '.4');
    }, function() {
        $('.client-huis360').css('opacity', '1');
        $('.client-hms').css('opacity', '1');
        $('.client-falconea').css('opacity', '1');
        $('.client-strijp-t').css('opacity', '1');
        $('.client-delta').css('opacity', '1');
        $('.client-coppers-services').css('opacity', '1');
        $('.client-rcwebshop').css('opacity', '1');
    });
});

$(function() {
    $('.client-huis360').hover(function() {
        $('.client-ste').css('opacity', '.4');
        $('.client-hms').css('opacity', '.4');
        $('.client-falconea').css('opacity', '.4');
        $('.client-strijp-t').css('opacity', '.4');
        $('.client-delta').css('opacity', '.4');
        $('.client-coppers-services').css('opacity', '.4');
        $('.client-rcwebshop').css('opacity', '.4');
    }, function() {
        $('.client-ste').css('opacity', '1');
        $('.client-hms').css('opacity', '1');
        $('.client-falconea').css('opacity', '1');
        $('.client-strijp-t').css('opacity', '1');
        $('.client-delta').css('opacity', '1');
        $('.client-coppers-services').css('opacity', '1');
        $('.client-rcwebshop').css('opacity', '1');
    });
});

$(function() {
    $('.client-hms').hover(function() {
        $('.client-ste').css('opacity', '.4');
        $('.client-huis360').css('opacity', '.4');
        $('.client-coppers-services').css('opacity', '.4');
        $('.client-rcwebshop').css('opacity', '.4');
        $('.client-falconea').css('opacity', '.4');
        $('.client-strijp-t').css('opacity', '.4');
        $('.client-delta').css('opacity', '.4');
    }, function() {
        $('.client-ste').css('opacity', '1');
        $('.client-huis360').css('opacity', '1');
        $('.client-coppers-services').css('opacity', '1');
        $('.client-rcwebshop').css('opacity', '1');
        $('.client-falconea').css('opacity', '1');
        $('.client-strijp-t').css('opacity', '1');
        $('.client-delta').css('opacity', '1');
    });
});

$(function() {
    $('.client-coppers-services').hover(function() {
        $('.client-ste').css('opacity', '.4');
        $('.client-huis360').css('opacity', '.4');
        $('.client-hms').css('opacity', '.4');
        $('.client-rcwebshop').css('opacity', '.4');
        $('.client-falconea').css('opacity', '.4');
        $('.client-strijp-t').css('opacity', '.4');
        $('.client-delta').css('opacity', '.4');
    }, function() {
        $('.client-ste').css('opacity', '1');
        $('.client-huis360').css('opacity', '1');
        $('.client-hms').css('opacity', '1');
        $('.client-rcwebshop').css('opacity', '1');
        $('.client-falconea').css('opacity', '1');
        $('.client-strijp-t').css('opacity', '1');
        $('.client-delta').css('opacity', '1');
    });
});

$(function() {
    $('.client-rcwebshop').hover(function() {
        $('.client-ste').css('opacity', '.4');
        $('.client-huis360').css('opacity', '.4');
        $('.client-hms').css('opacity', '.4');
        $('.client-coppers-services').css('opacity', '.4');
        $('.client-falconea').css('opacity', '.4');
        $('.client-strijp-t').css('opacity', '.4');
        $('.client-delta').css('opacity', '.4');
    }, function() {
        $('.client-ste').css('opacity', '1');
        $('.client-huis360').css('opacity', '1');
        $('.client-hms').css('opacity', '1');
        $('.client-coppers-services').css('opacity', '1');
        $('.client-falconea').css('opacity', '1');
        $('.client-strijp-t').css('opacity', '1');
        $('.client-delta').css('opacity', '1');
    });
});

$(function() {
    $('.client-falconea').hover(function() {
        $('.client-ste').css('opacity', '.4');
        $('.client-huis360').css('opacity', '.4');
        $('.client-hms').css('opacity', '.4');
        $('.client-coppers-services').css('opacity', '.4');
        $('.client-rcwebshop').css('opacity', '.4');
        $('.client-strijp-t').css('opacity', '.4');
        $('.client-delta').css('opacity', '.4');
    }, function() {
        $('.client-ste').css('opacity', '1');
        $('.client-huis360').css('opacity', '1');
        $('.client-hms').css('opacity', '1');
        $('.client-coppers-services').css('opacity', '1');
        $('.client-rcwebshop').css('opacity', '1');
        $('.client-strijp-t').css('opacity', '1');
        $('.client-delta').css('opacity', '1');
    });
});

$(function() {
    $('.client-strijp-t').hover(function() {
        $('.client-ste').css('opacity', '.4');
        $('.client-huis360').css('opacity', '.4');
        $('.client-hms').css('opacity', '.4');
        $('.client-coppers-services').css('opacity', '.4');
        $('.client-falconea').css('opacity', '.4');
        $('.client-rcwebshop').css('opacity', '.4');
        $('.client-delta').css('opacity', '.4');
    }, function() {
        $('.client-ste').css('opacity', '1');
        $('.client-huis360').css('opacity', '1');
        $('.client-hms').css('opacity', '1');
        $('.client-coppers-services').css('opacity', '1');
        $('.client-falconea').css('opacity', '1');
        $('.client-rcwebshop').css('opacity', '1');
        $('.client-delta').css('opacity', '1');
    });
});

$(function() {
    $('.client-delta').hover(function() {
        $('.client-ste').css('opacity', '.4');
        $('.client-huis360').css('opacity', '.4');
        $('.client-hms').css('opacity', '.4');
        $('.client-coppers-services').css('opacity', '.4');
        $('.client-falconea').css('opacity', '.4');
        $('.client-strijp-t').css('opacity', '.4');
        $('.client-rcwebshop').css('opacity', '.4');
    }, function() {
        $('.client-ste').css('opacity', '1');
        $('.client-huis360').css('opacity', '1');
        $('.client-hms').css('opacity', '1');
        $('.client-coppers-services').css('opacity', '1');
        $('.client-falconea').css('opacity', '1');
        $('.client-strijp-t').css('opacity', '1');
        $('.client-rcwebshop').css('opacity', '1');
    });
});


// Playing around
$(function() {
    $('.play-d-forward').hover(function() {
        $('.play-f-strijp').css('opacity', '.4');
        $('.play-d-fileupload').css('opacity', '.4');
        $('.play-f-tu').css('opacity', '.4');
        $('.play-f-brug').css('opacity', '.4');
        $('.play-d-onboarding').css('opacity', '.4');
        $('.play-f-trap').css('opacity', '.4');
        $('.play-d-wallet').css('opacity', '.4');
    }, function() {
        $('.play-f-strijp').css('opacity', '1');
        $('.play-d-fileupload').css('opacity', '1');
        $('.play-f-tu').css('opacity', '1');
        $('.play-f-brug').css('opacity', '1');
        $('.play-d-onboarding').css('opacity', '1');
        $('.play-f-trap').css('opacity', '1');
        $('.play-d-wallet').css('opacity', '1');
    });
});

$(function() {
    $('.play-f-strijp').hover(function() {
        $('.play-d-forward').css('opacity', '.4');
        $('.play-d-fileupload').css('opacity', '.4');
        $('.play-f-tu').css('opacity', '.4');
        $('.play-f-brug').css('opacity', '.4');
        $('.play-d-onboarding').css('opacity', '.4');
        $('.play-f-trap').css('opacity', '.4');
        $('.play-d-wallet').css('opacity', '.4');
    }, function() {
        $('.play-d-forward').css('opacity', '1');
        $('.play-d-fileupload').css('opacity', '1');
        $('.play-f-tu').css('opacity', '1');
        $('.play-f-brug').css('opacity', '1');
        $('.play-d-onboarding').css('opacity', '1');
        $('.play-f-trap').css('opacity', '1');
        $('.play-d-wallet').css('opacity', '1');
    });
});

$(function() {
    $('.play-d-fileupload').hover(function() {
        $('.play-f-strijp').css('opacity', '.4');
        $('.play-d-forward').css('opacity', '.4');
        $('.play-f-tu').css('opacity', '.4');
        $('.play-f-brug').css('opacity', '.4');
        $('.play-d-onboarding').css('opacity', '.4');
        $('.play-f-trap').css('opacity', '.4');
        $('.play-d-wallet').css('opacity', '.4');
    }, function() {
        $('.play-f-strijp').css('opacity', '1');
        $('.play-d-forward').css('opacity', '1');
        $('.play-f-tu').css('opacity', '1');
        $('.play-f-brug').css('opacity', '1');
        $('.play-d-onboarding').css('opacity', '1');
        $('.play-f-trap').css('opacity', '1');
        $('.play-d-wallet').css('opacity', '1');
    });
});

$(function() {
    $('.play-f-tu').hover(function() {
        $('.play-f-strijp').css('opacity', '.4');
        $('.play-d-fileupload').css('opacity', '.4');
        $('.play-d-forward').css('opacity', '.4');
        $('.play-f-brug').css('opacity', '.4');
        $('.play-d-onboarding').css('opacity', '.4');
        $('.play-f-trap').css('opacity', '.4');
        $('.play-d-wallet').css('opacity', '.4');
    }, function() {
        $('.play-f-strijp').css('opacity', '1');
        $('.play-d-fileupload').css('opacity', '1');
        $('.play-d-forward').css('opacity', '1');
        $('.play-f-brug').css('opacity', '1');
        $('.play-d-onboarding').css('opacity', '1');
        $('.play-f-trap').css('opacity', '1');
        $('.play-d-wallet').css('opacity', '1');
    });
});

$(function() {
    $('.play-f-brug').hover(function() {
        $('.play-f-strijp').css('opacity', '.4');
        $('.play-d-fileupload').css('opacity', '.4');
        $('.play-f-tu').css('opacity', '.4');
        $('.play-d-forward').css('opacity', '.4');
        $('.play-d-onboarding').css('opacity', '.4');
        $('.play-f-trap').css('opacity', '.4');
        $('.play-d-wallet').css('opacity', '.4');
    }, function() {
        $('.play-f-strijp').css('opacity', '1');
        $('.play-d-fileupload').css('opacity', '1');
        $('.play-f-tu').css('opacity', '1');
        $('.play-d-forward').css('opacity', '1');
        $('.play-d-onboarding').css('opacity', '1');
        $('.play-f-trap').css('opacity', '1');
        $('.play-d-wallet').css('opacity', '1');
    });
});

$(function() {
    $('.play-d-onboarding').hover(function() {
        $('.play-f-strijp').css('opacity', '.4');
        $('.play-d-fileupload').css('opacity', '.4');
        $('.play-f-tu').css('opacity', '.4');
        $('.play-f-brug').css('opacity', '.4');
        $('.play-d-forward').css('opacity', '.4');
        $('.play-f-trap').css('opacity', '.4');
        $('.play-d-wallet').css('opacity', '.4');
    }, function() {
        $('.play-f-strijp').css('opacity', '1');
        $('.play-d-fileupload').css('opacity', '1');
        $('.play-f-tu').css('opacity', '1');
        $('.play-f-brug').css('opacity', '1');
        $('.play-d-forward').css('opacity', '1');
        $('.play-f-trap').css('opacity', '1');
        $('.play-d-wallet').css('opacity', '1');
    });
});

$(function() {
    $('.play-f-trap').hover(function() {
        $('.play-f-strijp').css('opacity', '.4');
        $('.play-d-fileupload').css('opacity', '.4');
        $('.play-f-tu').css('opacity', '.4');
        $('.play-f-brug').css('opacity', '.4');
        $('.play-d-onboarding').css('opacity', '.4');
        $('.play-d-forward').css('opacity', '.4');
        $('.play-d-wallet').css('opacity', '.4');
    }, function() {
        $('.play-f-strijp').css('opacity', '1');
        $('.play-d-fileupload').css('opacity', '1');
        $('.play-f-tu').css('opacity', '1');
        $('.play-f-brug').css('opacity', '1');
        $('.play-d-onboarding').css('opacity', '1');
        $('.play-d-forward').css('opacity', '1');
        $('.play-d-wallet').css('opacity', '1');
    });
});

$(function() {
    $('.play-d-wallet').hover(function() {
        $('.play-f-strijp').css('opacity', '.4');
        $('.play-d-fileupload').css('opacity', '.4');
        $('.play-f-tu').css('opacity', '.4');
        $('.play-f-brug').css('opacity', '.4');
        $('.play-d-onboarding').css('opacity', '.4');
        $('.play-f-trap').css('opacity', '.4');
        $('.play-d-forward').css('opacity', '.4');
    }, function() {
        $('.play-f-strijp').css('opacity', '1');
        $('.play-d-fileupload').css('opacity', '1');
        $('.play-f-tu').css('opacity', '1');
        $('.play-f-brug').css('opacity', '1');
        $('.play-d-onboarding').css('opacity', '1');
        $('.play-f-trap').css('opacity', '1');
        $('.play-d-forward').css('opacity', '1');
    });
});


// Toolset
$(function() {
    $('.toolset-xd').hover(function() {
        $('.toolset-photoshop').css('opacity', '.4');
        $('.toolset-code').css('opacity', '.4');
        $('.toolset-sketch').css('opacity', '.4');
        $('.toolset-tower').css('opacity', '.4');
        $('.toolset-things').css('opacity', '.4');
    }, function() {
        $('.toolset-photoshop').css('opacity', '1');
        $('.toolset-code').css('opacity', '1');
        $('.toolset-sketch').css('opacity', '1');
        $('.toolset-tower').css('opacity', '1');
        $('.toolset-things').css('opacity', '1');
    });
});

$(function() {
    $('.toolset-photoshop').hover(function() {
        $('.toolset-xd').css('opacity', '.4');
        $('.toolset-code').css('opacity', '.4');
        $('.toolset-sketch').css('opacity', '.4');
        $('.toolset-tower').css('opacity', '.4');
        $('.toolset-things').css('opacity', '.4');
    }, function() {
        $('.toolset-xd').css('opacity', '1');
        $('.toolset-code').css('opacity', '1');
        $('.toolset-sketch').css('opacity', '1');
        $('.toolset-tower').css('opacity', '1');
        $('.toolset-things').css('opacity', '1');
    });
});

$(function() {
    $('.toolset-code').hover(function() {
        $('.toolset-photoshop').css('opacity', '.4');
        $('.toolset-xd').css('opacity', '.4');
        $('.toolset-sketch').css('opacity', '.4');
        $('.toolset-tower').css('opacity', '.4');
        $('.toolset-things').css('opacity', '.4');
    }, function() {
        $('.toolset-photoshop').css('opacity', '1');
        $('.toolset-xd').css('opacity', '1');
        $('.toolset-sketch').css('opacity', '1');
        $('.toolset-tower').css('opacity', '1');
        $('.toolset-things').css('opacity', '1');
    });
});

$(function() {
    $('.toolset-sketch').hover(function() {
        $('.toolset-photoshop').css('opacity', '.4');
        $('.toolset-code').css('opacity', '.4');
        $('.toolset-xd').css('opacity', '.4');
        $('.toolset-tower').css('opacity', '.4');
        $('.toolset-things').css('opacity', '.4');
    }, function() {
        $('.toolset-photoshop').css('opacity', '1');
        $('.toolset-code').css('opacity', '1');
        $('.toolset-xd').css('opacity', '1');
        $('.toolset-tower').css('opacity', '1');
        $('.toolset-things').css('opacity', '1');
    });
});

$(function() {
    $('.toolset-tower').hover(function() {
        $('.toolset-photoshop').css('opacity', '.4');
        $('.toolset-code').css('opacity', '.4');
        $('.toolset-sketch').css('opacity', '.4');
        $('.toolset-xd').css('opacity', '.4');
        $('.toolset-things').css('opacity', '.4');
    }, function() {
        $('.toolset-photoshop').css('opacity', '1');
        $('.toolset-code').css('opacity', '1');
        $('.toolset-sketch').css('opacity', '1');
        $('.toolset-xd').css('opacity', '1');
        $('.toolset-things').css('opacity', '1');
    });
});

$(function() {
    $('.toolset-things').hover(function() {
        $('.toolset-photoshop').css('opacity', '.4');
        $('.toolset-code').css('opacity', '.4');
        $('.toolset-sketch').css('opacity', '.4');
        $('.toolset-tower').css('opacity', '.4');
        $('.toolset-xd').css('opacity', '.4');
    }, function() {
        $('.toolset-photoshop').css('opacity', '1');
        $('.toolset-code').css('opacity', '1');
        $('.toolset-sketch').css('opacity', '1');
        $('.toolset-tower').css('opacity', '1');
        $('.toolset-xd').css('opacity', '1');
    });
});
