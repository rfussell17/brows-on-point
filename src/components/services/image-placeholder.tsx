import { PhotoIcon } from '@heroicons/react/24/outline'

/**
 * Stands in for a real service photo until one exists. Doesn't throw in
 * production — a "photo coming soon" box isn't asserting a fact the way a
 * guessed price or claim would be, so it's safe to ship rather than block on.
 */
export function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 ring-1 ring-primary-100 ${className}`}
    >
      <PhotoIcon className="h-10 w-10 text-gray-300" />
    </div>
  )
}
