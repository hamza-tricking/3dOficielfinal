import Image from "next/image";
import Link from "next/link";

interface OnePlusModel {
  name: string;
  image: string;
  path: string;
}

const onePlusModels: OnePlusModel[] = [
  { name: "ONEPLUS 10 PRO 5G", image: "ONEPLUS_10_PRO_5G_image.png", path: "oneplus-10-pro-5g" },
  { name: "ONEPLUS 10T", image: "ONEPLUS_10T_image.png", path: "oneplus-10t" },
  { name: "ONEPLUS 11", image: "ONEPLUS_11_image.webp", path: "oneplus-11" },
  { name: "ONEPLUS 12", image: "ONEPLUS_12_image.webp", path: "oneplus-12" },
  { name: "ONEPLUS 12R", image: "ONEPLUS_12R_image.webp", path: "oneplus-12r" },
  { name: "ONEPLUS 13", image: "ONEPLUS_13_image.webp", path: "oneplus-13" },
  { name: "ONEPLUS 7", image: "ONEPLUS_7_image.png", path: "oneplus-7" },
  { name: "ONEPLUS 7 PRO", image: "ONEPLUS_7_PRO_image.png", path: "oneplus-7-pro" },
  { name: "ONEPLUS 7T", image: "ONEPLUS_7T_image.png", path: "oneplus-7t" },
  { name: "ONEPLUS 7T PRO", image: "ONEPLUS_7T_PRO_image.png", path: "oneplus-7t-pro" },
  { name: "ONEPLUS 8", image: "ONEPLUS_8_image.png", path: "oneplus-8" },
  { name: "ONEPLUS 8 PRO", image: "ONEPLUS_8_PRO_image.png", path: "oneplus-8-pro" },
  { name: "ONEPLUS 8T", image: "ONEPLUS_8T_image.png", path: "oneplus-8t" },
  { name: "ONEPLUS 9", image: "ONEPLUS_9_image.png", path: "oneplus-9" },
  { name: "ONEPLUS 9 PRO", image: "ONEPLUS_9_PRO_image.png", path: "oneplus-9-pro" },
  { name: "ONEPLUS NORD", image: "ONEPLUS_NORD_image.jpg", path: "oneplus-nord" },
  { name: "ONEPLUS NORD 2", image: "ONEPLUS_NORD_2_image.png", path: "oneplus-nord-2" },
  { name: "ONEPLUS NORD 2T", image: "ONEPLUS_NORD_2T_image.png", path: "oneplus-nord-2t" },
  { name: "ONEPLUS NORD CE 5G", image: "ONEPLUS_NORD_CE_5G_image.png", path: "oneplus-nord-ce-5g" },
  { name: "ONEPLUS NORD CE2", image: "ONEPLUS_NORD_CE2_image.png", path: "oneplus-nord-ce2" },
  { name: "ONEPLUS NORD CE2 LITE 5G", image: "ONEPLUS_NORD_CE2_LITE_5G_image.png", path: "oneplus-nord-ce2-lite-5g" },
  { name: "ONEPLUS NORD N10 5G", image: "ONEPLUS_NORD_N10_5G_image.jpg", path: "oneplus-nord-n10-5g" },
  { name: "ONEPLUS NORD N100", image: "ONEPLUS_NORD_N100_image.jpg", path: "oneplus-nord-n100" },
  { name: "ONEPLUS NORD N20 SE", image: "ONEPLUS_NORD_N20_SE_image.jpg", path: "oneplus-nord-n20-se" }
];

export default function OnePlusModels() {
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
              <li><Link href="/reparations/smartphones" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Smartphones
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reparations/smartphones/oneplus" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                OnePlus
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
              Réparation OnePlus
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles OnePlus à Saint-Nazaire
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
              Choisissez votre modèle OnePlus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {onePlusModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/oneplus/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_oneplus/${model.image}`}
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre OnePlus est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts OnePlus vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation OnePlus à Saint-Nazaire
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