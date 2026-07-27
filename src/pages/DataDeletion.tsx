
import { FC } from "react";
import LegalPage from "@/components/LegalPage";

const DataDeletion: FC = () => {
  return (
    <LegalPage title="Data Deletion Request">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              How to Request Account Deletion
            </h2>
            <p className="mb-4">
              You have the right to request the deletion of your account and
              associated data. To initiate this process, please follow these
              steps:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Send an email to{" "}
                <a
                  href="mailto:goku@goakal.com"
                  className="text-blue-600 hover:underline"
                >
                  goku@goakal.com
                </a>{" "}
                from the email address associated with your account.
              </li>
              <li>
                Use the subject line: "Account Deletion Request".
              </li>
              <li>
                Include your phone number, username and any other relevant account information
                to help us identify your account.
              </li>
            </ol>
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
    </LegalPage>
  );
};

export default DataDeletion;
