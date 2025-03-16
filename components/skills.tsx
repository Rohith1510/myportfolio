import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layers, Terminal, Workflow,Blocks } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend Development",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Sql"],
    },
    {
      title: "Blockchain Development",
      icon: <Blocks className="h-8 w-8 text-primary" />,
      skills: ["Solidity", "Ethereum", "Cryptos", "L2", "Defi", "NFTs", "Ether.js", "Hardhat", ],
    },
    
    {
      title: "DevOps & Tools",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Git", "CI/CD","Shadcn","MUI","AWS", "Firebase", "Vercel"],
    },
    // {
    //   title: "Data & Analytics",
    //   icon: <LineChart className="h-8 w-8 text-primary" />,
    //   skills: ["SQL", "MongoDB", "Data Visualization", "Analytics"],
    // },
    {
      title: "UI/UX Design",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: ["Figma", "Responsive Design", "Wireframing", "Prototyping"],
    },
    {
      title: "Project Management",
      icon: <Workflow className="h-8 w-8 text-primary" />,
      skills: ["ClickUp", "Scrum", "Jira",  "Team Leadership"],
    },
    {
      title: "Languages",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["Python","JavaScript","Solidity", "TypeScript", "Java","HTML/CSS","C",],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

