import Image from "next/image";
import Link from "next/link";

interface RealmeModel {
  name: string;
  image: string;
  path: string;
}

const realmeModels: RealmeModel[] = [
  { name: "REALME 10 4G", image: "REALME_10_4G_image.jpg", path: "realme-10-4g" },
  { name: "REALME 10 5G", image: "REALME_10_5G_image.jpg", path: "realme-10-5g" },
  { name: "REALME 12 PLUS", image: "REALME_12_PLUS_image.webp", path: "realme-12-plus" },
  { name: "REALME 12 PRO", image: "REALME_12_PRO_image.jpg", path: "realme-12-pro" },
  { name: "REALME 5 PRO", image: "REALME_5_PRO_image.jpg", path: "realme-5-pro" },
  { name: "REALME 6", image: "REALME_6_image.jpg", path: "realme-6" },
  { name: "REALME 6i", image: "REALME_6i_image.jpg", path: "realme-6i" },
  { name: "REALME 7", image: "REALME_7_image.jpg", path: "realme-7" },
  { name: "REALME 7 PRO", image: "REALME_7_PRO_image.jpg", path: "realme-7-pro" },
  { name: "REALME 7i", image: "REALME_7i_image.jpg", path: "realme-7i" },
  { name: "REALME 8", image: "REALME_8_image.jpg", path: "realme-8" },
  { name: "REALME 8 5G", image: "REALME_8_5G_image.jpg", path: "realme-8-5g" },
  { name: "REALME 8 PRO", image: "REALME_8_PRO_image.jpg", path: "realme-8-pro" },
  { name: "REALME 8i", image: "REALME_8i_image.jpg", path: "realme-8i" },
  { name: "REALME 9 PRO PLUS", image: "REALME_9_PRO_PLUS_image.jpg", path: "realme-9-pro-plus" },
  { name: "REALME 9 PRO9 PRO 5G", image: "REALME_9_PRO9_PRO_5G_image.jpg", path: "realme-9-pro9-pro-5g" },
  { name: "REALME 9i", image: "REALME_9i_image.jpg", path: "realme-9i" },
  { name: "REALME C11 2021", image: "REALME_C11_2021_image.jpg", path: "realme-c11-2021" },
  { name: "REALME C21", image: "REALME_C21_image.jpg", path: "realme-c21" },
  { name: "REALME C21 Y", image: "REALME_C21_Y_image.jpg", path: "realme-c21-y" },
  { name: "REALME C25 Y", image: "REALME_C25_Y_image.jpg", path: "realme-c25-y" },
  { name: "REALME C3", image: "REALME_C3_image.jpg", path: "realme-c3" },
  { name: "REALME C31", image: "REALME_C31_image.jpg", path: "realme-c31" },
  { name: "REALME C35", image: "REALME_C35_image.jpg", path: "realme-c35" },
  { name: "REALME GT 5G", image: "REALME_GT_5G_image.jpg", path: "realme-gt-5g" },
  { name: "REALME GT NEO2", image: "REALME_GT_NEO2_image.jpg", path: "realme-gt-neo2" },
  { name: "REALME GT2", image: "REALME_GT2_image.jpg", path: "realme-gt2" },
  { name: "REALME GT2 PRO", image: "REALME_GT2_PRO_image.webp", path: "realme-gt2-pro" },
  { name: "REALME NARZO 50", image: "REALME_NARZO_50_image.jpg", path: "realme-narzo-50" },
  { name: "REALME NARZO 50 5G", image: "REALME_NARZO_50_5G_image.jpg", path: "realme-narzo-50-5g" },
  { name: "REALME NARZO 50A PRIME", image: "REALME_NARZO_50A_PRIME_image.jpg", path: "realme-narzo-50a-prime" },
  { name: "REALME NARZO 50i PRIME", image: "REALME_NARZO_50i_PRIME_image.jpg", path: "realme-narzo-50i-prime" },
  { name: "REALME X50", image: "REALME_X50_image.jpg", path: "realme-x50" }
];

export default function RealmeModels() {
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
              <li><Link href="/reparations/smartphones/realme" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Realme
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
              Réparation Realme
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Realme à Saint-Nazaire
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
              Choisissez votre modèle Realme
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {realmeModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/realme/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_realme/${model.image}`}
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
            Votre Realme est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Realme vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation Realme à Saint-Nazaire
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