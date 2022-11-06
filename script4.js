//jshint esversion:6

const form = document.getElementById('addForm');
const newItem = document.getElementById('item');
const listItems = document.getElementById('items');
const fiter = document.getElementById('filter');

listItems.addEventListener('click', removeItem);
form.addEventListener('submit', addItem);
filter.addEventListener('input', filterItems);

//function to add a new item
function addItem(e) {

    e.preventDefault();
    const li = document.createElement('li');
    li.className = 'list-group-item';

    const newItemText = newItem.value;
    if (newItemText === '') {
        alert('Cannot be empty');
        addItem();
    }
    
    const newTextNode = document.createTextNode(newItemText);
    li.appendChild(newTextNode);

    // console.log(li);

    const btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm delete p-2';
    btn.appendChild(document.createTextNode('Remove'));

    li.appendChild(btn);
    items.appendChild(li);

    //replacing back the text of items to ' ';
    newItem.value = '';

    // console.log(li);
}

// function to remove an item from the list
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete?')) {
            const listItemToBeDeleted = e.target.parentElement;
            listItems.removeChild(listItemToBeDeleted);
        }
    }
}

// function to filter an item from the list
function filterItems(e) {
    const text = e.target.value.toLowerCase();

    var items = listItems.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}