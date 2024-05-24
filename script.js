document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById('numberInput');
    const addButton = document.getElementById('addButton');
    const removeLastButton = document.getElementById('removeLastButton');
    const clearButton = document.getElementById('clearButton');
    const list = document.getElementById('list');

    addButton.addEventListener('click', addNumber);
    removeLastButton.addEventListener('click', removeLastNumber);
    clearButton.addEventListener('click', clearList);

    function addNumber() {
        const number = numberInput.value.trim(); 
        if (number) { 
            const listItem = document.createElement('li');
            listItem.textContent = number;
            listItem.classList.add('added');
            list.appendChild(listItem);

            setTimeout(() => {
                listItem.classList.remove('added');
            }, 300); 

            numberInput.value = ''; 
            numberInput.focus(); 
        }
    }

    function removeLastNumber() {
        const lastItem = list.lastElementChild;
        if (lastItem) {
            lastItem.classList.add('removed');
            setTimeout(() => {
                list.removeChild(lastItem);
            }, 500); 
        }
    }

    function clearList() {
        const items = list.querySelectorAll('li');
        items.forEach((item) => {
            item.classList.add('removed');
        });
        setTimeout(() => {
            list.innerHTML = '';
        }, 500); 
    }
});
