function loadEvent() {

    let rootElement = document.getElementById("root")

    for (let day = 1; day <= 31; day++){
        
        rootElement.insertAdjacentHTML("beforeend",`
        <section id="january">
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">January</time>
                <time datetime="DD">${day}</time>
            </div>
        </section>
        `)
    }
}
window.addEventListener("load", loadEvent)
