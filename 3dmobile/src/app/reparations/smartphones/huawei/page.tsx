import Image from "next/image";
import Link from "next/link";

interface HuaweiModel {
  name: string;
  image: string;
  path: string;
}

const huaweiModels: HuaweiModel[] = [
  { name: "MATE 10", image: "MATE_10_image.png", path: "mate-10" },
  { name: "MATE 10 LITE", image: "MATE_10_LITE_image.png", path: "mate-10-lite" },
  { name: "MATE 10 PRO", image: "MATE_10_PRO_image.webp", path: "mate-10-pro" },
  { name: "MATE 20", image: "MATE_20_image.png", path: "mate-20" },
  { name: "MATE 20 LITE", image: "MATE_20_LITE_image.png", path: "mate-20-lite" },
  { name: "MATE 20 PRO", image: "MATE_20_PRO_image.png", path: "mate-20-pro" },
  { name: "MATE 20 X 5G", image: "MATE_20_X_5G_image.png", path: "mate-20-x-5g" },
  { name: "MATE 30 PRO", image: "MATE_30_PRO_image.png", path: "mate-30-pro" },
  { name: "MATE 40 PRO", image: "MATE_40_PRO_image.png", path: "mate-40-pro" },
  { name: "MATE 7", image: "MATE_7_image.png", path: "mate-7" },
  { name: "MATE 8", image: "MATE_8_image.png", path: "mate-8" },
  { name: "MATE 9", image: "MATE_9_image.png", path: "mate-9" },
  { name: "MATE 9 PRO", image: "MATE_9_PRO_image.png", path: "mate-9-pro" },
  { name: "NOVA", image: "NOVA_image.png", path: "nova" },
  { name: "NOVA 10", image: "NOVA_10_image.png", path: "nova-10" },
  { name: "NOVA 10 PRO", image: "NOVA_10_PRO_image.jpg", path: "nova-10-pro" },
  { name: "NOVA 5T", image: "NOVA_5T_image.png", path: "nova-5t" },
  { name: "NOVA 8i", image: "NOVA_8i_image.png", path: "nova-8i" },
  { name: "P10", image: "P10_image.png", path: "p10" },
  { name: "P10 LITE", image: "P10_LITE_image.png", path: "p10-lite" },
  { name: "P20", image: "P20_image.png", path: "p20" },
  { name: "P20 LITE", image: "P20_LITE_image.png", path: "p20-lite" },
  { name: "P20 PRO", image: "P20_PRO_image.png", path: "p20-pro" },
  { name: "P30", image: "P30_image.png", path: "p30" },
  { name: "P30 LITE", image: "P30_LITE_image.png", path: "p30-lite" },
  { name: "P30 LITE NEW EDITION", image: "P30_LITE_NEW_EDITION_image.png", path: "p30-lite-new-edition" },
  { name: "P30 PRO", image: "P30_PRO_image.png", path: "p30-pro" },
  { name: "P40", image: "P40_image.png", path: "p40" },
  { name: "P40 LITE", image: "P40_LITE_image.png", path: "p40-lite" },
  { name: "P40 LITE 5G", image: "P40_LITE_5G_image.png", path: "p40-lite-5g" },
  { name: "P40 LITE E", image: "P40_LITE_E_image.png", path: "p40-lite-e" },
  { name: "P40 PRO", image: "P40_PRO_image.png", path: "p40-pro" },
  { name: "P8 LITE 2017", image: "P8_LITE_2017_image.png", path: "p8-lite-2017" },
  { name: "P9", image: "P9_image.png", path: "p9" },
  { name: "P9 LITE", image: "P9_LITE_image.png", path: "p9-lite" },
  { name: "PSMART", image: "PSMART_image.png", path: "psmart" },
  { name: "PSMART 2019", image: "PSMART_2019_image.png", path: "psmart-2019" },
  { name: "PSMART 2020", image: "PSMART_2020_image.png", path: "psmart-2020" },
  { name: "PSMART 2021", image: "PSMART_2021_image.png", path: "psmart-2021" },
  { name: "PSMART PLUS", image: "PSMART_PLUS_image.png", path: "psmart-plus" },
  { name: "PSMART PLUS 2019", image: "PSMART_PLUS_2019_image.png", path: "psmart-plus-2019" },
  { name: "PSMART S", image: "PSMART_S_image.jpg", path: "psmart-s" },
  { name: "PSMART Z", image: "PSMART_Z_image.png", path: "psmart-z" },
  { name: "Y5 2018", image: "Y5_2018_image.png", path: "y5-2018" },
  { name: "Y5 2019", image: "Y5_2019_image.png", path: "y5-2019" },
  { name: "Y5P", image: "Y5P_image.png", path: "y5p" },
  { name: "Y6 2018", image: "Y6_2018_image.png", path: "y6-2018" },
  { name: "Y6 2019", image: "Y6_2019_image.png", path: "y6-2019" },
  { name: "Y6P", image: "Y6P_image.png", path: "y6p" },
  { name: "Y6S", image: "Y6S_image.png", path: "y6s" },
  { name: "Y7 2018", image: "Y7_2018_image.png", path: "y7-2018" },
  { name: "Y7 2019", image: "Y7_2019_image.png", path: "y7-2019" },
  { name: "Y8P", image: "Y8P_image.png", path: "y8p" },
  { name: "Y9 2018", image: "Y9_2018_image.png", path: "y9-2018" },
  { name: "Y9 PRIME 2019", image: "Y9_PRIME_2019_image.png", path: "y9-prime-2019" }
];

export default function HuaweiModels() {
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
              <li><Link href="/reparations/smartphones/huawei" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Huawei
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
              Réparation Huawei
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Huawei à Saint-Nazaire
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
              Choisissez votre modèle Huawei
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {huaweiModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/huawei/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_huawei/${model.image}`}
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
            Votre Huawei est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Huawei vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation Huawei à Saint-Nazaire
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