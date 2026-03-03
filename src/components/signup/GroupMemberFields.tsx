"use client";

import type { GroupMember } from "@/types";
import { Input } from "@/components/ui/Input";

interface GroupMemberFieldsProps {
  members: GroupMember[];
  onChange: (members: GroupMember[]) => void;
  errors?: Record<string, string>;
}

export function GroupMemberFields({ members, onChange, errors }: GroupMemberFieldsProps) {
  function updateMember(index: number, field: keyof GroupMember, value: string) {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-700">
        Additional Group Members
      </p>
      {members.map((member, i) => (
        <div key={i} className="p-3 bg-gray-50 rounded-lg space-y-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Person #{i + 2}
            {i > 0 && <span className="font-normal normal-case tracking-normal"> (optional)</span>}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              label="Name"
              placeholder="Their name"
              value={member.name}
              onChange={(e) => updateMember(i, "name", e.target.value)}
              error={errors?.[`groupMembers.${i}.name`]}
              required={i === 0}
            />
            <Input
              label="Email"
              type="email"
              placeholder="their@email.com"
              value={member.email}
              onChange={(e) => updateMember(i, "email", e.target.value)}
              error={errors?.[`groupMembers.${i}.email`]}
              required={i === 0}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
