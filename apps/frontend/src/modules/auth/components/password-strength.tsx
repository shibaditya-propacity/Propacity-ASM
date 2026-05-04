interface Strength {
  label: "Weak" | "Medium" | "Strong";
  score: 1 | 2 | 3;
  color: string;
}

function evaluate(password: string): Strength {
  if (!password) return { label: "Weak", score: 1, color: "bg-red-400" };
  let pts = 0;
  if (password.length >= 6)  pts++;
  if (password.length >= 10) pts++;
  if (/[A-Z]/.test(password)) pts++;
  if (/[0-9]/.test(password)) pts++;
  if (/[^A-Za-z0-9]/.test(password)) pts++;

  if (pts <= 2) return { label: "Weak",   score: 1, color: "bg-red-400" };
  if (pts <= 3) return { label: "Medium", score: 2, color: "bg-amber-400" };
  return            { label: "Strong",  score: 3, color: "bg-emerald-500" };
}

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  if (!password) return null;
  const { label, score, color } = evaluate(password);

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {([1, 2, 3] as const).map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              s <= score ? color : "bg-slate-200"
            }`}
          />
        ))}
      </div>
      <p className={`text-xs font-medium ${
        score === 1 ? "text-red-500" : score === 2 ? "text-amber-500" : "text-emerald-600"
      }`}>
        {label}
      </p>
    </div>
  );
}
