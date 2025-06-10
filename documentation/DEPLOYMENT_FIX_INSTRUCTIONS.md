# Deployment Fix Instructions: Single Node Installation Structure

## Overview

This document provides instructions for maintaining the single `node_modules` installation and root directory structure that fixes the Vercel deployment issue. Follow these instructions when merging development branches to prevent the "Cannot find module '/var/task/dist/server/entry.mjs'" error from recurring.

## Problem Background

The original issue was caused by:
- Duplicate `node_modules` in both repository root and `personal-portfolio/` subdirectory
- Vercel confusion about which `package.json` to use as the project entry point
- Incorrect build output path expectations due to nested project structure

## Fixed Structure (MAINTAIN THIS)

```
/workspaces/Iftekhar---Personal-Portfolio/
├── package.json                 # ✅ Consolidated dependencies at root
├── astro.config.mjs            # ✅ Astro configuration at root
├── src/                        # ✅ Source files at root
├── public/                     # ✅ Public assets at root
├── node_modules/               # ✅ Single installation
├── vercel.json                 # ✅ Root-level Vercel config
├── documentation/              # ✅ Documentation at root
└── .vercel/output/             # ✅ Build output at root
    └── _functions/
        └── entry.mjs           # ✅ Correct entry point location
```

**❌ AVOID THIS STRUCTURE:**
```
/workspaces/Iftekhar---Personal-Portfolio/
├── package.json                # ❌ Minimal root package.json
├── node_modules/               # ❌ Duplicate installation
└── personal-portfolio/         # ❌ Nested project directory
    ├── package.json            # ❌ Main project package.json
    ├── astro.config.mjs        # ❌ Nested configuration
    ├── src/                    # ❌ Nested source files
    └── node_modules/           # ❌ Duplicate installation
```

## Step-by-Step Merge Instructions

### 1. Before Merging Your Development Branch

**Create a backup of the working structure:**
```bash
# Ensure you're on the fixed branch
git checkout main

# Create backup
git branch backup-working-structure
git push origin backup-working-structure
```

### 2. Merge Strategy

**Option A: Merge and Restructure (Recommended)**
```bash
# 1. Merge your development branch
git checkout main
git merge your-development-branch

# 2. Check for nested structure issues
if [ -d "personal-portfolio/" ]; then
    echo "⚠️  WARNING: Nested structure detected - restructuring required"
    
    # Move files from nested directory to root
    [ -f "personal-portfolio/astro.config.mjs" ] && mv personal-portfolio/astro.config.mjs .
    [ -d "personal-portfolio/src" ] && mv personal-portfolio/src .
    [ -d "personal-portfolio/public" ] && mv personal-portfolio/public .
    [ -f "personal-portfolio/tsconfig.json" ] && mv personal-portfolio/tsconfig.json .
    [ -f "personal-portfolio/tailwind.config.js" ] && mv personal-portfolio/tailwind.config.js .
    [ -f "personal-portfolio/postcss.config.cjs" ] && mv personal-portfolio/postcss.config.cjs .
    
    # Handle package.json merge (see section below)
    
    # Remove nested directory
    rm -rf personal-portfolio/
fi
```

**Option B: Cherry-pick Changes (For complex conflicts)**
```bash
# If merge creates too many conflicts
git log your-development-branch --oneline
git cherry-pick <commit-hash>  # Pick each relevant commit individually
```

### 3. Package.json Consolidation

**If your development branch has a nested `personal-portfolio/package.json`:**

```bash
# 1. Backup current working package.json
cp package.json package.json.working-backup

# 2. If nested package.json exists, merge manually
if [ -f "personal-portfolio/package.json" ]; then
    echo "📝 Manual package.json merge required"
    # Use the merge template below
fi
```

**Package.json Merge Template:**
```json
{
  "name": "personal-portfolio",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint:md": "markdownlint-cli documentation/**/*.md"
    // 🔄 ADD any new scripts from your development branch here
  },
  "dependencies": {
    // 🔄 MERGE: Keep all existing dependencies + add new ones from dev branch
    "@astrojs/tailwind": "^6.0.2",
    "@astrojs/vercel": "^8.1.5",
    "astro": "^5.7.5",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "resend": "^4.4.1"
    // 🔄 ADD new dependencies from development branch
  },
  "devDependencies": {
    // 🔄 MERGE: Keep all existing devDependencies + add new ones
    "@astrojs/react": "^4.2.5",
    "@tailwindcss/postcss": "^4.1.4",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "markdownlint-cli": "^0.44.0"
    // 🔄 ADD new devDependencies from development branch
  }
}
```

