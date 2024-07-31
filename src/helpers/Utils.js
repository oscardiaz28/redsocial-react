export const showMessage = ( {container, msg = "", data = ""} ) => {

    const element = container.parentElement.firstElementChild;
    element.innerHTML = "";

    const box = document.createElement('div');
    box.classList.add('box', 'box-danger');

    const messageElement = document.createElement('p');
    // messageElement.textContent = msg;

    const btnX = document.createElement('span');
    btnX.classList.add('btnX');

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-x';

    btnX.appendChild(icon);
    
    box.appendChild(messageElement)
    box.appendChild(btnX)

    btnX.onclick = () => close(box);

    if( msg != ""  ){
      messageElement.textContent = msg;
    }else if(data != null) {
      const ul = document.createElement('ul')
      Object.keys(data).forEach( key => {
        const li = document.createElement('li')
        li.textContent = data[key]
        ul.appendChild(li);
      })
      box.appendChild(ul);
    }
    element.appendChild(box);
}

function close(box){
    box.remove();
}
