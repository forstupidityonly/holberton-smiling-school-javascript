function carouselLoader(item, i) {
    let active = ""
    if (!i) {
        active = "active";
    }

    $("#inner-carousel").append(`
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

function isLoaded(status, element) {
    if(status) {
        $(element).wrap('<div class="loader"></div>');
    } else {
        $(element).unwrap();
    }
}

function getCarouselData() {
    var settings = {
        "url": "https://smileschool-api.hbtn.info/quotes",
        "method": "GET",
        "timeout": 0,
        "beforeSend": isLoaded(true, "#inner-carousel"),
        "success": function(result) {
            // $("#inner-carousel").empty
            isLoaded(false, "#inner-carousel");
            result.forEach((item, i) => {carouselLoader(item, i)})
        }
    };

    $.ajax(settings).done(function (response) {
        let carousel1 = response[0];
        let carousel2 = response[1];
        carouselLoader(carousel1, carousel2);
    });

};

$(document).ready(function() {
    getCarouselData();
})