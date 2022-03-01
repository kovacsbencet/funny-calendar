function loadEvent() {

    let rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend",`
        <section class="grid-container" id="january"></section>
        <section class="grid-container" id="february"></section>
        <section class="grid-container" id="march"></section>
        <section class="grid-container" id="april"></section>
        <section class="grid-container" id="may"></section>
        <section class="grid-container" id="june"></section>
        <section class="flex-container" id="july"></section>
        <section class="flex-container" id="august"></section>
        <section class="flex-container" id="september"></section>
        <section class="flex-container" id="october"></section>
        <section class="flex-container" id="november"></section>
        <section class="block-container" id="december"></section>
    `)

    function January(){

    let january = document.getElementById("january")
    
    for (let day = 1; day <= 31; day++){
        
        january.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">January</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
        
    }
    January()

    /*----------FEBRUARY----------*/

    function February(){

    let february = document.getElementById("february")
    
    for (let day = 1; day <= 28; day++){
        
        february.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">February</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
        
    }
    February()

    /*----------MARCH----------*/

    function March(){

    let march = document.getElementById("march")
        
    for (let day = 1; day <= 31; day++){
            
        march.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">March</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    March()

    /*----------APRIL----------*/

    function April(){

    let april = document.getElementById("april")
        
    for (let day = 1; day <= 30; day++){
            
        april.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">April</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    April()

    /*----------MAY----------*/

    function May(){

    let may = document.getElementById("may")
        
    for (let day = 1; day <= 31; day++){
            
        may.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">May</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    May()

    /*----------JUNE----------*/

    function June(){

    let june = document.getElementById("june")
        
    for (let day = 1; day <= 30; day++){
            
        june.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">June</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    June()

    /*----------JULY----------*/

    function July(){

    let july = document.getElementById("july")
        
    for (let day = 1; day <= 31; day++){
            
        july.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">July</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    July()

    /*----------AUGUST----------*/

    function August(){

    let august = document.getElementById("august")
        
    for (let day = 1; day <= 31; day++){
            
        august.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">August</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    August()

    /*----------SEPTEMBER----------*/

    function September(){

    let september = document.getElementById("september")
        
    for (let day = 1; day <= 30; day++){
            
        september.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">September</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    September()

    /*----------OCTOBER----------*/

    function October(){

    let october = document.getElementById("october")
        
    for (let day = 1; day <= 31; day++){
            
        october.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">October</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    October()

    /*----------NOVEMBER----------*/

    function November(){

    let november = document.getElementById("november")
        
    for (let day = 1; day <= 30; day++){
            
        november.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">November</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    November()

    /*----------DECEMBER----------*/

    function December(){

    let december = document.getElementById("december")
        
    for (let day = 1; day <= 31; day++){
            
        december.insertAdjacentHTML("beforeend",`
            <div class="card">
                <time datetime="YYYY">2022</time>
                <time datetime="MM">December</time>
                <time datetime="DD">${day}</time>
            </div>
        `)
        }
    }   
    December()
    
    /*----------ONCLICK EVENT----------*/

    let allCard = document.getElementsByClassName("card");

    for (let i = 0; i < allCard.length; i++){

        allCard[i].onclick = function(){
            this.classList.add("red")

            let rotateCard = allCard.getContext("2D")

            rotateCard.rotate(20 * Math.PI /180);
            rotateCard.fillRect(50, 20, 100, 50);
            
        }
    }

}
window.addEventListener("load", loadEvent)
