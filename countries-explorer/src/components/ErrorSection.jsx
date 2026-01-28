import { AlertTriangle } from "lucide-react";
export default function ErrorSection({ error }) {
  return (
    <div>
      {error ? (
        <div className="error-section">
          <AlertTriangle size={18} />
          {error}
        </div>
      ) : null}
    </div>
  );
}
