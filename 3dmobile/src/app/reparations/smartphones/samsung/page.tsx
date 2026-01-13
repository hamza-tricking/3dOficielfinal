import Image from "next/image";
import Link from "next/link";

interface SamsungGalaxyModel {
  name: string;
  image: string;
  path: string;
}

const samsungGalaxyModels: SamsungGalaxyModel[] = [
  { name: "Galaxy A01", image: "GALAXY_A01_image.png", path: "galaxy-a01" },
  { name: "Galaxy A02S", image: "GALAXY_A02S_image.png", path: "galaxy-a02s" },
  { name: "Galaxy A03", image: "GALAXY_A03_image.png", path: "galaxy-a03" },
  { name: "Galaxy A03S", image: "GALAXY_A03S_image.png", path: "galaxy-a03s" },
  { name: "Galaxy A04S", image: "GALAXY_A04S_image.png", path: "galaxy-a04s" },
  { name: "Galaxy A05S", image: "GALAXY_A05S_image.jpg", path: "galaxy-a05s" },
  { name: "Galaxy A10", image: "GALAXY_A10_image.png", path: "galaxy-a10" },
  { name: "Galaxy A10S", image: "GALAXY_A10S_image.png", path: "galaxy-a10s" },
  { name: "Galaxy A11", image: "GALAXY_A11_image.png", path: "galaxy-a11" },
  { name: "Galaxy A12", image: "GALAXY_A12_image.png", path: "galaxy-a12" },
  { name: "Galaxy A12S", image: "GALAXY_A12S_image.png", path: "galaxy-a12s" },
  { name: "Galaxy A13 4G", image: "GALAXY_A13_4G_image.png", path: "galaxy-a13-4g" },
  { name: "Galaxy A13 5G", image: "GALAXY_A13_5G_image.png", path: "galaxy-a13-5g" },
  { name: "Galaxy A14 4G", image: "GALAXY_A14_4G_image.png", path: "galaxy-a14-4g" },
  { name: "Galaxy A14 5G", image: "GALAXY_A14_5G_image.png", path: "galaxy-a14-5g" },
  { name: "Galaxy A15", image: "GALAXY_A15_image.jpg", path: "galaxy-a15" },
  { name: "Galaxy A16 4G", image: "GALAXY_A16_4G_image.png", path: "galaxy-a16-4g" },
  { name: "Galaxy A16 5G", image: "GALAXY_A16_5G_image.jpg", path: "galaxy-a16-5g" },
  { name: "Galaxy A20", image: "GALAXY_A20_image.png", path: "galaxy-a20" },
  { name: "Galaxy A20E", image: "GALAXY_A20E_image.png", path: "galaxy-a20e" },
  { name: "Galaxy A20S", image: "GALAXY_A20S_image.png", path: "galaxy-a20s" },
  { name: "Galaxy A21S", image: "GALAXY_A21S_image.png", path: "galaxy-a21s" },
  { name: "Galaxy A22 4G", image: "GALAXY_A22_4G_image.png", path: "galaxy-a22-4g" },
  { name: "Galaxy A22 5G", image: "GALAXY_A22_5G_image.png", path: "galaxy-a22-5g" },
  { name: "Galaxy A23 4G", image: "GALAXY_A23_4G_image.jpg", path: "galaxy-a23-4g" },
  { name: "Galaxy A23 5G", image: "GALAXY_A23_5G_image.jpg", path: "galaxy-a23-5g" },
  { name: "Galaxy A24 4G", image: "GALAXY_A24_4G_image.jpg", path: "galaxy-a24-4g" },
  { name: "Galaxy A25 5G", image: "GALAXY_A25_5G_image.webp", path: "galaxy-a25-5g" },
  { name: "Galaxy A26", image: "GALAXY_A26_image.jpg", path: "galaxy-a26" },
  { name: "Galaxy A30", image: "GALAXY_A30_image.png", path: "galaxy-a30" },
  { name: "Galaxy A30S", image: "GALAXY_A30S_image.png", path: "galaxy-a30s" },
  { name: "Galaxy A31", image: "GALAXY_A31_image.png", path: "galaxy-a31" },
  { name: "Galaxy A32 4G", image: "GALAXY_A32_4G_image.png", path: "galaxy-a32-4g" },
  { name: "Galaxy A32 5G", image: "GALAXY_A32_5G_image.png", path: "galaxy-a32-5g" },
  { name: "Galaxy A33 5G", image: "GALAXY_A33_5G_image.png", path: "galaxy-a33-5g" },
  { name: "Galaxy A34 5G", image: "GALAXY_A34_5G_image.png", path: "galaxy-a34-5g" },
  { name: "Galaxy A35 5G", image: "GALAXY_A35_5G_image.webp", path: "galaxy-a35-5g" },
  { name: "Galaxy A36", image: "GALAXY_A36_image.jpg", path: "galaxy-a36" },
  { name: "Galaxy A3 2015", image: "GALAXY_A3_2015_image.png", path: "galaxy-a3-2015" },
  { name: "Galaxy A3 2016", image: "GALAXY_A3_2016_image.png", path: "galaxy-a3-2016" },
  { name: "Galaxy A3 2017", image: "GALAXY_A3_2017_image.png", path: "galaxy-a3-2017" },
  { name: "Galaxy A40", image: "GALAXY_A40_image.png", path: "galaxy-a40" },
  { name: "Galaxy A41", image: "GALAXY_A41_image.png", path: "galaxy-a41" },
  { name: "Galaxy A42 5G", image: "GALAXY_A42_5G_image.png", path: "galaxy-a42-5g" },
  { name: "Galaxy A50", image: "GALAXY_A50_image.png", path: "galaxy-a50" },
  { name: "Galaxy A50S", image: "GALAXY_A50S_image.png", path: "galaxy-a50s" },
  { name: "Galaxy A51", image: "GALAXY_A51_image.png", path: "galaxy-a51" },
  { name: "Galaxy A51 5G", image: "GALAXY_A51_5G_image.png", path: "galaxy-a51-5g" },
  { name: "Galaxy A52", image: "GALAXY_A52_image.png", path: "galaxy-a52" },
  { name: "Galaxy A52S 5G", image: "GALAXY_A52S_5G_image.png", path: "galaxy-a52s-5g" },
  { name: "Galaxy A53 5G", image: "GALAXY_A53_5G_image.png", path: "galaxy-a53-5g" },
  { name: "Galaxy A54", image: "GALAXY_A54_image.jpg", path: "galaxy-a54" },
  { name: "Galaxy A55 5G", image: "GALAXY_A55_5G_image.jpg", path: "galaxy-a55-5g" },
  { name: "Galaxy A5 2016", image: "GALAXY_A5_2016_image.png", path: "galaxy-a5-2016" },
  { name: "Galaxy A5 2017", image: "GALAXY_A5_2017_image.png", path: "galaxy-a5-2017" },
  { name: "Galaxy A6 2018", image: "GALAXY_A6_2018_image.png", path: "galaxy-a6-2018" },
  { name: "Galaxy A6 Plus 2018", image: "GALAXY_A6_PLUS_2018_image.png", path: "galaxy-a6-plus-2018" },
  { name: "Galaxy A70", image: "GALAXY_A70_image.png", path: "galaxy-a70" },
  { name: "Galaxy A71", image: "GALAXY_A71_image.png", path: "galaxy-a71" },
  { name: "Galaxy A72", image: "GALAXY_A72_image.png", path: "galaxy-a72" },
  { name: "Galaxy A7 2018", image: "GALAXY_A7_2018_image.png", path: "galaxy-a7-2018" },
  { name: "Galaxy A80", image: "GALAXY_A80_image.png", path: "galaxy-a80" },
  { name: "Galaxy A8 2018", image: "GALAXY_A8_2018_image.png", path: "galaxy-a8-2018" },
  { name: "Galaxy A9 2018", image: "GALAXY_A9_2018_image.png", path: "galaxy-a9-2018" },
  { name: "Galaxy M11", image: "galaxy_M11_image.png", path: "galaxy-m11" },
  { name: "Galaxy M12", image: "galaxy_M12_image.png", path: "galaxy-m12" },
  { name: "Galaxy M13", image: "galaxy_M13_image.png", path: "galaxy-m13" },
  { name: "Galaxy M20", image: "galaxy_M20_image.png", path: "galaxy-m20" },
  { name: "Galaxy M21", image: "galaxy_M21_image.png", path: "galaxy-m21" },
  { name: "Galaxy M23", image: "galaxy_M23_image.png", path: "galaxy-m23" },
  { name: "Galaxy M31", image: "galaxy_M31_image.png", path: "galaxy-m31" },
  { name: "Galaxy M33 5G", image: "galaxy_M33_5G_image.png", path: "galaxy-m33-5g" },
  { name: "Galaxy M51", image: "galaxy_M51_image.png", path: "galaxy-m51" },
  { name: "Galaxy M52", image: "galaxy_M52_image.png", path: "galaxy-m52" },
  { name: "Galaxy M53 5G", image: "GALAXY_M53_5G_image.jpg", path: "galaxy-m53-5g" },
  { name: "Galaxy J1 2016", image: "galaxy_j1_2016_image.png", path: "galaxy-j1-2016" },
  { name: "Galaxy J2 2018", image: "galaxy_j2_2018_image.png", path: "galaxy-j2-2018" },
  { name: "Galaxy J3 2016", image: "galaxy_j3_2016_image.png", path: "galaxy-j3-2016" },
  { name: "Galaxy J3 2017", image: "galaxy_j3_2017_image.png", path: "galaxy-j3-2017" },
  { name: "Galaxy J4 Plus", image: "galaxy_j4_plus_image.png", path: "galaxy-j4-plus" },
  { name: "Galaxy J5 2015", image: "galaxy_j5_2015_image.png", path: "galaxy-j5-2015" },
  { name: "Galaxy J5 2016", image: "galaxy_j5_2016_image.png", path: "galaxy-j5-2016" },
  { name: "Galaxy J5 2017", image: "galaxy_j5_2017_image.png", path: "galaxy-j5-2017" },
  { name: "Galaxy J6 2018", image: "galaxy_j6_2018_image.png", path: "galaxy-j6-2018" },
  { name: "Galaxy J7 2016", image: "galaxy_j7_2016_image.png", path: "galaxy-j7-2016" },
  { name: "Galaxy J7 2017", image: "galaxy_j7_2017_image.png", path: "galaxy-j7-2017" },
  { name: "Galaxy J8 2018", image: "galaxy_j8_2018_image.png", path: "galaxy-j8-2018" },
  { name: "Galaxy Note 4", image: "GALAXY_NOTE_4_image.png", path: "galaxy-note-4" },
  { name: "Galaxy Note 8", image: "GALAXY_NOTE_8_image.png", path: "galaxy-note-8" },
  { name: "Galaxy Note 9", image: "GALAXY_NOTE_9_image.png", path: "galaxy-note-9" },
  { name: "Galaxy Note 10", image: "GALAXY_NOTE_10_image.png", path: "galaxy-note-10" },
  { name: "Galaxy Note 10 Plus", image: "GALAXY_NOTE_10_PLUS_image.png", path: "galaxy-note-10-plus" },
  { name: "Galaxy Note 10 Lite", image: "GALAXY_NOTE_10_LITE_image.png", path: "galaxy-note-10-lite" },
  { name: "Galaxy Note 20", image: "GALAXY_NOTE_20_image.png", path: "galaxy-note-20" },
  { name: "Galaxy Note 20 Ultra", image: "GALAXY_NOTE_20_ULTRA_image.png", path: "galaxy-note-20-ultra" },
  { name: "Galaxy S5", image: "GALAXY_S5_image.png", path: "galaxy-s5" },
  { name: "Galaxy S6", image: "GALAXY_S6_image.png", path: "galaxy-s6" },
  { name: "Galaxy S6 Edge", image: "GALAXY_S6_EDGE_image.png", path: "galaxy-s6-edge" },
  { name: "Galaxy S6 Edge Plus", image: "GALAXY_S6_EDGE_PLUS_image.png", path: "galaxy-s6-edge-plus" },
  { name: "Galaxy S7", image: "GALAXY_S7_image.png", path: "galaxy-s7" },
  { name: "Galaxy S7 Edge", image: "GALAXY_S7_EDGE_image.png", path: "galaxy-s7-edge" },
  { name: "Galaxy S8", image: "GALAXY_S8_image.png", path: "galaxy-s8" },
  { name: "Galaxy S8 Plus", image: "GALAXY_S8_PLUS_image.png", path: "galaxy-s8-plus" },
  { name: "Galaxy S9", image: "GALAXY_S9_image.png", path: "galaxy-s9" },
  { name: "Galaxy S9 Plus", image: "GALAXY_S9_PLUS_image.png", path: "galaxy-s9-plus" },
  { name: "Galaxy S10", image: "GALAXY_S10_image.png", path: "galaxy-s10" },
  { name: "Galaxy S10 5G", image: "GALAXY_S10_5G_image.png", path: "galaxy-s10-5g" },
  { name: "Galaxy S10E", image: "GALAXY_S10E_image.png", path: "galaxy-s10e" },
  { name: "Galaxy S10 Lite", image: "GALAXY_S10_LITE_image.png", path: "galaxy-s10-lite" },
  { name: "Galaxy S10 Plus", image: "GALAXY_S10_PLUS_image.png", path: "galaxy-s10-plus" },
  { name: "Galaxy S20", image: "GALAXY_S20_image.png", path: "galaxy-s20" },
  { name: "Galaxy S20 5G", image: "GALAXY_S20_5G_image.png", path: "galaxy-s20-5g" },
  { name: "Galaxy S20 FE", image: "GALAXY_S20_FE_image.png", path: "galaxy-s20-fe" },
  { name: "Galaxy S20 FE 5G", image: "GALAXY_S20_FE_5G_image.png", path: "galaxy-s20-fe-5g" },
  { name: "Galaxy S20 Plus", image: "GALAXY_S20_PLUS_image.png", path: "galaxy-s20-plus" },
  { name: "Galaxy S20 Ultra", image: "GALAXY_S20_ULTRA_image.png", path: "galaxy-s20-ultra" },
  { name: "Galaxy S21 5G", image: "GALAXY_S21_5G_image.png", path: "galaxy-s21-5g" },
  { name: "Galaxy S21 FE 5G", image: "GALAXY_S21_FE_5G_image.png", path: "galaxy-s21-fe-5g" },
  { name: "Galaxy S21 Plus 5G", image: "GALAXY_S21_PLUS_5G_image.png", path: "galaxy-s21-plus-5g" },
  { name: "Galaxy S21 Ultra 5G", image: "GALAXY_S21_ULTRA_5G_image.png", path: "galaxy-s21-ultra-5g" },
  { name: "Galaxy S22", image: "GALAXY_S22_image.png", path: "galaxy-s22" },
  { name: "Galaxy S22 Plus", image: "GALAXY_S22_PLUS_image.png", path: "galaxy-s22-plus" },
  { name: "Galaxy S22 Ultra", image: "GALAXY_S22_ULTRA_image.png", path: "galaxy-s22-ultra" },
  { name: "Galaxy S23", image: "GALAXY_S23_image.png", path: "galaxy-s23" },
  { name: "Galaxy S23 FE", image: "GALAXY_S23_FE_image.webp", path: "galaxy-s23-fe" },
  { name: "Galaxy S23 Plus", image: "GALAXY_S23_PLUS_image.png", path: "galaxy-s23-plus" },
  { name: "Galaxy S23 Ultra", image: "GALAXY_S23_ULTRA_image.png", path: "galaxy-s23-ultra" },
  { name: "Galaxy S24", image: "GALAXY_S24_image.webp", path: "galaxy-s24" },
  { name: "Galaxy S24 FE", image: "GALAXY_S24_FE_image.webp", path: "galaxy-s24-fe" },
  { name: "Galaxy S24 Plus", image: "GALAXY_S24_PLUS_image.webp", path: "galaxy-s24-plus" },
  { name: "Galaxy S24 Ultra", image: "GALAXY_S24_ULTRA_image.jpg", path: "galaxy-s24-ultra" },
  { name: "Galaxy S25", image: "GALAXY_S25_image.webp", path: "galaxy-s25" },
  { name: "Galaxy S25 Plus", image: "GALAXY_S25_PLUS_image.webp", path: "galaxy-s25-plus" },
  { name: "Galaxy S25 Ultra", image: "GALAXY_S25_ULTRA_image.webp", path: "galaxy-s25-ultra" },
  { name: "Galaxy Z Flip", image: "GALAXY_Z_FLIP_image.png", path: "galaxy-z-flip" },
  { name: "Galaxy Z Flip 3 5G", image: "GALAXY_Z_FLIP_3_5G_image.png", path: "galaxy-z-flip-3-5g" },
  { name: "Galaxy Z Flip 4", image: "GALAXY_Z_FLIP_4_image.png", path: "galaxy-z-flip-4" },
  { name: "Galaxy Z Fold 2", image: "GALAXY_Z_FOLD_2_image.jpg", path: "galaxy-z-fold-2" },
  { name: "Galaxy Z Fold 3", image: "GALAXY_Z_FOLD_3_image.jpg", path: "galaxy-z-fold-3" },
  { name: "Galaxy Z Fold 4", image: "GALAXY_Z_FOLD_4_image.jpg", path: "galaxy-z-fold-4" },
  { name: "Galaxy Z Fold 5", image: "GALAXY_Z_FOLD_5_image.jpg", path: "galaxy-z-fold-5" },
  { name: "Galaxy Z Fold 6", image: "GALAXY_Z_FOLD_6_image.webp", path: "galaxy-z-fold-6" },
];

export default function SamsungGalaxyModels() {
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
              <li><Link href="/reparations/smartphones/samsung" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
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
              Réparation Samsung Galaxy
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Samsung Galaxy à Saint-Nazaire
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
              Choisissez votre modèle Samsung Galaxy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {samsungGalaxyModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/samsung/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_samsung/${model.image}`}
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
            Votre Samsung Galaxy est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Samsung Galaxy vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation Samsung Galaxy à Saint-Nazaire
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
