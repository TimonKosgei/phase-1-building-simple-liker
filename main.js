// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
const heartList = Array.from(document.querySelectorAll('.like-glyph'))
const modal =document.querySelector('#modal')
heartList.forEach(element => {
  element.addEventListener('click',() =>{
    mimicServerCall()
    .then(() => {
      if(element.textContent === EMPTY_HEART){
        element.textContent = FULL_HEART;
        element.classList.add('activated-heart')
      }else{
        element.textContent = EMPTY_HEART;
        element.classList.remove('activated-heart')
      }
      
    })
    .catch((error)=>{
      modal.classList.remove('hidden')
      setTimeout(()=>{
        modal.classList.add('hidden')
      },3000)
    })
  })
});
