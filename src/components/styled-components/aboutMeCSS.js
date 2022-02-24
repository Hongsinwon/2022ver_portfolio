import styled from "styled-components";

export const AboutMeWrap = styled.div`
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  @media (max-width: 1150px) {
    width: 90%;
  }
`;

// 🙌 MY PROFILE
export const AboutMeProfile = styled.div`
  h2 {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: bold;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 24px;
  }

  @media (max-width: 840px) {
    width: 100%;
    .picture {
      margin: 0 auto;
      margin-bottom: 40px;
    }
    .content {
      display: grid;
      grid-template-columns: 100%;
      column-gap: 0;
    }
  }

  @media (max-width: 400px) {
    .picture {
      width: 80%;
    }
  }
`;

// 🙌 MY PROFILE - 소개 text
export const AboutMeIntroduce = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 840px) {
    text-align: center;
    .name {
      span {
        display: block;
      }
    }
  }
  .introTitle {
    padding: 0 16px;
    .name {
      display: block;
      margin-bottom: 24px;
      font-size: 32px;
      font-weight: bold;
      span {
        font-size: 24px;
        color: #555;
      }
    }

    p {
      font-size: 16px;
      line-height: 1.6;
    }
  }

  .introInfo {
    padding: 0 16px;
    margin-top: 24px;
    border-top: 1px solid #aaa;

    .info {
      display: block;
      margin-top: 24px;
      font-size: 16px;
      line-height: 1.6;
    }

    .career {
      display: block;
      margin-top: 24px;
      line-height: 1.6;
      color: #555;
    }
  }
`;

// 📑 SKILLS
export const AboutMeSkille = styled.div`
  h2 {
    margin-top: 60px;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: bold;
  }

  div {
    b {
      position: relative;
      display: flex;
      padding-right: 20px;
      width: 100%;
      font-size: 16px;
      z-index: -1;

      span {
        position: absolute;
        right: 0;
        top: 10px;
        display: block;
        width: 91%;
        border-bottom: 1px solid #aaa;
        z-index: -1;
      }
    }
    .frontend {
      color: #0047bb;
    }
    .backend {
      color: #00b64f;
    }
  }

  @media (max-width: 900px) {
    div {
      b {
        span {
          width: 85%;
        }
      }
    }
  }

  @media (max-width: 520px) {
    div {
      b {
        span {
          width: 80%;
        }
      }
    }
  }
`;

export const SkilleList = styled.ul`
  margin: 32px 0 40px;
  display: flex;
  justify-content: space-between;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin-top: 12px;
      color: #555;
    }
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    li {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    li {
      margin-bottom: 20px;
      img {
        width: 80px;
      }
    }
  }
`;
