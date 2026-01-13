import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              <li><a href="#" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#reparations" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors duration-300 relative group">
                Réparations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#reconditionnes" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Reconditionnés
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#deblocage" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors duration-300 relative group">
                Déblocage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors duration-300 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 backdrop-blur-xl text-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Votre réparateur <span className="text-blue-600">local de confiance</span>
              </h1>
              <p className="text-xl mb-8 text-gray-800 leading-relaxed font-medium">
                Chez 3DMobile.net, la réparation c'est du sérieux – local, rapide et garanti. 
                Nous réparons vos smartphones, tablettes, ordinateurs et consoles directement dans notre atelier à Saint-Nazaire.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-300">
                  <span className="text-3xl">✅</span>
                  <span className="font-semibold text-gray-800">Service rapide et sur place</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-300">
                  <span className="text-3xl">✅</span>
                  <span className="font-semibold text-gray-800">Qualité et transparence</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-300">
                  <span className="text-3xl">✅</span>
                  <span className="font-semibold text-gray-800">Vraie relation client</span>
                </div>
              </div>
              <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 inline-block shadow-xl hover:shadow-2xl transform hover:scale-105">
                Nous contacter
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-lg blur-xl"></div>
              <Image
                src="/photos/Réparation Iphone.jpg"
                alt="Réparation smartphone"
                width={500}
                height={400}
                className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

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
            <Link href="/reparations" className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 hover:border-rose-400 block">
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

      {/* What to Repair Section */}
      <section id="deblocage" className="py-16 bg-rose-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Que souhaitez-vous réparer ?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
            Diagnostic rapide et devis gratuit pour tous vos appareils
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">📱 Écran cassé</h3>
              <p className="text-gray-700 mb-4 font-medium">Remplacement d'écran original en moins d'une heure</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• iPhone, Samsung, Xiaomi</li>
                <li>• Garantie 6 mois</li>
                <li>• Prix dès 39€</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">🔋 Batterie défectueuse</h3>
              <p className="text-gray-700 mb-4 font-medium">Changement de batterie neuve garantie</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Autonomie restaurée</li>
                <li>• Pièces certifiées</li>
                <li>• Intervention rapide</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">💧 Problème d'eau</h3>
              <p className="text-gray-700 mb-4 font-medium">Désoxydation et nettoyage complet</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Diagnostic immédiat</li>
                <li>• Sauvegarde données</li>
                <li>• Réparation possible</li>
              </ul>
            </div>
          </div>
          
          {/* Phone Unlocking Section */}
          <div className="bg-blue-100 p-8 rounded-2xl border border-gray-300">
            <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
              🔓 Déblocage Téléphone
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Déblocage tout opérateur</h4>
                <p className="text-gray-700 mb-4 font-medium">
                  Libérez votre téléphone pour l'utiliser avec n'importe quel opérateur. 
                  Service rapide et légal avec garantie de fonctionnement.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Tous les modèles : iPhone, Samsung, Xiaomi, Huawei...</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Déblocage par IMEI officiel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Garantie de déblocage permanent</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Ne vide pas la garantie de votre appareil</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Tarifs de déblocage</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">iPhone tous modèles</span>
                    <span className="font-bold text-blue-600">49€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Samsung Galaxy</span>
                    <span className="font-bold text-rose-600">39€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Autres marques</span>
                    <span className="font-bold text-gray-700">35€</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Délai : 1-24h selon le modèle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-white/80 via-blue-50/60 to-rose-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-rose-400/80">🚀 Service rapide disponible</span>
              </h2>
              <p className="text-lg mb-4 text-gray-700/90 leading-relaxed">
                Vous ne pouvez pas vous déplacer ? Contactez-nous pour organiser une réparation rapide.
              </p>
              <p className="text-lg mb-8 text-gray-700/90 leading-relaxed">
                📞 Appelez-nous au <span className="font-bold text-blue-500/80">09 80 67 75 18</span> pour prendre rendez-vous.
              </p>
              
              <div className="bg-gradient-to-r from-blue-100/60 to-rose-100/60 backdrop-blur-sm p-6 rounded-xl mb-6 border border-white/50">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">📍 Nos horaires</h3>
                <div className="space-y-3 text-gray-700/90">
                  <div className="flex justify-between items-center p-2 bg-white/40 rounded-lg backdrop-blur-sm">
                    <span className="font-medium">Lundi - Vendredi:</span>
                    <span className="font-bold text-blue-500/80">10h00 - 13h00 / 14h30 - 18h00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/40 rounded-lg backdrop-blur-sm">
                    <span className="font-medium">Samedi:</span>
                    <span className="font-bold text-rose-500/80">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/40 rounded-lg backdrop-blur-sm">
                    <span className="font-medium">Dimanche:</span>
                    <span className="font-bold text-gray-600/80">Fermé</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-rose-200/30 rounded-2xl blur-2xl"></div>
              <Image
                src="/photos/Technician repair smartphone on desk components broken clipping path _ Premium AI-generated image.jpg"
                alt="Technicien en réparation"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reconditionnés Section */}
      <section id="reconditionnes" className="py-16 bg-gradient-to-br from-blue-50/60 to-rose-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-rose-400/80">NOS RECONDITIONNÉS</span>
          </h2>
          <p className="text-center text-gray-600/80 mb-12 max-w-3xl mx-auto">
            Smartphones reconditionnés à Saint-Nazaire – Fiables, garantis et testés sur place. 
            Chaque téléphone est contrôlé sur plus de 50 points essentiels, avec batterie neuve ou à plus de 90% minimum.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">iPhone Reconditionnés</h3>
              <p className="text-gray-600/80 mb-4">iPhone X, 11, 12, 13, 14 et modèles Pro</p>
              <ul className="text-sm text-gray-600/70 space-y-1">
                <li>• Garantie 12 mois</li>
                <li>• Batterie &gt; 90%</li>
                <li>• Déblocé tout opérateur</li>
                <li>• Chargeur et câble inclus</li>
              </ul>
              <p className="text-lg font-bold text-blue-600/80 mt-4">Dès 189€</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Samsung Reconditionnés</h3>
              <p className="text-gray-600/80 mb-4">Galaxy S20, S21, S22, S23 et série A</p>
              <ul className="text-sm text-gray-600/70 space-y-1">
                <li>• Garantie 12 mois</li>
                <li>• Écran parfait</li>
                <li>• Coque impeccable</li>
                <li>• Double SIM disponible</li>
              </ul>
              <p className="text-lg font-bold text-rose-600/80 mt-4">Dès 149€</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Autres Marques</h3>
              <p className="text-gray-600/80 mb-4">Xiaomi, Huawei, Oppo, OnePlus...</p>
              <ul className="text-sm text-gray-600/70 space-y-1">
                <li>• Garantie 6 mois</li>
                <li>• Testé en boutique</li>
                <li>• Mise à jour système</li>
                <li>• Prix imbattables</li>
              </ul>
              <p className="text-lg font-bold text-gray-700/80 mt-4">Dès 99€</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100/60 to-rose-100/60 backdrop-blur-sm p-8 rounded-2xl border border-white/50">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="font-semibold text-gray-800 mb-2">Contrôle 50 points</h4>
                <p className="text-sm text-gray-700/80">Test complet de toutes les fonctionnalités</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔋</div>
                <h4 className="font-semibold text-gray-800 mb-2">Batterie certifiée</h4>
                <p className="text-sm text-gray-700/80">Minimum 90% de capacité d'origine</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Garantie locale</h4>
                <p className="text-sm text-gray-700/80">Service après-vente à Saint-Nazaire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-white/80 via-blue-50/60 to-rose-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/80 to-rose-400/80">Pourquoi nous choisir ?</span>
          </h2>
          <p className="text-center text-gray-600/80 mb-12 max-w-2xl mx-auto">
            Plus de 12 ans d'expérience au service de vos appareils
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Rapidité</h3>
              <p className="text-gray-600/80">
                La plupart des réparations effectuées en moins d'une heure. 
                Diagnostic immédiat et devis gratuit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Expertise</h3>
              <p className="text-gray-600/80">
                Techniciens certifiés et formés continuellement. 
                Pièces de qualité et garantie sur toutes nos réparations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Écologie</h3>
              <p className="text-gray-600/80">
                Nous réduisons l'impact environnemental en réparant 
                et reconditionnant vos appareils plutôt que de les remplacer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Local</h3>
              <p className="text-gray-600/80">
                Service basé à Saint-Nazaire. Pas d'envoi extérieur, 
                tout est fait sur place par notre équipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-rose-50/60 to-blue-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400/80 to-blue-400/80">Ce que disent nos clients</span>
          </h2>
          <p className="text-center text-gray-600/80 mb-12 max-w-2xl mx-auto">
            Des milliers de clients satisfaits à Saint-Nazaire et environs
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200/50">
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700/90 mb-4 italic">
                "Service excellent ! Mon écran d'iPhone a été réparé en moins d'une heure. 
                Prix très raisonnable et personnel très professionnel."
              </p>
              <p className="font-semibold text-gray-800">- Marie L., Saint-Nazaire</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200/50">
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700/90 mb-4 italic">
                "J'ai acheté un Samsung reconditionné et il est comme neuf ! 
                Batterie parfaite, aucun défaut. Je recommande vivement."
              </p>
              <p className="font-semibold text-gray-800">- Thomas P., Pornic</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200/50">
              <div className="flex mb-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-700/90 mb-4 italic">
                "Déblocage de mon iPhone effectué rapidement. 
                Service client au top, ils m'ont bien expliqué la procédure."
              </p>
              <p className="font-semibold text-gray-800">- Sophie M., La Baule</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-100 backdrop-blur-xl text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Contactez-nous
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Une question ? Un problème avec votre appareil ? Notre équipe est là pour vous aider !
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📍</span>
                Adresse
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-gray-800">3DMobile.net</p>
                <p>70 avenue de la république</p>
                <p>44600 Saint-Nazaire</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-300">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  Téléphone
                </h3>
                <a href="tel:0980677518" className="text-2xl font-bold hover:text-blue-600 transition-colors">
                  09 80 67 75 18
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-300">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">✉️</span>
                  Email
                </h3>
                <a href="mailto:informatique216@gmail.com" className="text-gray-700 hover:text-rose-600 transition-colors">
                  informatique216@gmail.com
                </a>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-2xl border border-gray-300 hover:bg-gray-200 transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🕐</span>
                Horaires d'ouverture
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Lundi - Vendredi:</span>
                  <span className="font-bold text-blue-600">10h00 - 13h00 / 14h30 - 18h00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Samedi:</span>
                  <span className="font-bold text-rose-600">Sur rendez-vous</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Dimanche:</span>
                  <span className="font-bold text-gray-600">Fermé</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-gray-300">
                <p className="text-sm text-center">
                  <span className="font-bold text-blue-600">⚡ Service rapide</span><br/>
                  La plupart des réparations effectuées en moins d'une heure !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 relative">
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
