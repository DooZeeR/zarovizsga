const data = [
    {
        title:"Mango Bay",
        sub:"Mad Scientist Beer",
        text:"Pale Ale - American"
    },
    {
        title:"Távoli Galaxis",
        sub:"Rothbeer Brewery",
        text:"IPA- American"
    },
    {
        title:"Flying Rabbit AIPA",
        sub:"MONYO Brewing Co.",
        text:"IPA - American"
    },
    {
        title:"Liquid Cocaine",
        sub:"Mad Scientist Beer",
        text:"IPA - Imperial"
    },
    {
        title:"Organic Chocolate Stout",
        sub:"Samuel Smith Old Brewery",
        text:"Stout - English"
    },
    {
        title:"Bracia",
        sub:"Thornbridge Brewery",
        text:"Strong Ale - English"
    },
    {
        title:"Oatmeal Stout",
        sub:"Samuel Smith Old Brewery",
        text:"Stout - Oatmeal"
    },
    {
        title:"Bad Tokyo Horizon",
        sub:"Brewdog",
        text:"Stout - American Imperial"
    },
    {
        title:"Vintage Ale",
        sub:"Fuller's",
        text:"Old Ale"
    },
    {
        title:"All the Leaves are Brown",
        sub:"Tempest Brewing Company",
        text:"Brown Ale - American"
    }
];



function pageLoaded() {
    let cardBox = document.getElementById("CardBox");
    let num = 1;
    for (const card of data) { 
        let cardHTML = `
        <div class="cards">
            <div class="num"><p>${num}</p></div>
            <h1>${card.title}</h1>
            <hr>
            <h3>${card.sub}</h3>
            <p>${card.text}</p>
            <button>details 
                <span id="arrow" class="material-icons-outlined">
                arrow_forward
                </span>
            </button>
        </div>`;

        num+=1;
            
        cardBox.insertAdjacentHTML("beforeend" , cardHTML);
    }


}

window.addEventListener("load", pageLoaded);