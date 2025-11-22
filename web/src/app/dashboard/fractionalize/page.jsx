import React, { useState } from "react";
import {
  ArrowLeft,
  Users,
  Plus,
  Trash2,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function FractionalizePage() {
  const [step, setStep] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [shares, setShares] = useState([
    { id: 1, percentage: 50, address: "", name: "" },
    { id: 2, percentage: 50, address: "", name: "" },
  ]);

  const [properties] = useState([
    {
      id: "0x1a2b3c4d",
      title: "Villa Saint-Tropez",
      address: "123 Avenue de la République, 83990 Saint-Tropez",
      value: "1.2M €",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400",
      isOwned: true,
      canFractionalize: true,
    },
    {
      id: "0x9i0j1k2l",
      title: "Maison Lyon",
      address: "78 Rue de la République, 69002 Lyon",
      value: "480K €",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400",
      isOwned: true,
      canFractionalize: true,
    },
  ]);

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setStep(2);
  };

  const handleShareChange = (id, field, value) => {
    setShares(
      shares.map((share) =>
        share.id === id ? { ...share, [field]: value } : share,
      ),
    );
  };

  const addShare = () => {
    const newId = Math.max(...shares.map((s) => s.id)) + 1;
    setShares([...shares, { id: newId, percentage: 0, address: "", name: "" }]);
  };

  const removeShare = (id) => {
    if (shares.length > 2) {
      setShares(shares.filter((share) => share.id !== id));
    }
  };

  const getTotalPercentage = () => {
    return shares.reduce(
      (sum, share) => sum + parseInt(share.percentage || 0),
      0,
    );
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async () => {
    // TODO: Implement blockchain fractionalization
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-poppins">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] px-4 lg:px-8 py-4">
        <div className="flex items-center">
          <a
            href="/dashboard"
            className="flex items-center text-[#4B5563] hover:text-[#10B981] transition-colors mr-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour au tableau de bord
          </a>
          <div>
            <h1 className="text-2xl font-semibold text-[#111827]">
              Fractionnement de propriété
            </h1>
            <p className="text-[#4B5563]">
              Divisez vos titres de propriété en parts transférables
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: "Propriété" },
              { step: 2, label: "Parts" },
              { step: 3, label: "Confirmation" },
              { step: 4, label: "Validation" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold ${
                    step >= item.step
                      ? "bg-[#10B981] text-white"
                      : "bg-white border border-[#E5E7EB] text-[#4B5563]"
                  }`}
                >
                  {step > item.step ? <CheckCircle size={16} /> : item.step}
                </div>
                <span
                  className={`ml-3 text-sm font-medium ${
                    step >= item.step ? "text-[#111827]" : "text-[#4B5563]"
                  }`}
                >
                  {item.label}
                </span>
                {index < 3 && (
                  <div
                    className={`mx-4 h-0.5 w-16 ${
                      step > item.step ? "bg-[#10B981]" : "bg-[#E5E7EB]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-8">
          {/* Step 1: Select Property */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4">
                  Sélectionner une propriété
                </h3>
                <p className="text-[#4B5563] mb-6">
                  Choisissez la propriété que vous souhaitez fractionner
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      onClick={() => handlePropertySelect(property)}
                      className="border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#10B981] hover:shadow-lg transition-all cursor-pointer"
                    >
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-[#111827] mb-2">
                          {property.title}
                        </h4>
                        <p className="text-sm text-[#4B5563] mb-3">
                          {property.address}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-semibold text-[#10B981]">
                            {property.value}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Fractionnement possible
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Define Shares */}
          {step === 2 && selectedProperty && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4">
                  Définir les parts de propriété
                </h3>

                {/* Selected Property Summary */}
                <div className="bg-[#F9FAFB] rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[#111827]">
                        {selectedProperty.title}
                      </h4>
                      <p className="text-sm text-[#4B5563]">
                        {selectedProperty.address}
                      </p>
                      <p className="text-lg font-semibold text-[#10B981]">
                        {selectedProperty.value}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shares Configuration */}
                <div className="space-y-4">
                  {shares.map((share, index) => (
                    <div
                      key={share.id}
                      className="border border-[#E5E7EB] rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="font-medium text-[#111827]">
                          Part {index + 1}
                        </h5>
                        {shares.length > 2 && (
                          <button
                            onClick={() => removeShare(share.id)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#111827] mb-2">
                            Pourcentage (%)
                          </label>
                          <input
                            type="number"
                            min="1"
                            max="100"
                            value={share.percentage}
                            onChange={(e) =>
                              handleShareChange(
                                share.id,
                                "percentage",
                                e.target.value,
                              )
                            }
                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                            placeholder="25"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#111827] mb-2">
                            Nom du bénéficiaire
                          </label>
                          <input
                            type="text"
                            value={share.name}
                            onChange={(e) =>
                              handleShareChange(
                                share.id,
                                "name",
                                e.target.value,
                              )
                            }
                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                            placeholder="Jean Dupont"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#111827] mb-2">
                            Adresse wallet
                          </label>
                          <input
                            type="text"
                            value={share.address}
                            onChange={(e) =>
                              handleShareChange(
                                share.id,
                                "address",
                                e.target.value,
                              )
                            }
                            className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                            placeholder="0x1234..."
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={addShare}
                  className="w-full py-3 border-2 border-dashed border-[#E5E7EB] text-[#4B5563] rounded-xl hover:border-[#10B981] hover:text-[#10B981] transition-colors flex items-center justify-center"
                >
                  <Plus size={20} className="mr-2" />
                  Ajouter une part
                </button>

                {/* Percentage Summary */}
                <div
                  className={`p-4 rounded-xl ${getTotalPercentage() === 100 ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Total des parts :</span>
                    <span
                      className={`font-semibold ${getTotalPercentage() === 100 ? "text-green-800" : "text-red-800"}`}
                    >
                      {getTotalPercentage()}%
                    </span>
                  </div>
                  {getTotalPercentage() !== 100 && (
                    <p className="text-sm text-red-600 mt-2">
                      Le total des parts doit égaler 100%
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#111827] mb-4">
                Confirmer le fractionnement
              </h3>

              <div className="bg-[#F9FAFB] rounded-xl p-6">
                <h4 className="font-semibold text-[#111827] mb-4">
                  Propriété sélectionnée
                </h4>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={selectedProperty?.image}
                    alt={selectedProperty?.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-[#111827]">
                      {selectedProperty?.title}
                    </h5>
                    <p className="text-sm text-[#4B5563]">
                      {selectedProperty?.address}
                    </p>
                    <p className="text-lg font-semibold text-[#10B981]">
                      {selectedProperty?.value}
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-[#111827] mb-4">
                  Répartition des parts
                </h4>
                <div className="space-y-3">
                  {shares.map((share, index) => (
                    <div
                      key={share.id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-[#111827]">
                          {share.name || `Part ${index + 1}`}
                        </p>
                        <p className="text-sm text-[#4B5563] font-mono">
                          {share.address}
                        </p>
                      </div>
                      <span className="font-semibold text-[#10B981]">
                        {share.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Le fractionnement créera des NFT
                  séparés pour chaque part. Cette action est irréversible.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111827] mb-2">
                  Fractionnement réalisé avec succès !
                </h3>
                <p className="text-[#4B5563]">
                  La propriété a été divisée en {shares.length} parts distinctes
                </p>
              </div>
              <div className="bg-[#F9FAFB] rounded-xl p-6">
                <h4 className="font-semibold text-[#111827] mb-4">NFT créés</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {shares.map((share, index) => (
                    <div key={share.id} className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-[#4B5563]">Part {index + 1}</p>
                      <p className="font-medium text-[#111827]">
                        {share.name || `Bénéficiaire ${index + 1}`}
                      </p>
                      <p className="text-sm font-mono text-[#10B981]">
                        0x{Math.random().toString(16).substr(2, 8)}...
                      </p>
                      <p className="text-sm font-semibold text-[#111827]">
                        {share.percentage}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between pt-6 border-t border-[#E5E7EB]">
            {step > 1 && step < 4 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border border-[#E5E7EB] text-[#111827] rounded-xl hover:bg-[#F9FAFB] transition-colors"
              >
                Précédent
              </button>
            )}
            <div className="ml-auto">
              {step === 2 && (
                <button
                  onClick={handleNext}
                  disabled={getTotalPercentage() !== 100}
                  className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Suivant
                </button>
              )}
              {step === 3 && (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors"
                >
                  Fractionner la propriété
                </button>
              )}
              {step === 4 && (
                <a
                  href="/dashboard/nfts"
                  className="inline-block px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors"
                >
                  Voir mes NFT
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
}
