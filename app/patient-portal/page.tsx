'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import Image from 'next/image';

interface PatientData {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  emergencyContact: any;
  medicalHistory: any;
  currentCondition: string;
  treatmentPhase: string;
  nextAppointment: any;
  dailyVitals: any;
  scheduledSessions: any[];
  submissions: any[];
  createdAt: any;
  updatedAt: any;
}

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'appointments', label: 'Appointments', icon: '📅' },
  { id: 'progress', label: 'Treatment Progress', icon: '📈' },
  { id: 'records', label: 'Medical Records', icon: '📋' },
  { id: 'submissions', label: 'Submissions', icon: '📝' },
  { id: 'profile', label: 'Profile', icon: '👤' }
];

export default function PatientPortal() {
  const [user, setUser] = useState<any>(null);
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [submissions, setSubmissions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchPatientData(user.uid);
        await fetchSubmissions(user.uid);
      } else {
        router.push('/patient-portal/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const fetchPatientData = async (uid: string) => {
    try {
      const patientDoc = await getDoc(doc(db, 'patients', uid));
      if (patientDoc.exists()) {
        setPatientData({ id: patientDoc.id, ...patientDoc.data() } as PatientData);
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const fetchSubmissions = async (uid: string) => {
    try {
      const submissionsQuery = query(
        collection(db, 'submissions'),
        where('patientId', '==', uid),
        orderBy('createdAt', 'desc')
      );
      const submissionsSnapshot = await getDocs(submissionsQuery);
      const submissionsData = submissionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSubmissions(submissionsData);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/patient-portal/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your portal...</p>
        </div>
      </div>
    );
  }

  if (!user || !patientData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You need to be logged in to access the patient portal.</p>
          <button
            onClick={() => router.push('/patient-portal/login')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="VitalPhysio⁺ Logo"
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <h1 className="text-xl font-semibold text-gray-900">Patient Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {patientData.name || 'Patient'}</span>
              <button
                onClick={handleSignOut}
                className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dashboard' && <DashboardTab patientData={patientData} />}
            {activeTab === 'appointments' && <AppointmentsTab patientData={patientData} />}
            {activeTab === 'progress' && <ProgressTab patientData={patientData} />}
            {activeTab === 'records' && <RecordsTab patientData={patientData} />}
            {activeTab === 'submissions' && <SubmissionsTab submissions={submissions} />}
            {activeTab === 'profile' && <ProfileTab patientData={patientData} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Dashboard Tab Component
function DashboardTab({ patientData }: { patientData: PatientData }) {
  // Get the latest daily vitals
  const dailyVitals = patientData.dailyVitals || {};
  const latestVitals = Object.values(dailyVitals).pop() as any;
  
  // Get upcoming sessions
  const upcomingSessions = patientData.scheduledSessions?.filter(session => 
    new Date(session.scheduledDate) > new Date()
  ) || [];
  
  // Get completed sessions
  const completedSessions = patientData.scheduledSessions?.filter(session => 
    new Date(session.scheduledDate) <= new Date()
  ) || [];

  // Calculate treatment progress
  const totalSessions = patientData.scheduledSessions?.length || 0;
  const progressPercentage = totalSessions > 0 ? Math.round((completedSessions.length / totalSessions) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome Back, {patientData.name || 'Patient'}!</h2>
        <p className="text-gray-600">Here's an overview of your treatment progress and upcoming appointments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Treatment Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Treatment Status</h3>
          <p className="text-2xl font-bold text-blue-600">{patientData.treatmentPhase || 'Phase 1'}</p>
          <p className="text-sm text-gray-600">Current Phase</p>
        </div>

        {/* Next Appointment */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Appointment</h3>
          <p className="text-2xl font-bold text-green-600">
            {upcomingSessions.length > 0 ? new Date(upcomingSessions[0].scheduledDate).toLocaleDateString() : 'Not Scheduled'}
          </p>
          <p className="text-sm text-gray-600">Upcoming Session</p>
        </div>

        {/* Total Sessions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Sessions</h3>
          <p className="text-2xl font-bold text-purple-600">{totalSessions}</p>
          <p className="text-sm text-gray-600">Scheduled</p>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress</h3>
          <p className="text-2xl font-bold text-orange-600">{progressPercentage}%</p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>
      </div>

      {/* Treatment Progress Bar */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>{progressPercentage}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{completedSessions.length}</p>
              <p className="text-gray-600">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{upcomingSessions.length}</p>
              <p className="text-gray-600">Upcoming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Vitals */}
      {latestVitals && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Health Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{latestVitals.vitals?.painLevel || 0}</p>
              <p className="text-sm text-gray-600">Pain Level</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{latestVitals.vitals?.heartRate || 0}</p>
              <p className="text-sm text-gray-600">Heart Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{latestVitals.vitals?.bloodPressure?.systolic || 0}</p>
              <p className="text-sm text-gray-600">BP (Systolic)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{latestVitals.vitals?.bodyTemperature || 0}°F</p>
              <p className="text-sm text-gray-600">Temperature</p>
            </div>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Last Login</span>
            <span className="text-sm font-medium text-gray-900">
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Treatment Started</span>
            <span className="text-sm font-medium text-gray-900">
              {patientData.createdAt ? new Date(patientData.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Last Session</span>
            <span className="text-sm font-medium text-gray-900">
              {completedSessions.length > 0 ? new Date(completedSessions[completedSessions.length - 1].scheduledDate).toLocaleDateString() : 'No sessions yet'}
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-600">Current Condition</span>
            <span className="text-sm font-medium text-gray-900">
              {patientData.currentCondition || 'Not specified'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Appointments Tab Component
function AppointmentsTab({ patientData }: { patientData: PatientData }) {
  const upcomingSessions = patientData.scheduledSessions?.filter(session => 
    new Date(session.scheduledDate) > new Date()
  ) || [];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Appointments</h2>
        <p className="text-gray-600">View and manage your scheduled therapy sessions.</p>
      </div>

      {upcomingSessions.length > 0 ? (
        <div className="space-y-4">
          {upcomingSessions.map((session, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{session.name}</h3>
                  <p className="text-sm text-gray-600">{session.phaseTitle} - {session.weekTitle}</p>
                  <p className="text-sm text-gray-500">Day {session.dayNumber} of treatment</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(session.scheduledDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    {new Date(session.scheduledDate).toLocaleTimeString()}
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {session.status}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Session Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="ml-2 font-medium">{session.duration} minutes</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Phase:</span>
                    <span className="ml-2 font-medium">{session.phaseTitle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-600">No upcoming appointments scheduled.</p>
        </div>
      )}
    </div>
  );
}

// Progress Tab Component
function ProgressTab({ patientData }: { patientData: PatientData }) {
  const dailyVitals = patientData.dailyVitals || {};
  const vitalsEntries = Object.entries(dailyVitals).sort(([a], [b]) => b.localeCompare(a));
  const latestVitals = vitalsEntries[0]?.[1] as any;

  // Get all vitals for trend analysis
  const allVitals = vitalsEntries.map(([date, data]: [string, any]) => ({
    date,
    ...data.vitals
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatment Progress</h2>
        <p className="text-gray-600">Track your daily progress and treatment milestones.</p>
      </div>

      {/* Latest Daily Vitals */}
      {latestVitals && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latest Health Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <p className="text-3xl font-bold text-red-600">{latestVitals.vitals?.painLevel || 0}</p>
              <p className="text-sm text-gray-600">Pain Level (0-10)</p>
              <p className="text-xs text-gray-500 mt-1">
                {latestVitals.vitals?.painLevel <= 3 ? 'Low' : 
                 latestVitals.vitals?.painLevel <= 6 ? 'Moderate' : 'High'}
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-3xl font-bold text-green-600">{latestVitals.vitals?.heartRate || 0}</p>
              <p className="text-sm text-gray-600">Heart Rate (BPM)</p>
              <p className="text-xs text-gray-500 mt-1">
                {latestVitals.vitals?.heartRate < 60 ? 'Low' : 
                 latestVitals.vitals?.heartRate > 100 ? 'High' : 'Normal'}
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-3xl font-bold text-blue-600">
                {latestVitals.vitals?.bloodPressure?.systolic || 0}/{latestVitals.vitals?.bloodPressure?.diastolic || 0}
              </p>
              <p className="text-sm text-gray-600">Blood Pressure</p>
              <p className="text-xs text-gray-500 mt-1">
                {latestVitals.vitals?.bloodPressure?.systolic > 140 ? 'High' : 
                 latestVitals.vitals?.bloodPressure?.systolic < 90 ? 'Low' : 'Normal'}
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-3xl font-bold text-purple-600">{latestVitals.vitals?.bodyTemperature || 0}°F</p>
              <p className="text-sm text-gray-600">Body Temperature</p>
              <p className="text-xs text-gray-500 mt-1">
                {latestVitals.vitals?.bodyTemperature > 100.4 ? 'Fever' : 
                 latestVitals.vitals?.bodyTemperature < 97.5 ? 'Low' : 'Normal'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Functional Assessment */}
      {latestVitals?.functionalAssessment && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Functional Assessment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-2xl font-bold text-yellow-600">{latestVitals.functionalAssessment.bergBalanceScale || 0}</p>
              <p className="text-sm text-gray-600">Berg Balance Scale</p>
              <p className="text-xs text-gray-500 mt-1">
                {latestVitals.functionalAssessment.bergBalanceScale >= 45 ? 'Low Risk' : 
                 latestVitals.functionalAssessment.bergBalanceScale >= 36 ? 'Medium Risk' : 'High Risk'}
              </p>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <p className="text-2xl font-bold text-indigo-600">{latestVitals.functionalAssessment.sixMinuteWalkTest || 0}m</p>
              <p className="text-sm text-gray-600">6-Minute Walk Test</p>
              <p className="text-xs text-gray-500 mt-1">
                {latestVitals.functionalAssessment.sixMinuteWalkTest >= 400 ? 'Good' : 
                 latestVitals.functionalAssessment.sixMinuteWalkTest >= 300 ? 'Fair' : 'Poor'}
              </p>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-lg">
              <p className="text-2xl font-bold text-pink-600">{latestVitals.functionalAssessment.timedUpAndGo || 0}s</p>
              <p className="text-sm text-gray-600">Timed Up & Go</p>
              <p className="text-xs text-gray-500 mt-1">
                {latestVitals.functionalAssessment.timedUpAndGo <= 10 ? 'Normal' : 
                 latestVitals.functionalAssessment.timedUpAndGo <= 20 ? 'Mild Risk' : 'High Risk'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Treatment Phase Progress */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatment Phase Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Current Phase</span>
              <span>{patientData.treatmentPhase || 'Phase 1'}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
          
          {/* Phase milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Phase 1</p>
              <p className="text-xs text-gray-600">Acute Phase</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="w-3 h-3 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Phase 2</p>
              <p className="text-xs text-gray-600">Sub-acute Phase</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="w-3 h-3 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-medium text-gray-900">Phase 3</p>
              <p className="text-xs text-gray-600">Functional Phase</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vitals History */}
      {allVitals.length > 1 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Metrics Trend</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Pain Level Trend</h4>
              <div className="flex items-end space-x-2 h-20">
                {allVitals.slice(0, 7).map((vital, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-red-500 rounded-t"
                      style={{ height: `${(vital.painLevel / 10) * 60}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1">
                      {new Date(vital.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Records Tab Component
function RecordsTab({ patientData }: { patientData: PatientData }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Records</h2>
        <p className="text-gray-600">View your treatment history and medical information.</p>
      </div>

      {/* Medical History */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical History</h3>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Current Condition</span>
            <span className="text-sm font-medium text-gray-900">{patientData.currentCondition || 'N/A'}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Treatment Start Date</span>
            <span className="text-sm font-medium text-gray-900">
              {patientData.createdAt ? new Date(patientData.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Last Updated</span>
            <span className="text-sm font-medium text-gray-900">
              {patientData.updatedAt ? new Date(patientData.updatedAt.seconds * 1000).toLocaleDateString() : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      {patientData.emergencyContact && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Name</span>
              <span className="text-sm font-medium text-gray-900">{patientData.emergencyContact.name || 'N/A'}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Phone</span>
              <span className="text-sm font-medium text-gray-900">{patientData.emergencyContact.phone || 'N/A'}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Relationship</span>
              <span className="text-sm font-medium text-gray-900">{patientData.emergencyContact.relationship || 'N/A'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Submissions Tab Component
function SubmissionsTab({ submissions }: { submissions: any[] }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Submissions</h2>
        <p className="text-gray-600">View all your form submissions and responses.</p>
      </div>

      {submissions.length > 0 ? (
        <div className="space-y-4">
          {submissions.map((submission, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Submission #{submissions.length - index}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Submitted on {submission.createdAt ? new Date(submission.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {submission.status || 'Submitted'}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Submission Details</h4>
                <div className="text-sm text-gray-600">
                  <p>Form Type: {submission.formType || 'General Form'}</p>
                  <p>Patient ID: {submission.patientId}</p>
                  {submission.notes && (
                    <p>Notes: {submission.notes}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-600">No submissions found.</p>
        </div>
      )}
    </div>
  );
}

// Profile Tab Component
function ProfileTab({ patientData }: { patientData: PatientData }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Profile</h2>
        <p className="text-gray-600">Manage your personal information and account settings.</p>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.name || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.email || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.phone || 'N/A'}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.dateOfBirth || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.gender || 'N/A'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.address || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Account Created</span>
            <span className="text-sm font-medium text-gray-900">
              {patientData.createdAt ? new Date(patientData.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Last Updated</span>
            <span className="text-sm font-medium text-gray-900">
              {patientData.updatedAt ? new Date(patientData.updatedAt.seconds * 1000).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-600">Patient ID</span>
            <span className="text-sm font-medium text-gray-900">{patientData.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
