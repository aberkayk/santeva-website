import { Container } from "@/components/shared/container";

export const metadata = {
  title: "Privacy Policy | Santeva",
  description: "Privacy Policy for Santeva — learn how Paklino LLC collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: March 4, 2026
          </p>

          <p>
            Paklino LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Santeva website
            (the &ldquo;Site&rdquo;). This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our Site.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            1. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Personal Information
          </h3>
          <p>
            We may collect personally identifiable information that you
            voluntarily provide to us when you subscribe to our newsletter,
            fill out a contact form, or otherwise contact us. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold text-text-primary mt-6 mb-3">
            Automatically Collected Information
          </h3>
          <p>
            When you visit the Site, we may automatically collect certain
            information about your device, including your IP address, browser
            type, operating system, referring URLs, and information about how
            you interact with the Site. We may collect this information using
            cookies and similar tracking technologies.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p>We may use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate, maintain, and improve our Site</li>
            <li>Send you newsletters and marketing communications (with your consent)</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Monitor and analyze usage and trends to improve your experience</li>
            <li>Protect against fraudulent or unauthorized activity</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share your information
              with third-party vendors who perform services on our behalf, such
              as email delivery and website analytics.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required to do so by law or in response to valid
              requests by public authorities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            4. Cookies and Tracking Technologies
          </h2>
          <p>
            We may use cookies, web beacons, and similar tracking technologies
            to collect information about your browsing activity. You can
            instruct your browser to refuse all cookies or to indicate when a
            cookie is being sent. However, some features of the Site may not
            function properly without cookies.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            5. Third-Party Links
          </h2>
          <p>
            Our Site may contain links to third-party websites, including
            Amazon.com. We are not responsible for the privacy practices or
            content of these external sites. We encourage you to review the
            privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            6. Data Security
          </h2>
          <p>
            We implement reasonable administrative, technical, and physical
            security measures to protect your personal information. However, no
            method of transmission over the Internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Our Site is not intended for children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If we become aware that we have collected such information, we will
            take steps to delete it promptly.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            8. Your Rights
          </h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, delete, or restrict the processing of your personal
            information. To exercise any of these rights, please contact us
            using the information below.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &ldquo;Last updated&rdquo; date. Your continued use of the
            Site after any changes constitutes your acceptance of the updated
            policy.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            10. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            <strong>Paklino LLC</strong>
            <br />
            Email: paklinollc@gmail.com
          </p>
        </div>
      </Container>
    </div>
  );
}
