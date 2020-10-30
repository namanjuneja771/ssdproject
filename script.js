var a=2.4,b=1.05,c=0.38;
var type="Organic";
document.getElementById("modeltype").onchange=function(){
type=document.getElementById("modeltype").value;
if(type=="Organic"){
  a=2.4;
  b=1.05;
  c=0.38;
}
if(type=="Semi-detached"){
  a=3;
  b=1.12;
  c=0.35;
}
if(type=="Embedded"){
  a=3.6;
  b=1.2;
  c=0.32;
} 
};
document.getElementById("submit").onclick=function(){
var size=document.getElementById("psize").value;
if((type=="Organic" && size<=50) || (type=="Semi-detached" && size>=50 && size<=300) || (type=="Embedded" && size<=500 && size>=300))
{
var effort=a*Math.pow(size,b);
var tdev=2.5*Math.pow(effort,c);
var n=effort/tdev;
document.getElementById("effort").innerHTML="Effort (in PM): "+effort;
document.getElementById("time").innerHTML="Time (in Months): "+tdev;
document.getElementById("n").innerHTML="Persons: "+Math.ceil(n);
}
else{
  document.getElementById("psize").value=0;
  document.getElementById("effort").innerHTML="Effort (in PM): "+0;
  document.getElementById("time").innerHTML="Time (in Months): "+0;
  document.getElementById("n").innerHTML="Persons: "+0;
  alert("Re-enter");
}
};
