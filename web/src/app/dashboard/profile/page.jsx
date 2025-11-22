import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Edit,
  Save,
  X,
  Camera,
  Wallet,
  Shield,
  Bell,
  Eye,
  EyeOff,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showWalletKey, setShowWalletKey] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const [userData, setUserData] = useState({
    firstName: "Donatien",
    lastName: "Kouakou",
    email: "donatien@example.com",
    phone: "+225 01 23 45 67 89",
    address: "123 Avenue des Champs-Élysées",
    city: "Abidjan",
    postalCode: "75008",
    country: "Côte d'Ivoire",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?w=150",
    walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
    privateKey:
      "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    transactionAlerts: true,
    marketingEmails: false,
    twoFactorAuth: true,
    darkMode: false,
  });

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (field) => {
    setPreferences((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = async () => {
    // TODO: Implement save logic
    setIsEditing(false);
  };

  const handleAvatarChange = () => {
    // TODO: Implement avatar upload
    console.log("Changer l'avatar");
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
              Profil utilisateur
            </h1>
            <p className="text-[#4B5563]">
              Gérez vos informations personnelles et préférences
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] mb-8">
          <div className="border-b border-[#E5E7EB]">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "profile", label: "Profil", icon: User },
                { id: "wallet", label: "Wallet", icon: Wallet },
                { id: "security", label: "Sécurité", icon: Shield },
                { id: "notifications", label: "Notifications", icon: Bell },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-[#10B981] text-[#10B981]"
                      : "border-transparent text-[#4B5563] hover:text-[#111827] hover:border-[#E5E7EB]"
                  }`}
                >
                  <tab.icon size={18} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6 lg:p-8">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={userData.avatar}
                      alt="Avatar"
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <button
                      onClick={handleAvatarChange}
                      className="absolute bottom-0 right-0 p-2 bg-[#10B981] text-white rounded-full hover:bg-[#059669] transition-colors"
                    >
                      <Camera size={14} />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827]">
                      {userData.firstName} {userData.lastName}
                    </h3>
                    <p className="text-[#4B5563]">{userData.email}</p>
                    <div className="mt-2">
                      {!isEditing ? (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center px-4 py-2 text-[#10B981] hover:bg-[#10B981]/10 rounded-lg transition-colors"
                        >
                          <Edit size={16} className="mr-2" />
                          Modifier le profil
                        </button>
                      ) : (
                        <div className="flex space-x-2">
                          <button
                            onClick={handleSave}
                            className="flex items-center px-4 py-2 bg-[#10B981] text-white rounded-lg hover:bg-[#059669] transition-colors"
                          >
                            <Save size={16} className="mr-2" />
                            Enregistrer
                          </button>
                          <button
                            onClick={() => setIsEditing(false)}
                            className="flex items-center px-4 py-2 border border-[#E5E7EB] text-[#4B5563] rounded-lg hover:text-[#111827] transition-colors"
                          >
                            <X size={16} className="mr-2" />
                            Annuler
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      value={userData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] disabled:bg-[#F9FAFB] disabled:text-[#4B5563]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={userData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] disabled:bg-[#F9FAFB] disabled:text-[#4B5563]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] disabled:bg-[#F9FAFB] disabled:text-[#4B5563]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] disabled:bg-[#F9FAFB] disabled:text-[#4B5563]"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Adresse
                    </label>
                    <input
                      type="text"
                      value={userData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] disabled:bg-[#F9FAFB] disabled:text-[#4B5563]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Ville
                    </label>
                    <input
                      type="text"
                      value={userData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] disabled:bg-[#F9FAFB] disabled:text-[#4B5563]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#111827] mb-2">
                      Code postal
                    </label>
                    <input
                      type="text"
                      value={userData.postalCode}
                      onChange={(e) =>
                        handleInputChange("postalCode", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] disabled:bg-[#F9FAFB] disabled:text-[#4B5563]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Tab */}
            {activeTab === "wallet" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-4">
                    Informations du wallet
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-[#F9FAFB] rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-[#111827]">
                          Adresse du wallet
                        </h4>
                        <button
                          onClick={() =>
                            copyToClipboard(userData.walletAddress)
                          }
                          className="px-3 py-1 text-sm text-[#10B981] hover:bg-[#10B981]/10 rounded-lg transition-colors"
                        >
                          Copier
                        </button>
                      </div>
                      <p className="font-mono text-sm text-[#4B5563] break-all">
                        {userData.walletAddress}
                      </p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-[#111827]">
                          Clé privée
                        </h4>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setShowWalletKey(!showWalletKey)}
                            className="px-3 py-1 text-sm text-[#4B5563] hover:text-[#111827] transition-colors flex items-center"
                          >
                            {showWalletKey ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                            <span className="ml-1">
                              {showWalletKey ? "Masquer" : "Afficher"}
                            </span>
                          </button>
                          {showWalletKey && (
                            <button
                              onClick={() =>
                                copyToClipboard(userData.privateKey)
                              }
                              className="px-3 py-1 text-sm text-[#10B981] hover:bg-[#10B981]/10 rounded-lg transition-colors"
                            >
                              Copier
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="font-mono text-sm text-[#4B5563] break-all">
                        {showWalletKey
                          ? userData.privateKey
                          : "••••••••••••••••••••••••••••••••••••••••"}
                      </p>
                      <div className="mt-4 text-sm text-yellow-800">
                        <p>
                          <strong>Important :</strong> Ne partagez jamais votre
                          clé privée. Conservez-la en sécurité.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-[#111827] mb-4">
                    Actions du wallet
                  </h4>
                  <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors">
                      Exporter le wallet
                    </button>
                    <button className="px-6 py-3 border border-[#E5E7EB] text-[#111827] rounded-xl hover:bg-[#F9FAFB] transition-colors">
                      Sauvegarder
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-4">
                    Paramètres de sécurité
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-[#E5E7EB] rounded-xl">
                      <div>
                        <h5 className="font-medium text-[#111827]">
                          Authentification à deux facteurs
                        </h5>
                        <p className="text-sm text-[#4B5563]">
                          Ajoutez une couche de sécurité supplémentaire
                        </p>
                      </div>
                      <button
                        onClick={() => handlePreferenceChange("twoFactorAuth")}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences.twoFactorAuth
                            ? "bg-[#10B981]"
                            : "bg-[#E5E7EB]"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            preferences.twoFactorAuth
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="p-4 border border-[#E5E7EB] rounded-xl">
                      <h5 className="font-medium text-[#111827] mb-3">
                        Changer le mot de passe
                      </h5>
                      <div className="space-y-3">
                        <input
                          type="password"
                          placeholder="Mot de passe actuel"
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                        />
                        <input
                          type="password"
                          placeholder="Nouveau mot de passe"
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                        />
                        <input
                          type="password"
                          placeholder="Confirmer le nouveau mot de passe"
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981]"
                        />
                        <button className="px-6 py-2 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] transition-colors">
                          Mettre à jour
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#111827] mb-4">
                    Préférences de notification
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "emailNotifications",
                        label: "Notifications par email",
                        description: "Recevez des mises à jour par email",
                      },
                      {
                        key: "smsNotifications",
                        label: "Notifications SMS",
                        description: "Recevez des alertes par SMS",
                      },
                      {
                        key: "transactionAlerts",
                        label: "Alertes de transaction",
                        description:
                          "Notifications pour toute activité blockchain",
                      },
                      {
                        key: "marketingEmails",
                        label: "Emails marketing",
                        description: "Offres spéciales et actualités produit",
                      },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between p-4 border border-[#E5E7EB] rounded-xl"
                      >
                        <div>
                          <h5 className="font-medium text-[#111827]">
                            {item.label}
                          </h5>
                          <p className="text-sm text-[#4B5563]">
                            {item.description}
                          </p>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange(item.key)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            preferences[item.key]
                              ? "bg-[#10B981]"
                              : "bg-[#E5E7EB]"
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[item.key]
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl border border-red-200 p-6 lg:p-8">
          <h3 className="text-lg font-semibold text-red-800 mb-4">
            Zone de danger
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-xl">
              <h5 className="font-medium text-red-800 mb-2">
                Supprimer le compte
              </h5>
              <p className="text-sm text-red-600 mb-4">
                Cette action est irréversible. Toutes vos données seront
                définitivement supprimées.
              </p>
              <button className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                Supprimer le compte
              </button>
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
