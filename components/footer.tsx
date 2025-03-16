import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Rohith Pranav Bala</h3>
            <p className="text-muted-foreground mb-4">
              Software Engineer & Developer specializing in creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Rohith1510" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/rohithpranavbala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="https://x.com/Rohith1510786" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:rohithpranav567@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">💡 Explore My Work</h3>
            <p className="text-muted-foreground mb-4">
            Dive into my latest projects, research, and innovations in Web3, blockchain, and software development.
            </p>
           
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>© {currentYear} Rohith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

