# Responsive Design Testing Procedures

## Overview
Comprehensive testing procedures for ensuring dark mode functionality works correctly across all device sizes and orientations.

---

## Device Breakpoint Matrix

| Device Category | Width Range | Examples | Testing Priority |
|----------------|-------------|----------|------------------|
| Mobile | 320px - 768px | iPhone SE, iPhone 12, Pixel 5 | High |
| Tablet | 768px - 1024px | iPad, iPad Pro, Surface | High |
| Desktop | 1024px - 1440px | Standard monitors | High |
| Large Desktop | 1440px+ | 4K monitors, ultrawide | Medium |

---

## Mobile Testing (320px - 768px)

### 1. Device-Specific Testing

#### iPhone SE (375px)
| Test ID | Feature | Expected Result | Status |
|---------|---------|-----------------|---------|
| IPSE-001 | Theme toggle visibility | Visible and accessible | ⏳ |
| IPSE-002 | Touch target size | 44x44px minimum | ⏳ |
| IPSE-003 | Theme persistence | Survives orientation change | ⏳ |
| IPSE-004 | Safe area support | Respects iPhone safe areas | ⏳ |

#### iPhone 12/13 (390px)
| Test ID | Feature | Expected Result | Status |
|---------|---------|-----------------|---------|
| IP12-001 | Theme toggle positioning | Bottom-right corner | ⏳ |
| IP12-002 | Dark mode colors | Correct dark theme applied | ⏳ |
| IP12-003 | Touch interactions | Smooth theme switching | ⏳ |

#### Android (360px - 412px)
| Test ID | Feature | Expected Result | Status |
|---------|---------|-----------------|---------|
| AND-001 | Material Design 3 | Follows MD3 guidelines | ⏳ |
| AND-002 | System navigation | Works with gesture nav | ⏳ |
| AND-003 | Dark theme sync | Syncs with system theme | ⏳ |

### 2. Mobile-Specific CSS Testing
```css
/* Mobile-first responsive design */
@media (max-width: 768px) {
  .theme-toggle {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
    z-index: 1000;
  }
  
  /* Ensure touch targets meet WCAG guidelines */
  .theme-toggle {
    min-width: 44px;
    min-height: 44px;
  }
}
```

---

## Tablet Testing (768px - 1024px)

### 1. iPad Testing
| Test ID | Feature | Expected Result | Status |
|---------|---------|-----------------|---------|
| IPAD-001 | Landscape mode | Theme toggle visible | ⏳ |
| IPAD-002 | Portrait mode | Theme toggle visible | ⏳ |
| IPAD-003 | Split screen | Theme toggle accessible | ⏳ |
| IPAD-004 | Stage Manager | Theme toggle works | ⏳ |

### 2. Android Tablet Testing
| Test ID | Feature | Expected Result | Status |
|---------|---------|-----------------|---------|
| ANDT-001 | Multi-window mode | Theme toggle accessible | ⏳ |
| ANDT-002 | Foldable devices | Adapts to screen changes | ⏳ |
| ANDT-003 | Desktop mode | Works in desktop mode | ⏳ |

### 3. Tablet CSS Testing
```css
/* Tablet responsive design */
@media (min-width: 768px) and (max-width: 1024px) {
  .theme-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 48px;
    height: 48px;
  }
}
```

---

## Desktop Testing (1024px+)

### 1. Standard Desktop (1024px - 1440px)
| Test ID | Feature | Expected Result | Status |
|---------|---------|-----------------|---------|
| DESK-001 | Hover states | Theme toggle has hover effect | ⏳ |
| DESK-002 | Keyboard navigation | Tab navigation works | ⏳ |
| DESK-003 | Window resizing | Responsive to size changes | ⏳ |

### 2. Large Desktop (1440px+)
| Test ID | Feature | Expected Result | Status |
|---------|---------|-----------------|---------|
| LD-001 | Ultra-wide support | Theme toggle positioned correctly | ⏳ |
| LD-002 | 4K resolution | Icons and text remain sharp | ⏳ |
| LD-003 | Multi-monitor | Consistent across monitors | ⏳ |

