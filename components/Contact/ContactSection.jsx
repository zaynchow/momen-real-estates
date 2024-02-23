import React from "react";
import styled from "styled-components";
import Button from "../lib/Button";
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
    justify-content: flex-start;
    margin-top: 4rem;
    .left-contact {
      width: 40%;
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
        }
      }
      .office-hours {
        display: flex;
        gap: 80px;
        justify-content: space-between;
      }
    }
    .right-form {
      width: 60%;
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
`;

const ContactSection = () => {
  return (
    <ContactSectionWrapper>
      <h2>Get in touch</h2>
      <div className="main">
        <div className="left-contact">
          <div className="phone">
            <LocalPhoneOutlinedIcon className="phone-icon" />
            <div className="phone-sections">
              <div>
                <h3>Phone</h3>
                <h4>
                  <a href="tel:+880 1711701735">+880 1711701735</a>
                </h4>
              </div>
              <div>
                <h3>Mobile</h3>
                <h4>
                  <a href="tel:+880 1711701735">+880 1711701735</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="email">
            <EmailOutlinedIcon className="email-icon" />
            <div>
              <h3>Email</h3>
              <h4>
                <a href="mailto: zaynchowdhury763@gmail.com">
                  zaynchowdhury763@gmail.com
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
                  <p>8am-5pm</p>
                </div>
                <hr />
                <div className="office-hours">
                  <p>Saturday</p>
                  <p>8am-5pm</p>
                </div>
                <hr />
                <div className="office-hours">
                  <p>Friday</p>
                  <p>Closed</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="contact-container">
            <form className="contact-form">
              <div className="row-1">
                <input type="text" placeholder="Your Full Name" />
                <input type="tel" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" />
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
            </form>
          </div>
        </div>
      </div>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
