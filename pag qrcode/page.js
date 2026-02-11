// 🌟 PARTÍCULAS
    const container = document.querySelector(".particulas");
    if (container) {
        for (let i = 0; i < 30; i++) {
            const p = document.createElement("span");
            p.classList.add("particula");
            p.style.left = Math.random() * 100 + "vw";
            p.style.animationDuration = 6 + Math.random() * 10 + "s";
            p.style.animationDelay = Math.random() * 5 + "s";
            container.appendChild(p);
        }
    }