// JSON FILE.
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

/* --------------------------------------------------------------------------------*/

// USERDATA.

let up_button = document.querySelectorAll(".plus");
let down_button = document.querySelectorAll(".minus");
let reply_buttons = document.querySelectorAll("button.reply");
// let up_button2 = document.getElementsByClassName('plus')[1];
// let down_button2 = document.getElementsByClassName('minus')[1];
let main_wrapper = document.getElementById("dynamic");

let all_replies = document.querySelectorAll(".comment-box");

let sender = document.querySelector(".send");
// FOR THE TEXTAREA, FOR MY COMMENT.
let my_input_area = document.getElementById("msg");
// To set that inner button in it's container.
for (let up_buttons of up_button) {
  up_buttons.innerHTML = `<img src = './images/icon-plus.svg'>`;
}

for (let down_buttons of down_button) {
  down_buttons.innerHTML = `<img src = './images/icon-minus.svg'>`;
}

// CREATING EDIT AND DELETE BUTTON.
function create_functional_button(appending_parent) {
  let button_containers = document.createElement("section");

  let edit_button = document.createElement("button");
  edit_button.innerHTML = "<img src='./images/icon-edit.svg'><img>";
  edit_button.classList.add("edit");
  let edit_btn_selection = (document.querySelector(
    ".edit"
  ).src = `./images/icon-edit.svg`);

  let delete_button = document.createElement("button");
  delete_button.innerHTML = "<img src='./images/icon-delete.svg'><img>";
  delete_button.classList.add("delete");
  let delete_btn_selection = (document.querySelector(
    ".delete"
  ).src = `./images/icon-delete.svg`);

  button_containers.append(edit_button, delete_button);
  let wrapper_for_container = document.createElement("div");
  wrapper_for_container.append(button_containers);
  wrapper_for_container.classList.add("person");

  // THE APPENDING TO THE SPECIFIED PARENT.
  appending_parent.append(wrapper_for_container);
}

// FOR MY REPLY-BUTTONS, ADD THE CLASS OF SENDER.
// for ()

function my_func_count(value, up_vote, down_vote, index) {
  let count_value = parseInt(value.innerHTML);
  // count_value.innerHTML = votes.innerHTML;
  up_vote[index].addEventListener("click", () => {
    let new_count = count_value + 1;
    value.innerText = new_count;

    down_vote[index].addEventListener("click", () => {
      let updated_count = new_count - 1;
      value.innerText = updated_count;
    });
  });
}

// THE COMMENT BOX FOR DYNAMIC MANIPULATION.
// THE CONTAINER FOR THE COMMENTS.
const wrapper_for_comments = document.querySelector(".wrapper-for-comments");

const comment_box = document.querySelector(".comment-box");

const amyrobson = json.comments[0];
const max_blagun = json.comments[1];
// their Properties.

let array_of_users = [
  (amyrobson_props = {
    username: amyrobson.user.username,
    created_at: amyrobson.createdAt,
    votes: amyrobson.score,
    image: amyrobson.user.image.png,
    comment: amyrobson.content,
    replies: amyrobson.replies,
  }),
  (max_blagun_props = {
    username: max_blagun.user.username,
    created_at: max_blagun.createdAt,
    votes: max_blagun.score,
    image: max_blagun.user.image.png,
    comment: max_blagun.content,
    replies: max_blagun.replies,
  }),
];

// INPUTTING THIS INTO OUR HTML, AS STRUCTURE.
// this is dynamic

// FOR AMYROBSON.
const user_picture = document.querySelector(".person img");
user_picture.setAttribute("src", amyrobson_props.image);

const the_username = document.getElementsByClassName("name")[0];
the_username.innerHTML = amyrobson_props.username;

const details = document.getElementsByClassName("created")[0];
details.innerHTML = amyrobson_props.created_at;

const comment = document.querySelector(".grid2 p");
comment.innerHTML = amyrobson_props.comment;

const votes = document.getElementById("display");
votes.innerHTML = array_of_users[0].votes;

// WHEN PEOPLE REPLY TO AMYROBSON, SAVE IT IN HERE.
let amyrobson_reply = array_of_users[0].replies;

// my_func_count(votes);

// FOR MAXBLAGUN
const user_picture2 = document.querySelector(".comment-box2 .max");
user_picture2.setAttribute("src", max_blagun_props.image);

