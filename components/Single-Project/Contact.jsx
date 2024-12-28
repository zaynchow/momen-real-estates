import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const ContactContainer = styled.div`
  background-color: white;

  .contact-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;

    padding: 70px 0;
    align-items: flex-start;

    & > h4 {
      font-size: 1.8rem;
      margin: 0;
    }
    .contact-form {
      max-width: 90%;
      margin-top: 40px;
      .row-1 {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: space-between;
        column-gap: 50px;

        input {
          &:focus {
            outline: none;
          }
          border: none;
          border: 1px solid black;
          width: 100%;
          height: 3rem;
          font-family: "Montserrat";
          padding-left: 10px;
        }
      }
      .row-2 {
        margin-top: 20px;
        textarea {
          &:focus {
            outline: none;
          }
          border: none;
          border: 1px solid black;
          width: 100%;
          height: 10rem;
          font-family: "Montserrat";
          padding: 10px 10px;
          resize: none;
        }
      }
      .row-3 {
        margin-top: 40px;
        input {
          cursor: pointer;
          &:focus {
            outline: none;
          }
          border: none;
          width: 200px;
          font-family: Roboto;
          font-weight: 500;
          color: white;
          display: inline-block;
          padding: 15px 30px;
          background-color: #e7ae4b;
          text-transform: uppercase;
        }
      }
    }
  }
  @media screen and (min-width: 600px) {
    .contact-container {
      .contact-form {
        .row-1 {
          flex-direction: row;
        }
        .row-2 {
          margin-top: 40px;
        }
      }
    }
  }
`;
const Contact = ({ scrollRef, projectName, contactInfo }) => {
  const form = useRef();
  const [showSuccessText, setShowSuccessText] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY,
        }
      )
      .then(
        () => {
          for (let i = 0; i < 4; i++) {
            form.current[i.toString()].value = "";
          }
          setIsSuccess(true);
          setShowSuccessText(true);
          setTimeout(() => setShowSuccessText(false), 3000);
        },
        (error) => {
          setIsSuccess(false);
          setShowSuccessText(true);
          setTimeout(() => setShowSuccessText(false), 3000);
        }
      );
  };

  return (
    <ContactContainer ref={scrollRef}>
      <div className="contact-container">
        <h4>Have a Question?</h4>
        <form className="contact-form" onSubmit={sendEmail} ref={form}>
          <div className="row-1">
            <input type="text" placeholder="Your Full Name" name="user_name" />
            <input type="tel" placeholder="Phone Number" name="user_phone" />
            <input type="email" placeholder="Email Address" name="user_email" />
            <input type="hidden" value={projectName} name="project_name" />
          </div>
          <div className="row-2">
            <textarea
              rows="3"
              type="text"
              placeholder="Type Your Message Here"
            />
          </div>
          <div className="row-3">
            <input type="submit" />
          </div>
          {showSuccessText
            ? isSuccess
              ? "Your message has been sent successfully!"
              : `Message Failed to Send. Please call ${contactInfo.primary_phone_number}`
            : ""}
        </form>
      </div>
    </ContactContainer>
  );
};

export default Contact;
