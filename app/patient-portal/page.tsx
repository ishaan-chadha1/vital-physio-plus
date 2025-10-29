'use client';

// Force dynamic rendering to prevent build-time errors with Firebase
export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, User, Stethoscope, FileText } from 'lucide-react';

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
  compiled_medical_history?: any;
  expanded_protocol?: any;
  final_diagnosis?: string | null;
  input_final_diagnosis?: string | null;
  input_rationale?: string | null;
}

interface TherapySession {
  id: string;
  patientId: string;
  sessionName: string;
  scheduledDate: any;
  startTime: string;
  endTime: string;
  duration: number;
  status: string;
  protocolPhase: string;
  weekNumber: number;
  dayNumber: number;
  doctorId?: string;
  requiredEquipment?: Array<{
    equipmentName: string;
    quantity: number;
  }>;
}

interface Doctor {
  doctorId: string;
  name: string;
  qualifications: string;
  specialties: string[];
  email: string;
  phone: string;
}

const tabs = [
  { id: 'appointments', label: 'Upcoming Sessions', icon: '📅' },
  { id: 'personal-info', label: 'Personal Information', icon: '👤' },
  { id: 'medical-history', label: 'Medical History', icon: '📋' }
];

export default function PatientPortal() {
  const [user, setUser] = useState<any>(null);
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('appointments');
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [therapySessions, setTherapySessions] = useState<TherapySession[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if Firebase auth is initialized
    if (!auth) {
      console.error('Firebase auth is not initialized. Please check your Firebase configuration.');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchPatientData(user.uid);
        await fetchSubmissions(user.uid);
        await fetchTherapySessions(user.uid);
        await fetchDoctors();
      } else {
        router.push('/patient-portal/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const fetchPatientData = async (uid: string) => {
    if (!db) {
      console.error('Firebase Firestore is not initialized.');
      return;
    }
    try {
      const patientDoc = await getDoc(doc(db, 'patients', uid));
      if (patientDoc.exists()) {
        const data = patientDoc.data();
        setPatientData({
          id: uid,
          name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
          dateOfBirth: data.dateOfBirth || '',
          gender: data.gender || '',
          address: data.address || '',
          emergencyContact: data.emergencyContact || null,
          medicalHistory: data.medicalHistory || null,
          currentCondition: data.currentCondition || '',
          treatmentPhase: data.treatmentPhase || '',
          nextAppointment: data.nextAppointment || null,
          dailyVitals: data.dailyVitals || {},
          scheduledSessions: data.scheduledSessions || [],
          submissions: data.submissions || [],
          createdAt: data.createdAt || null,
          updatedAt: data.updatedAt || null,
          compiled_medical_history: data.compiled_medical_history || null,
          expanded_protocol: data.expanded_protocol || null,
          final_diagnosis: data.final_diagnosis || null,
          input_final_diagnosis: data.input_final_diagnosis || null,
          input_rationale: data.input_rationale || null,
        });
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const fetchSubmissions = async (uid: string) => {
    if (!db) {
      console.error('Firebase Firestore is not initialized.');
      return;
    }
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

  const fetchTherapySessions = async (uid: string) => {
    if (!db) {
      console.error('Firebase Firestore is not initialized.');
      setLoadingSessions(false);
      return;
    }
    setLoadingSessions(true);
    try {
      const sessionsQuery = query(
        collection(db, 'therapy_sessions'),
        where('patientId', '==', uid),
        where('status', 'in', ['scheduled', 'in-progress'])
      );
      const sessionsSnapshot = await getDocs(sessionsQuery);
      const sessionsData = sessionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as TherapySession[];
      setTherapySessions(sessionsData);
    } catch (error) {
      console.error('Error fetching therapy sessions:', error);
      setTherapySessions([]);
    } finally {
      setLoadingSessions(false);
    }
  };

  const fetchDoctors = async () => {
    if (!db) {
      console.error('Firebase Firestore is not initialized.');
      return;
    }
    try {
      const doctorsSnapshot = await getDocs(collection(db, 'doctors'));
      const doctorsData = doctorsSnapshot.docs.map(doc => ({
        doctorId: doc.id,
        ...doc.data()
      })) as Doctor[];
      setDoctors(doctorsData);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleSignOut = async () => {
    if (!auth) {
      console.error('Firebase auth is not initialized.');
      router.push('/patient-portal/login');
      return;
    }
    try {
      await signOut(auth);
      router.push('/patient-portal/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Show error if Firebase is not initialized (after loading completes)
  if (!loading && (!auth || !db)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-red-800 mb-2">Firebase Configuration Error</h2>
            <p className="text-red-600 mb-4">
              Firebase is not properly initialized. Please check your environment variables:
            </p>
            <ul className="text-left text-sm text-red-600 space-y-1 mb-4">
              <li>• NEXT_PUBLIC_FIREBASE_API_KEY</li>
              <li>• NEXT_PUBLIC_FIREBASE_PROJECT_ID</li>
              <li>• NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN</li>
            </ul>
            <button
              onClick={() => router.push('/')}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Go to Home Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your portal...</p>
        </div>
      </div>
    );
  }

  if (!user || !patientData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Please log in to access your portal.</p>
          <button
            onClick={() => router.push('/patient-portal/login')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="VitalPhysio+"
                width={40}
                height={40}
                className="mr-3"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Patient Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, {extractPersonalInfoFromHistory(patientData.compiled_medical_history).name || patientData.name || 'Patient'}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
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
            {activeTab === 'appointments' && <AppointmentsTab therapySessions={therapySessions} doctors={doctors} loadingSessions={loadingSessions} />}
            {activeTab === 'personal-info' && <PersonalInfoTab patientData={patientData} />}
            {activeTab === 'medical-history' && <MedicalHistoryTab patientData={patientData} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Helper functions
const getDoctorInfo = (doctors: Doctor[], doctorId: string) => {
  return doctors.find(doctor => doctor.doctorId === doctorId);
};

const extractPersonalInfoFromHistory = (compiledHistory: any) => {
  if (!compiledHistory) return {};
  
  const historyText = typeof compiledHistory === 'string' ? compiledHistory : JSON.stringify(compiledHistory);
  
  // Extract name
  const nameMatch = historyText.match(/- \*\*Name:\*\* ([^\n\r]+)/i) || 
                   historyText.match(/Name:\s*([^\n\r,]+)/i) ||
                   historyText.match(/\*\*Name:\*\* ([^\n\r]+)/i);
  
  // Extract age
  const ageMatch = historyText.match(/- \*\*Age:\*\* (\d+)/i) || 
                  historyText.match(/Age:\s*(\d+)/i) ||
                  historyText.match(/\*\*Age:\*\* (\d+)/i);
  
  // Extract gender
  const genderMatch = historyText.match(/- \*\*Gender:\*\* ([^\n\r]+)/i) || 
                     historyText.match(/Gender:\s*([^\n\r,]+)/i) ||
                     historyText.match(/\*\*Gender:\*\* ([^\n\r]+)/i);
  
  // Extract occupation
  const occupationMatch = historyText.match(/- \*\*Occupation:\*\* ([^\n\r]+)/i) || 
                         historyText.match(/Occupation:\s*([^\n\r,]+)/i) ||
                         historyText.match(/\*\*Occupation:\*\* ([^\n\r]+)/i);
  
  return {
    name: nameMatch ? nameMatch[1].trim() : null,
    age: ageMatch ? ageMatch[1].trim() : null,
    gender: genderMatch ? genderMatch[1].trim() : null,
    occupation: occupationMatch ? occupationMatch[1].trim() : null
  };
};

const formatSessionDateTime = (session: TherapySession) => {
  const date = session.scheduledDate.toDate();
  const dateStr = date.toLocaleDateString();
  const timeStr = `${session.startTime} - ${session.endTime}`;
  return { dateStr, timeStr };
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'scheduled':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'in-progress':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'cancelled':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

// Appointments Tab Component
function AppointmentsTab({ 
  therapySessions, 
  doctors, 
  loadingSessions 
}: { 
  therapySessions: TherapySession[];
  doctors: Doctor[];
  loadingSessions: boolean;
}) {
  // Calculate session statistics
  const totalSessions = therapySessions.length;
  const scheduledSessions = therapySessions.filter(s => s.status === 'scheduled').length;
  const inProgressSessions = therapySessions.filter(s => s.status === 'in-progress').length;
  const uniqueDoctors = new Set(therapySessions.map(s => s.doctorId)).size;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Upcoming Therapy Sessions</h2>
        <p className="text-gray-600">View your scheduled therapy sessions and treatment details.</p>
      </div>

      <div className="rounded-lg border border-blue-100 bg-white p-6 shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-700">
            <Stethoscope className="text-green-500" /> Upcoming Therapy Sessions
          </h3>
          {totalSessions > 0 && (
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="font-medium">{totalSessions}</span>
                <span>Total Sessions</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{scheduledSessions}</span>
                <span>Scheduled</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{inProgressSessions}</span>
                <span>In Progress</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{uniqueDoctors}</span>
                <span>Doctors</span>
              </div>
            </div>
          )}
        </div>
        
        {loadingSessions ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-3 text-gray-600">Loading sessions...</span>
          </div>
        ) : therapySessions.length > 0 ? (
          <div className="space-y-4">
            {therapySessions.map((session) => {
              const doctor = getDoctorInfo(doctors, session.doctorId || '');
              const { dateStr, timeStr } = formatSessionDateTime(session);
              
              return (
                <div key={session.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {session.sessionName}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{dateStr}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{timeStr}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>Duration: {session.duration} min</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(session.status)}`}>
                      {session.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Session Details */}
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Phase:</span>
                        <span className="ml-2 text-gray-900">{session.protocolPhase}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Week:</span>
                        <span className="ml-2 text-gray-900">{session.weekNumber}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-700">Day:</span>
                        <span className="ml-2 text-gray-900">{session.dayNumber}</span>
                      </div>
                    </div>
                    
                    {/* Doctor Assignment */}
                    <div className="space-y-2">
                      {doctor ? (
                        <>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-blue-500" />
                            <span className="font-medium text-gray-700">Assigned Doctor:</span>
                          </div>
                          <div className="ml-6 space-y-1">
                            <div className="text-sm font-semibold text-gray-900">
                              {doctor.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              {doctor.qualifications}
                            </div>
                            <div className="text-xs text-gray-500">
                              {doctor.specialties.join(', ')}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>📧 {doctor.email}</span>
                              <span>📞 {doctor.phone}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-sm text-gray-500 italic">
                          No doctor assigned
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Equipment Requirements */}
                  {session.requiredEquipment && session.requiredEquipment.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <div className="text-sm font-medium text-gray-700 mb-2">Required Equipment:</div>
                      <div className="flex flex-wrap gap-2">
                        {session.requiredEquipment.map((equipment, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {equipment.equipmentName} (x{equipment.quantity})
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Stethoscope className="h-12 w-12 mx-auto mb-3 text-gray-300" />
            <p className="text-lg font-medium">No upcoming therapy sessions</p>
            <p className="text-sm">You don&apos;t have any scheduled therapy sessions at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Personal Information Tab Component
function PersonalInfoTab({ patientData }: { patientData: PatientData }) {
  const extractedInfo = extractPersonalInfoFromHistory(patientData.compiled_medical_history);
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h2>
        <p className="text-gray-600">Your personal details extracted from your medical history.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extractedInfo.name && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <p className="text-lg text-gray-900 font-medium">{extractedInfo.name}</p>
            </div>
          )}
          
          {extractedInfo.age && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <p className="text-lg text-gray-900 font-medium">{extractedInfo.age} years old</p>
            </div>
          )}
          
          {extractedInfo.gender && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <p className="text-lg text-gray-900 font-medium">{extractedInfo.gender}</p>
            </div>
          )}
          
          {extractedInfo.occupation && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
              <p className="text-lg text-gray-900 font-medium">{extractedInfo.occupation}</p>
            </div>
          )}
        </div>
        
        {!extractedInfo.name && !extractedInfo.age && !extractedInfo.gender && !extractedInfo.occupation && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-lg">No personal information found in medical history.</p>
            <p className="text-sm mt-2">Personal details will appear here once they are available in your medical records.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Medical History Tab Component
function MedicalHistoryTab({ patientData }: { patientData: PatientData }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Medical History</h2>
        <p className="text-gray-600">View your complete medical history and treatment information.</p>
      </div>

      {/* Compiled Medical History */}
      <div className="rounded-lg border border-blue-100 bg-white p-6 shadow">
        <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold text-blue-700">
          <FileText className="text-purple-400" /> Compiled Medical History
        </h3>
        {patientData.compiled_medical_history ? (
          <div className="prose prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-strong:text-blue-800 prose-p:mb-2 prose-ul:mb-2 prose-li:marker:text-blue-400 max-w-none rounded bg-gray-50 p-6 text-gray-900">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="mb-4 mt-8 text-3xl font-extrabold text-black"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="mb-3 mt-6 text-2xl font-bold text-black"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="mb-2 mt-4 text-lg font-semibold text-black"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="text-blue-900" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="mb-2 ml-6 list-disc" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="mb-1" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-2" {...props} />
                ),
              }}
            >
              {typeof patientData.compiled_medical_history === "string"
                ? patientData.compiled_medical_history
                : JSON.stringify(
                    patientData.compiled_medical_history,
                    null,
                    2,
                  )}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-gray-500">
            No compiled medical history available.
          </div>
        )}
      </div>

      {/* Diagnosis Information */}
      {(patientData.final_diagnosis || patientData.input_final_diagnosis) && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Diagnosis Information</h3>
          <div className="space-y-4">
            {patientData.final_diagnosis && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Final Diagnosis</label>
                <p className="mt-1 text-sm text-gray-900">{patientData.final_diagnosis}</p>
              </div>
            )}
            {patientData.input_final_diagnosis && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Input Final Diagnosis</label>
                <p className="mt-1 text-sm text-gray-900">{patientData.input_final_diagnosis}</p>
              </div>
            )}
            {patientData.input_rationale && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Diagnosis Rationale</label>
                <p className="mt-1 text-sm text-gray-900">{patientData.input_rationale}</p>
              </div>
            )}
          </div>
        </div>
      )}


      {/* Emergency Contact */}
      {patientData.emergencyContact && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.emergencyContact.name || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Relationship</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.emergencyContact.relationship || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.emergencyContact.phone || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">{patientData.emergencyContact.email || 'Not provided'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}