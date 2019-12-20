var burger = document.querySelector('#burger');
var marshmallow = document.querySelector('#marshmallow');
var chocolate = document.querySelector('#chocolate');
var gummi = document.querySelector('#gummi');
var navSection= document.querySelector('nav');
var burgerInfo = document.querySelector('.cheesburger-info');
var marshmallowInfo = document.querySelector('.marshmallow-info');
var chocolateInfo = document.querySelector('.chocolate-info');
var gummiInfo = document.querySelector('.gummi-info');
var messageSlot= document.querySelector('#message-slot');

navSection.addEventListener('click', showInfo);


function showInfo(){
  event.target.classList.add('active');
  deActivateNavItem();
}

function deActivateNavItem(){
  if (event.target===burger){
    marshmallow.classList.remove("active");
    chocolate.classList.remove("active");
    gummi.classList.remove("active");
    messageSlot.innerHTML=`<section><img src="assets/happy-burger.jpg">The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.</section>`

  } else if (event.target===marshmallow){
    burger.classList.remove("active");
    chocolate.classList.remove("active");
    gummi.classList.remove("active");
    messageSlot.innerHTML= `<section><img src="assets/marshmallow.jpg">Jelly marshmallow brownie danish pie. Cake donut bonbon chocolate bar brownie. Sweet roll jelly beans tootsie roll powder sweet jelly beans dragée biscuit powder. Macaroon cookie soufflé ice cream chupa chups.`

  } else if (event.target===chocolate){
    marshmallow.classList.remove("active");
    burger.classList.remove("active");
    gummi.classList.remove("active");
    messageSlot.innerHTML= `<section><img src="assets/chocolate.jpg"> Chocolate gingerbread jelly-o sweet. Powder brownie soufflé. Sweet roll bonbon dragée dragée muffin.`

  } else if (event.target===gummi){
    marshmallow.classList.remove("active");
    burger.classList.remove("active");
    chocolate.classList.remove("active");
    messageSlot.innerHTML= `<section><img src="assets/gummi.jpg"> Chocolate bar gummi bears ice cream marshmallow tart cookie marshmallow. Carrot cake gummi bears marshmallow pastry brownie liquorice. Jelly-o jelly tart tart ice cream. Oat cake soufflé caramels pudding tiramisu chocolate cake lollipop donut.`
  }
}
