import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavTopWrapDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(
    45deg,
    rgba(0, 71, 187, 1),
    rgba(0, 182, 79, 1)
  );
  overflow: hidden;
  .navTopbg {
    width: 100%;
    position: absolute;
    opacity: 0.2;
  }

  @media (max-width: 480px) {
    .navTopbg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const NavTopContent = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  z-index: 1;
  @media (max-width: 1150px) {
    width: 90%;
  }

  @media (max-width: 800px) {
  }
`;

export const NavTopTitle = styled.div`
  height: 100%;
  margin-top: 80px;
  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 7px rgba(0, 0, 0, 0.9), 0 0 3px rgba(0, 0, 0, 0.6);

    span {
      display: block;
      font-size: 28px;
    }
  }

  @media (max-width: 540px) {
    h1 {
      span {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 470px) {
    h1 {
      font-size: 32px;
      span {
        font-size: 20px;
      }
    }
  }
`;

export const NavTopMenu = styled.nav`
  position: absolute;
  bottom: 0%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;

  div {
    display: flex;
  }

  .archivung {
    display: none;

    @media (max-width: 1450px) {
      display: flex;
    }
    a {
      margin-left: 20px;
      width: 50px;
      height: 50px;

      img {
        margin: 0 7.5px;
        padding-bottom: 15px;
        width: 35px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 480px) {
    .archivung {
      position: absolute;
      top: -240px;
      right: 0px;

      a {
        margin-left: 10px;
        img {
          padding: 7.5px;
        }
      }
    }
  }
`;

export const CutomLink = styled(NavLink)`
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 10px 10px 0 0;
  background: #0047bb;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 150px;
  }

  p {
    color: #fff;
  }

  &.active p {
    border-radius: 10px 10px 0 0;
    font-size: 20px;
    background: #fff;
    color: #0047bb;
  }
`;
