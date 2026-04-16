"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "./navigation";
import { SplineEmbed } from "./spline-embed";

function SidebarContent({
  pathname,
  onNavClick,
  onClose,
}: {
  pathname: string;
  onNavClick?: () => void;
  onClose?: () => void;
}) {
  return (
    <>
      {/* Logo */}
      <div className="pb-5 mb-5 border-b border-black/10 flex items-center justify-between">
        <Link href="/styleguide" onClick={onNavClick}>
          <img src="/logo-chuv.svg" alt="Chuv Studio" className="h-[35px] w-auto" />
        </Link>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-1.5 rounded-lg hover:bg-black/10 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-6 flex-1">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2 px-2">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavClick}
                    className={cn(
                      "block px-2 py-2 rounded-[10px] text-sm transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-black/5"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="pt-5 mt-5 border-t border-black/10">
        <p className="text-[11px] text-muted-foreground">Chuv Studio © 2025</p>
        <p className="text-[11px] text-muted-foreground">id@chuv.studio</p>
      </div>
    </>
  );
}

export default function StyleguideLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      <SplineEmbed />

      {/* ── Mobile top bar ─────────────────────────────────────── */}
      <header className="lg:hidden sticky top-0 z-30 flex items-center gap-3 bg-white border-b border-black/5 px-4 py-3">
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="p-1.5 rounded-lg hover:bg-black/5 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <Link href="/styleguide">
          <img src="/logo-chuv.svg" alt="Chuv Studio" className="h-[38px] w-auto" />
        </Link>
      </header>

      {/* ── Mobile drawer overlay ───────────────────────────────── */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[min(20rem,calc(100vw-1rem))] flex flex-col overflow-y-auto p-4 sm:p-5 transition-transform duration-200 lg:hidden rounded-r-[10px]",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ backgroundColor: "#efefef" }}
      >
        <SidebarContent
          pathname={pathname}
          onNavClick={() => setOpen(false)}
          onClose={() => setOpen(false)}
        />
      </aside>

      {/* ── Desktop layout ─────────────────────────────────────── */}
      <div className="lg:flex lg:gap-4 lg:p-4">

        {/* Desktop sidebar */}
        <aside
          className="hidden lg:flex w-60 xl:w-64 shrink-0 sticky top-4 self-start flex-col overflow-y-auto rounded-[10px] p-5"
          style={{
            backgroundColor: "#efefef",
            maxHeight: "calc(100vh - 32px)",
          }}
        >
          <SidebarContent pathname={pathname} />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-3 pb-3 sm:px-4 sm:pb-4 lg:px-0 lg:pb-0">
          {children}
        </main>
      </div>
    </div>
  );
}
