"use client";

interface RoleSelectorProps {
  value: "volunteer" | "site_leader" | "";
  onChange: (role: "volunteer" | "site_leader") => void;
}

export function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg font-bold text-indy-navy text-center">
        How do you want to serve?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => onChange("volunteer")}
          className={`p-6 rounded-xl border-2 text-left transition-all cursor-pointer ${
            value === "volunteer"
              ? "border-indy-red bg-indy-red/5"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="text-2xl mb-2">🧹</div>
          <h4 className="font-bold text-indy-navy">I want to volunteer</h4>
          <p className="text-sm text-gray-500 mt-1">
            Join a team at a rally point and help clean up your neighborhood.
          </p>
        </button>

        <button
          type="button"
          onClick={() => onChange("site_leader")}
          className={`p-6 rounded-xl border-2 text-left transition-all cursor-pointer ${
            value === "site_leader"
              ? "border-indy-red bg-indy-red/5"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="text-2xl mb-2">📋</div>
          <h4 className="font-bold text-indy-navy">I want to lead a site</h4>
          <p className="text-sm text-gray-500 mt-1">
            Coordinate volunteers at a rally point. We&apos;ll train you beforehand.
          </p>
        </button>
      </div>
    </div>
  );
}
