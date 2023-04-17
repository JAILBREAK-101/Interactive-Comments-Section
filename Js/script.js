// for the socket and joining of our application room
// import { io } from "socket.io-client";

const form = document.querySelector(".sign-up__form");
const username = form[".sign-up__username"];
const password = form[".sign-up__password"];

const commentBox = document.querySelector(".comment__box");
const commentForm = document.querySelector(".comment__form");
const commentValue = commentForm["comment"].value;
const commentButton = document.querySelector(".admin-commment__button");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newComment = document.createElement("div");
  newComment.innerText = commentValue;
  commentBox.append(newComment);
});

// const socket = io("http://localhost:3000");
// socket.on("connect", () => {
//   displayComment(`You are connected with this key: ${socket.id}`);
// });

let json = {
  // Object 1
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },

    username: "gbemiga",
  },

  // Object 2
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "daniel",
      },

      // Object 3
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "daniel",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },

        // Object 4
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "gbemiga",
          },
        },
      ],
    },
  ],
};
// let objectData = new Map((json) => {
//   console.log(json);
// });

let admin = json.currentUser;
let comments = json.comments;
let replies = comments[1].replies;

// const adminImage = (document.querySelector(".user-image").src =
//   admin.image.png);

let commentData = comments.map((eachComment) => {
  return {
    ID: eachComment.id,
    name: eachComment.user.username,
    score: eachComment.score,
    commentContent: eachComment.content,
    // use timestamps
    commentCreated: new Date().getTime(),
    // any comment that gets added will go into the respective data slot
    replies: eachComment.replies.map((eachReply) => {
      return {
        replyID: eachReply.id,
        replyName: eachReply.user.username,
        replyImage: eachReply.user.image.png,
        replyComment: eachReply.content,
        replyCreated: eachReply.createdAt,
        replyScores: eachReply.score,
        replyTo: eachReply.replyingTo,
      };
    }),
  };
});

// dynamically add data

// comments.forEach((eachComment) => {
//   voteScore.forEach((score) => {
//     score.innerText = eachComment.score;
//   });
// });

// // for (let i = 0; i <= voteScore.length; i++) {
// //   for (let j = 0; i<=comments.forEach((value) => {value.score.length}); i++) {
// //     i
// //   }
// // }
// userName.forEach((name) => {
//   comments.forEach((eachComment) => {
//     name.innerText = eachComment.user.name;
//   });
// });
// userName.forEach((name) => {
//   comments.forEach((eachComment) => {
//     name.innerText = eachComment.user.name;
//   });
// });

// timeCreated.forEach((time) => {});

// commentContent.forEach((comment) => {});

// dynamically add comments

// CRUD - Create

// CRUD - Update

// CRUD - Delete

// Upvote and Downvote
