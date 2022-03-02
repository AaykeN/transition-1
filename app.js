const cursor_circle = document.querySelector(".cursor-circle"),
    cursor = document.querySelectorAll(".cursor");


let timeline = gsap.timeline();

timeline

    .to(".image-wrap", {
        height: "550px",
        backgroundSize: "100%",
        duration: 1.5,
        ease: "power4.inOut",
    })

    .to(
        ".image-wrap", {
            height: "250px",
            duration: 1.3,
            backgroundPosition: "50% 58%",
            ease: "power2.inOut",
            y: 0,

        }, 1.5)

    .from(".bigName", {
        y: getYDistance(".bigName"),
        duration: 1.4,
        ease: "power2.inOut",
    }, 1.4)

    .from(".hide", {
        opacity: 0,
        duration: 1.3,
        ease: "power2.inOut",

    }, 1.5);

function getYDistance(el) {
    return (window.innerHeight - document.querySelector(el).getBoundingClientRect().top);
}


// CURSOR // 
window.addEventListener('mousemove', (e) => {
    let xPosition = e.clientX;
    let yPosition = e.clientY;

    cursor.forEach(el => {
        el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
    })
});