
import { FC } from "react";
import DataDeletion from "./DataDeletion";

const DataDeletionIOS: FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Data Deletion Request
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How to Request Account Deletion
            </h2>
            <p className="mb-4">
             You have the right to request the deletion of your account and associated data. To initiate this process, please click the 'Request to delete account' button below, and confirm it.
            </p>
            
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              What Happens When You Delete Your Account
            </h2>
            <p className="mb-4">
              Deleting your account will:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Delete your account from Binder and all your devices.</li>
              <li>Erase your message history.</li>
              <li>Delete you from all of your Binder groups.</li>
              <li>Remove you as a group admin or follower, but not delete any updates you made or group interactions like reactions or poll votes.</li>
              <li>If you're a group admin, updates you've shared in group aren't deleted.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              What Data is Kept
            </h2>
            <p>
              For legal and security reasons, we may retain certain data for a
              limited period. This includes:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                Data required for legal or regulatory compliance
              </li>
              <li>
                Anonymized data for statistical purposes
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p>
              Your personal data will be permanently deleted from our systems
              within 90 days of your request. Anonymized data may be retained
              for a longer period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this process, please contact us at{" "}
              <a
                href="mailto:privacy@binder.com"
                className="text-blue-600 hover:underline"
              >
                goku@goakal.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionIOS;
