export function getIndices(value, limit) {
    const indices = [];
    if (value > 0) {
        indices.push(value - 1);
    }
    indices.push(value);
    if (value < limit - 1) {
        indices.push(value + 1);
    }
    return indices;
}
