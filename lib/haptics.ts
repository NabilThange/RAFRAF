/**
 * Utility to provide haptic feedback via the Vibration API
 * @param pattern - A single number for a short buzz or an array of numbers for a pattern
 */
export const hapticFeedback = (pattern: number | number[] = 5) => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        try {
            navigator.vibrate(pattern);
        } catch (e) {
            // Ignore vibration errors as it's a non-critical enhancement
        }
    }
};

/**
 * Common vibration patterns for premium feel
 */
export const HAPTIC_PATTERNS = {
    SUBTLE: 5,
    LIGHT: 10,
    MEDIUM: 20,
    SUCCESS: [10, 50, 10],
    WARNING: [50, 50, 50],
};
