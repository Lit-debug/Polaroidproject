/*function aggiorna()
{
    var posX = Math.floor(Math.random() * 501);
    var posY = Math.floor(Math.random() * 201);
    var rot = Math.floor(Math.random() * 91);
    var posX2 = Math.floor(Math.random() * 1001);
    var posY2 = Math.floor(Math.random() * 701);
    var rot2 = Math.floor(Math.random() * 181);
    var posX3 = Math.floor(Math.random() *301);
    var posY3 = Math.floor(Math.random() * 101);
    var rot3 = Math.floor(Math.random() * 361);



    var myArray = document.getElementsByClassName("red");
    console.log(myArray.length);

    myArray[0].style.transform = "rotate(" + rot + "deg)";
    myArray[0].style.top= posY + "px";
    myArray[0].style.left= posX + "px";

    var myArray = document.getElementsByClassName("blue");
    console.log(myArray.length);
    myArray[0].style.transform = "rotate(" + rot2 + "deg)";
    myArray[0].style.top= posY2 + "px";
    myArray[0].style.left= posX2 + "px";

    var myArray = document.getElementsByClassName("cyan");
    console.log(myArray.length);
    myArray[0].style.transform = "rotate(" + rot3 + "deg)";
    myArray[0].style.top= posY3 + "px";
    myArray[0].style.left= posX3 + "px";

} 

aggiorna(); */

function aggiornatutto()
{

var lenDiv = document.getElementsByTagName("div")

    for(var i = 0; i<lenDiv.length; i++ )
    {
     var posX = Math.floor(Math.random() * 1221);
    var posY = Math.floor(Math.random() * 51);
    var rot = Math.floor(Math.random() * 321);

    lenDiv[i].style.transform = "rotate(" + rot + "deg)";
    lenDiv[i].style.left = posX + "px";
    lenDiv[i].style.top = posY + "px";
    }
}

aggiornatutto();

async function fetchImmaginiJSON() {
    const response = await fetch('file.json');
    const polaroid = await response.json();
    console.log(red);

    console.log(red.immagini.length);
    for (var i=0; i < polaroid.immagini.length; i++){
        console.log(red.immagini[i].didascalia);

        const div = document.createElement("div");
        //div.innerHTML = div.immagini[i].didascalia;
        div.classList.add("red");
        document.getElementById("album").appendChild(div);

        const img = document.createElement("img");
        img.src = div.immagini[i].url;
        div.appendChild(img);

        const p = document.createElement("p");
        div.innerHTML = div.immagini[i].didascalia;
        p.classList.add("didascalia");
        div.appendChild(p);


    }
    aggiornatutto()

  }

  fetchImmaginiJSON();
  
