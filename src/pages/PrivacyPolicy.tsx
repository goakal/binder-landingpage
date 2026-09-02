import LegalPage from "@/components/LegalPage";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | Binder",
    "How Binder collects, uses, shares, and protects your information."
  );

  return (
    <LegalPage title="Privacy Policy" effectiveDate="EFFECTIVE AUGUST 31, 2026">
          <p className="text-base leading-7 text-slate-600 mb-6">
            Welcome to Binder. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use Binder's mobile and web application (the "App").
          </p>

          <p className="text-base leading-7 text-slate-600 mb-6">
            By using Binder, you consent to the practices described in this Privacy Policy. If you don't agree with this policy, please don't use the App.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Information We Collect</h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Account & Profile Information</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            When you sign up, Binder asks for a name, username, and either an email address or phone number, which we verify with a one-time code. Binder doesn't use passwords. You can also add a profile photo and other optional profile details, and we may collect basic device information, such as your timezone, to support features that depend on it. If you choose to link your Binder account with another account you hold with us, some account and profile information may be shared between them.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Content You Share</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            We store the content you create and share in the App, such as messages and other materials you send or post, including text, photos, videos, audio, and documents. This can include content shared through features that use automation or AI to help you communicate.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Groups and Connections</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            Binder stores the groups you create or join and your role in them. You can connect with other people by searching for their username or by sharing an invite link. Binder does not access, upload, or store your device's contact list.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Device Permissions</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            Binder may request the following device permissions. Each is optional and only asked for when you use a feature that needs it:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-base leading-7 text-slate-600">Camera and Photo Library: to let you add photos or videos within the App.</li>
            <li className="text-base leading-7 text-slate-600">Microphone: to support audio-based features.</li>
            <li className="text-base leading-7 text-slate-600">Notifications: to alert you about relevant activity.</li>
            <li className="text-base leading-7 text-slate-600">Location: only if you actively choose to share it within a conversation. Binder does not track your location in the background.</li>
          </ul>
          <p className="text-base leading-7 text-slate-600 mb-6">
            You can review or turn off any of these permissions at any time in your device settings.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Usage & Device Data</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We automatically collect some technical information when you use Binder, such as device and app information, IP address, and diagnostic logs, along with information about how you interact with the App.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">How We Use Your Information</h2>
          <p className="text-base leading-7 text-slate-600 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-base leading-7 text-slate-600">Provide, operate, and maintain the App's features.</li>
            <li className="text-base leading-7 text-slate-600">Support communication and notification features.</li>
            <li className="text-base leading-7 text-slate-600">Support features that use automation or AI, where you choose to use them.</li>
            <li className="text-base leading-7 text-slate-600">Personalize and improve your experience and understand how the App is used.</li>
            <li className="text-base leading-7 text-slate-600">Communicate with you, including customer support, app updates, and, where permitted, product announcements.</li>
            <li className="text-base leading-7 text-slate-600">Maintain the security of the App, detect abuse or fraud, and enforce our Terms and Conditions.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Chat Security and Encryption</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We implement robust security measures to protect your information.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Sharing Your Information</h2>
          <p className="text-base leading-7 text-slate-600 mb-4">
            We do not sell your personal information. We may share it:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-base leading-7 text-slate-600">With third-party service providers that help us operate the app (hosting, analytics, customer support).</li>
            <li className="text-base leading-7 text-slate-600">To comply with legal obligations or respond to lawful requests.</li>
          </ul>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Third-Party Services</h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Service Providers We Use</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            We work with third-party service providers who help us with things like hosting and infrastructure, communications, analytics, and other operational needs. These providers can change over time as we improve the App. Each one only receives the information needed to perform its function and isn't permitted to use it for its own purposes.
          </p>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Some features in the App may use automation or AI, which can include third-party AI providers, to help generate content or responses. If you use those features, related content may be processed accordingly.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Legal Requirements</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We will only disclose your personal information if required to do so by law or in response to a valid legal request, such as a court order or government investigation, or to protect the rights, property, or safety of Binder, our users, or the public.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Data Retention</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We retain your personal data for as long as your account is active, and afterwards for as long as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. If you request deletion of your account (see Your Rights below, or{" "}
            <a href="https://heybinder.com/data-deletion" className="text-slate-600 hover:text-slate-900 transition-colors">heybinder.com/data-deletion</a>
            ), we permanently delete your personal data within 90 days. Content you shared with others may remain visible to them afterwards, consistent with our Data Deletion page. We may keep anonymized or aggregated data for longer for statistical purposes.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Your Rights</h2>
          <p className="text-base leading-7 text-slate-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-base leading-7 text-slate-600">Access and update your personal information. Most profile fields can be edited directly in the App.</li>
            <li className="text-base leading-7 text-slate-600">Request deletion of your account and personal data.</li>
            <li className="text-base leading-7 text-slate-600">Withdraw your consent for processing your data where we rely on consent.</li>
            <li className="text-base leading-7 text-slate-600">Control app permissions at any time in your device settings.</li>
          </ul>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Please contact us at goku@goakal.com to exercise your rights.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Children's Privacy</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Binder is not intended for use by children under the age of 13, and users under 18 need permission from a parent or guardian, consistent with our Terms and Conditions. We do not knowingly collect personal data from children under 13. If we become aware that we've collected personal data from a child under 13, we will take steps to delete it.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">International Data Transfers</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Binder and the service providers we work with may store and process information in countries other than your own. By using the App, you understand that your information may be transferred to, and processed in, a country with different data protection laws than your own.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Changes to this Privacy Policy</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We may update this Privacy Policy from time to time. You are encouraged to periodically review this policy. Changes become effective when posted here.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Contact Us</h2>
          <p className="text-base leading-7 text-slate-600 mb-4">
            For any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-base leading-7 text-slate-600 mb-6">
            <strong>Binder App Team</strong><br />
            goku@goakal.com
          </p>
    </LegalPage>
  );
}
