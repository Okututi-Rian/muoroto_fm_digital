'use client';

import React, { useState, useEffect } from 'react';
import { uploadFile } from '@/lib/imagekit';

interface Highlight {
  id: string;
  name: string;
  location: string;
  message: string;
  imageUrl: string;
  alt: string;
  rating: number;
  showTitle: string;
}

const CommunityHighlightAdminTab = () => {
  const [items, setItems] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', location: '', message: '', imageUrl: '', alt: '', rating: '5', showTitle: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch('/api/homepage/community-highlight');
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const result = await uploadFile(file, 'homepage/community-highlights');
    if (result.success) {
      setForm({ ...form, imageUrl: result.data.url });
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = { ...form, rating: parseInt(form.rating) } as any;
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/homepage/community-highlight/${editingId}` : '/api/homepage/community-highlight';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (res.ok) { fetchItems(); setForm({ name: '', location: '', message: '', imageUrl: '', alt: '', rating: '5', showTitle: '' }); setEditingId(null); }
  };

  const handleEdit = (item: Highlight) => { setForm({ name: item.name, location: item.location, message: item.message, imageUrl: item.imageUrl || '', alt: item.alt, rating: String(item.rating), showTitle: item.showTitle }); setEditingId(item.id); };

  const handleDelete = async (id: string) => { if (!confirm('Delete this highlight?')) return; await fetch(`/api/homepage/community-highlight/${id}`, { method: 'DELETE' }); fetchItems(); };

  return (
    <div>
      <h3 className="font-headline-medium text-xl mb-4">Community Highlights</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 rounded border" required />
          <input type="text" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="w-full px-3 py-2 rounded border" />
        </div>
        <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-3 py-2 rounded border" rows={3} required />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Alt text" value={form.alt} onChange={e => setForm({ ...form, alt: e.target.value })} className="w-full px-3 py-2 rounded border" />
          <input type="text" placeholder="Show Title" value={form.showTitle} onChange={e => setForm({ ...form, showTitle: e.target.value })} className="w-full px-3 py-2 rounded border" />
          <input type="number" min={1} max={5} placeholder="Rating" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })} className="w-full px-3 py-2 rounded border" />
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} className="w-full" />
        {form.imageUrl && <img src={form.imageUrl} alt={form.alt} className="w-32 h-32 object-cover rounded" />}
        <div className="flex space-x-2">
          <button type="submit" className="px-6 py-2 bg-primary text-white rounded">{editingId ? 'Update' : 'Create'}</button>
          {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', location: '', message: '', imageUrl: '', alt: '', rating: '5', showTitle: '' }); }} className="px-6 py-2 bg-muted rounded">Cancel</button>}
        </div>
      </form>

      {loading ? <div>Loading...</div> : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="p-4 border rounded flex items-center justify-between">
              <div>
                <h4 className="font-headline-medium text-lg">{item.name} — {item.location}</h4>
                <p className="text-sm text-muted-foreground">{item.message}</p>
                {item.imageUrl && <img src={item.imageUrl} alt={item.alt} className="w-24 h-24 object-cover rounded mt-2" />}
                <div className="text-sm text-muted-foreground">Show: {item.showTitle} • Rating: {item.rating}</div>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(item)} className="px-4 py-2 bg-accent text-white rounded">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="px-4 py-2 bg-error text-white rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityHighlightAdminTab;
