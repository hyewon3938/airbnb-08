# <h1 align="center">숙소 예약 서비스</h1>
<p align="center"><strong>날짜와 인원, 요금을 지정하여 숙소를 검색하고, 예약할 수 있는 서비스입니다.</strong></p>
<br>
<p align="center"><img src="https://user-images.githubusercontent.com/58355499/99151477-d0a4f980-26de-11eb-8b3a-9ee9539a36e0.gif" width="90%"/></p>
<br>
<br>

## 🏡프로젝트 진행 
- 개발 기간 : 2020.05~2020.06 (3주) <br>
- 개발 인원 : FE(2) BE(1) <br>
- 담당 : 프론트엔드 개발 

<br>

## 🏡협업방식 
- 팀원이 함께 커밋 컨벤션, 브랜치, 이슈, PR 형식과 스크럼과 회고 시간 등 그라운드 룰을 정한다
- 일주일마다 한주의 게획을 짜고 그에 맞춰 개발 → [스프레드시트 링크](https://docs.google.com/spreadsheets/d/1HEQ4SfGuWop1xVdlVWgoPRmF0UA2lLrkM6px26G51yg/edit#gid=0)
- **페어프로그래밍**으로 함께 개발, 한 대의 컴퓨터로 한명이 코드를 말해주면 나머지 한명이 코드를 작성하는 방식으로 30분씩 번갈아 가며 진행
- 온라인으로 진행할 경우 **행아웃** 화상채팅과 VSCode의 **Live Share**를 이용하여 페어프로그래밍
<br>


## 🏡서비스 기능
- **github 아이디로 로그인**하여 서비스를 이용할 수 있습니다.
- 날짜, 인원, 요금 범위를 지정하여 **원하는 조건의 숙소를 검색**할 수 있습니다. 
- **숙소를 예약**할 수 있습니다. 
<br>

## 🏡설계
> [Issues 링크](https://github.com/codesquad-member-2020/airbnb-08/issues) 
- 컴포넌트 설계 
<img src="https://camo.githubusercontent.com/1d0bea511c62ada08d203b5ac94b2871f2df093a8f5176cf69c1a1e0711d313e/68747470733a2f2f706f737466696c65732e707374617469632e6e65742f4d6a41794d4441314d6a42664d546b302f4d4441784e5467354f5459774d6a41334e5449322e6b334365367034514259477a546f78366a645f6b75464e7559673555396d7a79314b46744d3236377a6267672e6933334749674b32316b6f777555776f3776415f784f43664a517446714b436772476b5670364230556277672e504e472e6568616b332f2545432539372539302545432539362542342545422542392538342545432539352541342545422542392538345f2545432542422542342545442538462541432545422538342538432545442538412542385f2545432538342541342545412542332538342e706e673f747970653d77353830"/>

<br>

## 🏡사용 기술 및 기능 구현
→ ``` React, Redux, axios, styled-component, material-ui, datepicker-react, dotenv, Webpack ```
- Webpack의 alias를 사용하여 import문을 간결하게 작성  
- 커스텀 훅을 사용하여 서버로부터 데이터 패치 
- styled-component의 글로벌 스타일에 테마를 적용해 스타일 관리
- **Intersection Observer**를 이용해 2000개가 넘는 숙소정보를 부분적으로 로딩하는 **Lazy Loading**을 구현하여 로딩 속도 개선 
- **Loading Indicator** 와 **Skeleton Loading**으로 사용자경험 증진 
- 데이터로 그래프를 그리고, material-ui의 Slider를 이용해 선택된 범위 내의 그래프 색상을 변경하는 **UI 제작**

<br>
<br>

👁**Skeleton Loading & Loading Indicator**
<p><img src="https://user-images.githubusercontent.com/58355499/99177870-e2bf8000-2750-11eb-9d20-3706255601cd.gif" width="620px"/></p>

👁**Lazy Loading** 
<p><img src="https://user-images.githubusercontent.com/58355499/99176672-a559f300-274e-11eb-8df8-be932a76c59f.gif"/></p>

👁**슬라이더와 그래프 UI**  
<p><img src="https://user-images.githubusercontent.com/58355499/99176721-a8ed7a00-274e-11eb-8791-d479f021b2f0.gif"/></p>

<br>
<br>

## 🏡코드리뷰
- [중간 코드리뷰](https://github.com/codesquad-member-2020/airbnb-08/pull/33)
- [최종 코드리뷰](https://github.com/codesquad-member-2020/airbnb-08/pull/58)
<br>

## 🏡회고
> [팀회고 링크](https://docs.google.com/spreadsheets/d/1pPzjiK1mDJoh2lOTJx0Q1pHo1uab_lW9RMDOa_KFGew/edit#gid=843607213)
- 서비스의 상태관리는 redux를 이용해서 하는데, 사용한 달력 라이브러리 ```datepicker-react```가 context API를 사용하고 있었다. 스타일 커스텀은 성공했지만, 상태관리를 redux로 바꾸지는 못 했다. 결국 redux와 context API를 함께 사용하게 되었는데 한 가지만 사용할 수 있는 방법을 생각해봐야겠다. 
<br>

- useEffect를 사용해 비동기 통신을 해야할 때 useFetch 커스텀 hook이 불려지지 않았다. useEffect내에서 또 다시 useEffect를 사용하는 커스텀 훅을 불러서 생기는 문제 같다. 커스텀 hook에서 바로 데이터를 return 받지 않고, store에 response 값을 저장한 뒤, useSelector로 가져오는 방식을 사용하면 useEffect를 사용할 수 있을 것 같다. 비동기 통신 방식을 더 고민해봐야겠다.   
<br> 

- 이번 프로젝트는 이전에 했던 다른 프로젝트에 비해 시간을 잘 맞춘 것 같다. 하지만 이번에도 역시나 마지막으로 갈수록 급하게 코드를 작성했는데 시간 관리에 조금 더 신경써야할 것 같다. 
<br>

- 같은 컴퓨터로 함께 코딩하는 페어프로그래밍 분명 혼자 개발할 때보다 시간이 더 오래 걸린다. 의견을 조율하고 함께 의논하는 시간이 많기 때문이다. 그래서 이번 프로젝트 3주동안은 평소 개발을 할 때보다 더 체력을 많이 쓴 느낌이었다. 대신 그만큼 얻는 것도 많았다. **페어 프로그래밍을 하면서 장점**이라고 생각했던 부분은 다음과 같다.


  1. 문제가 생겼을 때 해결은 페어프로그래밍을 할 때 좀 더 빨리 해결되었던 것 같다. 백지장도 맞들면 낫다 라는 말처럼 머리가 두 개라 그런지 함께 구글링하고 방법을 생각하다보니 비교적 해결이 빨랐다.
  2. 서로가 알고 있는 지식을 공유할 수 있다. 몰랐던 라이브러리나 tool 등 좋은 정보도 공유할 수 있다. 
  3. 서로의 장점을 보고 닮아갈 수 있다.(ex.꼼꼼한 공부와 디버깅 방식) 
  4. 책임감이 생긴다. 정해진 시간까지 페어와 약속한 일을 해야하기 때문에 프로젝트를 더 열심히 했었다. 
  5. 개발할 때 같은 문제로 힘들기 때문에 고통을 함께 나눌 수 있다 ^^
<br>

