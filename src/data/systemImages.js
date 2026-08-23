// A picture for each SmartVent system, keyed by the system name the app's
// sizing table uses — that's what the calculator gets back with a match, so
// it can show what it just recommended.
export const SYSTEM_IMAGES = {
  'SmartVent Lite+': '/images/positive-pressure/lite-4-room.webp',
  'SmartVent Positive3': '/images/positive-pressure/positive3-4-room.webp',
  'SmartVent Positive Advance': '/images/positive-pressure/advance-4-room.webp',
  'SmartVent Synergy 3': '/images/balanced-pressure/synergy3-house.webp',
  'SmartVent Balance': '/images/balanced-pressure/balance-house.webp',
}

export const systemImage = system => SYSTEM_IMAGES[system] || null
