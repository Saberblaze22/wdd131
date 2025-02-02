const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Pago Pago American Samoa",
        location: "Tafuna, Western District, American Samoa",
        dedicated: "2021, October, 30",
        area: 17000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/pago-pago-american-samoa-temple/pago-pago-american-samoa-temple-11241-main.jpg"
    },
    {
        templeName: "Tacoma Washington",
        location: "Federal Way, Washington, United States",
        dedicated: "Not dedicated as of yet",
        area: 45000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/tacoma-washington-temple/tacoma-washington-temple-56189-main.jpg"
    },
    {
        templeName: "Elko Nevada",
        location: "Elko, Nevada, United States",
        dedicated: "2022, May, 7",
        area: 10040,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/elko-nevada-temple/elko-nevada-temple-21919-main.jpg"
    }
  ];
  const templeCards=document.querySelector("#templeCards")
  const homeLink=document.querySelector("#home")
  const oldLink=document.querySelector("#old")
  const newLink=document.querySelector("#new")
  const largeLink=document.querySelector("#large")
  const smallLink=document.querySelector("#small")
  function Cards (array) {
    let cards=``;
    for (let i=0; i<array.length; i++){
        cards=cards+`<figure>
        <h3>${array[i].templeName}</h3>
        <ul>
        <li>loction: ${array[i].location}</li>
        <li>dedicated: ${array[i].dedicated}</li>
        <li>size: ${array[i].area} sq ft</li>
        </ul>
        <img src="${array[i].imageUrl}" alt="img of the ${array[i].templeName} temple" loading="lazy">
        </figure>" `}
        return cards
  }
templeCards.innerHTML=Cards(temples)

largeLink.addEventListener("click", ()=>{
    templeCards.innerHTML=Cards(temples.filter(temples=> temples.area>90000));
})
homeLink.addEventListener("click", ()=>{
    templeCards.innerHTML=Cards(temples);
})
smallLink.addEventListener("click", ()=>{
    templeCards.innerHTML=Cards(temples.filter(temples=> temples.area<10000));
})
newLink.addEventListener("click", ()=>{
    templeCards.innerHTML=Cards(temples.filter(temples=>Number(temples.dedicated.slice(0,4))>2000));
})
oldLink.addEventListener("click", ()=>{
    templeCards.innerHTML=Cards(temples.filter(temples=>Number(temples.dedicated.slice(0,4))<1900));
})