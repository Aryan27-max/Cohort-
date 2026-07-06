# JWT (JSON WEB TOKEN)

# One-Line Summary - 

Anyone can decode a JWT and read its contents, but only the server with the 
secret key can generate or verify a valid JWT signature.

# Structure

A JWT consists of 3 parts:

```text
HEADER.PAYLOAD.SIGNATURE
```

Example:

```text
xxxxx.yyyyy.zzzzz
```

# 1. Header

Contains metadata:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

# 2. Payload

Contains user data (claims):

```json
{
  "id": 123,
  "name": "Aryan",
  "role": "user"
}
```

# 3. Signature

Generated using:

```text
HMACSHA256(
  encodedHeader + "." + encodedPayload,
  SECRET_KEY
)
```

The signature proves the token is genuine.

---

# JWT Generation

Encode Header (Base64URL)

Encode Payload (Base64URL)

Create Signature using Secret Key

Combine:

```text
header.payload.signature
```

---

# JWT Decode vs Verify

| Decode | Verify |
|---|---|
| Read payload | Check authenticity |
| No secret needed | Secret needed |
| Anyone can do it | Only server can do it |
| Doesn't prove validity | Proves validity |

---

# Decoding

```javascript
jwt.decode(token);
```

Reads payload data.

Does not check if token is valid.

Anyone can decode a JWT.

Example:

```json
{
  "id": 123,
  "role": "user"
}
```

---

# Verification

```javascript
jwt.verify(token, SECRET_KEY);
```

Recreates signature using server secret.

Compares it with token signature.

Fails if token was modified.

---

# Important Concept

JWT is:

✅ Encoded

❌ Not Encrypted

Anyone can read:

```json
{
  "id": 123,
  "name": "Aryan"
}
```

because Header and Payload are only Base64URL encoded.

---

# Why Can't Attackers Modify JWT?

Suppose attacker changes:

```json
{
  "role": "user"
}
```

to

```json
{
  "role": "admin"
}
```

The payload changes, so the signature must also change.

But generating a valid signature requires:

```text
SECRET_KEY
```

which only the server knows.

Therefore:

```text
Modified Token → Verification Fails
```

---

# JWT Secret

Server Secret:

```text
mySecret123
```

Used to:

Generate signature

Verify signature

Not stored inside JWT.

Not visible to clients.

Only the server that knows the secret can create or verify valid JWTs.