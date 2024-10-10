const menuData = {
    "menu": [
        { "id": 1, "nombre": "Inicio", "enlace": "/inicio" },
        { "id": 2, "nombre": "Sobre Nosotros", "enlace": "/sobre-nosotros" },
        { "id": 3, "nombre": "Servicios", "enlace": "/servicios" },
        { "id": 4, "nombre": "Contacto", "enlace": "/contacto" }
    ]
};

function renderMenu() {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    menuData.menu.forEach(item => {
        const menuItem = document.createElement('div');

        const link = document.createElement('a');
        link.href = item.enlace;
        link.textContent = item.nombre;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = '✖';
        deleteButton.onclick = () => {
            if (confirm('¿Estás seguro de que deseas eliminar esta opción?')) {
                removeMenuItem(item.id);
            }
        };

        menuItem.appendChild(link);
        menuItem.appendChild(deleteButton);
        menu.appendChild(menuItem);
    });
}

function removeMenuItem(id) {
    const index = menuData.menu.findIndex(item => item.id === id);
    if (index !== -1) {
        menuData.menu.splice(index, 1);
        renderMenu();
    }
}

document.getElementById('menuForm').onsubmit = function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const enlace = document.getElementById('enlace').value;
    const id = menuData.menu.length ? menuData.menu[menuData.menu.length - 1].id + 1 : 1;

    menuData.menu.push({ id, nombre, enlace });
    renderMenu();
    this.reset();
};

window.onload = renderMenu;
