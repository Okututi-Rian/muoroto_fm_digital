'use client';

import React, { useState, useEffect } from 'react';
import { uploadFile } from '@/lib/imagekit';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  alt: string;
  category: string;
  publishedAt: string;
  readTime: number;
  author: string;
}

const TrendingNewsAdminTab = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', excerpt: '', imageUrl: '', alt: '', category: 'General', publishedAt: '', readTime: '3', author: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => { setLoading(true); const res = await fetch('/api/homepage/trending-news'); const data = await res.json(); setItems(data); setLoading(false); };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const result = await uploadFile(file, 'homepage/trending-news');
    if (result.success) setForm({ ...form, imageUrl: result.data.url });
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = { ...form, readTime: parseInt(form.readTime), publishedAt: form.publishedAt ? new Date(form.publishedAt).toISOString() : new Date().toISOString() } as any;
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/homepage/trending-news/${editingId}` : '/api/homepage/trending-news';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (res.ok) { fetchItems(); setForm({ title: '', excerpt: '', imageUrl: '', alt: '', category: 'General', publishedAt: '', readTime: '3', author: '' }); setEditingId(null); }
  };

  const handleEdit = (item: NewsItem) => { setForm({ title: item.title, excerpt: item.excerpt, imageUrl: item.imageUrl || '', alt: item.alt, category: item.category, publishedAt: item.publishedAt, readTime: String(item.readTime), author: item.author }); setEditingId(item.id); };
  const handleDelete = async (id: string) => { if (!confirm('Delete this news item?')) return; await fetch(`/api/homepage/trending-news/${id}`, { method: 'DELETE' }); fetchItems(); };

  return (
    <div>
      <h3 className="font-headline-medium text-xl mb-4">Trending News</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 rounded border" required />
          <input type="text" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} className="w-full px-3 py-2 rounded border" />
        </div>
        <textarea placeholder="Excerpt" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} className="w-full px-3 py-2 rounded border" rows={3} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 rounded border" />
          <input type="date" placeholder="Published At" value={form.publishedAt} onChange={e => setForm({ ...form, publishedAt: e.target.value })} className="w-full px-3 py-2 rounded border" />
          <input type="number" min={1} placeholder="Read Time (min)" value={form.readTime} onChange={e => setForm({ ...form, readTime: e.target.value })} className="w-full px-3 py-2 rounded border" />
        </div>
        <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} className="w-full" />
        {form.imageUrl && <img src={form.imageUrl} alt={form.alt} className="w-32 h-32 object-cover rounded" />}
        <div className="flex space-x-2">
          <button type="submit" className="px-6 py-2 bg-primary text-white rounded">{editingId ? 'Update' : 'Create'}</button>
          {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', excerpt: '', imageUrl: '', alt: '', category: 'General', publishedAt: '', readTime: '3', author: '' }); }} className="px-6 py-2 bg-muted rounded">Cancel</button>}
        </div>
      </form>

      {loading ? <div>Loading...</div> : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="p-4 border rounded flex items-center justify-between">
              <div>
                <h4 className="font-headline-medium text-lg">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                {item.imageUrl && <img src={item.imageUrl} alt={item.alt} className="w-24 h-24 object-cover rounded mt-2" />}
                <div className="text-sm text-muted-foreground">{item.category} • By {item.author} • {item.readTime} min</div>
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

export default TrendingNewsAdminTab;
