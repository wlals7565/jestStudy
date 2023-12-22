const fn = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  makeUser: (name, age) => {
    return { name, age };
  },
  throwErr: () => {
    throw new Error("xx");
  },
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(age);
        }, 3000)
    });
  },
  connectUserDb: () => {
    return new Promise(res => {
        setTimeout(() => {
            res({
                name: "Mike",
                age: 30,
                gender: "male",
            });
        }, 500);
    });
  },
  disConnectDb: () => {
    return new Promise(res => {
        setTimeout(() => {
            res();
        }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise(res => {
        setTimeout(() => {
            res({
                brand: "bmw",
                name: "z4",
                color: "red",
            });
        }, 500);
    });
  },
  disConnectCarDb: () => {
    return new Promise(res => {
        setTimeout(() => {
            res();
        }, 500);
    });
  }
};

module.exports = fn;
