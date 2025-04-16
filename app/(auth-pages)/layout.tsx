export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#f9f9f9]">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
