export default function Story() {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <img
            src="/android-chrome-512x512.png"
            alt="Binder"
            className="w-12 h-12 rounded-full"
          />
          <span className="ml-2 text-xl font-semibold text-gray-900">Binder</span>
        </div>
        <button
          onClick={scrollToCTA}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Binder
        </button>
      </nav> */}

      <div className="max-w-2xl mx-auto px-6 pt-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <img
              src="/android-chrome-512x512.png"
              alt="Binder"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            WhatsApp Wasn’t Built for Creators / Communities
          </h1>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            In Indonesia, most creators & communities still rely on WhatsApp.

            But deep down, we all know, it’s painful to use.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            ❌ <b>New members miss context</b> - new members have no access to old chats or announcements
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            ❌ <b>Important links & resources get buried</b> - no structured place to save them
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            ❌ <b>Conversations are messy</b> - no thread view, everyone talks at once
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            ❌ <b>Privacy issues</b> - join a group, and strangers can get your phone number
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            ❌ <b>Heavy app</b> - check your phone storage, WhatsApp is among the top 3 biggest apps on your phone
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            ❌ <b>Spam overload</b> - businesses (and strangers) can spam you endlessly
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            ❌ <b>Dumb AI</b> - Meta AI feels… useless
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            WhatsApp works for family and friends.

            But if you want to build a meaningful community, it is not the place.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">

            That's why we're building Binder ✨
          </p>

        </div>
      </div>

      {/* Image Section */}
      <div className="my-12 px-6">
        <img
          src="/sidebar expanded - admin view@2x.png"
          alt="Binder Web Version"
          className="w-full max-w-6xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 mb-8  ">
            Binder is a new home for creators & communities.

          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">

            With Binder, you can:
          </p>


          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            📚 Create groups with a built-in knowledge space (notes & courses)

          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">

            🧵 Keep discussions organized with threaded conversations

          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">

            🤖 Bring in AI agents to answer questions and collaborate (coming soon)
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Binder is still early, we’re building this together with you.
Your feedback is greatly appreciated, and it will help shape our future.
 </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">Download and try it out now!
          </p>



          <p className="text-lg leading-relaxed text-gray-700 mb-6 italic">
            — The Binder Team
          </p>

        </div>
      </div>

      {/* CTA Section */}
      <section id="cta-section" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to transform your community?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.akal.binder', '_blank')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Download on Android
              </button>
              <button
                onClick={() => window.open('https://apps.apple.com/us/app/binder-chat/id6749217579', '_blank')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Download on App Store
              </button>
            </div>
            <p className="text-xl text-blue-100 mt-4 mb-4">
              (The web version is still on progress)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <img
                src="/android-chrome-512x512.png"
                alt="Binder"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900">Binder</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-600">
              <a href="/terms" className="hover:text-gray-900">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
              <a href="/data-deletion" className="hover:text-gray-900">Data Deletion</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Binder. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}