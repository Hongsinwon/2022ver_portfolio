import React from "react";
import { ScrollNav } from ".";
import { linkList } from "../datas/navtop"; // datas -> nav 메뉴리스트
import {
  NavTopWrapDiv,
  NavTopContent,
  NavTopTitle,
  NavTopMenu,
  CutomLink,
} from "../styled-components/navTopCss"; // style-components -> CSS

const NavTop = () => {
  return (
    <div>
      <ScrollNav />
      <NavTopWrapDiv>
        <img
          src={process.env.PUBLIC_URL + `/img/navtop_bg.jpg`}
          alt="배경화면"
          className="navTopbg"
        />
        <NavTopContent>
          <NavTopTitle>
            <h1>
              Front-end developer
              <span>안녕하세요. 신입 개발자 홍신원 입니다.</span>
            </h1>
          </NavTopTitle>
          <NavTopMenu>
            <div>
              {linkList.map(({ link, name }) => (
                <CutomLink to={link} key={link}>
                  <p>{name}</p>
                </CutomLink>
              ))}
            </div>
            <div className="archivung">
              <a href="https://github.com/Hongsinwon" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + `/img/icon/github_w.png`}
                  alt="깃허브"
                />
                <span className="ir_pm">깃허브</span>
              </a>
              <a href="https://tlsdnjs12.tistory.com/" target="_blank">
                <img
                  src={process.env.PUBLIC_URL + `/img/icon/tistory_w.png`}
                  alt="티스토리"
                />
                <span className="ir_pm">티스토리</span>
              </a>
            </div>
          </NavTopMenu>
        </NavTopContent>
      </NavTopWrapDiv>
    </div>
  );
};

export default NavTop;
