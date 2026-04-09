/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `company_name` (text, required)
      - `work_email` (text, required)
      - `project_details` (text, required)
      - `submitted_at` (timestamp, required)
      - `created_at` (timestamp, auto)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow inserting new submissions (public)
    - Add policy for authenticated users to view their own submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text NOT NULL,
  work_email text NOT NULL,
  project_details text NOT NULL,
  submitted_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow inserting contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);
