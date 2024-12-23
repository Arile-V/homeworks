function submitPost() {
    event.preventDefault();
    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
    const imageFile = document.querySelector('input[name="image"]').files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const imageData = event.target.result;
        const request = window.indexedDB.open('postsDB', 1);

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            const objectStore = db.createObjectStore('posts', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('title', 'title', { unique: false });
            objectStore.createIndex('content', 'content', { unique: false });
            objectStore.createIndex('image', 'image', { unique: false });
        };

        request.onsuccess = function(event) {
            const db = request.result;
            const transaction = db.transaction(['posts'], 'readwrite');
            const objectStore = transaction.objectStore('posts');
            const addRequest = objectStore.add({ title: title, content: content, image: imageData });

            addRequest.onsuccess = function(event) {
                alert('推文发布成功');
                window.location.href = 'Top.html'; // 返回主页面
            };

            addRequest.onerror = function(event) {
                alert('推文发布失败');
            };
        };

        request.onerror = function(event) {
            alert('数据库打开失败');
        };
    };

    reader.readAsArrayBuffer(imageFile);
}
