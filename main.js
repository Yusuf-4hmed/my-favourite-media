const narutoShippuden = document.getElementById("naruto-shippuden")

narutoShippuden.addEventListener("mouseenter", () => {
    narutoShippuden.style.transition = ("transform 0.2s ease-in-out")
    narutoShippuden.style.transform = "scaleY(1.3)"


    const narutoGifs = `<div id="naruto-container" class="absolute flex gap-20 ">
        <img class="rounded-2xl max-w-60 max-h-60 object-contain -translate-x-40 -translate-y-50 rotate-353" src="assets/naruto-shippuden-1.gif" alt="naruto-power-up">
        <img class="rounded-2xl max-w-60 max-h-60 object-contain -translate-x-30  -translate-y-60 rotate-3" src="assets/naruto-shippuden-2.gif" alt="kakashi-attack">
        <img class="rounded-2xl max-w-60 max-h-60 object-contain -translate-x-23   -translate-y-50 rotate-357" src="assets/naruto-shippuden-3.gif" alt="minato-attack">
    </div>`
    narutoShippuden.insertAdjacentHTML("afterend", blank)
    narutoShippuden.insertAdjacentHTML("afterend", narutoGifs)

    const narutoContainer = document.getElementById("naruto-container");
    const children = narutoContainer.children;
    
    for (let child of children) {
        child.style.transition = "transform 0.2s ease-in-out";
        child.style.transform = "scale(0)"
    }
 

    setTimeout(() => {
       for (let child of children) {
        child.style.transform = "scale(1)";
    } 
    })
})

narutoShippuden.addEventListener("mouseleave", () => {
    narutoShippuden.style.transform = "scaleY(1)"
    
    const narutoContainer = document.getElementById("naruto-container");
    const children = narutoContainer.children;

    for (let child of children) {
        child.style.transform = "scale(0)"; 
    }

    setTimeout(() => {
        narutoShippuden.nextElementSibling.remove()
    }, 200)
})

const tasm = document.getElementById("tasm");

tasm.addEventListener("mouseenter", () => {
    tasm.style.transition = "transform 0.2s ease-in-out"
    tasm.style.transform = "scaleY(1.3)"

    const tasmGifs = `
    <div id="tasm-container" class="absolute flex gap-20 ">
        <img class="rounded-2xl max-w-60 max-h-40 object-contain -translate-x-23 -translate-y-60 rotate-7" src="assets/the-amazing-spider-man-1.gif" alt="spider-man-pov-swing">
        <img class="rounded-2xl max-w-60 max-h-40 object-contain  -translate-y-67 rotate-353" src="assets/the-amazing-spider-man-2.gif" alt="spider-man-electro-fight">
        <img class="rounded-2xl max-w-60 max-h-40 object-contain translate-x-33 -translate-y-55 rotate-3" src="assets/the-amazing-spider-man-3.gif" alt="spider-man-swing">
    </div>
    `
    tasm.insertAdjacentHTML("afterend", blank)
    tasm.insertAdjacentHTML("afterend", tasmGifs)

    const tasmContainer = document.getElementById("tasm-container");
    const children = tasmContainer.children;
    
    for (let child of children) {
        child.style.transition = "transform 0.2s ease-in-out";
        child.style.transform = "scale(0)"
    }
 

    setTimeout(() => {
       for (let child of children) {
        child.style.transform = "scale(1)";
    } 
    })
})

tasm.addEventListener("mouseleave", () => {
    tasm.style.transform = ("scaleY(1)")

    const tasmContainer = document.getElementById("tasm-container");
    const children = tasmContainer.children;

    for (let child of children) {
        child.style.transform = "scale(0)"; 
    }

    setTimeout(() => {
        tasm.nextElementSibling.remove()
    }, 200)
})

const invincible = document.getElementById("invincible");

invincible.addEventListener("mouseenter", () => {
    invincible.style.transition = "transform 0.2s ease-in-out"
    invincible.style.transform = "scaleY(1.3)"

    const invicibleGifs = `
    <div id="invincible-container" class="absolute flex gap-20 ">
        <img class="rounded-2xl max-w-60 max-h-40 object-contain -translate-x-80 -translate-y-23 rotate-8 ease-in-out" src="assets/invincible-1.gif" alt="spider-man-pov-swing">
        <img class="rounded-2xl max-w-60 max-h-40 object-contain -translate-x-63 -translate-y-60 rotate-357" src="assets/invincible-2.gif" alt="spider-man-pov-swing">
        <img class="rounded-2xl max-w-60 max-h-40 object-contain -translate-x-50 -translate-y-30 rotate-3" src="assets/invincible-3.gif" alt="spider-man-pov-swing">
    </div>
    `;
    invincible.insertAdjacentHTML("afterend", blank)
    invincible.insertAdjacentHTML("afterend", invicibleGifs)
    

    const invincibleContainer = document.getElementById("invincible-container");
    const children = invincibleContainer.children;
    
    for (let child of children) {
        child.style.transition = "transform 0.2s ease-in-out";
        child.style.transform = "scale(0)"
    }
 

    setTimeout(() => {
       for (let child of children) {
        child.style.transform = "scale(1)";
    } 
    })
    
})

invincible.addEventListener("mouseleave", () => {
    invincible.style.transform = "scaleY(1)"

    const invincibleContainer = document.getElementById("invincible-container");
    const children = invincibleContainer.children;

    for (let child of children) {
        child.style.transform = "scale(0)"; 
    }

    setTimeout(() => {
        invincible.nextElementSibling.remove()
    }, 200)
    
    
    
})

const blank = ``;