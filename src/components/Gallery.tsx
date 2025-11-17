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
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Camera className="w-12 h-12 text-orange-500 floating" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            EVENT GALLERY
          </h2>
          <p className="text-xl text-orange-300 font-semibold mb-8">
            Capturing unforgettable moments from our events
          </p>

          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg uppercase tracking-wider"
          >
            <Upload className="w-6 h-6" />
            Upload Photos
          </button>
        </div>

        {showUploadForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-slate-900 border-2 border-orange-500 p-8 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-wider">Upload Photo</h3>
              <button
                onClick={() => setShowUploadForm(false)}
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="caption"
                  className="block text-sm font-bold text-white mb-2 uppercase tracking-wider"
                >
                  Caption
                </label>
                <input
                  type="text"
                  id="caption"
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  placeholder="Event description"
                />
              </div>

              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-bold text-white mb-2 uppercase tracking-wider"
                >
                  Event Type
                </label>
                <input
                  type="text"
                  id="eventType"
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  placeholder="Wedding, Party, Corporate, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Select Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-orange-500 file:text-white file:font-bold hover:file:bg-orange-600 transition-all"
                />
              </div>

              {uploading && (
                <div className="flex items-center gap-2 text-orange-400 font-bold">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>UPLOADING...</span>
                </div>
              )}
            </div>
          </div>
        )}

        {photos.length === 0 ? (
          <div className="text-center py-20">
            <Camera className="w-20 h-20 text-orange-500/30 mx-auto mb-6" />
            <p className="text-white text-xl font-bold">
              No photos yet. Upload your first event photo!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-slate-800 hover:border-orange-500"
                onClick={() => setSelectedImage(photo.image_url)}
              >
                <img
                  src={photo.image_url}
                  alt={photo.caption || 'Event photo'}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    {photo.caption && (
                      <p className="font-bold text-lg mb-2">{photo.caption}</p>
                    )}
                    {photo.event_type && (
                      <p className="text-sm text-orange-300 font-semibold">{photo.event_type.toUpperCase()}</p>
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
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-orange-400 hover:text-orange-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
