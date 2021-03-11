/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 639:
/***/ (() => {

$( document ).ready(function() {
let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    let that = this;
    let delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };

  
  window.onload = function() {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  
  
  // ****************** SLIDER ******************
      //slideshow style interval
  let autoSwap = setInterval( swap, 5000);

  //pause slideshow and reinstantiate on mouseout
  $('ul, span').hover(
    function () {
      clearInterval(autoSwap);
  }, 
    function () {
    autoSwap = setInterval( swap, 5000);
  });

  //global variables
  let items = [];
  let startItem = 1;
  let position = 0;
  let itemCount = $('.carousel li.items').length;
  let leftpos = itemCount;
  let resetCount = itemCount;

  //unused: gather text inside items class
  $('li.items').each(function(index) {
      items[index] = $(this).text();
  });

  //swap images function
  function swap(action = 'clockwise') {
    let direction = action;
    
    //moving carousel backwards
    if(direction == 'counter-clockwise') {
      let leftitem = $('.left-pos').attr('id') - 1;
      if(leftitem == 0) {
        leftitem = itemCount;
      }
      
      $('.right-pos').removeClass('right-pos').addClass('back-pos');
      $('.main-pos').removeClass('main-pos').addClass('right-pos');
      $('.left-pos').removeClass('left-pos').addClass('main-pos');
      $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
      
      startItem--;
      if(startItem < 1) {
        startItem = itemCount;
      }
    }
    
    //moving carousel forward
    if(direction == 'clockwise' || direction == '' || direction == null ) {
      function pos(positionvalue) {
        if(positionvalue != 'leftposition') {
          //increment image list id
          position++;
          
          //if final result is greater than image count, reset position.
          if((startItem+position) > resetCount) {
            position = 1-startItem;
          }
        }
      
        //setting the left positioned item
        if(positionvalue == 'leftposition') {
          //left positioned image should always be one left than main positioned image.
          position = startItem - 1;
        
          //reset last image in list to left position if first image is in main position
          if(position < 1) {
            position = itemCount;
          }
        }
    
        return position;
      }  
    
    $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
    $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
    $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
    $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

      startItem++;
      position=0;
      if(startItem > itemCount) {
        startItem = 1;
      }
    }
  }


  //next button click function
  $('#next').on('click', function() {
    swap('clockwise');
  });

  //prev button click function
  $('#prev').on('click', function() {
    swap('counter-clockwise');
  });
  // $('#prev').click(function() {
    // swap('counter-clockwise');
  // });

  //if any visible items are clicked
  $('li').click(function() {
    if($(this).attr('class') == 'items left-pos') {
      swap('counter-clockwise'); 
    }
    else {
      swap('clockwise'); 
    }
  });

  // ****************** END SLIDER ******************

  // Send Email 
  $('.form_error').hide();
  $('.try-free-email-btn').click(function() {
    let email = $('.send-email').val();
    let data = {
      action: 'send_email',
      email: email
    }
    if(IsEmail(email)==false){
      $('#invalid_email').show();
      return false;
    }

    $.ajax({
      url: '/wp-admin/admin-ajax.php',
      type: 'POST',
      data: data
    })
    .done(function(response) {
      console.log(response);
      console.log('respone');
    })


    console.log(email, 'email')
  })

  $('.send-email').focus(function() {
    $('.form_error').hide();

  });

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
       return false;
    }else{
       return true;
    }
  }
  
});





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;