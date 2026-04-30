# Backend Swap Readiness Guide

This project now supports a migration-safe backend strategy with `mock` and `api` modes.

## 1) Environment Variables

Add the following to your `.env` files:

```bash
VITE_DATA_MODE=mock
VITE_API_URL=http://localhost:8080/api/v1
VITE_REQUEST_TIMEOUT_MS=15000
VITE_AUTH_STORAGE_KEY=mcloud_auth_session
```

Use `VITE_DATA_MODE=mock` for current behavior and `VITE_DATA_MODE=api` when backend endpoints are ready.

## 2) New Service Layer

- App config: `src/services/config/appConfig.js`
- HTTP client: `src/services/http/client.js`
- Auth service: `src/services/auth/authService.js`
- Data access layer: `src/services/data/dataAccess.js`

## 3) Backward Compatibility

Existing sync getters in `src/app/server/actions.js` are preserved to avoid route breakage.

New async-safe getters are available with the `AsyncSafe` suffix (example: `getInvoiceDataAsyncSafe`).

## 4) Backend Contract (Recommended)

Auth:
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`

Data:
- `/apps/ecommerce`
- `/apps/academy`
- `/apps/logistics`
- `/apps/invoice`
- `/apps/user-list`
- `/apps/permissions`
- `/pages/profile`
- `/pages/faq`
- `/pages/pricing`
- `/pages/widget-examples`

## 5) Migration Approach

1. Keep `mock` mode in production until endpoints are validated.
2. Move each route/page to async-safe getters in phases.
3. Switch staging to `VITE_DATA_MODE=api`.
4. Validate auth + list/detail flows.
5. Switch production mode to `api`.

## 6) Why This Is Safe

- No existing callsite contract was broken.
- Auth now supports real API login while retaining fallback behavior.
- Data layer is centralized, so backend tech (Python/Java) can be changed behind stable contracts.
