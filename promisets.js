//promise działa na podobnej zasadzie co callback, ale kod jest zdecydowanie bardziej uporządkowany

const getUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1. get user data');
            resolve();
        }, 800)
    })
}

const validateData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. validate');
            resolve();
        }, 900)
    })
}

const registerUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3. register');
            resolve();
        }, 400)
    })
}

const sendEmail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('4. send email');
            resolve('Email has been sent');
        }, 200)
    })
}

getUserData()
.then(validateData)
.then(registerUser)
.then(sendEmail)
.then((response) => {
    console.log('End!');
    console.log(response);
})
.catch(err => {
    console.log('validation error', err);
})