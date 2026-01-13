"use client";

import { useState } from "react";

interface ScreenRepairServiceProps {
  id: string;
  name: string;
  normalPrice: string;
  discountPrice?: string;
  duration: string;
  isSelected: boolean;
  selectedProtection?: string;
  onToggle: (serviceId: string) => void;
  onProtectionSelect: (serviceId: string, protection: string) => void;
}

const protectionOptions = [
  { value: 'hydrogel', label: 'Film en Hydrogel', description: 'Protection maximale', price: '+20€' },
  { value: 'verre-trempe', label: 'Film en verre trempé', description: 'Protection standard', price: '+10€' },
  { value: 'sans-protection', label: 'Sans protection', description: 'Aucune protection ajoutée', price: '0€' }
];

export default function ScreenRepairService({
  id,
  name,
  normalPrice,
  discountPrice,
  duration,
  isSelected,
  selectedProtection,
  onToggle,
  onProtectionSelect
}: ScreenRepairServiceProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedProtectionOption, setSelectedProtectionOption] = useState<string>('');

  const handleProtectionSelect = (protection: string) => {
    onProtectionSelect(id, protection);
    setShowModal(false);
    
    // Show notification
    const protectionText = protection === 'hydrogel' ? 'Film en Hydrogel (+20€)' : 
                         protection === 'verre-trempe' ? 'Film en verre trempé (+10€)' : 
                         'Sans protection';
    
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0';
    notification.innerHTML = `✅ ${protectionText} ajouté à votre sélection`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors last:border-b-0">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => setShowModal(true)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <div 
          onClick={() => setShowModal(true)}
          className="text-lg font-medium text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
        >
          {name}
          {isSelected && !selectedProtection && (
            <span className="ml-2 text-sm text-orange-500 font-semibold animate-pulse">
              ⚠️ Choisissez une protection
            </span>
          )}
          {isSelected && selectedProtection && (
            <span className="ml-2 text-sm text-green-600 font-normal">
              ✓ {selectedProtection === 'hydrogel' ? 'Film Hydrogel (+20€)' : 
                   selectedProtection === 'verre-trempe' ? 'Verre trempé (+10€)' : 
                   'Sans protection'}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-sm text-gray-500">⏱️ {duration}</span>
        <div className="text-right">
          {(() => {
            const basePrice = discountPrice || normalPrice;
            const displayPrice = isSelected && selectedProtection ? (() => {
              const baseNum = parseFloat(basePrice.replace('€ TTC', ''));
              let adjustedPrice = baseNum;
              
              if (selectedProtection === 'hydrogel') {
                adjustedPrice += 20;
              } else if (selectedProtection === 'verre-trempe') {
                adjustedPrice += 10;
              }
              
              return adjustedPrice.toFixed(2) + '€ TTC';
            })() : basePrice;
            
            return (
              <>
                {discountPrice && !isSelected && (
                  <div className="text-sm text-gray-500 line-through">{normalPrice}</div>
                )}
                <div className="text-xl font-bold text-blue-600">
                  {isSelected && selectedProtection ? (
                    <>
                      <div className="text-sm text-gray-500 line-through">
                        {basePrice}
                      </div>
                      {displayPrice}
                    </>
                  ) : (
                    displayPrice
                  )}
                </div>
              </>
            );
          })()}
        </div>
      </div>

      {/* Protection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 transform transition-all">
            <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Choisir une protection d'écran :
            </h2>
            
            <div className="space-y-2">
              {protectionOptions.map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="protection"
                      value={option.value}
                      checked={selectedProtectionOption === option.value}
                      onChange={() => setSelectedProtectionOption(option.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <div>
                      <span className="text-base font-medium text-gray-800 group-hover:text-blue-600">
                        {option.label}
                      </span>
                      <div className="text-xs text-gray-500">{option.description}</div>
                    </div>
                  </div>
                  <span className="text-base font-bold text-blue-600">{option.price}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  if (selectedProtectionOption) {
                    handleProtectionSelect(selectedProtectionOption);
                  }
                }}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                Confirmer
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
