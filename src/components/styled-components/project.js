import styled from "styled-components";

export const ProjectWrap = styled.div`
  margin: 0 auto;
  width: 1100px;
  height: 100%;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const ProjectMain = styled.div`
  h2 {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: bold;
  }
`;

export const ProjectSub = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  h2 {
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: bold;
  }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }

  a {
    overflow: hidden;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 3px rgba(0, 0, 0, 0.05);

    img {
      width: 100%;
    }
  }
`;

export const ProjectContent = styled.div`
  padding: 14px 20px 24px;

  h3 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .content {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.5;
    color: #555;
  }

  .frontend {
    margin-bottom: 8px;
    line-height: 2;
    span {
      padding: 2px 10px 3px;
      margin-right: 10px;
      color: #0047bb;
      background: rgba(0, 71, 187, 0.1);
      border: 1px solid rgba(0, 71, 187, 0.3);
      border-radius: 10px;
    }
  }
  .backend {
    line-height: 2;
    span {
      padding: 2px 12px 3px;
      margin-right: 10px;
      color: #00b64f;
      background: rgba(0, 182, 79, 0.1);
      border: 1px solid rgba(0, 182, 79, 0.3);
      border-radius: 10px;
    }
  }
`;
