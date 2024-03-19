import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";

import axios from "axios";
import NextCors from "nextjs-cors";

import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendar } from "@fortawesome/free-regular-svg-icons";

const SITE_KEY = "6LfxM2kdAAAAALll_ERHDWvIiVP9kqLWb-S_pDjD";

import ss from "../public/assets/images/contactformSS.png";

export default function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [response, setResponse] = useState(null);
  const [formData, setFormData] = useState({
    authenticity_token:
      "99sg7E9RLtOiQeu6ZzYOGaDH+TqBpFMrzCxy3AwGu1XmAnd+4gOMvad/OAc0QE+8QoUWvdeKLamgLeEsA7wd8Q==",
    "contact[first_name]": "",
    "contact[last_name]": "",
    "contact[email]": "",
    "contact[phone]": "",
    "answers[12009][answers]": "",
    "answers[12010][answers]": "",
    "contact[comments]": "",
  });

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log("recaptcha Script loaded!");
      }
    );
  }, []);

  const handleSubmitForm = (event) => {
    // event.stopImmediatePropagation()
    event.preventDefault();
    // setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token) => {
          submitData(token);
        });
    });
  };

  const submitData = (token) => {
    let bodydata = {
      authenticity_token:
        "99sg7E9RLtOiQeu6ZzYOGaDH+TqBpFMrzCxy3AwGu1XmAnd+4gOMvad/OAc0QE+8QoUWvdeKLamgLeEsA7wd8Q==",
      "contact[first_name]": formData["contact[first_name]"],
      "contact[last_name]": formData["contact[last_name]"],
      "contact[last_name]": formData["contact[last_name]"],
      "contact[last_name]": formData["contact[last_name]"],
      "answers[12009][answers]": formData["answers[12009][answers]"],
      "answers[12010][answers]": formData["answers[12010][answers]"],
      "contact[comments]": formData["contact[comments]"],
      "g-recaptcha-response": token,
    };
    console.log(bodydata);
    console.log(JSON.stringify(bodydata));
    // const requestMetaData = {
    //   method: "POST",
    //   // headers: {
    //   //   "Content-Type": "application/json",
    //   // },
    //   body: JSON.stringify(bodydata),

    //   // body: "authenticity_token=LKBL52ubzAGAM1stioOPF82QSelSV89zA5pIAoWHuDduoXofz%2FQZl46AS7lyOTL6mYOL%2BJIgWbucWkLLuFY4%2Fg%3D%3D&contact%5Bfirst_name%5D=brean&contact%5Blast_name%5D=te&contact%5Bemail%5D=Brendan%40carelcreative.com&contact%5Bphone%5D=&g-recaptcha-response=03AIIukzg3rAwKYrQ5S7IpmbuatdhwR1OKSmSIq3x5P3pRkQHUvijCFcSrkUsc2WsK4SnqqDsfaIi9MBdLP6hdLjdEV6Rymn8d8LnZqNl5FgiJuiPzQIPi9MqHcEyQUIUcU0iVudoAw0ixdg3Is5vPbYdcKpefB5-NJGnWxhrhdC1FgB6IY8g49MOkpqucFLb4ouqGwvkk9H8hCB9_nriWmob83PTFva1VfKoXFeE2fkbSczlxtmdONkWDXTg48vZzLjqjkeA1dNkLMyntCtBJOFzJ3Pbr6veJaYA87WsVqhIAN57wdCpKjIg_dinODfIxtxnHeMH80kQK7NXXo1lnxtQjqRLmWlrYGRCOzWckjzJci_Wh4d_You3jgX-EEFRmHLaMSPzxgm-oxo7jCQzGmpnsiU27SexdNFFaNmXTCePA46KmKmDLqGc-AdfZM8D4Ne05vQ--8wgBVthsxF3OE0HBnkaU4dBaN5e31jTWB4K_ztQLiotbkf3glTrONMj5NXl8i8T0IviI-aIP0bdIgt11iVrnxHP-vbCJ7xkXXsI2HPaHMS3jbOWyXlVQspy2I8s1ev7uuljjbwagGYencGyZKcNJNymPdg",
    // };

    // fetch(
    //   "https://spark.re/urban-pace/seneca-house/register/registration-form",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(bodydata),
    //     headers: { "Content-type": "application/json; charset=UTF-8" },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     // Handle data
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    // // call a backend API to verify reCAPTCHA response
    // console.log("data should submit");
    // console.log(bodydata);

    axios({
      method: "post",
      url: "https://spark.re/urban-pace/seneca-house/register/registration-form",
      data: "authenticity_token=LKBL52ubzAGAM1stioOPF82QSelSV89zA5pIAoWHuDduoXofz%2FQZl46AS7lyOTL6mYOL%2BJIgWbucWkLLuFY4%2Fg%3D%3D&contact%5Bfirst_name%5D=brenda&contact%5Blast_name%5D=tes&contact%5Bemail%5D=Brendan2%40carelcreative.com&contact%5Bphone%5D=&g-recaptcha-response=03AIIukzg2L9W4W0tXUlzQsaR8uzmMo0Y9lYn5u7_D7uOtALX1Rdu5KW2Zm8ts40ypPJEcEQUqmTDnjLybknb5lZTi7qQfdA1bFdv7xABbjHSPqm_eM1qOsQboEIUeibAxzs-SkEaXoADUO0jcc_SsFZX_9vUPRyPiWeMKRPlKdHHsxMFAC0SB7F_RwGB-AmHwqt3K5-z2e4HofJcc8zWC1PhJJx5bXelL1sgwlHNHXi4WGcqZzJoDm1ams1YNdLAkHnAb0QGHDlVRrSgdVtg47ySxqtYzVzu8EIQ5ZN0CbwlnjUfH1nE7MGfhh_XMmgKuFRJS_NyArD89mXjQD4DGNpOorVaCZ3ol2WZy_3HV8BZFDA5JlS797Ri44MjNTHAiVp92GDkcfAXxyU6I5B-GyduCZLhUXTpjfV_gdwp15W-wBezAg4_LXPUMiGgZ_pjPfEMoy_ntOXlYjcB8qpyZLv_47WHXQwYn8fGpZhMRvzqxnGb92q-SuRIeqmZAqCvTo0lUd9faflK9PWw88iFFl-uio46afOc9lJPH1SXx_TIw89J8ttjFE2Q8BCaTt_f_pcUOjy9DE_3F0xkLn_w3qjqprjJAiN-kXg",
      withCredentials: false,
    }).then((response) => {
      console.log(response.data);
      router.replace("/thank-you");
    });
  };

  const handleInputChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="row">
      <Form onSubmit={handleSubmitForm}>
        <Form.Group className="mb-3">
          {/* <Form.Label>First Name*</Form.Label> */}
          <Form.Control
            className="border-top-0 border-end-0 border-start-0"
            type="text"
            placeholder="First Name*"
            name="contact[first_name]"
            id="contact_first_name"
            value={formData.name}
            onChange={() => handleInputChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>First Name*</Form.Label> */}
          <Form.Control
            className="border-top-0 border-end-0 border-start-0"
            type="text"
            placeholder="Last Name*"
            name="contact[last_name]"
            id="contact_last_name"
            value={formData.name}
            onChange={() => handleInputChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            className="border-top-0 border-end-0 border-start-0"
            type="email"
            placeholder="Email*"
            name="contact[email]"
            id="contact_email"
            value={formData.name}
            onChange={() => handleInputChange(event)}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            className="border-top-0 border-end-0 border-start-0"
            type="tel"
            placeholder="Phone*"
            name="contact[phone]"
            id="contact_phone"
            value={formData.name}
            onChange={() => handleInputChange(event)}
          />
        </Form.Group>

        <InputGroup className="mb-3 date">
          <Form.Control
            className="ignore border-top-0 border-end-0 border-start-0"
            placeholder="Desired Move In Date"
            name="answers[12009][answers]"
            id="answers_12009"
          />
          <InputGroup.Text
            id="basic-addon1"
            className="bg-light text-primary border-top-0 border-end-0 border-start-0"
          >
            <FontAwesomeIcon icon={faCalendar} />
          </InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Select
            name="answers[12010][answers]"
            id="answers_12010"
            className="false border-top-0 border-end-0 border-start-0"
            value={formData.name}
            onChange={() => handleInputChange(event)}
          >
            <option disabled>Floor Plan Type</option>
            <option value="One Bedroom">One Bedroom</option>
            <option value="One Bedroom + Den">One Bedroom + Den</option>
            <option value="Two Bedroom">Two Bedroom</option>
            <option value="Penthouse">Penthouse</option>
          </Form.Select>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            // as="textarea"
            type="textarea"
            data-enhance="false"
            name="contact[comments]"
            id="contact_comments"
            placeholder="What else is important that we know?"
            className="ignore border-top-0 border-end-0 border-start-0 "
            rows={5}
          />
        </InputGroup>
        <Button
          className="ms-auto float-end fw-bold fs-6 my-3"
          variant="outline-white"
          type="submit"
          onClick={handleSubmitForm}
        >
          Submit Form
        </Button>
      </Form>
      {/* <div className="row">
        <div className="col-12">
          <img alt="contact form" src={ss.src} style={{ width: "100%" }} />
        </div>
      </div> */}
    </div>
  );
}
