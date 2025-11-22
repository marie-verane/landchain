import React, { useState } from "react";
import { Shield, QrCode, Users, ChevronRight, Menu, X } from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-[#111827]">
                <span className="text-[#10B981]">Land</span>Chain
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-[#4B5563] hover:text-[#10B981] transition-colors font-medium"
              >
                Fonctionnalités
              </a>
              <a
                href="#about"
                className="text-[#4B5563] hover:text-[#10B981] transition-colors font-medium"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-[#4B5563] hover:text-[#10B981] transition-colors font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/auth/signin"
                className="px-4 py-2 text-[#4B5563] hover:text-[#10B981] transition-colors font-medium"
              >
                Se connecter
              </a>
              <a
                href="/auth/signup"
                className="px-6 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-medium"
              >
                S'inscrire
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#4B5563]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#E5E7EB]">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#features"
                className="block text-[#4B5563] hover:text-[#10B981] transition-colors font-medium"
              >
                Fonctionnalités
              </a>
              <a
                href="#about"
                className="block text-[#4B5563] hover:text-[#10B981] transition-colors font-medium"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="block text-[#4B5563] hover:text-[#10B981] transition-colors font-medium"
              >
                Contact
              </a>
              <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
                <a
                  href="/auth/signin"
                  className="block w-full text-center px-4 py-2 text-[#4B5563] border border-[#E5E7EB] rounded-xl hover:bg-[#F9FAFB] transition-colors font-medium"
                >
                  Se connecter
                </a>
                <a
                  href="/auth/signup"
                  className="block w-full text-center px-4 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-medium"
                >
                  S'inscrire
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-semibold text-[#111827] leading-tight mb-6">
                Sécurisez vos titres fonciers grâce à la
                <span className="text-[#10B981]"> blockchain</span>
              </h1>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                LandChain révolutionne la gestion immobilière en transformant
                vos titres de propriété en NFTs sécurisés et vérifiables sur la
                blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/auth/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold text-lg"
                >
                  Commencer gratuitement
                  <ChevronRight size={20} className="ml-2" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E5E7EB] text-[#111827] rounded-xl hover:border-[#10B981] hover:text-[#10B981] transition-colors font-semibold text-lg"
                >
                  Voir la démo
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#10B981]/10 to-[#059669]/5 rounded-3xl p-8 lg:p-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-[#4B5563]">
                      Titre de Propriété
                    </div>
                    <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center">
                      <Shield size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-[#E5E7EB] rounded w-3/4"></div>
                    <div className="h-3 bg-[#E5E7EB] rounded w-1/2"></div>
                    <div className="h-3 bg-[#E5E7EB] rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs text-[#4B5563]">ID Blockchain</div>
                    <div className="w-16 h-16 border-2 border-[#10B981] rounded-xl flex items-center justify-center">
                      <QrCode size={24} className="text-[#10B981]" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#10B981]/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#059669]/10 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#111827] mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Découvrez comment LandChain simplifie et sécurise la gestion de
              vos biens immobiliers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
                <Shield size={24} className="text-[#10B981]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                Enregistrement sécurisé
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Transformez vos titres de propriété en NFTs immuables sur la
                blockchain pour une sécurité maximale.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
                <QrCode size={24} className="text-[#10B981]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                Vérification instantanée
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Vérifiez l'authenticité de n'importe quel titre en scannant
                simplement un QR code.
              </p>
            </div>

            {/* Feature 3 */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} className="text-[#10B981]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                Fractionnement intelligent
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Partagez la propriété facilement pour l'héritage, la copropriété
                ou la vente fractionnée.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#111827] mb-6">
                Une révolution dans l'immobilier
              </h2>
              <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
                LandChain utilise la technologie blockchain pour créer un
                écosystème transparent, sécurisé et efficace pour la gestion des
                titres fonciers.
              </p>
              <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
                Fini les documents perdus, les fraudes et les processus
                complexes. Avec LandChain, vos biens immobiliers sont protégés
                par la cryptographie et accessibles en quelques clics.
              </p>
              <a
                href="/auth/signup"
                className="inline-flex items-center px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold"
              >
                Rejoindre la révolution
                <ChevronRight size={18} className="ml-2" />
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-3xl p-8">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item, index) => (
                    <div
                      key={item}
                      className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] transform transition-transform hover:scale-105"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                        <div className="h-3 bg-[#E5E7EB] rounded flex-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            Prêt à sécuriser vos biens ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de propriétaires qui font confiance à
            LandChain pour protéger leurs titres fonciers.
          </p>
          <a
            href="/auth/signup"
            className="inline-flex items-center px-8 py-4 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold text-lg"
          >
            Commencer maintenant
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#111827] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-white mb-4">
                <span className="text-[#10B981]">Land</span>Chain
              </h3>
              <p className="text-gray-300 mb-4">
                La plateforme de référence pour la gestion sécurisée des titres
                fonciers via la blockchain.
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 LandChain. Tous droits réservés.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Produit</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#10B981] transition-colors"
                  >
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#10B981] transition-colors"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#10B981] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#10B981] transition-colors"
                  >
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#10B981] transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#10B981] transition-colors"
                  >
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
