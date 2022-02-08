# 2ndweek-ateamventures-task

## 에이팀벤쳐스 기업과제

### ✔️배포링크

### ✔️팀원 소개

<table align="center">
<tr>
<td align="center"><a href="https://github.com/WongueShin"><img src="./public/images/wongyu.jpg" width="100%" /></a></td>
<td align="center"><a href="https://github.com/zerochae"><img src="https://avatars.githubusercontent.com/u/84373490?v=4" width="100%" /></a></td>
<td align="center"><a href="https://github.com/yunred"><img src="https://avatars.githubusercontent.com/u/84527643?v=4" width="100%" /></a></td>
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

- 에이팀벤쳐스 고객사들의 요청을 카드 포멧으로 정리하여 모은 화면을 구현하였습니다.
- Figma에 작성된 가이드를 따라 대시보드를 그대로 구현하였습니다.
- 모바일 버전과 데스크탑 버전의 뷰를 적응형으로 구현하였습니다.
- 타입스크립트으로 구현하였습니다.
- json-server를 이용하여 mock rest-api server로 구현하였습니다.

### ✔️ 이슈 사항

- tsx에서 export 될 component 이름과 styled components가 이름이 같아서 발생한 이슈

  - No overload matches this call 메세지 : import하는 컴포넌트에서 export될 컴포넌트를 정확하게 인식하지 못하면서 전달할 인자의 타입 형식도 읽지 못하는 이슈가 있었습니다.
  - 자동으로 styled components로 import 해오는 오류가 발생했습니다.

- Card container에서 loading state를 담당하는 부분을 추가로 작성한 이유
  - API 통신으로 받은 데이터를 Card container에서 props로 받도록 로직을 구현했습니다.
  - API 통신 전까지는 datat가 없기 때문에 이 때 loading이 돌아가도록 loading state 코드를 작성하였습니다.

### ✔️프로젝트 회고

- 신원규:
- 권영채:
- 김서윤:
- 지연비: 팀원들과의 실시간 소통과 협업이 잘 이루졌던 프로젝트라고 생각합니다.
