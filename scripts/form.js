const proddrop=document.querySelector("#proddrop")
const postreview=document.querySelector("#postreview")

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

function prodlist(array){
    let cards =`<option value="" disabled selected>select a product...</option>`;
    for(let i=0; i<array.length;i++){
        cards=cards+`<option value="${array[i].id}">${array[i].name}</option>`
    }
    return cards
}
proddrop.innerHTML=prodlist(products)