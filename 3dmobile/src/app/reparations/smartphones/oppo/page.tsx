import Image from "next/image";
import Link from "next/link";

interface OPPOModel {
  name: string;
  image: string;
  path: string;
}

const oPPOModels: OPPOModel[] = [
  { name: "FIND X2", image: "FIND_X2_image.png", path: "find-x2" },
  { name: "FIND X2 LITE", image: "FIND_X2_LITE_image.png", path: "find-x2-lite" },
  { name: "FIND X2 NEO", image: "FIND_X2_NEO_image.png", path: "find-x2-neo" },
  { name: "FIND X2 PRO", image: "FIND_X2_PRO_image.png", path: "find-x2-pro" },
  { name: "FIND X3", image: "FIND_X3_image.png", path: "find-x3" },
  { name: "FIND X3 LITE", image: "FIND_X3_LITE_image.png", path: "find-x3-lite" },
  { name: "FIND X3 NEO", image: "FIND_X3_NEO_image.png", path: "find-x3-neo" },
  { name: "FIND X3 PRO", image: "FIND_X3_PRO_image.png", path: "find-x3-pro" },
  { name: "FIND X5", image: "FIND_X5_image.png", path: "find-x5" },
  { name: "FIND X5 LITE", image: "FIND_X5_LITE_image.png", path: "find-x5-lite" },
  { name: "FIND X5 PRO", image: "FIND_X5_PRO_image.png", path: "find-x5-pro" },
  { name: "FIND X8 PRO", image: "FIND_X8_PRO_image.webp", path: "find-x8-pro" },
  { name: "OPPO A15", image: "OPPO_A15_image.png", path: "oppo-a15" },
  { name: "OPPO A16", image: "OPPO_A16_image.png", path: "oppo-a16" },
  { name: "OPPO A16S", image: "OPPO_A16S_image.png", path: "oppo-a16s" },
  { name: "OPPO A17", image: "OPPO_A17_image.png", path: "oppo-a17" },
  { name: "OPPO A5 2020", image: "OPPO_A5_2020_image.jpg", path: "oppo-a5-2020" },
  { name: "OPPO A53", image: "OPPO_A53_image.png", path: "oppo-a53" },
  { name: "OPPO A53S", image: "OPPO_A53S_image.png", path: "oppo-a53s" },
  { name: "OPPO A54 5G", image: "OPPO_A54_5G_image.png", path: "oppo-a54-5g" },
  { name: "OPPO A54S", image: "OPPO_A54S_image.png", path: "oppo-a54s" },
  { name: "OPPO A57", image: "OPPO_A57_image.png", path: "oppo-a57" },
  { name: "OPPO A57S", image: "OPPO_A57S_image.png", path: "oppo-a57s" },
  { name: "OPPO A72", image: "OPPO_A72_image.png", path: "oppo-a72" },
  { name: "OPPO A74 4G", image: "OPPO_A74_4G_image.png", path: "oppo-a74-4g" },
  { name: "OPPO A74 5G", image: "OPPO_A74_5G_image.png", path: "oppo-a74-5g" },
  { name: "OPPO A76", image: "OPPO_A76_image.png", path: "oppo-a76" },
  { name: "OPPO A77 5G", image: "OPPO_A77_5G_image.png", path: "oppo-a77-5g" },
  { name: "OPPO A9 2020", image: "OPPO_A9_2020_image.png", path: "oppo-a9-2020" },
  { name: "OPPO A94 5G", image: "OPPO_A94_5G_image.png", path: "oppo-a94-5g" },
  { name: "OPPO A96 5G", image: "OPPO_A96_5G_image.png", path: "oppo-a96-5g" },
  { name: "RENO", image: "RENO_image.png", path: "reno" },
  { name: "RENO 10X ZOOM", image: "RENO_10X_ZOOM_image.png", path: "reno-10x-zoom" },
  { name: "RENO 12 5G", image: "RENO_12_5G_image.webp", path: "reno-12-5g" },
  { name: "RENO 12 FS 5G", image: "RENO_12_FS_5G_image.webp", path: "reno-12-fs-5g" },
  { name: "RENO 2", image: "RENO_2_image.png", path: "reno-2" },
  { name: "RENO 2Z", image: "RENO_2Z_image.png", path: "reno-2z" },
  { name: "RENO 4 5G", image: "RENO_4_5G_image.png", path: "reno-4-5g" },
  { name: "RENO 4 PRO 5G", image: "RENO_4_PRO_5G_image.png", path: "reno-4-pro-5g" },
  { name: "RENO 4Z 5G", image: "RENO_4Z_5G_image.png", path: "reno-4z-5g" },
  { name: "RENO 6 5G", image: "RENO_6_5G_image.png", path: "reno-6-5g" },
  { name: "RENO 6 PRO 5G", image: "RENO_6_PRO_5G_image.png", path: "reno-6-pro-5g" },
  { name: "RENO 7 4G", image: "RENO_7_4G_image.webp", path: "reno-7-4g" },
  { name: "RENO 7 PRO 5G", image: "RENO_7_PRO_5G_image.webp", path: "reno-7-pro-5g" },
  { name: "RENO 8", image: "RENO_8_image.png", path: "reno-8" },
  { name: "RENO 8 LITE 5G", image: "RENO_8_LITE_5G_image.png", path: "reno-8-lite-5g" },
  { name: "RENO 8 PRO 5G", image: "RENO_8_PRO_5G_image.png", path: "reno-8-pro-5g" },
  { name: "RENO Z", image: "RENO_Z_image.png", path: "reno-z" }
];

export default function OPPOModels() {
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
              <li><Link href="/reparations/smartphones/oppo" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                OPPO
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
              Réparation OPPO
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles OPPO à Saint-Nazaire
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
              Choisissez votre modèle OPPO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {oPPOModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/oppo/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_oppo/${model.image}`}
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
            Votre OPPO est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts OPPO vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation OPPO à Saint-Nazaire
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