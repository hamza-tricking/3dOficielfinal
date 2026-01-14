import Image from "next/image";
import Link from "next/link";

interface AppleTableModel {
  name: string;
  image: string;
  path: string;
}

const appleTabletModels: AppleTableModel[] = [
  { name: "iPad Pro 12.9\" Gen 5", image: "IPAD_PRO_129_GEN5_A2378_A2461_A2379_image.png", path: "ipad-pro-12-9-gen-5" },
  { name: "iPad Pro 12.9\" Gen 4", image: "IPAD_PRO_129_GEN4_A2229_A2069_A2232_image.png", path: "ipad-pro-12-9-gen-4" },
  { name: "iPad Pro 12.9\" Gen 3", image: "IPAD_PRO_129_GEN3_A1876_A2014_A1895_image.png", path: "ipad-pro-12-9-gen-3" },
  { name: "iPad Pro 12.9\" Gen 2", image: "IPAD_PRO_129_GEN2_A1670_A1671_image.png", path: "ipad-pro-12-9-gen-2" },
  { name: "iPad Pro 12.9\" Gen 1", image: "IPAD_PRO_129_GEN1_A1584_A1652_image.png", path: "ipad-pro-12-9-gen-1" },
  { name: "iPad Pro 11\" Gen 3", image: "IPAD_PRO_11_GEN3_A2377_A2459_A2301_image.png", path: "ipad-pro-11-gen-3" },
  { name: "iPad Pro 11\" Gen 2", image: "IPAD_PRO_11_GEN2_A2228_A2068_A2230_image.png", path: "ipad-pro-11-gen-2" },
  { name: "iPad Pro 11\" Gen 1", image: "IPAD_PRO_11_GEN1_A1980_A2013_A1934_image.png", path: "ipad-pro-11-gen-1" },
  { name: "iPad Pro 10.5\"", image: "IPAD_PRO_105_A1701_A1709_image.png", path: "ipad-pro-10-5" },
  { name: "iPad Pro 9.7\"", image: "IPAD_PRO_97_A1673_A1674_A1675_image.png", path: "ipad-pro-9-7" },
  { name: "iPad Air 5", image: "IPAD_AIR_5_A2588_A2589_A2591_image.png", path: "ipad-air-5" },
  { name: "iPad Air 4", image: "IPAD_AIR_4_A2316_A2324_A2325_A2072_image.png", path: "ipad-air-4" },
  { name: "iPad Air 3", image: "IPAD_AIR_3_A2152_A2123_A2153_image.png", path: "ipad-air-3" },
  { name: "iPad Air 2", image: "IPAD_AIR_2_A1566_A1567_image.png", path: "ipad-air-2" },
  { name: "iPad Air", image: "IPAD_AIR_A1474_A1475_A1476_image.png", path: "ipad-air" },
  { name: "iPad 9", image: "ipad_9_A2602_A2603_A2604_A2605_image.png", path: "ipad-9" },
  { name: "iPad 8", image: "ipad_8_A2270_A2429_A2430_image.png", path: "ipad-8" },
  { name: "iPad 7", image: "ipad_7_A2197_A2200_A2198_image.png", path: "ipad-7" },
  { name: "iPad 6", image: "ipad_6_A1893_A1954_image.png", path: "ipad-6" },
  { name: "iPad 5", image: "ipad_5_A1822_A1823_image.png", path: "ipad-5" },
  { name: "iPad 4", image: "ipad_4_A1458_A1459_A1460_image.png", path: "ipad-4" },
  { name: "iPad 3", image: "ipad_3_A1416_A1430_A1403_image.png", path: "ipad-3" },
  { name: "iPad 2", image: "ipad_2_A1395_A1396_A1397_image.png", path: "ipad-2" },
  { name: "iPad Mini 6", image: "IPAD_MINI_6_A2567_A2568_image.png", path: "ipad-mini-6" },
  { name: "iPad Mini 5", image: "IPAD_MINI_5_A12133_A2124_A2126_image.png", path: "ipad-mini-5" },
  { name: "iPad Mini 4", image: "IPAD_MINI_4_A1538_A1550_image.png", path: "ipad-mini-4" },
  { name: "iPad Mini 3", image: "IPAD_MINI_3_A1599_A1600_image.png", path: "ipad-mini-3" },
  { name: "iPad Mini 2", image: "IPAD_MINI_2_A1489_A1490_A1491_image.png", path: "ipad-mini-2" },
  { name: "iPad Mini", image: "IPAD_MINI_A1432_A1454_A1455_image.png", path: "ipad-mini" },
];

export default function AppleTablets() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-rose-500 backdrop-blur-lg text-white shadow-lg border-b border-white/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 text-sm">
            <a href="tel:0980677518" className="hover:underline flex items-center gap-2 transition-colors hover:text-rose-100">
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
            <div className="text-3xl font-bold text-rose-600">3DMobile.net</div>
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
              <li><Link href="/reparations/tablettes/apple" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors duration-300 relative group">
                Apple
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
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
      <section className="bg-gradient-to-br from-rose-600 to-rose-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Réparation Apple iPad
            </h1>
            <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Apple iPad à Saint-Nazaire
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="tel:0980677518" className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                📞 Appeler maintenant
              </Link>
              <Link href="/contact" className="bg-rose-600 text-white border-2 border-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors">
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
              Choisissez votre modèle Apple iPad
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {appleTabletModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/tablettes/apple/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-rose-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/tablettes repaire/tablet_repair_data_apple/${model.image}`}
                    alt={model.name}
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
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
            Nos Services pour iPad
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-rose-600">Écran Cassé</h3>
              <p className="text-gray-700 mb-4">Remplacement d'écran original iPad avec garantie 6 mois.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Écran tactile et LCD</li>
                <li>• Vitre et cadre</li>
                <li>• Calibration couleurs</li>
                <li>• Test complet</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Batterie Défectueuse</h3>
              <p className="text-gray-700 mb-4">Changement batterie neuve certifiée Apple.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Batterie certifiée</li>
                <li>• Test de santé</li>
                <li>• Optimisation iOS</li>
                <li>• Garantie 6 mois</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-rose-600">Problème de Charge</h3>
              <p className="text-gray-700 mb-4">Réparation port Lightning et connecteurs internes.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Port Lightning</li>
                <li>• Connecteur interne</li>
                <li>• Test de charge</li>
                <li>• Nettoyage complet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre iPad est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Apple vous attendent pour un diagnostic rapide et une réparation de qualité.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="tel:0980677518" className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Appeler maintenant
            </Link>
            <Link href="/contact" className="bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
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
            Votre expert en réparation d'iPad à Saint-Nazaire
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
