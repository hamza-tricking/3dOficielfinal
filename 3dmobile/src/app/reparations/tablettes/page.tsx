import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import BrandCard from "@/components/BrandCard";

export default function Tablettes() {
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
      <section className="bg-rose-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Réparation Tablettes
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Experts en réparation de tous les modèles de tablettes à Saint-Nazaire
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="tel:0980677518" className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors">
                📞 Appeler maintenant
              </Link>
              <Link href="/contact" className="bg-white text-rose-600 border-2 border-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                📧 Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Services de Réparation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="📱"
              title="Écran Cassé"
              description="Remplacement d'écran original en moins de 2 heures. Pièces certifiées avec garantie 6 mois."
              features={[
                "Écran tactile et LCD",
                "Vitre et cadre",
                "Calibration couleurs",
                "Test complet"
              ]}
              price="dès 59€"
              priceColor="text-rose-600"
              borderColor="hover:border-rose-400"
              titleColor="text-rose-600"
            />

            <ServiceCard
              icon="🔋"
              title="Batterie Défectueuse"
              description="Changement de batterie neuve garantie. Autonomie restaurée à 100%."
              features={[
                "Batterie certifiée",
                "Test de santé",
                "Optimisation iOS/Android",
                "Garantie 6 mois"
              ]}
              price="dès 69€"
              priceColor="text-blue-600"
              borderColor="hover:border-blue-400"
              titleColor="text-blue-600"
            />

            <ServiceCard
              icon="⚡"
              title="Problème de Charge"
              description="Réparation du port de charge et remplacement des composants défectueux."
              features={[
                "Port USB-C/Lightning",
                "Connecteur interne",
                "Test de charge",
                "Nettoyage complet"
              ]}
              price="dès 39€"
              priceColor="text-rose-600"
              borderColor="hover:border-rose-400"
              titleColor="text-rose-600"
            />

            <ServiceCard
              icon="🔊"
              title="Haut-Parleur & Micro"
              description="Remplacement du haut-parleur, micro et écouteurs internes."
              features={[
                "Sonnerie et musique",
                "Micro principal",
                "Écouteurs internes",
                "Test audio complet"
              ]}
              price="dès 45€"
              priceColor="text-blue-600"
              borderColor="hover:border-blue-400"
              titleColor="text-blue-600"
            />

            <ServiceCard
              icon="📷"
              title="Caméra & Photo"
              description="Réparation et remplacement des caméras avant et arrière."
              features={[
                "Caméra principale",
                "Selfie caméra",
                "Flash LED",
                "Mise au point"
              ]}
              price="dès 55€"
              priceColor="text-rose-600"
              borderColor="hover:border-rose-400"
              titleColor="text-rose-600"
            />

            <ServiceCard
              icon="🔧"
              title="Boutons & Connecteurs"
              description="Réparation des boutons home, volume et connecteurs divers."
              features={[
                "Bouton home",
                "Boutons volume",
                "Bouton power",
                "Test complet"
              ]}
              price="dès 35€"
              priceColor="text-blue-600"
              borderColor="hover:border-blue-400"
              titleColor="text-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Marques de Tablettes Réparées
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 items-center">
            <BrandCard 
              src="/scrabed data/tablettes repaire/brand_images/Apple_logo.png" 
              alt="Apple iPad"
              href="/reparations/tablettes/apple"
            />
            <BrandCard 
              src="/scrabed data/tablettes repaire/brand_images/Samsung_logo.png" 
              alt="Samsung Galaxy Tab"
              href="/reparations/tablettes/samsung"
            />
            <BrandCard 
              src="/scrabed data/tablettes repaire/brand_images/Xiaomi_logo.png" 
              alt="Xiaomi Pad"
              href="/reparations/tablettes/xiaomi"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Notre Processus de Réparation
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Diagnostic Gratuit</h3>
              <p className="text-gray-600">
                Analyse complète de votre tablette pour identifier le problème exact.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Devis Immédiat</h3>
              <p className="text-gray-600">
                Tarif transparent et détaillé sans aucun engagement de votre part.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-rose-600">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Réparation Rapide</h3>
              <p className="text-gray-600">
                Intervention sur place en moins de 2 heures pour la plupart des réparations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Garantie 6 Mois</h3>
              <p className="text-gray-600">
                Toutes nos réparations sont garanties pièces et main d'œuvre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre Tablette est en Panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation de tablettes à Saint-Nazaire
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
