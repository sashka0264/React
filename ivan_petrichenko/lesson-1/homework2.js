const imgs = [
    "./img/img_1.jpeg",
    "./img/img_2.jpg",
    "./img/img_3.jpg"
]

const imgsNature = image => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image

        img.onload = () => resolve(img)
        img.onerror = () => reject(image)
    });
}

Promise.all(imgs.map(imgsNature))
    .then (imgs => {
        imgs.forEach(img => {
            document.body.appendChild(img)
            img.style.cssText = `width: 300px; height: 300px; margin-right: 10px;`
        })
    })
    .catch(error => console.log('Path:', error));