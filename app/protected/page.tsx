'use client';

import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { InfoIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProtectedPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [geminiData, setGeminiData] = useState<any[] | null>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchUserAndData = async () => {
      setLoading(true);
      
      // ✅ Get the authenticated user
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        console.error('❌ User not authenticated:', userError);
        router.push('/sign-in'); // Redirect if not logged in
        return;
      }

      setUser(userData.user);

      // ✅ Extract email
      const userEmail = userData.user.email;
      console.log('📩 Logged-in User Email:', userEmail);

      // ✅ Query Supabase for user's specific data
      const { data: geminiRecords, error: geminiError } = await supabase
        .from('gemini_data')
        .select('*')
        .eq('email', userEmail); // 🔥 Fetch data where email matches

      if (geminiError) {
        console.error('❌ Error fetching user-specific data:', geminiError);
      } else {
        console.log('📜 Queried Gemini Data:', geminiRecords);
        setGeminiData(geminiRecords);
      }

      setLoading(false);
    };

    fetchUserAndData();
  }, [supabase, router]);

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated user.
        </div>
      </div>

      {/* ✅ Links to Other Pages */}
      <Link href="/elevenlabs" className="text-blue-500 underline">Access ElevenLabs AI</Link>
      <Link href="/chat" className="text-blue-500 underline">Access Gemini</Link>

      {/* ✅ Display User Details */}
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your User Details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>

      {/* ✅ Display Gemini Data */}
      <div>
        <h2 className="font-bold text-2xl mb-4">Your Gemini Data</h2>
        {loading ? (
          <p>Loading data... ⏳</p>
        ) : geminiData?.length ? (
          <pre className="text-xs font-mono p-3 rounded border max-h-64 overflow-auto">
            {JSON.stringify(geminiData, null, 2)}
          </pre>
        ) : (
          <p>No data found ❌</p>
        )}
      </div>
    </div>
  );
}
