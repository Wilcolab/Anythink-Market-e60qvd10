/**
 * Converts a given string to camelCase format.
 *
 * The function processes the input string by:
 * - Validating that the input is a non-empty string.
 * - Removing all non-alphanumeric characters except spaces.
 * - Splitting the string into words using spaces, hyphens, or underscores as delimiters.
 * - Converting the first word to lowercase and capitalizing the first letter of subsequent words.
 * - Concatenating the words to form a camelCase string.
 *
 * @param {string} input - The input string to be converted to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws an error if the input is not a string, is empty, or contains no valid words after cleaning.
 *
 * @example
 * toCamelCase("Hello world"); // returns "helloWorld"
 * toCamelCase("hello_world-test!"); // returns "helloWorldTest"
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function processes the input string by:
 * - Validating that the input is a non-empty string.
 * - Removing all non-alphanumeric characters except spaces.
 * - Splitting the string into words using spaces, hyphens, or underscores as delimiters.
 * - Converting all words to lowercase.
 * - Joining the words with dots to form a dot.case string.
 *
 * @param {string} input - The input string to be converted to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws an error if the input is not a string, is empty, or contains no valid words after cleaning.
 *
 * @example
 * toDotCase("Hello world"); // returns "hello.world"
 * toDotCase("hello_world-test!"); // returns "hello.world.test"
 */
function toCamelCase(input) {
    // Input Related Error: Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input Related Error: Input must be a non-empty string.');
    }
    // Input Related Error: Check if input is empty or only whitespace
    if (input.trim().length === 0) {
        throw new Error('Input Related Error: Input string cannot be empty.');
    }

    try {
        // Remove all non-alphanumeric characters except spaces
        let cleaned = input.replace(/[^a-zA-Z0-9\s]/g, ' ');
        // Split by spaces, hyphens, or underscores
        let words = cleaned.split(/[\s\-_]+/).filter(Boolean);

        if (words.length === 0) {
            throw new Error('Logical Error: No valid words found after cleaning input.');
        }

        // Convert to camelCase
        let camelCased = words
            .map((word, idx) => {
                if (idx === 0) {
                    return word.toLowerCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join('');

        return camelCased;
    } catch (err) {
        throw new Error(`Logical Error: ${err.message}`);
    }
}

// Example usage:
// console.log(toCamelCase("Hello world")); // "helloWorld"
// console.log(toCamelCase("hello_world-test!")); // "helloWorldTest"

function toDotCase(input) {
    // Input Related Error: Check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input Related Error: Input must be a non-empty string.');
    }
    // Input Related Error: Check if input is empty or only whitespace
    if (input.trim().length === 0) {
        throw new Error('Input Related Error: Input string cannot be empty.');
    }

    try {
        // Remove all non-alphanumeric characters except spaces
        let cleaned = input.replace(/[^a-zA-Z0-9\s]/g, ' ');
        // Split by spaces, hyphens, or underscores
        let words = cleaned.split(/[\s\-_]+/).filter(Boolean);

        if (words.length === 0) {
            throw new Error('Logical Error: No valid words found after cleaning input.');
        }

        // Convert to dot.case (all lowercase, joined by dots)
        let dotCased = words.map(word => word.toLowerCase()).join('.');

        return dotCased;
    } catch (err) {
        throw new Error(`Logical Error: ${err.message}`);
    }
}

// Example usage:
// console.log(toDotCase("Hello world")); // "hello.world"
// console.log(toDotCase("hello_world-test!")); // "hello.world.test"

