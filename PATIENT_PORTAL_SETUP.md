# Patient Portal Setup Guide

## Overview
The Patient Portal is a comprehensive dashboard that allows patients to:
- View their treatment progress and appointments
- Access medical records and treatment history
- Submit forms and view submissions
- Manage their profile information
- Track daily vitals and treatment milestones

## Features

### 🏠 Dashboard Tab
- Welcome message with patient name
- Treatment status overview
- Next appointment information
- Total scheduled sessions
- Recent activity summary

### 📅 Appointments Tab
- View all scheduled therapy sessions
- Session details including phase, duration, and date
- Treatment progress tracking
- Calendar integration

### 📈 Treatment Progress Tab
- Latest daily vitals display
- Pain level tracking (0-10 scale)
- Heart rate, blood pressure, temperature
- Treatment phase progress bar
- Milestone tracking

### 📋 Medical Records Tab
- Current condition information
- Treatment start date
- Last updated information
- Emergency contact details
- Medical history summary

### 📝 Submissions Tab
- View all form submissions
- Submission history with dates
- Form type and status tracking
- Notes and responses

### 👤 Profile Tab
- Personal information management
- Contact details
- Account information
- Patient ID display

## Technical Implementation

### Firebase Integration
- **Authentication**: Firebase Auth for user login/registration
- **Database**: Firestore for patient data storage
- **Real-time**: Live updates for appointments and progress

### Data Structure
The portal integrates with your existing Firestore collections:
- `patients` - Main patient documents
- `submissions` - Form submissions
- `appointments` - Scheduled sessions
- `therapy_sessions` - Treatment records

### Security
- Firebase Authentication for secure access
- Role-based access control
- Data encryption in transit
- Secure API endpoints

## Setup Instructions

### 1. Firebase Configuration
1. Go to your Firebase Console
2. Select your project
3. Go to Project Settings > General
4. Copy your Firebase configuration
5. Create a `.env.local` file with:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2. Install Dependencies
```bash
npm install firebase
```

### 3. Firebase Authentication Setup
1. Go to Authentication > Sign-in method
2. Enable Email/Password authentication
3. Configure any additional providers if needed

### 4. Firestore Security Rules
Update your Firestore rules to allow patient access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow patients to read their own data
    match /patients/{patientId} {
      allow read, write: if request.auth != null && request.auth.uid == patientId;
    }
    
    // Allow patients to read their own submissions
    match /submissions/{submissionId} {
      allow read: if request.auth != null && 
        resource.data.patientId == request.auth.uid;
    }
  }
}
```

### 5. Patient Data Structure
Ensure your patient documents in Firestore include these fields:

```javascript
{
  name: "Patient Name",
  email: "patient@example.com",
  phone: "+1234567890",
  dateOfBirth: "1990-01-01",
  gender: "Male/Female/Other",
  address: "Patient Address",
  emergencyContact: {
    name: "Emergency Contact Name",
    phone: "+1234567890",
    relationship: "Relationship"
  },
  medicalHistory: {},
  currentCondition: "Current condition description",
  treatmentPhase: "Phase 1",
  nextAppointment: "2024-01-01T10:00:00Z",
  dailyVitals: {},
  scheduledSessions: [],
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z"
}
```

## Usage

### For Patients
1. Navigate to `/patient-portal/login`
2. Create an account or sign in
3. Access the dashboard with slideable tabs
4. View appointments, progress, and records
5. Submit forms and track submissions

### For Administrators
1. Patient data is automatically synced with Firestore
2. Real-time updates across all tabs
3. Secure access control
4. Comprehensive audit trail

## Customization

### Styling
- Uses Tailwind CSS for consistent styling
- VitalPhysio⁺ brand colors
- Responsive design for mobile/desktop
- Framer Motion animations

### Adding New Tabs
1. Add tab to `tabs` array in `page.tsx`
2. Create corresponding component
3. Add tab content in the main component

### Data Integration
- Modify `fetchPatientData` function for additional data
- Update interfaces for new data structures
- Add new Firestore queries as needed

## Security Considerations

1. **Authentication**: All routes are protected
2. **Data Access**: Patients can only access their own data
3. **Input Validation**: All forms include validation
4. **Error Handling**: Comprehensive error handling
5. **Session Management**: Automatic logout on inactivity

## Troubleshooting

### Common Issues
1. **Firebase not initialized**: Check environment variables
2. **Authentication errors**: Verify Firebase Auth setup
3. **Data not loading**: Check Firestore rules and data structure
4. **Build errors**: Ensure all dependencies are installed

### Support
For technical support or customization requests, contact the development team.

## Future Enhancements

- Real-time notifications
- Mobile app integration
- Telehealth features
- Advanced analytics
- AI-powered insights
- Wearable device integration
