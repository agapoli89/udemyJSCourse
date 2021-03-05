const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. get user data');
            resolve({name: 'John'});
        }, 800)
    })
}

const validateData = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. validate');
            resolve(user);
        }, 900)
    })
}

const registerUser = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. register');
            resolve({name: user.name, id: 0537});
        }, 400)
    })
}

const sendEmail = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. send email');
            console.log('Email has been sent to user', user.name, 'id', user.id);
            resolve();
        }, 200)
    })
}

async function someAsyncFunction() {
    const userData = await getUserData();
    const validatedData = await validateData(userData);
    const registeredUser = await registerUser(validatedData);
    await sendEmail(registeredUser);

    console.log('end!');
}

someAsyncFunction()

