import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Loader } from "@/components/portfolio/Loader";
import { Hero } from "@/components/portfolio/Hero";
import { Summary } from "@/components/portfolio/Summary";
import { Experience } from "@/components/portfolio/Experience";
import { SkillsGalaxy } from "@/components/portfolio/SkillsGalaxy";
import { Architecture } from "@/components/portfolio/Architecture";
import { Impact } from "@/components/portfolio/Impact";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { AILab } from "@/components/portfolio/AILab";
import { Ecosystem } from "@/components/portfolio/Ecosystem";
import { Certifications } from "@/components/portfolio/Certifications";
import { WhyMe } from "@/components/portfolio/WhyMe";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manoj Kumar Sikhakolli | Salesforce Consultant | Agentforce Specialist" },
      {
        name: "description",
        content:
          "Experienced Salesforce Consultant with 5+ years of expertise in Salesforce Development, Agentforce, Data Cloud, AI Solutions, Enterprise Integrations and Intelligent Automation.",
      },
      { name: "author", content: "Manoj Kumar Sikhakolli" },
      { property: "og:title", content: "Manoj Kumar Sikhakolli | Salesforce Consultant" },
      {
        property: "og:description",
        content:
          "Senior Salesforce Consultant at Deloitte — Agentforce, Data Cloud, AI & Enterprise Integration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Manoj Kumar Sikhakolli",
          jobTitle: "Salesforce Consultant",
          worksFor: { "@type": "Organization", name: "Deloitte" },
          email: "mailto:s.manojkumar447@gmail.com",
          telephone: "+91 8919002616",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressCountry: "IN",
          },
          knowsAbout: [
            "Salesforce",
            "Agentforce",
            "Data Cloud",
            "Apex",
            "Lightning Web Components",
            "Einstein AI",
            "Enterprise Integration",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-white">
      <Loader />
      <Background />
      <Nav />
      <main>
        <Hero />
        <Summary />
        <Experience />
        <SkillsGalaxy />
        <Architecture />
        <Impact />
        <CaseStudies />
        <AILab />
        <Ecosystem />
        <Certifications />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
