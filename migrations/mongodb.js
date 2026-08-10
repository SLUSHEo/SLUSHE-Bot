// MongoDB Database Schema for SLUSHE Bot
// This script runs on MongoDB initialization

db = db.getSiblingDB('slushe_bot');

// Moderation Logs Collection
db.createCollection('moderation_logs');
db.moderation_logs.createIndex({ guild_id: 1, user_id: 1 });
db.moderation_logs.createIndex({ created_at: -1 });
db.moderation_logs.createIndex({ action: 1 });
db.moderation_logs.createIndex({ moderator_id: 1 });

// Example moderation log document structure
db.moderation_logs.insertOne({
    guild_id: 0,
    user_id: 0,
    moderator_id: 0,
    action: 'warn', // warn, mute, kick, ban, etc.
    reason: 'Example reason',
    duration: null, // in seconds, null for permanent
    created_at: new Date(),
    expires_at: null,
    active: true,
    remove_reason: null
});
db.moderation_logs.deleteMany({ guild_id: 0 });

// User Cache Collection
db.createCollection('user_cache');
db.user_cache.createIndex({ user_id: 1 }, { unique: true });
db.user_cache.createIndex({ updated_at: 1 }, { expireAfterSeconds: 86400 }); // Auto-delete after 1 day

// Example user cache document
db.user_cache.insertOne({
    _id: ObjectId(),
    user_id: 0,
    username: '',
    avatar_url: '',
    cached_data: {},
    updated_at: new Date()
});
db.user_cache.deleteMany({ user_id: 0 });

// Guild Cache Collection
db.createCollection('guild_cache');
db.guild_cache.createIndex({ guild_id: 1 }, { unique: true });
db.guild_cache.createIndex({ updated_at: 1 }, { expireAfterSeconds: 86400 });

// Example guild cache
db.guild_cache.insertOne({
    _id: ObjectId(),
    guild_id: 0,
    name: '',
    member_count: 0,
    settings: {},
    updated_at: new Date()
});
db.guild_cache.deleteMany({ guild_id: 0 });

// Audit Trail Collection
db.createCollection('audit_trail');
db.audit_trail.createIndex({ guild_id: 1, created_at: -1 });
db.audit_trail.createIndex({ user_id: 1 });
db.audit_trail.createIndex({ action_type: 1 });
db.audit_trail.createIndex({ created_at: 1 }, { expireAfterSeconds: 2592000 }); // Auto-delete after 30 days

// Example audit trail
db.audit_trail.insertOne({
    _id: ObjectId(),
    guild_id: 0,
    user_id: 0,
    action_type: 'command_executed',
    action_details: {},
    created_at: new Date()
});
db.audit_trail.deleteMany({ guild_id: 0 });

// Command Cache Collection
db.createCollection('command_cache');
db.command_cache.createIndex({ command_name: 1, guild_id: 1 });
db.command_cache.createIndex({ created_at: 1 }, { expireAfterSeconds: 604800 }); // Auto-delete after 7 days

// Session Collection (for user sessions/state)
db.createCollection('sessions');
db.sessions.createIndex({ user_id: 1, guild_id: 1 });
db.sessions.createIndex({ expires_at: 1 }, { expireAfterSeconds: 0 }); // Auto-delete expired sessions

// Scheduled Actions Collection
db.createCollection('scheduled_actions');
db.scheduled_actions.createIndex({ guild_id: 1, execute_at: 1 });
db.scheduled_actions.createIndex({ user_id: 1 });
db.scheduled_actions.createIndex({ status: 1 });
db.scheduled_actions.createIndex({ execute_at: 1 }, { expireAfterSeconds: 0 });

// Example scheduled action
db.scheduled_actions.insertOne({
    _id: ObjectId(),
    guild_id: 0,
    user_id: 0,
    action_type: 'unmute',
    action_data: {},
    execute_at: new Date(),
    status: 'pending', // pending, completed, failed
    created_at: new Date()
});
db.scheduled_actions.deleteMany({ guild_id: 0 });

// Warnings Collection
db.createCollection('warnings');
db.warnings.createIndex({ guild_id: 1, user_id: 1 });
db.warnings.createIndex({ created_at: -1 });
db.warnings.createIndex({ moderator_id: 1 });

// Mutes Collection
db.createCollection('mutes');
db.mutes.createIndex({ guild_id: 1, user_id: 1 });
db.mutes.createIndex({ expires_at: 1 }, { expireAfterSeconds: 0 });

// Bans Collection
db.createCollection('bans');
db.bans.createIndex({ guild_id: 1, user_id: 1 });
db.bans.createIndex({ moderator_id: 1 });

// Fun Stats Collection
db.createCollection('fun_stats');
db.fun_stats.createIndex({ guild_id: 1, user_id: 1 });
db.fun_stats.createIndex({ points: -1 });

// Create views for reporting (optional)
db.createCollection('report_moderation_summary');
db.report_moderation_summary.insert({
    created_at: new Date(),
    total_warnings: 0,
    total_mutes: 0,
    total_kicks: 0,
    total_bans: 0,
    most_active_moderator: null
});

print('MongoDB collections initialized successfully!');