/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */

const postImgv = document.querySelector('.image-input');
const postTitlev = document.querySelector('.title-input');
const postContentv = document.querySelector('.content-input');
const searchDiv = document.querySelector('.search-div');
const searchInput = document.querySelector('.inputSearch');
const searchButton = document.querySelector('.searchBtn');
const addPostButton = document.querySelector('#submit-post');
document.addEventListener('DOMContentLoaded', () => {
  addPostButton.addEventListener('click', (err) => {
    fetch('/addPost', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: postTitlev.value,
        image_url: postImgv.value,
        content: postContentv.value,
      }),
    }).then(
      (result) => result.json(),
    ).catch((error) => console.log(error));
  });
});

function generatePost(posts) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('col-lg-6', 'mb-4');

  const postCard = document.createElement('div');
  postCard.classList.add('card');

  const postImageLink = document.createElement('a');
  postImageLink.href = '#';

  const postImage = document.createElement('img');
  postImage.classList.add('card-img-top');
  postImage.src = posts.image_url;
  postImage.alt = '...';

  postImageLink.appendChild(postImage);

  const postCardBody = document.createElement('div');
  postCardBody.classList.add('card-body');

  const postDate = document.createElement('div');
  postDate.classList.add('small', 'text-muted');
  postDate.textContent = posts.created_at.split('T')[0];

  const postTitle = document.createElement('h2');
  postTitle.classList.add('card-title', 'h4');
  postTitle.textContent = posts.title;

  const postText = document.createElement('p');
  postText.classList.add('card-text');
  postText.textContent = posts.content;

  const postReadMore = document.createElement('a');
  postReadMore.classList.add('btn', 'btn-primary');
  postReadMore.href = '#!';
  postReadMore.textContent = 'Read more →';

  postCardBody.appendChild(postDate);
  postCardBody.appendChild(postTitle);
  postCardBody.appendChild(postText);
  postCardBody.appendChild(postReadMore);

  postCard.appendChild(postImageLink);
  postCard.appendChild(postCardBody);

  postDiv.appendChild(postCard);

  return postDiv;
}
document.addEventListener('DOMContentLoaded', () => {
  const postContainer = document.querySelector('.postContainer');

  fetch('/post')
    .then((result) => result.json())
    .then((result) => {
      postContainer.textContent = '';
      result.forEach((item) => {
        postContainer.appendChild(generatePost(item));
      });
    });
});

searchButton.addEventListener('click', () => {
  const postContainer = document.querySelector('.postContainer');

  fetch('/search', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      searchWord: searchInput.value,
    }),
  }).then((response) => response.json())
    .then((posts) => {
      const handle = (postss) => {
        postContainer.textContent = '';
        postss.forEach((post) => {
          postContainer.appendChild(generatePost(post));
        });
      };
      handle(posts);
    });
});
