# Assignment for Calculator CLI

**Note for Students:**

You are responsible for implementing the functionality in `calculator.js` as well as providing the source modules found in `src/stmnts-01.js` (for addition, subtraction, multiplication, division, modulus) and `src/stmnts-02.js` (for power).

All tests in `tests/calculator.test.js` must pass.


Before anything else: **replace**:

In `package.json`

*   `@yourname` with your actual NPM account name in the package name.
     ** Be sure to retain the `@` per NPM's scope policy as explained below.
*   `Your Name` with your real name in the author field.
*   `yourusername` with your GitHub account name.

In `README.md`

*   `@yourname` with your actual NPM account name in the package name.
     ** Be sure to retain the `@` per NPM's scope policy as explained below.


## Overview of the Steps Involved (see below for specifics)

1. After replacing fields in the `package.json` file and saving it.

    ```bash
    npm install
    ```

2. Insert code for the `stmnts-01.js` and `stmnts-01.js` files.

3. **See:** REQUIREMENTS.md file to review the requirements for the code in `calculator.js` needed to pass the tests.

34. Implement the missing JavaScript code in `calculator.js` using the functions from the `stmnts-01.js` and `stmnts-01.js` files.
   
36. **Hint:** Use if-then-else conditionals in your implementation.

5. Test until passing

6. Lint the code

7. NPM publish for public access

8. Commit and Push

## Files in This Project (the ones that will be published)

*   `calculator.js` – The main CLI script that parses arguments and calls the appropriate functions.
*   `src/` – Contains source modules:
    *   `stmnts-01.js` – Should export functions: `add`, `subtract`, `times`, `divide`, `modulus`.
    *   `stmnts-02.js` – Should export the `power` function.
*   `LICENSE` – The MIT License for the project.
*   `README.md`
*   `package.json` – The NPM package configuration file.


## Testing

To run the tests, execute:

```bash
npm test
```

Make sure all tests pass after you complete your implementation.

## Linting

ESLint is set up to help you maintain code quality. Run the linter with:

```
npm run lint
```

## Publishing to NPM

This project’s `package.json` is configured to include only the necessary files:

*   `calculator.js`
*   The `src/` directory
*   `LICENSE`
*   `README.md`

Once you have implemented the functionality and updated the details in `package.json`, `README.md` and `LICENSE` (i.e. replace `@yourname`, `yourusername`, or `Your Name`), you can login
to NPM:

```bash
npm login
```

and publish your package with public access

```bash
npm publish --access public
```

## NPM Scope

NPM Scopes provide a way to prevent package name conflicts by grouping packages under a unique namespace. When you publish a package with a scope—using the format `@yourname/package-name`—you ensure that your package's name is unique within your personal or organizational namespace.

This approach protects against accidentally using a package name that has already been claimed in the public registry. By isolating your package names with a scope, you avoid violating any existing package names and maintain clear ownership and organization within the vast NPM ecosystem.

When publishing a scoped package (i.e., a package with a name in the format @yourname/package-name), it's important to explicitly indicate that it is meant for public access. Scoped packages are private by default, so if you want your package to be available for everyone, you must include the --access public flag when you run the npm publish command. This ensures that your package is correctly set up for public use on the NPM registry.
