import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ul: ({ children }) => (
      <ul style={{ marginBottom: '1rem' }}>{children}</ul>
    ),
    pre: ({ children }) => (
      <pre style={{
        marginBottom: '1rem',
        backgroundColor: '#e2e2e2',
        padding: '1rem',
        borderRadius: '5px'
      }}>{children}</pre>
    ),
  }
}
