"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ScreenRepairService from "@/components/ScreenRepairService";
import DataRecoveryService from "@/components/DataRecoveryService";
import StandardService from "@/components/StandardService";

const repairServices = [
  { id: "ecran-oled-similaire-loriginal", name: "Ecran OLED similaire à l'original", normalPrice: "149.00€ TTC", discountPrice: "124.00€ TTC", duration: "30 minutes" },
  { id: "battery", name: "Batterie", normalPrice: "59.00€ TTC", discountPrice: "34.00€ TTC", duration: "45 minutes" },
  { id: "sim-tray-sim", name: "Tiroir sim", normalPrice: "10.00€ TTC", duration: "30 minutes" },
  { id: "dsoxydation", name: "Désoxydation", normalPrice: "49.00€ TTC", duration: "30 minutes" },
  { id: "data-transfer-de-donnes", name: "Transfert de données", normalPrice: "20.00€ TTC", duration: "30 minutes" },
  { id: "rcupration-de-donnes", name: "Récupération de données", normalPrice: "30.00€ TTC", duration: "30 minutes" },
  { id: "diagnostic-de-panne", name: "Recherche de panne", normalPrice: "GRATUITE", duration: "15 minutes" }
];

export default function Pixel4XlPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showScreenProtectionModal, setShowScreenProtectionModal] = useState<string | null>(null);
  const [showDataRecoveryModal, setShowDataRecoveryModal] = useState<string | null>(null);
  const [selectedProtection, setSelectedProtection] = useState<{[key: string]: string}>({});

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => prev.includes(serviceId) ? prev.filter(id => id !== serviceId) : [...prev, serviceId]);
  };

  const handleProtectionSelect = (serviceId: string, protection: string) => {
    setSelectedProtection(prev => ({ ...prev, [serviceId]: protection }));
    setSelectedServices(prev => prev.includes(serviceId) ? prev : [...prev, serviceId]);
    setShowScreenProtectionModal(null);
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `✅ ${protection === 'hydrogel' ? 'Film en Hydrogel (+20€)' : protection === 'verre-trempe' ? 'Film en verre trempé (+10€)' : 'Sans protection'} ajouté`;
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 3000);
  };

  const handleDataRecoverySelect = (serviceId: string, recoveryType: string) => {
    setSelectedProtection(prev => ({ ...prev, [serviceId]: recoveryType }));
    setSelectedServices(prev => prev.includes(serviceId) ? prev : [...prev, serviceId]);
    setShowDataRecoveryModal(null);
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `✅ ${recoveryType === 'avec-demontage' ? 'Récupération avec démontage (+20€)' : 'Récupération sans démontage'} ajouté`;
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 3000);
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = repairServices.find(s => s.id === serviceId);
      if (!service) return total;
      let servicePrice = parseFloat((service.discountPrice || service.normalPrice).replace('€ TTC', '').replace('GRATUITE', '0'));
      const protection = selectedProtection[serviceId];
      if (protection === 'hydrogel') servicePrice += 20;
      else if (protection === 'verre-trempe') servicePrice += 10;
      else if (protection === 'avec-demontage') servicePrice += 20;
      return total + (isNaN(servicePrice) ? 0 : servicePrice);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
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

      <nav className="bg-white shadow-lg sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold text-blue-600">3DMobile.net</div>
            <ul className="hidden md:flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">Accueil</Link></li>
              <li><Link href="/reparations" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors">Réparations</Link></li>
              <li><Link href="/reparations/smartphones" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">Smartphones</Link></li>
              <li><Link href="/reparations/smartphones/google-pixel" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">Google Pixel</Link></li>
              <li><Link href="/reconditionnes" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">Reconditionnés</Link></li>
              <li><Link href="/deblocage" className="text-gray-800 hover:text-rose-600 font-semibold transition-colors">Déblocage</Link></li>
              <li><Link href="/contact" className="text-gray-800 hover:text-blue-600 font-semibold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Réparations PIXEL 4 XL</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Expert en réparation du PIXEL 4 XL à Saint-Nazaire</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="tel:0980677518" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50">📞 Prendre rendez-vous en ligne</a>
              <Link href="/contact" className="bg-blue-600 text-white border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-700">📧 Prendre rendez-vous 09 80 67 75 18</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <Image src="/scrabed data/smartphones repaire/repair_data_google_pixel/PIXEL_4_XL_image.png" alt="PIXEL 4 XL" width={400} height={400} className="w-full h-auto object-contain" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Obtenez une réparation rapide pour votre appareil PIXEL 4 XL à Saint-Nazaire !</h2>
              <p className="text-lg text-gray-600 mb-4">Si votre PIXEL 4 XL ne s'allume plus, présente un écran fissuré, des problèmes d'appels ou des problèmes de charge, ne vous inquiétez pas ! Nos experts en réparation sont là pour vous offrir leur assistance et restaurer votre appareil à son plein potentiel.</p>
              <p className="text-lg text-gray-600 mb-4">Nos techniciens effectuent un diagnostic complet de votre PIXEL 4 XL de manière rapide et précise, vous fournissant ainsi les détails de la panne et les coûts de réparation. Avec une moyenne de plus de 450 réparations par mois dans nos boutiques, nous sommes en mesure de choisir les meilleures pièces de remplacement à des prix compétitifs, notamment pour les écrans et les batteries.</p>
              <p className="text-lg text-gray-600">Associé à la formation de nos techniciens et réparateurs, confier la réparation de votre smartphone à 3DMobile garantit une remise en état de votre appareil en 1 heure pour la plupart des problèmes rencontrés. Nous prenons en charge directement en boutique et en temps réel 100% des pannes que votre appareil PIXEL 4 XL pourrait rencontrer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Réparations PIXEL 4 XL</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Sélectionnez les réparations dont vous avez besoin</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <ScreenRepairService id="ecran-oled-similaire-loriginal" name="Ecran OLED similaire à l'original" normalPrice="149.00€ TTC" discountPrice="124.00€ TTC" duration="30 minutes" isSelected={selectedServices.includes("ecran-oled-similaire-loriginal")} selectedProtection={selectedProtection["ecran-oled-similaire-loriginal"]} onToggle={handleServiceToggle} onProtectionSelect={handleProtectionSelect} />
              <StandardService id="battery" name="Batterie" normalPrice="59.00€ TTC" discountPrice="34.00€ TTC" duration="45 minutes" isSelected={selectedServices.includes("battery")} onToggle={handleServiceToggle} />
              <StandardService id="sim-tray-sim" name="Tiroir sim" normalPrice="10.00€ TTC" duration="30 minutes" isSelected={selectedServices.includes("sim-tray-sim")} onToggle={handleServiceToggle} />
              <StandardService id="dsoxydation" name="Désoxydation" normalPrice="49.00€ TTC" duration="30 minutes" isSelected={selectedServices.includes("dsoxydation")} onToggle={handleServiceToggle} />
              <StandardService id="data-transfer-de-donnes" name="Transfert de données" normalPrice="20.00€ TTC" duration="30 minutes" isSelected={selectedServices.includes("data-transfer-de-donnes")} onToggle={handleServiceToggle} />
              <DataRecoveryService id="rcupration-de-donnes" name="Récupération de données" normalPrice="30.00€ TTC" duration="30 minutes" isSelected={selectedServices.includes("rcupration-de-donnes")} selectedRecoveryType={selectedProtection["rcupration-de-donnes"]} onToggle={handleServiceToggle} onRecoverySelect={handleDataRecoverySelect} />
              <StandardService id="diagnostic-de-panne" name="Recherche de panne" normalPrice="GRATUITE" duration="15 minutes" isSelected={selectedServices.includes("diagnostic-de-panne")} onToggle={handleServiceToggle} />
            </div>
            
            {selectedServices.length > 0 && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Résumé de votre sélection</h3>
                  <div className="text-2xl font-bold text-blue-600">Total: {calculateTotal().toFixed(2)}€</div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 mb-2">Services sélectionnés:</p>
                  <ul className="space-y-1">
                    {selectedServices.map(serviceId => {
                      const service = repairServices.find(s => s.id === serviceId);
                      if (!service) return null;
                      const protection = selectedProtection[serviceId];
                      let serviceName = service.name;
                      let servicePrice = service.discountPrice || service.normalPrice;
                      if (protection === 'hydrogel') { serviceName += ' (Film Hydrogel)'; servicePrice = servicePrice.replace('€ TTC', '') + ' + 20€ TTC'; }
                      else if (protection === 'verre-trempe') { serviceName += ' (Verre trempé)'; servicePrice = servicePrice.replace('€ TTC', '') + ' + 10€ TTC'; }
                      else if (protection === 'avec-demontage') { serviceName += ' (Avec démontage)'; servicePrice = servicePrice.replace('€ TTC', '') + ' + 20€ TTC'; }
                      return <li key={serviceId} className="text-gray-700">• {serviceName} - {servicePrice}</li>;
                    })}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <a href="tel:0980677518" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">📞 Appeler pour prendre rendez-vous</a>
                  <Link href="/contact" className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">📧 Envoyer cette demande</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6"><span className="text-4xl font-bold text-white">3DMobile.net</span></div>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Votre expert en réparation PIXEL 4 XL à Saint-Nazaire</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="tel:0980677518" className="flex items-center gap-2 text-gray-400 hover:text-white"><span className="text-xl">📞</span><span>09 80 67 75 18</span></a>
            <a href="mailto:informatique216@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white"><span className="text-xl">✉️</span><span>Contact</span></a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <div className="text-sm text-gray-500">
              <p>© 2024 3DMobile.net - Tous droits réservés</p>
              <p className="mt-2 text-xs">70 avenue de la république, 44600 Saint-Nazaire</p>
            </div>
          </div>
        </div>
      </footer>

      {showScreenProtectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowScreenProtectionModal(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Choisir une protection d'écran :</h2>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="protection" value="hydrogel" className="w-4 h-4 text-blue-600" />
                  <div><span className="text-base font-medium text-gray-800">Film en Hydrogel</span><div className="text-xs text-gray-500">Protection maximale</div></div>
                </div>
                <span className="text-base font-bold text-blue-600">+20€</span>
              </label>
              <label className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="protection" value="verre-trempe" className="w-4 h-4 text-blue-600" />
                  <div><span className="text-base font-medium text-gray-800">Film en verre trempé</span><div className="text-xs text-gray-500">Protection standard</div></div>
                </div>
                <span className="text-base font-bold text-blue-600">+10€</span>
              </label>
              <label className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="protection" value="sans-protection" className="w-4 h-4 text-blue-600" />
                  <div><span className="text-base font-medium text-gray-800">Sans protection</span><div className="text-xs text-gray-500">Aucune protection</div></div>
                </div>
                <span className="text-base font-bold text-gray-600">GRATUIT</span>
              </label>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setShowScreenProtectionModal(null)} className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 text-sm">Annuler</button>
                <button onClick={() => { const selected = document.querySelector('input[name=\"protection\"]:checked') as HTMLInputElement; if (selected) handleProtectionSelect(showScreenProtectionModal!, selected.value); }} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 text-sm">Confirmer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDataRecoveryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowDataRecoveryModal(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Choisir une option de récupération :</h2>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="recovery" value="sans-demontage" className="w-4 h-4 text-blue-600" />
                  <div><span className="text-base font-medium text-gray-800">Sans démontage</span><div className="text-xs text-gray-500">Appareil fonctionnel</div></div>
                </div>
                <span className="text-base font-bold text-green-600">GRATUIT</span>
              </label>
              <label className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="recovery" value="avec-demontage" className="w-4 h-4 text-blue-600" />
                  <div><span className="text-base font-medium text-gray-800">Avec démontage</span><div className="text-xs text-gray-500">Appareil endommagé</div></div>
                </div>
                <span className="text-base font-bold text-blue-600">+20€</span>
              </label>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowDataRecoveryModal(null)} className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 text-sm">Annuler</button>
              <button onClick={() => { const selected = document.querySelector('input[name=\"recovery\"]:checked') as HTMLInputElement; if (selected) handleDataRecoverySelect(showDataRecoveryModal!, selected.value); }} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 text-sm">Confirmer</button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 text-white px-4 py-3 shadow-lg border-t border-blue-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">📱 {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} sélectionné{selectedServices.length > 1 ? 's' : ''}</span>
            <span className="text-sm">{selectedServices.map(serviceId => repairServices.find(s => s.id === serviceId)?.name || '').join(' + ')}</span>
          </div>
          <div className="text-xl font-bold">Total: {calculateTotal().toFixed(2)}€</div>
          <div className="flex gap-3">
            <a href="tel:0980677518" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 text-sm">📞 Appeler</a>
            <Link href="/contact" className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 text-sm">📧 Contacter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}