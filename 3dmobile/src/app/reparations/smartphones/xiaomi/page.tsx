import Image from "next/image";
import Link from "next/link";

interface XiaomiModel {
  name: string;
  image: string;
  path: string;
}

const xiaomiModels: XiaomiModel[] = [
  { name: "11T 5G", image: "11T_5G_image.png", path: "11t-5g" },
  { name: "11T PRO 5G", image: "11T_PRO_5G_image.png", path: "11t-pro-5g" },
  { name: "12", image: "12_image.png", path: "12" },
  { name: "12 PRO", image: "12_PRO_image.png", path: "12-pro" },
  { name: "12T", image: "12T_image.png", path: "12t" },
  { name: "12T PRO", image: "12T_PRO_image.jpg", path: "12t-pro" },
  { name: "12X", image: "12X_image.png", path: "12x" },
  { name: "13", image: "13_image.png", path: "13" },
  { name: "13 LITE", image: "13_LITE_image.png", path: "13-lite" },
  { name: "13 PRO", image: "13_PRO_image.png", path: "13-pro" },
  { name: "13 ULTRA", image: "13_ULTRA_image.webp", path: "13-ultra" },
  { name: "13T", image: "13T_image.webp", path: "13t" },
  { name: "13T PRO", image: "13T_PRO_image.webp", path: "13t-pro" },
  { name: "14", image: "14_image.webp", path: "14" },
  { name: "14T", image: "14T_image.webp", path: "14t" },
  { name: "14T PRO", image: "14T_PRO_image.webp", path: "14t-pro" },
  { name: "MI 10 5G", image: "MI_10_5G_image.png", path: "mi-10-5g" },
  { name: "MI 10 LITE 5G", image: "MI_10_LITE_5G_image.png", path: "mi-10-lite-5g" },
  { name: "MI 10 PRO", image: "MI_10_PRO_image.png", path: "mi-10-pro" },
  { name: "MI 10T 5G", image: "MI_10T_5G_image.png", path: "mi-10t-5g" },
  { name: "MI 10T LITE 5G", image: "MI_10T_LITE_5G_image.png", path: "mi-10t-lite-5g" },
  { name: "MI 10T PRO 5G", image: "MI_10T_PRO_5G_image.png", path: "mi-10t-pro-5g" },
  { name: "MI 11 5G", image: "MI_11_5G_image.png", path: "mi-11-5g" },
  { name: "MI 11 I 5G", image: "MI_11_I_5G_image.png", path: "mi-11-i-5g" },
  { name: "MI 11 LITE 4G", image: "MI_11_LITE_4G_image.png", path: "mi-11-lite-4g" },
  { name: "MI 11 LITE 5G", image: "MI_11_LITE_5G_image.png", path: "mi-11-lite-5g" },
  { name: "MI 11 LITE 5G NE", image: "MI_11_LITE_5G_NE_image.png", path: "mi-11-lite-5g-ne" },
  { name: "MI 11 PRO 5G", image: "MI_11_PRO_5G_image.jpg", path: "mi-11-pro-5g" },
  { name: "MI 11 ULTRA", image: "MI_11_ULTRA_image.png", path: "mi-11-ultra" },
  { name: "MI 8", image: "MI_8_image.png", path: "mi-8" },
  { name: "MI 8 LITE", image: "MI_8_LITE_image.png", path: "mi-8-lite" },
  { name: "MI 9", image: "MI_9_image.png", path: "mi-9" },
  { name: "MI 9 LITE", image: "MI_9_LITE_image.png", path: "mi-9-lite" },
  { name: "MI 9 SE", image: "MI_9_SE_image.png", path: "mi-9-se" },
  { name: "MI 9T", image: "MI_9T_image.png", path: "mi-9t" },
  { name: "MI 9T PRO", image: "MI_9T_PRO_image.png", path: "mi-9t-pro" },
  { name: "MI A1", image: "MI_A1_image.png", path: "mi-a1" },
  { name: "MI A2", image: "MI_A2_image.png", path: "mi-a2" },
  { name: "MI A2 LITE", image: "MI_A2_LITE_image.png", path: "mi-a2-lite" },
  { name: "MI A3", image: "MI_A3_image.png", path: "mi-a3" },
  { name: "MI MAX 2", image: "MI_MAX_2_image.png", path: "mi-max-2" },
  { name: "MI MAX 3", image: "MI_MAX_3_image.png", path: "mi-max-3" },
  { name: "MI MIX 2S", image: "MI_MIX_2S_image.png", path: "mi-mix-2s" },
  { name: "MI MIX 3", image: "MI_MIX_3_image.png", path: "mi-mix-3" },
  { name: "MI NOTE 10", image: "MI_NOTE_10_image.png", path: "mi-note-10" },
  { name: "MI NOTE 10 LITE", image: "MI_NOTE_10_LITE_image.png", path: "mi-note-10-lite" },
  { name: "MI NOTE 10 PRO", image: "MI_NOTE_10_PRO_image.png", path: "mi-note-10-pro" },
  { name: "POCO F1", image: "POCO_F1_image.png", path: "poco-f1" },
  { name: "POCO F2 PRO", image: "POCO_F2_PRO_image.png", path: "poco-f2-pro" },
  { name: "POCO F3", image: "POCO_F3_image.png", path: "poco-f3" },
  { name: "POCO F4 5G 2022", image: "POCO_F4_5G_2022_image.jpg", path: "poco-f4-5g-2022" },
  { name: "POCO F4 GT 5G", image: "POCO_F4_GT_5G_image.webp", path: "poco-f4-gt-5g" },
  { name: "POCO F5 5G", image: "POCO_F5_5G_image.jpg", path: "poco-f5-5g" },
  { name: "POCO F5 PRO 5G", image: "POCO_F5_PRO_5G_image.webp", path: "poco-f5-pro-5g" },
  { name: "POCO F6", image: "POCO_F6_image.jpg", path: "poco-f6" },
  { name: "POCO F6 PRO", image: "POCO_F6_PRO_image.webp", path: "poco-f6-pro" },
  { name: "POCO M3", image: "POCO_M3_image.png", path: "poco-m3" },
  { name: "POCO M4 5G", image: "POCO_M4_5G_image.png", path: "poco-m4-5g" },
  { name: "POCO M4 PRO 5G", image: "POCO_M4_PRO_5G_image.png", path: "poco-m4-pro-5g" },
  { name: "POCO M5", image: "POCO_M5_image.png", path: "poco-m5" },
  { name: "POCO M5S", image: "POCO_M5S_image.png", path: "poco-m5s" },
  { name: "POCO X3", image: "POCO_X3_image.png", path: "poco-x3" },
  { name: "POCO X3 NFC", image: "POCO_X3_NFC_image.png", path: "poco-x3-nfc" },
  { name: "POCO X3 PRO", image: "POCO_X3_PRO_image.png", path: "poco-x3-pro" },
  { name: "POCO X4 GT", image: "POCO_X4_GT_image.jpg", path: "poco-x4-gt" },
  { name: "POCO X4 PRO 5G", image: "POCO_X4_PRO_5G_image.jpg", path: "poco-x4-pro-5g" },
  { name: "POCO X5 5G", image: "POCO_X5_5G_image.jpg", path: "poco-x5-5g" },
  { name: "POCO X5 PRO 5G", image: "POCO_X5_PRO_5G_image.png", path: "poco-x5-pro-5g" },
  { name: "POCO X6", image: "POCO_X6_image.webp", path: "poco-x6" },
  { name: "POCO X6 PRO", image: "POCO_X6_PRO_image.webp", path: "poco-x6-pro" },
  { name: "POCO X7", image: "POCO_X7_image.webp", path: "poco-x7" },
  { name: "POCO X7 PRO", image: "POCO_X7_PRO_image.webp", path: "poco-x7-pro" },
  { name: "REDMI 10", image: "REDMI_10_image.png", path: "redmi-10" },
  { name: "REDMI 10 2022", image: "REDMI_10_2022_image.png", path: "redmi-10-2022" },
  { name: "REDMI 10A", image: "REDMI_10A_image.png", path: "redmi-10a" },
  { name: "REDMI 10C", image: "REDMI_10C_image.png", path: "redmi-10c" },
  { name: "REDMI 12 4G", image: "REDMI_12_4G_image.jpg", path: "redmi-12-4g" },
  { name: "REDMI 12 5G", image: "REDMI_12_5G_image.jpg", path: "redmi-12-5g" },
  { name: "REDMI 12C", image: "REDMI_12C_image.png", path: "redmi-12c" },
  { name: "REDMI 13", image: "REDMI_13_image.webp", path: "redmi-13" },
  { name: "REDMI 13C", image: "REDMI_13C_image.webp", path: "redmi-13c" },
  { name: "REDMI 14C", image: "REDMI_14C_image.webp", path: "redmi-14c" },
  { name: "REDMI 5 PLUS", image: "REDMI_5_PLUS_image.png", path: "redmi-5-plus" },
  { name: "REDMI 6", image: "REDMI_6_image.png", path: "redmi-6" },
  { name: "REDMI 6A", image: "REDMI_6A_image.png", path: "redmi-6a" },
  { name: "REDMI 7", image: "REDMI_7_image.png", path: "redmi-7" },
  { name: "REDMI 7A", image: "REDMI_7A_image.png", path: "redmi-7a" },
  { name: "REDMI 8", image: "REDMI_8_image.png", path: "redmi-8" },
  { name: "REDMI 8A", image: "REDMI_8A_image.png", path: "redmi-8a" },
  { name: "REDMI 9", image: "REDMI_9_image.png", path: "redmi-9" },
  { name: "REDMI 9A", image: "REDMI_9A_image.png", path: "redmi-9a" },
  { name: "REDMI 9AT", image: "REDMI_9AT_image.png", path: "redmi-9at" },
  { name: "REDMI 9C", image: "REDMI_9C_image.png", path: "redmi-9c" },
  { name: "REDMI 9T", image: "REDMI_9T_image.png", path: "redmi-9t" },
  { name: "REDMI A1", image: "REDMI_A1_image.png", path: "redmi-a1" },
  { name: "REDMI A1 PLUS", image: "REDMI_A1_PLUS_image.png", path: "redmi-a1-plus" },
  { name: "REDMI A2", image: "REDMI_A2_image.jpg", path: "redmi-a2" },
  { name: "REDMI NOTE 10", image: "REDMI_NOTE_10_image.png", path: "redmi-note-10" },
  { name: "REDMI NOTE 10 5G", image: "REDMI_NOTE_10_5G_image.png", path: "redmi-note-10-5g" },
  { name: "REDMI NOTE 10 PRO", image: "REDMI_NOTE_10_PRO_image.png", path: "redmi-note-10-pro" },
  { name: "REDMI NOTE 10S", image: "REDMI_NOTE_10S_image.png", path: "redmi-note-10s" },
  { name: "REDMI NOTE 11", image: "REDMI_NOTE_11_image.png", path: "redmi-note-11" },
  { name: "REDMI NOTE 11 PRO 4G", image: "REDMI_NOTE_11_PRO_4G_image.png", path: "redmi-note-11-pro-4g" },
  { name: "REDMI NOTE 11 PRO 5G", image: "REDMI_NOTE_11_PRO_5G_image.png", path: "redmi-note-11-pro-5g" },
  { name: "REDMI NOTE 11 PRO PLUS 5G", image: "REDMI_NOTE_11_PRO_PLUS_5G_image.png", path: "redmi-note-11-pro-plus-5g" },
  { name: "REDMI NOTE 11S 4G", image: "REDMI_NOTE_11S_4G_image.png", path: "redmi-note-11s-4g" },
  { name: "REDMI NOTE 11S 5G", image: "REDMI_NOTE_11S_5G_image.png", path: "redmi-note-11s-5g" },
  { name: "REDMI NOTE 12 4G", image: "REDMI_NOTE_12_4G_image.png", path: "redmi-note-12-4g" },
  { name: "REDMI NOTE 12 5G", image: "REDMI_NOTE_12_5G_image.png", path: "redmi-note-12-5g" },
  { name: "REDMI NOTE 12 PRO 5G", image: "REDMI_NOTE_12_PRO_5G_image.png", path: "redmi-note-12-pro-5g" },
  { name: "REDMI NOTE 13 4G", image: "REDMI_NOTE_13_4G_image.jpg", path: "redmi-note-13-4g" },
  { name: "REDMI NOTE 13 5G", image: "REDMI_NOTE_13_5G_image.jpg", path: "redmi-note-13-5g" },
  { name: "REDMI NOTE 14 4G", image: "REDMI_NOTE_14_4G_image.webp", path: "redmi-note-14-4g" },
  { name: "REDMI NOTE 14 5G", image: "REDMI_NOTE_14_5G_image.webp", path: "redmi-note-14-5g" },
  { name: "REDMI NOTE 14 PRO 4G", image: "REDMI_NOTE_14_PRO_4G_image.webp", path: "redmi-note-14-pro-4g" },
  { name: "REDMI NOTE 14 PRO 5G", image: "REDMI_NOTE_14_PRO_5G_image.webp", path: "redmi-note-14-pro-5g" },
  { name: "REDMI NOTE 14 PRO PLUS 5G", image: "REDMI_NOTE_14_PRO_PLUS_5G_image.webp", path: "redmi-note-14-pro-plus-5g" },
  { name: "REDMI NOTE 4", image: "REDMI_NOTE_4_image.png", path: "redmi-note-4" },
  { name: "REDMI NOTE 4X", image: "REDMI_NOTE_4X_image.png", path: "redmi-note-4x" },
  { name: "REDMI NOTE 5", image: "REDMI_NOTE_5_image.png", path: "redmi-note-5" },
  { name: "REDMI NOTE 5A", image: "REDMI_NOTE_5A_image.png", path: "redmi-note-5a" },
  { name: "REDMI NOTE 6 PRO", image: "REDMI_NOTE_6_PRO_image.png", path: "redmi-note-6-pro" },
  { name: "REDMI NOTE 7", image: "REDMI_NOTE_7_image.png", path: "redmi-note-7" },
  { name: "REDMI NOTE 8", image: "REDMI_NOTE_8_image.png", path: "redmi-note-8" },
  { name: "REDMI NOTE 8 2021", image: "REDMI_NOTE_8_2021_image.png", path: "redmi-note-8-2021" },
  { name: "REDMI NOTE 8 PRO", image: "REDMI_NOTE_8_PRO_image.png", path: "redmi-note-8-pro" },
  { name: "REDMI NOTE 8T", image: "REDMI_NOTE_8T_image.png", path: "redmi-note-8t" },
  { name: "REDMI NOTE 9", image: "REDMI_NOTE_9_image.png", path: "redmi-note-9" },
  { name: "REDMI NOTE 9 5G", image: "REDMI_NOTE_9_5G_image.png", path: "redmi-note-9-5g" },
  { name: "REDMI NOTE 9 PRO", image: "REDMI_NOTE_9_PRO_image.png", path: "redmi-note-9-pro" },
  { name: "REDMI NOTE 9S", image: "REDMI_NOTE_9S_image.png", path: "redmi-note-9s" },
  { name: "REDMI NOTE 9T", image: "REDMI_NOTE_9T_image.png", path: "redmi-note-9t" },
  { name: "REDMI S2", image: "REDMI_S2_image.png", path: "redmi-s2" }
];

export default function XiaomiModels() {
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
              <li><Link href="/reparations/smartphones/xiaomi" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Xiaomi
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
              Réparation Xiaomi
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert en réparation de tous les modèles Xiaomi à Saint-Nazaire
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
              Choisissez votre modèle Xiaomi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sélectionnez votre modèle pour voir les tarifs de réparation détaillés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {xiaomiModels.map((model) => (
              <Link 
                key={model.path}
                href={`/reparations/smartphones/xiaomi/${model.path}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                  <Image
                    src={`/scrabed data/smartphones repaire/repair_data_xiaomi/${model.image}`}
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
            Votre Xiaomi est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts Xiaomi vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation Xiaomi à Saint-Nazaire
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