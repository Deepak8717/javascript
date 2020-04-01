const app = document.getElementById("root");
const db = firebase.database();
const auth = firebase.auth();
let signedInUserDetails = {};

// Page

auth.onAuthStateChanged(user => {
  if (user) {
    document.querySelector("body").classList.add("in");
    document.querySelector("body").classList.remove("out");
    document.querySelector("header").classList.add("in");
    document.querySelector("header").classList.remove("out");
    document.getElementById("button-login").style.display = "none";
    document.getElementById("button-logout").style.display = "block";
    document.querySelector(".profile-buttons").style.display = "grid";
    document.querySelector(".form").style.display = `grid`;
    signedInUserDetails.displayName =
      user.displayName === null ? `Anonymous` : user.displayName.trim();
    signedInUserDetails.image =
      user.photoURL === null
        ? `https://placekitten.com/100/100`
        : user.photoURL.trim();
    if (user.emailVerified) {
      document.querySelectorAll("#form__input, #form__button").forEach(i => {
        i.removeAttribute("disabled");
      });
      user.displayName = `Anonymous`;
      user.image = `https://placekitten.com/100/100`;
    } else {
      document.querySelectorAll("#form__input, #form__button").forEach(i => {
        i.setAttribute("disabled", "disabled");
      });
    }
  } else {
    document.querySelector("body").classList.add("out");
    document.querySelector("body").classList.remove("in");
    document.querySelector("header").classList.add("out");
    document.querySelector("header").classList.remove("in");
    document.getElementById("button-login").style.display = "block";
    document.getElementById("button-logout").style.display = "none";
    document.querySelector(".profile-buttons").style.display = "none";
    document.querySelector(".form").style.display = `none`;
  }
});

// VIEW

const handleMessageView = message => {
  let html = ``;
  const messages = document.querySelector(".messages");
  if (!message) {
    messages.innerHTML = `Looks Empty! Please start a conversation in this room.`;
    return;
  }
  for (let item in message) {
    const key = item;
    const value = message[item];
    html += `
      <div key=${key} class="message">
        <div class="message__content">${value.message}</div>
        <div class="message__user">
          <div class="message__user-image">
            <img src="${
              value.user ? value.user.image : "https://placekitten.com/100/100"
            }" alt="" aria-hidden="true">
          </div>
          <div class="message__meta">
            <div class="message__user-name">${
              value.user ? value.user.name : "Anonymous"
            }</div>
            <div class="message__date">${moment(value.createdAt).format(
              "LLLL"
            )}</div>
          </div> 
        </div>
      </div>
    `;
  }
  messages.innerHTML = html;
};

const handleAppView = () => {
  let roomsRef = db.ref(`/rooms`);
  roomsRef.on("value", data => {
    if (data.val() === null) {
      handleMessageView();
      return;
    } else {
      handleMessageView(data.val());
    }
  });
};

