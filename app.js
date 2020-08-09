var questions=[
    {
    q:"earth is round",
    ans:"true",
    op:["true","false"]
},
    {
        q:"2+2=",
        ans:"4",
        op:["4","5","10","15"]
},
    {
        q:"3+2=",
        ans:"5",
        op:["4","5","10","15"]
    }
]

function showQ(e){
    //sh q
    var question=document.getElementById("question-p");
    question.innerHTML=questions[e].q;
    //sh op
    var optDiv=document.getElementById("opt-div");
    for(i=0;i<questions[e].op.length;i++){
        var lab=document.createElement("label");
        var labTxt=document.createTextNode(questions[e].op[i]);        
        var input=document.createElement("input");
        input.setAttribute("type","radio");
        input.setAttribute("name","q-op");
        input.setAttribute("onclick","check(this)");
        lab.setAttribute("class","active");
        lab.appendChild(input);
        lab.appendChild(labTxt);
        optDiv.appendChild(lab);
        var br=document.createElement("br");
        optDiv.appendChild(br);
    }
    //sh header
    var headerDiv=document.getElementById("header");
    var qNum=document.createElement("div")
    qNum.setAttribute("class","side")
        var x;
        x=qCount;
        x++;
    var qNumTxt=document.createTextNode("Question Number :"+x+"/"+questions.length);        
    qNum.appendChild(qNumTxt);
    headerDiv.appendChild(qNum);
    var qtimer=document.createElement('div')
    qtimer.setAttribute("id",'quiz-time-left')
    headerDiv.appendChild(qtimer)

}

var qCount=0;
var score=0;
var wrongans=0;
var correctans=0;

function next(){
    var optDiv=document.getElementById("opt-div");
    optDiv.innerHTML="";
    var headerDiv=document.getElementById("header");
    headerDiv.innerHTML="";
    if(window.value===questions[qCount].ans){
        score++;
        console.log('Score');
    }
    else{
        wrongans++;
        console.log('Wrong-ans');
    }
    qCount++;
    if(qCount==questions.length){
        var header=document.getElementById("main");
        header.innerHTML="";
        var h1=document.createElement("h1")
        var h1txt=document.createTextNode("Result")
        var br=document.createElement("br")
        var p1=document.createElement("p")
        var p1txt=document.createTextNode("Correct Ans " +score)
        var p2=document.createElement("p")
        var p2txt=document.createTextNode("Wrong Ans " +wrongans)
        p1.setAttribute("class","para")
        h1.appendChild(h1txt)
        header.appendChild(h1)
        header.appendChild(br)
        p1.appendChild(p1txt)
        header.appendChild(p1)
        header.appendChild(br)
        p2.appendChild(p2txt)
        header.appendChild(p2)
        
    }
    else{
        showQ(qCount);
    }
}
function check(e){
    window.value=e.parentNode.lastChild.nodeValue;
    console.log(value)
}




var total_seconds = 30*1;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);

function CheckTime(){
document.getElementById("quiz-time-left").innerHTML
= 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;

if(total_seconds <=0){
setTimeout('document.quiz.submit()',1);
} else {
total_seconds = total_seconds -1;
c_minutes = parseInt(total_seconds/60);
c_seconds = parseInt(total_seconds%60);
setTimeout("CheckTime()",1000);
}}
setTimeout("CheckTime()",1000);