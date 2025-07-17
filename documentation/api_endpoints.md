# API Endpoints Documentation

## Overview

This document provides comprehensive documentation for the server-side API functionality in the Astro personal portfolio project. The API is implemented using Astro's serverless functions with Vercel deployment, focusing on contact form handling and email integration.

## API Endpoint: Contact Form

### Endpoint Details

- **URL**: `/api/contact`
- **Method**: `POST`
- **Type**: Serverless Function (Astro API Route)
- **File Location**: [`src/pages/api/contact.ts`](src/pages/api/contact.ts:1)

### Request Structure

#### Content Types Supported
- `application/x-www-form-urlencoded` (via FormData)
- `application/json` (via JSON payload)

#### Required Fields
| Field | Type | Validation | Description |
|-------|------|------------|-------------|
| `name` | string | Required, min 1 char | Full name of the sender |
| `email` | string | Required, valid email format | Contact email address |
| `subject` | string | Required | Message subject/topic |
| `message` | string | Required, min 1 char | Message content |

#### Request Examples

**FormData Submission (from ContactForm.astro)**:
```javascript
const formData = new FormData();
formData.append('name', 'John Doe');
formData.append('email', 'john@example.com');
formData.append('subject', 'Project Inquiry');
formData.append('message', 'I would like to discuss...');

fetch('/api/contact', {
  method: 'POST',
  body: formData
});
```

**JSON Submission (from ContactForm.jsx)**:
```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Project Inquiry',
    message: 'I would like to discuss...'
  })
});
```

### Response Structure

#### Success Response (200 OK)
```json
{
  "message": "Message sent successfully!"
}
```

#### Error Responses

**Validation Error (400 Bad Request)**:
```json
{
  "message": "All fields are required."
}
```

**Invalid Email (400 Bad Request)**:
```json
{
  "message": "Invalid email format."
}
```

**Server Error (500 Internal Server Error)**:
```json
{
  "message": "Failed to send message.",
  "error": "Resend API error details"
}
```

## Security Analysis

### Current Security Measures

1. **Input Validation**: Basic server-side validation for required fields and email format
2. **CORS Protection**: Handled by Astro/Vercel serverless environment
3. **Rate Limiting**: Not currently implemented

### Security Vulnerabilities Identified

#### 🔴 Critical Issues

1. **Missing Rate Limiting**
   - **Risk**: Vulnerable to spam and DoS attacks
   - **Impact**: Could exhaust email sending quota
   - **Location**: [`src/pages/api/contact.ts:6`](src/pages/api/contact.ts:6)

2. **No CSRF Protection**
   - **Risk**: Cross-site request forgery attacks
   - **Impact**: Malicious sites could submit forms on behalf of users
   - **Location**: [`src/pages/api/contact.ts:6`](src/pages/api/contact.ts:6)

3. **Missing Input Sanitization**
   - **Risk**: XSS attacks through form fields
   - **Impact**: Malicious scripts could be injected into email content
   - **Location**: [`src/pages/api/contact.ts:37`](src/pages/api/contact.ts:37)

#### 🟡 Moderate Issues

4. **Email Content Injection**
   - **Risk**: HTML injection in email body
   - **Impact**: Could break email formatting or inject malicious content
   - **Location**: [`src/pages/api/contact.ts:37`](src/pages/api/contact.ts:37)

5. **Missing Environment Variable Validation**
   - **Risk**: Runtime errors if RESEND_API_KEY is missing
   - **Impact**: API endpoint will fail silently
   - **Location**: [`src/pages/api/contact.ts:4`](src/pages/api/contact.ts:4)

#### 🟢 Low Priority Issues

6. **No Logging Infrastructure**
   - **Risk**: Difficult to debug issues in production
   - **Impact**: Limited observability
   - **Location**: [`src/pages/api/contact.ts:47`](src/pages/api/contact.ts:47)

## Performance Analysis

### Current Performance Characteristics

- **Cold Start Time**: ~50-200ms (typical for Vercel serverless)
- **Execution Time**: ~100-500ms (depends on Resend API response)
- **Memory Usage**: ~128MB (default Vercel allocation)

### Performance Bottlenecks

1. **Synchronous Email Sending**
   - **Issue**: Blocks response until email is sent
   - **Impact**: Slow response times during Resend API delays
   - **Location**: [`src/pages/api/contact.ts:33`](src/pages/api/contact.ts:33)

2. **No Caching Strategy**
   - **Issue**: Every request hits the email API
   - **Impact**: Unnecessary API calls for duplicate submissions
   - **Location**: [`src/pages/api/contact.ts:33`](src/pages/api/contact.ts:33)

## Error Handling Analysis

### Current Error Handling

- **Validation Errors**: Proper 400 responses with descriptive messages
- **API Errors**: 500 responses with error details (potential information leakage)
- **Missing Fields**: Individual validation for each required field

### Error Handling Gaps

1. **No Retry Logic**: Failed email sends are not retried
2. **Verbose Error Messages**: Exposing internal API errors to clients
3. **No Fallback Mechanism**: Complete failure if Resend is unavailable

