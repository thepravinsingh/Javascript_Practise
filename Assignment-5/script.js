// Question First_
// getOrderInfo
// checkIfAvailable
// placeOder
// returnSuccess

// Question Second_
// getUSerInfo
// checkIfAlreadyPresent
// createAccount
// sendSignUpEmail
// return Success

// Using Callback

// First
const getOrderInfo = (next) => {
  setTimeout(() => {
    const order = "Getting the order";
    console.log(order);
    next(order);
  }, 2000);
};

const checkIfAvailable = (order, next) => {
  setTimeout(() => {
    const available = `${order} Checking the order is available`;
    console.log(available);
    next(available);
  }, 2000);
};

const placeOder = (available, next) => {
  setTimeout(() => {
    const orderPlaced = `${available} Place the order`;
    console.log(orderPlaced);
    next(orderPlaced);
  }, 2000);
};

const returnSuccess = (orderPlaced) => {
  setTimeout(() => {
    const successMessage = `${orderPlaced} Order Placed Successfully`;
    console.log(successMessage);
  }, 2000);
};

const runOrderProcess = () => {
  getOrderInfo((order) => {
    checkIfAvailable(order, (available) => {
      placeOder(available, (orderPlaced) => {
        returnSuccess(orderPlaced);
      });
    });
  });
};

runOrderProcess();

// Second
getUserInfo;
checkIfAlreadyPresent;
createAccount;
sendSignUpEmail;
return Success;

const getUserInfo = (callback) => {
  setTimeout(() => {
    const userInfo = "User info is here";
    console.log(userInfo);
    callback(userInfo);
  }, 2000);
};

const checkIfAlreadyPresent = (userInfo, callback) => {
  setTimeout(() => {
    const userPresent = `${userInfo} User is present`;
    console.log(userPresent);
    callback(userPresent);
  }, 2000);
};

const createAccount = (userPresent, callback) => {
  setTimeout(() => {
    const accountCreate = ` ${userPresent}User account is created`;
    console.log(accountCreate);
    callback(accountCreate);
  }, 2000);
};

const sendSignUpEmail = (accountCreate, callback) => {
  setTimeout(() => {
    const emailSend = `${accountCreate}User email is sent`;
    console.log(emailSend);
    callback(emailSend);
  }, 2000);
};

const returnSuccess = (emailSend, callback) => {
  setTimeout(() => {
    const returnStatus = `${emailSend} success`;
    console.log(returnStatus);
  }, 2000);
};

const runUserProcess = () => {
  getUserInfo((userInfo) => {
    checkIfAlreadyPresent(userInfo, (userPresent) => {
      createAccount(userPresent, (accountCreate) => {
        sendSignUpEmail(accountCreate, (emailSend) => {
          returnSuccess(emailSend);
        });
      });
    });
  });
};

runUserProcess();

getOrderInfo;
checkIfAvailable;
placeOder;
returnSuccess;

// Using Promises

// First
const getOrderInfo = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const orderInfo = "My order is preparing";
      console.log(orderInfo);
      res(orderInfo);
    }, 1000);
  });
};

const checkIfAvailable = (orderInfo) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const checkAvailability = ` ${orderInfo} Checking the avaibility`;
      console.log(checkAvailability);
      res(checkAvailability);
    }, 1000);
  });
};

const placeOrder = (checkAvailability) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const orderPlaced = `${checkAvailability} Order is Placed`;
      console.log(orderPlaced);
      res(orderPlaced);
    }, 1000);
  });
};

const returnSuccess = (orderPlaced) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const successReturn = `${orderPlaced} Successfully Done...`;
      console.log(successReturn);
      res(successReturn);
    }, 1000);
  });
};

const printingFunction = () => {
  getOrderInfo().then(checkIfAvailable).then(placeOrder).then(returnSuccess);
};

printingFunction();

getUSerInfo;
checkIfAlreadyPresent;
createAccount;
sendSignUpEmail;
return Success;

// Second
function getUserInfo() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const userInfo = "User info is here";
      console.log(userInfo);
      res(userInfo);
    }, 1000);
  });
}

function checkIfAlreadyPresent(userInfo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const checkUsers = `${userInfo} checking already present users`;
      console.log(checkUsers);
      res(checkUsers);
    }, 1000);
  });
}
function createAccount(checkUsers) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const accountCreate = `${checkUsers} new Account create`;
      console.log(accountCreate);
      res(checkUsers);
    }, 1000);
  });
}
function sendSignUpEmail(accountCreate) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const signUpEmail = `${accountCreate} sign up for the email`;
      console.log(signUpEmail);
      res(signUpEmail);
    }, 1000);
  });
}

function returnSuccess(signUpEmail) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const statusReturn = `${signUpEmail} return the success`;
      console.log(statusReturn);
      res(statusReturn);
    }, 1000);
  });
}

function returningFunction() {
  getUserInfo()
    .then(checkIfAlreadyPresent)
    .then(createAccount)
    .then(sendSignUpEmail)
    .then(returnSuccess);
}
returningFunction();

getOrderInfo;
checkIfAvailable;
placeOder;
returnSuccess;

// Using Async Await

// First
async function getOrderInfo() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const orderInfo = "My order is preparing";
      console.log(orderInfo);
      res(orderInfo);
    }, 1000);
  });
}

async function checkIfAvailable(orderInfo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const checkAvailability = ` ${orderInfo} Checking the avaibility`;
      console.log(checkAvailability);
      res(checkAvailability);
    }, 1000);
  });
}

async function placeOrder(checkAvailability) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const orderPlaced = `${checkAvailability} Order is Placed`;
      console.log(orderPlaced);
      res(orderPlaced);
    }, 1000);
  });
}

async function returnSuccess(orderPlaced) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const successReturn = `${orderPlaced} Successfully Done...`;
      console.log(successReturn);
      res(successReturn);
    }, 1000);
  });
}

async function printingFunction() {
  const oI = await getOrderInfo();
  const CIA = await checkIfAvailable(oI);
  const PO = await placeOrder(CIA);
  const RS = await returnSuccess(PO);
  console.log(`${RS} Successfully getting data`);
}

printingFunction();

getUSerInfo;
checkIfAlreadyPresent;
createAccount;
sendSignUpEmail;
return Success;

// Second
async function getUserInfo() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const userInfo = "User info is here";
      console.log(userInfo);
      res(userInfo);
    }, 1000);
  });
}

async function checkIfAlreadyPresent(userInfo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const checkUsers = `${userInfo} checking already present users`;
      console.log(checkUsers);
      res(checkUsers);
    }, 1000);
  });
}
async function createAccount(checkUsers) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const accountCreate = `${checkUsers} new Account create`;
      console.log(accountCreate);
      res(checkUsers);
    }, 1000);
  });
}
async function sendSignUpEmail(accountCreate) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const signUpEmail = `${accountCreate} sign up for the email`;
      console.log(signUpEmail);
      res(signUpEmail);
    }, 1000);
  });
}

async function returnSuccess(signUpEmail) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const statusReturn = `${signUpEmail} return the success`;
      console.log(statusReturn);
      res(statusReturn);
    }, 1000);
  });
}

async function printingFunction() {
  const GUI = await getUserInfo();
  const CIAP = await checkIfAlreadyPresent(GUI);
  const CA = await createAccount(CIAP);
  const SSUE = await sendSignUpEmail(CA);
  const RS = await returnSuccess(SSUE);
  console.log(`${RS} returning Success`);
}

printingFunction();
