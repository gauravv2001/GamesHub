let msg = document.getElementById("msg")
let sumel = document.getElementById("sum")
let card = document.getElementById("card")
let pric = document.getElementById("price")
let bidd = document.getElementById("bid")
let bam = document.getElementById("bam")
let message = ""
isalive=true
hasblackjack= false
let cost = 500
let bidding = 0
let allcard= []
let bidamount=0
let sum =0


function start(){
    bid()
    pric.textContent="Money:"
    pric.textContent+=cost
    isalive=true
    
    let firstcard =  randomnum();
let secondcard = randomnum();
 allcard= [firstcard,secondcard]
    sum = firstcard + secondcard
    render()
}
//firstcard=math.round()

//secondcard = math.round()
function randomnum(){
    
   let ran= Math.floor(Math.random() * 14);
   if(ran==1)
   {
    return 11
   }
   else if( ran==11||ran==12||ran==13){
    return 10
   }
    return ran
}

function render()
{   
    
    display()
    sumel.textContent = "Sum:" +" "+ sum
    if(sum<=20){
        message="do you want to draw a new card"

    }
   else if(sum===21){
        message = "You hav got a black jack"
        isalive=false
        hasblackjack=true
    }
    else if(sum>=22){
        message = "you are out of the game"
        isalive= false
    }

    msg.textContent = message
    won()
}
function newcard(){
    if(isalive===true){
    
    let newca=randomnum()
    allcard.push(newca)
    sum += newca
    render()
    }
}

function display(){
    card.textContent = 'Cards:'
    for(let i=0;i<allcard.length;i++){
        card.textContent +=  allcard[i] +" "
    }
}
function bid(){
    bidamount=bidding
    bidd.textContent = "Bids:"
    bidd.textContent += bidamount
    cost = cost-bidamount
    won()
    pric.textContent="Money:"
    pric.textContent+=cost

}

function plus(){
    bidding = bidding  + 15
    
    bam.textContent="Bid Amount:"
    bam.textContent+=bidding
   

}
function minus(){
    bidding = bidding  - 10
   
    bam.textContent="Bid Amount:"
    bam.textContent+=bidding
}
function won(){
    if (hasblackjack==true){
        cost+=bidamount
    }
}