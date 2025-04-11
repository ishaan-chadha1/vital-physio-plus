export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="min-h-screen w-full bg-[#38bdf8] text-white">
        {children}
      </div>
    </div>
  );
}
