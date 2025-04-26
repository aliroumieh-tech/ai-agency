# Database Migrations

This directory contains SQL migration files for managing database schema changes.

## How to Use

1. Each migration file is named with a timestamp and a descriptive name
2. To apply a migration:
   - Copy the SQL content
   - Go to your Supabase dashboard
   - Open the SQL editor
   - Paste and run the SQL

## Migration Files

- `20240321_add_access_token_to_meta_connections.sql`: Adds the `access_token` column to the `meta_connections` table

## Best Practices

1. Always backup your database before running migrations
2. Test migrations in a development environment first
3. Run migrations during low-traffic periods
4. Keep track of which migrations have been applied
