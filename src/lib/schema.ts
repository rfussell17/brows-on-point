/**
 * Extracts a plain numeric value from a price string like "$275" or
 * "From $70". Returns null for non-numeric prices like "Ask in-studio" or
 * "Ask at your consultation" — schema.org's Offer.price needs a real number,
 * so those are simply omitted from structured data rather than guessed at.
 */
export function parsePrice(price: string): number | null {
  const match = price.match(/\$([\d,]+(?:\.\d+)?)/)
  if (!match) return null
  return Number(match[1].replace(/,/g, ''))
}
