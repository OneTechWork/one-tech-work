"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    number: "01",
    title: "Scope of This Privacy Policy",
    body: (
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
          <li>Our website analytics and related technologies</li>
          <li>Other services or interactions operated by One Tech Work</li>
        </ul>
        <p>
          This Privacy Policy does not necessarily apply to third-party websites
          or services that may be accessible through links on our website or
          App.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Information We Collect",
    body: (
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
          This information is used to create, maintain, authenticate, and secure
          your account.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Project Information",
    body: (
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
          <li>
            Other information you voluntarily provide regarding the project
          </li>
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
    body: (
      <>
        <p>
          If you use messaging or conversation features within the One Tech Work
          App, we may collect and store:
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
    body: (
      <>
        <p>
          The One Tech Work App may generate notifications related to activities
          such as:
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
    body: (
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
    body: (
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
    body: (
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
    body: (
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
    body: (
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
    body: (
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
    body: (
      <>
        <p>
          One Tech Work uses Supabase as part of its application infrastructure,
          including services such as authentication and database storage.
        </p>

        <p>
          Information associated with your One Tech Work account, projects,
          conversations, or other App functionality may be stored using our
          application infrastructure and applicable third-party technology
          providers.
        </p>

        <p>
          Access to application data may additionally be controlled through:
        </p>

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
    body: (
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
    body: (
      <>
        <p>
          Depending on the circumstances, your information may be accessible to:
        </p>

        <ul>
          <li>You, through your authenticated account</li>
          <li>
            Authorized One Tech Work personnel who require access to provide the
            Service
          </li>
          <li>Technology and service providers supporting our operations</li>
          <li>Hosting and infrastructure providers</li>
          <li>Authentication and database providers</li>
          <li>Analytics providers</li>
          <li>Security and technical service providers</li>
          <li>Professional advisors where reasonably necessary</li>
          <li>
            Government authorities or other parties where disclosure is required
            by applicable law
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
    body: (
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
    body: (
      <>
        <p>
          If you communicate with One Tech Work through our website, App, email,
          WhatsApp, or other communication channels, information contained in
          those communications may be stored or processed so that we can respond
          and provide our services.
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
    body: (
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
          One Tech Work does not control how third-party platforms collect, use,
          store, or process information.
        </p>
      </>
    ),
  },
  {
    number: "18",
    title: "External Websites",
    body: (
      <>
        <p>Our website may contain links to third-party websites.</p>

        <p>These websites are independently operated and may have their own:</p>

        <ul>
          <li>Privacy policies</li>
          <li>Terms of service</li>
          <li>Cookies</li>
          <li>Security practices</li>
          <li>Data-processing practices</li>
        </ul>

        <p>
          One Tech Work is not responsible for the privacy or security practices
          of third-party websites.
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
    body: (
      <>
        <p>
          We retain personal information for as long as reasonably necessary to:
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
    body: (
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
    body: (
      <>
        <p>
          If you would like to delete your One Tech Work account or request
          deletion of personal information associated with your account, please
          contact us.
        </p>

        <p>
          <strong>Email:</strong>{" "}
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
    body: (
      <>
        <p>
          Our website and App are not specifically directed toward children.
        </p>

        <p>
          We do not knowingly collect personal information from children in
          circumstances where such collection is prohibited by applicable law.
        </p>

        <p>
          If we become aware that personal information has been collected from a
          child in circumstances where collection is not permitted, we will take
          reasonable steps to address the situation.
        </p>
      </>
    ),
  },
  {
    number: "23",
    title: "International Data Processing",
    body: (
      <>
        <p>
          Depending on the infrastructure and third-party service providers used
          to operate our website and App, your information may be processed or
          stored in countries other than the country in which you reside.
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
    body: (
      <>
        <p>One Tech Work does not sell your personal information.</p>

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
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in:
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
          When changes are made, we will update the “Last Updated” date at the
          top of this Privacy Policy.
        </p>

        <p>You should periodically review this page for the latest version.</p>
      </>
    ),
  },
  {
    number: "26",
    title: "Contact Us",
    body: (
      <>
        <p>
          If you have questions, concerns, requests, or complaints regarding
          this Privacy Policy or your personal information, please contact us.
        </p>

        <div className="contact-details">
          <strong>One Tech Work</strong>

          <a
            href="https://onetechwork.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            onetechwork.com
          </a>

          <a href="mailto:officialonetechwork@gmail.com">
            officialonetechwork@gmail.com
          </a>
        </div>

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
    body: (
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
  const [activeSection, setActiveSection] = useState("01");

  useEffect(() => {
    const elements = sections
      .map(({ number }) => document.getElementById(`privacy-${number}`))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveSection(visible[0].target.id.replace("privacy-", ""));
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="privacy-container">
          <div className="eyebrow">
            <span>LEGAL</span>
            <i />
            <span>01</span>
          </div>

          <h1>
            Privacy
            <br />
            <span>Policy.</span>
          </h1>

          <p className="hero-description">
            How One Tech Work collects, uses, protects, and manages information
            across our website, application, and services.
          </p>

          <div className="hero-meta">
            <div>
              <span>LAST UPDATED</span>
              <strong>September 25, 2026</strong>
            </div>

            <div>
              <span>WEBSITE</span>
              <strong>onetechwork.com</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-main">
        <div className="privacy-container privacy-grid">
          <aside className="privacy-index">
            <div className="index-title">CONTENTS</div>

            <nav aria-label="Privacy Policy sections">
              {sections.map((section) => (
                <a
                  key={section.number}
                  href={`#privacy-${section.number}`}
                  className={activeSection === section.number ? "active" : ""}
                >
                  <span>{section.number}</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="privacy-document">
            <div className="document-intro">
              <span>ONE TECH WORK</span>

              <p>
                We believe privacy should be clear, transparent, and easy to
                understand. The following policy explains the information we
                handle when you interact with One Tech Work.
              </p>
            </div>

            {sections.map((section) => (
              <article
                key={section.number}
                id={`privacy-${section.number}`}
                className="privacy-section"
              >
                <div className="section-marker">
                  <span>{section.number}</span>
                </div>

                <div className="section-copy">
                  <h2>{section.title}</h2>

                  <div className="section-body">{section.body}</div>
                </div>
              </article>
            ))}

            <div className="privacy-end">
              <span>ONE TECH WORK</span>

              <h2>
                One Vision.
                <br />
                One Solution.
                <br />
                One Future.
              </h2>

              <Link href="/" className="home-link">
                Back to Home
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .privacy-page {
            --privacy-bg: #050505;
            --privacy-text: #f5f5f5;
            --privacy-muted: rgba(245, 245, 245, 0.56);
            --privacy-soft: rgba(245, 245, 245, 0.34);
            --privacy-border: rgba(245, 245, 245, 0.09);
            --privacy-purple: #8b6cff;

            min-height: 100vh;
            background: var(--privacy-bg);
            color: var(--privacy-text);
            overflow: hidden;
          }

          .privacy-container {
            width: min(1240px, calc(100% - 64px));
            margin: 0 auto;
          }

          .privacy-hero {
            position: relative;
            min-height: 650px;
            display: flex;
            align-items: center;
            padding: 140px 0 110px;
            overflow: hidden;
            border-bottom: 1px solid var(--privacy-border);
          }

          .hero-orb {
            position: absolute;
            width: 620px;
            height: 620px;
            border-radius: 50%;
            pointer-events: none;
            filter: blur(130px);
            opacity: 0.13;
          }

          .hero-orb-one {
            top: -390px;
            right: -120px;
            background: #7047ff;
          }

          .hero-orb-two {
            left: -420px;
            bottom: -480px;
            background: #3159ff;
          }

          .eyebrow {
            position: relative;
            display: flex;
            align-items: center;
            gap: 13px;
            margin-bottom: 38px;
            color: rgba(255, 255, 255, 0.45);
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.22em;
            animation: privacyFadeUp 700ms ease both;
          }

          .eyebrow i {
            width: 42px;
            height: 1px;
            display: block;
            background: rgba(255, 255, 255, 0.2);
          }

          .privacy-hero h1 {
            position: relative;
            margin: 0;
            max-width: 950px;
            font-size: clamp(72px, 11vw, 148px);
            line-height: 0.84;
            letter-spacing: -0.075em;
            font-weight: 500;
            animation: privacyFadeUp 800ms 80ms ease both;
          }

          .privacy-hero h1 span {
            color: rgba(255, 255, 255, 0.28);
          }

          .hero-description {
            position: relative;
            max-width: 650px;
            margin: 48px 0 0;
            color: var(--privacy-muted);
            font-size: 17px;
            line-height: 1.8;
            animation: privacyFadeUp 800ms 160ms ease both;
          }

          .hero-meta {
            position: relative;
            display: flex;
            gap: 80px;
            margin-top: 64px;
            padding-top: 25px;
            border-top: 1px solid var(--privacy-border);
            animation: privacyFadeUp 800ms 240ms ease both;
          }

          .hero-meta div {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .hero-meta span,
          .index-title,
          .document-intro > span,
          .privacy-end > span {
            color: var(--privacy-soft);
            font-size: 9px;
            font-weight: 600;
            letter-spacing: 0.2em;
          }

          .hero-meta strong {
            color: rgba(255, 255, 255, 0.78);
            font-size: 13px;
            font-weight: 500;
          }

          .privacy-main {
            padding: 110px 0 130px;
          }

          .privacy-grid {
            display: grid;
            grid-template-columns: 210px minmax(0, 1fr);
            gap: 100px;
            align-items: start;
          }

          .privacy-index {
            position: sticky;
            top: 32px;
          }

          .index-title {
            margin-bottom: 22px;
          }

          .privacy-index nav {
            display: flex;
            flex-direction: column;
            max-height: calc(100vh - 80px);
            overflow-y: auto;
            scrollbar-width: none;
          }

          .privacy-index nav::-webkit-scrollbar {
            display: none;
          }

          .privacy-index a {
            display: grid;
            grid-template-columns: 30px minmax(0, 1fr);
            gap: 8px;
            padding: 8px 0;
            color: rgba(255, 255, 255, 0.28);
            text-decoration: none;
            font-size: 10px;
            line-height: 1.4;
            transition:
              color 220ms ease,
              transform 220ms ease;
          }

          .privacy-index a span:first-child {
            color: rgba(255, 255, 255, 0.18);
            transition: color 220ms ease;
          }

          .privacy-index a:hover,
          .privacy-index a.active {
            color: rgba(255, 255, 255, 0.86);
            transform: translateX(3px);
          }

          .privacy-index a:hover span:first-child,
          .privacy-index a.active span:first-child {
            color: var(--privacy-purple);
          }

          .document-intro {
            max-width: 720px;
            margin-bottom: 105px;
          }

          .document-intro p {
            margin: 18px 0 0;
            color: var(--privacy-muted);
            font-size: 16px;
            line-height: 1.85;
          }

          .privacy-section {
            display: grid;
            grid-template-columns: 55px minmax(0, 1fr);
            gap: 28px;
            padding-bottom: 105px;
            margin-bottom: 105px;
            border-bottom: 1px solid var(--privacy-border);
            scroll-margin-top: 45px;
          }

          .section-marker {
            padding-top: 7px;
          }

          .section-marker span {
            color: rgba(139, 108, 255, 0.7);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
          }

          .section-copy h2 {
            margin: 0 0 28px;
            color: rgba(255, 255, 255, 0.94);
            font-size: clamp(30px, 3.2vw, 48px);
            line-height: 1.04;
            letter-spacing: -0.045em;
            font-weight: 500;
          }

          .section-body {
            color: var(--privacy-muted);
            font-size: 15px;
            line-height: 1.9;
          }

          .section-body p {
            margin: 0 0 21px;
          }

          .section-body p:last-child {
            margin-bottom: 0;
          }

          .section-body h3 {
            margin: 40px 0 17px;
            color: rgba(255, 255, 255, 0.82);
            font-size: 18px;
            line-height: 1.3;
            font-weight: 500;
            letter-spacing: -0.02em;
          }

          .section-body ul {
            margin: 0 0 23px;
            padding-left: 20px;
          }

          .section-body li {
            margin: 7px 0;
            padding-left: 5px;
          }

          .section-body li::marker {
            color: rgba(139, 108, 255, 0.72);
          }

          .section-body strong {
            color: rgba(255, 255, 255, 0.82);
            font-weight: 500;
          }

          .section-body a {
            color: #a995ff;
            text-decoration: none;
            border-bottom: 1px solid rgba(169, 149, 255, 0.25);
            transition: border-color 180ms ease;
          }

          .section-body a:hover {
            border-color: #a995ff;
          }

          .contact-details {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin: 30px 0;
            padding: 25px 27px;
            border-left: 1px solid rgba(139, 108, 255, 0.6);
            background: rgba(255, 255, 255, 0.018);
          }

          .contact-details strong {
            margin-bottom: 3px;
          }

          .contact-details a {
            width: fit-content;
          }

          .privacy-end {
            position: relative;
            overflow: hidden;
            padding: 52px;
            border: 1px solid var(--privacy-border);
            background:
              radial-gradient(
                circle at 90% 15%,
                rgba(112, 71, 255, 0.13),
                transparent 34%
              ),
              rgba(255, 255, 255, 0.015);
          }

          .privacy-end h2 {
            margin: 18px 0 45px;
            max-width: 650px;
            font-size: clamp(36px, 5vw, 68px);
            line-height: 0.98;
            letter-spacing: -0.055em;
            font-weight: 500;
          }

          .home-link {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            color: rgba(255, 255, 255, 0.78);
            font-size: 12px;
            text-decoration: none;
            transition:
              color 180ms ease,
              gap 180ms ease;
          }

          .home-link span {
            font-size: 15px;
          }

          .home-link:hover {
            color: #fff;
            gap: 16px;
          }

          @keyframes privacyFadeUp {
            from {
              opacity: 0;
              transform: translateY(22px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .eyebrow,
            .privacy-hero h1,
            .hero-description,
            .hero-meta {
              animation: none;
            }

            .privacy-index a,
            .home-link,
            .section-body a {
              transition: none;
            }
          }

          @media (max-width: 950px) {
            .privacy-container {
              width: min(100% - 48px, 1240px);
            }

            .privacy-hero {
              min-height: auto;
              padding: 115px 0 85px;
            }

            .privacy-grid {
              grid-template-columns: 1fr;
              gap: 55px;
            }

            .privacy-index {
              position: relative;
              top: auto;
            }

            .privacy-index nav {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              grid-auto-flow: row;
              column-gap: 30px;
              max-height: 300px;
            }

            .document-intro {
              margin-bottom: 80px;
            }
          }

          @media (max-width: 600px) {
            .privacy-container {
              width: calc(100% - 32px);
            }

            .privacy-hero {
              padding: 88px 0 68px;
            }

            .eyebrow {
              margin-bottom: 30px;
            }

            .privacy-hero h1 {
              font-size: clamp(62px, 19vw, 90px);
            }

            .hero-description {
              margin-top: 32px;
              font-size: 15px;
              line-height: 1.75;
            }

            .hero-meta {
              flex-direction: column;
              gap: 20px;
              margin-top: 45px;
            }

            .privacy-main {
              padding: 68px 0 85px;
            }

            .privacy-index nav {
              grid-template-columns: 1fr;
              max-height: 245px;
            }

            .privacy-index a {
              padding: 7px 0;
            }

            .document-intro {
              margin-bottom: 65px;
            }

            .document-intro p {
              font-size: 15px;
            }

            .privacy-section {
              grid-template-columns: 1fr;
              gap: 11px;
              padding-bottom: 65px;
              margin-bottom: 65px;
              scroll-margin-top: 25px;
            }

            .section-marker {
              padding-top: 0;
            }

            .section-copy h2 {
              margin-bottom: 21px;
              font-size: 31px;
            }

            .section-body {
              font-size: 14.5px;
              line-height: 1.82;
            }

            .section-body h3 {
              margin-top: 32px;
            }

            .privacy-end {
              padding: 32px 25px;
            }

            .privacy-end h2 {
              margin-bottom: 38px;
              font-size: 39px;
            }
          }
        `}
      </style>
    </main>
  );
}
