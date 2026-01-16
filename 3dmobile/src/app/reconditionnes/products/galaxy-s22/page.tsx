import Image from "next/image";
import Link from "next/link";

export default function GALAXYS22() {
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
              <li><Link href="/reparations" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Réparations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reconditionnes" className="text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Reconditionnés
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-rose-600"></span>
              </Link></li>
              <li><a href="#deblocage" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Déblocage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-rose-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              GALAXY S22 Reconditionné
            </h1>
            <div className="text-3xl md:text-4xl font-bold mb-6">
              349 € TTC
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="font-semibold">📱 Garantie 12 mois</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="font-semibold">✅ Testé et certifié</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="font-semibold">🚀 Livraison offerte</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src="/scrabed data/recrutment/GALAXY_S22_128_Go.jpg"
                  alt="GALAXY S22 reconditionné"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Reconditionné
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                GALAXY S22 - Description Complète
              </h2>
              
              <div className="prose prose-lg text-gray-700 mb-8">
                <p class="mb-4">Samsung Galaxy S22 128Go
Chez Ecophone 44, chaque Samsung est contrôlé, préparé et garanti dans notre atelier à Nantes.
Pas de surprise : vous repartez avec un smartphone fiable, propre, et prêt à l’emploi.
Contrôle rigoureux sur plus de 50 points essentiels : écran, capteurs, micro, batterie, haut-parleurs, caméra, Wi‑Fi, Bluetooth, etc.
Batterie neuve ou à plus de 90 % minimum, testée et validée par notre équipe.
Chaque appareil est nettoyé, révisé en profondeur et remis à neuf dans notre atelier.
Débloqué tous opérateurs, livré avec ses accessoires de charge.
Garanti localement par notre service technique, avec un vrai interlocuteur en cas de besoin.

⚠️ À savoir :
Sur Internet, les photos flatteuses cachent parfois des batteries fatiguées, des capteurs qui ne fonctionnent plus, ou des garanties floues basées à l’étranger.
Chez nous, vous savez exactement ce que vous achetez, et vous pouvez l’essayer sur place avant de décider.

📍 Venez le découvrir au 70 avenue de la république, 44600 Saint-Nazaire</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-blue-900 mb-4">📍 Venez le tester en boutique</h3>
                <p className="text-blue-800 mb-2">70 avenue de la république, 44600 Saint-Nazaire</p>
                <p className="text-blue-700 text-sm">Essayez-le avant de l'acheter !</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0980677518" 
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  📞 Réservez le au 09 80 67 75 18
                </a>
                <Link 
                  href="/contact" 
                  className="flex-1 bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors text-center"
                >
                  ✉️ Contacter par formulaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Pour Choisir 3DMobile
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Contrôle 50+ points</h3>
              <p className="text-gray-700">Contrôle rigoureux sur plus de 50 points essentiels : écran, Face ID, micro, batterie, capteurs, haut-parleurs, caméra, Wi‑Fi, Bluetooth, etc.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-bold mb-2 text-rose-600">Batterie Neuve</h3>
              <p className="text-gray-700">Batterie neuve ou à plus de 90 % minimum, testée et validée par notre équipe.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🧹</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Nettoyage Profond</h3>
              <p className="text-gray-700">Chaque appareil est nettoyé, révisé en profondeur et remis à neuf dans notre atelier.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-xl font-bold mb-2 text-rose-600">Débloqué Tous Opérateurs</h3>
              <p className="text-gray-700">Débloqué tous opérateurs, livré avec ses accessoires de charge.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Garantie Locale</h3>
              <p className="text-gray-700">Garanti localement par notre service technique, avec un vrai interlocuteur en cas de besoin.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="text-xl font-bold mb-2 text-rose-600">Magasin Physique</h3>
              <p className="text-gray-700">Venez découvrir et tester votre appareil dans notre magasin à Saint-Nazaire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-yellow-100 border border-yellow-300 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-yellow-900 flex items-center gap-2">
              ⚠️ À savoir
            </h3>
            <p className="text-yellow-800 text-lg leading-relaxed">
              Sur Internet, les photos flatteuses cachent parfois des batteries fatiguées, des Face ID qui ne fonctionnent plus, ou des garanties floues basées à l'étranger.<br/><br/>
              Chez nous, vous savez exactement ce que vous achetez, et vous pouvez l'essayer sur place avant de décider.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ce modèle vous interesse ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès maintenant pour réserver votre GALAXY S22 reconditionné
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:0980677518" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Appeler maintenant
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              ✉️ Nous contacter
            </Link>
          </div>
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
                <li><Link href="/reconditionnes" className="hover:text-white transition-colors">Reconditionnés</Link></li>
                <li><a href="#deblocage" className="hover:text-white transition-colors">Déblocage</a></li>
                <li><a href="#accessoires" className="hover:text-white transition-colors">Accessoires</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 70 avenue de la république, 44600 Saint-Nazaire</li>
                <li>📞 09 80 67 75 18</li>
                <li>✉️ informatique216@gmail.com</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Horaires</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lundi - Vendredi: 10h00 - 13h00 / 14h30 - 18h00</li>
                <li>Samedi: 9h - 12h</li>
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