### 3. Desktop CSS Testing
```css
/* Desktop responsive design */
@media (min-width: 1024px) {
  .theme-toggle {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    width: 52px;
    height: 52px;
  }
  
  /* Hover effects for desktop */
  .theme-toggle:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease;
  }
}
```

---

## Orientation Testing

### 1. Portrait Mode Testing
| Test ID | Device | Width | Expected Result | Status |
|---------|--------|--------|-----------------|---------|
| POR-001 | iPhone | 375px | Theme toggle accessible | ⏳ |
| POR-002 | iPad | 768px | Theme toggle accessible | ⏳ |
| POR-003 | Android | 360px | Theme toggle accessible | ⏳ |

### 2. Landscape Mode Testing
| Test ID | Device | Width | Expected Result | Status |
|---------|--------|--------|-----------------|---------|
| LAN-001 | iPhone | 812px | Theme toggle accessible | ⏳ |
| LAN-002 | iPad | 1024px | Theme toggle accessible | ⏳ |
| LAN-003 | Android | 640px | Theme toggle accessible | ⏳ |

### 3. Orientation Change Testing
```javascript
// Test orientation changes
window.addEventListener('orientationchange', () => {
  // Verify theme toggle remains accessible
  const toggle = document.querySelector('[data-testid="theme-toggle"]');
  const rect = toggle.getBoundingClientRect();
  
  // Ensure toggle is within viewport
  const isVisible = rect.top >= 0 && 
                   rect.left >= 0 && 
                   rect.bottom <= window.innerHeight && 
                   rect.right <= window.innerWidth;
  
  console.log('Theme toggle visible after orientation change:', isVisible);
});
```

---

## Responsive Testing Tools

### 1. Browser DevTools
```javascript
// Chrome DevTools responsive testing
// 1. Open DevTools → Toggle device toolbar
// 2. Select device presets or custom dimensions
// 3. Test theme toggle functionality
```

### 2. Automated Responsive Testing
```javascript
// Playwright responsive testing
const { test, expect } = require('@playwright/test');

const devices = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPad', width: 768, height: 1024 },
  { name: 'Desktop', width: 1440, height: 900 }
];

devices.forEach(device => {
  test(`responsive theme toggle on ${device.name}`, async ({ page }) => {
    await page.setViewportSize({ width: device.width, height: device.height });
    await page.goto('/');
    
    const toggle = page.locator('[data-testid="theme-toggle"]');
    await expect(toggle).toBeVisible();
    await expect(toggle).toBeInViewport();
  });
});
```

---

## Touch Target Testing

### 1. WCAG 2.1 Guidelines
| Guideline | Requirement | Test Method |
|-----------|-------------|-------------|
| Target size | 44x44px minimum | Measure with DevTools |
| Target spacing | 8px minimum | Visual inspection |
| Touch accuracy | Centered on target | Manual testing |

### 2. Touch Target Validation
```css
/* Ensure touch targets meet WCAG guidelines */
.theme-toggle {
  /* Minimum 44x44px for mobile */
  min-width: 44px;
  min-height: 44px;
  
  /* Ensure adequate spacing */
  margin: 8px;
  
  /* Increase size on larger screens */
  @media (min-width: 768px) {
    min-width: 48px;
    min-height: 48px;
  }
}
```

---

## Responsive Design Testing Checklist

### 1. Mobile Testing Checklist
- [ ] Theme toggle visible on 320px width
- [ ] Theme toggle visible on 375px width
- [ ] Theme toggle visible on 414px width
- [ ] Touch target meets 44x44px requirement
- [ ] Theme persists on orientation change
- [ ] Safe area respected on iPhone X+
- [ ] Works with system navigation gestures

### 2. Tablet Testing Checklist
- [ ] Theme toggle visible in portrait mode
- [ ] Theme toggle visible in landscape mode
- [ ] Works in split-screen mode
- [ ] Works with external keyboard
- [ ] Adapts to foldable devices
- [ ] Works with stylus input

