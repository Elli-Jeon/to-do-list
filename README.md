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
- [ ] 할 일 작성 시 제목, 할 사람 적기
- [x] 할 일 작성 시 우선순위 / 내지는 기한 설정
- [x] 할 일 리스트에서 삭제
- [ ] 할 일 리스트는 위부터 우선순위에 따라 표기
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

### 5.3 캘린더에 표시

![selectday](https://user-images.githubusercontent.com/68575268/125436353-eec142f0-825c-464d-b594-4294846a8280.png)

- 등록한 날짜에 맞추어서 해당 날짜 클릭 시 그날 할일이 표시
