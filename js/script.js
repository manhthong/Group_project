
"use strict";


if (window.location.hash) {
    $(".sub-page").hide();
    $('.header-main-menu li a').removeClass('active');
    $('section' + window.location.hash + ':first').show();
}

$('#header-main-menu li a, .home-buttons a, .pricing-table .btn').on("click", function (e) {
    if ($(e.target).is('.header-main-menu a, .home-buttons a, .pricing-table .btn')) {
        $('.header-main-menu li a').removeClass('active');
        $(this).addClass('active');
        $(".sub-page").hide();
        var target = $(e.target.hash);
        if (target.length) {
            var gap = 0;
            $(e.target.hash, 'html', 'body').animate({
                opacity: 'show',
                duration: "slow",
                scrollTop: target.offset().top - gap
            });
        }
        if ($(e.target).is('.home-buttons a')) {
            $("#header-main-menu li a[href='#contact']").addClass('active');
        }
        if ($(e.target).is('.pricing-table .btn')) {
            $("#header-main-menu li a[href='#contact']").addClass('active');
        }

    }
});


$('.responsive-icon').on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.header').animate({ 'margin-left': 285 }, 300);
    } else {
        $(this).removeClass('active');
        $('.header').animate({ 'margin-left': 0 }, 300);
    }
    return false;
});

$('.header a').on("click", function (e) {
    $('.responsive-icon').removeClass('active');
    $('.header').animate({ 'margin-left': 0 }, 300);

});

$(".cd-words-wrapper b:first-child").addClass("is-visible");



$('#preloader').fadeOut('slow', function () {
    $(this).remove();
});

//adding js owl carousel minhkhoinguyen
$('.clients').owlCarousel({
    navigation: false,
    pagination: false,
    dots: false,
    loop: true,
    //        autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    autoHeight: !1,
    responsive: {
        0: {
            items: 2
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
});
$('.counter-block-value').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
});

$('.testimonials').owlCarousel({
    navigation: false,
    pagination: false,
    autoPlay: true,
    items: 2,
    loop: !1,
    dots: true,
    margin: 25,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
});

$(function () {
    var selectedClass = "";
    $(".filter-tabs").find('button:first-child').addClass('active-filter');
    $(".fil-cat").click(function () {
        $(".filter-tabs").find('button').removeClass('active-filter');
        $(this).addClass('active-filter');
        selectedClass = $(this).attr("data-rel");
        $("#portfolio-page").fadeTo(100, 0.1);
        $("#portfolio-page .portfolio-item").not("." + selectedClass).fadeOut().removeClass('portfolio-item');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('portfolio-item');
            $("#portfolio-page").fadeTo(300, 1);
        }, 300);

    });
});

$('[data-rel^=lightcase]').lightcase({
    maxWidth: 1100,
    maxHeight: 800
});

new WOW().init();

$('#app_date').dateDropper();
$('#app_time').timeDropper();


const portfolio_list = {
    "Project 1": {
        id: 1, img: "images/portfolio-img-1.jpeg", category: "Web Development", date: "01/07/2023", link: "abcd-1.com", url: "1-project-1.html", content: "" },
        "Project 2": { id: 2, img: "images/portfolio-img-2.jpeg", category:"Web Development", date: "01/07/2023", link: "abcd-1.com", url:"2-project-2.html", content:""},
        "Project 3": { id: 3, img: "images/portfolio-img-3.jpeg", category:"Web Development", date: "01/07/2023", link: "abcd-1.com", url:"3-project-3.html", content:"" },
        "Project 4": { id: 4, img: "images/portfolio-img-4.jpeg", category:"Web Development", date: "01/07/2023", link: "abcd-1.com", url:"4-project-4.html", content:"" }
      };


const generatedHtml = Object.keys(portfolio_list).reduce((accum, currKey) => accum +

    `<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 portfolio-item pro_cat_1 all">
            <div class="portfolio-img">
                <img src="${portfolio_list[currKey].img}"
                    class="img-responsive" alt="">
            </div>
            <div class="portfolio-data">
                <h4><a href="${portfolio_list[currKey].url}">${currKey}</a></h4>
                <p class="meta">${portfolio_list[currKey].category}</p>
                <div class="portfolio-attr">
                    <a href="${portfolio_list[currKey].url}"><i class="lnr lnr-link"></i></a>
                    <a href="${portfolio_list[currKey].img}"
                        data-rel="lightcase:gal" title="${currKey}"><i
                            class="lnr lnr-move"></i></a>
                </div>
            </div>
         </div>`, '');

document.getElementById('portfolio-list').innerHTML = generatedHtml;


let list_Blog = document.querySelector(".blog-item");
window.onload = () => {
    fetchData();
}
function fetchData (){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f36ee597c26f4fab9b4fe0987529e551`)
    .then((response)=>response.json())
    .then ((data) =>{
        console.log (data)
        renderBlog(data.results)
    })
    .catch((err) =>console.log(err))
}
function renderBlog(articles){
    let generalHTML= "";
    for (let item of articles) {
        let rawHtml = `
        <div class="blog-article">
            <div class="comment-like"> <span><i class="fas fa-eye" aria-hidden="true"></i> 111</span></div>
            <div class="article-img">
                <a href="blog-1.html"> <img src="${item.urlToImage}" alt="Cloud Next 2023"></a>
            </div>
            <div class="article-link"> <a href="blog-1.html"><i class="lnr lnr-arrow-right"></i></a> </div>
            <div class="article-content">
                <h4>
                    <a href="blog-1.html">${item.title}</a>
                </h4>
                <div class="meta"> <span><i>${item.publishedAt}</i></span> <span><i>In</i> <a href="blog-1.html">Serverless</a></span> </div>
                <p>
                    ${item.description}
                </p>
            </div>
        </div>
        `;
        generalHTML +=rawHtmlHtml;
    }
    list_Blog.innerHTML = generalHTML;
}