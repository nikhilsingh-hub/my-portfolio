// Simple prop validation utility (TypeScript-like validation for JavaScript)
export const validateProps = (props, schema, componentName = 'Component') => {
  if (process.env.NODE_ENV === 'production') return; // Skip in production

  Object.keys(schema).forEach(key => {
    const value = props[key];
    const validation = schema[key];

    // Check required props
    if (validation.required && (value === undefined || value === null)) {
      console.error(`${componentName}: Required prop '${key}' is missing`);
      return;
    }

    // Skip validation if prop is not provided and not required
    if (value === undefined || value === null) return;

    // Type validation
    if (validation.type) {
      const expectedType = validation.type;
      const actualType = Array.isArray(value) ? 'array' : typeof value;
      
      if (actualType !== expectedType) {
        console.error(`${componentName}: Prop '${key}' expected ${expectedType}, got ${actualType}`);
      }
    }

    // Enum validation
    if (validation.oneOf && !validation.oneOf.includes(value)) {
      console.error(`${componentName}: Prop '${key}' must be one of: ${validation.oneOf.join(', ')}`);
    }

    // Custom validation
    if (validation.validator && !validation.validator(value)) {
      console.error(`${componentName}: Prop '${key}' failed custom validation`);
    }
  });
};

// Common validation schemas
export const COMMON_SCHEMAS = {
  button: {
    variant: { type: 'string', oneOf: ['primary', 'secondary', 'ghost'] },
    size: { type: 'string', oneOf: ['sm', 'md', 'lg'] },
    disabled: { type: 'boolean' },
    onClick: { type: 'function' },
    href: { type: 'string' }
  },
  card: {
    variant: { type: 'string', oneOf: ['default', 'experience', 'project'] },
    hover: { type: 'boolean' },
    className: { type: 'string' }
  },
  badge: {
    variant: { type: 'string', oneOf: ['default', 'tech', 'skill', 'category'] },
    size: { type: 'string', oneOf: ['sm', 'md', 'lg'] }
  }
};
