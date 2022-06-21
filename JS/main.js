// Click function for show the Modal
const buttonOne = document.getElementById('cosmo');
const buttonTwo = document.getElementById("whiskey");
const buttonThree = document.getElementById("maitai");

buttonOne.addEventListener("click", modalOne);
buttonTwo.addEventListener("click", modalTwo);
buttonThree.addEventListener("click", modalThree);

function modalOne(){
  var element = document.getElementById('cosmoModal');
  element.classList.add("active");
};

function modalTwo(){
  var element = document.getElementById('whiskeyModal');
  element.classList.add("active");
};

function modalThree(){
  var element = document.getElementById('maiModal');
  element.classList.add("active");
};

// Function for close the Modal

const byeC = document.getElementById('closeCosmo');
const byeW = document.getElementById('closeWhiskey');
const byeM = document.getElementById('closeMai');

byeC.addEventListener("click", closeModalC)
byeW.addEventListener("click", closeModalW)
byeM.addEventListener("click", closeModalM)

function closeModalC(){
  var element = document.getElementById('cosmoModal');
  element.classList.remove("active");
}


function closeModalW(){
  var element = document.getElementById('whiskeyModal');
  element.classList.remove("active");
}

function closeModalM(){
  var element = document.getElementById('maiModal');
  element.classList.remove("active");
}
