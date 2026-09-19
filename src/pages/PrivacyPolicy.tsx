import LegalPage from "@/components/LegalPage";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function PrivacyPolicy() {
  usePageMeta(
    "Privacy Policy | Binder",
    "How Binder collects, uses, shares, and protects your information."
  );

  return (
    <LegalPage title="Privacy Policy" effectiveDate="EFFECTIVE SEPTEMBER 19, 2026">
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
          <p className="text-base leading-7 text-slate-600 mb-6">
            Google user data is an exception to this list. We use it only to provide the feature you asked for. See <strong>Google User Data</strong> below, which has precedence for that data.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Chat Security and Encryption</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            All chats and content sent through Binder are encrypted in transit and at rest. We implement robust security measures, including access controls and regular security reviews, to protect your information from unauthorized access.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Sharing Your Information</h2>
          <p className="text-base leading-7 text-slate-600 mb-4">
            We do not sell your personal information. We may share it:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="text-base leading-7 text-slate-600">With third-party service providers that help us operate the app (hosting, analytics, customer support).</li>
            <li className="text-base leading-7 text-slate-600">With advertising platforms, to measure how our ads perform. See <strong>Cookies and Advertising on Our Website</strong> below for exactly what this covers and what it does not.</li>
            <li className="text-base leading-7 text-slate-600">To comply with legal obligations or respond to lawful requests.</li>
          </ul>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We never share data from your Google Account with an advertising platform, and we never sell it. See <strong>Google User Data</strong> below.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Third-Party Services</h2>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Service Providers We Use</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            We work with third-party service providers who help us with things like hosting and infrastructure, communications, analytics, and other operational needs. These providers can change over time as we improve the App. Each one only receives the information needed to perform its function and isn't permitted to use it for its own purposes.
          </p>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Some features use automation or AI, which can include third-party AI providers, to generate content or responses. The content a feature needs is sent to the provider to produce your result. We never use your content to train our own models.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Legal Requirements</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We will only disclose your personal information if required to do so by law or in response to a valid legal request, such as a court order or government investigation, or to protect the rights, property, or safety of Binder, our users, or the public.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Google User Data</h2>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Binder can connect to your Google Account if you choose to. This section covers data received from Google APIs ("Google user data") and has precedence over the rest of this policy for that data.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">What We Access</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            With your consent, and only for the services you connect:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-base leading-7 text-slate-600"><strong>Gmail:</strong> to read, search, draft, and send your mail in Binder.</li>
            <li className="text-base leading-7 text-slate-600"><strong>Google Calendar:</strong> to see, create, and change your events in Binder.</li>
            <li className="text-base leading-7 text-slate-600"><strong>Google Drive, Docs, and Sheets:</strong> to find, open, and attach your files in Binder.</li>
          </ul>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We request the smallest set of permissions each feature needs. Google's consent screen shows them before you agree.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">How We Use It</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Only to provide the features above. We do not use Google user data for advertising, profiling, general analytics or market research, personalization outside the feature, or marketing messages, and we do not use it to train, fine-tune, or improve any AI or machine-learning model. We do not sell it or transfer it to data brokers.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">AI Features</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            Where a feature uses AI on Google user data, the content it needs is sent to an AI provider only to produce your result. No generalized AI or machine-learning model is developed or improved with it.
          </p>
          <p className="text-base leading-7 text-slate-600 mb-4">
            Binder lets you choose an AI provider for some features. Google user data is an exception: only the approved providers below receive it, and only at that provider's own API endpoint. A provider is approved only if its API terms, on the plan and the account settings Binder uses, forbid training on the content it receives.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="text-base leading-7 text-slate-600"><strong>OpenAI</strong> (OpenAI Platform API, <code>api.openai.com</code>). OpenAI does not use API inputs or outputs to train its models.</li>
            <li className="text-base leading-7 text-slate-600"><strong>DeepSeek</strong> (DeepSeek Open Platform API, <code>api.deepseek.com</code>). Model improvement is switched off on the account Binder uses, so DeepSeek does not train on the content.</li>
          </ul>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Each request goes to that provider directly. We do not send Google user data through an aggregator, a gateway, a model hub, or a proxy, because the model behind such a service and its data retention are not known to us. If you set your agent to a different provider or a different endpoint, Binder does not give it the Google tools and the Google features stay unavailable. The App enforces this and it cannot be turned off.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Human Access</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            No one at Binder reads your Google user data, except with your explicit consent, for security purposes, to comply with applicable law, or where the data is aggregated and anonymized for internal operations.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Transfers</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We transfer Google user data only to you in the App; to the service providers that host and operate these features, as necessary to provide them and for no other purpose; at your explicit direction; to comply with applicable law; or in a merger or sale of assets, after notice and your explicit consent. We never transfer it to an advertising platform. The Meta Pixel described below is on our marketing website only and never receives it.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Retention and Deletion</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            We store your Google tokens encrypted and keep only the content a feature needs. You can disconnect in Binder settings or at{" "}
            <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">myaccount.google.com/permissions</a>
            . On disconnect we delete the tokens immediately and any cached Google content within 30 days. Deleting your Binder account deletes all of it — see{" "}
            <a href="https://heybinder.com/data-deletion" className="text-slate-600 hover:text-slate-900 transition-colors">heybinder.com/data-deletion</a>.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Limited Use</h3>
          <p className="text-base leading-7 text-slate-600 mb-6">
            Binder's use and transfer of information received from Google APIs to any other app adheres to the{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">Google API Services User Data Policy</a>
            , including the Limited Use requirements.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-slate-900">Cookies and Advertising on Our Website</h2>
          <p className="text-base leading-7 text-slate-600 mb-4">
            This section is about our marketing website at heybinder.com only. It does not describe the Binder app itself, and nothing here gives anyone access to your messages, notes, any other content you create in Binder, or any data from your Google Account.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">The Meta Pixel</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            Our website uses the Meta Pixel, a measurement tool provided by Meta Platforms (Facebook, Instagram). It records which of our pages you view, and when you click a button that opens the Binder web app or one of the app stores. To do that it stores cookies in your browser, named <code>_fbp</code> and <code>_fbc</code>. If you arrived from one of our ads, the link you clicked also carries campaign identifiers, which we keep in your browser's local storage so we can tell which ad brought you here.
          </p>
          <p className="text-base leading-7 text-slate-600 mb-4">
            We use this for one purpose: to measure whether our advertising works, and to see which of our pages lead people to create an account. We do not use it to build a profile of you, and we do not sell this information.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Registration Events</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            If you create a Binder account after arriving from one of our ads, our servers send Meta a "registration" event together with those campaign identifiers, so the ad can be credited. Where that event includes your email address or phone number, it is irreversibly hashed with SHA-256 before it leaves our systems. Meta never receives it in readable form, and we never send your name, your profile, or anything you have written in Binder.
          </p>

          <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-900">Meta's Own Use, and Your Choices</h3>
          <p className="text-base leading-7 text-slate-600 mb-4">
            Meta also processes this data for its own purposes, as an independent controller. What it does with it is governed by its own policy, which you can read at{" "}
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">facebook.com/privacy/policy</a>
            . You can review and limit how Meta uses data for advertising in your Meta ad settings at{" "}
            <a href="https://accountscenter.facebook.com/ads" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">accountscenter.facebook.com/ads</a>.
          </p>
          <p className="text-base leading-7 text-slate-600 mb-6">
            You can block or delete these cookies at any time in your browser settings, or use your browser's tracking protection. The website and the Binder app both work normally without them. The campaign information we store alongside your account is deleted when your account is deleted — see{" "}
            <a href="https://heybinder.com/data-deletion" className="text-slate-600 hover:text-slate-900 transition-colors">heybinder.com/data-deletion</a>.
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