### 3. Desktop Testing Checklist
- [ ] Theme toggle visible at all resolutions
- [ ] Hover states work correctly
- [ ] Keyboard navigation functional
- [ ] Window resizing handled gracefully
- [ ] Multi-monitor support verified
- [ ] High DPI displays supported

---

## Responsive Testing Automation

### 1. Visual Regression Testing
```javascript
// Percy configuration
const { percySnapshot } = require('@percy/playwright');

test('responsive dark mode', async ({ page }) => {
  const viewports = [
    { width: 375, height: 667 },  // iPhone
    { width: 768, height: 1024 }, // iPad
    { width: 1440, height: 900 }  // Desktop
  ];
  
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    
    // Test light mode
    await percySnapshot(`light-mode-${viewport.width}x${viewport.height}`);
    
    // Test dark mode
    await page.click('[data-testid="theme-toggle"]');
    await percySnapshot(`dark-mode-${viewport.width}x${viewport.height}`);
  }
});
```

### 2. Responsive Test Commands
```bash
# Run responsive tests
npm run test:responsive

# Test specific devices
npm run test:mobile
npm run test:tablet
npm run test:desktop

# Generate responsive report
npm run test:responsive-report
```

---

## Performance Testing Across Devices

### 1. Mobile Performance
| Metric | Target | iPhone SE | iPhone 12 | Android | Status |
|--------|--------|-----------|-----------|---------|---------|
| Theme switch time | <100ms | ⏳ | ⏳ | ⏳ | ⏳ |
| Paint time | <16ms | ⏳ | ⏳ | ⏳ | ⏳ |
| Memory usage | <1MB | ⏳ | ⏳ | ⏳ | ⏳ |

### 2. Tablet Performance
| Metric | Target | iPad | Surface | Status |
|--------|--------|------|---------|---------|
| Theme switch time | <100ms | ⏳ | ⏳ | ⏳ |
| Paint time | <16ms | ⏳ | ⏳ | ⏳ |
| Memory usage | <1MB | ⏳ | ⏳ | ⏳ |

### 3. Desktop Performance
| Metric | Target | Standard | 4K | Status |
|--------|--------|----------|-----|---------|
| Theme switch time | <100ms | ⏳ | ⏳ | ⏳ |
| Paint time | <16ms | ⏳ | ⏳ | ⏳ |
| Memory usage | <1MB | ⏳ | ⏳ | ⏳ |

---

## Responsive Design Debugging

### 1. Common Issues
| Issue | Cause | Solution |
|--------|--------|----------|
| Theme toggle hidden | z-index too low | Increase z-index |
| Touch target too small | CSS not responsive | Use min-width/height |
| Orientation issues | Missing viewport meta | Add viewport tag |
| Performance issues | Too many repaints | Optimize CSS |

### 2. Debugging Tools
```javascript
// Responsive debugging
const debugResponsive = () => {
  console.log('Viewport:', {
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: screen.orientation?.angle || 0
  });
  
  const toggle = document.querySelector('[data-testid="theme-toggle"]');
  if (toggle) {
    const rect = toggle.getBoundingClientRect();
    console.log('Toggle position:', {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
  }
};
```

---

## Continuous Integration

### 1. Responsive Testing Workflow
```yaml
name: Responsive Testing
on: [push, pull_request]
jobs:
  responsive-test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        viewport: [
          { width: 375, height: 667 },
          { width: 768, height: 1024 },
          { width: 1440, height: 900 }
        ]
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
      - name: Install dependencies
        run: npm ci
      - name: Run responsive tests
        run: npm run test:responsive
```

---

## Test Results Template

### Responsive Design Test Report
**Date**: [Current Date]  
**Tester**: [Name]  
**Test Environment**: [Local/CI/BrowserStack]

#### Device Test Results
| Device | Width | Height | Orientation | Status | Issues |
|--------|--------|--------|-------------