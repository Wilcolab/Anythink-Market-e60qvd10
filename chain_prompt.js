function toKebabCase(str) {
    if (typeof str !== 'string') return '';

    // Step 1: Convert to lowercase
    let lower = str.toLowerCase();

    // Step 2: Replace underscores, hyphens, and non-alphabetic separators with spaces
    // Also handle multiple separators and special characters
    let cleaned = lower.replace(/[^a-z0-9]+/g, ' ');

    // Step 3: Split by spaces, filter out empty words, and join with hyphens
    return cleaned
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .join('-');
}

// Example usage:
// console.log(toKebabCase('Hello_world--Test 123!')); // Output: 'hello-world-test-123'