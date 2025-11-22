import React, { useState } from "react";
import {
  Home,
  FileText,
  Search,
  Coins,
  User,
  // Settings,
  LogOut,
  Menu,
  X,
  Plus,
  Shield,
  QrCode,
  // Users,
  TrendingUp,
  Clock,
  ArrowUpRight,
  // Zap,
} from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user] = useState({
    name: "Donatien Kouakou",
    email: "donatien@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?w=150",
  });

  const [stats] = useState({
    totalProperties: 3,
    verifications: 47,
    totalValue: "2.4M USD",
    pendingTransactions: 2,
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: "registration",
      title: "Villa Vera",
      description: "Titre enregistré sur la blockchain",
      timestamp: "Il y a 2h",
      icon: Shield,
    },
    {
      id: 2,
      type: "verification",
      title: "Vérification de titre",
      description: "Appartement Cannes vérifié",
      timestamp: "Il y a 1j",
      icon: QrCode,
    },
    // {
    //   id: 3,
    //   type: "transfer",
    //   title: "Transfert de propriété",
    //   description: "Maison Lyon - 25% transféré",
    //   timestamp: "Il y a 3j",
    //   icon: Users,
    // },
  ]);

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Tableau de bord",
      icon: Home,
      href: "/dashboard",
      active: true,
    },
    {
      id: "register",
      label: "Enregistrement",
      icon: FileText,
      href: "/dashboard/register",
    },
    {
      id: "verify",
      label: "Vérification",
      icon: Search,
      href: "/dashboard/verify",
    },
    { id: "nfts", label: "NFT foncier", icon: Coins, href: "/dashboard/nfts" },
    // {
    //   id: "fractionalize",
    //   label: "Fractionnement",
    //   icon: Users,
    //   href: "/dashboard/fractionalize",
    // },
    { id: "profile", label: "Profil", icon: User, href: "/dashboard/profile" },
  ];

  const handleLogout = () => {
    // TODO: Implement logout logic
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-poppins">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-[#E5E7EB] transform transition-transform duration-200 lg:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
            <h1 className="text-xl font-semibold text-[#111827]">
              <span className="text-[#10B981]">Land</span>Chain
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-[#4B5563] hover:text-[#111827] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-xl transition-colors ${
                      item.active
                        ? "bg-[#10B981] text-white"
                        : "text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111827]"
                    }`}
                  >
                    <item.icon size={20} className="mr-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Settings & Logout */}
          <div className="px-4 py-4 border-t border-[#E5E7EB]">
            {/* <a
              href="/dashboard/settings"
              className="flex items-center px-4 py-3 rounded-xl text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111827] transition-colors mb-2"
            >
              <Settings size={20} className="mr-3" />
              Paramètres
            </a> */}
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-3 rounded-xl text-[#4B5563] hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              Déconnexion
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-[#E5E7EB] px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-[#4B5563] hover:text-[#111827] transition-colors mr-4"
              >
                <Menu size={20} />
              </button>
              <div>
                <h2 className="text-2xl font-semibold text-[#111827]">
                  Tableau de bord
                </h2>
                <p className="text-[#4B5563]">
                  Gérez vos titres fonciers en toute sécurité
                </p>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {/* <button className="p-2 text-[#4B5563] hover:text-[#111827] transition-colors">
                <Search size={20} />
              </button> */}
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-[#111827]">
                    {user.name}
                  </p>
                  <p className="text-xs text-[#4B5563]">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                  <Home size={24} className="text-[#10B981]" />
                </div>
                <span className="text-xs text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-lg">
                  +12%
                </span>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111827] mb-1">
                  {stats.totalProperties}
                </p>
                <p className="text-sm text-[#4B5563]">
                  Propriétés enregistrées
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <QrCode size={24} className="text-blue-600" />
                </div>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
                  +8%
                </span>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111827] mb-1">
                  {stats.verifications}
                </p>
                <p className="text-sm text-[#4B5563]">
                  Vérifications effectuées
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} className="text-yellow-600" />
                </div>
                <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-lg">
                  +24%
                </span>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111827] mb-1">
                  {stats.totalValue}
                </p>
                <p className="text-sm text-[#4B5563]">
                  Valeur totale du portefeuille
                </p>
              </div>
            </div>

            {/* <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock size={24} className="text-orange-600" />
                </div>
                <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-lg">
                  En cours
                </span>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#111827] mb-1">
                  {stats.pendingTransactions}
                </p>
                <p className="text-sm text-[#4B5563]">
                  Transactions en attente
                </p>
              </div>
            </div> */}
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-[#111827] mb-6">
                Actions rapides
              </h3>
              <div className="space-y-4">
                <a
                  href="/dashboard/register"
                  className="flex items-center p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#10B981] hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                    <Plus
                      size={20}
                      className="text-[#10B981] group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#111827]">Nouveau titre</p>
                    <p className="text-sm text-[#4B5563]">
                      Enregistrer une propriété
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#4B5563]" />
                </a>

                <a
                  href="/dashboard/verify"
                  className="flex items-center p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#10B981] hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Search
                      size={20}
                      className="text-blue-600 group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#111827]">
                      Vérifier un titre
                    </p>
                    <p className="text-sm text-[#4B5563]">Scanner un QR code</p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#4B5563]" />
                </a>

                {/* <a
                  href="/dashboard/fractionalize"
                  className="flex items-center p-4 bg-white rounded-xl border border-[#E5E7EB] hover:border-[#10B981] hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Users
                      size={20}
                      className="text-purple-600 group-hover:text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#111827]">Fractionner</p>
                    <p className="text-sm text-[#4B5563]">
                      Partager la propriété
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#4B5563]" />
                </a> */}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#111827]">
                  Activité récente
                </h3>
                <a
                  href="/dashboard/activity"
                  className="text-[#10B981] hover:text-[#059669] text-sm font-medium transition-colors"
                >
                  Voir tout
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden">
                <div className="divide-y divide-[#E5E7EB]">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="p-6 hover:bg-[#F9FAFB] transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#10B981]/10 rounded-xl flex items-center justify-center mr-4">
                          <activity.icon size={18} className="text-[#10B981]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#111827] mb-1">
                            {activity.title}
                          </p>
                          <p className="text-sm text-[#4B5563]">
                            {activity.description}
                          </p>
                        </div>
                        <div className="flex items-center text-xs text-[#4B5563]">
                          <Clock size={12} className="mr-1" />
                          {activity.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              {/* <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#4B5563]">Valeur moyenne</p>
                      <p className="text-xl font-semibold text-[#111827]">
                        845K €
                      </p>
                    </div>
                    <Zap size={20} className="text-[#10B981]" />
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-[#E5E7EB]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#4B5563]">Temps moyen</p>
                      <p className="text-xl font-semibold text-[#111827]">
                        2.4h
                      </p>
                    </div>
                    <Clock size={20} className="text-blue-600" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </main>
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
