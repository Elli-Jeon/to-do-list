# to-do-list 

1. Commit 약속
2. 넣고 싶은 기능
3. 컴포넌트 구조도   

      
## 1. commit 약속
---
### 1.1 작성 방법
```
[행동] message (메시지는 명령조로 짧게)
```
### 1.2   
|행동|용도|
|:---:|:---:|
|Add|새로운 파일 추가|
|Update|기존의 파일에 새로운 내용 추가|
|Fix|버그 수정 목적|
|Remove|기존 파일 삭제|
|Rename|기존 파일 이름 변경|
|DOC|md 같은 문서 작업|
|INIT|시작|
|Config|환경설정|         

## 2. 넣고 싶은 기능
---

- [x] 할 일 리스트를 상단에 표시
- [x] 할 일 리스트에 신규 추가
- [x] 할 일 작성 시 제목
- [x] 할 일 작성 시 우선순위 / 내지는 기한 설정
- [x] 할 일 리스트에서 삭제
- [x] 할 일 리스트는 위부터 우선순위에 따라 표기
- [x] 다른 탭에서는 1주일 달력을 놓고 해당 일에 할 일 적혀 있기

## 3. 사용한 언어 소개
--- 
|react|styled-components|
|:---:|:---:|
|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width="100px"></img> | <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTZSSy%2FbtqZtyZjFZ1%2FZRYhKoWkW5Wtn1DoeicjRK%2Fimg.png" width="100px">|

react를 통해서 to-do-list를 만들었고, Styled-components는 좀 더 깔끔하게 CSS를 쓰고 싶어서 사용하였다. 

## 4. 폴더 디렉토리 
---
```bash
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  yarn.lock
│  
├─node_modules
│          
├─public
│      index.html
│      
└─src
    │  App.js
    │  index.js
    │  
    ├─components
    │      Header.jsx
    │      MainCalendar.jsx
    │      MainTodo.jsx
    │      Todo.jsx
    │      
    ├─context
    │      actions.js
    │      GlobalState.js
    │      reducers.js
    │      todo-context.js
    │      
    └─styles
            AddArea-style.js
            CalendarArea-style.js
            DisplayArea-style.js
            GlobalStyle.js
            Header-style.js
            Main-style.js
            
```
(cmd에서 tree /F .txt로 저장 가능)

### 4.1 디렉토리 구성

-  #### 4.1.1. components
    다시 사용 가능한 기능 단위로 채우고 싶었는데 components를 pages 처럼 쓴 것 같다.
-  #### 4.1.2. context
    STORE의 기능. 전체 컴포넌트에 현재 todos 데이터와 dispatch를 뿌려준다. 
-  #### 4.1.3. styles
    컴포넌트들의 style을 정의해주어 components 폴더에 제공해준다.
     
### 4.2 dependencies

```json
    "@material-ui/core": "^4.12.1",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "global": "^4.4.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.2.0",
    "react-modern-calendar-datepicker": "^3.1.6",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^4.0.3",
    "sass": "^1.35.1",
    "styled-components": "^5.3.0",
    "styled-normalize": "^8.0.7",
    "styled-reset": "^4.3.4",
    "web-vitals": "^1.0.1"
```

## 5. 현재 기능 소개
---

### 5.1 할 일 등록

![enroll](https://user-images.githubusercontent.com/68575268/125436344-f58051a7-77a9-4f15-b699-62be4e8419ce.png)

- 할일 내용과 우선순위를 적고 Add 버튼을 누르면 상단에 등록

### 5.2 할 일 삭제

- 등록된 이후 상단에서 삭제 버튼을 누르면 화면에서 삭제

### 5.3 우선순위에 맞게 표시

![](![제목 없음](https://user-images.githubusercontent.com/68575268/125625476-b8cfd9a6-8ef7-44f9-a255-75cf98b5605c.png)

- priority 버튼을 클릭하면 현재 시점부터 가장 가까운 날짜 순으로 숫자가 표시
- 

### 5.4 캘린더에 표시

![selectday](https://user-images.githubusercontent.com/68575268/125436353-eec142f0-825c-464d-b594-4294846a8280.png)

- 등록한 날짜에 맞추어서 해당 날짜 클릭 시 그날 할일이 표시
- 이미 지난 날짜일 경우 "Out of Date" 표기


## 6. 배운 점 및 보완할 점
---
|배운 점 | 참조 파일
|:---|:---|
|1. **Context API를 통한 상태의 전역관리** : <code><Context.Provider value={}></code>로 감싸고 그 내부에 <code>{props.children}</code>으로 내부 컴포넌트 관리. 사용하려는 컴포넌트에서  <code>useContext</code>로 직접 받아오기  |Context>GlovalState.js, >todo-context.js|
|2. **useReducer를 사용한 상태 관리** : 컴포넌트 밖에서 상태를 관리하는 방법. <code>reducer (state,action)</code>을 밖에, <code>const[state, dispatch] = useReducer(reducer, initValue)</code>를 컴포넌트 안쪽에. 컴포넌트 안쪽의 <code>dispatch({type:00})</code>이 컴포넌트 밖 reducer의 action을 건들여 state의 변화 유도|Context>action.js, >reducers.js|
|3. **폴더 Structuring과 Styled-Components** : Styled-Components를 활용해서 컴포넌트를 생성해 export시킴으로 컴포넌트를 분리시키고, 폴더를 어떻게 구조화시키는지 배움| Styles, Components
|4. **github wiki와 issues 사용법**||

|보완할 점|보완 방법
|:---|:---|
|1. **큰 그림의 부재** : 큰 그림이 없다보니 어떤 컴포넌트, 어떤 페이지가 필요한지 몰랐기에 중구난방식으로 기능 추가|Figma를 사용해서 어떤 식으로 화면 구성을 할지 정해 필요한 page와 component, 전역 상태를 구상하기|
|2. **폴더 구조화** : components라고 명명한 폴더에 들어간 파일들을 살펴보면 '기능'과 '모습'이 혼재되었음. [pages] 폴더와 [components]폴더를 만들어서 각각 화면(페이지)와 기능을 가진 최소한의 단위 모음 용으로 사용해야 함.|유튜브에 react folder structuring을 검색해서 공부|
|3. **branch관리에 더 신경쓰자** : 개발 총괄에 develop 두고 기능 별로 "feature/featureName"써서 구현 후에 pull request, merge 후 삭제|<a href="https://github.com/LM-channel-team-project/Team-Auto-Matcher" target="_blank">라매개발자 님 협업</a>|
|4. **컴포넌트 재사용성 신경 쓰자** : page는 레고 조립 장소. 레고는 styled.components로 공급받고, 재사용 가능한 것들은 components로, 이 역시 styled.components로 부품을 공급받는다.|
