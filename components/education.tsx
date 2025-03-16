import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Science in Computer Engineering",
            institution: "Dr.N.G.P. Institute of Technology",
            period: "2022 - 2026",
            description:
                "Focused on Software Engineering and Computer Architecture. Participated in multiple hackathons and coding competitions.",
            achievements: [
                "Published a research paper on 'Decentralized Social Media'.",
                "Organised a Technical Events in college.",
                "Participated in and won multiple hackathons.",
            ],
        },
        {
            degree: "12th Grade",
            institution: "Vivekananda Vidyalaya Matriculation Higher Secondary School",
            period: "2021 - 2022",
            description:
                "Studied Physics, Chemistry, Mathematics, and Computer Science.",
            achievements: [
                "VolleyBall Team Captain.",
                "District Level athlete.",
                "National cadet corps(NCC).",
            ],
        },

    ]

    const certifications = [
        {
            title: "Blockchain specialization",
            issuer: "University at Buffalo(Coursera)",
            date: "2022",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/LNB2PXXLX3GD",
        },
        {
            title: "Git & GitHub(VCS)",
            issuer: "Google ",
            date: "2024",
            url: "https://www.coursera.org/account/accomplishments/verify/942N46BKKABZ",
        },
        {
            title: "Metaverse",
            issuer: "Meta",
            date: "2023",
            url: "https://www.coursera.org/account/accomplishments/certificate/WV7RDL95D9AK",
        },
        {
            title: "Decentralized Applications (Dapps)",
            issuer: "University at Buffalo(Coursera)",
            date: "2022",
            url: "https://www.coursera.org/account/accomplishments/certificate/UX2Y8G73MQS6",
        },
    ]

    return (
        <section id="education" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My academic background and professional certifications
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center">
                            <GraduationCap className="mr-2 h-6 w-6 text-primary" />
                            Academic Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <Card key={index} className="relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                                    <CardHeader>
                                        <CardTitle>{edu.degree}</CardTitle>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="mr-2 h-4 w-4" />
                                            {edu.period}
                                        </div>
                                        <p className="font-medium">{edu.institution}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">{edu.description}</p>
                                        <div>
                                            <h4 className="font-medium mb-2">Achievements:</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center">
                            <Award className="mr-2 h-6 w-6 text-primary" />
                            Certifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">{cert.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {cert.issuer} • {cert.date}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-primary hover:underline"
                                        >
                                            View Certificate
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

