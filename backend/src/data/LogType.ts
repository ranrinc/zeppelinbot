export enum LogType {
  MEMBER_WARN = 1,
  MEMBER_MUTE,
  MEMBER_UNMUTE,
  MEMBER_MUTE_EXPIRED,
  MEMBER_KICK,
  MEMBER_BAN,
  MEMBER_UNBAN,
  MEMBER_FORCEBAN,
  MEMBER_SOFTBAN,
  MEMBER_JOIN,
  MEMBER_LEAVE,
  MEMBER_ROLE_ADD,
  MEMBER_ROLE_REMOVE,
  MEMBER_NICK_CHANGE,
  MEMBER_USERNAME_CHANGE,
  MEMBER_RESTORE,

  CHANNEL_CREATE,
  CHANNEL_DELETE,
  CHANNEL_UPDATE,

  THREAD_CREATE,
  THREAD_DELETE,
  THREAD_UPDATE,

  ROLE_CREATE,
  ROLE_DELETE,
  ROLE_UPDATE,

  MESSAGE_EDIT,
  MESSAGE_DELETE,
  MESSAGE_DELETE_BULK,
  MESSAGE_DELETE_BARE,

  VOICE_CHANNEL_JOIN,
  VOICE_CHANNEL_LEAVE,
  VOICE_CHANNEL_MOVE,

  STAGE_INSTANCE_CREATE,
  STAGE_INSTANCE_DELETE,
  STAGE_INSTANCE_UPDATE,

  EMOJI_CREATE,
  EMOJI_DELETE,
  EMOJI_UPDATE,

  STICKER_CREATE,
  STICKER_DELETE,
  STICKER_UPDATE,

  COMMAND,

  MESSAGE_SPAM_DETECTED,
  CENSOR,
  CLEAN,

  CASE_CREATE,

  MASSUNBAN,
  MASSBAN,
  MASSMUTE,

  MEMBER_TIMED_MUTE,
  MEMBER_TIMED_UNMUTE,
  MEMBER_TIMED_BAN,
  MEMBER_TIMED_UNBAN,

  MEMBER_JOIN_WITH_PRIOR_RECORDS,
  OTHER_SPAM_DETECTED,

  MEMBER_ROLE_CHANGES,
  VOICE_CHANNEL_FORCE_MOVE,
  VOICE_CHANNEL_FORCE_DISCONNECT,

  CASE_UPDATE,

  MEMBER_MUTE_REJOIN,

  SCHEDULED_MESSAGE,
  POSTED_SCHEDULED_MESSAGE,

  BOT_ALERT,
  AUTOMOD_ACTION,

  SCHEDULED_REPEATED_MESSAGE,
  REPEATED_MESSAGE,

  MESSAGE_DELETE_AUTO,

  SET_ANTIRAID_USER,
  SET_ANTIRAID_AUTO,

  MASS_ASSIGN_ROLES,
  MASS_UNASSIGN_ROLES,

  MEMBER_NOTE,

  CASE_DELETE,

  DM_FAILED,
}