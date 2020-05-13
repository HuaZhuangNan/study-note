const needle = require('needle');

const { baseURL } = require('../src/config');

const url = `http://127.0.0.1:3000${baseURL}`;

const options = {
  headers: {
    Host: '127.0.0.1:3000',
    Connection: 'keep-alive',
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    DNT: '1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36 Edg/81.0.416.64',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/pang,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
  },
};

// 获取验证码
function getImg() {
  // 测试注册
  return needle('get', `${url}/code-img?t={new Date().getTime()}`, options)
    .then((res) => {
      console.log('code: ', res.statusCode);
      console.log('cookies: ', res.cookies);
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
      console.log('测试codeimg结束');
    });
}
getImg().then(() => {
  needle('post', `${url}/register`, {
    name: 'admin', email: 'admin@test.com', pass: 'admin', code: 'test',
  }, { ...options, json: true })
    .then((res) => {
      console.log('cookies: ', res.cookies);
      console.log('body: ', res.body);
    })
    .catch((err) => {
      console.log('err', err);
    })
    .finally(() => {
      console.log('测试注册结束');
    });
})
  .then(async () => {
    await getImg();
    needle('post', `${url}/login`, {
      name: 'admin', pass: 'admin', code: 'test',
    }, { ...options, json: true })
      .then((res) => {
        console.log('cookies: ', res.cookies);
        console.log('body: ', res.body);
      })
      .catch((err) => {
        console.log('err', err);
      })
      .finally(() => {
        console.log('测试用户名登录结束');
      });
  })
  .then(async () => {
    await getImg();
    needle('post', `${url}/login`, {
      email: 'admin@test.com', pass: 'admin', code: 'test',
    }, { ...options, json: true })
      .then((res) => {
        console.log('cookies: ', res.cookies);
        console.log('body: ', res.body);
      })
      .catch((err) => {
        console.log('err', err);
      })
      .finally(() => {
        console.log('测试邮箱登录结束');
      });
  });
