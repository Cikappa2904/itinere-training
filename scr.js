function getRndInteger(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}

function shuffle() {
    var array = [1,2,3,4]
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const doms = [["Domanda1", "risp1","risp2","risp3","risp4",2],
              ["Domanda2", "risp1","risp2","risp3","risp4",3],
              ["Domanda3", "risp1","risp2","risp3","risp4",1]
             ]


function randDom()
{
    //const doms = ["Domanda1", "Domanda2", "Domanda3"];

    const domanda = getRndInteger(0,3)

    document.getElementById("dom").innerHTML = doms[domanda][0]
    arr = shuffle();
    for(var i=0; i<4; i++)
    {
        document.getElementById("ans"+i).innerHTML = doms[domanda][arr[i]]
    }
    
    
}