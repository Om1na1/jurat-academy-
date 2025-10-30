import { useEffect, useState } from "react";
import "../styles/StadiumAdmin.css";

const empty = {
  name: "", address: "", latitude: "", longitude: "",
  fieldSize: "", inventory: "", imageUrl: "/uploads/stadium.jpg"
};

export default function StadiumAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(empty.imageUrl);

  async function load() {
    setErr("");
    try {
      const r = await fetch(`/api/Stadiums?ts=${Date.now()}`);
      const d = await r.json();
      setItems(Array.isArray(d) ? d : []);
    } catch {
      setErr("Не удалось загрузить список");
    }
  }

  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (file) setPreview(URL.createObjectURL(file));
    else setPreview(form.imageUrl || empty.imageUrl);
    return () => { if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview); };
    // eslint-disable-next-line
  }, [file, form.imageUrl]);

  async function uploadFileIfAny() {
    if (!file) return form.imageUrl || empty.imageUrl;
    const fd = new FormData();
    fd.append("file", file);
    const r = await fetch(`/api/Uploads`, { method: "POST", body: fd });
    if (!r.ok) throw new Error("upload failed");
    const data = await r.json();
    return data.path || "/uploads/stadium.jpg";
  }

  async function onAdd(e) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      const imageUrl = await uploadFileIfAny();
      const payload = {
        ...form,
        latitude: Number(form.latitude),
        longitude: Number(form.longitude),
        imageUrl
      };
      const r = await fetch(`/api/Stadiums`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error();
      setForm(empty);
      setFile(null);
      await load();
    } catch {
      setErr("Не удалось создать точку");
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(id) {
    if (!window.confirm("Удалить точку?")) return;
    setBusy(true);
    setErr("");
    try {
      const r = await fetch(`/api/Stadiums/${id}`, { method: "DELETE" });
      if (!r.ok) throw new Error();
      setItems(items.filter(x => x.id !== id));
    } catch {
      setErr("Не удалось удалить");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="sa-wrap">
      <h2 className="sa-title">Стадионы — админка</h2>
      {err && <div className="sa-alert">{err}</div>}

      <form className="sa-form" onSubmit={onAdd}>
        <div className="sa-grid">
          <input className="sa-input" placeholder="Название" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="sa-input" placeholder="Адрес" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} required />
          <input className="sa-input" placeholder="Широта (lat)" value={form.latitude} onChange={e=>setForm({...form, latitude:e.target.value})} required />
          <input className="sa-input" placeholder="Долгота (lng)" value={form.longitude} onChange={e=>setForm({...form, longitude:e.target.value})} required />
          <input className="sa-input" placeholder="Размер поля (напр. 3600 м²)" value={form.fieldSize} onChange={e=>setForm({...form, fieldSize:e.target.value})} />
          <input className="sa-input" placeholder="Инвентарь (Мяч:10;Конусы:20)" value={form.inventory} onChange={e=>setForm({...form, inventory:e.target.value})} />
          <input className="sa-input" placeholder="Image URL" value={form.imageUrl} onChange={e=>setForm({...form, imageUrl:e.target.value})} />
          <div className="sa-file">
            <input type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0]||null)} />
            <img src={preview} alt="" onError={(e)=>e.currentTarget.src="/uploads/stadium.jpg"} />
          </div>
        </div>
        <div className="sa-actions">
          <button className="sa-btn" disabled={busy}>Добавить</button>
          <button type="button" className="sa-btn ghost" onClick={()=>{setForm(empty);setFile(null);}} disabled={busy}>Сброс</button>
        </div>
      </form>

      <div className="sa-list">
        {items.map(s => (
          <div key={s.id} className="sa-card">
            <img src={s.imageUrl || "/uploads/stadium.jpg"} alt="" onError={(e)=>e.currentTarget.src="/uploads/stadium.jpg"} />
            <div className="sa-card-body">
              <div className="sa-name">{s.name}</div>
              <div className="sa-sub">{s.address}</div>
              <div className="sa-meta">lat: {s.latitude} · lng: {s.longitude}</div>
              {s.fieldSize && <div className="sa-meta">поле: {s.fieldSize}</div>}
              {s.inventory && <div className="sa-meta">инвентарь: {s.inventory}</div>}
            </div>
            <div className="sa-card-actions">
              <button className="sa-btn danger" onClick={()=>onDelete(s.id)} disabled={busy}>Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
