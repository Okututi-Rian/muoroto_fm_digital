'use client';

import React, { useState, useEffect } from 'react';
import { uploadFile } from '@/lib/imagekit';

interface Hero {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  link: string;
  badge?: string;
}

const HeroAdminTab = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    alt: '',
    link: '',
    badge: '',
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    setLoading(true);
    const res = await fetch('/api/homepage/hero');
    const data = await res.json();
    setHeroes(data);
    setLoading(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const result = await uploadFile(file, 'homepage/hero');
    if (result.success) {
      setForm({ ...form, imageUrl: result.data.url });
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/homepage/hero/${editingId}` : '/api/homepage/hero';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      fetchHeroes();
      setForm({ title: '', description: '', imageUrl: '', alt: '', link: '', badge: '' });
      setEditingId(null);
    }
  };

  const handleEdit = (hero: Hero) => {
    setForm(hero);
    setEditingId(hero.id);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this hero section?')) return;
    await fetch(`/api/homepage/hero/${id}`, { method: 'DELETE' });
    fetchHeroes();
  };

  return (
    <div>
      <h3 className="font-headline-medium text-xl mb-4">Hero Section</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 rounded border" required />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded border" required />
        <input type="text" placeholder="Alt text" value={form.alt} onChange={e => setForm({ ...form, alt: e.target.value })} className="w-full px-3 py-2 rounded border" required />
        <input type="text" placeholder="Link" value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} className="w-full px-3 py-2 rounded border" required />
        <input type="text" placeholder="Badge (optional)" value={form.badge} onChange={e => setForm({ ...form, badge: e.target.value })} className="w-full px-3 py-2 rounded border" />
        <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} className="w-full" />
        {form.imageUrl && <img src={form.imageUrl} alt={form.alt} className="w-32 h-32 object-cover rounded" />}
        <button type="submit" className="px-6 py-2 bg-primary text-white rounded">{editingId ? 'Update' : 'Create'}</button>
      </form>
      {loading ? <div>Loading...</div> : (
        <div className="space-y-4">
          {heroes.map(hero => (
            <div key={hero.id} className="p-4 border rounded flex items-center justify-between">
              <div>
                <h4 className="font-headline-medium text-lg">{hero.title}</h4>
                <p>{hero.description}</p>
                {hero.imageUrl && <img src={hero.imageUrl} alt={hero.alt} className="w-24 h-24 object-cover rounded mt-2" />}
                <div className="text-sm text-muted-foreground">Link: {hero.link} {hero.badge && <>| Badge: {hero.badge}</>}</div>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(hero)} className="px-4 py-2 bg-accent text-white rounded">Edit</button>
                <button onClick={() => handleDelete(hero.id)} className="px-4 py-2 bg-error text-white rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroAdminTab;
