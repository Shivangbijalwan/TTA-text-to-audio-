export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: May 2026</p>

      <p className="mb-6">
        Welcome to <strong>TTA – Text to Audio</strong> ("TTA", "we", "our", or "us"). We are
        committed to protecting your privacy. This Privacy Policy explains what information we
        collect, how we use it, and your rights regarding that information when you use our
        platform at{" "}
        <a href="https://tta-text-to-audio.vercel.app" className="text-blue-600 underline">
          https://tta-text-to-audio.vercel.app
        </a>
        .
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">1. Information We Collect</h2>

      <h3 className="text-lg font-semibold mt-6 mb-2">a) Text Input Data</h3>
      <p className="mb-4">
        When you use TTA to generate audio, the text you enter is sent to our server for
        processing. We do not permanently store your input text after audio generation is
        complete.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">b) Usage Data</h3>
      <p className="mb-4">
        We may automatically collect certain technical information when you visit TTA, including:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Pages visited and time spent</li>
        <li>Referring URLs</li>
        <li>Device type and operating system</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">c) Cookies</h3>
      <p className="mb-4">
        TTA may use cookies or similar tracking technologies to improve your experience. You can
        disable cookies in your browser settings, though some features may not function properly
        as a result.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Process your text and generate audio output</li>
        <li>Improve the performance and quality of TTA</li>
        <li>Monitor and fix technical issues</li>
        <li>Analyze usage trends to improve the platform</li>
        <li>Comply with legal obligations</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">3. Third-Party Services</h2>
      <p className="mb-4">
        TTA uses third-party services to power audio generation and hosting. These providers may
        process your data in accordance with their own privacy policies:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Vercel</strong> – Hosting and deployment (
          <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          )
        </li>
        <li>
          <strong>AI / TTS Engine</strong> – Text-to-speech processing (subject to the provider's
          data handling policies)
        </li>
      </ul>
      <p className="mb-4">
        We do not sell your data to any third party.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">4. Data Retention</h2>
      <p className="mb-4">
        We do not permanently store the text you submit or the audio files generated. Temporary
        processing data is deleted after your session ends or the audio is delivered to your
        browser.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">5. Data Security</h2>
      <p className="mb-4">
        We take reasonable technical measures to protect your information from unauthorized
        access, alteration, or disclosure. However, no method of transmission over the internet
        is 100% secure, and we cannot guarantee absolute security.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">6. Children's Privacy</h2>
      <p className="mb-4">
        TTA is not directed at children under the age of 13. We do not knowingly collect
        personal information from children. If you believe a child has provided us with personal
        data, please contact us and we will delete it promptly.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">7. Your Rights</h2>
      <p className="mb-4">Depending on your location, you may have the right to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Access the personal data we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to or restrict processing of your data</li>
        <li>Lodge a complaint with a data protection authority</li>
      </ul>
      <p className="mb-4">
        To exercise any of these rights, please contact us using the details below.
      </p>

      {/* Section 8 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with a new "Last updated" date. We encourage you to review this policy periodically.
      </p>

      {/* Section 9 */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">9. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <ul className="list-none pl-0 mb-4 space-y-1">
        <li>
          <strong>Creator:</strong> Shivang Bijalwan
        </li>
        <li>
          <strong>Website:</strong>{" "}
          <a href="https://shivang-website.vercel.app/" className="text-blue-600 underline">
            https://shivang-website.vercel.app/
          </a>
        </li>
      </ul>

      <hr className="my-10 border-gray-200" />
      <p className="text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} TTA – Text to Audio. All rights reserved.
      </p>
    </main>
  );
}