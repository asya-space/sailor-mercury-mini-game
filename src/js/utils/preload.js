export function preload(images, callback) {
    let loaded = 0;

    const check = () => {
        loaded++;

        if (loaded === images.length) {
            callback();
        }
    };

    images.forEach(img => {
        if (img.complete && img.naturalWidth !== 0) {
            check();
        } else {
            img.onload = check;
        }
    });
}