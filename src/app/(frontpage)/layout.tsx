// Layout for phone
export default function PhoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[46vh] h-[80vh] border-r">{children}</div>;
}