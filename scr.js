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


//plz usiamo ordine umano ha più senso, si inizia da 1
const doms = [["Domanda1", "risp1","risp2","risp3","risp4",2], 
              ["Domanda2", "risp1","risp2","risp3","risp4",3],
              ["Domanda3", "risp1","risp2","risp3","risp4",1]
             ]


function randDom()
{

    const mainContainer = document.getElementById("mainContainer");
    const question = mainContainer.querySelector("#questionTitle");

    const questionIndex = getRndInteger(0,3);

    question.innerHTML = "<h3>" + doms[questionIndex][0] + "<\h3>";
    question.value = questionIndex;
    arr = shuffle();
    mainContainer.style.display = "block";
    console.log(arr)
    for(let i=0; i<4; i++)
    {
        mainContainer.querySelector("#ans" + (i+1)).value = arr[i];
        mainContainer.querySelector("#ans" + (i+1) + "Label").innerHTML = doms[questionIndex][arr[i]];
    }
    
    
}

function nextQuestion()
{
    const scoreObj = document.getElementById("score").lastElementChild;

    const mainContainer = document.getElementById("mainContainer");
    const question = mainContainer.querySelector("#questionTitle");
    const questionIndex = question.value;
    for(let i=1; i<=4; i++)
    {
        const tempRadio = mainContainer.querySelector("#ans" + i);
        if(tempRadio.checked && doms[questionIndex][5] == tempRadio.value)
        {
            scoreObj.innerHTML = parseInt(scoreObj.innerHTML)+1;
        }
    }
    randDom();


}

function startSimulation()
{
    const scoreObj = document.getElementById("score").lastElementChild;
    scoreObj.innerHTML = "0";
    randDom();
    const nextButtonObj = document.getElementById("nextButton");
    nextButtonObj.style.display = "inline";
    const startButtonObj = document.getElementById("startButton");
    startButtonObj.style.display = "none";

}