let counter = 0;

export function generateId(prefix = "id") {
  counter += 1;

  return `${prefix}-${Date.now()}-${counter}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}