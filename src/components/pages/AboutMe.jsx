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
          <h2>π MY PROFILE </h2>
          <div className="content">
            <img
              src={process.env.PUBLIC_URL + `/img/about_me/picture.jpg`}
              alt="νμ μ μ¦λͺμ¬μ§"
              className="picture"
            />
            <AboutMeIntroduce>
              <div className="introTitle">
                <b className="name">
                  νμ μ <span>HONG SIN WON</span>
                </b>
                <p className="birthDate">1993λ 9μ 15μΌ</p>
                <p className="email">ghdtlsdnjs12@naver.com</p>
              </div>
              <div className="introInfo">
                <p className="info">
                  2019λ μΉμ μ²μ μ νμ¬ λ λ§μ λ°μ μ νκΈ° μν΄ μ§κΈκΉμ§
                  μ΄μ¬ν λ¬λ €μμ΅λλ€. λ€μ λΆμ‘±νμ§λ§ λΆμ‘±ν μ§μμ νλ£¨νλ£¨
                  λΈλ ₯μΌλ‘ μ±μ°κ³  μμ΅λλ€.<br></br> <br></br> λΉ λ₯΄κ² λ³νλ
                  μΉκ°λ° νΈλλ μμμ,λ€μν μλμ ν¨κ» μ¬μ©μ μμ₯μ κ³ λ €νλ©°
                  μ±μ€νκ² μ±μ₯νλ νλ‘ νΈμλ κ°λ°μκ° λκ² μ΅λλ€.
                </p>

                <ul className="career">
                  <li>2015. 4. 13 ~ 2017. 4. 30 νκΈ°ν λμμ΄λ</li>
                  <li>2017. 7. 13 ~ 2019. 5. 31 μμΌμ¨μνΌ λμμ΄λ</li>
                  <li>2020. 3. 12 ~ 2021. 9. 08 νν¬μ€ μμ΄ μ½λ¦¬μ νΌλΈλ¦¬μ</li>
                </ul>
              </div>
            </AboutMeIntroduce>
          </div>
        </AboutMeProfile>
        <AboutMeSkille>
          <h2>π SKILLS</h2>

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
