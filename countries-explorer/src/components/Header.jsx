import { Earth } from "lucide-react";
export default function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <span className="header-title-icon">
          <Earth size={28} color="#ffffff" strokeWidth={1.75} />
        </span>
        Countries Explorer
      </div>
    </header>
  );
}
