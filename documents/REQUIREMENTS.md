# Requirements for the Calculator CLI

The Calculator CLI must satisfy the following requirements based on the tests:

## 1\. Command-Line Arguments

*   **Expected Input Format:**

    The CLI must be executed with exactly three command-line arguments (in addition to the `node` command and the script name):

    ```
    node calculator.js number operator number
    ```

    *   **First Operand:** Must be a number.
    *   **Operator:** Must be one of the supported operation keywords.
    *   **Second Operand:** Must be a number.
*   **Insufficient Arguments:**

    If fewer than three arguments are provided, the CLI must:

    *   Output the error message:

        ```
        usage: node calculator.js number operator number
        ```

    *   Exit with a non-zero exit code.
*   **Extra Arguments:**

    If more than three arguments are provided, the CLI must ignore any additional arguments and compute the result based on only the first three.


## 2\. Supported Arithmetic Operations

The CLI must support the following operations:

*   **Addition (`add`):**
    *   Compute the sum of the two numbers.
    *   **Example:**

        ```
        node calculator.js 2 add 3
        ```

        Expected output: `result: 5`
*   **Subtraction (`subtract`):**
    *   Compute the difference by subtracting the second number from the first.
    *   **Example:**

        ```
        node calculator.js 5 subtract 3
        ```

        Expected output: `result: 2`
*   **Multiplication (`multiply` or `times`):**
    *   Compute the product of the two numbers.
    *   **Examples:**

        ```
        node calculator.js 4 multiply 3
        ```

        or

        ```
        node calculator.js 4 times 3
        ```

        Expected output: `result: 12`
*   **Division (`divide`):**
    *   Divide the first number by the second.
    *   **Example:**

        ```
        node calculator.js 10 divide 2
        ```

        Expected output: `result: 5`
    *   **Division by Zero:** If the second operand is zero, the CLI must treat this as an invalid number input. It should output an error message that includes "invalid number" and exit with a non-zero exit code.
*   **Modulus (`modulus` or `remainder`):**
    *   Compute the remainder of dividing the first number by the second.
    *   **Examples:**

        ```
        node calculator.js 10 modulus 3
        ```

        or

        ```
        node calculator.js 10 remainder 3
        ```

        Expected output: `result: 1`
*   **Power (`power`):**
    *   Raise the first number to the power of the second.
    *   **Example:**

        ```
        node calculator.js 2 power 3
        ```

        Expected output: `result: 8`
    *   **Special Cases:**
        *   An exponent of zero should result in `result: 1`.
        *   Negative exponents should be correctly computed (e.g., `node calculator.js 2 power -2` should result in `result: 0.25`).

## 3\. Input Validation and Error Handling

*   **Numeric Validation:**

    Both the first and second operands must be valid numbers. If either operand is not a number (e.g., letters or symbols), the CLI must output an error message containing "invalid number" and exit with a non-zero exit code.

*   **Division by Zero:**

    Division by zero must be handled as an error. The error message must include "invalid number" and the program must exit with a non-zero exit code.

*   **Unknown Operator:**

    If the operator does not match any of the supported operations (considering case-insensitivity), the CLI must output an error message:

    ```
    unknown operation
    ```

    and exit with a non-zero exit code.

*   **Case-Insensitive Operators:**

    Operators must be interpreted in a case-insensitive manner (e.g., `ADD` should be treated as `add`).


## 4\. Output Format and Exit Codes

*   **Valid Operation:**

    For valid inputs and successful computations, the CLI must print the result in the following format:

    ```
    result: <computed value>
    ```

    The process should exit with code `0`.

*   **Error Conditions:**

    For any errors (invalid numbers, division by zero, insufficient arguments, or unknown operations), the CLI must output the appropriate error message and exit with a non-zero exit code (typically `1`).


## 5\. Additional Considerations

*   **Negative and Floating Point Numbers:**

    The CLI must correctly handle negative numbers and floating point arithmetic.