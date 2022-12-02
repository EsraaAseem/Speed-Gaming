let start=document.querySelector(".start");
let word=document.querySelector(".the-word");
let input=document.querySelector(".input");
let wordsarr=document.querySelector(".upcoming-words");
let secore=document.querySelector(".got");
let total=document.querySelector(".total");
let time=document.querySelector(".time span");
let finish=document.querySelector(".finish");
let level=document.querySelector(".lvl");
let levels=document.querySelectorAll(".levels .btn")
let startagain=document.querySelector(".rediv");
let btnfinish=document.querySelector(".btnfinish");
let defarr=[,"Completed","fantastic","Amazing","yesterday","breakfast","watermelon","liybrary","telephone","bathroom","dinnerroom"];
let medarr=["better","launch","dinner","special","ltouch","laptop","singing","repeat","eating","markting"];
let easyarr=["bye","near","good","bed","bad","far","near","see","cry","now"];
let arr=easyarr;
level.innerHTML=="Easy";
levels.forEach((e)=>{
    e.onclick=function(){
        level.innerHTML=e.innerHTML;
        if(level.innerHTML=="Easy")
        {
           arr=easyarr
        }
        else if(level.innerHTML=="Deficault"){
            arr=defarr;
       }
        else if(level.innerHTML="Medium")
        {
          arr=medarr
        }
  
    }
})
total.innerHTML=arr.length;
start.onclick=function(){
    this.remove();
    input.focus();
    
    startPlay();

}
function startPlay(){
    let index=Math.trunc(Math.random()*arr.length);
    word.innerHTML=arr[index];
    arr.splice(index,1);
     wordsarr.innerHTML=" ";
    for(let i=0;i<arr.length;i++)
    {
       wordsarr.innerHTML+="\t"+arr[i]+ "\\" ; 
    }
      repeate();
}
function repeate(){
    time.innerHTML=5;

    let stop=setInterval(()=>{
        time.innerHTML--;
        if(time.innerHTML=="0")
        {
            clearInterval(stop);
        if(word.innerHTML.toLowerCase()===input.value.toLowerCase())
        {
        input.value="";
       secore.innerHTML++;
       if(arr.length>0)
       {
        startPlay();
       }
       else{
           finish.innerHTML="congratlation"
           wordsarr.remove();
           btnfinish.style.display="block";
       }

       }
       else{
        
           finish.innerHTML="Game Over"
           setTimeout(()=>{
            finish.style.display="none";
          },5000)
              setTimeout(()=>{
                btnfinish.style.display="block";
              },5500)
       }

        }

    },1500)
btnfinish.onclick=function(){
    setTimeout(()=>{
        location.reload();
       },500)
}
}
