# TodoList
## React Native First Project
------------------------------------
#### ReactNative를 익히기 위한 간단한 TodoList

##### 주요 컴포넌트

+ App.js 
  + 전반적인 앱 화면을 관리
  + import한 ScrollView, Heading, TodoList, Input, Button, TabBar 컴포넌트를 출력
+ Button.js
  + submit(제출)기능을 위한 컴포넌트
+ Heading.js
  + 앱 내 head 부분 출력을 위한 컴포넌트
+ Input.js
  + TodoList를 작성하기 위한 TextInput 컴포넌트 
+ TabBar.js
  + TodoList내 Item들의 상태 타입을 지정한 컴포넌트
  + All(전체목록), Active(진행목록), Complete(완료목록)
+ TabBarItem.js
  + TabBar의 각 Item 클릭 시 타입을 지정하도록 한 컴포넌트
+ TodoButton.js
  + 앱 내 TodoList에 관련한 버튼 컴포넌트
+ TodoList.js
  + Todos 컴포넌트를 출력해주는 컴포넌트
+ Todos.js
  + TodoButton을 출력해주는 컴포넌트
  + Delete, Done 두 가지의 TodoButton을 출력
  
  ###### after project clone, you have to,,,
   ```
   $ cd project && npm install
   ```
  
  
1. Scripter: Visual Studio Code
2. Language: JavaScript
3. Framework/Library: ReactNative 0.63.2, ReactNative-cli 2.0.1
4. Desktop: Macbook pro 2019 15ch cto
5. OS: macOS Catalina 10.15.6
6. Launch Device: iPhone11(iOS: 13.4) Simulation for Xcode

------------------------------------


  ##### 첫 프로젝트 소감
  프로그래밍 인생 첫 js를 사용한 프로젝트가 RN프로젝트일 줄은 몰랐다.
  RN은 첫 환경설정이 정말 어려웠다. 안드로이드 스튜디오나 xCode였으면 설치 한방으로 끝날 일이지만,
  MacOS에서의 RN은 npm, yarn, node, cocoapod, 등 처음에 설치해야 할 것들이 너무 많고 헷갈렸다. 
  이번 프로젝트에선 예외 사항이었으나 외부 라이브러리를 설치하는 것도 하나하나 터미널을 통해 설치해야 한다는 것이 
  네이티브 개발만 하던 본인에겐 상당히 귀찮은 부분이었다.
  

 --------------------------
 write by simon
 
 2020년 08월 25일
  
  








Functional 방식의 프로그래밍으로 작업
