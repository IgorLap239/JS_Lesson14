'use strict';

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
      divElement.style.cssText = `heigth: 100px;
      width: 200px;
      background: green;
      font-size: 50px;
      `;
      document.body.append(divElement);
    } else if (this.selector[0] === '#') {
      let paragraphElement = document.createElement('p');
      paragraphElement.id = this.selector.substr(1);
      paragraphElement.textContent = 'Параграф с id: ' + this.selector.substr(1);
      paragraphElement.style.cssText = `heigth: 100px;
      width: 200px;
      background: green;
      font-size: 50px;
      `;
      document.body.append(paragraphElement);
    } else {
      alert('Вы ввели не id и не класс');
    }
};

let htmlElemensCreter = new DomElement();

htmlElemensCreter.createElement();