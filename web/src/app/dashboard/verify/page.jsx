import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  QrCode,
  Shield,
  CheckCircle,
  AlertTriangle,
  Copy,
  ExternalLink,
} from "lucide-react";

export default function VerifyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchMethod, setSearchMethod] = useState("manual"); // manual or qr

  // Mock verification result
  const mockResult = {
    verified: true,
    propertyTitle: "Villa de Saint-Tropez",
    address: "123 Avenue de la République, 83990 Saint-Tropez",
    owner: "Marie Dubois",
    blockchainId: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
    transactionHash: "0x5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x",
    registrationDate: "15 Nov 2025, 14:30",
    surface: "150 m²",
    propertyType: "Maison",
    nftUrl: "https://opensea.io/assets/...",
    documents: [
      { name: "Acte de propriété", verified: true },
      { name: "Plan cadastral", verified: true },
      { name: "Certificat d'urbanisme", verified: true },
    ],
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSearchResults(mockResult);
    } catch (error) {
      console.error("Erreur de vérification:", error);
      setSearchResults({ verified: false, error: "Aucun titre trouvé" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQrScan = () => {
    // TODO: Implement QR code scanner
    setSearchQuery("0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t");
    handleSearch();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // TODO: Show toast notification
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
              Vérification de titre
            </h1>
            <p className="text-[#4B5563]">
              Vérifiez l'authenticité d'un titre foncier sur la blockchain
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-8 mb-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-[#10B981]" />
            </div>
            <h2 className="text-xl font-semibold text-[#111827] mb-2">
              Vérifier un titre de propriété
            </h2>
            <p className="text-[#4B5563]">
              Entrez l'ID blockchain ou scannez un QR code pour vérifier
              l'authenticité
            </p>
          </div>

          {/* Search Method Toggle */}
          <div className="flex bg-[#F9FAFB] rounded-xl p-1 mb-6 max-w-md mx-auto">
            <button
              onClick={() => setSearchMethod("manual")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                searchMethod === "manual"
                  ? "bg-white text-[#111827] shadow-sm"
                  : "text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              Saisie manuelle
            </button>
            <button
              onClick={() => setSearchMethod("qr")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                searchMethod === "qr"
                  ? "bg-white text-[#111827] shadow-sm"
                  : "text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              Scanner QR
            </button>
          </div>

          {/* Search Input */}
          {searchMethod === "manual" ? (
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] text-lg"
                  placeholder="0x1a2b3c4d... ou référence du titre"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4B5563]"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={isLoading || !searchQuery.trim()}
                className="w-full py-4 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
              >
                {isLoading ? "Vérification en cours..." : "Vérifier"}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-[#E5E7EB] rounded-xl p-8 text-center">
                <QrCode size={64} className="text-[#10B981] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-[#111827] mb-2">
                  Scanner un QR code
                </h3>
                <p className="text-[#4B5563] mb-4">
                  Pointez votre caméra vers le QR code du titre
                </p>
                <button
                  onClick={handleQrScan}
                  className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold"
                >
                  Activer la caméra
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        {searchResults && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
            {searchResults.verified ? (
              <div>
                {/* Success Header */}
                <div className="bg-green-50 border-b border-green-200 p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-800">
                        Titre vérifié avec succès
                      </h3>
                      <p className="text-green-600">
                        Ce titre de propriété est authentique et enregistré sur
                        la blockchain
                      </p>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Basic Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-[#111827] mb-4">
                        Informations de la propriété
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-[#4B5563]">Titre</p>
                          <p className="font-medium text-[#111827]">
                            {searchResults.propertyTitle}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#4B5563]">Adresse</p>
                          <p className="font-medium text-[#111827]">
                            {searchResults.address}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#4B5563]">Propriétaire</p>
                          <p className="font-medium text-[#111827]">
                            {searchResults.owner}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-[#4B5563]">Type</p>
                            <p className="font-medium text-[#111827]">
                              {searchResults.propertyType}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-[#4B5563]">Superficie</p>
                            <p className="font-medium text-[#111827]">
                              {searchResults.surface}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Blockchain Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-[#111827] mb-4">
                        Informations blockchain
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-[#4B5563]">
                            Date d'enregistrement
                          </p>
                          <p className="font-medium text-[#111827]">
                            {searchResults.registrationDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-[#4B5563]">
                            ID Blockchain
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="font-mono text-sm text-[#111827] truncate flex-1">
                              {searchResults.blockchainId}
                            </p>
                            <button
                              onClick={() =>
                                copyToClipboard(searchResults.blockchainId)
                              }
                              className="p-2 text-[#4B5563] hover:text-[#111827] transition-colors"
                            >
                              <Copy size={16} />
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-[#4B5563]">
                            Hash de transaction
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="font-mono text-sm text-[#111827] truncate flex-1">
                              {searchResults.transactionHash}
                            </p>
                            <button
                              onClick={() =>
                                copyToClipboard(searchResults.transactionHash)
                              }
                              className="p-2 text-[#4B5563] hover:text-[#111827] transition-colors"
                            >
                              <Copy size={16} />
                            </button>
                            <button className="p-2 text-[#4B5563] hover:text-[#111827] transition-colors">
                              <ExternalLink size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Documents Verification */}
                  <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                    <h4 className="text-lg font-semibold text-[#111827] mb-4">
                      Documents vérifiés
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {searchResults.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 border border-green-200 bg-green-50 rounded-xl"
                        >
                          <CheckCircle
                            size={20}
                            className="text-green-600 mr-3"
                          />
                          <span className="text-green-800 font-medium">
                            {doc.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-wrap gap-4">
                    <a
                      href={`/dashboard/nfts?id=${searchResults.blockchainId}`}
                      className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold"
                    >
                      Voir le NFT
                    </a>
                    <button className="px-6 py-3 border border-[#E5E7EB] text-[#111827] rounded-xl hover:bg-[#F9FAFB] transition-colors font-semibold">
                      Télécharger le rapport
                    </button>
                    <button className="px-6 py-3 border border-[#E5E7EB] text-[#111827] rounded-xl hover:bg-[#F9FAFB] transition-colors font-semibold">
                      Partager
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6">
                {/* Error State */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle size={32} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-2">
                    Titre non trouvé
                  </h3>
                  <p className="text-[#4B5563] mb-6">
                    Aucun titre de propriété n'a été trouvé avec cet identifiant
                    sur la blockchain.
                  </p>
                  <button
                    onClick={() => setSearchResults(null)}
                    className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold"
                  >
                    Nouvelle recherche
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Help Section */}
        {!searchResults && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Comment vérifier un titre ?
            </h3>
            <ul className="text-blue-700 space-y-2">
              <li>
                • Utilisez l'ID blockchain fourni lors de l'enregistrement
              </li>
              <li>• Scannez le QR code présent sur le document officiel</li>
              <li>• La vérification se fait en temps réel sur la blockchain</li>
              <li>• Tous les documents associés sont également vérifiés</li>
            </ul>
          </div>
        )}
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
