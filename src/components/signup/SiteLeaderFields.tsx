"use client";

interface SiteLeaderFieldsProps {
  previousExperience: string;
  trialRunAvailable: boolean;
  onExperienceChange: (value: string) => void;
  onTrialRunChange: (value: boolean) => void;
  error?: string;
}

export function SiteLeaderFields({
  previousExperience,
  trialRunAvailable,
  onExperienceChange,
  onTrialRunChange,
  error,
}: SiteLeaderFieldsProps) {
  return (
    <div className="space-y-4 p-4 bg-indy-navy/5 rounded-xl">
      <p className="text-sm font-semibold text-indy-navy">
        Site Leader Details
      </p>

      <div className="space-y-1">
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
          Tell us about your experience leading groups or community events
        </label>
        <textarea
          id="experience"
          value={previousExperience}
          onChange={(e) => onExperienceChange(e.target.value)}
          rows={3}
          placeholder="Have you done a Roots Realty Street Sweep before? Led a volunteer team? Tell us a bit..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indy-navy/20 focus:border-indy-navy placeholder:text-gray-400 resize-none"
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={trialRunAvailable}
          onChange={(e) => onTrialRunChange(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-indy-red focus:ring-indy-red"
        />
        <div>
          <span className="text-sm font-medium text-gray-700">
            I can attend the trial run
          </span>
          <p className="text-xs text-gray-500 mt-0.5">
            We&apos;ll have a practice sweep before the main event to prep site leaders.
          </p>
        </div>
      </label>
    </div>
  );
}
