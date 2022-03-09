import React from "react";
import { NavTop, TopScrollBtn } from "../organisms";
import { frontendIamge, backendIamge } from "../datas/aboutMe";
import {
  AboutMeWrap,
  AboutMeProfile,
  AboutMeIntroduce,
  AboutMeSkille,
  SkilleList,
} from "../styled-components/aboutMeCSS";

const AboutMe = () => {
  return (
    <>
      <NavTop />
      <AboutMeWrap>
        <AboutMeProfile>
          <h2>👏 MY PROFILE </h2>
          <div className="content">
            <img
              src={process.env.PUBLIC_URL + `/img/about_me/picture.jpg`}
              alt="홍신원 증명사진"
              className="picture"
            />
            <AboutMeIntroduce>
              <div className="introTitle">
                <b className="name">
                  홍신원 <span>HONG SIN WON</span>
                </b>
                <p className="birthDate">1993년 9월 15일</p>
                <p className="email">ghdtlsdnjs12@naver.com</p>
              </div>
              <div className="introInfo">
                <p className="info">
                  2019년 웹을 처음 접하여 더 많은 발전을 하기 위해 지금까지
                  열심히 달려왔습니다. 다소 부족하지만 부족한 지식은 하루하루
                  노력으로 채우고 있습니다.<br></br> <br></br> 빠르게 변하는
                  웹개발 트랜드 속에서,다양한 시도와 함께 사용자 입장을 고려하며
                  성실하게 성장하는 프론트엔드 개발자가 되겠습니다.
                </p>

                <ul className="career">
                  <li>2015. 4. 13 ~ 2017. 4. 30 현기획 디자이너</li>
                  <li>2017. 7. 13 ~ 2019. 5. 31 원일씨엔피 디자이너</li>
                  <li>2020. 3. 12 ~ 2021. 9. 08 테크앤 아이 코리아 퍼블리셔</li>
                </ul>
              </div>
            </AboutMeIntroduce>
          </div>
        </AboutMeProfile>
        <AboutMeSkille>
          <h2>📑 SKILLS</h2>

          <div>
            <b className="frontend">
              Frontend <span></span>
            </b>
            <SkilleList>
              {frontendIamge.map(({ id, img, descript }) => (
                <li key={id}>
                  <img src={img} alt={descript} />
                  <p>{descript}</p>
                </li>
              ))}
            </SkilleList>
          </div>

          <div>
            <b className="backend">
              Backend <span></span>
            </b>
            <SkilleList>
              {backendIamge.map(({ id, img, descript }) => (
                <li key={id}>
                  <img src={img} alt={descript} />
                  <p>{descript}</p>
                </li>
              ))}
            </SkilleList>
          </div>
        </AboutMeSkille>
        <TopScrollBtn />
      </AboutMeWrap>
    </>
  );
};

export default AboutMe;
