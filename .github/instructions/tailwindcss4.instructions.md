---
applyTo: '**/*.{tsx,jsx,css}'
---

# Tailwind CSS 4 Instructions for Copilot

These are best practices and usage notes for Tailwind CSS 4, especially for Copilot suggestions. For more, see the [official docs](https://tailwindcss.com/docs/styling-with-utility-classes).

## Using Utility Classes

- Use utility classes directly in your `class` or `className` attributes in JSX/TSX:
  ```tsx
  <div class="p-4 bg-blue-100 text-center rounded-lg">Hello</div>
  ```

- Combine multiple utilities for complex styles. Tailwind will generate only the CSS you use.

- Use responsive, hover, focus, and dark variants as needed:
  ```tsx
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>
  ```

- For custom styles, use the `@apply` directive in your CSS:
  ```css
  .btn-primary {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }
  ```

## Best Practices

- Prefer utility classes over custom CSS for most styling.
- Use semantic HTML and meaningful class combinations.
- Avoid duplicating styles in custom CSS unless necessary.
- Use the VS Code Tailwind CSS extension for IntelliSense and class validation.

## Resources

- [Tailwind CSS Utility Classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---
For more, see the [Tailwind CSS Docs](https://tailwindcss.com/docs/styling-with-utility-classes).

