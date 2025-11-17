'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MediaAsset {
  id: string;
  fileName: string;
  originalName: string;
  fileType: string;
  fileSize: number;
  url: string;
  thumbnailUrl?: string;
  createdAt: string;
}

const MediaManagement = () => {
  const [media, setMedia] = useState<MediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    fileName: '',
    originalName: '',
    fileType: 'image',
    fileSize: 0,
    url: '',
    thumbnailUrl: '',
    folder: 'uploads',
  });

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const res = await fetch('/api/media');
      if (res.ok) {
        const data = await res.json();
        setMedia(data);
      }
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // For demo, we'll create a simple file upload URL
      // In production, you'd use ImageKit or similar service
      const reader = new FileReader();
      reader.onloadend = async () => {
        const fileData = {
          fileName: file.name.replace(/\s+/g, '-'),
          originalName: file.name,
          fileType: file.type.startsWith('image') ? 'image' : 'file',
          fileSize: file.size,
          url: reader.result as string, // This would be the upload URL in production
          folder: 'uploads',
        };

        try {
          const res = await fetch('/api/media', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fileData),
          });

          if (res.ok) {
            await fetchMedia();
            setFormData({
              fileName: '',
              originalName: '',
              fileType: 'image',
              fileSize: 0,
              url: '',
              thumbnailUrl: '',
              folder: 'uploads',
            });
          }
        } catch (error) {
          console.error('Error uploading media:', error);
        }
      };
      reader.readAsDataURL(file);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this media file?')) return;

    try {
      const res = await fetch(`/api/media/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await fetchMedia();
      }
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
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
        <h3 className="font-headline-medium text-xl text-foreground">Media Library</h3>
      </div>

      <div className="glassmorphic rounded-2xl p-6">
        <label className="block">
          <div className="flex items-center justify-center w-full px-6 py-12 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-300">
            <div className="text-center">
              <Icon name="ArrowUpTrayIcon" size={32} className="text-muted-foreground mx-auto mb-2" />
              <p className="font-body-medium text-foreground">
                Drop files here or click to upload
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Supports images, videos, and documents
              </p>
            </div>
          </div>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media.map((file) => (
          <div key={file.id} className="glassmorphic rounded-xl p-4 group">
            {file.fileType === 'image' && (
              <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                <img
                  src={file.url}
                  alt={file.originalName}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {file.fileType !== 'image' && (
              <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
                <Icon name="DocumentIcon" size={32} className="text-muted-foreground" />
              </div>
            )}
            <p className="font-body text-xs text-foreground truncate mb-1 group-hover:text-primary">
              {file.originalName}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-body text-xs text-muted-foreground">
                {formatFileSize(file.fileSize)}
              </span>
              <button
                onClick={() => handleDelete(file.id)}
                className="w-6 h-6 bg-muted hover:bg-error hover:text-error-foreground rounded flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <Icon name="TrashIcon" size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {media.length === 0 && (
        <div className="text-center py-12">
          <Icon name="PhotoIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="font-body text-muted-foreground">No media files yet. Upload your first file!</p>
        </div>
      )}
    </div>
  );
};

export default MediaManagement;
