/**
 * 사용자 등록 폼
 * POST /users
 * name, age, married
 */

document.querySelector('#user-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // 화면 새로고침 금지 (form 요소의 기본 이벤트 처리)
  const name = e.target.username.value;
  const age = e.target.age.value;
  const married = e.target.married.checked;

  const response = await axios.post('/users', {
    name: name,
    age,
    married,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // const data = await response.json();
  // 사용자 목록 조회: 함수 작성
  getUsers();
});

/**
 * 사용자 목록 조회
 * GET /users
 */

// 함수 vs 변수 : 코드를 저장하는 개념  vs  데이터를 저장하는 개념
// 일반함수(=함수 표현식) vs 화살표 함수 vs 익명함수 vs 즉시실행함수
const getUsers = async () => {
  const res = await axios.get('/users');
  const users = res.data;

  const tbody = document.querySelector('#user-list tbody');
  tbody.innerHTML = '';
  users.map((user) => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    // 첫번째 : 연번 td
    td.textContent = user.id;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = user.name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = user.age;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = user.married ? '기혼' : '미혼';
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  // 객체형태로 응답받은 배열 데이터를 반복,순회하면서
  // 각 데이터마다 다른 값(이름,나이,기혼여부)를 UI와 함께 출력(=렌더링)
};