### 4. Critical Configuration Files Verification

**Ensure these files remain at root level:**
```bash
# ✅ Verify all critical files are at root (not in subdirectory)
ls -la astro.config.mjs     # Should exist at root
ls -la vercel.json          # Should exist at root  
ls -la package.json         # Should exist at root
ls -la tsconfig.json        # Should exist at root
ls -la tailwind.config.js   # Should exist at root

# ❌ These should NOT exist
ls -la personal-portfolio/  # Should not exist
```

**Required `astro.config.mjs` at root:**
```javascript
// astro.config.mjs (MUST be at root)
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";  // ✅ Correct import (not /serverless)
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind()],
});
```

**Required `vercel.json` at root:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".vercel/output",
  "framework": "astro"
}
```

### 5. Post-Merge Validation Process

**Run these commands to validate the fix:**
```bash
# 1. Clean installation
rm -rf node_modules package-lock.json .vercel dist
npm install

# 2. Test build (this should succeed)
npm run build

# 3. Verify correct build output structure
ls -la .vercel/output/_functions/entry.mjs  # ✅ Should exist here
ls -la dist/server/entry.mjs                # ❌ Should NOT exist here

# 4. Test development server
npm run dev
# Should start successfully without errors

# 5. Test production preview
npm run preview
```

### 6. Commit Template

**Use this commit message template:**
```bash
git add .
git commit -m "merge: integrate development branch maintaining deployment fix

- Merged changes from [development-branch-name]
- Maintained root-level project structure (no personal-portfolio/ subdirectory)  
- Consolidated package.json with new dependencies: [list new deps]
- Preserved single node_modules installation
- Verified build and deployment configuration works

Maintains fix for Vercel deployment error:
'Cannot find module /var/task/dist/server/entry.mjs'

Changes from development branch:
- [list major changes]
- [list new features]
- [list updated dependencies]"
```

## Troubleshooting Guide

### If Deployment Error Returns

**Symptoms:**
- Error: "Cannot find module '/var/task/dist/server/entry.mjs'"
- Build succeeds but deployment fails
- Vercel can't find entry point

**Diagnosis:**
```bash
# Check for problematic structure
find . -name "package.json" -type f  # Should only show ./package.json
find . -name "node_modules" -type d  # Should only show ./node_modules
ls -la personal-portfolio/           # Should not exist

# Check build output
npm run build
ls -la .vercel/output/_functions/entry.mjs  # Must exist
```

**Solution:**
1. Ensure no `personal-portfolio/` directory exists
2. Verify only one `package.json` at root
3. Check `vercel.json` has no subdirectory references
4. Rebuild: `rm -rf .vercel dist && npm run build`

### Common Merge Conflicts

**Problem: Dependencies conflict during merge**
```bash
# Solution: Use latest versions
npm install --save <package>@latest
npm audit fix
```

**Problem: Configuration files duplicated**
```bash
# Keep root versions, remove nested ones
rm -f personal-portfolio/astro.config.mjs
rm -f personal-portfolio/vercel.json
rm -f personal-portfolio/package.json
```

**Problem: Build fails after merge**
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json .astro .vercel dist
npm install
npm run build
```

## Verification Checklist

Before pushing merged changes, verify:

- [ ] ✅ No `personal-portfolio/` directory exists
- [ ] ✅ Only one `package.json` at repository root
- [ ] ✅ Only one `node_modules/` at repository root  
- [ ] ✅ `astro.config.mjs` at root with correct vercel import
- [ ] ✅ `vercel.json` at root without subdirectory paths
- [ ] ✅ `npm run build` succeeds
- [ ] ✅ `.vercel/output/_functions/entry.mjs` exists after build
- [ ] ✅ `npm run dev` starts successfully
- [ ] ✅ All development branch features work correctly

## Additional Notes

- **Always test locally** before pushing to prevent deployment failures
- **Document any new dependencies** added from development branch
- **Preserve the working structure** - this fix resolves a fundamental Vercel deployment issue
- **When in doubt**, refer back to the backup branch: `backup-working-structure`

---

**Last Updated:** June 10, 2025  
**Fix Version:** Single Node Installation Structure v1.0  
**Tested With:** Astro ^5.7.5, @astrojs/vercel ^8.1.5, Vercel Platform
