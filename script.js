var videoFirst = document.getElementById('zxc');
var videoSecond = document.getElementById('zxcc');
var videoThird = document.getElementById('zxccc');

var main = document.getElementById('mainVideo');

var first_video = document.getElementById('first');
var second_video = document.getElementById('second');
var third_video = document.getElementById('third');



videoFirst.addEventListener("click", () => {
    var memorysrc = main.src;
    main.src = first_video.src;
    first_video.src = memorysrc;
})

videoSecond.addEventListener("click", () => {
    var memorysrc = main.src;
    main.src = second_video.src;
    second_video.src = memorysrc;
})

videoThird.addEventListener("click", () => {
    var memorysrc = main.src;
    main.src = third_video.src;
    third_video.src = memorysrc;
})
