import type { MDXComponents } from 'mdx/types'
import { cn } from './lib/utils'

// This is the file Next.js looks for to provide components to MDX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Add a wrapper div with prose classes
    wrapper: ({ children }) => (
      <div className='container max-w-7xl mx-auto px-4 mt-8'>
        <div
          className={cn(
            'prose prose-gray dark:prose-invert max-w-none',
            'prose-headings:scroll-m-20',
            'prose-a:underline prose-a:decoration-primary prose-a:underline-offset-4 hover:prose-a:decoration-primary/70',
            'prose-code:rounded prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm',
          )}
        >
          {children}
        </div>
      </div>
    ),
    ...components,
  }
}
