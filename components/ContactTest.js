import React from "react";
import Script from "next/script";

export default function ContactTest() {
  var submitting = false;
  const submitRegistrationForm = (element) => {
    // event.preventDefault();
    console.log("submit funtion called");
    var form = document.querySelector(
      "body#spark-registration-form form, form#spark-registration-form"
    );
    var missing = "";
    var required = { contact_email: "Email" };
    var customRequired = document.querySelectorAll(
      "input:required, textarea:required, select:required"
    );
    // var questionsRequired = { answers_9887: "Where did you hear about us?" };

    // Adds custom required inputs to the 'required' object
    for (var i = 0; i < customRequired.length; i++) {
      required[customRequired[i].id] = customRequired[
        i
      ].parentNode.firstElementChild.innerHTML.replace("*", "");
    }

    // Adds required question inputs to the 'required' object
    // for (var key in questionsRequired) {
    //   required[key] = questionsRequired[key];
    // }

    // Iterates through required fields and adds any that have
    // not been populated to 'missing' list
    for (var key in required) {
      var elements = Array.from(
        document.querySelectorAll("[id^='" + key + "']")
      );

      if (elements.length > 0) {
        var missing_field = true;

        elements.forEach(function (el) {
          if (
            el.length < 1 ||
            (el &&
              ((el.type == "checkbox" && el.checked) ||
                (el.type == "radio" && el.checked) ||
                (el.type != "radio" && el.type != "checkbox" && el.value) ||
                (document.getElementById(key + "_other_text") &&
                  document.getElementById(key + "_other_text").value)))
          ) {
            missing_field = false;
          }
        });

        if (missing_field) {
          missing += "- " + required[key] + "\r\n";
        }
      }
    }

    // Tests email input value against RFC 5322 Official Standard Email Regex
    var email = document.getElementById("contact_email").value;
    if (
      !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
      )
    ) {
      missing += "- Email is invalid\r\n";
    }

    if (missing != "") {
      alert("The following fields are incomplete:\r\n" + missing);
      return false;
    }

    // Prevents duplicate submissions
    if (submitting) {
      return false;
    }
    submitting = true;

    // If you are hosting this form on your own site and have reCAPTCHA enabled,
    // ensure that this is populated with your own site key, as well as include
    // the following script before this code:
    //   <script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY">
    // For more information, see: https://developers.google.com/recaptcha/docs/v3
    var siteKey = "6LfxM2kdAAAAALll_ERHDWvIiVP9kqLWb-S_pDjD";
    grecaptcha.ready(function () {
      grecaptcha
        .execute(siteKey, { action: "registration" })
        .then(function (token) {
          const tokenInput = document.querySelector(".g-recaptcha-response");
          if (tokenInput) {
            tokenInput.value = token;
            form.appendChild(tokenInput);
          }
          form.submit();
        });
    });
  };

  return (
    <form
      id="spark-registration-form"
      // onSubmit={submitRegistrationForm}
      acceptCharset="UTF-8"
      method="post"
    >
      <input
        type="hidden"
        name="authenticity_token"
        value="99sg7E9RLtOiQeu6ZzYOGaDH+TqBpFMrzCxy3AwGu1XmAnd+4gOMvad/OAc0QE+8QoUWvdeKLamgLeEsA7wd8Q=="
      />
      <div className="grid">
        <div className="form-item">
          <label htmlFor="contact_first_name">First Name</label>
          <input
            type="text"
            name="contact[first_name]"
            id="contact_first_name"
          />
        </div>

        <div className="form-item">
          <label htmlFor="contact_last_name">Last Name</label>
          <input type="text" name="contact[last_name]" id="contact_last_name" />
        </div>

        <div className="form-item">
          <label htmlFor="contact_email">Email *</label>
          <input type="email" name="contact[email]" id="contact_email" />
        </div>

        <div className="form-item">
          <label htmlFor="contact_phone">Phone</label>
          <input type="tel" name="contact[phone]" id="contact_phone" />
        </div>
      </div>

      <div className="answers row">
        <label htmlFor="When_are_you_hoping_to_move_">
          When are you hoping to move?
        </label>
        <div className="answer">
          <textarea
            name="answers[12009][answers]"
            id="answers_12009"
            className="ignore"
          ></textarea>
        </div>
      </div>
      <div className="answers row">
        
        <div className="dropdown-wrapper">
          <div className="answer">
            <select
              name="answers[12010][answers]"
              id="answers_12010"
              className="false"
            >
              <option value="">Select</option>
              <option value="One Bedroom">One Bedroom</option>
              <option value="One Bedroom + Den">One Bedroom + Den</option>
              <option value="Two Bedroom">Two Bedroom</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-item">
        {/* <label htmlFor="contact_comments">Comments or Questions</label> */}
        <textarea
          placeholder="Additional comments or questions"
          rows="5"
          className="ignore"
          data-enhance="false"
          name="contact[comments]"
          id="contact_comments"
        ></textarea>
      </div>

      <a
        onClick={() => submitRegistrationForm(this)}
        className="button submit"
        // style={{"color: #fff"}}
        // href="javascript:void(0);"
      >
        Register
      </a>

      <input type="hidden" name="source" id="source" value="Website" />
      <input
        type="hidden"
        name="redirect_success"
        id="redirect_success"
        value="http://www.senecahousedc.com/thankyou.html"
      />
      <input type="hidden" name="redirect_error" id="redirect_error" value="" />
      <input
        type="text"
        name="are_you_simulated"
        id="are_you_simulated"
        placeholder="Leave this field blank"
      />
      <input
        type="hidden"
        name="g-recaptcha-response"
        id="g-recaptcha-response"
        className="g-recaptcha-response"
      />
      {/* <!-- / ENSURE THAT THIS CONTAINS YOUR RECAPTCHA v3 SITE KEY --> */}
      <Script src="https://www.google.com/recaptcha/api.js?render=6LfxM2kdAAAAALll_ERHDWvIiVP9kqLWb-S_pDjD" />
    </form>
  );
}
