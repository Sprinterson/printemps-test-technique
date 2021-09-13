// Cart notification
var toastTrigger = document.getElementById('liveToastBtn');
var toastContainer = document.getElementById('liveToastContainer');
var toastLive = document.getElementById('liveToast');
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLive);

        toast.show();
        toastContainer.style.zIndex = '15';
    })
}

// Carousel behavior
let items = document.querySelectorAll('.cross-selling .carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // Wrap carousel by using first child
            next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
    }
})

