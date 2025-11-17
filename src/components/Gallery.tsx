import { useState, useEffect } from 'react';
import { Camera, Upload, X, Loader2 } from 'lucide-react';
import { supabase, GalleryPhoto } from '../lib/supabase';

export function Gallery() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    loadPhotos();
  }, []);

  async function loadPhotos() {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPhotos(data || []);
    } catch (error) {
      console.error('Error loading photos:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const caption = (document.getElementById('caption') as HTMLInputElement)?.value || '';
    const eventType = (document.getElementById('eventType') as HTMLInputElement)?.value || '';

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;

        const { error } = await supabase.from('gallery').insert({
          image_url: base64String,
          caption,
          event_type: eventType,
          display_order: photos.length,
        });

        if (error) throw error;

        await loadPhotos();
        setShowUploadForm(false);
        (e.target as HTMLInputElement).value = '';
        (document.getElementById('caption') as HTMLInputElement).value = '';
        (document.getElementById('eventType') as HTMLInputElement).value = '';
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading photo:', error);
      alert('Failed to upload photo. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Event Gallery
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Memorable moments from our events
          </p>

          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <Upload className="w-5 h-5" />
            Upload Photos
          </button>
        </div>

        {showUploadForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">Upload Photo</h3>
              <button
                onClick={() => setShowUploadForm(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="caption"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Caption
                </label>
                <input
                  type="text"
                  id="caption"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Event description"
                />
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Event Type
                </label>
                <input
                  type="text"
                  id="eventType"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Wedding, Party, Corporate, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Select Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
              </div>

              {uploading && (
                <div className="flex items-center gap-2 text-orange-600">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Uploading...</span>
                </div>
              )}
            </div>
          </div>
        )}

        {photos.length === 0 ? (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">
              No photos yet. Upload your first event photo!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(photo.image_url)}
              >
                <img
                  src={photo.image_url}
                  alt={photo.caption || 'Event photo'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {photo.caption && (
                      <p className="font-semibold mb-1">{photo.caption}</p>
                    )}
                    {photo.event_type && (
                      <p className="text-sm text-slate-200">{photo.event_type}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
