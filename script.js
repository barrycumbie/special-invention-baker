// add in draggable.
//make squares per seats w/loop
//baker is some action 


//drag and find position? 
//click and get position? 

function myCoolFunction(x,y,z) {
  return x+y/z; 
}
myCoolFunction(2,3,4)

// A $( document ).ready() block.
$( document ).ready(
  function() {
    console.log( "ready!" );
  }
);


$(document)
  .on(
    'click', 
      (event)=> 
      {
        alert(event.target.id); 
        let $clicked = $('#'+event.target.id );  
        alert($clicked.position().top);
        
        console.log(
          event.target.id, 
          $('#'+event.target.id)
          .position()
          .left);
})