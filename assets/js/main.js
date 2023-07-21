/*
	Prism by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function ($) {
  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
  });

  $(function () {
    var $window = $(window),
      $body = $("body");

    // Disable animations/transitions until the page has loaded.
    $body.addClass("is-loading");

    $window.on("load", function () {
      window.setTimeout(function () {
        $body.removeClass("is-loading");
      }, 100);
    });

    // Fix: Placeholder polyfill.
    $("form").placeholder();

    // Prioritize "important" elements on medium.
    skel.on("+medium -medium", function () {
      $.prioritize(
        ".important\\28 medium\\29",
        skel.breakpoint("medium").active
      );
    });
  });
})(jQuery);

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };
//   const serviceID = "service_diujz8n";
//   const templateID = "template_ftfr5b4";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("Your message sent successfully!");
//     })
//     .catch((err) => console.log(err));
// }

// function sendEmail() {

//   Email.send({
//     Host: "smtp-relay.brevo.com",
//     Username: "pravicoaching@gmail.com",
//     Password: "vUytD7m6pLJ9BhET ",
//     To: "pravicoaching@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: "Contact Form - Enquiry",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }

// function Send() {
//   var name = document.getElementById("Name").value;
//   var email = document.getElementById("Email").value;
//   var contact = document.getElementById("Contact").value;
//   var sub = document.getElementById("subject").value;
//   var mess = document.getElementById("message").value;

//   var body =
//     "Name: " +
//     name +
//     "<br/> Email:" +
//     email +
//     "<br/> Contact Number:" +
//     contact +
//     "<br/> Message:" +
//     mess;

//   console.log(body);
//   Email.send({
//     // SecureToken: "db739cc9-28e0-4c1a-b4b5-ff998f5ff0ed",
//     Host: "smtp-relay.sendinblue.com ",
//     Username: "pravicoaching@gmail.com",
//     Password: "vUytD7m6pLJ9BhET ",
//     To: "pravicoaching@gmail.com",
//     From: email,
//     Subject: sub,
//     Body: body,
//   }).then((message) => {
//     if (message == "OK") {
//       swal("Successfull", "Your Data Successfull Received", "success");
//     } else {
//       swal("Something Wrong", "Your Data is not Received", "error");
//     }
//   });
// }

// function Send() {
//   const SMTPClient = require("emailjs-smtp-client");

//   // Set up SMTP server details
//   const client = new SMTPClient({
//     host: "smtp-relay.sendinblue.com",
//     port: 587,
//     secure: false,
//   });

//   // Configure authentication options
//   client.auth({
//     user: "pravicoaching@gmail.com",
//     pass: "vUytD7m6pLJ9BhET",
//   });

//   // Create an email object
//   const email = client.createMessage({
//     from: document.getElementById(email),
//     to: " pravicoaching@gmail.com ",
//     subject: "Hello from SMTP.js",
//     text: "This is the plain text body of the email",
//   });

//   // Send the email
//   client.send(email, function (err, message) {
//     if (err) {
//       console.error("Error sending email:", err);
//     } else {
//       console.log("Email sent successfully:", message);
//     }
//   });
// }

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
