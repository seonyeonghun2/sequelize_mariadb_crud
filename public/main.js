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

  const response = await fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      age,
      married,
    }),
  });
  const data = await response.json();
  console.log(data);
});
