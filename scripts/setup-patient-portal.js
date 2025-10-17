#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Patient Portal for VitalPhysio⁺...\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');
  
  const envContent = `# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# EmailJS Configuration (if needed)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created');
} else {
  console.log('✅ .env.local file already exists');
}

// Check if Firebase is installed
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

if (!packageJson.dependencies.firebase) {
  console.log('📦 Installing Firebase...');
  console.log('Run: npm install firebase');
} else {
  console.log('✅ Firebase is already installed');
}

console.log('\n🎉 Patient Portal setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Update your .env.local file with your Firebase configuration');
console.log('2. Run: npm install firebase (if not already installed)');
console.log('3. Set up Firebase Authentication in your Firebase Console');
console.log('4. Configure Firestore security rules (see PATIENT_PORTAL_SETUP.md)');
console.log('5. Start your development server: npm run dev');
console.log('6. Navigate to /patient-portal to test the portal');

console.log('\n📚 For detailed setup instructions, see PATIENT_PORTAL_SETUP.md');
