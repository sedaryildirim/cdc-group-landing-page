import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Catches render errors in child components and shows a graceful fallback
 * instead of crashing the entire page.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production you would send this to an error reporting service
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-[200px] items-center justify-center rounded-2xl border border-matte-accent/10 bg-white/40 p-8 text-center">
            <div className="space-y-3">
              <p className="font-serif text-xl text-matte-ink">
                Something went wrong.
              </p>
              <p className="text-sm text-matte-ink/60">
                Please refresh the page. If the problem persists, contact us.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="mt-2 rounded-full bg-matte-ink px-6 py-2 text-xs font-bold tracking-widest uppercase text-white transition-colors hover:bg-matte-secondary"
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
