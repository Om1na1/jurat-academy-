import { useState } from "react";
import StadiumAdmin from "../components/StadiumAdmin.jsx";
import UsersAdmin from "../components/UsersAdmin.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";   // <== добавил
import "../styles/Admin.css";

const TABS = [
  { key: "stadiums", title: "Стадионы" },
  { key: "users",    title: "Юзеры" },
];

export default function AdminPage() {
  const [tab, setTab] = useState("stadiums");

  return (
    <div className="admin-wrap admin-under-header">
      <aside className="admin-aside">
        <div className="admin-aside-header">Админка</div>
        <nav className="admin-menu">
          {TABS.map(t => (
            <button
              key={t.key}
              className={"admin-menu-item" + (tab === t.key ? " active" : "")}
              onClick={() => setTab(t.key)}
            >
              {t.title}
            </button>
          ))}
        </nav>
      </aside>

      <main className="admin-main">
        <ErrorBoundary>
          {tab === "stadiums" && <StadiumAdmin />}
          {tab === "users"    && <UsersAdmin />}
        </ErrorBoundary>
      </main>
    </div>
  );
}
