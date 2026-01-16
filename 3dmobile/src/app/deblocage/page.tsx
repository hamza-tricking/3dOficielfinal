"use client";

import { useState } from "react";
import Link from "next/link";

export default function Deblocage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    network: "",
    imei: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        brand: "",
        model: "",
        network: "",
        imei: ""
      });
    }, 2000);
  };

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
              <li><Link href="/reparations" className="text-gray-700 hover:text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Réparations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/reconditionnes" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Reconditionnés
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link href="/deblocage" className="text-rose-600 font-semibold transition-all duration-300 relative group py-2">
                Déblocage
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-rose-600 to-blue-600"></span>
              </Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-rose-600 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 via-blue-600 to-rose-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Déblocage de Téléphones
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Libérez votre téléphone pour l'utiliser avec tous les opérateurs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="font-semibold">🔓 Tous opérateurs</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="font-semibold">⚡ Service rapide</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="font-semibold">💰 Tarifs compétitifs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Notre Service de Déblocage
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-rose-50 to-blue-50 p-6 rounded-xl border border-rose-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-rose-700">Déblocage Opérateur</h3>
              <p className="text-gray-700">Débloquez votre téléphone pour l'utiliser avec n'importe quel opérateur français</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-rose-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Déblocage International</h3>
              <p className="text-gray-700">Utilisez votre téléphone à l'étranger avec n'importe quel réseau local</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-blue-50 p-6 rounded-xl border border-rose-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2 text-rose-700">Réparation IMEI</h3>
              <p className="text-gray-700">Dépannage des problèmes de code IMEI et de déverrouillage</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-rose-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-blue-700">Service Express</h3>
              <p className="text-gray-700">Déblocage rapide en magasin ou à distance</p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-blue-50 p-6 rounded-xl border border-rose-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-rose-700">Garantie Satisfait</h3>
              <p className="text-gray-700">Service garanti et sans risque pour votre appareil</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Tarifs de Déblocage
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-rose-50 to-blue-50 p-6 rounded-xl border border-rose-200">
              <h3 className="text-xl font-bold mb-4 text-rose-700">📱 iPhone</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tous modèles</span>
                  <span className="text-2xl font-bold text-gray-900">dès 29€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">iPhone X et plus récents</span>
                  <span className="text-2xl font-bold text-gray-900">dès 39€</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-rose-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-blue-700">📱 Samsung</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Galaxy S/A series</span>
                  <span className="text-2xl font-bold text-gray-900">dès 39€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Autres modèles</span>
                  <span className="text-2xl font-bold text-gray-900">dès 29€</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-blue-50 p-6 rounded-xl border border-rose-200">
              <h3 className="text-xl font-bold mb-4 text-rose-700">📱 Autres Marques</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Xiaomi, Huawei, OnePlus</span>
                  <span className="text-2xl font-bold text-gray-900">dès 29€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Google Pixel, Sony</span>
                  <span className="text-2xl font-bold text-gray-900">dès 39€</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-700 mb-4">
              <strong className="text-lg text-rose-700">Tarif unique et fixe</strong>
            </p>
            <p className="text-gray-600">
              Pas de frais cachés. Le prix comprend le déblocage complet avec garantie.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Request Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Demande de Déblocage
              </h2>
              
              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  ✅ Votre demande de déblocage a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                      Marque du téléphone *
                    </label>
                    <select
                      id="brand"
                      name="brand"
                      required
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez une marque</option>
                      <option value="apple">Apple iPhone</option>
                      <option value="samsung">Samsung</option>
                      <option value="xiaomi">Xiaomi</option>
                      <option value="huawei">Huawei</option>
                      <option value="oneplus">OnePlus</option>
                      <option value="google">Google Pixel</option>
                      <option value="sony">Sony</option>
                      <option value="nokia">Nokia</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                      Modèle *
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      required
                      value={formData.model}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="iPhone 14, Galaxy S23, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="network" className="block text-sm font-medium text-gray-700 mb-2">
                    Opérateur actuel *
                  </label>
                  <select
                    id="network"
                    name="network"
                    required
                    value={formData.network}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un opérateur</option>
                    <option value="orange">Orange</option>
                    <option value="sfr">SFR</option>
                    <option value="bouygues">Bouygues Telecom</option>
                    <option value="free">Free Mobile</option>
                    <option value="numericable">Numericable</option>
                    <option value="virgin">Virgin Mobile</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="imei" className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro IMEI (si connu)
                  </label>
                  <input
                    type="text"
                    id="imei"
                    name="imei"
                    value={formData.imei}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="15 chiffres (tapez *#06# sur votre téléphone)"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Facultatif mais aide au traitement plus rapide
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi en cours..." : "Demander le déblocage"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Contactez-nous directement
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Adresse du magasin</h3>
                      <p className="text-gray-700">70 avenue de la république</p>
                      <p className="text-gray-700">44600 Saint-Nazaire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <a href="tel:0980677518" className="text-rose-600 hover:underline">09 80 67 75 18</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:informatique216@gmail.com" className="text-rose-600 hover:underline">informatique216@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">🕐 Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">10h00 - 13h00 / 14h30 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h - 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium text-red-600">Fermé</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">⚡ Pourquoi nous choisir ?</h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Service rapide et professionnel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Tarifs transparents et fixes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Garantie sur tous les déblocages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Support technique inclus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Questions Fréquentes
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Qu'est-ce que le déblocage ?</h3>
              <p className="text-gray-700">
                Le déblocage permet de libérer votre téléphone pour l'utiliser avec n'importe quel opérateur, pas seulement celui d'origine.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Est-ce légal ?</h3>
              <p className="text-gray-700">
                Oui, le déblocage est totalement légal en France. Vous êtes propriétaire de votre téléphone et avez le droit de l'utiliser avec l'opérateur de votre choix.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Combien de temps ça prend ?</h3>
              <p className="text-gray-700">
                En général, le déblocage prend entre 15 minutes et 1 heure. Pour les modèles plus récents, cela peut prendre jusqu'à 24h.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Que faire si je ne connais pas mon IMEI ?</h3>
              <p className="text-gray-700">
                Composez *#06# sur le clavier de votre téléphone. Le code à 15 chiffres s'affichera à l'écran. Sinon, nous pouvons le retrouver avec le numéro de série.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à débloquer votre téléphone ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès maintenant pour un service rapide et professionnel
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:0980677518" 
              className="bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Appeler maintenant
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-all"
            >
              ✉️ Contacter par formulaire
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
                Votre spécialiste du déblocage mobile à Saint-Nazaire.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/reparations" className="hover:text-white transition-colors">Réparations</Link></li>
                <li><Link href="/reconditionnes" className="hover:text-white transition-colors">Reconditionnés</Link></li>
                <li><Link href="/deblocage" className="hover:text-white transition-colors">Déblocage</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 70 avenue de la république</li>
                <li>📍 44600 Saint-Nazaire</li>
                <li>📞 09 80 67 75 18</li>
                <li>✉️ informatique216@gmail.com</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Horaires</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lundi - Vendredi: 10h00 - 13h00 / 14h30 - 18h00</li>
                <li>Samedi: 9h - 12h</li>
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
