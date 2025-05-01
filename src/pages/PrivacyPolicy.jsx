import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen pt-24 bg-blue-50">
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="flex items-center mb-8">
            <Link 
              to="/" 
              className="text-blue-700 hover:text-blue-800 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
          
          <h1 className="text-5xl font-bold text-blue-800 mb-8 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="text-sm text-gray-600 mb-8 italic">
            Last updated: April 2, 2024 (compliance section revised April 30, 2025)
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              This Privacy Policy explains how Future Find ("Company," "we," "us," or "our") collects, uses, discloses, and protects your information when you use our mobile apps, websites, dashboards, and related services (collectively, the "Service"). It also describes your rights under the data-protection laws of both the United States and the European Economic Area/United Kingdom and how to exercise them.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              By accessing or using the Service, you agree to the practices described here. If you do not agree, please do not use the Service.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              1. Interpretation & Definitions
            </h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meaning</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Account</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">The profile you create to access the Service.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Affiliate</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">An entity that controls, is controlled by, or is under common control with us.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Application / Service</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">The Future Find mobile & web apps, badge system, dashboards, and any associated tools.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Company</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Future Find, Country United States (Illinois).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Device</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Any internet-enabled device (phone, tablet, laptop, desktop).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Personal Data</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Information relating to an identified or identifiable individual.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service Provider</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">A natural or legal person processing data on our behalf.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Usage Data</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Data collected automatically from the Service or Device (e.g., IP address).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">You / User</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">The individual or organization using the Service.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              2. Collecting & Using Your Personal Data
            </h2>
            
            <h3 className="text-xl font-medium text-blue-700 mb-3">
              2.1 Types of Data We Collect
            </h3>
            
            <h4 className="text-lg font-medium text-blue-600 mb-2">Personal Data you give us</h4>
            <p className="text-gray-700 mb-4 leading-relaxed pl-4">
              Name, e-mail, school or organization, location (city/region), areas of interest, résumé details you choose to upload, and any other info you add to your profile.
            </p>
            
            <h4 className="text-lg font-medium text-blue-600 mb-2">Volunteer & Internship Activity Data</h4>
            <p className="text-gray-700 mb-4 leading-relaxed pl-4">
              Opportunities you view, save, apply to, or complete; badges earned; hours logged; reflections you post on the dashboard.
            </p>
            
            <h4 className="text-lg font-medium text-blue-600 mb-2">Usage Data (automatically collected)</h4>
            <p className="text-gray-700 mb-4 leading-relaxed pl-4">
              Device identifiers, IP address, browser type & version, OS, time-zone, referring URLs, page interactions, crash logs, and diagnostic data.
            </p>
            
            <h4 className="text-lg font-medium text-blue-600 mb-2">Communication Data</h4>
            <p className="text-gray-700 mb-4 leading-relaxed pl-4">
              Messages, support tickets, e-mails, in-app chats, and survey responses.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed pl-4">
              No fitness/exercise data is collected; the "Exercise Data" section in the source template does not apply to Future Find.
            </p>
            
            <h3 className="text-xl font-medium text-blue-700 mb-3">
              2.2 Cookies & Similar Technologies
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We use first-party cookies and limited third-party analytics (e.g., Firebase) to understand usage and improve performance. You can manage cookies in your browser; EU/UK users also see the consent banner required by the ePrivacy Directive.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              3. Legal Bases for Processing (GDPR, UK GDPR)
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We rely on one or more of the following bases under Article 6 GDPR:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Contract</strong> – to provide and maintain the Service you requested.</li>
              <li><strong>Consent</strong> – for optional marketing e-mails or when required before we place non-essential cookies. You may withdraw consent at any time.</li>
              <li><strong>Legitimate Interests</strong> – to secure our Service, prevent fraud, and improve features (balanced against your rights).</li>
              <li><strong>Legal Obligation</strong> – to comply with laws or court orders.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              4. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide & maintain the Service, match you with relevant volunteer or internship opportunities, and display your progress on the dashboard.</li>
              <li>Manage your Account and authenticate you.</li>
              <li>Communicate important updates, opportunity deadlines, or support responses.</li>
              <li>Improve features, badges, and matching algorithms through aggregated analytics.</li>
              <li>Security & fraud prevention.</li>
              <li>Compliance with applicable laws and protection of our legal rights.</li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We do not "sell" or "share" Personal Data for cross-context behavioral advertising as those terms are defined in the CPRA and similar U.S. state laws.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              5. Disclosure of Your Personal Data
            </h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scenario</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typical Recipients</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Service operations</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Cloud hosting, analytics, e-mail and push-notification providers (bound by contract).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Opportunity partners</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Non-profits, companies, or schools offering positions you voluntarily apply to.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Legal reasons</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Courts, regulators, or law-enforcement when required.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business transfers</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Successor entities in mergers, acquisitions, or asset sales (with notice to you).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              6. Data Retention
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We retain Personal Data only as long as necessary for the purposes above, including statutory retention under tax, contract, or education regulations. Usage Data used for analytics is usually deleted or de-identified within 24 months.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              7. International Transfers
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are headquartered in the U.S.; data may be processed in the U.S. or other countries where our providers operate. For transfers from the EEA/UK, we rely on:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>EU Standard Contractual Clauses (SCCs) or the UK International Data Transfer Addendum;</li>
              <li>supplementary measures recommended by the European Data Protection Board.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              8. Your Privacy Rights
            </h2>
            
            <h3 className="text-xl font-medium text-blue-700 mb-3">
              8.1 EU/UK (GDPR)
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Access, rectification, erasure ("right to be forgotten"), restriction, portability, objection, and automated-decision rights.</li>
              <li>Lodge a complaint with your local Data Protection Authority.</li>
            </ul>
            
            <h3 className="text-xl font-medium text-blue-700 mb-3">
              8.2 United States
            </h3>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Rights</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">California (CCPA/CPRA)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Access, deletion, correction, portability, opt-out of sale/share, limit use of sensitive data, no retaliation.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Montana (MCDPA), New Jersey (NJDPA), Tennessee (TIPA), Iowa (IA CDPA), Delaware (DPDPA), Nebraska (NDPA), New Hampshire (NHPA), Oregon (OCPA), Minnesota (MN CDPA), Maryland (MODPA) and other enacted laws</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Similar rights to access, delete, correct, and opt-out of targeted ads or profiling.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              We honor the Global Privacy Control (GPC) signal and other universal opt-out mechanisms as required.
            </p>
            
            <h3 className="text-xl font-medium text-blue-700 mb-3">
              8.3 How to Exercise Your Rights
            </h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>In-app: Settings › Privacy</li>
              <li>E-mail: <a href="mailto:RUR@future-find.org" className="text-blue-600 hover:underline">RUR@future-find.org</a></li>
            </ul>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We will verify your request and respond within the timeframe required by law (usually 30–45 days). Authorized agents may submit requests with proper documentation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              9. Children's & Student Data
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed">
              <strong>Under 13:</strong> The Service is not directed to children under 13; we do not knowingly collect data from them (COPPA compliance).
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>Students 13–18:</strong> Schools may create Accounts under FERPA "school official" exceptions. Data is used solely to provide educational services (e.g., tracking service hours) and is never used for marketing or sold to third parties. Parental consent is obtained where required.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              10. Security of Your Personal Data
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We employ industry-standard safeguards (encryption in transit & at rest, least-privilege, routine penetration tests). No system is 100% secure; please protect your credentials.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              11. Links to Other Websites
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Third-party opportunity listings may link to external sites we do not control. Review the privacy practices of those sites before providing information.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              12. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We may update this Policy periodically. We will post the new version and, where material, notify you via e-mail or in-app notice at least 30 days before changes take effect. The "Last updated" date will change accordingly.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              13. Contact Us
            </h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              E-mail: <a href="mailto:RUR@future-find.org" className="text-blue-600 hover:underline">RUR@future-find.org</a>
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mail: Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              14. Do Not Sell or Share My Personal Information (California & equivalent states)
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Because we do not sell or share Personal Data for cross-context behavioral advertising, this section is provided for completeness. If our practices change, we will update this Policy and provide the requisite opt-out links.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Quick Reference
            </h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Collecting Data</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Lists exactly what we gather (profile, activity, usage).</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Legal Bases</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Shows our GDPR justification.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Your Rights</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Explains how EU/UK and U.S. residents can access, delete, or restrict their data.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Retention & Security</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Details how long we keep data and how we protect it.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Thank you for trusting Future Find. If you have any privacy questions, reach out any time at <a href="mailto:RUR@future-find.org" className="text-blue-600 hover:underline">RUR@future-find.org</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 