# Calculator CLI

A simple command-line calculator that performs basic arithmetic operations.

## Overview

This project provides a command-line calculator that supports the following **8** operation keywords:

*   Addition (`add`)
*   Subtraction (`subtract`)
*   Multiplication (`multiply` or `times`)
*   Division (`divide`)
*   Modulus (`modulus` or `remainder`)
*   Power (`power`)

## Prerequisites

This project requires [Node.js](https://nodejs.org/) to be installed on your system. We recommend using Node.js version 12 or higher.


## Installation

1.  Install as a devDependencies:

    ```bash
    npm install @yourname/calculator --save-dev
    ```


## Usage

To use the calculator, run the script with three arguments:

```bash
npx calculator.js number operator number
```

Examples:

*   Addition:

    ```
    node calculator.js 2 add 3
    // Expected Output: result: 5
    ```

*   Division:

    ```
    node calculator.js 10 divide 2
    // Expected Output: result: 5
    ```

*   Power:

    ```
    node calculator.js 2 power 3
    // Expected Output: result: 8
    ```


## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
