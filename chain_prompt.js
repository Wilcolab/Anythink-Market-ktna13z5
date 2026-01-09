/**
 * Converts a string to kebab-case with sanitization and normalization
 * @param {string} input - The input string to convert
 * @returns {string} The kebab-case converted string
 * @throws {TypeError} If input is not a string
 */
function toKebabCase(input) {
    // Step 3: Type validation
    if (typeof input !== 'string') {
        throw new TypeError(`Expected string, received ${typeof input}`);
    }

    // Return empty string for empty input
    if (!input) {
        return '';
    }

    // Step 1 & 2: Single-pass regex for camelCase, spaces, underscores, and sanitization
    // - Replace camelCase transitions with hyphen
    // - Replace spaces and underscores with hyphens
    // - Remove non-alphanumeric characters (except hyphens)
    // - Normalize multiple consecutive hyphens into single hyphen
    // - Convert to lowercase
    return input
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase -> camel-Case
        .replace(/[\s_]+/g, '-') // spaces and underscores -> hyphens
        .replace(/[^a-z0-9-]/gi, '') // remove non-alphanumeric (except hyphens)
        .replace(/-+/g, '-') // normalize multiple hyphens
        .toLowerCase()
        .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens
}

// Test Cases
console.log('Test 1 - Standard string:');
console.log(toKebabCase('camelCaseString')); // Expected: 'camel-case-string'

console.log('\nTest 2 - String with symbols:');
console.log(toKebabCase('User Name!!')); // Expected: 'user-name'

console.log('\nTest 3 - Invalid input type:');
try {
    toKebabCase(12345);
} catch (error) {
    console.log(`${error.name}: ${error.message}`); // Expected: TypeError: Expected string, received number
}