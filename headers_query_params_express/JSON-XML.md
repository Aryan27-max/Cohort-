# 📘 JSON & XML Notes

---

# JSON (JavaScript Object Notation)

**JSON** stores data using **key : value** pairs.

## Example

```json
{
  "name": "Aryan",
  "age": 21,
  "isStudent": true
}
```

---

# Structure

## Object

```json
{}
```

Represents an **object**

## Array / List

```json
[]
```

Represents an **array or list**

## Key Value Pair

```json
"key": "value"
```

---

# Why JSON Is Popular

- Lightweight
- Easy to read
- Easy to understand
- Supported by languages like:
  - JavaScript
  - Python
  - Go
  - Java
- Used heavily in **APIs**

---

# Example API Response

```json
{
  "temperature": 32,
  "city": "Bhopal"
}
```

---

<br>

# XML (eXtensible Markup Language)

**XML** stores data using **tags**.

## Example

```xml
<person>
    <name>Aryan</name>
    <age>21</age>
    <isStudent>true</isStudent>
</person>
```

---

# Structure

- Uses opening and closing tags
- Similar structure to HTML
- Data is wrapped inside custom tags

Example:

```xml
<tag>
    data
</tag>
```

---

<br>

# Headers

**Headers** are metadata sent along with a request or response that tell the server/client how to handle the actual data.

Headers describe information about the data being transferred.

---

# Example Request

## Header

```json
{
  "data-type": "JSON"
}
```

## Body

```json
{
  "id": "123",
  "data": "Hello World !!"
}
```

---

# Quick Difference

| JSON | XML |
|---|---|
| Uses key-value pairs | Uses tags |
| Lightweight | More verbose |
| Easier to read | Similar to HTML |
| Common in APIs | Older data format |

---