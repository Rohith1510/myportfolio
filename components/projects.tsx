import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    
    {
      title: "Decentralized Aid Distribution System ",
      description:
        "Aid_Net is a blockchain-based decentralized platform designed to revolutionize emergency aid distribution and management. The system enables direct, transparent, and efficient delivery of humanitarian assistance during crisis situations.",
      image: "/aidnet.png",
      technologies: ["Next.js", "TypeScript","Tailwind CSS","Hardhat","Solidity","Ethereum",],
      liveUrl: "#",
      githubUrl: "https://github.com/Rohith1510/Aid_Net",
    },
    {
        title: "Decentralised Social Media Application",
        description:
          "Eco Sync is a Decentralised Social Media Application for Connecting Like minded people for the Substantial Development.",
        image: "/EcoSync.png",
        technologies: ["React", "Nextjs", "Typescript", "TailwindCSS","Hardhat", "Solidity", "Blockchain"],
        liveUrl: "#",
        githubUrl: "https://github.com/Rithik2211/eco-sync-main",
      },
    // {
    //   title: "Health & Fitness Tracker",
    //   description:
    //     "A mobile application for tracking fitness activities, nutrition, and health metrics with data visualization.",
    //   image: "/placeholder.svg?height=300&width=600",
    //   technologies: ["React Native", "GraphQL", "AWS", "D3.js"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Real Estate Marketplace",
    //   description: "A platform for property listings with advanced search, filtering, and virtual tour capabilities.",
    //   image: "/placeholder.svg?height=300&width=600",
    //   technologies: ["Vue.js", "Django", "PostgreSQL", "Google Maps API"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of my recent work and personal projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

