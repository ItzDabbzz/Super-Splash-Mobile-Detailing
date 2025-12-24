import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-8 animate-fade-in">

        {/* Logo / Brand */}
        <div className="text-3xl font-bold tracking-wide text-white">
          Super Splash Mobile Detailing LLC
        </div>

        {/* Before / After Image */}
        <div className="mt-4 animate-slide-up flex items-center justify-center">
          <img
            src='/before-and-after-1.webp'
            alt="Before and after auto detailing results"
            className="w-1/2 rounded-2xl shadow-lg
               hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-extrabold animate-slide-up">
          Thank You!
        </h1>

        <p className="text-neutral-300 text-lg animate-slide-up delay-100">
          Your request has been received. We’ll be reaching out shortly to
          confirm your auto detailing appointment.
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-800 animate-fade-in delay-200" />

        {/* Next Steps */}
        <div className="space-y-2 text-neutral-400 animate-slide-up delay-300">
          <p>✔ One of our specialists will contact you</p>
          <p>✔ Get ready for a spotless, showroom-quality finish</p>
        </div>

        {/* Contact Area */}
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4 animate-slide-up delay-500">
          <h2 className="text-lg font-semibold text-white">
            Need Immediate Assistance?
          </h2>

          <div className="space-y-2 text-neutral-300 text-sm">
            <p>
              📞 <a href="tel:+17723067025" className="hover:text-white transition">
                (772) 306-7025
              </a>
            </p>
            <p>
              ✉️ <a href="mailto:supersplashmd@gmail.com" className="hover:text-white transition">
                supersplashmd@gmail.com
              </a>
            </p>
            <p>📍 Mobile Service — We Come To You</p>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 animate-slide-up delay-700">
          <a
            href="/"
            className="inline-block rounded-xl bg-white text-neutral-900 px-6 py-3 font-semibold
                       hover:bg-neutral-200 hover:scale-105 transition-transform duration-200"
          >
            Back to Home
          </a>
        </div>

        {/* Footer */}
        <p className="text-xs text-neutral-500 pt-6 animate-fade-in delay-1000">
          © {new Date().getFullYear()} Super Splash Mobile Detailing LLC. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default App
