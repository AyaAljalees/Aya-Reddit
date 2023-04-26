// const searchInput = document.querySelector('.inputSearch');
// const searchButton = document.querySelector('.searchBtn');
// const postContainer = document.querySelector('.postContainer');
// const generatePost = (item) => {
//   postContainer.textContent = '';

//   const postDiv = document.createElement('div');
//   postDiv.classList.add('col-lg-6', 'mb-4');

//   const postCard = document.createElement('div');
//   postCard.classList.add('card');

//   const postImageLink = document.createElement('a');
//   postImageLink.href = '#';

//   const postImage = document.createElement('img');
//   postImage.classList.add('card-img-top');
//   postImage.src = item.image_url;
//   postImage.alt = '...';

//   postImageLink.appendChild(postImage);

//   const postCardBody = document.createElement('div');
//   postCardBody.classList.add('card-body');

//   const postDate = document.createElement('div');
//   postDate.classList.add('small', 'text-muted');
//   postDate.textContent = item.created_at.split('T')[0];

//   const postTitle = document.createElement('h2');
//   postTitle.classList.add('card-title', 'h4');
//   postTitle.textContent = item.title;

//   const postText = document.createElement('p');
//   postText.classList.add('card-text');
//   postText.textContent = item.content;

//   postCardBody.appendChild(postDate);
//   postCardBody.appendChild(postTitle);
//   postCardBody.appendChild(postText);

//   postCard.appendChild(postImageLink);
//   postCard.appendChild(postCardBody);

//   postDiv.appendChild(postCard);
//   postContainer.appendChild(postDiv);
// };
// searchButton.addEventListener('click', () => {
//   fetch('/search', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       searchWord: searchInput.value,
//     }),
//   }).then((response) => response.json())
//     .then((posts) => {
//       const handle = (postss) => {
//         postContainer.textContent = '';
//         postss.forEach((post) => {
//           postContainer.appendChild(generatePost(post));
//         });
//       };
//       handle(posts);
//     })
//     .catch((error) => console.error(error));
// });
