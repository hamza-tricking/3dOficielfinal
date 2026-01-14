import Image from "next/image";
import Link from "next/link";

interface SamsungTableModel {
  name: string;
  image: string;
  path: string;
}

const samsungTabletModels: SamsungTableModel[] = [
  { name: "Galaxy Tab S9 Ultra WiFi", image: "GALAXY_TAB_S9_ULTRA_WIFI_X910_image.jpg", path: "galaxy-tab-s9-ultra" },
  { name: "Galaxy Tab S9+", image: "GALAXY_TAB_S9_X810X816_image.jpg", path: "galaxy-tab-s9-plus" },
  { name: "Galaxy Tab S9", image: "GALAXY_TAB_S9_X710X716_image.jpg", path: "galaxy-tab-s9" },
  { name: "Galaxy Tab S9 FE", image: "GALAXY_TAB_S9_FE_X510X516_image.jpg", path: "galaxy-tab-s9-fe" },
  { name: "Galaxy Tab S8", image: "GALAXY_TAB_S8_X700_image.jpg", path: "galaxy-tab-s8" },
  { name: "Galaxy Tab S7+", image: "GALAXY_TAB_S7_PLUS_T970_T976_image.jpg", path: "galaxy-tab-s7-plus" },
  { name: "Galaxy Tab S7 LTE", image: "GALAXY_TAB_S7_LTE_T875_T876B_image.jpg", path: "galaxy-tab-s7-lte" },
  { name: "Galaxy Tab S7", image: "GALAXY_TAB_S7_110_T870_T875_image.jpg", path: "galaxy-tab-s7" },
  { name: "Galaxy Tab S7 FE", image: "GALAXY_TAB_S7_FE_T730_image.jpg", path: "galaxy-tab-s7-fe" },
  { name: "Galaxy Tab S6 Lite", image: "GALAXY_TAB_S6_LITE_P610_P615_image.jpg", path: "galaxy-tab-s6-lite" },
  { name: "Galaxy Tab S6 10.5\"", image: "GALAXY_TAB_S6_105_T860_T865_image.jpg", path: "galaxy-tab-s6-105" },
  { name: "Galaxy Tab S5e 10.5\"", image: "GALAXY_TAB_S5_E_105_T720_T725_image.jpg", path: "galaxy-tab-s5e-105" },
  { name: "Galaxy Tab A 2019 8\"", image: "GALAXY_TAB_A_2019_8_T290_T295_image.jpg", path: "galaxy-tab-a-2019-8" },
  { name: "Galaxy Tab A 10.5\" 2018", image: "GALAXY_TAB_A_1052018_T590_T595_image.jpg", path: "galaxy-tab-a-105-2018" },
  { name: "Galaxy Tab A 10.1\" 2019", image: "GALAXY_TAB_A_101_2019_T510_T515_image.jpg", path: "galaxy-tab-a-101-2019" },
  { name: "Galaxy Tab A 10.1\" 2016", image: "GALAXY_TAB_A_101_2016_T580_T585_image.jpg", path: "galaxy-tab-a-101-2016" },
  { name: "Galaxy Tab A8 10.5\"", image: "GALAXY_TAB_A8_105_X200_X205_image.jpg", path: "galaxy-tab-a8-105" },
  { name: "Galaxy Tab A7", image: "GALAXY_TAB_A7_T500_image.jpg", path: "galaxy-tab-a7" },
  { name: "Galaxy Tab A7 Lite", image: "GALAXY_TAB_A7_LITE_T220_T225_image.jpg", path: "galaxy-tab-a7-lite" },
  { name: "Galaxy Tab E 9.6\"", image: "GALAXY_TAB_E_96_T560_T561_image.jpg", path: "galaxy-tab-e-96" },
];

export default function SamsungTablets() {
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
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold text-blue-600">3DMobile.net</div>
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
              <li><Link href="/reparations/tablettes/samsung" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Samsung
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Réparation Galaxy Tab Samsung
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Galaxy Tab à Saint-Nazaire
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="tel:0980677518" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                📞 Appeler maintenant
              </Link>
              <Link href="/contact" className="bg-blue-600 text-white border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
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
              Choisissez votre modèle Galaxy Tab
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {samsungTabletModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/tablettes/samsung/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/tablettes repaire/tablet_repair_data_samsung/${model.image}`}
                    alt={model.name}
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
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
            Nos Services pour Galaxy Tab
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Écran Cassé</h3>
              <p className="text-gray-700 mb-4">Remplacement d'écran original Samsung avec garantie 6 mois.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Écran tactile et LCD</li>
                <li>• Vitre et cadre</li>
                <li>• Calibration couleurs</li>
                <li>• Test complet</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-bold mb-3 text-rose-600">Batterie Défectueuse</h3>
              <p className="text-gray-700 mb-4">Changement batterie neuve certifiée Samsung.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Batterie certifiée</li>
                <li>• Test de santé</li>
                <li>• Optimisation Android</li>
                <li>• Garantie 6 mois</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Problème de Charge</h3>
              <p className="text-gray-700 mb-4">Réparation port USB-C et connecteurs internes.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Port USB-C</li>
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
            Votre Galaxy Tab est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Samsung vous attendent pour un diagnostic rapide et une réparation de qualité.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="tel:0980677518" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Appeler maintenant
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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
            Votre expert en réparation de Galaxy Tab à Saint-Nazaire
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
