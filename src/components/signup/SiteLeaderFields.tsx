"use client";

import { MEETING_AVAILABILITY_OPTIONS, MEETING_FORMAT_OPTIONS } from "@/lib/constants";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";

interface SiteLeaderFieldsProps {
  previousSweep: string;
  meetingAvailability: string;
  meetingFormat: string;
  expectedVolunteers: string;
  onFieldChange: (field: string, value: string) => void;
  errors?: Record<string, string>;
}

export function SiteLeaderFields({
  previousSweep,
  meetingAvailability,
  meetingFormat,
  expectedVolunteers,
  onFieldChange,
  errors,
}: SiteLeaderFieldsProps) {
  return (
    <div className="space-y-4 p-4 bg-indy-navy/5 rounded-xl">
      <p className="text-sm font-semibold text-indy-navy">
        Site Leader Details
      </p>

      {/* Previous sweep experience */}
      <div className="space-y-1">
        <p className="block text-sm font-medium text-gray-700">
          Have you done a Roots Realty Street Sweep before?
        </p>
        <div className="flex gap-4">
          {(["yes", "no"] as const).map((val) => (
            <label key={val} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="previousSweep"
                value={val}
                checked={previousSweep === val}
                onChange={() => onFieldChange("previousSweep", val)}
                className="w-4 h-4 text-indy-navy border-gray-300 focus:ring-indy-navy/20"
              />
              <span className="text-sm text-gray-700 capitalize">{val}</span>
            </label>
          ))}
        </div>
        {errors?.previousSweep && (
          <p className="text-xs text-red-500">{errors.previousSweep}</p>
        )}
      </div>

      {/* Meeting availability */}
      <Select
        label="Can you attend the April or May leader meeting?"
        value={meetingAvailability}
        onChange={(e) => onFieldChange("meetingAvailability", e.target.value)}
        placeholder="Select availability"
        options={MEETING_AVAILABILITY_OPTIONS.map((o) => ({ value: o, label: o }))}
        error={errors?.meetingAvailability}
      />

      {/* Meeting format */}
      <Select
        label="Preferred meeting format"
        value={meetingFormat}
        onChange={(e) => onFieldChange("meetingFormat", e.target.value)}
        placeholder="Select format"
        options={MEETING_FORMAT_OPTIONS.map((o) => ({ value: o, label: o }))}
        error={errors?.meetingFormat}
      />

      {/* Expected volunteers */}
      <Input
        label="How many volunteers do you expect to bring? (optional)"
        type="number"
        min={0}
        max={100}
        placeholder="e.g. 10"
        value={expectedVolunteers}
        onChange={(e) => onFieldChange("expectedVolunteers", e.target.value)}
        error={errors?.expectedVolunteers}
      />
    </div>
  );
}
