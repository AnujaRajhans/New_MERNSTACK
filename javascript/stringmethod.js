// rcsubmit=() => { 
//     rc1=document.getElementById("selectrc").value;
//     rc2=document.getElementById("rcarea").value;
//     rc3=document.getElementById("rcperimeter").value;

//     if('rectangle'==rc1 ){
//         document.getElementById('resultrc').innerHTML=rc2*rc3;
//         document.getElementById('resultcc').innerHTML=2*(rc2+rc3);
//     }
//     else{
//         document.getElementById('resultrc').innerHTML=3.14*(rc2*rc2);
//         document.getElementById('resultcc').innerHTML=2*(3.14+rc2);
//     }
//     return false;
// }

// result=() => {
//     cf=document.getElementById("convcf").value;
//     document.getElementById('resultt').innerHTML = (cf * 9/5) + 32 ;
//     return false;
// }
// res=() => {
//     fc= document.getElementById("convcf").value;
//     document.getElementById('resultt').innerHTML = 5/9*(fc-32) ;
//     return false;
// }

// cal=() => {
//     pp= document.getElementById("p").value;
//     rr= document.getElementById("r").value;
//     nn= document.getElementById("n").value;
//     document.getElementById('calc').innerHTML = (pp*rr*nn/100);
//     return false;
// }

// bt1=() => {
//     addresult= document.getElementById("para").value;
//     document.getElementById('res').innerHTML = addresult.split(" ").length;
// }
// bt2=() => {
//     addresult= document.getElementById("para").value;
//     document.getElementById('res').innerHTML = addresult.length;
// }
// bt3=() => {
//     addresult= document.getElementById("para").value;
//     document.getElementById('res').innerHTML = addresult.split(" ").length - 1;
// }
// bt4=() => {
//     addresult= document.getElementById("para").value;
//     document.getElementById('res').innerHTML = addresult.length;
// }
// bt5=() => {
//     addresult= document.getElementById("para").value;
//     str2 = addresult.toLowerCase().split(' ');
//     for(var i=0;i<str2.length;i++){
//         str2[i]=str2[i].charAt(0).toUpperCase() + str2[i].slice(1);
//     }
//     document.getElementById('res').innerHTML= str2.join(' ');
// }
// bt6=() => {
//     addresult= document.getElementById("para").value;
//     document.getElementById('res').innerHTML = addresult.length;
//     str='aeu';
//     val=0;
//     for(var i=0;i<str.length;i++){
//     if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         val++;
//     }   
// }
// console.log(val);
    
// }
// bt7=() => {
//     str= document.getElementById("para").value;
//     val=0;
//     for(var i=0;i<str.length;i++){
//     if(str[i]!=='a' && str[i]!=='e' && str[i]!=='i' && str[i]!=='o' && str[i]=='u'){
//         val++;
//     }   
// }
//     console.log(val);
//     document.getElementById('res').innerHTML = val;
// }
// bt8=() => {
//     addresult= document.getElementById("para").value;
//     split 
//     document.getElementById('res').innerHTML = addresult.sort();
// }
// bt9=() => {
//     addresult= document.getElementById("para").value;
//     document.getElementById('res').innerHTML = addresult.toUpperCase();
// }
// bt10=() => {
//     addresult= document.getElementById("para").value;
//     document.getElementById("res").innerHTML = addresult.toLowerCase();
// }
  

time=() => {
    t=document.getElementById("tt").value;
    t1=document.getElementById("th").value;
    t2=document.getElementById("tm").value;
    if(t1== 'hrs' && t2== 'mins'){
        document.getElementById('timee').innerHTML= t*60;
    }
    else if(t1== 'mins' && t2=='hrs'){
        document.getElementById('timee').innerHTML= t/60;
    }
    else{
        document.getElementById('timee').innerHTML='invalid selection';
    }
    return false;
}

 





