export function getPhotos(request) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '44446201-9b14f5dc8dce792ad0a579f9d',
        q: request,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    
    const url = `${BASE_URL}?${params}`;
    return fetch(url).then(result => result.json());
}