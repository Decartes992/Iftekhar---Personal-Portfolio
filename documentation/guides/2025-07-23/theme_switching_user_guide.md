# Theme Switching User Guide

## Overview
This guide provides comprehensive instructions for using the theme switching feature in the portfolio, including manual switching, system preference detection, and troubleshooting common issues.

---

## Quick Start

### How to Switch Themes
1. **Look for the theme toggle** in the top-right corner of the page
2. **Click the icon** to switch between light and dark modes
3. **Your preference is automatically saved** for future visits

### Visual Indicators
- **☀️ Sun icon** = Currently in light mode
- **🌙 Moon icon** = Currently in dark mode

---

## Theme Switching Methods

### 1. Manual Theme Switching

#### Desktop/Laptop
- **Click the theme toggle** in the top-right corner
- **Keyboard shortcut**: Press `Ctrl/Cmd + Shift + L` (if enabled)
- **Menu option**: Available in settings menu (if implemented)

#### Mobile/Tablet
- **Tap the theme toggle** in the top-right corner
- **Swipe gesture**: Swipe down from top-right (if enabled)
- **Settings menu**: Available in mobile menu

#### Touch Devices
- **Long press**: Long press on theme toggle for options
- **Double-tap**: Quick double-tap to cycle themes
- **Haptic feedback**: Subtle vibration on theme change

### 2. System Preference Detection

#### Automatic Detection
The portfolio automatically detects your system theme preference:
- **macOS**: System Preferences > General > Appearance
- **Windows**: Settings > Personalization > Colors
- **iOS**: Settings > Display & Brightness
- **Android**: Settings > Display > Dark theme

#### Override System Preference
To override system preference:
1. **Manually switch themes** using the toggle
2. **Your manual choice takes precedence**
3. **Clear preference** to restore system detection

### 3. Browser-Based Detection

#### Supported Browsers
| Browser | Version | Support | Notes |
|---------|---------|---------|--------|
| Chrome | 76+ | ✅ Full | `prefers-color-scheme` |
| Firefox | 67+ | ✅ Full | `prefers-color-scheme` |
| Safari | 12.1+ | ✅ Full | `prefers-color-scheme` |
| Edge | 79+ | ✅ Full | `prefers-color-scheme` |

#### Browser Settings
- **Chrome**: Settings > Appearance > Theme
- **Firefox**: Settings > General > Language and Appearance
- **Safari**: System Preferences > General > Appearance

---

## Theme Preferences

### 1. Saving Your Preference

#### How Preferences Are Saved
- **LocalStorage**: Saved in your browser's local storage
- **No account required**: Works without user accounts
- **Per-browser**: Settings apply to current browser only
- **Persistent**: Remembers preference across sessions

#### Clearing Preferences
To reset to system default:
1. **Clear browser data** for this site
2. **Use incognito/private mode** (no preferences saved)
3. **Manual reset**: Click toggle 3 times quickly

### 2. Multiple Device Synchronization

#### Current Limitations
- **No cloud sync**: Preferences stored locally only
- **Per-device**: Each device/browser has separate settings
- **No account linking**: Cannot sync across devices

#### Workarounds
- **Manual setup**: Set preference on each device
- **Browser sync**: Use browser's built-in sync (Chrome, Firefox)
- **Export/Import**: Manual preference export (future feature)

---

## Accessibility Features

### 1. Keyboard Navigation

#### Keyboard Shortcuts
| Shortcut | Action | Notes |
|----------|--------|--------|
| `Tab` | Navigate to theme toggle | Focus indicator visible |
| `Space` or `Enter` | Activate theme toggle | When focused |
| `Esc` | Close any open menus | Return focus to toggle |

#### Screen Reader Support
- **Aria-label**: "Switch to dark mode" / "Switch to light mode"
- **Live region**: Announces theme changes
- **Focus management**: Logical tab order

### 2. High Contrast Mode

#### Windows High Contrast
- **Automatic detection**: Respects Windows high contrast settings
- **Forced colors**: Adapts to system high contrast theme
- **Focus indicators**: Enhanced for visibility

#### macOS Increase Contrast
- **System integration**: Respects macOS accessibility settings
- **Enhanced borders**: Improved visibility in dark mode
- **Focus rings**: High contrast focus indicators

### 3. Reduced Motion

#### Motion Preferences
- **Respects system setting**: Honors `prefers-reduced-motion`
- **Subtle animations**: Reduced motion when enabled
- **Instant transitions**: No animations for accessibility

---

## Troubleshooting

### 1. Common Issues

#### Theme Toggle Not Working
**Symptoms**: Clicking toggle has no effect
**Solutions**:
1. **Refresh the page** (F5 or Ctrl/Cmd + R)
2. **Clear browser cache** (Ctrl/Cmd + Shift + Delete)
3. **Check JavaScript**: Ensure JavaScript is enabled
4. **Try different browser** to isolate issue

#### Theme Not Saving
**Symptoms**: Theme resets on page reload
**Solutions**:
1. **Check localStorage**: Browser settings may block storage
2. **Incognito mode**: Settings don't persist in private mode
3. **Browser extensions**: Disable ad blockers temporarily
4. **Privacy settings**: Allow local storage for this site

