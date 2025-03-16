import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Medal, Trophy, Star } from "lucide-react"

export default function Achievements() {
    const achievements = [
        {
            title: "Hackathon Winner",
            organization: "Sri Eshwar College of Engineering (Thiran 2025)",
            description: "First place in a 24-hour Blockchain & CyberSecurity hackathon for developing a solution for Transparent Emergency Funding System.",
            icon: <Medal className="h-8 w-8 text-primary" />,
        },

        {
            title: "Hackathon Runner-up",
            organization: "PSG CAS GateWay2025",
            description: "Recognized for developing an innovative FinTech web application that addresses Payment challenges.",
            icon: <Trophy className="h-8 w-8 text-primary" />,
        },
        {
            title: "ProjectExpo Winner",
            organization: "Coimbatore Institute of Technology(CIT) AstraNova2025",
            description: "Recognized for impactful work in building a cutting-edge Ai Powered Transaction solution",
            icon: <Trophy className="h-8 w-8 text-primary" />,
        },
        {
            title: "Innovation Award Winner",
            organization: "Coimbatore Institute of Technology(CIT) Intellina2024",
            description: "Recognized for developing an innovative Social Network application that addresses People's Networking challenges.",
            icon: <Trophy className="h-8 w-8 text-primary" />,
        },
        {
            title: "Hackathon 14th place",
            organization: "Ethereum India 2025",
            description: "Achieved 14th place(Quadratic Voting) at Ethereum India 2025 for innovative blockchain development and teamwork.",
            icon: <Award className="h-8 w-8 text-primary" />,
        },
        {
            title: "Open Source Contributor",
            organization: "Catoff, Social winter of code 2025",
            description: "Contributed to few interesting open-source projects.",
            icon: <Star className="h-8 w-8 text-primary" />,
        },


    ]

    return (
        <section id="achievements" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Achievements & Awards</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognition and accomplishments throughout my professional journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    {achievement.icon}
                                </div>
                                <div>
                                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{achievement.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

