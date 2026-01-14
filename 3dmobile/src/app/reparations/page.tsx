import Image from "next/image";
import Link from "next/link";

export default function Reparations() {
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
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Nos Services de Réparation
            </h1>
              {/* Services Section */}
      <section id="reparations" className="py-16 bg-gray-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Nos services de réparation
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
            Des experts qualifiés pour tous vos appareils électroniques
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/reparations/smartphones" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 hover:border-blue-400 block">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">SMARTPHONES</h3>
              <p className="text-gray-700 font-medium">Écran cassé, batterie, panne, désoxydation</p>
            </Link>
            <Link href="/reparations/tablettes" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 hover:border-rose-400 block">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-xl font-bold mb-2 text-rose-600">TABLETTES</h3>
              <p className="text-gray-700 font-medium">Réparation de tous types de tablettes</p>
            </Link>
            <Link href="/reparations" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 hover:border-blue-400 block">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎮</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">CONSOLES</h3>
              <p className="text-gray-700 font-medium">Réparation de consoles de jeux</p>
            </Link>
            <Link href="/reparations" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 hover:border-rose-400 block">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
              <h3 className="text-xl font-bold mb-2 text-rose-600">ORDINATEURS</h3>
              <p className="text-gray-700 font-medium">Réparations informatiques Mac et PC</p>
            </Link>
          </div>
        </div>
      </section>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Experts en réparation de tous types d'appareils électroniques à Saint-Nazaire
            </p>
          </div>
        </div>
      </section>

      {/* Smartphones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">📱 Réparation Smartphones</h2>
              <p className="text-lg text-gray-700 mb-6">
                Réparation professionnelle de tous les modèles de smartphones à Saint-Nazaire
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Remplacement d'écran original en moins d'une heure</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Changement de batterie neuve garantie</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Réparation des problèmes de charge et boutons</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Désoxydation et récupération de données</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Réparation caméra et micro</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Déblocage tous opérateurs</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="font-semibold text-blue-700 mb-2">Marques traitées :</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <span className="bg-white px-2 py-1 rounded">iPhone</span>
                  <span className="bg-white px-2 py-1 rounded">Samsung</span>
                  <span className="bg-white px-2 py-1 rounded">Xiaomi</span>
                  <span className="bg-white px-2 py-1 rounded">Huawei</span>
                  <span className="bg-white px-2 py-1 rounded">OnePlus</span>
                  <span className="bg-white px-2 py-1 rounded">Google Pixel</span>
                  <span className="bg-white px-2 py-1 rounded">Sony</span>
                  <span className="bg-white px-2 py-1 rounded">Nokia</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/photos/Réparation Iphone.jpg"
                alt="Réparation smartphone"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tablets Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2">
              <h2 className="text-3xl font-bold mb-6 text-rose-600">📱 Réparation Tablettes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Réparation de tous types de tablettes : iPad, Samsung Galaxy Tab, Xiaomi Pad...
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Remplacement écran tactile et LCD</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Changement batterie et port de charge</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Réparation boutons home et volume</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Réparation caméra et haut-parleur</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Récupération de données bloquées</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/photos/Technician repair smartphone on desk components broken clipping path _ Premium AI-generated image.jpg"
                alt="Réparation tablette"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Computers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">💻 Réparation Informatique</h2>
              <p className="text-lg text-gray-700 mb-6">
                Service complet de réparation informatique pour PC et Mac à Saint-Nazaire
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Diagnostic et dépannage matériel</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Nettoyage et optimisation système</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Installation SSD et mise à niveau</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Récupération de données perdues</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Suppression virus et logiciels malveillants</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Configuration et installation logiciels</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/photos/Solve Your Computer Hardware Woes! 💻🔧.jpg"
                alt="Réparation ordinateur"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consoles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2">
              <h2 className="text-3xl font-bold mb-6 text-rose-600">🎮 Réparation Consoles de Jeux</h2>
              <p className="text-lg text-gray-700 mb-6">
                Réparation de toutes les consoles de jeux : PlayStation, Xbox, Nintendo Switch
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Remplacement lecteur Blu-ray/DVD</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Réparation problème d'alimentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Nettoyage et désoxydation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Réparation manette et Joy-Con</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Mise à jour système et logiciels</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span>Réparation problème de surchauffe</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/photos/download (56).jpg"
                alt="Réparation console"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Tarifs de Réparation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-blue-600">📱 Smartphone</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Écran cassé</span>
                  <span className="font-bold text-gray-800">dès 39€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Batterie</span>
                  <span className="font-bold text-gray-800">dès 49€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Port de charge</span>
                  <span className="font-bold text-gray-800">dès 29€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Boutons</span>
                  <span className="font-bold text-gray-800">dès 25€</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-rose-600">📱 Tablette</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Écran tactile</span>
                  <span className="font-bold text-gray-800">dès 59€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Batterie</span>
                  <span className="font-bold text-gray-800">dès 69€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Port de charge</span>
                  <span className="font-bold text-gray-800">dès 39€</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-blue-600">💻 Ordinateur</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Diagnostic complet</span>
                  <span className="font-bold text-gray-800">dès 39€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Nettoyage système</span>
                  <span className="font-bold text-gray-800">dès 49€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Installation SSD</span>
                  <span className="font-bold text-gray-800">dès 79€</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-rose-600">🎮 Console</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Lecteur DVD/Blu-ray</span>
                  <span className="font-bold text-gray-800">dès 49€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Alimentation</span>
                  <span className="font-bold text-gray-800">dès 39€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Surchauffe</span>
                  <span className="font-bold text-gray-800">dès 59€</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              <strong className="text-lg">Garantie sur toutes les réparations : 6 mois</strong>
            </p>
            <p className="text-gray-600 mb-8">
              Devis gratuit et sans engagement. Intervention rapide sur place ou à domicile.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre appareil est en panne ?
          </h2>
          <p className="text-xl mb-8">
            Nos experts vous attendent pour un diagnostic rapide et une réparation de qualité.
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
            Votre expert en réparation de smartphones, tablettes, ordinateurs et consoles à Saint-Nazaire
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
