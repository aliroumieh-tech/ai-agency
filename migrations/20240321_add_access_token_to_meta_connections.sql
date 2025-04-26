-- Add access_token column to meta_connections table
ALTER TABLE meta_connections
ADD COLUMN access_token TEXT;

-- Add a comment to the column for documentation
COMMENT ON COLUMN meta_connections.access_token IS 'The access token received from Meta OAuth';

-- Create an index on the column for faster lookups
CREATE INDEX idx_meta_connections_access_token ON meta_connections(access_token); 