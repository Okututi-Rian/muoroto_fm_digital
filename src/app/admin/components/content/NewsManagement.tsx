'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
  isPublished: boolean;
  author: {
    id: string;
    firstName?: string;
    lastName?: string;
  };
  createdAt: string;
}

const NewsManagement = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'General',
    imageUrl: '',
    isPublished: false,
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch('/api/news');
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/news/${editingId}` : '/api/news';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await fetchArticles();
        setShowForm(false);
        setEditingId(null);
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          category: 'General',
          imageUrl: '',
          isPublished: false,
        });
      }
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;

    try {
      const res = await fetch(`/api/news/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await fetchArticles();
      }
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleEdit = (article: NewsArticle) => {
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      imageUrl: article.imageUrl || '',
      isPublished: article.isPublished,
    });
    setEditingId(article.id);
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin">
          <Icon name="ArrowPathIcon" size={24} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-medium text-xl text-foreground">News Articles</h3>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({
              title: '',
              excerpt: '',
              content: '',
              category: 'General',
              imageUrl: '',
              isPublished: false,
            });
          }}
          className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300"
        >
          <Icon name="PlusIcon" size={16} />
          <span>{showForm ? 'Cancel' : 'Write Article'}</span>
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="glassmorphic rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body-medium text-sm text-foreground mb-2">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              />
            </div>
            <div>
              <label className="block font-body-medium text-sm text-foreground mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              >
                <option>General</option>
                <option>Community</option>
                <option>Cultural</option>
                <option>Breaking News</option>
                <option>Events</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-body-medium text-sm text-foreground mb-2">
              Excerpt
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
              className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              rows={2}
              placeholder="Brief summary of the article"
            />
          </div>

          <div>
            <label className="block font-body-medium text-sm text-foreground mb-2">
              Content *
            </label>
            <textarea
              required
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              rows={6}
            />
          </div>

          <div>
            <label className="block font-body-medium text-sm text-foreground mb-2">
              Image URL
            </label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
              className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="isPublished"
              checked={formData.isPublished}
              onChange={(e) =>
                setFormData({ ...formData, isPublished: e.target.checked })
              }
              className="w-4 h-4 rounded"
            />
            <label htmlFor="isPublished" className="font-body text-sm text-foreground">
              Publish Now
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-2 font-cta text-sm transition-all duration-300"
          >
            {editingId ? 'Update Article' : 'Publish Article'}
          </button>
        </form>
      )}

      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="glassmorphic rounded-xl p-4 flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-body-medium text-foreground mb-1">
                {article.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {article.category} • {new Date(article.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 rounded-full font-body text-xs ${
                  article.isPublished
                    ? 'bg-primary/20 text-primary'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {article.isPublished ? 'Published' : 'Draft'}
              </span>
              <button
                onClick={() => handleEdit(article)}
                className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Icon name="PencilIcon" size={16} />
              </button>
              <button
                onClick={() => handleDelete(article.id)}
                className="w-8 h-8 bg-muted hover:bg-error hover:text-error-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Icon name="TrashIcon" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {articles.length === 0 && !showForm && (
        <div className="text-center py-12">
          <Icon name="NewspaperIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="font-body text-muted-foreground">No articles yet. Write your first article!</p>
        </div>
      )}
    </div>
  );
};

export default NewsManagement;
