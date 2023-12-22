const fn = require("./fn");
/*
test("1dms 1dldi.", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toEqual(5);
});

test("3 더하기 3은 5야.", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toBe({
    name: "Mike",
    age: 31,
  });
});

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 31,
  });
});

// toBeNull
// toBeUndefined
// toBeDefined
test("null 은 null이다", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("비어있지 않은 문자열은 True", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual

test("ID는 10자 이하여야 합니다.", () => {
  const id = "ItisId";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

test("0.1 더하기 0.2는 0.3 입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("hello world에 a라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/H/);
});

//toContain
test("유저 리스트에 Mike가 있냐?", () => {
  const user = "Tom";
  const userList = ["Tom", "Jane", "Kai"];
  expect(userList).toContain(user);
});

test("에러 테스트", () => {
  expect(() => {
    fn.throwErr();
  }).toThrow("xx");
});

//비동기 테스트
test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});

// api테스트 시에는 try{} catch{}안에 넣으면 된다.

test("3초 후에 받아온 나이는 30", () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

test("3초 후에 받아온 나이는 30", () => {
  return expect(fn.getAge()).resolves.toBe(30);
});


test("3초 후에 받아온 나이는", async () => {
    const age = await fn.getAge();
    expect(age).toBe(30);
})

// beforEach비교
// afterEach비교
let num = 10;

beforeEach(() => {
    num = 0;
});

test("0 더하기 1은 1이야", () => {
    num = fn.add(num,1);
    expect(num).toBe(1)
});

test("0 더하기 2은 2이야", () => {
    num = fn.add(num,2);
    expect(num).toBe(2)
});

test("0 더하기 3은 3이야", () => {
    num = fn.add(num,3);
    expect(num).toBe(3)
});

test("0 더하기 4은 4이야", () => {
    num = fn.add(num,4);
    expect(num).toBe(4)
});
*/

//beforeAll
//afterAll

let user;

beforeAll(async() => {
    user = await fn.connectUserDb();
})
afterAll(async () => {
    return await fn.disConnectDb();
})

test("이름은 Mike", () => {
    expect(user.name).toBe("Mike");
});

test("이름은 Mike", () => {
    expect(user.age).toBe(30);
});

test("이름은 Mike", () => {
    expect(user.gender).toBe("male");
});


// describe
describe("Car 관련 작업", () => {
    let car;

    beforeAll(async() => {
        car = await fn.connectCarDb();
    })
    afterAll(async () => {
        return await fn.disConnectCarDb();
    })
    
    test("이름은 Mike", () => {
        expect(car.name).toBe("z4");
    });
    
    test("이름은 Mike", () => {
        expect(car.brand).toBe("bmw");
    });
    
    test("이름은 Mike", () => {
        expect(car.color).toBe("red");
    });
});