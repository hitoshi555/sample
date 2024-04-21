import bcrypt = require('bcryptjs');

async function runBcryptExample() {
    // Example password
    const plainTextPassword = "TestPassWord";

    const saltOrRounds = 10;
    const password = 'random_password';
    console.log("password", password)
    console.log("saltOrRounds", saltOrRounds)
    const hash = await bcrypt.hash(password, saltOrRounds);
    console.log("hash", hash)

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
        console.log("Hashed Password:", hashedPassword);
        const saltOrRounds = 10;
        const password = 'random_password';
        const hash = await bcrypt.hash(password, saltOrRounds);


        // Compare the hashed password with the plain text password
        const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
        console.log("Password Match:", isMatch);
    } catch (error) {
        console.error("Error:", error);
    }
}

runBcryptExample();