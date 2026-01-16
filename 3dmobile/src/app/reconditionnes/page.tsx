import Link from 'next/link';
import ProductCard from './ProductCard';
import { products, getProductsByCategory } from './products-data';

export default function ReconditionnesPage() {
  const iPhones = getProductsByCategory('iphone');
  const samsungs = getProductsByCategory('samsung');
  const tablets = getProductsByCategory('tablet');
  const pcs = getProductsByCategory('pc');

  return (
    <div className="min-h-screen bg-gray-50">
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
              <li><Link href="/reparations" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Réparations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reconditionnes" className="text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Reconditionnés
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-rose-600"></span>
              </Link></li>
              <li><a href="#deblocage" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Déblocage
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-rose-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Téléphones Reconditionnés
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Découvrez notre sélection d'appareils reconditionnés avec garantie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">📱 Garantie 12 mois</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">✅ Testé et certifié</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="font-semibold">🚀 Livraison offerte</span>
            </div>
          </div>
        </div>
      </section>

      {/* iPhones Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">iPhone Reconditionnés</h2>
            <div className="text-sm text-gray-600">
              {iPhones.length} modèles disponibles
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {iPhones.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Samsung Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Samsung Reconditionnés</h2>
            <div className="text-sm text-gray-600">
              {samsungs.length} modèles disponibles
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {samsungs.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Tablets Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Tablettes Reconditionnées</h2>
            <div className="text-sm text-gray-600">
              {tablets.length} modèles disponibles
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tablets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PCs Section */}
      {pcs.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">PC Reconditionnés</h2>
              <div className="text-sm text-gray-600">
                {pcs.length} modèles disponibles
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pcs.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas votre modèle ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous et nous vous aiderons à trouver l'appareil parfait
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0980677518" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Appeler maintenant
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              ✉️ Nous contacter
            </Link>
          </div>
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
                <li><Link href="/reconditionnes" className="hover:text-white transition-colors">Reconditionnés</Link></li>
                <li><a href="#deblocage" className="hover:text-white transition-colors">Déblocage</a></li>
                <li><a href="#accessoires" className="hover:text-white transition-colors">Accessoires</a></li>
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
