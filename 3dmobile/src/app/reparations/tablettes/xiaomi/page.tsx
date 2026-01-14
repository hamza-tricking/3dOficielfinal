import Image from "next/image";
import Link from "next/link";

interface XiaomiTableModel {
  name: string;
  image: string;
  path: string;
}

const xiaomiTabletModels: XiaomiTableModel[] = [
  { name: "Xiaomi Redmi Pad", image: "xiaomi-redmi-pad.jpg", path: "xiaomi-redmi-pad" },
];

export default function XiaomiTablets() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-orange-500 backdrop-blur-lg text-white shadow-lg border-b border-white/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 text-sm">
            <a href="tel:0980677518" className="hover:underline flex items-center gap-2 transition-colors hover:text-orange-100">
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
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold text-orange-600">3DMobile.net</div>
            <ul className="hidden md:flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reparations" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors duration-300 relative group">
                Réparations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reparations/tablettes" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors duration-300 relative group">
                Tablettes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reparations/tablettes/xiaomi" className="text-gray-800 hover:text-orange-600 font-semibold transition-colors duration-300 relative group">
                Xiaomi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reconditionnes" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Reconditionnés
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/deblocage" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors duration-300 relative group">
                Déblocage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Réparation Xiaomi Pad
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Xiaomi Pad à Saint-Nazaire
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="tel:0980677518" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
                📞 Appeler maintenant
              </Link>
              <Link href="/contact" className="bg-orange-600 text-white border-2 border-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
                📧 Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Choisissez votre modèle Xiaomi Pad
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {xiaomiTabletModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/tablettes/xiaomi/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/tablettes repaire/tablet_repair_data_xiaomi/${model.image}`}
                    alt={model.name}
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {model.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Services pour Xiaomi Redmi Pad
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Écran Cassé</h3>
              <p className="text-gray-700 mb-4">Remplacement d'écran LCD et vitre compatible.</p>
              <div className="text-2xl font-bold text-orange-600 mb-2">99€ TTC</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vitre + écran LCD compatible</li>
                <li>• Tarif réduit: 74€ TTC</li>
                <li>• Installation professionnelle</li>
                <li>• Test complet</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Désoxydation</h3>
              <p className="text-gray-700 mb-4">Traitement complet pour dégâts des eaux.</p>
              <div className="text-2xl font-bold text-blue-600 mb-2">49€ TTC</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Diagnostic immédiat</li>
                <li>• Bains ultrasons</li>
                <li>• Nettoyage complet</li>
                <li>• Test de fonctionnement</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Récupération Données</h3>
              <p className="text-gray-700 mb-4">Sauvegarde et récupération de vos données.</p>
              <div className="text-2xl font-bold text-orange-600 mb-2">30€ TTC</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Transfert de données: 20€ TTC</li>
                <li>• Récupération de données</li>
                <li>• Support multiple formats</li>
                <li>• Confidentialité garantie</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-orange-100 p-6 rounded-xl inline-block">
              <h3 className="text-xl font-bold mb-3 text-orange-800">🔍 Recherche de Panne</h3>
              <p className="text-orange-700 font-semibold">GRATUITE</p>
              <p className="text-sm text-orange-600 mt-2">Diagnostic complet avant toute réparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre Xiaomi Pad est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Xiaomi vous attendent pour un diagnostic rapide et une réparation de qualité.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="tel:0980677518" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Appeler maintenant
            </Link>
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              📧 Contacter par formulaire
            </Link>
          </div>
          <p className="text-sm mt-6 text-gray-300">
            Ouvert du lundi au vendredi : 10h00 - 13h00 / 14h30 - 18h00
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">3DMobile.net</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Votre expert en réparation de Xiaomi Pad à Saint-Nazaire
          </p>
          
          <div className="flex justify-center gap-8 mb-8">
            <a href="tel:0980677518" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-xl">📞</span>
              <span>09 80 67 75 18</span>
            </a>
            <a href="mailto:informatique216@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-xl">✉️</span>
              <span>Contact</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <div className="text-sm text-gray-500">
              <p>© 2024 3DMobile.net - Tous droits réservés</p>
              <p className="mt-2 text-xs">70 avenue de la république, 44600 Saint-Nazaire</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
