function showModal(){
    document.querySelector('.form').classList.add('overlay')
    document.querySelector('.loginform').classList.add('showloginform')
    
}

function closeModal(){
    document.querySelector('.form').classList.remove('overlay')
    document.querySelector('.loginform').classList.remove('showloginform')
    
}

var btnlogin=document.querySelector(".login");
btnlogin.addEventListener("click",showModal)


var c=document.querySelector(".loginform span");
c.addEventListener("click",closeModal)

const Search=document.getElementById('myInput')
Search.addEventListener("keyup", function(event) {
    myFunction()
   
   
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      location.href="cplusplus/cplusplusindex.html";
    }
  });
  



// JavaScript code
function  myFunction() {
	let input = document.getElementById('myInput')
	let x = document.getElementsByClassName('categoriesbox');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].childNodes[3].innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="block";
            			
		}
	}
    // input.value = ''
}

function reset(){
    let x = document.getElementsByClassName('categoriesbox');
	
	for (i = 0; i < x.length; i++) {
		
			x[i].style.display="block";				
	
	}
}


// const searchHome =()=>{
//     let fillter = document.getElementById('myInput').value.toLowerCase();
//     let search_text = document.getElementById('categoriesSearch');
//     let third_heading = search_text.getElementsByTagName('h3');
//     for(var i= 0;i<third_heading.length;i++){

//     }
// }

