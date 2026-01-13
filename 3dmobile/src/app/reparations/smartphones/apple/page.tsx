import Image from "next/image";
import Link from "next/link";

interface AppleiPhoneModel {
  name: string;
  image: string;
  path: string;
}

const appleiPhoneModels: AppleiPhoneModel[] = [
  { name: "iPhone 5", image: "iphone_5_image.png", path: "iphone-5" },
  { name: "iPhone 5c", image: "iphone_5c_image.png", path: "iphone-5c" },
  { name: "iPhone 5s", image: "iphone_5s_image.png", path: "iphone-5s" },
  { name: "iPhone 6", image: "iphone_6_image.png", path: "iphone-6" },
  { name: "iPhone 6 Plus", image: "iphone_6_plus_image.png", path: "iphone-6-plus" },
  { name: "iPhone 6s", image: "iphone_6s_image.png", path: "iphone-6s" },
  { name: "iPhone 6s Plus", image: "iphone_6s_plus_image.png", path: "iphone-6s-plus" },
  { name: "iPhone 7", image: "iphone_7_image.jpg", path: "iphone-7" },
  { name: "iPhone 7 Plus", image: "iphone_7_plus_image.png", path: "iphone-7-plus" },
  { name: "iPhone 8", image: "iphone_8_image.png", path: "iphone-8" },
  { name: "iPhone 8 Plus", image: "iphone_8_plus_image.png", path: "iphone-8-plus" },
  { name: "iPhone SE 2016", image: "IPHONE_SE_2016_image.png", path: "iphone-se-2016" },
  { name: "iPhone SE 2020", image: "iphone_se_2020_image.png", path: "iphone-se-2020" },
  { name: "iPhone SE 2022", image: "iphone_se_2022_image.png", path: "iphone-se-2022" },
  { name: "iPhone X", image: "iphone_x_image.png", path: "iphone-x" },
  { name: "iPhone Xs", image: "iphone_xs_image.png", path: "iphone-xs" },
  { name: "iPhone Xs Max", image: "iphone_xs_max_image.png", path: "iphone-xs-max" },
  { name: "iPhone XR", image: "iphone_XR_image.png", path: "iphone-xr" },
  { name: "iPhone 11", image: "iphone_11_image.png", path: "iphone-11" },
  { name: "iPhone 11 Pro", image: "iphone_11_pro_image.png", path: "iphone-11-pro" },
  { name: "iPhone 11 Pro Max", image: "iphone_11_pro_max_image.png", path: "iphone-11-pro-max" },
  { name: "iPhone 12", image: "iphone_12_image.jpg", path: "iphone-12" },
  { name: "iPhone 12 Mini", image: "iphone_12_mini_image.png", path: "iphone-12-mini" },
  { name: "iPhone 12 Pro", image: "iphone_12_pro_image.jpg", path: "iphone-12-pro" },
  { name: "iPhone 12 Pro Max", image: "iphone_12_pro_max_image.jpg", path: "iphone-12-pro-max" },
  { name: "iPhone 13", image: "iphone_13_image.png", path: "iphone-13" },
  { name: "iPhone 13 Mini", image: "iphone_13_mini_image.png", path: "iphone-13-mini" },
  { name: "iPhone 13 Pro", image: "iphone_13_pro_image.webp", path: "iphone-13-pro" },
  { name: "iPhone 13 Pro Max", image: "iphone_13_pro_max_image.webp", path: "iphone-13-pro-max" },
  { name: "iPhone 14", image: "IPHONE_14_image.png", path: "iphone-14" },
  { name: "iPhone 14 Plus", image: "IPHONE_14_PLUS_image.png", path: "iphone-14-plus" },
  { name: "iPhone 14 Pro", image: "IPHONE_14_PRO_image.png", path: "iphone-14-pro" },
  { name: "iPhone 14 Pro Max", image: "IPHONE_14_PRO_MAX_image.png", path: "iphone-14-pro-max" },
  { name: "iPhone 15", image: "IPHONE_15_image.png", path: "iphone-15" },
  { name: "iPhone 15 Plus", image: "IPHONE_15_PLUS_image.png", path: "iphone-15-plus" },
  { name: "iPhone 15 Pro", image: "IPHONE_15_PRO_image.png", path: "iphone-15-pro" },
  { name: "iPhone 15 Pro Max", image: "IPHONE_15_PRO_MAX_image.png", path: "iphone-15-pro-max" },
  { name: "iPhone 16", image: "IPHONE_16_image.png", path: "iphone-16" },
  { name: "iPhone 16 Plus", image: "IPHONE_16_PLUS_image.png", path: "iphone-16-plus" },
  { name: "iPhone 16 Pro", image: "IPHONE_16_PRO_image.png", path: "iphone-16-pro" },
  { name: "iPhone 16 Pro Max", image: "IPHONE_16_PRO_MAX_image.png", path: "iphone-16-pro-max" },
];

export default function AppleiPhoneModels() {
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
              <li><Link href="/reparations/smartphones/apple" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Apple
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
              Réparation Apple iPhone
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Apple iPhone à Saint-Nazaire
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
              Choisissez votre modèle Apple iPhone
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {appleiPhoneModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/apple/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_iphone/${model.image}`}
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
            Votre Apple iPhone est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Apple iPhone vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation Apple iPhone à Saint-Nazaire
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
