import { type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, className = '', ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <label className='block text-sm font-medium text-[var(--text-secondary)] mb-2'>
            {label}
          </label>
        )}
        <div className='relative'>
          {leftIcon && (
            <div className='absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]'>
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full px-4 py-2.5 rounded-lg
              bg-[var(--bg-secondary)] border border-[var(--border-color)]
              text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
              transition-all duration-200
              focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
              hover:border-[var(--text-muted)]
              disabled:opacity-50 disabled:cursor-not-allowed
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className='absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]'>
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className='mt-1.5 text-sm text-red-400'>{error}</p>
        )}
        {hint && !error && (
          <p className='mt-1.5 text-sm text-[var(--text-muted)]'>{hint}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <label className='block text-sm font-medium text-[var(--text-secondary)] mb-2'>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-2.5 rounded-lg resize-none
            bg-[var(--bg-secondary)] border border-[var(--border-color)]
            text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
            transition-all duration-200
            focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
            hover:border-[var(--text-muted)]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className='mt-1.5 text-sm text-red-400'>{error}</p>
        )}
        {hint && !error && (
          <p className='mt-1.5 text-sm text-[var(--text-muted)]'>{hint}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
