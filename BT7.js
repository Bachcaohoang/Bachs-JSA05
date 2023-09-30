// async function fetchData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();

//         // Lặp qua mỗi đối tượng trong mảng data
//         for (let post of data) {
//             // Xử lý thông tin của mỗi bài viết (post) ở đây
//             console.log(post.title);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        // Lặp qua mỗi đối tượng trong mảng data
        for (let post of data) {
            // Xử lý thông tin của mỗi bài viết (post) ở đây
            let titleElement = document.createElement("h2");
        let bodyElement = document.createElement("p");
            // console.log(post.title);
            // console.log(post.body);

            titleElement.textContent = post.title;
            bodyElement.textContent = post.body;

            const dataElement = document.getElementById("data");

            dataElement.appendChild(titleElement);
            dataElement.appendChild(bodyElement);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();