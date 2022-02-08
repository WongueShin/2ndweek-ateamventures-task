# 2ndweek-ateamventures-task

## 에이팀벤쳐스 기업과제

### ✔️배포링크

### ✔️팀원 소개

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

### ✔️프로젝트 소개

- [x] 에이팀벤쳐스 고객사들의 요청을 카드 포멧으로 정리하여 모은 화면을 구현하였습니다.
- [x] Figma에 작성된 가이드를 따라 대시보드를 그대로 구현하였습니다.
- [x] 모바일 버전과 데스크탑 버전의 뷰를 적응형으로 구현하였습니다.
- [x] 타입스크립트으로 구현하였습니다.
- [x] json-server를 이용하여 mock rest-api server로 구현하였습니다.

### ✔️ 이슈 사항

- src/Component/MainContainer/index.tsx에서 export 될 component 이름인 MainContainer가 MainContainer/style.ts 에서 같은 이름의 component가 선언되었습니다.

  - No overload matches this call 메세지 : IDE의 자동완성 기능을 사용해 MainContainer/style.ts에서 export 되며, props의 TypeError가 발생했습니다.
  <br/>팀 내부 코딩 컨밴션문서에 Component의 명명법에 대해서 명확히 규칙을 작성하면서, 향후에 같은 문제가 발생하지 않도록 대처하였습니다. 

- Card container에서 loading state를 담당하는 부분을 추가로 작성한 이유
  - API 통신으로 받은 데이터를 Card container에서 props로 받도록 로직을 구현했습니다.
  - API 통신 전까지는 datat가 없기 때문에 이 때 loading이 돌아가도록 loading state 코드를 작성하였습니다.

### ✔️프로젝트 회고

- 신원규:
- 권영채:
- 김서윤: 처음 타입스크립트를 적용한 팀프로젝트였지만, 팀원들 각자 진행상황을 슬랙에 실시간으로 공유하면서 더욱 원활한 소통이 이루어졌고 프로젝트도 잘 마무리할 수 있었습니다. 
- 지연비: 타입스크립트로 처음 협업을 해보았는데, 팀원들과의 실시간 소통과 협업이 잘 이루워져 재미있게 마무리한 프로젝트라고 생각합니다.
