import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          <span className="text-primary">Rohith Pranav Bala</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold">CSE Undergrad & Developer</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Building innovative solutions with cutting-edge technologies. Passionate about creating impactful digital
          experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

