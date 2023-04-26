/* eslint-disable no-shadow */
const postContainer = document.querySelector('.postContainer');

document.addEventListener('DOMContentLoaded', () => {
  fetch('/post')
    .then((result) => result.json())
    .then((result) => {
      postContainer.textContent = '';
      result.forEach((item) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('col-lg-6', 'mb-4');

        const postCard = document.createElement('div');
        postCard.classList.add('card');

        const postImageLink = document.createElement('a');
        postImageLink.href = '#';

        const postImage = document.createElement('img');
        postImage.classList.add('card-img-top');
        postImage.src = item.image_url;
        postImage.alt = '...';

        postImageLink.appendChild(postImage);

        const postCardBody = document.createElement('div');
        postCardBody.classList.add('card-body');

        const postDate = document.createElement('div');
        postDate.classList.add('small', 'text-muted');
        postDate.textContent = item.created_at.split('T')[0];

        const postTitle = document.createElement('h2');
        postTitle.classList.add('card-title', 'h4');
        postTitle.textContent = item.title;

        const postText = document.createElement('p');
        postText.classList.add('card-text');
        postText.textContent = item.content;

        const addCommentSection = document.createElement('section');
        addCommentSection.classList.add('add-comment');
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        const addCommentButton = document.createElement('button');
        addCommentButton.textContent = 'add comment';
        addCommentSection.appendChild(commentInput);
        addCommentSection.appendChild(addCommentButton);
        postCardBody.appendChild(postDate);
        postCardBody.appendChild(postTitle);
        postCardBody.appendChild(postText);
        postCardBody.appendChild(addCommentSection);
        postCard.appendChild(postImageLink);
        postCard.appendChild(postCardBody);

        postDiv.appendChild(postCard);
        addCommentButton.addEventListener('click', () => {
          const comment = commentInput.value;

          if (comment) {
            fetch('/addComment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                content_comments: comment,
                userId: item.userid,
                posts_id: item.id,
              }),
            })
              .then((response) => response.json())
              .then((result) => {
                if (result.success) {
                  const commentP = document.createElement('p');
                  commentP.textContent = comment;
                  postCardBody.appendChild(commentP);
                  commentInput.value = '';
                }
              });
            commentInput.value = '';
          }
        });
        postContainer.appendChild(postDiv);
      });
    });
});
