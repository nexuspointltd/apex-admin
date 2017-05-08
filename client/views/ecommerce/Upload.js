import axios from 'axios'

export default {

    delay(file) {
        return new Promise((resolve, reject) => {
            this.store(file).then(result => {
                setTimeout(() => {
                    resolve(result)
                }, 1000)
            })
        })
    },

    store(file) {
        return new Promise((resolve, reject) => {
            const fd = new FormData()
            fd.append('upload', file)
            axios.post('https://oakmere.dev/api/ecommerce/uploads', fd)
                .then(({data}) => {
                    resolve({
                        name: data.filename,
                        path: data.path,
                        size: data.size,
                        url: data.url
                    })
                }).catch(error => reject(error))
        })
    },

    // delete(path) {
    //     return axios.delete(`https://oakmere.dev/api/ecommerce/uploads/${path}`)
    // }

}
function createImage(file, fileObject, context) {
    let image = new Image();
    let reader = new FileReader();

    reader.onload = (e) => {

        fileObject.data = e.target.result
        context.sendEvent()
    };
    reader.readAsDataURL(file);
}

function uploadOLD(formData) {
    const photos = formData.getAll('photos');
    const promises = photos.map((x) => getImage(x)
        .then(img => ({
            id: img,
            originalName: x.name,
            fileName: x.name,
            url: img
        })));
    return Promise.all(promises);
}

function getImage(file) {
    return new Promise((resolve, reject) => {
        const fReader = new FileReader();
        const img = document.createElement('img');

        fReader.onload = () => {
            img.src = fReader.result;
            resolve(getBase64Image(img));
        }

        fReader.readAsDataURL(file);
    })
}

function getBase64Image(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');

    return dataURL;
}