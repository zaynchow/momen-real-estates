import React from "react";
import styled from "styled-components";

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
`;
const Contact = () => {
  return (
    <ContactContainer>
      <div className="contact-container">
        <h4>Have a Question?</h4>
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
    </ContactContainer>
  );
};

export default Contact;
