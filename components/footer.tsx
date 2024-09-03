import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiGitter, SiLinkedin } from 'react-icons/si'  // Import SiLinkedin
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="#" target="_blank">
            <SiDiscord size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          {/* <Link href="https://twitter.com/morphic_ai" target="_blank">
            <SiTwitter size={18} />
          </Link> */}
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://github.com/AK2k30/morphic-ai" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">
            <SiLinkedin size={18} color="#0077B5" />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
