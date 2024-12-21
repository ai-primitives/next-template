import type { MDXComponents } from 'mdx/types'
import { cn } from './lib/utils'

// This is the file Next.js looks for to provide components to MDX
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Add a wrapper div with prose classes
    wrapper: ({ children }) => (
      <div className="container max-w-7xl mx-auto px-4 mt-8">
        <div className={cn(
          'prose prose-gray dark:prose-invert max-w-none',
          'prose-headings:scroll-m-20',
          'prose-a:underline prose-a:decoration-primary prose-a:underline-offset-4 hover:prose-a:decoration-primary/70',
          'prose-code:rounded prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm'
        )}>
          {children}
        </div>
      </div>
    ),
    h1: ({ children }) => <h1 className='mt-2 text-4xl font-bold tracking-tight'>{children}</h1>,
    h2: ({ children }) => <h2 className='mt-12 border-b pb-2 text-3xl font-semibold tracking-tight'>{children}</h2>,
    h3: ({ children }) => <h3 className='mt-8 text-2xl font-semibold tracking-tight'>{children}</h3>,
    h4: ({ children }) => <h4 className='mt-8 text-xl font-semibold tracking-tight'>{children}</h4>,
    p: ({ children }) => <p className='leading-7 [&:not(:first-child)]:mt-6'>{children}</p>,
    ul: ({ children }) => <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>{children}</ul>,
    code: ({ children }) => (
      <code className='relative font-mono text-sm font-semibold'>{children}</code>
    ),
    ...components,
  }
}
