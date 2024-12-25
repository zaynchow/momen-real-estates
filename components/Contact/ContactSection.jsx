import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const ContactSectionWrapper = styled.div`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 60px 0 80px 0;
  .MuiSvgIcon-root {
    color: var(--secondary);
    width: 1.85rem;
    height: 1.85rem;
  }
  h2 {
    font-weight: 600;
  }
  .main {
    display: flex;
    width: 85%;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 4rem;
    .left-contact {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 40px;
      h3 {
        font-weight: 600;
        margin: 0;
      }
      h4 {
        font-weight: 400;
        margin: 0;
        font-size: 1rem;
      }
      > div {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        > div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
      .phone-sections {
        gap: 20px;
        > div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          a {
            display: flex;
            flex-direction: column;
          }
        }
      }
      .office-hours {
        display: flex;
        gap: 80px;
        justify-content: space-between;
      }
    }
    .right-form {
      width: 100%;
      .contact-form {
        .row-1 {
          display: flex;

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
          margin-top: 40px;
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
  }
  @media only screen and (min-width: 600px) {
    .main {
      flex-direction: row;
    }
    .left-contact {
      width: 40%;
    }
    .right-form {
      width: 60%;
    }
  }
`;

const ContactSection = ({ hoursOfOperation, contactInfo }) => {
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
    <ContactSectionWrapper>
      <h2>Get in touch</h2>
      <div className="main">
        <div className="left-contact">
          <div className="phone">
            <LocalPhoneOutlinedIcon className="phone-icon" />
            <div className="phone-sections">
              {(contactInfo.primary_phone_number ||
                contactInfo.secondary_phone_number) && (
                <div>
                  <h3>Phone</h3>
                  <h4>
                    <a href={`tel:${contactInfo.primary_phone_number}`}>
                      {contactInfo.primary_phone_number}
                    </a>
                    <a href={`tel:${contactInfo.secondary_phone_number}`}>
                      {contactInfo.secondary_phone_number}
                    </a>
                  </h4>
                </div>
              )}
              {(contactInfo.primary_mobile_number ||
                contactInfo.secondary_mobile_number) && (
                <div>
                  <h3>Mobile</h3>
                  <h4>
                    <a href={`tel:${contactInfo.primary_mobile_number}`}>
                      {contactInfo.primary_mobile_number}
                    </a>
                    <a href={`tel:${contactInfo.secondary_mobile_number}`}>
                      {contactInfo.secondary_mobile_number}
                    </a>
                  </h4>
                </div>
              )}
            </div>
          </div>
          <div className="email">
            <EmailOutlinedIcon className="email-icon" />
            <div>
              <h3>Email</h3>
              <h4>
                <a href="mailto: zaynchowdhury763@gmail.com">
                  {contactInfo.email_address}
                </a>
              </h4>
            </div>
          </div>
          <div className="open-hours">
            <UpdateOutlinedIcon className="email-icon" />
            <div>
              <h3>Open hours</h3>
              <div>
                <div className="office-hours">
                  <p>Sunday - Thursday</p>
                  <p>{hoursOfOperation.sunday_to_thursday_hours}</p>
                </div>
                <hr />
                <div className="office-hours">
                  <p>Friday</p>
                  <p>{hoursOfOperation.friday_hours}</p>
                </div>
                <hr />
                <div className="office-hours">
                  <p>Saturday</p>
                  <p>{hoursOfOperation.saturday_hours}</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="contact-container">
            <form className="contact-form" onSubmit={sendEmail} ref={form}>
              <div className="row-1">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="user_name"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="user_phone"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="user_email"
                />
              </div>
              <div className="row-2">
                <textarea
                  rows="3"
                  type="text"
                  placeholder="Type Your Message Here"
                  name="message"
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
        </div>
      </div>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
