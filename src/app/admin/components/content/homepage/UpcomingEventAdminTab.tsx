'use client';

import React, { useState, useEffect } from 'react';
import { uploadFile } from '@/lib/imagekit';

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  alt: string;
  category: string;
  isLive: boolean;
}

const UpcomingEventAdminTab = () => {
  const [items, setItems] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', description: '', date: '', time: '', location: '', imageUrl: '', alt: '', category: 'Cultural', isLive: false });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => { setLoading(true); const res = await fetch('/api/homepage/upcoming-event'); const data = await res.json(); setItems(data); setLoading(false); };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const result = await uploadFile(file, 'homepage/upcoming-events');
    if (result.success) setForm({ ...form, imageUrl: result.data.url });
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = { ...form, date: form.date ? new Date(form.date).toISOString() : new Date().toISOString() } as any;
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/homepage/upcoming-event/${editingId}` : '/api/homepage/upcoming-event';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (res.ok) { fetchItems(); setForm({ title: '', description: '', date: '', time: '', location: '', imageUrl: '', alt: '', category: 'Cultural', isLive: false }); setEditingId(null); }
  };

  const handleEdit = (item: EventItem) => { setForm({ title: item.title, description: item.description, date: item.date.split('T')[0] || '', time: item.time || '', location: item.location, imageUrl: item.imageUrl || '', alt: item.alt, category: item.category, isLive: item.isLive }); setEditingId(item.id); };
  const handleDelete = async (id: string) => { if (!confirm('Delete this event?')) return; await fetch(`/api/homepage/upcoming-event/${id}`, { method: 'DELETE' }); fetchItems(); };

  return (
    <div>
      <h3 className="font-headline-medium text-xl mb-4">Upcoming Events</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 rounded border" required />
          <input type="date" placeholder="Date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full px-3 py-2 rounded border" />
        </div>
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded border" rows={3} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="time" placeholder="Time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className="w-full px-3 py-2 rounded border" />
          <input type="text" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="w-full px-3 py-2 rounded border" />
          <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 rounded border" />
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} className="w-full" />
        {form.imageUrl && <img src={form.imageUrl} alt={form.alt} className="w-32 h-32 object-cover rounded" />}
        <div className="flex items-center space-x-4">
          <label className="inline-flex items-center"><input type="checkbox" checked={form.isLive} onChange={e => setForm({ ...form, isLive: e.target.checked })} className="mr-2" />Currently Live</label>
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="px-6 py-2 bg-primary text-white rounded">{editingId ? 'Update' : 'Create'}</button>
          {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', description: '', date: '', time: '', location: '', imageUrl: '', alt: '', category: 'Cultural', isLive: false }); }} className="px-6 py-2 bg-muted rounded">Cancel</button>}
        </div>
      </form>

      {loading ? <div>Loading...</div> : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="p-4 border rounded flex items-center justify-between">
              <div>
                <h4 className="font-headline-medium text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.imageUrl && <img src={item.imageUrl} alt={item.alt} className="w-24 h-24 object-cover rounded mt-2" />}
                <div className="text-sm text-muted-foreground">{new Date(item.date).toLocaleDateString()} • {item.time} • {item.location}</div>
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

export default UpcomingEventAdminTab;
