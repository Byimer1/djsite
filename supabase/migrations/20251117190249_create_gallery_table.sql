/*
  # Create Gallery Table for DJ Services Website

  1. New Tables
    - `gallery`
      - `id` (uuid, primary key) - Unique identifier for each photo
      - `image_url` (text) - URL to the stored image
      - `caption` (text, optional) - Description or caption for the photo
      - `event_type` (text, optional) - Type of event (wedding, party, corporate, etc.)
      - `created_at` (timestamptz) - Timestamp when photo was uploaded
      - `display_order` (integer) - Order for displaying photos

  2. Security
    - Enable RLS on `gallery` table
    - Add policy for public read access (anyone can view photos)
    - Add policy for authenticated admin to insert/update/delete photos

  3. Notes
    - Public can view all gallery photos without authentication
    - Only authenticated users can manage gallery content
*/

CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  caption text DEFAULT '',
  event_type text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery photos"
  ON gallery FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert photos"
  ON gallery FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update photos"
  ON gallery FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete photos"
  ON gallery FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS gallery_display_order_idx ON gallery(display_order);
CREATE INDEX IF NOT EXISTS gallery_created_at_idx ON gallery(created_at DESC);