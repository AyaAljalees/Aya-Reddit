/* eslint-disable no-unused-vars */
const addPostButton = document.querySelector('.submit-post');
const postImg = document.querySelector('.image-input');
const postTitle = document.querySelector('.title-input');
const postContent = document.querySelector('.content-input');
addPostButton.addEventListener('click', (err)=> {
  fetch('/post', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: postTitle.value,
      image_url: postImg.value,
      content: postContent.value,
    }),
  }).then(
    (result) => result.json(),
  ).then(
    (posts) => {
    },
  ).catch((error) => console.log(error));
});
