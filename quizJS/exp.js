
//experi/....

//console.log("navneet");

const homeBox1 = document.querySelector(".home1-box");
const homeBox2 = document.querySelector(".home2-box");
const homeBox3 = document.querySelector(".home3-box");
const homeBox4 = document.querySelector(".home4-box");
const homeBox5 = document.querySelector(".home5-box");
const homeBox6 = document.querySelector(".home6-box");
const homeBox7 = document.querySelector(".home7-box");
const UhomeBox = document.querySelector(".Uhome-box");
const mhomeBox = document.querySelector(".Mhome-box");
const r1homeBox = document.querySelector(".R1home-box");
const r2homeBox = document.querySelector(".R2home-box");
const r3homeBox = document.querySelector(".R3home-box");
const nhomeBox = document.querySelector(".nhome-box");
const shomeBox = document.querySelector(".shome-box");

function next1(){
	mhomeBox.classList.add("hide");
	homeBox1.classList.remove("hide");
}
function next2(){
	mhomeBox.classList.add("hide");
	homeBox2.classList.remove("hide");	
	
}
function next3(){
	mhomeBox.classList.add("hide");
	homeBox3.classList.remove("hide");
	
}
function next4(){
	mhomeBox.classList.add("hide");
	homeBox4.classList.remove("hide");
	
}
function next5(){
	mhomeBox.classList.add("hide");
	homeBox5.classList.remove("hide");
}
function next6(){
	mhomeBox.classList.add("hide");
	homeBox6.classList.remove("hide");
}
function next7(){
	mhomeBox.classList.add("hide");
	homeBox7.classList.remove("hide");
}
function module1()
{
	homeBox1.classList.add("hide");
	mhomeBox.classList.remove("hide");	
}
function module2()
{
	homeBox2.classList.add("hide");
	mhomeBox.classList.remove("hide");	
}
function module3()
{
	homeBox3.classList.add("hide");
	mhomeBox.classList.remove("hide");	
}
function module4()
{
	homeBox4.classList.add("hide");
	mhomeBox.classList.remove("hide");	
}
function module5()
{
	homeBox5.classList.add("hide");
	mhomeBox.classList.remove("hide");	
}
function module6()
{
	homeBox6.classList.add("hide");
	mhomeBox.classList.remove("hide");	
}
function module7()
{
	homeBox7.classList.add("hide");
	mhomeBox.classList.remove("hide");	
}
//###########################################################
function nextstp1(){
	mhomeBox.classList.add("hide");
	nhomeBox.classList.remove("hide");
}
function nextstp2(){
	nhomeBox.classList.add("hide");
	r1homeBox.classList.remove("hide");
}
function nextstp3(){
	r1homeBox.classList.add("hide");
	r2homeBox.classList.remove("hide");
}
function nextstp4(){
	r2homeBox.classList.add("hide");
	r3homeBox.classList.remove("hide");
}
function solutionStp(){
	r3homeBox.classList.add("hide");
	shomeBox.classList.remove("hide");
}
function mainModule(){
	shomeBox.classList.add("hide");
	mhomeBox.classList.remove("hide");
}