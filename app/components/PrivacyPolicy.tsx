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
    title: "Scope of This Privacy Policy",
    content: (
      <>
        <p>This Privacy Policy applies to information collected through:</p>

        <ul>
          <li>The One Tech Work website</li>
          <li>The One Tech Work App</li>
          <li>Client and user accounts</li>
          <li>Project management features</li>
          <li>Messaging and conversations</li>
          <li>Contact forms and inquiries</li>
          <li>Customer support communications</li>
          <li>Website analytics and related technologies</li>
          <li>Other services or interactions operated by One Tech Work</li>
        </ul>

        <p>
          This Privacy Policy does not necessarily apply to third-party
          websites or services that may be accessible through links on our
          website or App.
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
          We may collect information that you voluntarily provide to us,
          information generated through your use of our services, and certain
          technical information collected automatically.
        </p>

        <h3>2.1 Account Information</h3>

        <p>When you create or use a One Tech Work account, we may collect:</p>

        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Account credentials and authentication information</li>
          <li>Profile information you choose to provide</li>
          <li>Account creation information</li>
          <li>Account security information</li>
          <li>Authentication and session-related information</li>
        </ul>

        <p>
          This information is used to create, maintain, authenticate, and
          secure your account.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Project Information",
    content: (
      <>
        <p>
          When you create, manage, or participate in a project through the One
          Tech Work App, we may collect information such as:
        </p>

        <ul>
          <li>Project name</li>
          <li>Project description</li>
          <li>Project requirements</li>
          <li>Project type</li>
          <li>Reference URL</li>
          <li>Additional project details</li>
          <li>Project status</li>
          <li>Project progress</li>
          <li>Project phase</li>
          <li>Project milestones</li>
          <li>Project-related updates</li>
          <li>Other information you voluntarily provide regarding the project</li>
        </ul>

        <p>
          This information allows us to provide project management,
          communication, progress tracking, and client-service functionality.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Messages and Conversations",
    content: (
      <>
        <p>
          If you use messaging or conversation features within the One Tech
          Work App, we may collect and store:
        </p>

        <ul>
          <li>Messages you send and receive</li>
          <li>Conversation information</li>
          <li>Message timestamps</li>
          <li>Read/unread status</li>
          <li>Message-related metadata</li>
          <li>Other information associated with your conversations</li>
        </ul>

        <p>
          This information is used to provide communication between clients and
          authorized One Tech Work personnel.
        </p>

        <p>
          We do not intentionally make private project conversations publicly
          available.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Notifications",
    content: (
      <>
        <p>
          The One Tech Work App may generate notifications related to
          activities such as:
        </p>

        <ul>
          <li>New messages</li>
          <li>Project approval or rejection</li>
          <li>Project progress updates</li>
          <li>Project status changes</li>
          <li>Project phase changes</li>
          <li>Milestone updates</li>
          <li>Account-related events</li>
          <li>Other important project or service events</li>
        </ul>

        <p>
          Notifications may contain information related to your account,
          projects, or conversations.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Website Contact and Inquiry Information",
    content: (
      <>
        <p>
          When you contact One Tech Work through our website or other
          communication channels, you may voluntarily provide:
        </p>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>WhatsApp number</li>
          <li>Business or organization name</li>
          <li>Project requirements</li>
          <li>Website or application requirements</li>
          <li>Messages</li>
          <li>Reference links</li>
          <li>Other information you choose to provide</li>
        </ul>

        <p>
          We use this information to respond to inquiries, understand project
          requirements, provide services, and communicate with you.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Information Collected Automatically",
    content: (
      <>
        <p>
          When you visit our website or use our services, certain technical
          information may be collected automatically.
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
          <li>Website interaction information</li>
          <li>Technical and performance information</li>
        </ul>

        <p>
          This information may be used for website security, analytics,
          troubleshooting, performance monitoring, and improving our services.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Information We Currently Do Not Collect Through the App",
    content: (
      <>
        <p>
          The One Tech Work App currently does not provide a general
          file-management or file-upload system.
        </p>

        <p>
          The App also does not currently provide an in-app payment processing
          system.
        </p>

        <p>
          If these features are introduced in the future, this Privacy Policy
          may be updated accordingly.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We may use collected information to:</p>

        <ul>
          <li>Create and manage user accounts</li>
          <li>Authenticate users</li>
          <li>Provide access to projects</li>
          <li>Manage project information</li>
          <li>Display project progress and milestones</li>
          <li>Provide messaging and communication features</li>
          <li>Send relevant account and project notifications</li>
          <li>Respond to inquiries</li>
          <li>Provide customer support</li>
          <li>Communicate about projects and services</li>
          <li>Maintain application and website security</li>
          <li>
            Detect and prevent unauthorized access, fraud, abuse, or misuse
          </li>
          <li>Improve website and application functionality</li>
          <li>Monitor and improve performance</li>
          <li>Analyze website usage</li>
          <li>Maintain business and service records</li>
          <li>Resolve disputes</li>
          <li>Comply with applicable legal requirements</li>
        </ul>

        <p>
          We aim to use personal information for legitimate purposes connected
          with operating, maintaining, securing, and improving our services.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          Our website and App may use cookies, local storage, session
          technologies, and similar technologies.
        </p>

        <p>These technologies may be used for:</p>

        <ul>
          <li>Authentication</li>
          <li>Session management</li>
          <li>Security</li>
          <li>Maintaining login sessions</li>
          <li>Website functionality</li>
          <li>Remembering preferences</li>
          <li>Analytics</li>
          <li>Performance monitoring</li>
        </ul>

        <p>
          You may be able to control or disable certain cookies through your
          browser or device settings. Disabling certain technologies may affect
          some functionality.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Google Analytics and Website Analytics",
    content: (
      <>
        <p>
          We may use Google Analytics or similar analytics services to
          understand how visitors interact with our website.
        </p>

        <p>Analytics information may include:</p>

        <ul>
          <li>Website visits</li>
          <li>Traffic sources</li>
          <li>Popular pages</li>
          <li>Approximate geographic information</li>
          <li>Device information</li>
          <li>Browser information</li>
          <li>Engagement and interaction data</li>
          <li>General website performance information</li>
        </ul>

        <p>
          Analytics information helps us understand website usage and improve
          our website, services, content, and user experience.
        </p>

        <p>
          Third-party analytics providers may process information according to
          their own privacy policies and applicable terms.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Supabase and Data Storage",
    content: (
      <>
        <p>
          One Tech Work uses Supabase as part of its application
          infrastructure, including services such as authentication and
          database storage.
        </p>

        <p>
          Information associated with your One Tech Work account, projects,
          conversations, or other App functionality may be stored using our
          application infrastructure and applicable third-party technology
          providers.
        </p>

        <p>Access to application data may additionally be controlled through:</p>

        <ul>
          <li>Authentication</li>
          <li>Application-level authorization</li>
          <li>Database security controls</li>
          <li>Access permissions</li>
          <li>Other appropriate technical safeguards</li>
        </ul>

        <p>
          Third-party providers may process information according to their
          applicable privacy and security practices.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "How We Store and Protect Your Information",
    content: (
      <>
        <p>
          We use reasonable technical and organizational measures designed to
          protect personal information against:
        </p>

        <ul>
          <li>Unauthorized access</li>
          <li>Unauthorized disclosure</li>
          <li>Unauthorized alteration</li>
          <li>Loss</li>
          <li>Misuse</li>
          <li>Destruction</li>
        </ul>

        <p>
          Access to information is restricted according to account permissions
          and the functionality required to operate our services.
        </p>

        <p>
          However, no website, application, database, or internet transmission
          can be guaranteed to be completely secure.
        </p>

        <p>
          Therefore, while we take reasonable measures to protect your
          information, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Who Can Access Your Information",
    content: (
      <>
        <p>
          Depending on the circumstances, your information may be accessible
          to:
        </p>

        <ul>
          <li>You, through your authenticated account</li>
          <li>
            Authorized One Tech Work personnel who require access to provide
            the service
          </li>
          <li>Technology and service providers supporting our operations</li>
          <li>Hosting and infrastructure providers</li>
          <li>Authentication and database providers</li>
          <li>Analytics providers</li>
          <li>Security and technical service providers</li>
          <li>Professional advisors where reasonably necessary</li>
          <li>
            Government authorities or other parties where disclosure is
            required by applicable law
          </li>
        </ul>

        <p>
          We do not intentionally make private project or conversation
          information publicly available.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          One Tech Work may rely on trusted third-party providers for certain
          aspects of our website, App, and business operations.
        </p>

        <p>These services may include:</p>

        <ul>
          <li>Authentication</li>
          <li>Database infrastructure</li>
          <li>Hosting</li>
          <li>Cloud infrastructure</li>
          <li>Analytics</li>
          <li>Security services</li>
          <li>Communication services</li>
          <li>Technical services</li>
        </ul>

        <p>
          Third-party providers may process information only as necessary to
          provide their services to us, subject to their applicable terms,
          agreements, and privacy practices.
        </p>
      </>
    ),
  },
  {
    number: "16",
    title: "Communications",
    content: (
      <>
        <p>
          If you communicate with One Tech Work through our website, App,
          email, WhatsApp, or other communication channels, information
          contained in those communications may be stored or processed so that
          we can respond and provide our services.
        </p>

        <p>
          We may use your email address or other contact information for
          important communications, including:
        </p>

        <ul>
          <li>Account security</li>
          <li>Authentication-related communication</li>
          <li>Password or account-related communication</li>
          <li>Important service updates</li>
          <li>Project-related communication</li>
          <li>Customer support</li>
          <li>Other service-related notices</li>
        </ul>

        <p>
          We do not use private project conversations for unrelated advertising
          purposes.
        </p>
      </>
    ),
  },
  {
    number: "17",
    title: "WhatsApp and Social Media",
    content: (
      <>
        <p>
          Our website or services may contain links to or integrations with
          third-party platforms, including:
        </p>

        <ul>
          <li>WhatsApp</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>YouTube</li>
          <li>Other social media platforms</li>
        </ul>

        <p>
          If you interact with these platforms, your interaction may be subject
          to the privacy policies and terms of those respective platforms.
        </p>

        <p>
          One Tech Work does not control how third-party platforms collect,
          use, store, or process information.
        </p>
      </>
    ),
  },
  {
    number: "18",
    title: "External Websites",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites.
        </p>

        <p>These websites are independently operated and may have their own:</p>

        <ul>
          <li>Privacy policies</li>
          <li>Terms of service</li>
          <li>Cookies</li>
          <li>Security practices</li>
          <li>Data-processing practices</li>
        </ul>

        <p>
          One Tech Work is not responsible for the privacy or security
          practices of third-party websites.
        </p>

        <p>
          We encourage you to review the privacy policies of external websites
          before providing personal information.
        </p>
      </>
    ),
  },
  {
    number: "19",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal information for as long as reasonably necessary
          to:
        </p>

        <ul>
          <li>Provide our services</li>
          <li>Maintain your account</li>
          <li>Maintain project records</li>
          <li>Maintain communication records</li>
          <li>Provide customer support</li>
          <li>Meet legal or regulatory obligations</li>
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
    number: "20",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have rights regarding your
          personal information, including the right to:
        </p>

        <ul>
          <li>Request access to your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of certain information</li>
          <li>Request information about how your information is used</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Raise a privacy-related complaint</li>
          <li>Request clarification regarding our data practices</li>
        </ul>

        <p>
          Some requests may be subject to legal, security, technical, or
          operational limitations.
        </p>

        <p>
          To exercise an applicable privacy right, contact us using the contact
          information provided below.
        </p>

        <p>
          We may need to verify your identity before processing certain
          requests.
        </p>
      </>
    ),
  },
  {
    number: "21",
    title: "Account Deletion",
    content: (
      <>
        <p>
          If you would like to delete your One Tech Work account or request
          deletion of personal information associated with your account,
          please contact us.
        </p>

        <p>
          Email:{" "}
          <a href="mailto:officialonetechwork@gmail.com">
            officialonetechwork@gmail.com
          </a>
        </p>

        <p>
          We may request information necessary to verify your identity before
          processing an account deletion request.
        </p>

        <p>
          Certain information may be retained where required by law or where
          reasonably necessary for legitimate business, security,
          dispute-resolution, fraud-prevention, or record-keeping purposes.
        </p>
      </>
    ),
  },
  {
    number: "22",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Our website and App are not specifically directed toward children.
        </p>

        <p>
          We do not knowingly collect personal information from children in
          circumstances where such collection is prohibited by applicable law.
        </p>

        <p>
          If we become aware that personal information has been collected from
          a child in circumstances where collection is not permitted, we will
          take reasonable steps to address the situation.
        </p>
      </>
    ),
  },
  {
    number: "23",
    title: "International Data Processing",
    content: (
      <>
        <p>
          Depending on the infrastructure and third-party service providers
          used to operate our website and App, your information may be
          processed or stored in countries other than the country in which you
          reside.
        </p>

        <p>
          Where applicable, we take reasonable steps to ensure that such
          processing is handled in accordance with applicable privacy and
          data-protection requirements.
        </p>
      </>
    ),
  },
  {
    number: "24",
    title: "No Sale of Personal Information",
    content: (
      <>
        <p>
          One Tech Work does not sell your personal information.
        </p>

        <p>
          We may share information with service providers and other parties
          where reasonably necessary to operate our website, App, business,
          security systems, or services, or where required by applicable law.
        </p>
      </>
    ),
  },
  {
    number: "25",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in:
        </p>

        <ul>
          <li>Our website</li>
          <li>One Tech Work App</li>
          <li>Our services</li>
          <li>Technology</li>
          <li>Third-party service providers</li>
          <li>Applicable laws</li>
          <li>Privacy practices</li>
          <li>Security practices</li>
        </ul>

        <p>
          When changes are made, we will update the "Last Updated" date at the
          top of this Privacy Policy.
        </p>

        <p>
          You should periodically review this page for the latest version.
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
          this Privacy Policy or your personal information, please contact us.
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
            onetechwork.com
          </a>
        </p>

        <p>
          Email:{" "}
          <a href="mailto:officialonetechwork@gmail.com">
            officialonetechwork@gmail.com
          </a>
        </p>

        <p>
          We will make reasonable efforts to respond to privacy-related
          inquiries in a timely manner.
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
          By visiting our website, creating an account, or using the One Tech
          Work App or Services, you acknowledge that you have read and
          understood this Privacy Policy.
        </p>

        <p>
          Where applicable, your continued use of our website, App, or Services
          after an updated Privacy Policy becomes effective constitutes
          acknowledgment of the updated policy, subject to applicable law.
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
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, 45, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-24 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, -50, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-[38%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]"
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-5 pb-14 pt-36 sm:px-8 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-xl sm:text-sm"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            <span>Your Privacy Matters</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]"
          >
            Privacy
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              Policy.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
          >
            This Privacy Policy explains how One Tech Work collects, uses,
            stores, protects, and manages information when you use our
            website, application, and services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 flex items-center gap-2 text-xs text-white/30"
          >
            <FileText className="h-4 w-4 text-cyan-300/70" />
            <span>Last Updated: September 25, 2026</span>
          </motion.div>
        </div>
      </section>

      {/* Document */}
      <section className="relative z-10 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="border-t border-white/[0.08] pt-10 sm:pt-12"
          >
            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 hidden h-5 w-5 shrink-0 text-cyan-300/70 sm:block" />

              <p className="max-w-4xl text-base leading-8 text-white/50 sm:text-[17px]">
                At One Tech Work, we aim to handle personal information
                responsibly and transparently. This policy describes the
                information we may collect and the ways in which it may be used
                while providing our digital products and services.
              </p>
            </div>
          </motion.div>

          <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
            {sections.map((section, index) => (
              <motion.section
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.015, 0.1),
                }}
                className="relative"
              >
                <div className="flex gap-5 sm:gap-7">
                  <div className="hidden w-10 shrink-0 pt-1 text-xs font-medium tracking-[0.18em] text-cyan-300/55 sm:block">
                    {section.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-6 flex items-baseline gap-4 sm:gap-5">
                      <span className="text-xs font-medium tracking-[0.18em] text-cyan-300/55 sm:hidden">
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
                  <div className="mt-14 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent sm:mt-16" />
                )}
              </motion.section>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 border-t border-white/[0.08] pt-10 sm:mt-24 sm:pt-12"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/60">
              Questions?
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Need more information?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
              If you have questions, concerns, requests, or complaints about
              your privacy or personal information, our team is available to
              help.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:officialonetechwork@gmail.com"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-100"
              >
                <Mail className="h-4 w-4" />
                Contact One Tech Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <Link
                href="/"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white"
              >
                Back to Home
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030305] to-transparent" />

      <style jsx>{`
        .policy-content p {
          margin: 0 0 1.25rem;
        }

        .policy-content p:last-child {
          margin-bottom: 0;
        }

        .policy-content ul {
          margin: 1rem 0 1.35rem;
          padding-left: 1.35rem;
        }

        .policy-content li {
          margin-bottom: 0.55rem;
          padding-left: 0.25rem;
        }

        .policy-content li::marker {
          color: rgb(103 232 249 / 0.55);
        }

        .policy-content h3 {
          margin: 2rem 0 0.9rem;
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
          transition: color 200ms ease,
            text-decoration-color 200ms ease;
        }

        .policy-content a:hover {
          color: white;
          text-decoration-color: rgb(255 255 255 / 0.5);
        }
      `}</style>
    </main>
  );
}