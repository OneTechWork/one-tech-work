"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "about", label: "About One Tech Work" },
  { id: "services", label: "Our Services" },
  { id: "projects", label: "Projects & Scope" },
  { id: "responsibilities", label: "Client Responsibilities" },
  { id: "payments", label: "Pricing & Payments" },
  { id: "revisions", label: "Revisions & Changes" },
  { id: "delivery", label: "Delivery & Approval" },
  { id: "cancellation", label: "Cancellation & Refunds" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "content", label: "Content & Materials" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "privacy", label: "Privacy" },
  { id: "disclaimer", label: "Disclaimers" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Suspension & Termination" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "law", label: "Governing Law" },
  { id: "contact", label: "Contact Us" },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#030305] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[150px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-150px] top-[-100px] h-[350px] w-[350px] rounded-full bg-blue-500/[0.06] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-cyan-300/[0.035] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-300/80">
              <FileText className="h-3.5 w-3.5" />
              Legal Document
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Terms of{" "}
              <span className="text-cyan-300 [text-shadow:0_0_30px_rgba(34,211,238,0.35)]">
                Service
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              These Terms of Service explain the rules and conditions that apply
              when you use One Tech Work&apos;s website, services, and digital
              solutions.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/30">
              <span>Last Updated: September 25, 2026</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
              <span>One Tech Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-20">
          {/* =================================================
              TABLE OF CONTENTS
          ================================================== */}

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-2 py-1.5 text-xs text-white/35 transition-colors duration-200 hover:text-cyan-300"
                  >
                    <span className="w-5 shrink-0 text-[10px] text-white/20 group-hover:text-cyan-300/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{section.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* =================================================
              CONTENT
          ================================================== */}

          <article className="min-w-0 max-w-4xl">
            {/* 01 */}
            <section id="acceptance" className="scroll-mt-28">
              <SectionNumber number="01" />
              <SectionTitle>Acceptance of Terms</SectionTitle>

              <Paragraph>
                By accessing or using the One Tech Work website or requesting
                our services, you agree to be bound by these Terms of Service.
                If you do not agree with these Terms, please do not use our
                website or services.
              </Paragraph>

              <Paragraph>
                These Terms apply to visitors, clients, customers, and other
                users who interact with One Tech Work.
              </Paragraph>
            </section>

            <Divider />

            {/* 02 */}
            <section id="about" className="scroll-mt-28">
              <SectionNumber number="02" />
              <SectionTitle>About One Tech Work</SectionTitle>

              <Paragraph>
                One Tech Work provides digital and technology-related services
                designed to help individuals, businesses, organizations, and
                other clients establish and improve their digital presence.
              </Paragraph>

              <Paragraph>
                Our services may include website development, application
                development, UI/UX design, and other digital solutions.
              </Paragraph>
            </section>

            <Divider />

            {/* 03 */}
            <section id="services" className="scroll-mt-28">
              <SectionNumber number="03" />
              <SectionTitle>Our Services</SectionTitle>

              <Paragraph>
                Depending on the project, One Tech Work may provide services
                including:
              </Paragraph>

              <BulletList
                items={[
                  "Website design and development",
                  "Web application development",
                  "Application development",
                  "UI/UX design",
                  "Digital solutions and technical implementation",
                  "Website maintenance or updates where separately agreed",
                ]}
              />

              <Paragraph>
                The exact services, features, deliverables, timeline, and
                pricing for a project will depend on the specific agreement
                between One Tech Work and the client.
              </Paragraph>
            </section>

            <Divider />

            {/* 04 */}
            <section id="projects" className="scroll-mt-28">
              <SectionNumber number="04" />
              <SectionTitle>Projects & Scope</SectionTitle>

              <Paragraph>
                Before beginning a project, the expected scope of work should be
                agreed upon by both parties. The project scope may be described
                through a proposal, quotation, message, invoice, project
                document, or other written communication.
              </Paragraph>

              <Paragraph>
                Features or work that are outside the agreed scope may require
                additional time, fees, or a separate agreement.
              </Paragraph>
            </section>

            <Divider />

            {/* 05 */}
            <section id="responsibilities" className="scroll-mt-28">
              <SectionNumber number="05" />
              <SectionTitle>Client Responsibilities</SectionTitle>

              <Paragraph>
                Clients are responsible for providing accurate information,
                content, approvals, credentials, and other materials reasonably
                required to complete a project.
              </Paragraph>

              <BulletList
                items={[
                  "Providing accurate project requirements",
                  "Providing necessary text, images, logos, and other materials",
                  "Providing timely feedback and approvals",
                  "Ensuring they have permission to use materials supplied to One Tech Work",
                  "Maintaining access to accounts owned by the client",
                ]}
              />

              <Paragraph>
                Delays caused by missing information, delayed feedback, or
                unavailable third-party accounts may affect the project
                timeline.
              </Paragraph>
            </section>

            <Divider />

            {/* 06 */}
            <section id="payments" className="scroll-mt-28">
              <SectionNumber number="06" />
              <SectionTitle>Pricing & Payments</SectionTitle>

              <Paragraph>
                Project pricing is determined according to the scope,
                complexity, requirements, and services involved. The applicable
                price and payment schedule will be communicated to the client
                before or during project engagement.
              </Paragraph>

              <Paragraph>
                Where an advance payment or milestone payment is required,
                project work may begin or continue only after the applicable
                payment has been received.
              </Paragraph>

              <Paragraph>
                Additional work outside the agreed scope may be charged
                separately after the additional requirements and pricing have
                been communicated.
              </Paragraph>
            </section>

            <Divider />

            {/* 07 */}
            <section id="revisions" className="scroll-mt-28">
              <SectionNumber number="07" />
              <SectionTitle>Revisions & Changes</SectionTitle>

              <Paragraph>
                Revisions are handled according to the project&apos;s agreed
                scope. Minor adjustments that fall within the original
                requirements may be included where agreed.
              </Paragraph>

              <Paragraph>
                New features, major design changes, additional pages, or changes
                to previously approved requirements may be treated as additional
                work.
              </Paragraph>
            </section>

            <Divider />

            {/* 08 */}
            <section id="delivery" className="scroll-mt-28">
              <SectionNumber number="08" />
              <SectionTitle>Delivery & Approval</SectionTitle>

              <Paragraph>
                Delivery timelines are estimates based on the information and
                cooperation available at the time of the project. One Tech Work
                will make reasonable efforts to complete work within the agreed
                timeline.
              </Paragraph>

              <Paragraph>
                A project may be considered approved when the client confirms
                acceptance or uses the delivered work for its intended purpose.
              </Paragraph>
            </section>

            <Divider />

            {/* 09 */}
            <section id="cancellation" className="scroll-mt-28">
              <SectionNumber number="09" />
              <SectionTitle>Cancellation & Refunds</SectionTitle>

              <Paragraph>
                A client may request cancellation of a project. The effect of
                cancellation depends on the project stage, work already
                completed, payments already made, and any specific agreement
                between the parties.
              </Paragraph>

              <Paragraph>
                Refunds are not automatically guaranteed. Where appropriate, any
                refund will be considered based on the circumstances of the
                cancellation and the work already performed.
              </Paragraph>

              <Paragraph>
                Third-party fees, purchases, subscriptions, domains, hosting,
                licenses, or other non-refundable costs may not be refundable.
              </Paragraph>
            </section>

            <Divider />

            {/* 10 */}
            <section id="intellectual-property" className="scroll-mt-28">
              <SectionNumber number="10" />
              <SectionTitle>Intellectual Property</SectionTitle>

              <Paragraph>
                Unless otherwise agreed in writing, One Tech Work retains
                ownership of its pre-existing code, reusable components,
                frameworks, internal tools, methods, templates, and general
                technical knowledge.
              </Paragraph>

              <Paragraph>
                Upon full payment, ownership or usage rights for specifically
                created project deliverables will be handled according to the
                project agreement.
              </Paragraph>

              <Paragraph>
                Third-party software, libraries, fonts, icons, frameworks, and
                other materials remain subject to their respective licenses.
              </Paragraph>
            </section>

            <Divider />

            {/* 11 */}
            <section id="third-party" className="scroll-mt-28">
              <SectionNumber number="11" />
              <SectionTitle>Third-Party Services</SectionTitle>

              <Paragraph>
                Projects may depend on third-party services such as hosting
                providers, domain registrars, APIs, databases, analytics
                platforms, payment providers, software libraries, or other
                external tools.
              </Paragraph>

              <Paragraph>
                One Tech Work does not control third-party services and cannot
                guarantee their continuous availability, pricing, features, or
                policies.
              </Paragraph>
            </section>

            <Divider />

            {/* 12 */}
            <section id="content" className="scroll-mt-28">
              <SectionNumber number="12" />
              <SectionTitle>Content & Materials</SectionTitle>

              <Paragraph>
                Clients are responsible for ensuring that materials they provide
                to One Tech Work do not violate applicable laws or the rights of
                other people or organizations.
              </Paragraph>

              <Paragraph>
                This includes text, images, logos, videos, trademarks,
                documents, software, and other materials supplied for a project.
              </Paragraph>
            </section>

            <Divider />

            {/* 13 */}
            <section id="acceptable-use" className="scroll-mt-28">
              <SectionNumber number="13" />
              <SectionTitle>Acceptable Use</SectionTitle>

              <Paragraph>
                You agree not to use our website or services for unlawful,
                fraudulent, abusive, or harmful activities.
              </Paragraph>

              <BulletList
                items={[
                  "Attempting to gain unauthorized access to systems",
                  "Distributing malicious software or harmful code",
                  "Using services to violate applicable laws",
                  "Infringing intellectual property or privacy rights",
                  "Attempting to interfere with the security or operation of our systems",
                ]}
              />
            </section>

            <Divider />

            {/* 14 */}
            <section id="confidentiality" className="scroll-mt-28">
              <SectionNumber number="14" />
              <SectionTitle>Confidentiality</SectionTitle>

              <Paragraph>
                Where confidential information is shared during a project, both
                parties should take reasonable steps to protect that information
                from unauthorized disclosure.
              </Paragraph>

              <Paragraph>
                Information that is publicly available, independently developed,
                or required to be disclosed by law may not be considered
                confidential.
              </Paragraph>
            </section>

            <Divider />

            {/* 15 */}
            <section id="privacy" className="scroll-mt-28">
              <SectionNumber number="15" />
              <SectionTitle>Privacy</SectionTitle>

              <Paragraph>
                Your use of our website and services may involve the collection
                or processing of information as described in our Privacy Policy.
              </Paragraph>

              <Link
                href="/privacy-policy"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              >
                Read our Privacy Policy
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </section>

            <Divider />

            {/* 16 */}
            <section id="disclaimer" className="scroll-mt-28">
              <SectionNumber number="16" />
              <SectionTitle>Disclaimers</SectionTitle>

              <Paragraph>
                One Tech Work provides services using reasonable professional
                efforts. However, we do not guarantee that every website,
                application, service, or third-party integration will operate
                continuously or without errors.
              </Paragraph>

              <Paragraph>
                We do not guarantee specific business results, revenue,
                rankings, traffic, sales, or other outcomes unless expressly
                agreed in writing.
              </Paragraph>
            </section>

            <Divider />

            {/* 17 */}
            <section id="liability" className="scroll-mt-28">
              <SectionNumber number="17" />
              <SectionTitle>Limitation of Liability</SectionTitle>

              <Paragraph>
                To the extent permitted by applicable law, One Tech Work will
                not be responsible for indirect, incidental, special,
                consequential, or unforeseeable losses arising from the use of
                our website, services, or third-party services.
              </Paragraph>

              <Paragraph>
                Nothing in these Terms is intended to exclude or limit liability
                where such exclusion or limitation is not permitted by
                applicable law.
              </Paragraph>
            </section>

            <Divider />

            {/* 18 */}
            <section id="indemnification" className="scroll-mt-28">
              <SectionNumber number="18" />
              <SectionTitle>Indemnification</SectionTitle>

              <Paragraph>
                To the extent permitted by law, you agree to be responsible for
                claims, losses, or expenses arising from your unlawful use of
                our services or from materials you provide that infringe the
                rights of another person or organization.
              </Paragraph>
            </section>

            <Divider />

            {/* 19 */}
            <section id="termination" className="scroll-mt-28">
              <SectionNumber number="19" />
              <SectionTitle>Suspension & Termination</SectionTitle>

              <Paragraph>
                We may suspend or terminate access to our website or services
                where reasonably necessary, including in cases of misuse,
                unlawful activity, non-payment, security concerns, or
                significant violation of these Terms.
              </Paragraph>

              <Paragraph>
                Termination does not automatically remove obligations that
                should reasonably continue after termination, including payment
                obligations or intellectual-property rights.
              </Paragraph>
            </section>

            <Divider />

            {/* 20 */}
            <section id="changes" className="scroll-mt-28">
              <SectionNumber number="20" />
              <SectionTitle>Changes to These Terms</SectionTitle>

              <Paragraph>
                We may update these Terms from time to time to reflect changes
                to our services, business practices, technology, or legal
                requirements.
              </Paragraph>

              <Paragraph>
                The updated version will be published on this page with a
                revised “Last Updated” date.
              </Paragraph>
            </section>

            <Divider />

            {/* 21 */}
            <section id="law" className="scroll-mt-28">
              <SectionNumber number="21" />
              <SectionTitle>Governing Law</SectionTitle>

              <Paragraph>
                These Terms will be interpreted and governed in accordance with
                applicable laws of India, subject to any mandatory legal rights
                or requirements that may apply.
              </Paragraph>
            </section>

            <Divider />

            {/* 22 */}
            <section id="contact" className="scroll-mt-28">
              <SectionNumber number="22" />
              <SectionTitle>Contact Us</SectionTitle>

              <Paragraph>
                If you have questions about these Terms of Service, you can
                contact One Tech Work using the information below.
              </Paragraph>

              <div className="mt-7 space-y-4 border-l border-cyan-300/20 pl-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/70" />

                  <a
                    href="mailto:officialonetechwork@gmail.com"
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
                  >
                    officialonetechwork@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300/70" />

                  <Link
                    href="/"
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
                  >
                    onetechwork.com
                  </Link>
                </div>
              </div>
            </section>

            {/* =================================================
                ACCEPTANCE
            ================================================== */}

            <div className="mt-16 border-t border-white/[0.07] pt-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300/80" />

                <p className="text-sm leading-6 text-white/40">
                  By using the One Tech Work website or engaging our services,
                  you acknowledge that you have read, understood, and agreed to
                  these Terms of Service.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   REUSABLE DOCUMENT COMPONENTS
========================================================= */

function SectionNumber({ number }: { number: string }) {
  return (
    <div className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-cyan-300/50">
      {number}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[15px] leading-7 text-white/45">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-[15px] leading-7 text-white/45"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.75rem] h-1 w-1 rounded-full bg-cyan-300/60"
          />

          {item}
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <div className="my-12 h-px bg-white/[0.06] sm:my-14" />;
}