## Production Readiness Checklist

### Security Requirements

- [ ] **Rate Limiting**: Implement rate limiting (e.g., 5 requests per minute per IP)
- [ ] **CSRF Protection**: Add CSRF tokens or referer validation
- [ ] **Input Sanitization**: Sanitize all user inputs before processing
- [ ] **Environment Validation**: Validate required environment variables at startup
- [ ] **HTTPS Enforcement**: Ensure all requests use HTTPS
- [ ] **Content Security Policy**: Implement CSP headers

### Performance Optimizations

- [ ] **Async Processing**: Queue email sending for background processing
- [ ] **Caching**: Implement request deduplication
- [ ] **Connection Pooling**: Reuse HTTP connections to Resend API
- [ ] **Response Compression**: Enable gzip compression for responses

### Monitoring & Observability

- [ ] **Structured Logging**: Add comprehensive logging with levels
- [ ] **Metrics Collection**: Track request rates, error rates, and response times
- [ ] **Alerting**: Set up alerts for high error rates or downtime
- [ ] **Health Checks**: Implement health check endpoint

### Testing Strategy

#### Unit Tests
```typescript
// Example test structure
describe('Contact API', () => {
  it('should validate required fields', async () => {
    // Test missing fields
  });
  
  it('should validate email format', async () => {
    // Test invalid email formats
  });
  
  it('should handle Resend API errors', async () => {
    // Test error scenarios
  });
});
```

#### Integration Tests
```typescript
// Test complete flow
describe('Contact Form Integration', () => {
  it('should submit form successfully', async () => {
    // Test end-to-end submission
  });
  
  it('should handle rate limiting', async () => {
    // Test rate limit enforcement
  });
});
```

#### Security Tests
```typescript
// Security-focused tests
describe('Security Tests', () => {
  it('should prevent XSS attacks', async () => {
    // Test script injection
  });
  
  it('should enforce rate limits', async () => {
    // Test DoS protection
  });
});
```

## Recommended Improvements

### Immediate Actions (High Priority)

1. **Add Rate Limiting**
   ```typescript
   import { rateLimit } from '@vercel/edge-config';
   
   const limiter = rateLimit({
     interval: '1m',
     limit: 5,
   });
   ```

2. **Input Sanitization**
   ```typescript
   import DOMPurify from 'isomorphic-dompurify';
   
   const sanitizedMessage = DOMPurify.sanitize(message);
   ```

3. **Environment Validation**
   ```typescript
   if (!import.meta.env.RESEND_API_KEY) {
     throw new Error('RESEND_API_KEY is required');
   }
   ```

### Medium-term Improvements

4. **Queue Implementation**
   ```typescript
   // Use Vercel Background Functions
   export const config = {
     runtime: 'edge',
   };
   ```

5. **Enhanced Error Handling**
   ```typescript
   // Custom error classes
   class ValidationError extends Error {
     constructor(message: string, public field: string) {
       super(message);
     }
   }
   ```

### Long-term Enhancements

6. **Monitoring Dashboard**
   - Set up Vercel Analytics
   - Implement custom metrics
   - Create admin dashboard for form submissions

7. **Advanced Features**
   - File upload support
   - Multiple recipient routing
   - Auto-responder functionality
   - Form analytics

## Deployment Considerations

### Environment Variables

```bash
# Required
RESEND_API_KEY=your_resend_api_key

# Optional
FROM_EMAIL=your-verified@domain.com
TO_EMAIL=your-recipient@domain.com
RATE_LIMIT_ENABLED=true
LOG_LEVEL=info
```

### Vercel Configuration

```json
{
  "functions": {
    "src/pages/api/contact.ts": {
      "maxDuration": 10
    }
  }
}
```

### DNS Configuration

- Ensure proper SPF/DKIM records for email domain
- Configure DMARC policy
- Set up proper reverse DNS

## Testing Examples

### Manual Testing Commands

```bash
# Test successful submission
curl -X POST https://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}'

# Test validation error
curl -X POST https://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"invalid-email","message":"Hello"}'

# Test rate limiting
for i in {1..10}; do
  curl -X POST https://yourdomain.com/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}'
done
```

## Integration Points

### Frontend Components

1. **ContactForm.astro**: Uses FormData submission
2. **ContactForm.jsx**: Uses JSON submission with enhanced UX

### Third-party Services

1. **Resend**: Email delivery service
2. **Vercel**: Serverless hosting platform
3. **Netlify Forms**: Alternative form handling (currently unused)

## Maintenance Schedule

### Weekly
- [ ] Review error logs
- [ ] Check email delivery rates
- [ ] Monitor spam complaints

### Monthly
- [ ] Update dependencies
- [ ] Review security advisories
- [ ] Test backup email configuration

### Quarterly
- [ ] Security audit
- [ ] Performance review
- [ ] Update documentation

---

**Next Steps**: Implement the security improvements outlined in the "Immediate Actions" section before deploying to production. Consider setting up monitoring and alerting before launch.