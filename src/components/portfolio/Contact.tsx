import { motion } from "framer-motion";
import { Calendar, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import resumeAsset from "@/assets/resume.asset.json";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Let's collaborate"
        title={<>Let&apos;s build intelligent <span className="text-gradient">Salesforce solutions</span></>}
        description="Open to senior Salesforce Consultant, Architect and AI-focused roles."
      />

      <div className="mx-auto max-w-4xl rounded-3xl glass-strong p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=s.manojkumar447@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 rounded-2xl bg-white/[0.03] p-5 transition-all duration-100 hover:bg-white/[0.06] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
          >
            <Mail className="mt-0.5 h-5 w-5 text-[#00D4FF] transition-transform duration-100 group-hover:scale-125 group-hover:-rotate-5" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Email</div>
              <div className="mt-1 break-all text-xs text-white">s.manojkumar447@gmail.com</div>
            </div>
          </a>
          <a
            href="tel:+918919002616"
            className="group flex items-start gap-3 rounded-2xl bg-white/[0.03] p-5 transition-all duration-100 hover:bg-white/[0.06] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
          >
            <Phone className="mt-0.5 h-5 w-5 text-[#7B61FF] transition-transform duration-100 group-hover:scale-125 group-hover:rotate-5" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Phone</div>
              <div className="mt-1 text-sm text-white">+91 8919002616</div>
            </div>
          </a>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            className="group flex items-start gap-3 rounded-2xl bg-white/[0.03] p-5 transition-all duration-100 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(0,255,178,0.1)]"
          >
            <MapPin className="mt-0.5 h-5 w-5 text-[#00FFB2] transition-transform duration-100 group-hover:scale-125 group-hover:rotate-10" />
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Location</div>
              <div className="mt-1 text-sm text-white">Hyderabad, India</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={resumeAsset.url}
            download="Manoj_Kumar_Sikhakolli_Resume.docx"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] px-5 py-3 text-sm font-semibold text-[#050816] shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-100 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,212,255,0.6)]"
          >
            <Download className="h-4 w-4 transition-transform duration-100 hover:-translate-y-1" /> Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/manoj1252"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/10 hover:scale-105"
          >
            <Linkedin className="h-4 w-4 transition-transform duration-100 hover:scale-125" /> LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=s.manojkumar447@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/10 hover:scale-105"
          >
            <Mail className="h-4 w-4 transition-transform duration-100 hover:scale-125" /> Email Me
          </a>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/10 hover:scale-105"
          >
            <Calendar className="h-4 w-4 transition-transform duration-100 hover:scale-125" /> Schedule Discussion
          </a>
          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition-all duration-100 hover:bg-white/10 hover:scale-105"
          >
            <Github className="h-4 w-4 transition-transform duration-100 hover:scale-125" /> GitHub
          </a> */}
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:text-left">
        <div className="text-sm text-white/60">
          Building Enterprise Salesforce Solutions{" "}
          <span className="text-gradient font-semibold">Powered by AI</span>
        </div>
        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Manoj Kumar Sikhakolli · Hyderabad, India
        </div>
      </div>
    </footer>
  );
}