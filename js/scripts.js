function slider() {
  var slidesWrapper = document.getElementById("tweet-slider-slides-wrapper");
  var dots = document.querySelectorAll(".slider-dot");
  function activateSlider() {
  var dotId = this.id;
  if (!this.classList.contains("slider-dot-active")){
    [].forEach.call(dots, function(dot){
      dot.classList.remove("slider-dot-active");
    });
    this.classList.add("slider-dot-active");
    slidesWrapper.classList = "";
    if (dotId === "slider-dot-1") {
        slidesWrapper.classList.add("tweet-slide-1-active");
    } else if (dotId === "slider-dot-2") {
        slidesWrapper.classList.add("tweet-slide-2-active");
    } else {
        slidesWrapper.classList.add("tweet-slide-3-active");
    }
    }
  }
  function clearTimer() {
    clearInterval(timer);
  }
  var triggerSlider = new Event('autoTriggerSlider');
  [].forEach.call(dots, function(dot) {
    dot.addEventListener('autoTriggerSlider', activateSlider);
    dot.addEventListener('click', clearTimer);
    dot.addEventListener('click', activateSlider);
})

var i = 2;
var timer = setInterval(function() {
  if (i === 4){
    i = 1;
  }
  document.getElementById("slider-dot-" + i++).dispatchEvent(triggerSlider);

}, 7000);
timer;
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", slider);
} else {
    slider();
}
