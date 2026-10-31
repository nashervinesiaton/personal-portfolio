/** Joins truthy class names. */
export const cx = (...parts) => parts.filter(Boolean).join(' ')

/** Content wrapped in [BRACKETS] is an unconfirmed placeholder. */
export const isPlaceholder = (text) => typeof text === 'string' && /^\[.*\]$/.test(text.trim())

export const isExternal = (href) => /^https?:\/\//.test(href)
