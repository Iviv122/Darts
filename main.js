let posX;
let posY;
let answers;
let howManyAnswers =100000;

function getRandom(min, max) {
    return Math.random() * (max - min+1) + min;
}

function Roll(){
    posX = Array(howManyAnswers).fill(0);
    posY = Array(howManyAnswers).fill(0);
    
    for(let i=0;i<howManyAnswers;i++){
        posX[i] = getRandom(-20,20);
        posY[i] = getRandom(-20,20);
    }
    

}

function Result(){
    answers = Array(howManyAnswers).fill(0);
    for(let i=0;i<howManyAnswers;i++){
        distance = Math.sqrt(Math.pow(20-posX[i],2)+Math.pow(20-posY[i],2)); 
        for(let j=0;j<10;++j){
            if(distance>=(j+1)*4){
                continue;
            }else{
                answers[i] = 10-j;
                break;
            }
        }
    }
    console.log(answers);
}

function calculateFrequencies() {
  let frequencies = Array(11).fill(0);
  for (let score of answers) {
      frequencies[score]++;
  }
  return frequencies;
}

function Place(){

    const ctx = document.getElementById('myChart');
    let labelsi = [];
    let answers1 = calculateFrequencies();

    for(let i=0;i<=10;i++){
        labelsi.push(i);
    }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsi,
      datasets: [{
        data: answers1,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}


function Main(){
    Roll();
    Result();
    Place();
}
Main();