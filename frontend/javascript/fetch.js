/* eslint-disable no-shadow */
const postContainer = document.querySelector('.postContainer');
const token = document.cookie.split('=')[1];

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
        const userInfoSection = document.createElement('section');
        userInfoSection.classList.add('userInfo');
        const userImg = document.createElement('img');
        userImg.src = item.userImg || '../css/images/user.png';
        userImg.alt = 'userImage';
        const username = document.createElement('p');
        username.textContent = item.username;
        username.classList.add('user_name');

        userInfoSection.appendChild(userImg);
        userInfoSection.appendChild(username);

        const postDate = document.createElement('div');
        postDate.classList.add('small', 'text-muted');
        postDate.textContent = item.created_at.split('T')[0];

        const postTitle = document.createElement('h2');
        postTitle.classList.add('card-title', 'h4');
        postTitle.textContent = item.title;

        const postText = document.createElement('p');
        postText.classList.add('card-text');
        postText.textContent = item.content;
        postCardBody.appendChild(userInfoSection);
        postCardBody.appendChild(postDate);
        postCardBody.appendChild(postTitle);
        postCardBody.appendChild(postText);
        postCard.appendChild(postImageLink);
        postCard.appendChild(postCardBody);
        postDiv.appendChild(postCard);
        const commentVoteSection = document.createElement('section');
        commentVoteSection.classList.add('comment-vote');
        const addCommentSection = document.createElement('section');
        addCommentSection.classList.add('add-comment');
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        const addCommentButton = document.createElement('button');
        addCommentButton.textContent = 'add comment';
        addCommentSection.appendChild(commentInput);
        addCommentSection.appendChild(addCommentButton);
        const commentP = document.createElement('p');
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
                posts_id: item.id,
              }),
            })
              .then(() => {
                const commentDiv = document.createElement('div');
                commentDiv.id = 'commentDiv';

                commentP.id = 'commentP';
                commentP.textContent = comment;
                commentDiv.appendChild(commentP);
                postCardBody.appendChild(commentDiv);
                commentInput.value = '';
              });
            commentInput.value = '';
          }
        });
        postContainer.appendChild(postDiv);
        const addVoteSection = document.createElement('section');
        addVoteSection.classList.add('add-vote');

        const upVote = document.createElement('p');

        fetch(`/getVotes/${item.id}`)
          .then((response) => response.json())
          .then((voteCount) => {
            upVote.textContent = '🢁';
            if (token) {
              upVote.addEventListener('click', () => {
                fetch('/addVotes', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    posts_id: item.id,
                    voteStatus: true,
                  }),
                }).then((result) => {
                  if (result) {
                    voteCountP.textContent = parseInt(voteCountP.textContent) + 1;
                  }
                });
              });
            }
            const voteCountP = document.createElement('p');
            voteCountP.textContent = voteCount;

            const downVote = document.createElement('p');
            downVote.textContent = '🢃';
            if (token) {
              downVote.addEventListener('click', () => {
                fetch('/addVotes', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    posts_id: item.id,
                    voteStatus: false,
                  }),
                }).then((result) => {
                  if (result) {
                    voteCountP.textContent = parseInt(voteCountP.textContent) - 1;
                  }
                });
              });
            }
            addVoteSection.appendChild(upVote);
            addVoteSection.appendChild(voteCountP);
            addVoteSection.appendChild(downVote);
          })
          .catch(() => {
            const upVote = document.createElement('p');
            upVote.textContent = '🢁';
            const voteCountP = document.createElement('p');
            voteCountP.textContent = 0;
            const downVote = document.createElement('p');
            downVote.textContent = '🢃';
            addVoteSection.appendChild(upVote);
            addVoteSection.appendChild(voteCountP);
            addVoteSection.appendChild(downVote);
          });
        commentVoteSection.appendChild(addCommentSection);
        commentVoteSection.appendChild(addVoteSection);

        const showCommentsButton = document.createElement('button');
        showCommentsButton.classList.add('show-comments-btn');
        showCommentsButton.textContent = 'Show Comments';

        const commentsSection = document.createElement('section');
        commentsSection.classList.add('comments');
        commentsSection.classList.add('hide');
        fetch(`/getComments/${item.id}`)
          .then((response) => response.json())
          .then((comments) => {
            showCommentsButton.textContent = `Show Comments (${comments.length})`;
            comments.forEach((comment) => {
              const commentSection = document.createElement('section');
              commentSection.classList.add('comment');

              const commentUserInfo = document.createElement('section');
              commentUserInfo.classList.add('userInfo');

              const commentUserImg = document.createElement('img');
              commentUserImg.src = comment.userImg || '../css/images/user.png';
              commentUserImg.alt = 'comment user image';

              const commentUsername = document.createElement('p');
              commentUsername.textContent = comment.username;
              commentUsername.classList.add('username');

              const commentDate = document.createElement('p');
              commentDate.textContent = new Date(
                comment.created_at,
              ).toLocaleString();

              commentDate.classList.add('date');

              const commentContent = document.createElement('p');
              commentContent.textContent = comment.content_comments;
              commentContent.classList.add('comment-content');

              commentUserInfo.appendChild(commentUserImg);
              commentUserInfo.appendChild(commentUsername);
              commentUserInfo.appendChild(commentDate);

              commentSection.appendChild(commentUserInfo);
              commentSection.appendChild(commentContent);

              commentsSection.appendChild(commentSection);
            });
          });
        showCommentsButton.addEventListener('click', () => {
          if (commentsSection.classList.contains('hide')) {
            showCommentsButton.textContent = 'Hide Comments';
          } else {
            showCommentsButton.textContent = 'Show Comments';
          }
          commentsSection.classList.toggle('hide');
        });

        postCard.appendChild(userInfoSection);
        postCard.appendChild(postCardBody);
        if (document.cookie.split('=')[1]) {
          postCardBody.appendChild(commentP);
        }
        postCard.appendChild(postCardBody);
        postCard.appendChild(commentVoteSection);
        postCardBody.appendChild(showCommentsButton);
        postCardBody.appendChild(commentsSection);
        postDiv.appendChild(postCard);
        postContainer.appendChild(postDiv);
      });
    });
});
