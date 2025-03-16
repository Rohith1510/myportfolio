import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/my_Img.jpg" alt="Profile" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hey there! I&apos;m Rohith Pranav Bala, a CSE undergraduate with hands-on experience in frontend development, blockchain, and Web3. I’m passionate about building impactful tech solutions that bridge innovation and efficiency.
              </p>
              <p>
                I&apos;ve actively participated in and been recognized at various tech events, conferences, and competitions, constantly pushing boundaries in the ever-evolving tech space. Always eager to learn, collaborate, and create something extraordinary!
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities like travel and photography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
