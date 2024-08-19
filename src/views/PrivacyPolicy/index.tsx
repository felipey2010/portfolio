import SEO from '@/components/SEO'

function PrivacyPolicyView() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for this platform"
      />
      <div className="w-full mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About This Site</h2>
          <p>
            Welcome to my portfolio website! This platform showcases the work,
            skills, and experience in my web development career and other
            creative endeavors. We value your privacy and aim to be transparent
            about the data we collect and how it is used.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Cookies We Use</h2>
          <p>
            To enhance your experience on our site, we use cookies for the
            following purposes:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              <strong>Theme Preference:</strong> We store your theme preference
              (light or dark mode) in a cookie to maintain a consistent look and
              feel across your visits.
            </li>
            <li>
              <strong>Analytics:</strong> We may use cookies to collect data
              about how you interact with the site. This helps us improve the
              content and functionality.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
          <p>
            We collect minimal data to enhance your experience. The data
            collected is limited to information necessary for the operation of
            the site, such as your theme preference and analytics data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Privacy Rights</h2>
          <p>
            You have the right to access, modify, or delete any personal data we
            may hold. If you have any concerns or requests regarding your data,
            please contact us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically for the latest information on our
            privacy practices.
          </p>
        </section>
      </div>
    </>
  )
}

export default PrivacyPolicyView
