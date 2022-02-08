# 에이팀벤쳐스 기업과제

## ✔️배포링크

## ✔️팀원 소개

<table align="center">
<tr>
<td align="center"><a href="https://github.com/WongueShin"><img src="https://media.vlpt.us/images/yeonbee/post/a3b02f02-0826-4cc9-b63e-9ddce5fbd857/wongyu.jpg" width="100%" /></a></td>
<td align="center"><a href="https://github.com/zerochae"><img src="https://avatars.githubusercontent.com/u/84373490?v=4" width="90%" /></a></td>
<td align="center"><a href="https://github.com/yunred"><img src="https://avatars.githubusercontent.com/u/84527643?v=4" width="90%" /></a></td>
<td align="center"><a href="https://github.com/jyb1798"><img src="https://avatars.githubusercontent.com/u/64634495?s=400&u=3da5cb5a3ff4338da83a58a23df0608da5092ddc&v=4" width="100%" /></a></td>
</tr>
<tr>
<td align="center"><b>신원규(팀장)</b></td>
<td align="center"><b>권영채</b></td>
<td align="center"><b>김서윤</b></td>
<td align="center"><b>지연비</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>

## ✔️프로젝트 소개

- [x] 에이팀벤쳐스 고객사들의 요청을 카드 포멧으로 정리하여 모은 화면을 구현하였습니다.
- [x] Figma에 작성된 가이드를 따라 대시보드를 그대로 구현하였습니다.
- [x] 모바일 버전과 데스크탑 버전의 뷰를 적응형으로 구현하였습니다.
- [x] 타입스크립트를 사용해 구현하였습니다.
- [x] json-server를 이용하여 mock rest-api server로 구현하였습니다.

## ✔️ 이슈 사항

### Absolute Path

원활한 프로젝트 진행을 위해서는 프로젝트 초기에 절대 경로 설정이 필수적입니다. 절대 경로를 사용하기 위해 `tsconfig.json`을 설정하였지만, 기대했던 결과가 아니였습니다. CRA 로 프로젝트를 생성한 경우 `npm start`를 할 시점에  `tsconfig.json`을 reset하는 현상이 있었습니다.

이는 많은 사용자들이 FaceBook의 React github에도 불만을 표현하고 있습니다.

[불만이 가득한 곳🚀](https://github.com/facebook/create-react-app/issues/8909)

숨겨진 `webPack`을 `eject`하여 설정을 바꾸는 방법도 있었지만, CRA로 만든 장점이 없어지기 때문에 `CRACO`를 사용하였습니다.

`CRACO`는 CRA를 쉽게 설정하기 위해 만들어진 개발 환경 라이브러리로, `eject`하지 않아도 숨겨진 설정들을 쉽게 커스터마이징 할 수 있는 장점이 있었습니다.

우리팀은 root 폴더에 `craco.config.js`를 추가하여 절대 경로를 설정하였습니다.

### And인가 Or인가

재료와 가공방식을 선택할 수 있었고, 필터링 된 결과를 출력해줘야 했습니다. 재료조건과 가공방식은 교집합이라 분명히 명시되어 있었지만, 재료조건이 한개 이상일 경우 `and`인가 `or`인가 에 대하여 갑론을박이 있었습니다. 

우리팀은 사용자의 관점에서 생각해보기로 했습니다. 내가 사용했을 때 어떤 기능이 편할 것인가, 그리고 시중에 서비스되고 있는 여러 사이트를 참고하였습니다. 

![and의 예](https://user-images.githubusercontent.com/84373490/152965249-7497d626-ba2f-4198-9d14-f4aed55060fb.jpg)

문제 언어 선택에서는 `and`의 조건으로 검색이 됩니다. 

![OR의 예](https://user-images.githubusercontent.com/84373490/152969156-705e2799-9ef0-4361-9e77-4427fc1a4352.jpg)

직군 선택에서는 `or`의 조건으로 검색이 됩니다.

우리팀은 본 프로젝트에서 사용자가 해당 재료(재료들)로 사용하는 모든 조건을 검색하는 것이 타당하다고 결정하였습니다. 이 사이트가 만약 실제 사용할 페이지였고, `and`를 의도했다면 가공방식, 재료부분을 제한하는 태그도 동적으로 추가할 수 있게 구현하는 부분이 있어야 된다고 생각했습니다.


### Naming의 중요성 

src/Component/MainContainer/index.tsx에서 export 될 component 이름인 MainContainer가 MainContainer/style.ts 에서 같은 이름의 component가 선언되었습니다.

- No overload matches this call 메세지 : IDE의 자동완성 기능을 사용해 MainContainer/style.ts에서 export 되며, props의 TypeError가 발생했습니다. 팀 내부 코딩 컨밴션문서에 Component의 명명법에 대해서 명확히 규칙을 작성하면서, 향후에 같은 문제가 발생하지 않도록 대처하였습니다. 

### Loading

Card container에서 loading state를 담당하는 부분을 추가로 작성한 이유

- API 통신으로 받은 데이터를 Card container에서 props로 받도록 로직을 구현했습니다.
- API 통신 전까지는 datat가 없기 때문에 이 때 loading이 나타나도록 loading state 코드를 작성하였습니다.

## ✔️프로젝트 회고

- 신원규:
- 권영채: 프로젝트 시작 전 원활한 프로젝트 진행을 위해 활발한 소통을 약속하였고, 예상했던 것보다 더욱 소통하며 무사히 프로젝트를 마칠 수 있었습니다.
- 김서윤: 처음 타입스크립트를 적용한 팀프로젝트였지만, 팀원들 각자 진행상황을 슬랙에 실시간으로 공유하면서 더욱 원활한 소통이 이루어졌고 프로젝트도 잘 마무리할 수 있었습니다. 
- 지연비: 타입스크립트로 처음 협업을 해보았는데, 팀원들과의 실시간 소통과 협업이 잘 이루워져 재미있게 마무리한 프로젝트라고 생각합니다.
