import Image from "next/image";
import Link from "next/link";

export default function ConsoleReparations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-500 backdrop-blur-lg text-white shadow-lg border-b border-white/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 text-sm">
            <a href="tel:0980677518" className="hover:underline flex items-center gap-2 transition-colors hover:text-blue-100">
              <span className="text-lg">📞</span>
              <span className="font-semibold">09 80 67 75 18</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span className="font-semibold">70 avenue de la république, 44600 Saint-Nazaire</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-xl shadow-xl sticky top-0 z-40 border-b border-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-rose-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3D</span>
              </div>
              <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">3DMobile.net</Link>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reparations" className="text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Réparations
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-600 to-blue-600"></span>
              </Link></li>
              <li><Link href="/reconditionnes" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Reconditionnés
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><a href="/deblocage" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Déblocage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
                🎮 NOUVEAU SERVICE !
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Réparations Consoles de Jeux
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              3DMobile, votre solution de réparation pour vos consoles de jeux
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
              Découvrez notre tout nouveau service de réparation de consoles de jeux, conçu spécialement pour les passionnés du gaming comme vous !
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Des Experts au Service de Votre Passion
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Que vous soyez un adepte de PlayStation, Xbox, Sega, Nintendo ou toute autre marque, nous sommes là pour ramener votre console préférée à la vie.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Notre équipe expérimentée de techniciens spécialisés est dédiée à vous offrir une solution rapide et fiable pour tous vos problèmes de console.
              </p>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-4">Notre Engagement</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Pièces de rechange authentiques</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Réparations réalisées avec précision</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Processus simple et sans tracas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Transparence et prix compétitifs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/photos/download (56).jpg"
                alt="Réparation console de jeux"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Nos Services de Réparation
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
            Nous sommes équipés pour diagnostiquer et réparer efficacement tous types de problèmes
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="text-xl font-bold mb-2 text-purple-700">Remplacement Connecteur de Charge</h3>
              <p className="text-gray-700">Problèmes de charge résolus rapidement avec des pièces de qualité</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Résolution Problème de Démarrage</h3>
              <p className="text-gray-700">Diagnostic et réparation des problèmes de démarrage</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold mb-2 text-purple-700">Nettoyage et Pâte Thermique</h3>
              <p className="text-gray-700">Prévention surchauffe et optimisation performance</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📺</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Remplacement d'Écran</h3>
              <p className="text-gray-700">Écrans de console et manettes remplacés avec soin</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="text-xl font-bold mb-2 text-purple-700">Remplacement Port HDMI</h3>
              <p className="text-gray-700">Restauration de la connexion vidéo et audio</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💿</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Réparation du Lecteur</h3>
              <p className="text-gray-700">Lecteurs Blu-ray/DVD réparés ou remplacés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Console Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Toutes les Consoles de Jeux Réparées
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sony PlayStation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🎮</div>
                <h3 className="text-2xl font-bold text-blue-600">Sony PlayStation</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS5</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS4 Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS4 Slim</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS4</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS3 Ultra Slim</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS3 Slim</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS2</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>PS Vita</span>
                </li>
              </ul>
            </div>

            {/* Microsoft Xbox */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold text-green-600">Microsoft Xbox</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Xbox Series X</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Xbox Series S</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Xbox One X</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Xbox One S</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Xbox One</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Xbox 360</span>
                </li>
              </ul>
            </div>

            {/* Nintendo */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🔴</div>
                <h3 className="text-2xl font-bold text-red-600">Nintendo</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Switch</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Switch OLED</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Wii</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Wii U</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>New 3DS XL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>3DS XL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>3DS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>2DS XL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>2DS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>DSi XL</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>DSi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>DS Lite</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Tarifs de Réparation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-purple-700">🔌 Lecteur DVD/Blu-ray</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 49€</div>
              <p className="text-gray-600 text-sm">Remplacement ou réparation du lecteur</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700">⚡ Alimentation</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 39€</div>
              <p className="text-gray-600 text-sm">Réparation problème d'alimentation</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-bold mb-4 text-purple-700">🌡️ Surchauffe</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 59€</div>
              <p className="text-gray-600 text-sm">Nettoyage et pâte thermique</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700">📺 Port HDMI</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 45€</div>
              <p className="text-gray-600 text-sm">Remplacement port HDMI</p>
            </div>
          </div>
          
          <div className="text-center bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-700 mb-4">
              <strong className="text-lg text-purple-700">Garantie sur toutes les réparations : 6 mois</strong>
            </p>
            <p className="text-gray-600 mb-6">
              Devis gratuit et sans engagement. Avant toute intervention, nous vous fournirons un devis clair, sans frais cachés ni surprises.
            </p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre Console est en Panne ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts vous attendent pour un diagnostic rapide et une réparation de qualité.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="tel:0980677518" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Appeler maintenant
            </a>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              📧 Contacter par formulaire
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-80">
            Ouvert du lundi au vendredi : 10h00 - 13h00 / 14h30 - 18h00
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3D</span>
                </div>
                <div className="text-2xl font-bold">3DMobile.net</div>
              </div>
              <p className="text-gray-400">
                Votre spécialiste de la réparation et du reconditionnement mobile à Saint-Nazaire.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/reparations" className="hover:text-white transition-colors">Réparations</Link></li>
                <li><Link href="/reparations/console" className="hover:text-white transition-colors">Consoles</Link></li>
                <li><Link href="/reconditionnes" className="hover:text-white transition-colors">Reconditionnés</Link></li>
                <li><a href="/deblocage" className="hover:text-white transition-colors">Déblocage</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 70 avenue de la république</li>
                <li>📍 44600 Saint-Nazaire</li>
                <li>📞 09 80 67 75 18</li>
                <li>✉️ contact@3dmobile.net</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Horaires</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lundi - Vendredi: 9h-19h</li>
                <li>Samedi: 9h-12h</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 3DMobile.net. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
