import Image from "next/image";
import Link from "next/link";

export default function InformatiqueReparations() {
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
      <nav className="bg-white/95 backdrop-blur-xl shadow-xl sticky top-0 z-40 border-b border-gray-100/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-rose-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">3D</span>
              </div>
              <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">3DMobile.net</Link>
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Accueil
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reparations" className="text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Réparations
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-600 to-blue-600"></span>
              </Link></li>
              <li><Link href="/reconditionnes" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Reconditionnés
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><a href="/deblocage" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Déblocage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
                💻 NOUVEAU SERVICE !
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Réparations Informatiques
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              3DMobile, votre solution de confiance pour toutes les réparations informatiques
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
              Diagnostique et devis gratuit. Nous réparons vos ordinateurs : récupération de données, mise à jour, réinstallation, suppression de virus.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Restez Connecté et Opérationnel
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Chez 3DMobile, nous comprenons à quel point il est crucial pour vous de rester connecté et opérationnel, que ce soit pour le travail, l'éducation ou le divertissement.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                C'est pourquoi nous nous engageons à fournir des services de réparation rapides, fiables et abordables pour tous vos appareils informatiques.
              </p>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-4">Notre Expertise</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Techniciens experts certifiés</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Diagnostic complet et précis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Solutions efficaces et durables</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Transparence et prix compétitifs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src="/photos/Solve Your Computer Hardware Woes! 💻🔧.jpg"
                alt="Réparation ordinateur"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Nos Services de Réparation
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto font-medium">
            Nos techniciens experts sont équipés pour traiter une vaste gamme de problèmes
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Réparation PC et MAC</h3>
              <p className="text-gray-700">Ordinateurs portables et de bureau toutes marques</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📺</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Réparation Écran Cassé</h3>
              <p className="text-gray-700">Remplacement d'écrans de portable et moniteurs</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Problème de Démarrage</h3>
              <p className="text-gray-700">Diagnostic et résolution des problèmes de démarrage</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Nettoyage et Pâte Thermique</h3>
              <p className="text-gray-700">Prévention surchauffe et optimisation performance</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-green-700">Suppression de Virus</h3>
              <p className="text-gray-700">Élimination des virus et logiciels malveillants</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Récupération de Données</h3>
              <p className="text-gray-700">Restauration de données perdues ou corrompues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware & Software Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Matériel et Logiciel
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardware */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🔧</div>
                <h3 className="text-2xl font-bold text-green-600">Mises à Niveau Matérielles</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Installation SSD et disques durs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Augmentation mémoire RAM</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Remplacement carte mère</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Changement processeur</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Installation carte graphique</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500">✓</span>
                  <span>Remplacement alimentation</span>
                </li>
              </ul>
            </div>

            {/* Software */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">⚙️</div>
                <h3 className="text-2xl font-bold text-blue-600">Mises à Niveau Logicielles</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span>
                  <span>Réinstallation Windows</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span>
                  <span>Installation macOS</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span>
                  <span>Mise à jour drivers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span>
                  <span>Configuration logiciels</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span>
                  <span>Optimisation système</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✓</span>
                  <span>Nettoyage et maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & QualiRépar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Tarifs et Avantages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-green-700">🔍 Diagnostic Complet</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 39€</div>
              <p className="text-gray-600 text-sm">Diagnostic matériel et logiciel complet</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700">🧹 Nettoyage Système</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 49€</div>
              <p className="text-gray-600 text-sm">Optimisation et nettoyage complet</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-green-700">💾 Installation SSD</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 79€</div>
              <p className="text-gray-600 text-sm">Installation et configuration SSD</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700">🛡️ Suppression Virus</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">dès 59€</div>
              <p className="text-gray-600 text-sm">Élimination complète des menaces</p>
            </div>
          </div>
          
          {/* QualiRépar Bonus */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-xl text-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🎉 50€ de remise immédiate !
              </h3>
              <p className="text-lg text-gray-800 font-semibold">
                Grâce au bonus QualiRépar*
              </p>
            </div>
            <div className="text-white">
              <p className="text-sm mb-4">
                *Profitez de l'aide gouvernementale pour la réparation de vos appareils informatiques
              </p>
              <Link href="/contact" className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Bénéficier du bonus QualiRépar
              </Link>
            </div>
          </div>
          
          <div className="text-center bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-700 mb-4">
              <strong className="text-lg text-green-700">Garantie sur toutes les réparations : 6 mois</strong>
            </p>
            <p className="text-gray-600 mb-6">
              Devis gratuit et sans engagement. Avant toute intervention, nous vous fournirons un devis clair, sans frais cachés ni surprises.
            </p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Votre Ordinateur est en Panne ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts vous attendent pour un diagnostic rapide et une réparation de qualité.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="tel:0980677518" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 Appeler maintenant
            </a>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              📧 Contacter par formulaire
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-80">
            Ouvert du lundi au vendredi : 10h00 - 13h00 / 14h30 - 18h00
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3D</span>
                </div>
                <div className="text-2xl font-bold">3DMobile.net</div>
              </div>
              <p className="text-gray-400">
                Votre spécialiste de la réparation et du reconditionnement mobile à Saint-Nazaire.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/reparations" className="hover:text-white transition-colors">Réparations</Link></li>
                <li><Link href="/reparations/informatique" className="hover:text-white transition-colors">Informatique</Link></li>
                <li><Link href="/reparations/console" className="hover:text-white transition-colors">Consoles</Link></li>
                <li><Link href="/reconditionnes" className="hover:text-white transition-colors">Reconditionnés</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 70 avenue de la république</li>
                <li>📍 44600 Saint-Nazaire</li>
                <li>📞 09 80 67 75 18</li>
                <li>✉️ contact@3dmobile.net</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Horaires</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lundi - Vendredi: 9h-19h</li>
                <li>Samedi: 9h-12h</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 3DMobile.net. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
