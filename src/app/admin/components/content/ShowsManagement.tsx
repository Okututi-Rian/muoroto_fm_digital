'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Show {
  id: string;
  title: string;
  description: string;
  genre: string;
  timeSlot: string;
  duration: string;
  frequency: string;
  imageUrl?: string;
  isLive: boolean;
  host: {
    id: string;
    firstName?: string;
    lastName?: string;
  };
  createdAt: string;
}

const ShowsManagement = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    genre: '',
    timeSlot: '',
    duration: '',
    frequency: 'Weekly',
    imageUrl: '',
    isLive: false,
  });

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const res = await fetch('/api/shows');
      if (res.ok) {
        const data = await res.json();
        setShows(data);
      }
    } catch (error) {
      console.error('Error fetching shows:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `/api/shows/${editingId}` : '/api/shows';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await fetchShows();
        setShowForm(false);
        setEditingId(null);
        setFormData({
          title: '',
          description: '',
          genre: '',
          timeSlot: '',
          duration: '',
          frequency: 'Weekly',
          imageUrl: '',
          isLive: false,
        });
      }
    } catch (error) {
      console.error('Error saving show:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this show?')) return;

    try {
      const res = await fetch(`/api/shows/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await fetchShows();
      }
    } catch (error) {
      console.error('Error deleting show:', error);
    }
  };

  const handleEdit = (show: Show) => {
    setFormData({
      title: show.title,
      description: show.description,
      genre: show.genre,
      timeSlot: show.timeSlot,
      duration: show.duration,
      frequency: show.frequency,
      imageUrl: show.imageUrl || '',
      isLive: show.isLive,
    });
    setEditingId(show.id);
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
        <h3 className="font-headline-medium text-xl text-foreground">Manage Shows</h3>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({
              title: '',
              description: '',
              genre: '',
              timeSlot: '',
              duration: '',
              frequency: 'Weekly',
              imageUrl: '',
              isLive: false,
            });
          }}
          className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-cta text-sm transition-all duration-300"
        >
          <Icon name="PlusIcon" size={16} />
          <span>{showForm ? 'Cancel' : 'Add New Show'}</span>
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="glassmorphic rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-body-medium text-sm text-foreground mb-2">
                Show Title *
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
                Genre
              </label>
              <input
                type="text"
                value={formData.genre}
                onChange={(e) =>
                  setFormData({ ...formData, genre: e.target.value })
                }
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block font-body-medium text-sm text-foreground mb-2">
              Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-body-medium text-sm text-foreground mb-2">
                Time Slot
              </label>
              <input
                type="text"
                placeholder="e.g., 6:00 AM - 9:00 AM"
                value={formData.timeSlot}
                onChange={(e) =>
                  setFormData({ ...formData, timeSlot: e.target.value })
                }
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              />
            </div>
            <div>
              <label className="block font-body-medium text-sm text-foreground mb-2">
                Duration
              </label>
              <input
                type="text"
                placeholder="e.g., 3 hours"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              />
            </div>
            <div>
              <label className="block font-body-medium text-sm text-foreground mb-2">
                Frequency
              </label>
              <select
                value={formData.frequency}
                onChange={(e) =>
                  setFormData({ ...formData, frequency: e.target.value })
                }
                className="w-full bg-input border border-border rounded-lg px-3 py-2 text-foreground font-body text-sm"
              >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </select>
            </div>
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
              id="isLive"
              checked={formData.isLive}
              onChange={(e) =>
                setFormData({ ...formData, isLive: e.target.checked })
              }
              className="w-4 h-4 rounded"
            />
            <label htmlFor="isLive" className="font-body text-sm text-foreground">
              Currently Live
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-2 font-cta text-sm transition-all duration-300"
          >
            {editingId ? 'Update Show' : 'Create Show'}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shows.map((show) => (
          <div key={show.id} className="glassmorphic rounded-2xl p-6">
            {show.imageUrl && (
              <img
                src={show.imageUrl}
                alt={show.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="RadioIcon" size={20} className="text-white" />
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEdit(show)}
                  className="w-8 h-8 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Icon name="PencilIcon" size={16} />
                </button>
                <button
                  onClick={() => handleDelete(show.id)}
                  className="w-8 h-8 bg-muted hover:bg-error hover:text-error-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Icon name="TrashIcon" size={16} />
                </button>
              </div>
            </div>
            <h4 className="font-headline-medium text-lg text-foreground mb-2">
              {show.title}
            </h4>
            <p className="font-body text-sm text-muted-foreground mb-2">
              {show.description.substring(0, 100)}...
            </p>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Genre: {show.genre}
            </p>
            <div className="flex items-center justify-between">
              <span
                className={`px-2 py-1 rounded-full font-body text-xs ${
                  show.isLive
                    ? 'bg-error/20 text-error'
                    : 'bg-secondary/20 text-secondary'
                }`}
              >
                {show.isLive ? 'Live' : 'Scheduled'}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {show.timeSlot}
              </span>
            </div>
          </div>
        ))}
      </div>

      {shows.length === 0 && !showForm && (
        <div className="text-center py-12">
          <Icon name="RadioIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="font-body text-muted-foreground">No shows yet. Create your first show!</p>
        </div>
      )}
    </div>
  );
};

export default ShowsManagement;
