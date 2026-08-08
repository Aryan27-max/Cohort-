# Hello World from React

## Static Websites

**Static websites** serve pre-built **HTML, CSS, and JavaScript** files directly to the user.  
The content remains the same for every visitor unless the code is manually updated.

**Example:** Portfolio websites, documentation pages, landing pages.

---

## Dynamic Websites

**Dynamic websites** generate or update content based on user interactions, data, APIs, or databases.  
The content can change without modifying the original code.

**Example:** Social media apps, dashboards, e-commerce websites.

---

## How React Makes Building Websites Easier

React simplifies frontend development by using a **component-based architecture**, where UI is divided into reusable pieces.

It updates only the required parts of the page using the **Virtual DOM**, making websites faster, easier to maintain, and scalable.

> **In short:** React helps developers build interactive and dynamic user interfaces efficiently.

--- 

# React Basics

## 📦 Component
**Definition:**  
A reusable building block of the user interface that contains UI and its logic.

**Short:**  
> Reusable UI block.

---

## 🧠 State
**Definition:**  
Data stored inside a component that can change over time.

**Short:**  
> Component's changing data (memory).

---

## 🔄 Re-rendering
**Definition:**  
React re-runs a component when its state or props change to update the UI.

**Short:**  
> React updates the UI after state/props change.

---

# Quick Revision

- **Component** → Reusable UI block.
- **State** → Component's changing data.
- **Re-rendering** → React updates the UI after state/props change.

---

# Easy Flow

```text
Component
    │
    ▼
Contains State
    │
    ▼
State Changes
    │
    ▼
React Re-renders
    │
    ▼
Updated UI
```

## base -line for React - 

A state change triggers a re-render 
A re-render represents the actual DOM bring manipulated when the state chnages
you usually have to defin ethe componenet once and thne all you have to 
do is to update the state of your app, and React takes care of the re-rendering of 
your app


.jsx  - Java Script XML (eXtesnsible Markup Language)

.tsx  - Type Script XML (eXtesnsible Markup Language)

What is XML - An XML (eXtensible Markup Language) is a way to store and transport data in a structured, human-readable format.

# React Hooks & Lifecycle

## Hooks

Hooks are special functions provided by React that allow functional components to use React features such as state, side effects, refs, and context.

Common Hooks:

* `useState` → manages state
* `useEffect` → handles side effects
* `useRef` → stores muAtable values / accesses DOM elements
* `useContext` → accesses context

---

## useState

`useState` is a Hook used to create and manage state in a functional component.

```jsx
const [count, setCount] = useState(0);
```

* `count` → current state
* `setCount` → updates the state
* `0` → initial value

Calling the setter updates the state and causes the component to re-render.

---

## Mounting

**Mounting** is when a component is created and added to the UI/DOM for the first time.

```text
Create → Render → Commit → Mounted
```

---

## Rendering

**Rendering** is when React runs a component function to determine what UI should be displayed.

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

React uses the returned JSX to determine the UI.

---

## Re-rendering

**Re-rendering** is when React runs a component again because something affecting it has changed.

Common causes:

* State changes
* Props change
* Parent re-renders
* Context changes

A re-render does not mean the entire DOM is recreated. React compares the new result with the previous one and updates what is necessary.

---

## Unmounting

**Unmounting** is when React removes a component from the UI/DOM.

```text
Component exists → Removed from UI → Unmounted
```

---

# useEffect

`useEffect` is a Hook used to perform **side effects** after React commits the UI.

Examples:

* API calls
* Event listeners
* Timers
* Subscriptions
* WebSockets

```jsx
useEffect(() => {
  // side effect
}, []);
```

### Dependency Array

```jsx
useEffect(() => {
  // runs after every render
});
```

```jsx
useEffect(() => {
  // runs after initial mount
}, []);
```

```jsx
useEffect(() => {
  // runs when userId changes
}, [userId]);
```

---

# Cleanup

A **cleanup function** is returned from `useEffect` to undo or clean up the work performed by the effect.

```jsx
useEffect(() => {
  // setup

  return () => {
    // cleanup
  };
}, []);
```

Cleanup is commonly used to:

* Remove event listeners
* Clear timers
* Close connections
* Cancel subscriptions

Cleanup runs:

* Before an effect runs again when its dependencies change
* When the component unmounts

---

# React Lifecycle

```text
Mount
  ↓
Render
  ↓
Commit UI
  ↓
useEffect
  ↓
State/Props change
  ↓
Re-render
  ↓
Commit changes
  ↓
Effect/Cleanup
  ↓
Unmount
  ↓
Cleanup
```

### Quick Definitions

| Concept          | Meaning                                                            |
| ---------------- | ------------------------------------------------------------------ |
| **Hook**         | Function that gives functional components access to React features |
| **useState**     | Manages component state                                            |
| **Mounting**     | Component is created and added to the UI                           |
| **Rendering**    | React runs the component to determine the UI                       |
| **Re-rendering** | Component runs again after an update                               |
| **Unmounting**   | Component is removed from the UI                                   |
| **useEffect**    | Handles side effects after the UI is committed                     |
| **Cleanup**      | Removes/undoes work created by an effect                           |





