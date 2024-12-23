import User from '../models/User.js';
const getHome = async (req, res) => {
  try {
    //  현재 등록된 user 데이터를 수신
    const users = await User.findAll({
      order: [['id', 'DESC']],
    });
    console.log(users);
    res.render('index.html', {
      title: '웹개발 실습',
      subtitle: '사용자 등록 폼',
      users,
    });
  } catch (err) {
    console.log(err);
  }
};

export default { getHome };
