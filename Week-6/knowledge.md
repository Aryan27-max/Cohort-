# req.body and req.query are two different places where data can come from in an HTTP request.

# req.body

Data sent inside the request body.

Example:

```text
POST /signin
```

Body:

```json
{
    "username": "aryan",
    "password": "123456"
}
```

Code:

```javascript
const username = req.body.username;
const password = req.body.password;
```

So:

req.body

contains:

```javascript
{
    username: "aryan",
    password: "123456"
}
```

---

# req.query

Data sent in the URL after the ?.

Example:

POST or GET

```text
http://localhost:3000/signin?username=aryan&password=123456
```

Code:

```javascript
const username = req.query.username;
const password = req.query.password;
```

So:

req.query

contains:

```javascript
{
    username: "aryan",
    password: "123456"
}
```

---

# Visual Comparison

Using req.body:

```text
POST /signin
{
    "username": "aryan",
    "password": "123456"
}
```

Using req.query:

```text
POST /signin?username=aryan&password=123456
```

---

# In Postman

If you're typing:

```json
{
    "username": "aryan",
    "password": "123456"
}
```

under Body → raw → JSON, use:

```javascript
req.body.username
req.body.password
```

If you're typing values under the Params tab, use:

```javascript
req.query.username
req.query.password
```