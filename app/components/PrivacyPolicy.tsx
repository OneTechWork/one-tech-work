"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    number: "01",
    title: "About This Privacy Policy",
    content: (
      <>
        <p>
          This Privacy Policy explains how One Tech Work collects, uses,
          stores, protects, and manages information when you visit our website,
          use our application, create an account, communicate with us, or use
          our services.
        </p>

        <p>
          We have designed this policy to explain our data practices in a clear
          and understandable way.
        </p>

        <p>
          This Privacy Policy applies to the One Tech Work website,
          application, accounts, project-management features, messaging
          features, contact forms, support communications, and related
          services operated by One Tech Work.
        </p>

        <p>
          Third-party websites or services linked from One Tech Work may have
          their own privacy policies and are not necessarily covered by this
          Privacy Policy.
        </p>
      </>
    ),
  },

  {
    number: "02",
    title: "Information We Collect",
    content: (
      <>
        <p>
          The information we collect depends on how you interact with One Tech
          Work.
        </p>

        <p>We may receive information that you:</p>

        <ul>
          <li>Provide directly to us</li>
          <li>Generate while using our services</li>
          <li>Provide through projects or conversations</li>
          <li>Provide through contact or support requests</li>
          <li>Generate automatically through technical systems</li>
        </ul>

        <p>
          Some information may be necessary for us to provide particular
          features or services.
        </p>
      </>
    ),
  },

  {
    number: "03",
    title: "Information You Provide",
    content: (
      <>
        <h3>Account Information</h3>

        <p>
          When you create or maintain a One Tech Work account, we may collect:
        </p>

        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Authentication information</li>
          <li>Profile information you choose to provide</li>
          <li>Account creation information</li>
          <li>Account security information</li>
          <li>Session and authentication information</li>
        </ul>

        <h3>Project Information</h3>

        <p>
          When you create or participate in a project, we may collect:
        </p>

        <ul>
          <li>Project name</li>
          <li>Project description</li>
          <li>Project requirements</li>
          <li>Project type</li>
          <li>Reference URLs</li>
          <li>Project status</li>
          <li>Project progress</li>
          <li>Project phases</li>
          <li>Milestones</li>
          <li>Project updates</li>
          <li>Other information you provide about the project</li>
        </ul>

        <h3>Contact Information</h3>

        <p>
          When you contact One Tech Work, you may provide information such as:
        </p>

        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone number</li>
          <li>WhatsApp number</li>
          <li>Business or organization name</li>
          <li>Project requirements</li>
          <li>Website or application requirements</li>
          <li>Messages</li>
          <li>Reference links</li>
        </ul>
      </>
    ),
  },

  {
    number: "04",
    title: "Messages and Conversations",
    content: (
      <>
        <p>
          When you use messaging features within the One Tech Work
          application, we may collect and store information necessary to
          provide the messaging service.
        </p>

        <p>This may include:</p>

        <ul>
          <li>Messages sent and received</li>
          <li>Conversation information</li>
          <li>Message timestamps</li>
          <li>Read and unread status</li>
          <li>Delivery information</li>
          <li>Message-related metadata</li>
        </ul>

        <p>
          These conversations are used to provide communication between
          clients and authorized One Tech Work personnel.
        </p>

        <p>
          Private project conversations are not intentionally made publicly
          available.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Notifications and Service Activity",
    content: (
      <>
        <p>
          One Tech Work may process information required to provide
          notifications and service updates.
        </p>

        <p>Notifications may relate to:</p>

        <ul>
          <li>New messages</li>
          <li>Project approval or rejection</li>
          <li>Project progress</li>
          <li>Status changes</li>
          <li>Project phases</li>
          <li>Milestones</li>
          <li>Account activity</li>
          <li>Other important service events</li>
        </ul>
      </>
    ),
  },

  {
    number: "06",
    title: "Information Collected Automatically",
    content: (
      <>
        <p>
          Certain technical information may be collected automatically when
          you visit our website or use our services.
        </p>

        <p>This may include:</p>

        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Referring website</li>
          <li>Date and time of access</li>
          <li>Approximate geographic information</li>
          <li>Interaction information</li>
          <li>Technical and performance information</li>
        </ul>

        <p>
          This information may be used for security, analytics,
          troubleshooting, performance monitoring, and service improvement.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "How We Use Information",
    content: (
      <>
        <p>
          We use information we collect for purposes connected with operating,
          providing, maintaining, securing, and improving One Tech Work.
        </p>

        <p>This may include:</p>

        <ul>
          <li>Creating and managing accounts</li>
          <li>Authenticating users</li>
          <li>Providing project access</li>
          <li>Managing projects</li>
          <li>Tracking project progress</li>
          <li>Providing messaging features</li>
          <li>Sending service notifications</li>
          <li>Responding to inquiries</li>
          <li>Providing support</li>
          <li>Communicating about projects and services</li>
          <li>Maintaining security</li>
          <li>Preventing unauthorized access and misuse</li>
          <li>Improving functionality</li>
          <li>Monitoring performance</li>
          <li>Understanding website usage</li>
          <li>Maintaining business records</li>
          <li>Resolving disputes</li>
          <li>Complying with applicable law</li>
        </ul>
      </>
    ),
  },

  {
    number: "08",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          One Tech Work may use cookies, local storage, session technologies,
          and similar technologies.
        </p>

        <p>These technologies may support:</p>

        <ul>
          <li>Authentication</li>
          <li>Session management</li>
          <li>Security</li>
          <li>Login functionality</li>
          <li>Preferences</li>
          <li>Analytics</li>
          <li>Performance monitoring</li>
        </ul>

        <p>
          Depending on your browser or device, you may be able to control or
          disable certain technologies. Some functionality may not work
          correctly if required technologies are disabled.
        </p>
      </>
    ),
  },

  {
    number: "09",
    title: "Analytics",
    content: (
      <>
        <p>
          We may use Google Analytics or similar analytics technologies to
          understand how visitors interact with our website.
        </p>

        <p>Analytics information may include:</p>

        <ul>
          <li>Website visits</li>
          <li>Traffic sources</li>
          <li>Popular pages</li>
          <li>Approximate geographic information</li>
          <li>Device and browser information</li>
          <li>Engagement information</li>
          <li>General website performance</li>
        </ul>

        <p>
          Analytics helps us improve our website, services, content, and user
          experience.
        </p>

        <p>
          Third-party analytics providers may process information according to
          their own privacy policies and applicable terms.
        </p>
      </>
    ),
  },

  {
    number: "10",
    title: "Supabase and Application Infrastructure",
    content: (
      <>
        <p>
          One Tech Work uses Supabase as part of its application
          infrastructure, including authentication and database services.
        </p>

        <p>
          Information associated with accounts, projects, conversations, and
          application functionality may therefore be processed or stored
          through our application infrastructure and applicable technology
          providers.
        </p>

        <p>
          Access may be controlled through authentication, application
          authorization, database security controls, permissions, and other
          technical safeguards.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "Information Sharing",
    content: (
      <>
        <p>
          We may share or provide access to information when reasonably
          necessary to operate and provide One Tech Work services.
        </p>

        <p>
          Depending on the circumstances, information may be accessible to:
        </p>

        <ul>
          <li>You through your authenticated account</li>
          <li>Authorized One Tech Work personnel</li>
          <li>Hosting and infrastructure providers</li>
          <li>Authentication and database providers</li>
          <li>Analytics providers</li>
          <li>Security and technical service providers</li>
          <li>Professional advisors where reasonably necessary</li>
          <li>
            Government authorities or other parties where required by law
          </li>
        </ul>

        <p>
          We do not sell personal information.
        </p>
      </>
    ),
  },

  {
    number: "12",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          One Tech Work may rely on third-party providers for services such as
          hosting, cloud infrastructure, authentication, databases, analytics,
          security, communication, and technical operations.
        </p>

        <p>
          These providers may process information as necessary to provide their
          services, subject to their applicable agreements, terms, and privacy
          practices.
        </p>
      </>
    ),
  },

  {
    number: "13",
    title: "Communications",
    content: (
      <>
        <p>
          Communications through our website, application, email, WhatsApp, or
          other channels may be stored or processed so that we can respond,
          provide services, and maintain appropriate service records.
        </p>

        <p>We may contact you regarding:</p>

        <ul>
          <li>Account security</li>
          <li>Authentication</li>
          <li>Password or account matters</li>
          <li>Important service updates</li>
          <li>Project communication</li>
          <li>Customer support</li>
          <li>Other service-related notices</li>
        </ul>
      </>
    ),
  },

  {
    number: "14",
    title: "WhatsApp and Social Media",
    content: (
      <>
        <p>
          One Tech Work may provide links or integrations to third-party
          platforms such as WhatsApp, Instagram, Facebook, YouTube, and other
          social networks.
        </p>

        <p>
          Your interactions with these platforms are governed by their
          respective terms and privacy policies.
        </p>

        <p>
          One Tech Work does not control how independent third-party platforms
          collect, use, store, or process information.
        </p>
      </>
    ),
  },

  {
    number: "15",
    title: "External Websites",
    content: (
      <>
        <p>
          Our website or services may contain links to websites operated by
          third parties.
        </p>

        <p>
          Those websites may have their own privacy, security, cookie,
          and data-processing practices.
        </p>

        <p>
          We encourage you to review the privacy policy of any external website
          before providing personal information.
        </p>
      </>
    ),
  },

  {
    number: "16",
    title: "How We Protect Information",
    content: (
      <>
        <p>
          We use reasonable technical and organizational measures designed to
          protect information against unauthorized access, disclosure,
          alteration, loss, misuse, and destruction.
        </p>

        <p>
          Access is restricted according to permissions and the functionality
          required to operate our services.
        </p>

        <p>
          However, no website, application, database, or internet transmission
          can be guaranteed to be completely secure.
        </p>

        <p>
          Accordingly, we cannot guarantee absolute security of information.
        </p>
      </>
    ),
  },

  {
    number: "17",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain information for as long as reasonably necessary for the
          purposes described in this Privacy Policy.
        </p>

        <p>This may include retaining information to:</p>

        <ul>
          <li>Provide services</li>
          <li>Maintain accounts</li>
          <li>Maintain project records</li>
          <li>Maintain communication records</li>
          <li>Provide support</li>
          <li>Meet legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
          <li>Maintain security</li>
          <li>Prevent abuse or misuse</li>
        </ul>

        <p>
          When information is no longer reasonably required, it may be deleted,
          anonymized, or securely disposed of, subject to applicable legal,
          security, and operational requirements.
        </p>
      </>
    ),
  },

  {
    number: "18",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have rights relating to your
          personal information.
        </p>

        <p>These may include the ability to:</p>

        <ul>
          <li>Request access to information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of certain information</li>
          <li>Ask how information is being used</li>
          <li>Withdraw consent where applicable</li>
          <li>Raise a privacy-related complaint</li>
          <li>Request clarification about our data practices</li>
        </ul>

        <p>
          Certain requests may be subject to legal, security, technical, or
          operational limitations.
        </p>

        <p>
          We may request information necessary to verify your identity before
          processing certain requests.
        </p>
      </>
    ),
  },

  {
    number: "19",
    title: "Account Deletion",
    content: (
      <>
        <p>
          You may contact One Tech Work if you want to request deletion of your
          account or personal information associated with your account.
        </p>

        <p>
          Email:{" "}
          <a href="mailto:officialonetechwork@gmail.com">
            officialonetechwork@gmail.com
          </a>
        </p>

        <p>
          We may verify your identity before processing a deletion request.
        </p>

        <p>
          Certain information may be retained when required by law or when
          reasonably necessary for security, fraud prevention, dispute
          resolution, legitimate business records, or other lawful purposes.
        </p>
      </>
    ),
  },

  {
    number: "20",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          One Tech Work is not specifically directed toward children.
        </p>

        <p>
          We do not knowingly collect children's personal information in
          circumstances where such collection is prohibited by applicable law.
        </p>

        <p>
          If we become aware of impermissible collection, we will take
          reasonable steps to address it.
        </p>
      </>
    ),
  },

  {
    number: "21",
    title: "International Data Processing",
    content: (
      <>
        <p>
          Depending on our infrastructure and service providers, information
          may be processed or stored in countries other than the country in
          which you live.
        </p>

        <p>
          Where applicable, we take reasonable steps to handle such processing
          in accordance with relevant privacy and data-protection requirements.
        </p>
      </>
    ),
  },

  {
    number: "22",
    title: "Information We Currently Do Not Collect Through the App",
    content: (
      <>
        <p>
          The One Tech Work App currently does not provide a general
          file-management or file-upload system.
        </p>

        <p>
          The App currently does not provide in-app payment processing.
        </p>

        <p>
          If these capabilities are introduced in the future, this Privacy
          Policy may be updated to describe the relevant information practices.
        </p>
      </>
    ),
  },

  {
    number: "23",
    title: "No Sale of Personal Information",
    content: (
      <>
        <p>
          One Tech Work does not sell personal information.
        </p>

        <p>
          Information may be shared with service providers or other parties
          where reasonably necessary to operate our website, application,
          business, security systems, and services, or where required by
          applicable law.
        </p>
      </>
    ),
  },

  {
    number: "24",
    title: "Law, Security, and Protection",
    content: (
      <>
        <p>
          We may access, preserve, or disclose information where we have a
          reasonable basis to believe that doing so is necessary to:
        </p>

        <ul>
          <li>Comply with applicable law or legal process</li>
          <li>Respond to lawful government requests</li>
          <li>Enforce applicable terms and policies</li>
          <li>Investigate potential violations</li>
          <li>Detect or prevent fraud and misuse</li>
          <li>Address security or technical problems</li>
          <li>Protect our rights, property, services, or users</li>
        </ul>
      </>
    ),
  },

  {
    number: "25",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy when our website, application,
          services, technology, providers, legal requirements, privacy
          practices, or security practices change.
        </p>

        <p>
          When we make changes, we will update the "Last Updated" date shown
          on this page.
        </p>

        <p>
          We encourage you to review this Privacy Policy periodically so that
          you remain informed about our current practices.
        </p>
      </>
    ),
  },

  {
    number: "26",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions, concerns, requests, or complaints regarding
          this Privacy Policy or your personal information, you can contact
          One Tech Work.
        </p>

        <p>
          <strong>One Tech Work</strong>
        </p>

        <p>
          Website:{" "}
          <a
            href="https://onetechwork.com"
            target="_blank"
            rel="noreferrer"
          >
            https://onetechwork.com
          </a>
        </p>

        <p>
          Email:{" "}
          <a href="mailto:officialonetechwork@gmail.com">
            officialonetechwork@gmail.com
          </a>
        </p>
      </>
    ),
  },

  {
    number: "27",
    title: "Acceptance",
    content: (
      <>
        <p>
          By visiting the One Tech Work website, creating an account, or using
          the One Tech Work App or Services, you acknowledge that you have had
          an opportunity to read and understand this Privacy Policy.
        </p>

        <p>
          Where permitted by applicable law, continued use of our website, App,
          or Services after an updated Privacy Policy becomes effective may
          constitute acknowledgment of the updated policy.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        <div className="absolute -right-52 top-[35%] h-[550px] w-[550px] rounded-full bg-violet-600/[0.07] blur-[160px]" />
      </div>

      {/* Header */}
      <section className="relative z-10 px-5 pb-12 pt-32 sm:px-8 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-2 text-sm text-white/45"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            <span>One Tech Work Legal</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[76px]"
          >
            Privacy
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8"
          >
            This Privacy Policy explains how One Tech Work collects, uses,
            stores, protects, and manages information when you use our website,
            application, and services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 flex items-center gap-2 text-xs text-white/30"
          >
            <FileText className="h-4 w-4 text-cyan-300/60" />
            Last Updated: September 25, 2026
          </motion.div>
        </div>
      </section>

      {/* Policy */}
      <section className="relative z-10 px-5 pb-28 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="border-t border-white/[0.08] pt-10">
            <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
              
              {/* Side navigation */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    On this page
                  </p>

                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.number}
                        href={`#section-${section.number}`}
                        className="group flex gap-3 text-xs leading-5 text-white/30 transition-colors hover:text-cyan-200"
                      >
                        <span className="font-medium text-cyan-300/40 group-hover:text-cyan-300/70">
                          {section.number}
                        </span>

                        <span>{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Document */}
              <article className="min-w-0">
                <div className="mb-14 flex items-start gap-4">
                  <Sparkles className="mt-1 hidden h-5 w-5 shrink-0 text-cyan-300/50 sm:block" />

                  <p className="max-w-3xl text-[15px] leading-8 text-white/45 sm:text-base">
                    At One Tech Work, we aim to handle personal information
                    responsibly and transparently. This policy describes the
                    information we may collect and how it may be used while
                    providing our digital products and services.
                  </p>
                </div>

                <div className="space-y-14 sm:space-y-16">
                  {sections.map((section, index) => (
                    <motion.section
                      key={section.number}
                      id={`section-${section.number}`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{
                        once: true,
                        amount: 0.08,
                      }}
                      transition={{ duration: 0.55 }}
                      className="scroll-mt-24"
                    >
                      <div className="flex gap-5 sm:gap-7">
                        <div className="hidden w-10 shrink-0 pt-1 text-xs font-medium tracking-[0.16em] text-cyan-300/45 sm:block">
                          {section.number}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-6 flex items-baseline gap-4">
                            <span className="text-xs font-medium tracking-[0.16em] text-cyan-300/45 sm:hidden">
                              {section.number}
                            </span>

                            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[30px]">
                              {section.title}
                            </h2>
                          </div>

                          <div className="policy-content max-w-4xl text-[15px] leading-7 text-white/45 sm:text-base sm:leading-8">
                            {section.content}
                          </div>
                        </div>
                      </div>

                      {index !== sections.length - 1 && (
                        <div className="mt-14 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.035] to-transparent sm:mt-16" />
                      )}
                    </motion.section>
                  ))}
                </div>

                {/* Contact */}
                <div className="mt-20 border-t border-white/[0.08] pt-10 sm:mt-24 sm:pt-12">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/55">
                    Contact
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                    Questions about your privacy?
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                    For privacy questions, requests, concerns, or account
                    deletion requests, contact One Tech Work.
                  </p>

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href="mailto:officialonetechwork@gmail.com"
                      className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
                    >
                      <Mail className="h-4 w-4" />
                      Contact One Tech Work
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>

                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-sm text-white/35 transition hover:text-white"
                    >
                      Back to Home
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .policy-content p {
          margin-bottom: 1.25rem;
        }

        .policy-content p:last-child {
          margin-bottom: 0;
        }

        .policy-content ul {
          margin: 1rem 0 1.35rem;
          padding-left: 1.4rem;
        }

        .policy-content li {
          margin-bottom: 0.55rem;
          padding-left: 0.25rem;
        }

        .policy-content li::marker {
          color: rgb(103 232 249 / 0.5);
        }

        .policy-content h3 {
          margin-top: 2rem;
          margin-bottom: 0.85rem;
          color: rgb(255 255 255 / 0.78);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .policy-content strong {
          color: rgb(255 255 255 / 0.75);
          font-weight: 600;
        }

        .policy-content a {
          color: rgb(165 243 252 / 0.85);
          text-decoration: underline;
          text-decoration-color: rgb(165 243 252 / 0.2);
          text-underline-offset: 4px;
          transition: 200ms ease;
        }

        .policy-content a:hover {
          color: white;
          text-decoration-color: rgb(255 255 255 / 0.5);
        }
      `}</style>
    </main>
  );
}