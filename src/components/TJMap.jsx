import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/TJMap.css";

const API_BASE = process.env.REACT_APP_API_BASE;

function FitTajikistanBounds() {
  const map = useMap();
  const bounds = useMemo(() => [[36.5, 67.3], [41.1, 75.2]], []);
  useEffect(() => { map.fitBounds(bounds, { padding: [24, 24] }); }, [map, bounds]);
  return null;
}

function parseInventory(csv) {
  if (!csv) return [];
  return csv.split(";").map(s => s.trim()).filter(Boolean);
}

export default function TJMap() {
  const [stadiums, setStadiums] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      if (!API_BASE) { setLoading(false); return; }
      try {
        const res = await fetch(`${API_BASE}/api/stadiums?ts=${Date.now()}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!ignore) { setStadiums(Array.isArray(data) ? data : []); setLoading(false); }
      } catch {
        if (!ignore) setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, []);

  const points = stadiums.filter(s => Number.isFinite(s?.latitude) && Number.isFinite(s?.longitude));

  return (
    <div className="tjmap-wrapper">
      {loading && <div className="tjmap-loader">Загружаем карту…</div>}

      <MapContainer
        className="tjmap"
        center={[38.86, 71.0]}
        zoom={6}
        minZoom={5}
        scrollWheelZoom
        whenCreated={(m) => (mapRef.current = m)}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitTajikistanBounds />

        {points.map((s) => (
          <CircleMarker
            key={s.id ?? `${s.latitude},${s.longitude}`}
            center={[s.latitude, s.longitude]}
            radius={12}
            pathOptions={{ color: "#e73e5a", fillColor: "#e73e5a", fillOpacity: 0.95 }}
            eventHandlers={{
              click: () => {
                setActive(s);
                mapRef.current?.flyTo([s.latitude, s.longitude], 11, { duration: 0.5 });
              },
            }}
          />
        ))}
      </MapContainer>

      {active && (
        <div className="mini-card" role="dialog" aria-label={active.name}>
          <button className="mini-card__close" onClick={() => setActive(null)} aria-label="Закрыть">×</button>
          <div className="mini-card__image">
            <img
              src={active.imageUrl || "/uploads/stadium.jpg"}
              alt={active.name || "Стадион"}
              onError={(e) => (e.currentTarget.src = "/uploads/stadium.jpg")}
            />
          </div>
          <div className="mini-card__body">
            {active.name && <h3 className="mini-card__name">{active.name}</h3>}
            <p className="mini-card__row"><strong>Расположение:</strong>&nbsp;{active.address || "—"}</p>
            <p className="mini-card__row"><strong>Размеры поля:</strong>&nbsp;{active.fieldSize || "—"}</p>
            <h4 className="mini-card__title">Инвентарь</h4>
            <div className="chips">
              {parseInventory(active.inventory).length
                ? parseInventory(active.inventory).map((t, i) => <span className="chip" key={i}>{t}</span>)
                : <span className="chip chip--muted">нет данных</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
