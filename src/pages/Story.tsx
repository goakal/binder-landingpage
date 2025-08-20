export default function Story() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="ml-2 text-xl font-semibold text-gray-900">Binder</span>
        </div>
        <a 
          href="https://heybinder.com" 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Binder
        </a>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hey, let's talk about learning communities.
          </h1>
        </div>

        {/* Story Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            WhatsApp gets a bad rap, but it shouldn't. It's amazing for bringing people together — families sharing daily moments, friends staying connected, communities forming bonds.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            It feels great to get an answer from someone you care about. 
            Or a newsletter you enjoy. Or an update from a service you 
            love. That's how community chat used to feel all the time.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            But things changed when we tried to learn together.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            You started getting stuff you didn't want from people you 
            barely know. Your study groups became cluttered. Your 
            learning communities were forced to adopt other people's bad communication 
            habits. An avalanche of repeated questions amplified the 
            clutter.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            And WhatsApp, Telegram, Discord, and all the others just let 
            it happen.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Learning felt like a chore, rather than a joy. Something 
            you fall behind on. Something you scroll through, not cherish. 
            Rather than delight in knowledge sharing, you dealt with chaos. Your relationship 
            with community learning changed, and you didn't have a say.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            New members keep asking the same questions because they can't read previous chats. 
            Admins keep resharing the same links because there's no organized directory. 
            Even when you use proper learning platforms, members still ask about materials in the chat group.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            And yet, learning communities remain a wonder. Thanks to technology, people 
            across cultures, continents, countries, cities, and 
            time zones can learn together every day. It's 
            simple. It makes it easy for humans to share knowledge, 
            help millions of people grow and learn.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            There are no gatekeepers when it comes to learning together. If you have knowledge to share, and 
            they have curiosity to learn, community should just work, every time.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            So good news, the magic's still there. It's just obscured — 
            buried under a mess of modern day bad habits and neglect. 
            Rather than give up on community learning, we thought it 
            deserves better than that.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            It deserves a thoughtful renovation. Modernized for the way 
            learning communities work today.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            With Binder, we've done just that. It's a rethink, a 
            simplistic, potent reconstruction of community learning. It feels organized, the 
            way it should be.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Binder's our love letter to learning communities, and we're sending it to you. 
            Available now on the web and mobile.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6 italic">
            — The Binder Team
          </p>

          <p className="text-sm leading-relaxed text-gray-500 mb-8">
            P.S. Here are the fundamental issues we have with chat-based learning as we 
            know it.
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 my-12"></div>

          {/* Binder Logo and CTA */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Try it.</h2>
            <p className="text-lg text-gray-600 mb-6">
              To get on the list, email <strong>heybinder.com</strong> with how 
              you feel about communities. Could be a love story, or a hate story. 
              Could be long, could be short. It's your story, so it's up to you. 
              Invites will begin going out June 15th, 2024.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              We'll only use your email address to alert you if you hit the first round lottery (we 
              expect heavy demand), and if you end up getting an invitation. We'll also 
              alert you once we open it up to the public (we're not sure when that will be), 
              and maybe once more somewhere down the line to tell you about a new 
              service that we're especially excited about.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              If you don't signal, we won't send; we won't bug you constantly, and you'll know exactly 
              why we're contacting you. Promise.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-sm text-gray-600 text-center">
                Policy:<br />
                Legal and privacy questions<br />
                <a href="mailto:legal@binder.com" className="text-blue-600 hover:underline">
                  legal@binder.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}