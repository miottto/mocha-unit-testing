Mocha Unit Testing - Node.js
============================

This repository demonstrates my studies on unit tests in Node.js using the **Mocha** framework and the built-in **assert** module.

⚙️ How It Works
--------------------

In this project, I used a **Test-Driven Development** to build a method that calculates factorial expressions. I put into practice the **assert** module and **Mocha** testing library to drive my development constructing an **automated test suite** that is reliable, maintainable and expressive.

📌 Technologies Used
--------------------

-   **Node.js** - JavaScript runtime environment
-   **Mocha** - Testing framework
-   **Assert** - Built-in Node.js assertion module


📂 Project Structure
--------------------

```
mocha-unit-testing/
│-- test/
│   └── index-test.js   # Unit tests
│-- index.js            # Function implementation
│-- package.json        # Project configuration
│-- .gitignore          # Ignored files for Git
│-- README.md           # Project documentation

```

🚀 How to Set Up the Project
----------------------------

### 1️⃣ Clone the Repository

```
git clone https://github.com/miottto/mocha-unit-testing.git
cd mocha-unit-testing

```

### 2️⃣ Install Dependencies

```
npm install --save-dev mocha 

```

### 3️⃣ Run the Tests

```
npm test

```

📜 Example Implementation (`index.js`)
--------------------------------------

```
function add(a, b) {
    return a + b;
}
module.exports = add;

```

✅ Example Test (`test/index-test.js`)
-------------------------------------

```
const assert = require('assert');
const add = require('../index');

describe('Addition Function', function() {
    it('should return 5 when adding 2 and 3', function() {
        assert.strictEqual(add(2, 3), 5);
    });
});

```

📖 References
-------------

-   [Mocha Documentation](https://mochajs.org/)
-   [Node.js Assert Module](https://nodejs.org/api/assert.html)

🏆 Contribution
---------------

Feel free to contribute with improvements! Open an issue or submit a pull request. 🚀

* * * * *

📌 **Author:** [miottto](https://github.com/miottto)
