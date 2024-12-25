function submitPost() {
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
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const image = document.getElementById('image').files[0];
            const pic = new Blob([image], { type: 'image' });
            const addRequest = objectStore.add({ title: title, content: content, image: pic});

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
}