const the_username2 = document.querySelector(".comment-box2 .name");
the_username2.innerHTML = max_blagun_props.username;

const details2 = document.querySelector(".comment-box2 .created");
details2.innerHTML = max_blagun_props.created_at;

const comment2 = document.querySelector(".comment-box2 .grid2 p");
comment2.innerHTML = max_blagun_props.comment;

const votes2 = document.getElementsByTagName("span")[1];
votes2.innerHTML = array_of_users[1].votes;

// THIS WOULD ADD THE COMMENT IN AFTER WE'VE ADDED UNTO IT.
let max_blagun_reply = array_of_users[1].replies.push();

// THE REPLIES.
const replies = json.comments[1].replies;
let array_of_replies = [
  (ramses = {
    the_username: replies[0].user.username,
    created_at: replies[0].createdAt,
    votes: replies[0].score,
    image: replies[0].user.image.png,
    reply: replies[0].replyingTo,
    comment: replies[0].content,
  }),
  // The Reply of the user (you).
  (you = {
    the_username: replies[1].user.username,
    created_at: replies[1].createdAt,
    votes: replies[1].score,
    image: replies[1].user.image.png,
    reply: replies[1].replyingTo,
    comment: replies[1].content,
    replying_to: replies[1].replyingTo,
  }),
];

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

// my_func_count(value_of_count, up_button, down_button);
// my_func_count(value_of_count2, up_button2, down_button2);

// THE REPLIES IN STRUCTURE.
const ramses_name = document.querySelector(".replies .name");
ramses_name.innerHTML = array_of_replies[0].the_username;

const ramses_detail = document.querySelector(".replies .created");
ramses_detail.innerHTML = array_of_replies[0].created_at;

const ramses_image = document.querySelector(".replies .ram");
ramses_image.setAttribute("src", array_of_replies[0].image);

const ramses_votes = document.getElementsByTagName("span")[2];
ramses_votes.innerHTML = array_of_replies[0].votes;

const ramses_at = document.getElementsByClassName("at")[0];
ramses_at.innerText = array_of_replies[0].reply;
let bold_text = ramses_at.innerText;

const ramses_reply = document.getElementById("comment");
ramses_reply.innerHTML = `<span class = 'bold-text'>@${ramses_at.innerText}</span> ${array_of_replies[0].comment}`;

// FOR JULIUSOMO
const julio_name = document.getElementsByClassName("name")[3];
julio_name.innerHTML = array_of_replies[1].the_username;

const julio_picture = document.querySelector("#julio_image");
julio_picture.setAttribute("src", array_of_replies[1].image);

const julio_details = document.getElementsByClassName("created")[3];
julio_details.innerHTML = array_of_replies[1].created_at;

const julio_at = document.getElementsByClassName("at")[0];
julio_at.innerText = array_of_replies[1].replying_to;

const label = document.getElementsByClassName("you")[0];
label.innerHTML = "you";
// julio_at = document.querySelector('')

const julio_comment = document.getElementById("you");
julio_comment.innerHTML = `<span class='bold-text'>@${julio_at.innerHTML}</span> ${array_of_replies[1].comment}`;

const julio_votes = document.getElementById("you-display");
julio_votes.innerText = array_of_replies[1].votes;

// GETTING ALL COMMENTS FOR APPENDING.
const all_comments = document.getElementsByClassName("comment-box");

// THE EDIT AND THE DELETE BUTTONS.
let edit_btn_selection = (document.querySelector(
  ".edit"
).src = `./images/icon-edit.svg`);
let delete_btn_selection = (document.querySelector(
  ".delete"
).src = `./images/icon-delete.svg`);

let user_comment_container = document.querySelector(
  ".default-comment .grid1"
)[3];

// RUN THE FUNCTION.
// create_functional_button(user_comment_container);

// FOR REPLYING.
// FOR WHEN I CREATE MY OWNw COMMENT.
// let user_send_button = document.getElementById('send');

let other_reply_button = document.getElementsByClassName("sender");

// For appending my newly-created reply.
let the_reply_container = document.querySelector(".reply-container");

