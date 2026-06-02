const jwt = require("jsonwebtoken");
const { z } = require("zod");

const JWT_SECRET = "mysecret";

// Generate JWT
function generateToken(username, password) {
    const schema = z.object({
        username: z.string().email(),
        password: z.string().min(6)
    });

    const result = schema.safeParse({ username, password });

    if (!result.success) {
        return null;
    }

    return jwt.sign({ username }, JWT_SECRET);
}

// Check if JWT can be decoded (NOT verified)
function canDecode(token) {
    try {
        return jwt.decode(token) !== null;
    } catch {
        return false;
    }
}

// Check if JWT can be verified
function canVerify(token) {
    try {
        jwt.verify(token, JWT_SECRET);
        return true;
    } catch {
        return false;
    }
}

// ==================== TEST ====================

const username = "aryan@gmail.com";
const password = "password123";

const token = generateToken(username, password);

console.log("Token:", token);
console.log("Can Decode:", canDecode(token));
console.log("Can Verify:", canVerify(token));

if (token) {
    console.log("Decoded Payload:", jwt.decode(token));
}

// ==================== EXPORTS ====================

module.exports = {
    generateToken,
    canDecode,
    canVerify
};