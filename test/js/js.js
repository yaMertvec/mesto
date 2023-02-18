const ul = document.querySelector('ul');
const template = document.querySelector('#element-li');
const span = template.content.querySelector('span');
span.textContent = "cheburek";
let li = template.content.cloneNode(true);
ul.append(li);
span.textContent = "12212121";
li = template.content.cloneNode(true);
ul.append(li);