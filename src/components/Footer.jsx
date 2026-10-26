export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6">
      <p className="text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Florence Mike. All rights reserved.
      </p>
    </footer>
  )
}