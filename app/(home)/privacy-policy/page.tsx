import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/homepage/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy - Kurukshetra",
  description: "Learn how Kurukshetra collects, uses, and protects your personal information. Review our privacy practices and your data rights.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-red-50/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-orange-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-t-2xl">
            <div className="px-8 py-6">
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
              <p className="text-orange-100 mt-2">Last Updated: October 23, 2025</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Kurukshetra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website kuruksetra.com and any related subdomains (collectively, the "Site").
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Site. Please read this Privacy Policy carefully to understand our practices regarding your information and how we will treat it. By using our Site, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>
            
            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed">
                We may collect personal information that you voluntarily provide when interacting with our Site, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>Contact information (such as name, email address)</li>
                <li>Account credentials if you create an account</li>
                <li>Comments, feedback, and other content you provide</li>
                <li>Information provided when subscribing to newsletters</li>
                <li>Communication records when you contact us</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed">
                When you visit our Site, we may automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>Log and usage data (IP address, browser type, pages visited)</li>
                <li>Device information (hardware model, operating system)</li>
                <li>Location information (country, city)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>
            
            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>Providing, maintaining, and improving our Site</li>
                <li>Personalizing your experience on our Site</li>
                <li>Communicating with you, including responding to inquiries</li>
                <li>Sending newsletters and promotional materials (with your consent)</li>
                <li>Monitoring and analyzing usage patterns and trends</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>
            
            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Sharing Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>Service providers who perform services on our behalf</li>
                <li>Analytics providers who help us understand Site usage</li>
                <li>Legal authorities when required by law</li>
                <li>Affiliated organizations who support our mission</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent.
              </p>
            </section>
            
            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. These are sent to your browser from a website and stored on your device.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li><strong>Essential cookies:</strong> Necessary for the Site to function properly</li>
                <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count visitors and see how they move around our Site</li>
                <li><strong>Functionality cookies:</strong> Enable us to personalize content for you</li>
                <li><strong>Targeting cookies:</strong> Record your visit to our Site, pages visited, and links followed</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
              </p>
            </section>
            
            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Your Data Rights
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal data</li>
                <li>Restriction of processing of your data</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>
            
            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so that we can take necessary actions.
              </p>
            </section>
            
            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-6 bg-orange-500 rounded-full mr-3"></div>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 bg-orange-50 rounded-lg p-6 border border-orange-200">
                <p className="text-gray-800 font-medium">Kurukshetra Editorial Team</p>
                <p className="text-gray-700 mt-1">Email: <a href="mailto:kurukshetra5751@gmail.com" className="text-orange-600 hover:underline">kurukshetra5751@gmail.com</a></p>
              </div>
            </section>
            
            {/* Footer */}
            <section className="pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                By using our Site, you acknowledge that you have read this Privacy Policy and consent to its terms.
              </p>
            </section>
          </div>
        </div>
        
        {/* Back button */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-white font-medium hover:from-orange-700 hover:to-red-700 transition-all shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Return to Homepage
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;