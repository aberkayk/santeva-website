import { Container } from "@/components/shared/container";

export const metadata = {
  title: "Terms of Service | Santeva",
  description: "Terms of Service for Santeva — the terms and conditions governing your use of the Santeva website operated by Paklino LLC.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary mb-2">
            Terms of Service
          </h1>
          <p className="text-text-secondary mb-8">
            Last updated: March 4, 2026
          </p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
            the Santeva website (the &ldquo;Site&rdquo;) operated by Paklino LLC
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the Site, you agree
            to be bound by these Terms. If you do not agree with any part of
            these Terms, you must not use the Site.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            1. Use of the Site
          </h2>
          <p>
            You may use the Site only for lawful purposes and in accordance
            with these Terms. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Site in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>Interfere with or disrupt the integrity or performance of the Site</li>
            <li>Use any automated system to access the Site without our permission</li>
            <li>Transmit any viruses, malware, or other harmful code</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            2. Intellectual Property
          </h2>
          <p>
            The Site and its entire contents, features, and functionality
            (including but not limited to text, graphics, logos, images, and
            software) are owned by Paklino LLC and are protected by United
            States and international copyright, trademark, and other
            intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, or otherwise exploit any content from the
            Site without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            3. Product Information
          </h2>
          <p>
            The Site provides information about Santeva products. While we
            strive to ensure accuracy, we do not warrant that product
            descriptions, images, pricing, or other content on the Site is
            accurate, complete, or current. Product purchases are made through
            third-party platforms (such as Amazon), and those transactions are
            governed by the respective platform&apos;s terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            4. Third-Party Links
          </h2>
          <p>
            The Site may contain links to third-party websites or services,
            including Amazon.com. We are not responsible for the content,
            privacy policies, or practices of any third-party sites. Your use
            of third-party sites is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            5. Disclaimer of Warranties
          </h2>
          <p>
            THE SITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS
            WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
            INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted, secure, or
            error-free, or that any defects will be corrected.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            6. Limitation of Liability
          </h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, PAKLINO LLC SHALL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
            INCURRED DIRECTLY OR INDIRECTLY, ARISING FROM YOUR USE OF THE
            SITE.
          </p>
          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED ONE HUNDRED
            U.S. DOLLARS ($100).
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            7. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless Paklino LLC and
            its officers, directors, employees, and agents from any claims,
            damages, losses, liabilities, and expenses (including reasonable
            attorneys&apos; fees) arising out of your use of the Site or violation
            of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            8. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States, without regard to conflict of law
            principles. Any disputes arising under these Terms shall be
            resolved in the courts located in the United States.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            9. Changes to These Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. We will
            notify you of any changes by posting the updated Terms on this
            page and updating the &ldquo;Last updated&rdquo; date. Your continued use of
            the Site after any changes constitutes your acceptance of the
            revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            10. Severability
          </h2>
          <p>
            If any provision of these Terms is held to be invalid or
            unenforceable, the remaining provisions shall continue in full
            force and effect.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-10 mb-4">
            11. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at:
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
