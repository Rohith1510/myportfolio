import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    // {
    //   title: "Senior Frontend Developer",
    //   company: "Tech Innovations Inc.",
    //   period: "2021 - Present",
    //   description:
    //     "Leading the frontend development team in building scalable web applications using React and Next.js. Implementing best practices for code quality and performance optimization.",
    //   responsibilities: [
    //     "Architected and developed the company's flagship SaaS product",
    //     "Mentored junior developers and conducted code reviews",
    //     "Implemented CI/CD pipelines for automated testing and deployment",
    //     "Reduced application load time by 40% through performance optimizations",
    //   ],
    //   technologies: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
    // },
    {
      title: "Frontend Engineer Intern",
      company: "Invsto",
      period: "2024(Jul) - 2024(Dec)",
      description:
        "Developed Responsive web applications and collaborated with UX designers to implement pixel-perfect interfaces.",
      responsibilities: [
        "Built and maintained multiple client-facing web applications",
        "Migrated the React codebase to Next.js with TypeScript and Tailwind CSS for better performance and scalability.",
        "Refactored legacy code to improve maintainability and performance",
        "Built and integrated Web3 features, including cryptocurrency and blockchain functionalities.",
      ],
      technologies: ["React", "Nextjs", "Typescript","TailwindCSS","Zustand", "RESTful APIs","Blockchain"],
    },
    // {
    //   title: "Web Developer Intern",
    //   company: "StartUp Ventures",
    //   period: "2018 - 2019",
    //   description:
    //     "Assisted in developing web applications and gained hands-on experience with modern web technologies.",
    //   responsibilities: [
    //     "Developed and maintained company website and internal tools",
    //     "Created responsive layouts and implemented UI components",
    //     "Assisted senior developers with bug fixes and feature implementations",
    //     "Participated in code reviews and team meetings",
    //   ],
    //   technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    // },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and career highlights</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center">
                      <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

