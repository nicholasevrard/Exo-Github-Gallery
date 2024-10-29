fetch('photos.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');
        data.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `
                <img src="${photo.image}" alt="${photo.name}">
                <h3>${photo.name}</h3>
                <p>${photo.description}</p>
            `;
            gallery.appendChild(photoItem);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des photos:', error));
