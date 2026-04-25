"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation } from "./navigation";
import { SplineEmbed } from "./spline-embed";

const SL = 16;  // offset left/top da sidebar (px)
const SW = 256; // largura da sidebar (px)

function SidebarContent({
  pathname,
  onNavClick,
}: {
  pathname: string;
  onNavClick?: () => void;
}) {
  return (
    <>
      <div className="pb-5 mb-5 border-b border-black/10">
        <Link href="/styleguide" onClick={onNavClick}>
          <img src="/logo-chuv.svg" alt="Chuv Studio" className="h-[35px] w-auto" />
        </Link>
      </div>

      <nav className="flex flex-col gap-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2 px-2">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <li key={item.href} className="group/nav-item">
                  <Link
                    href={item.href}
                    onClick={onNavClick}
                    className={cn(
                      "block px-2 py-2.5 rounded-none text-sm transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-foreground hover:bg-black/5"
                    )}
                  >
                    {item.name}
                  </Link>

                  {item.publishedLinks?.length ? (
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-200 group-hover/nav-item:grid-rows-[1fr] group-hover/nav-item:opacity-100">
                      <div className="overflow-hidden">
                        <div className="mt-2 flex flex-col gap-1 rounded-none border border-black/10 bg-white/60 px-2 py-4">
                          <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Vercel
                          </p>
                          {item.publishedLinks.map((publishedLink) => (
                            <Link
                              key={publishedLink.href}
                              href={publishedLink.href}
                              onClick={onNavClick}
                              className="rounded-none px-2 py-2.5 text-sm text-foreground transition-colors hover:bg-black/5"
                            >
                              {publishedLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="pt-5 mt-5 border-t border-black/10">
        <p className="text-[11px] text-muted-foreground">Chuv Studio © 2025</p>
        <p className="text-[11px] text-muted-foreground">id@chuv.studio</p>
      </div>
    </>
  );
}

export default function StyleguideLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [tabVisible, setTabVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const revealTab = useCallback(() => {
    setTabVisible(true);
    clearTimer();
    timerRef.current = setTimeout(() => setTabVisible(false), 5000);
  }, [clearTimer]);

  const handleCollapse = useCallback(() => {
    setDesktopOpen(false);
    setTimeout(revealTab, 300);
  }, [revealTab]);

  const handleExpand = useCallback(() => {
    setDesktopOpen(true);
    setTabVisible(false);
    clearTimer();
  }, [clearTimer]);

  // Mouse perto da borda esquerda → mostra etiqueta
  useEffect(() => {
    if (desktopOpen) return;
    const onMove = (e: MouseEvent) => {
      if (e.clientX < 48) revealTab();
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [desktopOpen, revealTab]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  // Posição do botão de colapsar: borda direita da sidebar − metade do botão
  const btnLeft = SL + SW - 12;

  return (
    <div className="relative min-h-screen bg-white">
      <SplineEmbed />

      {/* ── Mobile top bar ─────────────────────────────────────── */}
      <header className="lg:hidden sticky top-0 z-30 flex items-center gap-3 bg-white border-b border-black/5 px-4 py-3">
        <button
          onClick={() => setMobileOpen(true)}
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

      {/* ── Mobile overlay ──────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[min(20rem,calc(100vw-1rem))]",
          "flex flex-col overflow-y-auto p-4 sm:p-5",
          "transition-transform duration-200 lg:hidden rounded-r-[10px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ backgroundColor: "#efefef" }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Fechar menu"
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-black/10 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <SidebarContent pathname={pathname} onNavClick={() => setMobileOpen(false)} />
      </aside>

      {/* ── Desktop sidebar (fixed, desliza para esquerda) ─────── */}
      <aside
        className="hidden lg:flex fixed z-20 flex-col overflow-y-auto no-scrollbar rounded-[10px] p-5"
        style={{
          backgroundColor: "#efefef",
          left: SL,
          top: SL,
          width: SW,
          maxHeight: `calc(100vh - ${SL * 2}px)`,
          transform: desktopOpen ? "translateX(0)" : `translateX(${-(SW + SL)}px)`,
          transition: "transform 300ms ease-in-out",
        }}
      >
        <SidebarContent pathname={pathname} />
      </aside>

      {/* ── Botão de colapsar (borda direita da sidebar, fixo) ──── */}
      <button
        onClick={handleCollapse}
        aria-label="Fechar menu"
        className="hidden lg:flex fixed z-30 items-center justify-center w-6 h-14 rounded-full border border-black/[0.08] shadow-sm"
        style={{
          backgroundColor: "#efefef",
          left: btnLeft,
          top: "50%",
          transform: desktopOpen
            ? "translateX(0) translateY(-50%)"
            : `translateX(${-(SW + SL)}px) translateY(-50%)`,
          opacity: desktopOpen ? 1 : 0,
          pointerEvents: desktopOpen ? "auto" : "none",
          transition: "transform 300ms ease-in-out, opacity 200ms ease-in-out",
        }}
      >
        {/* Chevron esquerda */}
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M5.5 1L1 6L5.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Etiqueta de expansão (borda esquerda da tela) ──────── */}
      <button
        onClick={handleExpand}
        onMouseEnter={() => !desktopOpen && revealTab()}
        aria-label="Abrir menu"
        className="hidden lg:flex fixed left-0 z-20 flex-col items-center justify-center w-5 h-16 rounded-r-full border border-l-0 border-black/[0.08] shadow-sm"
        style={{
          backgroundColor: "#efefef",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: !desktopOpen && tabVisible ? 1 : 0,
          pointerEvents: !desktopOpen && tabVisible ? "auto" : "none",
          transition: "opacity 400ms ease-in-out",
        }}
      >
        {/* Chevron direita */}
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1.5 1L6 6L1.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* ── Conteúdo principal (expande ao fechar sidebar) ─────── */}
      <div
        className={cn(
          "transition-[padding-left] duration-300 ease-in-out",
          "px-3 pb-3 sm:px-4 sm:pb-4",
          desktopOpen
            ? "lg:pl-[288px] lg:pr-4 lg:pt-4 lg:pb-4"
            : "lg:pl-4 lg:pr-4 lg:pt-4 lg:pb-4"
        )}
      >
        <main>{children}</main>
      </div>
    </div>
  );
}
