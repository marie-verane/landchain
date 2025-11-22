import React, { useState } from "react";
import {
  ArrowLeft,
  Coins,
  Share2,
  Download,
  Eye,
  Filter,
  Search,
  Grid,
  List,
} from "lucide-react";

export default function NFTsPage() {
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [nfts] = useState([
    {
      id: "0x1a2b3c4d",
      title: "Villa Saint-Tropez",
      address: "123 Avenue de la République, 83990 Saint-Tropez",
      surface: "150 m²",
      type: "Maison",
      value: "1.2M €",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400",
      mintDate: "15 Nov 2025",
      status: "verified",
      shares: 1,
      totalShares: 1,
    },
    {
      id: "0x5e6f7g8h",
      title: "Appartement Cannes",
      address: "45 Boulevard de la Croisette, 06400 Cannes",
      surface: "85 m²",
      type: "Appartement",
      value: "850K €",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
      mintDate: "10 Nov 2025",
      status: "verified",
      shares: 3,
      totalShares: 4,
    },
    {
      id: "0x9i0j1k2l",
      title: "Maison Lyon",
      address: "78 Rue de la République, 69002 Lyon",
      surface: "120 m²",
      type: "Maison",
      value: "480K €",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400",
      mintDate: "5 Nov 2025",
      status: "pending",
      shares: 1,
      totalShares: 1,
    },
  ]);

  const handleShare = (nft) => {
    // TODO: Implement sharing
    console.log("Partager NFT:", nft.id);
  };

  const handleDownload = (nft) => {
    // TODO: Implement download certificate
    console.log("Télécharger certificat:", nft.id);
  };

  const handleView = (nft) => {
    window.location.href = `/dashboard/nfts/${nft.id}`;
  };

  const filteredNFTs = nfts.filter((nft) => {
    const matchesSearch =
      nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterCategory === "all" || nft.type.toLowerCase() === filterCategory;
    return matchesSearch && matchesFilter;
  });

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
              NFT foncier
            </h1>
            <p className="text-[#4B5563]">
              Gérez vos titres de propriété tokenisés
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <Coins size={24} className="text-[#10B981]" />
              <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-lg">
                Total
              </span>
            </div>
            <p className="text-2xl font-semibold text-[#111827]">
              {nfts.length}
            </p>
            <p className="text-sm text-[#4B5563]">NFT détenus</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
              </div>
              <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-lg">
                Vérifiés
              </span>
            </div>
            <p className="text-2xl font-semibold text-[#111827]">
              {nfts.filter((n) => n.status === "verified").length}
            </p>
            <p className="text-sm text-[#4B5563]">Titres vérifiés</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
              </div>
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
                Partagés
              </span>
            </div>
            <p className="text-2xl font-semibold text-[#111827]">
              {nfts.filter((n) => n.totalShares > 1).length}
            </p>
            <p className="text-sm text-[#4B5563]">Propriétés fractionnées</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-2">
              <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-600 rounded-full" />
              </div>
              <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-lg">
                Valeur
              </span>
            </div>
            <p className="text-2xl font-semibold text-[#111827]">2.5M €</p>
            <p className="text-sm text-[#4B5563]">Portefeuille total</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                placeholder="Rechercher..."
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4B5563]"
              />
            </div>

            {/* Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
            >
              <option value="all">Tous les types</option>
              <option value="maison">Maison</option>
              <option value="appartement">Appartement</option>
              <option value="terrain">Terrain</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* View Mode */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-[#10B981] text-white"
                  : "bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-[#10B981] text-white"
                  : "bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* NFTs Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNFTs.map((nft) => (
              <div
                key={nft.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        nft.status === "verified"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {nft.status === "verified" ? "Vérifié" : "En attente"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#111827] mb-2">
                    {nft.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] mb-4">{nft.address}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-[#4B5563]">Type</p>
                      <p className="text-sm font-medium text-[#111827]">
                        {nft.type}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#4B5563]">Surface</p>
                      <p className="text-sm font-medium text-[#111827]">
                        {nft.surface}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-[#4B5563]">Valeur estimée</p>
                      <p className="text-xl font-semibold text-[#10B981]">
                        {nft.value}
                      </p>
                    </div>
                    {nft.totalShares > 1 && (
                      <div className="text-right">
                        <p className="text-xs text-[#4B5563]">Parts détenues</p>
                        <p className="text-sm font-medium text-[#111827]">
                          {nft.shares}/{nft.totalShares}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleView(nft)}
                      className="flex-1 px-4 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-medium"
                    >
                      <Eye size={16} className="inline mr-2" />
                      Voir
                    </button>
                    <button
                      onClick={() => handleShare(nft)}
                      className="px-4 py-2 border border-[#E5E7EB] text-[#4B5563] rounded-xl hover:text-[#111827] hover:border-[#10B981] transition-colors"
                    >
                      <Share2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDownload(nft)}
                      className="px-4 py-2 border border-[#E5E7EB] text-[#4B5563] rounded-xl hover:text-[#111827] hover:border-[#10B981] transition-colors"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
            <div className="divide-y divide-[#E5E7EB]">
              {filteredNFTs.map((nft) => (
                <div
                  key={nft.id}
                  className="p-6 hover:bg-[#F9FAFB] transition-colors"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-[#111827]">
                          {nft.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            nft.status === "verified"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {nft.status === "verified" ? "Vérifié" : "En attente"}
                        </span>
                      </div>

                      <p className="text-sm text-[#4B5563] mb-2">
                        {nft.address}
                      </p>

                      <div className="flex items-center space-x-8">
                        <div>
                          <p className="text-xs text-[#4B5563]">Type</p>
                          <p className="text-sm font-medium text-[#111827]">
                            {nft.type}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#4B5563]">Surface</p>
                          <p className="text-sm font-medium text-[#111827]">
                            {nft.surface}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#4B5563]">Valeur</p>
                          <p className="text-sm font-semibold text-[#10B981]">
                            {nft.value}
                          </p>
                        </div>
                        {nft.totalShares > 1 && (
                          <div>
                            <p className="text-xs text-[#4B5563]">Parts</p>
                            <p className="text-sm font-medium text-[#111827]">
                              {nft.shares}/{nft.totalShares}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleView(nft)}
                        className="px-4 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-medium"
                      >
                        Voir
                      </button>
                      <button
                        onClick={() => handleShare(nft)}
                        className="px-3 py-2 border border-[#E5E7EB] text-[#4B5563] rounded-xl hover:text-[#111827] hover:border-[#10B981] transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDownload(nft)}
                        className="px-3 py-2 border border-[#E5E7EB] text-[#4B5563] rounded-xl hover:text-[#111827] hover:border-[#10B981] transition-colors"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredNFTs.length === 0 && (
          <div className="text-center py-12">
            <Coins size={64} className="text-[#E5E7EB] mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#111827] mb-2">
              Aucun NFT trouvé
            </h3>
            <p className="text-[#4B5563] mb-6">
              Aucun NFT ne correspond à votre recherche ou filtre.
            </p>
            <a
              href="/dashboard/register"
              className="inline-block px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors font-semibold"
            >
              Enregistrer un nouveau titre
            </a>
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
