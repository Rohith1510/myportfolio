import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Publications() {
  const publications = [
    {
      title: "Decentralized Social Media Web3.0",
      publisher: "Tech Journal",
      date: "March 2023",
      description:
        "Published 'Decentralized Social Media Web3.0' in the International Research Journal of Education and Technology, exploring the future of social platforms on blockchain.",
      url: "https://www.irjweb.com/viewarticle.php?aid=Decentralized-Social-Media-Web3.0",
    },
    // {
    //   title: "Optimizing React Performance: Advanced Techniques",
    //   publisher: "React Weekly",
    //   date: "March 2023",
    //   description:
    //     "A detailed guide on optimizing React applications for performance using advanced techniques and tools.",
    //   url: "#",
    // },
    // {
    //   title: "The Future of Web Development: Trends to Watch",
    //   publisher: "Web Dev Magazine",
    //   date: "November 2022",
    //   description: "An analysis of emerging trends and technologies shaping the future of web development.",
    //   url: "#",
    // },
    // {
    //   title: "Building Accessible Web Applications",
    //   publisher: "Accessibility Today",
    //   date: "August 2022",
    //   description: "Best practices and guidelines for developing web applications that are accessible to all users.",
    //   url: "#",
    // },
  ]

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Publications & Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical articles, research papers, and publications I&apos;ve authored
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((publication, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {publication.publisher} • {publication.date}
                  </span>
                </div>
                <CardTitle>{publication.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{publication.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link href={publication.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Read Article
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

