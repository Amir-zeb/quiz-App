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
var qCount=0;
var score=0;
function next(){
    var optDiv=document.getElementById("opt-div");
    optDiv.innerHTML="";
    var headerDiv=document.getElementById("header");
    headerDiv.innerHTML="";
    qCount++;
    showQ(qCount);
}
function showQ(e){
    //sh q
    var question=document.getElementById("question-p");
    question.innerHTML=questions[e].q;
    //sh op
    var optDiv=document.getElementById("opt-div");
    for(i=0;i<questions[e].op.length;i++){
        var lab=document.createElement("li");
        var labTxt=document.createTextNode(questions[e].op[i]);
        var input=document.createElement("input");
        lab.setAttribute("class","active");
        input.setAttribute("type","checkbox");
        input.setAttribute("onclick","active(this)");
        lab.appendChild(input);
        lab.appendChild(labTxt);
        optDiv.appendChild(lab);
    }
    //sh header
    var headerDiv=document.getElementById("header");
    var qNum=document.createElement("h4");
        var x;
        x=qCount;
        x++;
    var qNumTxt=document.createTextNode("Question Number :"+x+"/"+questions.length);        
    qNum.appendChild(qNumTxt);
    headerDiv.appendChild(qNum);
    
    //dynamic button
    var nxtbtn = document.getElementById('nxt');
    if(x==questions.length){
        nxtbtn.innerHTML="Submit";
        nxtbtn.removeAttribute("onclick","next()");
        nxtbtn.setAttribute("onclick","submit()");
    }
}
function active(e){
    if(e==questions[0].ans){
        score+=10;
    }
    else{
        score+=0;
    }
    console.log(score);
}