"use client";

import Image from "next/image";
import { User, Monitor, Check, ArrowRight } from "lucide-react";

const SECONDARY = "#1D4ED8";
const SECONDARY_HOVER = "#1E40AF";

const courses = [
  {
    id: "science-math",
    name: "Science & Mathematics",
    tagline: "CBSE & ICSE",
    eligibility: "Class 6th to Class 12th",
    icon: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=500&q=80",
    mode: "Offline + Smart Board",
    color: SECONDARY,
    features: ["Strong Concept Building", "Popular Mentors like Ankit Sir", "Regular Practice Tests"],
    badge: "Most Popular",
  },
  {
    id: "school-subjects",
    name: "All School Subjects",
    tagline: "Complete Support",
    eligibility: "Class 6th to Class 12th",
    icon: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80",
    mode: "Offline + Smart Board",
    color: "#0F2C59",
    features: ["CBSE & ICSE Curriculum", "Subject-wise Expert Faculty", "Homework & Test Support"],
    badge: "Essential",
  },
  {
    id: "competitive-foundation",
    name: "Competitive Foundation",
    tagline: "JEE / NEET Prep",
    eligibility: "Class 8th to Class 12th",
    icon: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
    mode: "Offline + Smart Board",
    color: "#059669",
    features: ["Foundation for JEE/NEET", "Advanced Problem Solving", "Previous Year Questions"],
    badge: "High Demand",
  },
  {
    id: "board-exam-prep",
    name: "Board Exam Preparation",
    tagline: "Complete Guidance",
    eligibility: "Class 10th & 12th",
    icon: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80",
    mode: "Offline + Smart Board",
    color: "#7C3AED",
    features: ["Board Pattern Questions", "Mock Tests & Analysis", "Revision Classes"],
    badge: "Result Oriented",
  },
];

export default function CoursesGrid() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#1D4ED8] text-[12px] font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase" style={{ backgroundColor: `${SECONDARY}12` }}>
            Our Programs
          </div>
          <h2 className="font-heading text-[24px] sm:text-[30px] md:text-[38px] font-extrabold text-[#0F2C59] leading-tight">
            Programs Designed for{" "}
            <span style={{ color: SECONDARY }}>Academic Success</span>
          </h2>
          <p className="mt-2 text-[13px] sm:text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed hidden sm:block">
            Expert-crafted batches with air-conditioned smart classrooms, weekly practice tests,
            and dedicated doubt-removal sessions — right in Prayagraj's Katra area.
          </p>
          <p className="mt-2 text-[13px] text-[#6B7280] max-w-xl mx-auto leading-relaxed sm:hidden">
            Smart AC classrooms &amp; weekly tests — right in Prayagraj Katra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative group bg-white rounded-2xl border border-[#EAE5DC] p-5 card-shadow card-shadow-hover overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ backgroundColor: `${course.color}0A` }}
              ></div>

              <div className="relative z-10 mb-4 w-full h-36 mx-auto rounded-xl overflow-hidden border border-[#EAE5DC] group-hover:border-[#1D4ED8]/30 transition-colors">
                <Image
                  src={course.icon}
                  alt={`${course.name} coaching classes`}
                  fill
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="font-heading text-[18px] font-extrabold text-[#0F2C59] leading-tight">
                  {course.name}
                </h3>
                <p className="text-[12px] font-semibold mt-0.5 mb-2" style={{ color: SECONDARY }}>
                  {course.tagline}
                </p>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6B7280] mb-3">
                  <User className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{course.eligibility}</span>
                </div>

                {/* features list — hidden on mobile, shown sm+ */}
                <ul className="hidden sm:block text-left space-y-1.5 mb-4">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-[12px] text-[#374151]">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: SECONDARY }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {/* mobile: only first feature as a badge */}
                <div className="sm:hidden flex items-center justify-center gap-1 text-[11px] font-semibold mb-3" style={{ color: SECONDARY }}>
                  <Check className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{course.features[0]}</span>
                </div>

                <div className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-semibold text-[#0F2C59] mb-4 hidden sm:flex" style={{ backgroundColor: "#0F2C5910" }}>
                  <Monitor className="w-3.5 h-3.5" />
                  <span>{course.mode}</span>
                </div>

                <a
                  href="#contact"
                  className="group/btn flex items-center justify-center gap-1.5 w-full text-center text-[13px] font-bold py-2.5 rounded-xl border-2 transition-all duration-200"
                  style={{ borderColor: course.color, color: course.color }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = course.color; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = course.color; }}
                >
                  <span>View Batch Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
