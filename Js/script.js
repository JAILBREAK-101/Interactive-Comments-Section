// USERDATA.
// scripting.
const main_container = document.getElementById("comments");

let notification_box = document.querySelector(".comment-box");

const up_vote = document.querySelector(".plus");
const down_vote = document.querySelector("minus");
const display = document.getElementById("display");

const reply_button = document.querySelector(".reply");

// The Buttons
// let count = parseInt(display.innerText);

// up_vote.addEventListener('click', () => {
// alert("Working");
// count++;
//   display.innerText = count++;
// })

// down_vote.addEventListener('click', () => {
//   display.innerText = count--;
// })

// MY FUELER LINK
// https://fueler.io/Oluwagbemiga

// JSON FILE.
let json = {
  // Object 1
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },

    username: "juliusomo",
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
        username: "maxblagun",
      },

      // Object 3
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
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
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

// GETTING THE CURRENT USER'S DATA FROM THE OBJECT.
let username = json.currentUser.username;
let user_image = json.currentUser.image.webp;

// For when the user types.
let user_image_types = json.currentUser.image.png;
