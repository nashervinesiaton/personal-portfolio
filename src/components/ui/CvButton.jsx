import { Download } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from './Button'

/** Download CV button. Disabled with a clear note until a real PDF is configured in profile.cvUrl. */
export default function CvButton({ variant = 'secondary', className }) {
  if (profile.cvUrl) {
    return (
      <a
        href={profile.cvUrl}
        download
        className={`group inline-flex min-h-12 items-center justify-center gap-2 border border-line px-6 text-sm font-semibold tracking-wide text-paper transition-colors hover:border-accent hover:text-accent ${className ?? ''}`}
      >
        Download CV <Download size={16} />
      </a>
    )
  }
  return (
    <Button
      variant={variant}
      icon={false}
      disabled
      title="CV will be available once the final PDF is supplied"
      className={`cursor-not-allowed opacity-60 hover:border-line hover:text-paper ${className ?? ''}`}
    >
      Download CV <span className="text-xs font-normal text-mute">(coming soon)</span>
    </Button>
  )
}
