import Image from "next/image";
import Link from "next/link";

interface HonorModel {
  name: string;
  image: string;
  path: string;
}

const honorModels: HonorModel[] = [
  { name: "HONOR 10", image: "HONOR_10_image.png", path: "honor-10" },
  { name: "HONOR 10 LITE", image: "HONOR_10_LITE_image.png", path: "honor-10-lite" },
  { name: "HONOR 10X LITE", image: "HONOR_10X_LITE_image.png", path: "honor-10x-lite" },
  { name: "HONOR 20", image: "HONOR_20_image.png", path: "honor-20" },
  { name: "HONOR 20 LITE", image: "HONOR_20_LITE_image.png", path: "honor-20-lite" },
  { name: "HONOR 20 PRO", image: "HONOR_20_PRO_image.png", path: "honor-20-pro" },
  { name: "HONOR 200", image: "HONOR_200_image.webp", path: "honor-200" },
  { name: "HONOR 200 LITE", image: "HONOR_200_LITE_image.jpg", path: "honor-200-lite" },
  { name: "HONOR 50", image: "HONOR_50_image.png", path: "honor-50" },
  { name: "HONOR 50 LITE", image: "HONOR_50_LITE_image.png", path: "honor-50-lite" },
  { name: "HONOR 5C", image: "HONOR_5C_image.png", path: "honor-5c" },
  { name: "HONOR 5X", image: "HONOR_5X_image.png", path: "honor-5x" },
  { name: "HONOR 6A", image: "HONOR_6A_image.png", path: "honor-6a" },
  { name: "HONOR 6C", image: "HONOR_6C_image.png", path: "honor-6c" },
  { name: "HONOR 6C PRO", image: "HONOR_6C_PRO_image.png", path: "honor-6c-pro" },
  { name: "HONOR 6X", image: "HONOR_6X_image.png", path: "honor-6x" },
  { name: "HONOR 7", image: "HONOR_7_image.png", path: "honor-7" },
  { name: "HONOR 70", image: "HONOR_70_image.png", path: "honor-70" },
  { name: "HONOR 70 LITE", image: "HONOR_70_LITE_image.png", path: "honor-70-lite" },
  { name: "HONOR 7A", image: "HONOR_7A_image.png", path: "honor-7a" },
  { name: "HONOR 7C", image: "HONOR_7C_image.png", path: "honor-7c" },
  { name: "HONOR 7S", image: "HONOR_7S_image.png", path: "honor-7s" },
  { name: "HONOR 7X", image: "HONOR_7X_image.png", path: "honor-7x" },
  { name: "HONOR 8", image: "HONOR_8_image.png", path: "honor-8" },
  { name: "HONOR 8 LITE", image: "HONOR_8_LITE_image.png", path: "honor-8-lite" },
  { name: "HONOR 8 PRO", image: "HONOR_8_PRO_image.png", path: "honor-8-pro" },
  { name: "HONOR 8A", image: "HONOR_8A_image.png", path: "honor-8a" },
  { name: "HONOR 8S", image: "HONOR_8S_image.png", path: "honor-8s" },
  { name: "HONOR 8X", image: "HONOR_8X_image.png", path: "honor-8x" },
  { name: "HONOR 9", image: "HONOR_9_image.png", path: "honor-9" },
  { name: "HONOR 9 LITE", image: "HONOR_9_LITE_image.png", path: "honor-9-lite" },
  { name: "HONOR 90", image: "HONOR_90_image.jpg", path: "honor-90" },
  { name: "HONOR 90 LITE", image: "HONOR_90_LITE_image.jpg", path: "honor-90-lite" },
  { name: "HONOR 9A", image: "HONOR_9A_image.png", path: "honor-9a" },
  { name: "HONOR 9X", image: "HONOR_9X_image.png", path: "honor-9x" },
  { name: "HONOR 9X LITE", image: "HONOR_9X_LITE_image.png", path: "honor-9x-lite" },
  { name: "HONOR 9X PRO", image: "HONOR_9X_PRO_image.png", path: "honor-9x-pro" },
  { name: "HONOR MAGIC 4 LITE", image: "HONOR_MAGIC_4_LITE_image.webp", path: "honor-magic-4-lite" },
  { name: "HONOR MAGIC 4 PRO", image: "HONOR_MAGIC_4_PRO_image.webp", path: "honor-magic-4-pro" },
  { name: "HONOR MAGIC 5 LITE", image: "HONOR_MAGIC_5_LITE_image.jpg", path: "honor-magic-5-lite" },
  { name: "HONOR MAGIC 5 PRO", image: "HONOR_MAGIC_5_PRO_image.jpg", path: "honor-magic-5-pro" },
  { name: "HONOR MAGIC 6 PRO", image: "HONOR_MAGIC_6_PRO_image.webp", path: "honor-magic-6-pro" },
  { name: "HONOR PLAY", image: "HONOR_PLAY_image.png", path: "honor-play" },
  { name: "HONOR VIEW 10", image: "HONOR_VIEW_10_image.png", path: "honor-view-10" },
  { name: "HONOR VIEW 20", image: "HONOR_VIEW_20_image.png", path: "honor-view-20" },
  { name: "HONOR X7A", image: "HONOR_X7A_image.webp", path: "honor-x7a" },
  { name: "HONOR X8", image: "HONOR_X8_image.png", path: "honor-x8" }
];

export default function HonorModels() {
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
              <li><Link href="/reparations/smartphones/honor" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Honor
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
              Réparation Honor
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Honor à Saint-Nazaire
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
              Choisissez votre modèle Honor
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {honorModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/honor/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_honor/${model.image}`}
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
            Votre Honor est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Honor vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation Honor à Saint-Nazaire
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