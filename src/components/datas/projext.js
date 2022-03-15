export const mainProject = [
  {
    id: 1,
    url: "https://memory-community.herokuapp.com/",
    img: process.env.PUBLIC_URL + `/img/projects/memory.png`,
    title: "Memory Community",
    content: `본 프로젝트는 React를 이용하여 로그인, 글 작성, 수정 및 삭제, 프로필 수정 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. mongo DB를 이용하여 작성한 글이 다른 사용자들과 소통하는 커뮤니티를 구현하였습니다.`,
    Frontend: "React, Styled-Component, Bootstrap",
    Backend: "Node.js, express, MongoDB, Firebase",
  },
  {
    id: 2,
    url: "https://sruptube.herokuapp.com/",
    img: process.env.PUBLIC_URL + `/img/projects/sruptube.png`,
    title: "SrupTube",
    content: `본 프로젝트는 React를 이용하여 인기동영상 목록, 검색동영상 목록, 영상시청 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. 유튜브 API를 이용하여 리스트를 출력하고 시청까지 가능한 플랫폼을 구현하였습니다. `,
    Frontend: "React, Styled-Component, Bootstrap",
    Backend: "Node.js, express",
  },
  {
    id: 3,
    url: "https://hongsinwon-mydiary.web.app/",
    img: process.env.PUBLIC_URL + `/img/projects/mydiary.png`,
    title: "My Diary",
    content: `본 프로젝트는 React를 이용하여  글 작성, 수정 및 삭제 , 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. Local Storage를 이용하여 사용자가 입력한 리스트를 저장, 수정 및 삭제할수있도록 구현하였습니다.`,
    Frontend: "React, CSS3, Localstorage",
    Backend: "-",
  },
  {
    id: 4,
    url: "https://github.com/Hongsinwon/minton-in",
    img: process.env.PUBLIC_URL + `/img/projects/mintonin.png`,
    title: "Mintonin",
    content: `본 프로젝트는 Javascript를 이용하여 랜딩페이지, 서브페이지 등의 페이지로 구성되어 있는 Mobile Renewal Project 입니다. 어플의 UI/UX를 전반적으로 수정하였고, 어플의 편의성을 위해 다양한 기능을 구현하였습니다.`,
    Frontend: "HTML5, CSS3, Java script",
    Backend: "-",
  },
];

export const subProject = [
  {
    id: 5,
    url: "https://hongsinwon.github.io/nwitter/#/",
    img: process.env.PUBLIC_URL + `/img/projects/nwitter.png`,
    title: "트위터 클론 코딩 - Nwitter",
    content: `본 프로젝트는 React를 이용하여 로그인, 글 작성, 수정 및 삭제 등의 페이지로 구성되어 있는 Web Aplication Project 입니다. Firebase를 이용하여 로그인과 데이터 저장을 구현하였습니다.`,
    Frontend: "React, CSS3",
    Backend: "Firebase",
  },
  {
    id: 6,
    url: "https://search-reactapp.herokuapp.com/",
    img: process.env.PUBLIC_URL + `/img/projects/move.png`,
    title: "네이버 API을 활용한 - MOVE",
    content: `본 프로젝트는 React와 네이버 API를 활용한 영화 & 책검색  Web Aplication Project 입니다. heroku로 배포를 하면서 CORS 문제에 대한 문제 해결과 회고를 GitHub에 작성하였습니다.`,
    Frontend: "React, Styled-Component , API, axois ",
    Backend: "Node.js, express",
  },
];
