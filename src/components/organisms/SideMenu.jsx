import React from "react";
import styled from "styled-components";

const SideMenu = () => {
  return (
    <div>
      <AboutSide>
        <h2>ARCHIVING</h2>
        <div>
          <a href="https://github.com/Hongsinwon" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/img/icon/github.svg`}
              alt="깃허브"
            />
            <p>GitHub</p>
          </a>
          <a href="https://tlsdnjs12.tistory.com/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + `/img/icon/tistory.svg`}
              alt="티스토리"
            />
            <p>TISTORY</p>
          </a>
        </div>
      </AboutSide>
    </div>
  );
};

const AboutSide = styled.div`
  position: fixed;
  top: 350px;
  right: 16%;
  width: 100px;
  @media (max-width: 2000px) {
    right: 14%;
  }
  @media (max-width: 1900px) {
    right: 11%;
  }

  @media (max-width: 1800px) {
    right: 9%;
  }

  @media (max-width: 1700px) {
    right: 6%;
  }

  @media (max-width: 1600px) {
    right: 4%;
  }

  @media (max-width: 1500px) {
    right: 1%;
  }
  @media (max-width: 1450px) {
    display: none;
  }

  h2 {
    width: 100%;
    margin-bottom: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #00b64f;
  }

  div {
    height: 200px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 7px #eee, 0 0 3px #aaa;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100px;
      padding: 15px 0;
      box-sizing: border-box;
      img {
        margin-bottom: 10px;
        width: 40px;
      }
      p {
        color: #555;
      }
    }
  }
`;

export default SideMenu;