const handleButtonsEvents = () => {
  const loginButton = document.getElementById("button-login");
  const logoutButton = document.getElementById("button-logout");
  const subscribeButton = document.getElementById("button-subscribe");
  const resetButton = document.getElementById("button-reset");
  const viewProfileButton = document.getElementById("button-view-profile");
  const editProfileButton = document.getElementById("button-edit-profile");
  const deleteProfileButton = document.getElementById("button-delete-profile");
  loginButton.addEventListener("click", e => {
    e.target.classList.add("in-focus");
    vex.dialog.open({
      message:
        "Welcome to AntiChat! Please enter your Email address you registered with us and given password for that account.",
      input: [
        '<input name="loginEmail" type="email" placeholder="Enter Email Address" required />',
        '<input name="loginPassword" type="password" placeholder="Enter Password" required />'
      ].join(""),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: "Login" }),
        $.extend({}, vex.dialog.buttons.NO, { text: "Cancel" })
      ],
      callback: data => {
        if (!data) {
          e.target.classList.remove("in-focus");
        } else {
          e.target.classList.remove("in-focus");
          let auth = firebase.auth();
          auth
            .signInWithEmailAndPassword(data.loginEmail, data.loginPassword)
            .then(() => {})
            .catch(error => vex.dialog.alert(error.message));
        }
      }
    });
  });
  logoutButton.addEventListener("click", e => {
    e.target.classList.add("in-focus");
    let auth = firebase.auth();
    auth
      .signOut()
      .then(() => {
        e.target.classList.remove("in-focus");
        vex.dialog.alert(
          `You have successfully logged out! We will see you soon.`
        );
      })
      .catch(error => vex.dialog.alert(error.message));
  });
  subscribeButton.addEventListener("click", e => {
    e.target.classList.add("in-focus");
    vex.dialog.open({
      message:
        "Would you like to join AntiChat community? We will help you with that. Please enter your desired Email address and  choose password of choice for that account.",
      input: [
        '<input name="subscribeEmail" type="email" placeholder="Enter Email Address" required />',
        '<input name="subscribePassword" type="password" placeholder="Create Password" required />'
      ].join(""),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: "Subscribe" }),
        $.extend({}, vex.dialog.buttons.NO, { text: "Cancel" })
      ],
      callback: data => {
        if (!data) {
          e.target.classList.remove("in-focus");
        } else {
          e.target.classList.remove("in-focus");
          let auth = firebase.auth();
          auth.useDeviceLanguage();
          const sendVerificationEmail = () => {
            auth.currentUser
              .sendEmailVerification()
              .then(
                vex.dialog.alert(
                  `Thank you for subscribing. Please check your inbox to verify account.`
                )
              )
              .catch(error => vex.dialog.alert(error.message));
          };
          auth
            .createUserWithEmailAndPassword(
              data.subscribeEmail,
              data.subscribePassword
            )
            .then(sendVerificationEmail)
            .catch(error => vex.dialog.alert(error.message));
        }
      }
    });
  });
  resetButton.addEventListener("click", e => {
    e.target.classList.add("in-focus");
    vex.dialog.open({
      message:
        "Did you forget your account password? We will help you with that at AntiChat. Please enter your registered Email address and check your inbox to proceed.",
      input: [
        '<input name="resetEmail" type="email" placeholder="Enter Email Address" required />'
      ].join(""),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: "Reset Password" }),
        $.extend({}, vex.dialog.buttons.NO, { text: "Cancel" })
      ],
      callback: data => {
        if (!data) {
          e.target.classList.remove("in-focus");
        } else {
          e.target.classList.remove("in-focus");
          let auth = firebase.auth();
          auth
            .sendPasswordResetEmail(data.resetEmail)
            .then(
              vex.dialog.alert(
                "Please check your inbox to reset password. Thank you!"
              )
            )
            .catch(error => vex.dialog.alert(error.message));
        }
      }
    });
  });
  viewProfileButton.addEventListener("click", e => {
    e.target.classList.add("in-focus");
    vex.dialog.open({
      message: "Following is your account name and profile picture:",
      input: [
        `<div style="margin:0 0 .5rem;"><label id="label">${signedInUserDetails.displayName}</label></div>`,
        `<div><img id="image" src=${signedInUserDetails.image} alt="" aria-hidden="true"></div>`
      ].join(""),
      buttons: [$.extend({}, vex.dialog.buttons.NO, { text: "Exit" })],
      callback: data => {
        e.target.classList.remove("in-focus");
      }
    });
  });
  editProfileButton.addEventListener("click", e => {
    e.target.classList.add("in-focus");
    vex.dialog.open({
      message: "Please edit your account name and profile picture.",
      input: [
        `<input id="editProfileName" value="${signedInUserDetails.displayName}" name="editProfileName" type="text" placeholder="Enter Name" required />`,
        `<input id="editProfilePicture" value="${signedInUserDetails.image}" name="editProfilePicture" type="url" placeholder="Enter Profile Picture URL" required />`
      ].join(""),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: "Edit" }),
        $.extend({}, vex.dialog.buttons.NO, { text: "Cancel" })
      ],
      callback: data => {
        if (!data) {
          e.target.classList.remove("in-focus");
        } else {
          e.target.classList.remove("in-focus");
          if (
            data.editProfileName.trim() === "" ||
            data.editProfilePicture.trim() === ""
          ) {
            vex.dialog.alert("Please enter a valid name and photo URL.");
            return;
          }
          const changeNameAndPhoto = (user, newNameAndPhoto) => {
            const { newDisplayName, newPhoto } = newNameAndPhoto;
            user
              .updateProfile({
                displayName: newDisplayName,
                photoURL: newPhoto
              })
              .then(
                vex.dialog.alert(
                  "Display Name and Profile Picture has been made successfully."
                )
              )
              .catch(error => vex.dialog.alert(error.message));
          };
          const newNameAndPhoto = {
            newDisplayName: data.editProfileName,
            newPhoto: data.editProfilePicture
          };
          const user = auth.currentUser;
          changeNameAndPhoto(user, newNameAndPhoto);
          signedInUserDetails.displayName = newNameAndPhoto.newDisplayName;
          signedInUserDetails.image = newNameAndPhoto.newPhoto;
        }
      }
    });
  });
  deleteProfileButton.addEventListener("click", e => {
    e.target.classList.add("in-focus");
    vex.dialog.open({
      message: "Please enter your password to confirm deletion of account.",
      input: [
        '<input name="confirmPassword" type="password" placeholder="Enter Password" required />'
      ].join(""),
      buttons: [
        $.extend({}, vex.dialog.buttons.YES, { text: "Proceed" }),
        $.extend({}, vex.dialog.buttons.NO, { text: "Cancel" })
      ],
      callback: data => {
        if (!data) {
          e.target.classList.remove("in-focus");
          return;
        } else {
          e.target.classList.remove("in-focus");
          let user = auth.currentUser;
          let password = data.confirmPassword;
          let createCredential = user => {
            let email = user.email;
            let credential = firebase.auth.EmailAuthProvider.credential(
              email,
              password
            );
            return credential;
          };
          let credential = createCredential(user);
          user
            .reauthenticateWithCredential(credential)
            .then(() => {
              user.delete();
              vex.dialog.alert("Your account has been deleted.");
            })
            .catch(error => vex.dialog.alert(error.message));
        }
      }
    });
  });
};

const handleButtonsView = () => {
  handleButtonsEvents();
};

const handleFormView = () => {
  let html = `
    <div class="messages"></div>
    <form id="form" class="form">
      <input type="text" placeholder="Type your Message" id="form__input">
      <button type="submit" id="form__button">Send</button>
    </form>
  `;
  app.innerHTML = html;
  document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    handleSubmit(e);
  });
};

// CONTROLLER

const sendMessage = newMessage => {
  let newId = db
    .ref()
    .child("rooms")
    .push().key;
  db.ref(`rooms/${newId}`).set(newMessage);
};

const handleSubmit = e => {
  console.log(signedInUserDetails);
  const message = e.target[0].value;
  if (!message || message.trim() === "") {
    vex.modal.alert("Please type a message!");
    return;
  }
  document.querySelector("form").reset();
  const newMessage = {
    user: {
      name: signedInUserDetails.displayName,
      image: signedInUserDetails.image
    },
    message,
    createdAt: new Date().toUTCString()
  };
  sendMessage(newMessage);
};

// INIT

handleButtonsView();
handleFormView();
handleAppView();
