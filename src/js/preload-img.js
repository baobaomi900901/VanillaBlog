

export function preloadImg(src) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject(new Error('Failed to load image: ' + src));
    };
    img.src = src;
  });
}

export function preloadImgArray(srcArray) {
  return Promise.all(srcArray.map(preloadImg));
}

export function preFetchImg(src) {
    return new Promise(function(resolve, reject) {
        fetch(src).then(res => res.blob()).then(res => {
            const reader = new FileReader() ;
            reader.onload = function(){ 
                resolve(this.result) 
            }
            reader.onerror = function(error) {
                reject(error)
            }
            reader.readAsDataURL(res)
        }).catch(reject)
    })
}

export function preFetchImgArray(srcArray) {
    return Promise.all(srcArray.map(preFetchImg));
}