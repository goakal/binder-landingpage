import LegalPage from "@/components/LegalPage";

export default function Terms() {
  return (
    <LegalPage title="Terms and Conditions" effectiveDate="EFFECTIVE 28 JULY 2025">
          <p className="text-base leading-7 text-slate-600 mb-6">
            Welcome to Binder, a chat-based community app ("Binder," "we," "us," or "our"). By downloading, installing, or using our mobile application ("App"), you agree to comply with and be bound by these Terms and Conditions ("Terms") and our Privacy Policy. Please read them carefully before using our services.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">1. Acceptance of Terms</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            By using Binder, you accept and agree to be bound by these Terms. If you disagree with any part, you must discontinue use immediately.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">2. Eligibility</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            You must be at least 13 years old to use Binder. Users under 18 must have parental or guardian permission.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">3. User Accounts</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-base leading-7 text-slate-600">You are responsible for safeguarding your account credentials.</li>
            <li className="text-base leading-7 text-slate-600">You agree to provide accurate and complete information and keep it updated.</li>
            <li className="text-base leading-7 text-slate-600">Notify us immediately of any unauthorized access or security breaches.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">4. User Conduct</h2>
          <p className="text-base leading-7 text-slate-600 mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-base leading-7 text-slate-600">Engage in harmful, abusive, or offensive behavior.</li>
            <li className="text-base leading-7 text-slate-600">Post, share, or distribute illegal, defamatory, or inappropriate content.</li>
            <li className="text-base leading-7 text-slate-600">Use Binder for spam, unauthorized advertisements, or scams.</li>
            <li className="text-base leading-7 text-slate-600">Violate applicable laws or third-party rights.</li>
          </ul>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We reserve the right to remove content and suspend accounts violating these rules.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">5. Intellectual Property</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-base leading-7 text-slate-600">Binder retains ownership of all intellectual property rights related to the App and its content.</li>
            <li className="text-base leading-7 text-slate-600">You may not copy, modify, distribute, or sell any part of our App without prior written consent.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">6. Privacy Policy</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Your privacy is important to us. Please review our Privacy Policy at <a href="https://heybinder.com/privacy" className="text-slate-600 hover:text-slate-900 transition-colors">heybinder.com/privacy</a> to understand how we handle your information.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">7. Third-party Services</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Our App may contain links to third-party websites or services. We are not responsible for their content, practices, or policies.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">8. Disclaimers</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Binder is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">9. Limitation of Liability</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            To the fullest extent permitted by law, Binder shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the App.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">10. Changes to Terms</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Continued use of the App indicates acceptance of revised Terms.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">11. Termination</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We may terminate or suspend your account immediately, without prior notice, if you breach these Terms.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">12. Dispute Resolution</h2>
          <div className="mb-6">
            <p className="text-base leading-7 text-slate-600 mb-4">
              Any disputes arising from these Terms and Conditions shall be resolved through amicable negotiation.
              If a resolution cannot be reached, the dispute shall be settled in accordance with the laws of the Republic of Indonesia.
            </p>
          </div>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">13. Governing Law</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            These Terms are governed by the laws of Indonesia, without regard to conflict of law principles.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">14. Contact Information</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            For questions regarding these Terms, please contact us at: goku@goakal.com
          </p>

          <p className="text-base leading-7 text-slate-600 mt-10 font-semibold text-center">
            Thank you for using Binder!
          </p>
    </LegalPage>
  );
}
