export function Blocked({ source, needs }: { source: string; needs: string }) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      `BLOCKED CONTENT reached production build: ${source} — ${needs}`,
    )
  }
  return (
    <div
      data-blocked={source}
      className="my-6 border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-900"
    >
      <strong>BLOCKED — {source}</strong>
      <p className="mt-1">{needs}</p>
    </div>
  )
}

/**
 * Same fail-on-production contract as <Blocked />, for facts needed outside
 * JSX (JSON-LD fields, metadata strings) where rendering a div isn't possible.
 * Returns undefined in development so the caller can omit the field.
 */
export function blockedFact(source: string, needs: string): undefined {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      `BLOCKED CONTENT reached production build: ${source} — ${needs}`,
    )
  }
  return undefined
}
