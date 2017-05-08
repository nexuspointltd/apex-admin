function upload(file) {
    return new Promise((resolve, reject) => {
        getImage(file)
            .then(img => (resolve({
                name: file.name,
                path: '',
                size: file.size,
                url: img
            })))
    })
}

function getImage(file) {
    return new Promise((resolve, reject) => {
        const fReader = new FileReader();
        // const img = document.createElement('img');

        fReader.onload = () => {
            resolve(fReader.result);
            // resolve(getBase64Image(img));
        }

        fReader.readAsDataURL(file);
    })
}

function createImage(file, fileObject, context) {
    let image = new Image();
    let reader = new FileReader();
    let vm = this;

    reader.onload = (e) => {

        fileObject.data = e.target.result
        context.sendEvent()
    };
    reader.readAsDataURL(file);
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

export default upload
