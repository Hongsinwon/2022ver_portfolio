import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { linkList } from "../datas/navtop"; // datas -> nav 메뉴리스트
import styled from "styled-components";

const ScrollNav = () => {
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    if (ScrollY > 299) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <ScrollNavDiv ScrollActive={ScrollActive}>
      <div>
        <ScrollNavMenu>
          <div>
            {linkList.map(({ link, name }) => (
              <ScrollNavLink to={link} key={link}>
                <p>{name}</p>
              </ScrollNavLink>
            ))}
          </div>
          <div className="archivung">
            <a href="https://github.com/Hongsinwon" target="_blank">
              <img
                src={process.env.PUBLIC_URL + `/img/icon/github.svg`}
                alt="깃허브"
              />
              <span className="ir_pm">깃허브</span>
            </a>
            <a href="https://tlsdnjs12.tistory.com/" target="_blank">
              <img
                src={process.env.PUBLIC_URL + `/img/icon/tistory.svg`}
                alt="티스토리"
              />
              <span className="ir_pm">티스토리</span>
            </a>
          </div>
        </ScrollNavMenu>
      </div>
    </ScrollNavDiv>
  );
};

const ScrollNavDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  border: 1px solid #eee;
  background: #fff;
  z-index: 99;
  opacity: ${({ ScrollActive }) => (ScrollActive ? 1 : 0)};

  div {
    margin: 0 auto;
    width: 1100px;
    height: 100%;
  }
  @media (max-width: 1150px) {
    div {
      width: 90%;
    }
  }

  @media (max-width: 1000px) {
    div {
      width: 100%;
    }
  }
`;

export const ScrollNavMenu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    position: relative;
  }
  .archivung {
    display: flex;
    justify-content: end;
    a {
      margin-right: 20px;
      width: 50px;
      height: 50px;
      img {
        margin: 0 7.5px;
        padding: 7.5px;
        width: 30px;
        opacity: 1;
      }
    }
  }

  @media (max-width: 480px) {
    .archivung {
      a {
        margin-right: 10px;
        img {
          width: 28px;
          padding: 11px;
        }
      }
    }
  }
`;

export const ScrollNavLink = styled(NavLink)`
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #0047bb;
  background: #fff;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  &.active p {
    height: 100%;
    background: #0047bb;
    color: #fff;
  }

  @media (max-width: 630px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
    width: 100px;
  }
`;
export default ScrollNav;
