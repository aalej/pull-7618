# Test for PR 7618

## Scenario

### Prod

1. Go to `src/firebase/index.js`, comment out `connectAuthEmulator`.
2. Run `npm run start`
3. Click "createUser"
   - Runs `createUserWithEmailAndPassword`
   - User `fake@email.com` is created in Auth Console
4. Click "verifyAndUpdate"
   - Runs `verifyBeforeUpdateEmail`
   - Email is sent to the new email
   - Opening the link in the email updates the email

### Emulator

1. Go to `src/firebase/index.js`, uncomment `connectAuthEmulator`.
2. Run `firebase emulators:start --project PROJECT_ID`
3. Run `npm run start`
4. Click "createUser"
   - Runs `createUserWithEmailAndPassword`
   - User is created in Auth emulator
5. Click "verifyAndUpdate"
   - Runs `verifyBeforeUpdateEmail`
   - A link is created in the terminal running the emulator
   - Opening the link in the email updates the old email
