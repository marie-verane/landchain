import React, { useState } from "react";
import { ArrowLeft, Eye, EyeOff, Shield } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement signup logic
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      setErrors({ general: "Une erreur est survenue lors de l'inscription" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMetaMaskSignup = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement MetaMask signup
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Erreur lors de la connexion MetaMask:", error);
      setErrors({ general: "Impossible de se connecter avec MetaMask" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col">
      {/* Header */}
      <header className="border-b border-[#E5E7EB] px-6 py-4">
        <div className="max-w-md mx-auto flex items-center">
          <a
            href="/"
            className="flex items-center text-[#4B5563] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Retour
          </a>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-semibold text-[#111827]">
              <span className="text-[#10B981]">Land</span>Chain
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-[#10B981]" />
            </div>
            <h2 className="text-2xl font-semibold text-[#111827] mb-2">
              Créer votre compte
            </h2>
            <p className="text-[#4B5563]">
              Rejoignez LandChain pour sécuriser vos titres fonciers
            </p>
          </div>

          {errors.general && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#111827] mb-2"
                >
                  Prénom
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-colors ${
                    errors.firstName
                      ? "border-red-300 bg-red-50"
                      : "border-[#E5E7EB] hover:border-[#10B981]"
                  }`}
                  placeholder="Votre prénom"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#111827] mb-2"
                >
                  Nom
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-colors ${
                    errors.lastName
                      ? "border-red-300 bg-red-50"
                      : "border-[#E5E7EB] hover:border-[#10B981]"
                  }`}
                  placeholder="Votre nom"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#111827] mb-2"
              >
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-colors ${
                  errors.email
                    ? "border-red-300 bg-red-50"
                    : "border-[#E5E7EB] hover:border-[#10B981]"
                }`}
                placeholder="votre@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#111827] mb-2"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-colors ${
                    errors.password
                      ? "border-red-300 bg-red-50"
                      : "border-[#E5E7EB] hover:border-[#10B981]"
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4B5563] hover:text-[#111827] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#111827] mb-2"
              >
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-colors ${
                    errors.confirmPassword
                      ? "border-red-300 bg-red-50"
                      : "border-[#E5E7EB] hover:border-[#10B981]"
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4B5563] hover:text-[#111827] transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-[#10B981] text-white rounded-xl hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              {isLoading ? "Création en cours..." : "Créer mon compte"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[#E5E7EB]"></div>
            <span className="px-4 text-sm text-[#4B5563]">ou</span>
            <div className="flex-1 border-t border-[#E5E7EB]"></div>
          </div>

          {/* MetaMask Button */}
          <button
            onClick={handleMetaMaskSignup}
            disabled={isLoading}
            className="w-full flex items-center justify-center px-6 py-3 border-2 border-[#E5E7EB] text-[#111827] rounded-xl hover:border-[#10B981] hover:text-[#10B981] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.46 12.11l-6.64 3.83v2.83l6.64-9.66zM15.82 8.17L22.46.51v8.83l-6.64-1.17z" />
              <path d="M15.82 15.94V8.17l6.64 1.17v9.43l-6.64-2.83z" />
              <path d="M8.18 8.17L1.54.51v8.83l6.64-1.17z" />
              <path d="M1.54 12.11l6.64 3.83v2.83l-6.64-9.66z" />
              <path d="M8.18 15.94V8.17L1.54 9.34v9.43l6.64-2.83z" />
            </svg>
            Se connecter avec MetaMask
          </button>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-[#4B5563]">
            Vous avez déjà un compte ?{" "}
            <a
              href="/auth/signin"
              className="text-[#10B981] hover:text-[#059669] font-medium transition-colors"
            >
              Se connecter
            </a>
          </p>
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
