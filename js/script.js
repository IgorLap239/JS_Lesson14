'use strict';


window.addEventListener('DOMContentLoaded', () => {

  function DomElement() {
      this.selector = ''; 
      this.height =  ''; 
      this.width = ''; 
      this.bg = ''; 
      this.fontSize = '';
  }

  DomElement.prototype.createElement = function () {
      this.selector = prompt('Введите "." или "#": ');
      if (this.selector[0] === '.') {
        let divElement = document.createElement('div');
        divElement.className = this.selector.substr(1);
        divElement.textContent = 'div с классом: ' + this.selector.substr(1);
        divElement.style.cssText = `height: 100px;
        width: 200px;
        background: green;
        font-size: 50px;
        `;
        document.body.append(divElement);
      } else if (this.selector[0] === '#') {
        let paragraphElement = document.createElement('p');
        paragraphElement.id = this.selector.substr(1);
        paragraphElement.textContent = 'Параграф с id: ' + this.selector.substr(1);
        paragraphElement.style.cssText = `height: 100px;
        width: 200px;
        background: green;
        font-size: 50px;
        `;
        document.body.append(paragraphElement);
      } else {
        alert('Вы ввели не id и не класс');
      }
  };

  DomElement.prototype.createSquare = function () {
    let divElement = document.createElement('div');
    divElement.className = 'square';
    divElement.style.cssText = `height: 100px;
    width: 100px;
    background: green;
    font-size: 50px;
    position: absolute;
    left: 0;
    top: 0;
    `;
    document.body.append(divElement);
  };

  DomElement.prototype.moveSquare = function(event) {
      const createdSquare = document.querySelector('.square');
      if (event.keyCode === 38) {
        createdSquare.style.top = parseInt(createdSquare.style.top) - 10 + 'px';
      } else if (event.keyCode === 39) {
        createdSquare.style.left = parseInt(createdSquare.style.left) + 10 + 'px';
      } else if (event.keyCode === 40) {
        createdSquare.style.top = parseInt(createdSquare.style.top) + 10 + 'px';
      } else if (event.keyCode === 37) {
        createdSquare.style.left = parseInt(createdSquare.style.left) - 10 + 'px';
      }
  };

  let htmlElemensCreter = new DomElement();

  htmlElemensCreter.createSquare();
  
  window.addEventListener("keydown", htmlElemensCreter.moveSquare);
});