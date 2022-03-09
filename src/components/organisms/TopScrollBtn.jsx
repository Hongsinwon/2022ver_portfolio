import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TopScrollBtn = () => {
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

  const topScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <TopBtn onClick={topScroll} ScrollActive={ScrollActive}>
      ▲
    </TopBtn>
  );
};

const TopBtn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 60px;
  padding: 10px 15px 15px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  color: #0047bb;
  font-size: 20px;
  opacity: ${({ ScrollActive }) => (ScrollActive ? 0.8 : 0)};
  @media (max-width: 600px) {
    right: 40px;
  }
`;

export default TopScrollBtn;
