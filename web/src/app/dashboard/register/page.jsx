import React, { useState } from "react";
import { ArrowLeft, Upload, MapPin, FileText, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyTitle: "",
    address: "",
    postalCode: "",
    city: "",
    surface: "",
    propertyType: "house",
    cadastralRef: "",
    ownerName: "",
    ownerEmail: "",
    documents: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async () => {
    // TODO: Implement blockchain registration
    setStep(4);
  };

  const handleFileUpload = (files) => {
    setFormData((prev) => ({
      ...prev,
      documents: [...prev.documents, ...files],
    }));
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
              Enregistrement foncier
            </h1>
            <p className="text-[#4B5563]">
              Créer un NFT foncier sécurisé sur la blockchain
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: "Informations" },
              { step: 2, label: "Documents" },
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
          {/* Step 1: Property Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4">
                  Informations de la propriété
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Titre de propriété
                    </label>
                    <input
                      name="propertyTitle"
                      value={formData.propertyTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                      placeholder="Villa de Saint-Tropez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Type de propriété
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                    >
                      <option value="house">Maison</option>
                      <option value="apartment">Appartement</option>
                      <option value="land">Terrain</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Adresse complète
                    </label>
                    <input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                      placeholder="123 Avenue de la République"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Code postal
                    </label>
                    <input
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                      placeholder="83990"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Ville
                    </label>
                    <input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                      placeholder="Saint-Tropez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Superficie (m²)
                    </label>
                    <input
                      name="surface"
                      value={formData.surface}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                      placeholder="150"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Référence cadastrale
                    </label>
                    <input
                      name="cadastralRef"
                      value={formData.cadastralRef}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                      placeholder="AB 01 123"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Documents */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#111827] mb-4">
                  Documents requis
                </h3>
                <div className="border-2 border-dashed border-[#E5E7EB] rounded-xl p-8 text-center hover:border-[#10B981] transition-colors">
                  <Upload size={48} className="text-[#10B981] mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-[#111827] mb-2">
                    Glissez vos documents ici
                  </h4>
                  <p className="text-[#4B5563] mb-4">
                    PDF, JPG, PNG jusqu'à 10MB chacun
                  </p>
                  <button className="px-6 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors">
                    Choisir des fichiers
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Acte de propriété",
                    "Plan cadastral",
                    "Certificat d'urbanisme",
                    "Photos de la propriété",
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 border border-[#E5E7EB] rounded-xl"
                    >
                      <FileText size={20} className="text-[#10B981] mr-3" />
                      <span className="text-[#111827]">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[#111827] mb-4">
                Confirmer les informations
              </h3>
              <div className="bg-[#F9FAFB] rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#4B5563]">Titre</p>
                    <p className="font-medium text-[#111827]">
                      {formData.propertyTitle}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5563]">Type</p>
                    <p className="font-medium text-[#111827]">
                      {formData.propertyType}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5563]">Adresse</p>
                    <p className="font-medium text-[#111827]">
                      {formData.address}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5563]">Superficie</p>
                    <p className="font-medium text-[#111827]">
                      {formData.surface} m²
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Important :</strong> Une fois enregistré sur la
                  blockchain, ces informations ne pourront plus être modifiées.
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
                  NFT foncier créé avec succès !
                </h3>
                <p className="text-[#4B5563]">
                  Votre titre de propriété a été enregistré sur la blockchain
                </p>
              </div>
              <div className="bg-[#F9FAFB] rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-[#4B5563]">ID Blockchain</p>
                    <p className="font-mono text-sm text-[#111827]">
                      0x1a2b3c4d...
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5563]">
                      Hash de transaction
                    </p>
                    <p className="font-mono text-sm text-[#111827]">
                      0x5e6f7g8h...
                    </p>
                  </div>
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
              {step < 3 && (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors"
                >
                  Suivant
                </button>
              )}
              {step === 3 && (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors"
                >
                  Enregistrer sur la blockchain
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
