// "use strict"
const butn0 = document.querySelector('.zero');
const butn1 = document.querySelector('.one');
const butn2 = document.querySelector('.two');
const butn3 = document.querySelector('.three');
const butn4 = document.querySelector('.four');
const butn5 = document.querySelector('.five');
const butn6 = document.querySelector('.six');
const butn7 = document.querySelector('.seven');
const butn8 = document.querySelector('.eight');
const butn9 = document.querySelector('.nine');
const butn10= document.querySelector('.dot');
const butn11= document.querySelector('.del');
const butn12= document.querySelector('.mult');
const butn13= document.querySelector('.div');
const butn14= document.querySelector('.plus');
const butn15= document.querySelector('.minus');
const butn16= document.querySelector('.equal');
const min1= document.querySelector('.min1');

// accessing the input area of html 
const disp=document.querySelector('input');
 
//list to push elements
list=[];

function pop()
{
    if(list.length==0){
        console.log('there is nothing to delete');
    }
    else
    list.pop();

}

function push(x)
{
    list.push(x);

}

//showing numbers on the display when buttons are  clicked  !!
butn0.addEventListener('click',function(){
console.log(display(butn0.textContent));
list.push(butn0.textContent);
});

butn1.addEventListener('click',function(){
console.log(display(butn1.textContent));
list.push(butn1.textContent);
});


butn2.addEventListener('click',function(){
console.log(display(butn2.textContent));
list.push(butn2.textContent);

});

butn3.addEventListener('click',function(){
  console.log(display(butn3.textContent));
  list.push(butn3.textContent);
});


butn4.addEventListener('click',function(){
  console.log(display(butn4.textContent));
  list.push(butn4.textContent);
});

butn5.addEventListener('click',function(){
  console.log(display(butn5.textContent));
  list.push(butn5.textContent);
});


butn6.addEventListener('click',function(){
  console.log(display(butn6.textContent));
  list.push(butn6.textContent);
  
});

butn7.addEventListener('click',function(){
  console.log(display(butn7.textContent));
  list.push(butn7.textContent);
});

butn8.addEventListener('click',function(){
console.log(display(butn8.textContent));
list.push(butn8.textContent);
});

butn9.addEventListener('click',function(){
console.log(display(butn9.textContent));
list.push(butn9.textContent);
});

// numbers end here ☝

//dot
butn10.addEventListener('click',function(){
console.log(display(butn10.textContent));
list.push(butn10.textContent)
});

//delete
butn11.addEventListener('click',function(){
  console.log(display(butn11.textContent));
  disp.value=' ';
  list.push(butn11.textContent)

});


//mult
butn12.addEventListener('click',function(){
console.log(display(butn12.textContent));
list.push(butn12.textContent);
});

//div
butn13.addEventListener('click',function(){
console.log(display(butn13.textContent));
list.push(butn13.textContent);
});

//plus
butn14.addEventListener('click',function(){
console.log(display(butn14.textContent));
list.push(butn14.textContent);
});

//minus
butn15.addEventListener('click',function(){
console.log(display(butn15.textContent));
list.push(butn15.textContent);
});

//equal sign clicked event handling 
butn16.addEventListener('click',function(){
// we use eval function to do the operations of string in js
  disp.value=ev(disp.value); 
  console.log(list);
  console.log(disp.value);
  list.push(disp.value);
  console.log(list.length);

 // using the shift function because I want to delete from the first
  while(list.length>1){
  console.log(list.shift());
  }
 
 console.log(list);
 list=list[0].split(''); // to split i.e to ['1','2','3'] , use [0] to access the string in the list only one is present by my logic
 disp.value=list.join(''); // to again make it normal
                            // i.e [123]

});


//eval function calling
function ev(ev){
  return eval(ev);
}

min1.addEventListener('click',function(){

disp.value=pop(disp.value);
disp.value=list.join("")
 });




// function that makes number display on the screen
display=function(x){  
return (disp.value+=x); // (+=) helps to concatinate the strings
}
  
//enter key pressed handing

document.addEventListener('keydown',function(e){
  
  console.log(e.key);
  if(e.key ==='Enter' ){
  console.log(   disp.value=ev(disp.value));
  }
 })