#### Wrong Theme Displayed
**Symptoms**: Shows light when should be dark (or vice versa)
**Solutions**:
1. **Check system preference**: Verify OS theme setting
2. **Clear manual override**: Reset to system default
3. **Browser cache**: Clear cached theme preference
4. **Multiple browsers**: Check if issue is browser-specific

### 2. Browser-Specific Issues

#### Chrome/Edge
**Issues**:
- **Extension conflicts**: Dark mode extensions may interfere
- **Profile sync**: Chrome sync may override local settings
- **Flags**: Experimental features may affect rendering

**Solutions**:
- Disable dark mode extensions
- Check Chrome sync settings
- Reset Chrome flags to default

#### Firefox
**Issues**:
- **Add-on conflicts**: Theme-related add-ons may interfere
- **Privacy settings**: Enhanced tracking protection may block storage
- **Container tabs**: May not persist settings across containers

**Solutions**:
- Disable conflicting add-ons
- Adjust privacy settings for this site
- Use default container for consistent experience

#### Safari
**Issues**:
- **Intelligent Tracking Prevention**: May block localStorage
- **Private browsing**: Settings don't persist
- **Older versions**: Limited CSS variable support

**Solutions**:
- Adjust website settings in Privacy preferences
- Avoid private browsing for persistent settings
- Update to latest Safari version

---

## Advanced Features

### 1. Developer Options

#### Debugging Theme Issues
To debug theme-related issues:
1. **Open browser console** (F12)
2. **Check for errors** related to themeManager.js
3. **Verify localStorage** values:
   ```javascript
   console.log(localStorage.getItem('theme'));
   ```
4. **Test CSS variables**:
   ```javascript
   getComputedStyle(document.documentElement)
     .getPropertyValue('--clr-primary');
   ```

#### Theme API
For developers integrating with the theme system:
```javascript
// Get current theme
const currentTheme = document.documentElement.getAttribute('data-theme');

// Set theme programmatically
document.documentElement.setAttribute('data-theme', 'dark');

// Listen for theme changes
window.addEventListener('theme-change', (event) => {
  console.log('Theme changed to:', event.detail.theme);
});
```

### 2. Customization

#### CSS Custom Properties
All theme colors are defined as CSS custom properties:
```css
:root {
  --clr-primary: #3B82F6;        /* Primary color */
  --clr-bg-base: #F9FAFB;        /* Background color */
  --clr-text-base: #1F2937;      /* Text color */
}

[data-theme="dark"] {
  --clr-primary: #60A5FA;        /* Dark primary color */
  --clr-bg-base: #111827;        /* Dark background */
  --clr-text-base: #F9FAFB;      /* Dark text color */
}
```

#### Extending Themes
To add custom theme properties:
1. **Add variables** to global.css
2. **Define light mode values** in `:root`
3. **Define dark mode values** in `[data-theme="dark"]`
4. **Use in components** with `var(--your-variable)`

---

## Best Practices

### 1. For Users
- **Test both themes** to ensure readability
- **Report accessibility issues** if encountered
- **Use system preference** when possible for battery savings
- **Clear cache** periodically to ensure latest features

### 2. For Developers
- **Always test** in both light and dark modes
- **Verify color contrast** meets WCAG 2.1 AA standards
- **Use CSS variables** for all themeable colors
- **Test on multiple devices** and browsers
- **Consider reduced motion** preferences

---

## Privacy and Security

### Data Storage
- **No personal data collected**: Theme preference is stored locally
- **No tracking**: No analytics on theme usage
- **No cookies**: Uses localStorage instead of cookies
- **No server communication**: All settings stored client-side

### Data Management
- **Automatic cleanup**: Browser handles storage cleanup
- **Manual deletion**: Users can clear site data anytime
- **Export capability**: Future feature for backup (planned)

---

## Feedback and Support

### Reporting Issues
If you encounter issues with theme switching:
1. **Check this guide** for known solutions
2. **Try troubleshooting steps** in the section above
3. **Report on GitHub** with browser/OS details
4. **Include console errors** if available

### Feature Requests
For new theme-related features:
1. **Check existing issues** on GitHub
2. **Submit feature request** with use case
3. **Participate in discussions** about theme improvements

---

## Version History

### Current Version
- **Version**: 1.0
- **Date**: July 25, 2025
- **Features**: Initial release with full theme switching

### Planned Updates
- **Version 1.1**: Keyboard shortcuts, theme scheduling
- **Version 1.2**: Custom theme colors, export/import
- **Version 1.3**: System preference scheduling, auto-detection improvements

---

## Related Documentation
- [Style Guide](STYLE_GUIDE.md) - Design system and color palette
- [Dark Mode Features](../../features/2025-07-23/dark_mode_features.md) - Technical implementation details
- [Accessibility Report](../../reports/2025-07-23/dark_mode_accessibility_report.md) - Compliance status and testing

**Document Version**: 1.0  
**Last Updated**: July 25, 2025  
**Next Review**: August 1, 2025