import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

//TODO: Add transition animation

const FloorContainer = styled.div`
  background: white;
  & * {
    transition: display 2.5s ease-in-out;
  }

  .floor-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 20%;
      font-size: 1.8rem;
      margin: 0;
    }
    .accordion-container {
      width: 70%;
      .single-accordion {
        transition: all 1.5s ease-in-out;
        .answer {
          display: inline-block;
          transition: all 1.5s ease-in-out;
          padding: 30px;
          width: 100%;
          border: 1px solid black;
          border-top: none;

          p {
            margin: 0;
          }
        }

        .answer.hide {
          display: none;
        }

        .question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid black;
          height: 40px;
          cursor: pointer;

          .icon-container {
            padding: 0px 10px;
            display: flex;
            align-items: center;

            height: 100%;
            .vl {
              display: inline-block;
              border-left: 1px solid black;
              height: 100%;
              margin: 0 15px;
            }

            p {
              font-weight: 600;
            }
          }

          .highlight-desc {
            text-align: right;
            p {
              display: inline-block;
              margin-right: 30px;
              span {
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }
`;

const Floor = () => {
  const [openAccord, setOpenAccord] = useState(false);

  return (
    <FloorContainer>
      <div className="floor-container">
        <h4>Floor Plans</h4>

        <div className="accordion-container">
          <div className="single-accordion">
            <div
              className="question"
              onClick={() => setOpenAccord(!openAccord)}
            >
              <div className="icon-container">
                <Image
                  src="/icons/accordion-open-icon.svg"
                  alt="open-icon"
                  width={20}
                  height="20"
                />
                <div className="vl"></div>
                <p>Ground Floor</p>
              </div>

              <div className="highlight-desc">
                <p>
                  <span>Size: </span>5
                </p>
                <p>
                  <span>Rooms: </span>4
                </p>
                <p>
                  <span>Baths: </span>2
                </p>
              </div>
            </div>
            <div className={openAccord ? "answer show" : "answer hide"}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nisi
                laboriosam, ex, possimus esse dolorem autem fuga distinctio
                similique voluptatem non cum dicta tempora asperiores. Quidem
                cum consequuntur accusamus saepe. Cupiditate voluptatem, ipsum
                cumque temporibus facilis enim officia vero voluptatum ex
                necessitatibus repudiandae recusandae in aut impedit aliquam!
                Odio unde quis pariatur laborum, esse quia molestiae eum id
                inventore repellendus. Consequuntur architecto quam dolore
                tenetur, cumque corrupti ratione quaerat eius et qui eligendi
                ipsa dolor velit quos odit doloremque fuga molestias illum sequi
                est nostrum illo cum eaque harum? Rerum? Nihil perspiciatis
                ipsam, consequuntur quidem sed quam, neque voluptatum quaerat
                ipsa blanditiis laborum animi distinctio illo nesciunt beatae
                quia, quo laboriosam praesentium eveniet. Alias provident ab
                itaque perspiciatis corporis nam. Dolor possimus ipsam amet
                suscipit vel porro beatae fuga iusto voluptatibus hic.
                Dignissimos commodi non molestias alias totam architecto
                perferendis quia officia illum, nulla rerum in unde ullam,
                ratione suscipit. Rem beatae deleniti sed iusto ipsam
                consequuntur voluptatem voluptatum illum aliquid distinctio
                totam dolorum voluptas natus quis voluptatibus provident,
                numquam placeat. Ipsam, fugiat sequi earum accusantium quaerat
                dolores possimus eligendi. Perferendis quo incidunt minus ipsam
                dolorum minima doloribus pariatur quia dignissimos veniam
                corrupti commodi deserunt laudantium aut accusantium fugit illo,
                debitis eius tempore necessitatibus autem culpa! Possimus est ut
                deserunt. Quibusdam, tempora perferendis. Aperiam sit tenetur
                ipsa aspernatur vitae doloremque consectetur corporis optio
                excepturi illo blanditiis obcaecati omnis, deleniti veritatis
                sint veniam adipisci natus delectus sed libero a. Nemo,
                officiis? Vero, delectus itaque. Exercitationem itaque, expedita
                sapiente qui unde ex vero non rerum illum laboriosam, voluptatem
                quas excepturi hic iusto? Debitis nam quam quos accusantium
                adipisci obcaecati ipsa non alias. Amet tempore numquam,
                doloremque eaque veniam sequi est aspernatur corrupti voluptate
                accusamus laboriosam magni nesciunt repudiandae quo a vel
                temporibus quisquam sint excepturi sunt iusto! Quia dolore
                voluptatibus eius doloribus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FloorContainer>
  );
};

export default Floor;
