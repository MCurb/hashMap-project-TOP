# 🧩 HashMap Implementation in JavaScript
This project is part of my Data Structures and Algorithms practice from [The Odin Project](https://www.theodinproject.com/).
It focuses on building a HashMap from scratch in JavaScript to deepen my understanding of how data structures work under the hood.

## 🧠 Key Learnings
- Implementing a HashMap data structure from scratch.
- Understanding hash functions, collision handling (linked lists), and resizing.
- Managing private and public class fields in modern JavaScript.
- Practicing time complexity analysis and defensive programming.

## ⚙️ Project Overview
### Classes

### Node
Represents each element in the linked list stored within buckets.
- Properties: `key`, `value`, `next` (for collision chaining).

### HashMap
Manages nodes and provides a complete HashMap API.

### Methods:
- `set(key, value)` – Inserts or updates a key-value pair.
- `get(key)` – Retrieves the value associated with a key.
- `has(key)` – Returns `true` if a key exists in the map.
- `remove(key)` – Deletes a key-value pair from the map.
- `length()` – Returns the total number of entries.
- `clear()` – Clears all entries from the map.
- `keys()` – Returns an array of all keys.
- `values()` – Returns an array of all values.
- `entries()` – Returns an array of `[key, value]` pairs.

## 🔧 Features
- Collision handling: Uses linked lists to handle hash collisions.
- Dynamic resizing: Automatically doubles capacity when the load factor is exceeded.
- Private fields: Encapsulates internal properties using modern JS private fields (`#buckets`, `#capacity`, etc.).
- Defensive programming: Includes checks for invalid bucket access to prevent unexpected behavior.
