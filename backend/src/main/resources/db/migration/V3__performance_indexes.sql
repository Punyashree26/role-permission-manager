CREATE INDEX idx_role_status
ON roles_permissions(status);

CREATE INDEX idx_role_created_at
ON roles_permissions(created_at);