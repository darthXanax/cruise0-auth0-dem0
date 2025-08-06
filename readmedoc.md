# Cruise0 Auth Demo

## Setup

1. Clone this repo
2. Run `npm install`
3. Update `src/index.js` with your Auth0 domain and client ID
4. Run `npm start`

## What it demonstrates

- Email/password and Google social login
- Email verification requirement
- Country detection from IP address
- Custom branding for Cruise0
- Blocks disposable email addresses
- Different MFA rules for social vs database users

## Auth0 Actions used

- Add Country Info (Post-Login)
- Check Email Verified (Post-Login)
- Block Disposable Emails (Pre-Registration)
- Database User MFA (Post-Login)
