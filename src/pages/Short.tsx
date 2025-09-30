import React from 'react';
import FeaturesSection from '@/components/FeaturesSection';
import { useMobile } from '@/hooks/use-mobile';

const ShortPage = () => {
  const isMobile = useMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header
        className="bg-[#4f46e5] text-white text-center py-12 px-4 relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <img
            src="/android-chrome-512x512.png"
            alt="Binder Logo"
            className="w-20 h-20 mx-auto mb-6 rounded-full shadow-lg"
          />

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            AI-Powered Messaging App for Creators & Communities
          </h1>

          {/* Screenshot */}
          <div className="mt-12 px-12">
            <img
              src={isMobile ? "/mobilemockup.png" : "/sidebar expanded - admin view@2x.png"}
              alt="Binder Screenshot"
              className={`mx-auto rounded-xl animate-subtle-float ${isMobile ? 'max-w-sm' : 'w-full'}`}
            />
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Binder?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            
<p className="text-lg leading-relaxed mb-6">
              Most creators & communities still rely on WhatsApp.

            But deep down, we all know, it’s painful to use.  </p>
            <p className="text-lg leading-relaxed mb-6">
              ❌ <b>New members miss context</b> - new members have no access to old chats or announcements
            </p>
            <p className="text-lg leading-relaxed mb-6">
              ❌ <b>Important links & resources get buried</b> - no structured place to save them
            </p>
            <p className="text-lg leading-relaxed mb-6">
              ❌ <b>Conversations are messy</b> - no thread view, everyone talks at once
            </p>
            <p className="text-lg leading-relaxed mb-6">
              ❌ <b>Privacy issues</b> - join a group, and strangers can get your phone number
            </p>
            <p className="text-lg leading-relaxed mb-6">
              ❌ <b>Heavy app</b> - check your phone storage, WhatsApp is among the top 3 biggest apps on your phone
            </p>
            <p className="text-lg leading-relaxed mb-6">
              ❌ <b>Spam overload</b> - businesses (and strangers) can spam you endlessly
            </p>
            <p className="text-lg leading-relaxed mb-8">
              ❌ <b>Dumb AI</b> - Meta AI feels… useless
            </p>

            <p className="text-lg leading-relaxed mb-6">
            WhatsApp works for family and friends. But if you want to build a meaningful community, it is not the place.
            </p>
            <p className="text-lg leading-relaxed font-semibold">
            That's why we're building Binder ✨
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Join Binder Today
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          A new home for creators & communities. Available on Web, iOS, and Android.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://web.heybinder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Use on Web
          </a>
          <a
            href="https://apps.apple.com/us/app/binder-chat/id6749217579"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-transform transform hover:scale-105 shadow-md"
          >
            Download on App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.akal.binder"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Get it on Google Play
          </a>
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
};

export default ShortPage;
