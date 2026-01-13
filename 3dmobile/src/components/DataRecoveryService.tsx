"use client";

import { useState } from "react";

interface DataRecoveryServiceProps {
  id: string;
  name: string;
  normalPrice: string;
  duration: string;
  isSelected: boolean;
  selectedRecoveryType?: string;
  onToggle: (serviceId: string) => void;
  onRecoverySelect: (serviceId: string, recoveryType: string) => void;
}

const recoveryOptions = [
  { 
    value: 'sans-demontage', 
    label: 'Sans démontage', 
    description: 'Appareil fonctionnel', 
    price: 'GRATUIT' 
  },
  { 
    value: 'avec-demontage', 
    label: 'Avec démontage', 
    description: 'Appareil endommagé', 
    price: '+20€' 
  }
];

export default function DataRecoveryService({
  id,
  name,
  normalPrice,
  duration,
  isSelected,
  selectedRecoveryType,
  onToggle,
  onRecoverySelect
}: DataRecoveryServiceProps) {
  const [showModal, setShowModal] = useState(false);

  const handleRecoverySelect = (recoveryType: string) => {
    onRecoverySelect(id, recoveryType);
    setShowModal(false);
    
    // Show notification
    const recoveryText = recoveryType === 'avec-demontage' ? 'Récupération avec démontage (+20€)' : 'Récupération sans démontage';
    
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-x-0';
    notification.innerHTML = `✅ ${recoveryText} ajouté à votre sélection`;
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
          onChange={() => onToggle(id)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <div 
          onClick={() => setShowModal(true)}
          className="text-lg font-medium text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
        >
          {name}
          {isSelected && !selectedRecoveryType && (
            <span className="ml-2 text-sm text-orange-500 font-semibold animate-pulse">
              ⚠️ Choisissez une option
            </span>
          )}
          {isSelected && selectedRecoveryType && (
            <span className="ml-2 text-sm text-green-600 font-normal">
              ✓ {selectedRecoveryType === 'avec-demontage' ? 'Avec démontage (+20€)' : 'Sans démontage'}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-sm text-gray-500">⏱️ {duration}</span>
        <div className="text-right">
          {(() => {
            const displayPrice = isSelected && selectedRecoveryType ? (() => {
              let adjustedPrice = 0;
              
              if (selectedRecoveryType === 'avec-demontage') {
                adjustedPrice = 20;
              }
              
              return adjustedPrice.toFixed(2) + '€ TTC';
            })() : normalPrice;
            
            return (
              <div className="text-xl font-bold text-blue-600">
                {isSelected && selectedRecoveryType ? (
                  <>
                    <div className="text-sm text-gray-500 line-through">
                      {normalPrice}
                    </div>
                    {displayPrice}
                  </>
                ) : (
                  displayPrice
                )}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Recovery Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          
          <div className="relative bg-white rounded-2xl shadow-2xl p-5 max-w-sm w-full mx-4 transform transition-all">
            <h2 className="text-lg font-bold mb-3 text-gray-800 text-center">
              Options de récupération :
            </h2>
            
            <div className="mb-3 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                Si votre appareil est fonctionnel, nous pouvons récupérer vos données sans démontage.
              </p>
            </div>
            
            <div className="space-y-2">
              {recoveryOptions.map((option) => (
                <label key={option.value} className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="recovery"
                      value={option.value}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <div>
                      <span className="text-base font-medium text-gray-800 group-hover:text-blue-600">
                        {option.label}
                      </span>
                      <div className="text-xs text-gray-500">{option.description}</div>
                    </div>
                  </div>
                  <span className={`text-base font-bold ${option.price === 'GRATUIT' ? 'text-green-600' : 'text-blue-600'}`}>
                    {option.price}
                  </span>
                </label>
              ))}
            </div>
            
            <div className="mb-3 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                Si votre appareil est endommagé ou non fonctionnel nous pouvons récupérer vos données avec démontage.
              </p>
            </div>
            
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  const selected = document.querySelector('input[name="recovery"]:checked') as HTMLInputElement;
                  if (selected) {
                    handleRecoverySelect(selected.value);
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
