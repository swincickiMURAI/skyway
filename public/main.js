constant parallax = document.getElementById("parallax");

ScrollTrigger.create({
animation: gsap.from(".logo", {
y: "50vh",
scale: 6,
yPercent: -40,
}),
scrub: true,
trigger: ".content",
start: "top bottom",
endTrigger: ".content",
end: "top center",
});


window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
console.log('Offset: ' + offset);
parallax.style.backgroundPositionY = offset * 0.7 + "px";
});






