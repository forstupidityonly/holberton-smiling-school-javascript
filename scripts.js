function isLoaded(status, element) {
    if(status) {
        $(element).wrap('<div class="loader"></div>');
    } else {
        $(element).unwrap();
    }
}

function carouselLoader1(item, i, div) {
    let active = ""
    if (!i) {
        active = "active";
    }

    $(div).append(`
    <div class="carousel-item ${active} px-5">
        <div class="row d-flex justify-content-center align-items-center flex-md-row flex-column px-5">
            <div class="d-flex justify-content-end">
                <img src="${item.pic_url}" alt="First slide" class="rounded-circle" width="150" id="carousel-img-1">
            </div>
            <div class="col">
                <p class="text-car font-italic" id="carousel-text-1">${item.text}</p>
                <h3 class="text-cars" id="carousel-name-1">${item.name}</h3>
                <p class="text-car font-italic" id="carousel-title-1">${item.title}</p>
            </div>
        </div>
    </div>
    `)
}

function carouselLoader2(item, i, div) {
    let active = ""
    if (!i) {
        active = "active";
    }
    let starData = '';
    for (let i = 0; i < item.star; i++) {
        starData += '<img src="images/star_on.png"  height="15" width="15"></img>';
    }
    for (let j = (5 - item.star); j > 0; j--) {
        starData += '<img src="images/star_off.png"  height="15" width="15"></img>';
    }
    $(div).append(`
        <div class="carousel-item ${active} px-5">
            <div class="d-flex justify-content-center">
                <div class="mx-2 thumb-img">
                    <img src="${item.thumb_url}" width="255" height="154" alt="" class="">
                    <h3>${item.title}</h3>
                    <p>${item["sub-title"]}</p>
                    <div class="row">
                        <img src="${item.author_pic_url}" class="rounded-circle" width="30"></img>
                        <p class="vilot-text">${item.author}}</p>
                    </div>
                    <div class="row w-100" id="stars">
                        ${starData}
                        <div class="text-right">
                            <p class="vilot-text">${item.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)
}

function carouselLoader3(item, i, div) {
    let active = ""
    if (!i) {
        active = "active";
    }

    $(div).append(`
        <div class="carousel-item ${active} px-5">
            <div class="row d-flex justify-content-center align-items-center flex-md-row flex-column">
                <div class="col-12 col-sm-4 col-md-4 col-lg-3 d-flex justify-content-sm-end justify-content-center ">
                    <img src="${item.pic_url}" alt="..." class="rounded-circle" width="150">
                </div>
                <div class="col pr-5 mr-4 pt-5 pt-sm-0">
                    <p class="font-italic">${item.text}</p>
                <h6 class="font-weight-bold m-0 mb-1">${item.name}</h6>
                    <p class="font-italic m-0">${item.title}</p>
                </div>
            </div>
        </div>
    `)
}


function getCarouselData1() {
    $.ajax({
            url: 'https://smileschool-api.hbtn.info/quotes',
            method: "GET",
            contentType: "application/json",
            timeout: 0,
            beforeSend: isLoaded(true, "#inner-carousel-1"),
            success: function (result) {
                isLoaded(false, "#inner-carousel-1");
                result.forEach((item, i) => {carouselLoader1(item, i, "#inner-carousel-1")})
            }}
        );
};

function getCarouselData2() {
    $.ajax({
            url: 'https://smileschool-api.hbtn.info/popular-tutorials',
            method: "GET",
            contentType: "application/json",
            timeout: 0,
            beforeSend: isLoaded(true, "#inner-carousel-2"),
            success: function (result) {
                isLoaded(false, "#inner-carousel-2");
                result.forEach((item, i) => {carouselLoader2(item, i, "#inner-carousel-2")})
            }}
        );
};

function getCarouselData3() {
    $.ajax({
            url: 'https://smileschool-api.hbtn.info/latest-videos',
            method: "GET",
            contentType: "application/json",
            timeout: 0,
            beforeSend: isLoaded(true, "#inner-carousel-3"),
            success: function (result) {
                isLoaded(false, "#inner-carousel-3");
                result.forEach((item, i) => {carouselLoader2(item, i, "#inner-carousel-3")})
            }}
        );
};

function getCarouselData4() {
    $.ajax({
            url: 'https://smileschool-api.hbtn.info/quotes',
            method: "GET",
            contentType: "application/json",
            timeout: 0,
            beforeSend: isLoaded(true, "#inner-carousel-pricing"),
            success: function (result) {
                isLoaded(false, "#inner-carousel-pricing");
                result.forEach((item, i) => {carouselLoader3(item, i, "#inner-carousel-pricing")})
            }}
        );
};

function getCourses() {
    $.ajax({
        url: 'https://smileschool-api.hbtn.info/courses',

    });
}; 

$(document).ready(function() {
    getCarouselData1();
    getCarouselData2();
    getCarouselData3();
    getCarouselData4();
})

