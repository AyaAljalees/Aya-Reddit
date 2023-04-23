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
const showPostFunction = (posts) => {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');

  const postHeader = document.createElement('div');
  postHeader.classList.add('post-header');

  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');

  const userProfilePic = document.createElement('img');
  userProfilePic.src = '../css/images/stick-man.png';

  const userDetails = document.createElement('div');
  userDetails.classList.add('user-details');

  const userName = document.createElement('h2');
  userName.textContent = posts.username;

  const postDate = document.createElement('p');
  // eslint-disable-next-line prefer-destructuring
  postDate.textContent = posts.created_at.split('T')[0];

  userDetails.appendChild(userName);
  userDetails.appendChild(postDate);

  userInfo.appendChild(userProfilePic);
  userInfo.appendChild(userDetails);

  postHeader.appendChild(userInfo);

  const postContent = document.createElement('div');
  postContent.classList.add('post-content');

  const postTitle = document.createElement('h3');
  postTitle.textContent = posts.title;

  const postText = document.createElement('p');
  postText.textContent = posts.content;

  const postImage = document.createElement('img');
  postImage.classList.add('post-image');
  postImage.src = posts.image_url;

  postContent.appendChild(postTitle);
  postContent.appendChild(postText);
  postContent.appendChild(postImage);
  postDiv.appendChild(postHeader);
  postDiv.appendChild(postContent);

  return postDiv;
};

document.addEventListener('DOMContentLoaded', () => {
  const postContainer = document.querySelector('.postContainer');

  fetch('/post')
    .then((result) => result.json())
    .then((result) => {
      postContainer.textContent = '';
      result.forEach((item) => {
        postContainer.appendChild(showPostFunction(item));
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
          postContainer.appendChild(showPostFunction(post));
        });
      };
      handle(posts);
    });
});
