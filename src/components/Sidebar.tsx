import React, { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenQR: () => void;
  isEditPriceMode: boolean;
  onToggleEditPriceMode: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenQR,
  isEditPriceMode,
  onToggleEditPriceMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Trang chủ', enLabel: 'Home' },
    { id: 'about', label: 'Giới thiệu thương hiệu', enLabel: 'About Us' },
    { id: 'products', label: 'Danh mục sản phẩm', enLabel: 'Products' },
    { id: 'contact', label: 'Thông tin liên hệ', enLabel: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP FIXED LEFT SIDEBAR ================= */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 bg-[#F7E6CA]/90 backdrop-blur-md border-r border-[#4A2E1B]/15 flex-col justify-between p-8 z-40 shadow-sm transition-all duration-300">
        {/* Top: Brand Mark & Monogram */}
        <div>
          <div 
            onClick={() => handleItemClick('hero')} 
            className="cursor-pointer group block"
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full border border-[#4A2E1B]/40 flex items-center justify-center bg-[#FFFCF7] shadow-sm group-hover:scale-105 transition-transform">
                <span className="font-serif text-[#4A2E1B] font-bold text-lg">V</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-[#4A2E1B] group-hover:text-[#7A5230] transition-colors">
                  The ViéCOCO
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#7A5230] font-sans font-medium">
                  Artisanal Organic Beauty
                </span>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#4A2E1B]/30 via-[#7A5230]/20 to-transparent mt-4 mb-8"></div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#4A2E1B] text-[#FFFCF7] shadow-md shadow-[#4A2E1B]/10 translate-x-1'
                      : 'text-[#4A2E1B] hover:bg-[#4A2E1B]/10 hover:text-[#4A2E1B]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-mono opacity-60 ${isActive ? 'text-[#F7E6CA]' : 'text-[#7A5230]'}`}>
                      0{idx + 1}
                    </span>
                    <span className="font-sans font-medium text-sm tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#F7E6CA] scale-125' : 'bg-transparent group-hover:bg-[#4A2E1B]/40'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Center / Action Tools: QR Scanner & Inline Price Toggle */}
        <div className="space-y-3 py-6 border-y border-[#4A2E1B]/15 my-4">
          {/* QR Code Action Button */}
          <button
            onClick={onOpenQR}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#FFFCF7] border border-[#4A2E1B]/15 hover:border-[#4A2E1B]/40 text-[#4A2E1B] text-xs font-medium transition-all shadow-sm group hover:bg-white"
            title="Quét mã QR để mở website trên điện thoại"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#7A5230] group-hover:rotate-6 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
                <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 19h2v2h-2z" strokeWidth="2" />
              </svg>
              <span>Quét mã QR mở web</span>
            </div>
            <span className="text-[10px] bg-[#8C9A7B]/20 text-[#4A2E1B] font-semibold px-2 py-0.5 rounded-full">
              Mobile
            </span>
          </button>

          {/* Inline Price Mode Toggle */}
          <button
            onClick={onToggleEditPriceMode}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border text-xs font-medium transition-all shadow-sm ${
              isEditPriceMode
                ? 'bg-[#7A5230] text-[#FFFCF7] border-[#4A2E1B] ring-2 ring-[#7A5230]/30 animate-pulse'
                : 'bg-[#FFFCF7] text-[#4A2E1B] border-[#4A2E1B]/15 hover:border-[#4A2E1B]/40'
            }`}
            title="Bật/Tắt chế độ chỉnh sửa giá bán động"
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm">⚙️</span>
              <span className="font-medium">Chỉnh giá bán</span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                isEditPriceMode ? 'bg-[#FFFCF7] text-[#4A2E1B]' : 'bg-[#4A2E1B]/10 text-[#4A2E1B]'
              }`}
            >
              {isEditPriceMode ? 'ĐANG BẬT' : 'TẮT'}
            </span>
          </button>
        </div>

        {/* Bottom: Cart Preview & Signature Tag */}
        <div className="space-y-4">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="w-full bg-[#4A2E1B] hover:bg-[#341F12] text-[#FFFCF7] py-3 px-4 rounded-xl flex items-center justify-between shadow-md hover:shadow-lg transition-all group"
          >
            <div className="flex items-center space-x-2.5">
              <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-xs uppercase tracking-wider font-semibold">Giỏ hàng</span>
            </div>
            <span className="bg-[#F7E6CA] text-[#4A2E1B] font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          {/* Classroom & Signature small note */}
          <div className="pt-2 text-center text-[#4A2E1B]/70">
            <p className="font-signature text-xl text-[#7A5230] leading-none">
              Signature: AURACOCO
            </p>
            <p className="text-[11px] font-sans mt-1 text-[#4A2E1B]/60">
              Nhóm 1 - Tổ 3 • 12A10
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MOBILE / TABLET STICKY TOP HEADER ================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#F7E6CA]/95 backdrop-blur-md border-b border-[#4A2E1B]/15 px-4 flex items-center justify-between z-40 shadow-sm">
        {/* Brand */}
        <div 
          onClick={() => handleItemClick('hero')} 
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full border border-[#4A2E1B]/40 flex items-center justify-center bg-[#FFFCF7]">
            <span className="font-serif text-[#4A2E1B] font-bold text-sm">V</span>
          </div>
          <div>
            <span className="font-serif text-lg font-bold text-[#4A2E1B] tracking-tight">
              The ViéCOCO
            </span>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-2">
          {/* Quick QR button */}
          <button
            onClick={onOpenQR}
            className="p-2 rounded-lg bg-[#FFFCF7] border border-[#4A2E1B]/15 text-[#4A2E1B]"
            title="Quét QR"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
              <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 19h2v2h-2z" strokeWidth="2" />
            </svg>
          </button>

          {/* Quick Cart button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-lg bg-[#4A2E1B] text-[#FFFCF7]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#8C9A7B] text-[#FFFCF7] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FFFCF7] border border-[#4A2E1B]/20 text-[#4A2E1B] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER NAVIGATION ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#4A2E1B]/50 backdrop-blur-sm animate-fadeIn">
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#F7E6CA] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slideLeft">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#4A2E1B]/15">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#4A2E1B]">The ViéCOCO</h3>
                  <p className="text-[11px] text-[#7A5230]">PURE NATURE - PURE YOU</p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#4A2E1B] hover:bg-[#4A2E1B]/10 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <nav className="mt-6 space-y-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-[#4A2E1B] text-[#FFFCF7] font-semibold'
                          : 'text-[#4A2E1B] hover:bg-[#4A2E1B]/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono opacity-70">0{idx + 1}</span>
                        <span className="text-sm font-sans">{item.label}</span>
                      </div>
                      <span className="text-xs opacity-60 font-serif">→</span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Controls in Mobile Drawer */}
              <div className="mt-6 pt-4 border-t border-[#4A2E1B]/15 space-y-3">
                <button
                  onClick={() => {
                    onToggleEditPriceMode();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between ${
                    isEditPriceMode
                      ? 'bg-[#7A5230] text-[#FFFCF7]'
                      : 'bg-[#FFFCF7] text-[#4A2E1B] border border-[#4A2E1B]/20'
                  }`}
                >
                  <span>⚙️ Chế độ chỉnh giá bán</span>
                  <span className="text-[10px] uppercase">{isEditPriceMode ? 'BẬT' : 'TẮT'}</span>
                </button>

                <button
                  onClick={() => {
                    onOpenQR();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#FFFCF7] text-[#4A2E1B] border border-[#4A2E1B]/20 flex items-center justify-between"
                >
                  <span>📱 Quét mã QR vào web</span>
                  <span className="text-[10px] text-[#8C9A7B] font-bold">Mở ngay</span>
                </button>
              </div>
            </div>

            {/* Bottom Credit */}
            <div className="pt-6 border-t border-[#4A2E1B]/15 text-center">
              <p className="font-signature text-2xl text-[#7A5230]">
                Signature: AURACOCO
              </p>
              <p className="text-xs text-[#4A2E1B]/70 mt-1">
                Dự án Nhóm 1 - Tổ 3 • 12A10
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
