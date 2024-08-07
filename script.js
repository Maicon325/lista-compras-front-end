document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.getElementById('addForm');
    const removeForm = document.getElementById('removeForm');
    const listContainer = document.getElementById('listContainer');
    const list = document.getElementById('list');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    const showAddForm = document.getElementById('showAddForm');
    const showRemoveForm = document.getElementById('showRemoveForm');
    const showList = document.getElementById('showList');
    const addInput = document.getElementById('addInput');
    const removeInput = document.getElementById('removeInput');

    let items = [];

    showAddForm.addEventListener('click', () => {
        addForm.style.display = 'block';
        removeForm.style.display = 'none';
        listContainer.style.display = 'none';
    });

    showRemoveForm.addEventListener('click', () => {
        addForm.style.display = 'none';
        removeForm.style.display = 'block';
        listContainer.style.display = 'none';
    });

    showList.addEventListener('click', () => {
        addForm.style.display = 'none';
        removeForm.style.display = 'none';
        listContainer.style.display = 'block';
        list.innerHTML = '';
        if (items.length === 0) {
            list.innerHTML = '<li>Nada para listar</li>';
        } else {
            items.forEach((item, index) => {
                list.innerHTML += `<li>${index}: ${item}</li>`;
            });
        }
    });

    addButton.addEventListener('click', () => {
        const value = addInput.value.trim();
        if (value) {
            items.push(value);
            addInput.value = '';
            showList.click();  // Atualiza a lista
        }
    });

    removeButton.addEventListener('click', () => {
        const index = parseInt(removeInput.value, 10);
        if (!isNaN(index) && index >= 0 && index < items.length) {
            items.splice(index, 1);
            removeInput.value = '';
            showList.click();  // Atualiza a lista
        } else {
            alert('Índice inválido.');
        }
    });
});