function creating_comment_box(send_button, ind) {
  send_button[ind].addEventListener("click", (e) => {
    e.preventDefault();
    // alert('WORKING');

    // let the_message = my_input_area.innerText;
    // the text, the name, the button (at index)
    var reply_box = document.createElement("section");
    reply_box.classList.add("comment-box", "new-boxes");

    // The button section.
    var vote_box = document.createElement("div");
    vote_box.classList.add("vote");

    // The buttons in the vote box.
    var up_vote_btn = document.createElement("button");
    up_vote_btn.classList.add("plus");
    up_vote_btn.innerHTML = `<img src = './images/icon-plus.svg'>`;

    var display_for_vote = document.createElement("span");
    display_for_vote.classList.add("display");
    display_for_vote.innerText = 0;

    var down_vote_btn = document.createElement("button");
    down_vote_btn.classList.add("minus");
    down_vote_btn.innerHTML = `<img src = './images/icon-minus.svg'>`;

    vote_box.append(up_vote_btn, display_for_vote, down_vote_btn);
    //  The Section for the details.
    var person_detail = document.createElement("div");
    person_detail.classList.add("header");

    var first_grid = document.createElement("div");
    first_grid.classList.add("grid1", "added");

    // INSIDE THE FIRST GRID.
    var person_section = document.createElement("div");
    person_section.classList.add("person");

    var person_image = document.createElement("img");
    person_image.setAttribute("src", array_of_replies[1].image);
    person_image.classList.add("special");

    var the_name = document.createElement("strong");
    the_name.classList.add("name");
    the_name.innerText = julio_name.innerHTML;

    var you_tag = document.createElement("span");
    you_tag.classList.add("you");
    you_tag.innerHTML = "you";

    first_grid.append(person_section, person_image, the_name, you_tag);
    // USE TIME-STAMPS
    // let  = document.createElement('p');
    // second_grid.classList.add('created');

    // BUTTONS TO COME HERE.

    // INSIDE THE SECOND GRID
    var comment_container = document.createElement("div");
    comment_container.classList.add("grid2");

    var the_comment = document.createElement("p");
    the_comment.classList.add("comment");
    the_comment.innerHTML = my_input_area.value;
    the_comment.style.display = "flex";
    the_comment.style.justifyContent = "flex-start";
    the_comment.style.gap = "1rem";

    comment_container.append(the_comment);

    person_detail.append(first_grid, comment_container);

    // The final appending of the comment.
    reply_box.append(vote_box, person_detail);

    let reply_boxes = document.getElementsByClassName("new-boxes");
    // FOR IT TO SHOW.

    let index = 1;
    let count = ++index;
    // FOR ME STACKING THE COMMENTS, ON TOP OF ONE ANOTHER.
    // if (reply_boxes.length < 1) {
    the_reply_container.insertAdjacentElement("afterEnd", reply_box);
    // }
    if (reply_boxes.length >= count) {
      reply_box.insertAdjacentElement("afterEnd", reply_box[count]);
    }

    // FOR THE COUNTER OF THE NEW COMMENTS, THAT I CREATE BY MYSELF.
    // my_func_count(display_for_vote, up_vote_btn, down_vote_btn, 4);

    // AFTER WE CREATE A COMMENT, LET THE TEXTAREA BE EMPTY, READY TO RECEIVE ANOTHER COMMENT.
    my_input_area.value = " ";
    my_input_area.ariaPlaceholder = "Add a comment";

    // let count = 1;
    // count++;

    // if (reply_box) {
    //   reply_box[0].insertAdjacentElement('afterEnd', reply_box[count]);
    // }
  });
  function when_i_reply(reply_button, index, comment, name_of_person) {
    reply_button[index].addEventListener("click", () => {
      // For typing the reply.
      let wrapper_for_typing = document.createElement("div");
      wrapper_for_typing.classList.add("wrapper-for-user");

      let new_form_container = document.createElement("div");
      new_form_container.classList.add("comment-box");

      let the_form = document.createElement("form");
      the_form.classList.add("custom");

      let image = document.createElement("img");
      image.classList.add("user-image");
      image.src = array_of_replies[1].isimage;

      var type_area = document.createElement("textarea");
      type_area.classList.add("for-typing");
      type_area.cols = 65;
      type_area.rows = 5;
      type_area.style.resize = "none";
      type_area.style.outline = "0";

      type_area.innerHTML = `@${name_of_person.innerText}, `;

      // Used for when we create our comment.

      // The Button for posting the comment.
      var btn_send = document.createElement("button");
      btn_send.classList.add("sender");
      btn_send.innerText = "Reply";
      btn_send.style.cursor = "pointer";

      the_form.append(image, type_area, btn_send);

      // Put this in the container, depending on the reply button that i click on.
      // wrapper_for_typing.append(comment[index]);
      // wrapper_for_typing.appendChild(comment[index]);
      // new_form_container.append(comment[index]);

      // After the Reply Box for replying to comments has been created, let it change when i click on reply, with the text, as the reply.

      // This is for When i reply to ramsesmiron(let it be added under the last comment.)
      if (index >= 2) {
        all_comments[3].insertAdjacentElement("afterEnd", the_form);
      } else if (index < 2) {
        comment[index].insertAdjacentElement("afterEnd", the_form);
      }
      // wrapper_for_typing.append(comment[index]);

      // AFTER THE TEXT-AREA HAS BEEN CREATED, WE HAVE TO GET WHAT THE USER TYPED IN, AS THE COMMENT, AND DISPLAY IT, CHANGING THE DISPLAY OF THE USER, VIEWING THE COMMENT.
      btn_send.addEventListener("click", (e) => {
        e.preventDefault();
        // alert('I am Working.');
        // FOR WHEN I CLICK ON THE REPLY BUTTON, TO SUBMIT MY REPLY, FOR SOMEONE'S COMMENT.
        let the_reply = type_area.value;
        // the_form.innerHTML = the_reply;

        // Create a new comment box (with the reply text).
        var reply_box = document.createElement("section");
        reply_box.classList.add("new-boxes");

        // The button section.
        var vote_box = document.createElement("div");
        vote_box.classList.add("vote");

        // The buttons in the vote box.
        var up_vote_btn = document.createElement("button");
        up_vote_btn.classList.add("plus");
        up_vote_btn.innerHTML = `<img src = './images/icon-plus.svg'>`;

        var display_for_vote = document.createElement("span");
        display_for_vote.classList.add("display");
        display_for_vote.innerText = 0;

        var down_vote_btn = document.createElement("button");
        down_vote_btn.classList.add("minus");
        down_vote_btn.innerHTML = `<img src = './images/icon-minus.svg'>`;

        vote_box.append(up_vote_btn, display_for_vote, down_vote_btn);

        // THE FUNCTION THAT ENABLES ME TO VOTE UP AND DOWN.
        // my_func_count(display_for_vote, up_vote_btn, down_vote_btn, 1);
        function increase_decrease_button(value, up_button, down_button) {
          let current_value = parseInt(value.innerHTML);

          up_button.addEventListener("click", () => {
            let new_value = current_value + 1;
            value.innerHTML = new_value;

            // FOR WHEN I DECREASE.
            down_button.addEventListener("click", function () {
              let updated_value = new_value - 1;
              value.innerHTML = updated_value;
            });
          });
        }

        // CALL THE FUNCTION.
        increase_decrease_button(display_for_vote, up_vote_btn, down_vote_btn);
        //  The Section for the details.
        var person_detail = document.createElement("div");
        person_detail.classList.add("header");

        var first_grid = document.createElement("div");
        first_grid.classList.add("grid1", "added");

        // INSIDE THE FIRST GRID.
        var person_section = document.createElement("div");
        person_section.classList.add("person");

        var person_image = document.createElement("img");
        person_image.setAttribute("src", array_of_replies[1].image);
        person_image.classList.add("special");

        var the_name = document.createElement("strong");
        the_name.classList.add("name");
        the_name.innerText = julio_name.innerHTML;

        var you_tag = document.createElement("span");
        you_tag.classList.add("you");
        you_tag.innerHTML = "you";

        first_grid.append(person_section, person_image, the_name, you_tag);
        // USE TIME-STAMPS
        // let  = document.createElement('p');
        // second_grid.classList.add('created');

        // BUTTONS TO COME HERE.
        create_functional_button(first_grid);

        // INSIDE THE SECOND GRID
        var comment_container = document.createElement("div");
        comment_container.classList.add("grid2");

        var the_comment = document.createElement("p");
        the_comment.classList.add("comment");
        the_comment.innerHTML = the_reply;
        // the_comment.style.display = 'flex';
        the_comment.style.justifyContent = "flex-start";
        // the_comment.style.gap = '1rem';
        the_comment.style.margin = "0";

        comment_container.append(the_comment);

        person_detail.append(first_grid, comment_container);

        reply_box.append(vote_box, person_detail);

        let index = 0;
        // let incre_index = index++;
        // Append it after the comment, that we are replying to.

        // if (index < 0) {}
        function when_reply_changes() {
          // CHECK FOR KEYPRESS EVENT, AND CHECK IF THE LETTERS ENTERED, MATCH THE PERSON YOU ARE REPLYING TO, AS A CONDITION.

          var all_possible_replies =
            document.querySelectorAll("section.new-boxes");
          // type_area.addEventListener('keypress', () => {
          console.log(type_area.value);

          // WE WANT TO INSERT IT UNDER THE FIRST COMMENT.
          // THIS IS FOR THE FIRST COMMENT.
          function append_under(name) {
            let count = 1;
            if (type_area.value.indexOf(name) !== -1) {
              all_possible_replies[count++].insertAdjacentElement(
                "afterEnd",
                reply_box
              );
            }
          }
          if (type_area.value.indexOf("@amyrobson") !== -1) {
            // KEEP INSERTING IT UNDER THE FIRST GENERATED COMMENT(the reply).
            all_comments[0].insertAdjacentElement("afterEnd", reply_box);

            console.log(all_possible_replies);

            // function append_under_first(ind) {

            if (
              all_possible_replies.length >= 1 &&
              type_area.value.indexOf("@amyrobson") !== -1
            ) {
              all_possible_replies[0].insertAdjacentElement(
                "afterEnd",
                reply_box
              );

              // append_under('@amyrobson');

              // FUNCTION.
              // append_under_first(all_possible_replies)
            }
            // else if (ind <= 0) {
            //   else {
            //   all_possible_replies[ind].insertAdjacentElement('afterEnd', reply_box)
            // }
            // NO NEED FOR ELSE.
            // }

            // // FOR A CALLBACK FUNCTION APPENDING EACH REPLY, UNDER THE FIRST.
            // // RUNNING THIS FUNCTION.
            // // append_under_first(0);
            // // append_under_first(1);
            // // append_under_first(2);
            // // append_under_first(3);

            // // IF STATEMENT, TO APPEND NEWLY CREATED FORM FOR REPLY, UNDER THE GENRATED FORM.
            // if (btn_send.click() == true) {
            //   reply_box[index].insertAdjacentElement('afterEnd', the_form);
            // }
          } else if (type_area.value.indexOf("@daniel") !== -1) {
            all_comments[1].insertAdjacentElement("afterEnd", reply_box);
            // append_under_first(all_possible_replies);
            // form_for_changing.style.display = 'none';
            // append_under('@daniel');
          } else if (type_area.value.indexOf("@ramsesmiron") !== -1) {
            all_comments[3].insertAdjacentElement("afterEnd", reply_box);
            // append_under_first(all_possible_replies);
            // if (all_possible_replies.length > 1 && type_area.value.indexOf('@ramsesmiron') !== -1) {
            //   all_possible_replies[count++].insertAdjacentElement('afterEnd', reply_box);
            // }
          }

          console.log(all_possible_replies);
          // AFTER EVERYTHING, LET THE FORM FOR TYPING REPLY, BE HIDDEN.
          // else if (index == 2) {
          //   all_replies[index].insertAdjacentElement('afterend', reply_box);
          // }
          // else if (index > 2) {
          //   all_replies[index].insertAdjacentElement('afterend', reply_box);
          // }
          // })

          // FOR APPENDING UNDER THE FIRST COMMENT.
          function append_under_first(created_reply) {
            // RECEIVE THE REPLY, CREATE NEW REPLY, AND APPEND UNDER THE RECEIVED REPLY.

            let append_created_reply = (reply_length) => {
              for (let i = reply_length; i > 1; i++) {
                // THIS WOULD KEEP ADDING, AS WE ARE CREATING, AND APPENDING UNDER THE PREVIOUSLY CREATED ONE.
                reply_length[0].insertAdjacentElement("afterEnd", reply_box);
                // FUNCTION FOR ALL (condtions).
              }
            };

            // FIRST CONDITION.
            if (
              created_reply.length > 1 &&
              type_area.value.indexOf("@amyrobson") !== -1
            ) {
              append_created_reply(created_reply.length);
            }
            // SECOND CONDITION.
            else if (
              created_reply.length > 1 &&
              type_area.value.indexOf("@daniel") !== -1
            ) {
              append_created_reply(created_reply.length);
            }
            // THIRD CONDITION.
            else if (
              created_reply.length > 1 &&
              type_area.value.indexOf("@ramsesmiron") !== -1
            ) {
              append_created_reply(created_reply.length);
            }
          }
        }

        // CALL THIS FUNCTION FOR THE INSTANCE OF ME CREATING A NEW REPLY AFTER THE FIRST, FOR EVERY COMMENT.
        // form_for_changing.style.display = 'none';

        // THE REPLY CHANGER FUNCTION, BEING CALLED.
        // when_reply_changes(0);
        when_reply_changes();
        // when_reply_changes(1);
        // when_reply_changes(3);
        the_form.style.display = "none";

        // when_reply_changes(0+3);

        // when_reply_changes(2, the_form);

        // After This reply has been created, remove the textbox that you used, to type in the reply.

        // GET ALL THE POSSIBLE REPLIES AVALIABLE, APPEND THEM UNDER THE FIRST ONE, AS THEY ARE BEING CREATED.
        // var all_default_comment = document.querySelectorAll('.default-comment');

        // FUNCTION FOR RETURNING A PARTICULAR REPLY BY THE USER.
        function get_reply(reply, index) {
          return reply[index];
        }

        // function when_replies_are_created (original_replies, the_replies) {
        //   if () {
        //     all_comments[0].insertAdjacentElement('afterEnd', the_replies[0]);

        //     // Another nested if, to match the condition, if this is correct.
        //     // if (index > 0) {
        //     //   // the_replies[0].insertAdjacentElement('afterEnd', the_replies[0]);
        //     // }
        //   }
        //   else if (index > 0) {
        //     all_comments[index].insertAdjacentElement('afterEnd', all_possible_replies[index]);
        //   }
        // }
      });

      function for_the_edit(button) {}

      function inside_the_reply_box() {
        // This one is for the reply box.

        // A Callback function that runs, for when i click on reply.
        function reply(reply_button, index) {
          // When i click on the reply button.
          function reply_created() {
            reply_button[index].addEventListener("click", (e) => {
              e.preventDefault();
              // Create new users reply, with the reply to that person's comment.
            });
          }
        }
        // This function above is not needed.
        // Run the function for the creation of reply to someone's comment.

        // reply(reply_button);

        // run the function, for all reply buttons, that i may encounter (A CALLBACK FUNCTION).

        // reply(reply_buttons, 0);
      }
      // RUNNING THE FUNCTION, TO RUN, IF WE HAVE ANY OF THIS REPLY BUTTON, FOR SUBMITTING COMMENTS, THAT ARE AVAILABLE.

      // inside_the_reply_box();
    });
  }
  // FOR THE REPLY BUTTON THAT I CLICK ON.
  when_i_reply(reply_buttons, 0, all_comments, the_username);
  when_i_reply(reply_buttons, 1, all_comments, the_username2);
  when_i_reply(reply_buttons, 2, all_comments, ramses_name);
}

// FOR REDUCTION AND INCREASE OF THE VOTES
my_func_count(votes, up_button, down_button, 0);
my_func_count(votes2, up_button, down_button, 1);
my_func_count(ramses_votes, up_button, down_button, 2);
my_func_count(julio_votes, up_button, down_button, 3);
// For the user's reply comment.
// my_func_count(julio_votes, up_button, down_button, 3);

// my_func_count(votes2);
// my_func_count(ramses_votes);

// RUNNING THE FUNCTION FOR THE CREATION OF NEW REPLIES
creating_comment_box(other_reply_button, 0);
// creating_comment_box(other_reply_button, 1);
// creating_comment_box(other_reply_button, 2);
// creating_comment_box(other_reply_button, 3);
// GETTING THE CURRENT USER'S DATA FROM THE OBJECT.
const username = json.currentUser.username;
let user_image = json.currentUser.image.webp;

// For when the user types.
let user_image_types = json.currentUser.image.png;
