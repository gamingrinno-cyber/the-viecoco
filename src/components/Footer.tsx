import React from 'react';

interface FooterProps {
  onOpenQR: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQR, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#4A2E1B] text-[#FFFCF7] pt-16 pb-12 overflow-hidden border-t-4 border-[#7A5230]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#7A5230]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C9A7B]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FFFCF7]/15">
          
          {/* Brand Presentation */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#FFFCF7] text-[#4A2E1B] flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                V
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-[#FFFCF7]">
                The ViéCOCO
              </span>
            </div>
            
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-[#F7E6CA]/90 font-medium">
              PURE NATURE — PURE YOU
            </p>

            <p className="font-sans text-xs text-[#FFFCF7]/75 italic leading-relaxed">
              "Thuần khiết từ thiên nhiên, trọn vẹn là chính bạn"
            </p>

            <p className="font-sans text-xs text-[#FFFCF7]/65 max-w-sm leading-relaxed">
              Thương hiệu mỹ phẩm dừa thủ công hữu cơ, chắt lọc tinh hoa dừa Bến Tre dành riêng cho làn da người Việt.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F7E6CA] tracking-wider uppercase">
              Điều Hướng Nhanh
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#FFFCF7]/80">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#F7E6CA] transition-colors">
                  Trang chủ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F7E6CA] transition-colors">
                  Giới thiệu thương hiệu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#F7E6CA] transition-colors">
                  Danh mục sản phẩm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#F7E6CA] transition-colors">
                  Thông tin liên hệ
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Access & Action */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F7E6CA] tracking-wider uppercase">
              Truy Cập Nhanh Trên Điện Thoại
            </h4>
            <p className="text-xs text-[#FFFCF7]/75 leading-relaxed font-sans">
              Mở camera điện thoại quét mã QR để lưu trang web hoặc gửi nhanh cho bạn bè cùng lớp.
            </p>
            <button
              onClick={onOpenQR}
              className="px-4 py-2.5 bg-[#FFFCF7] text-[#4A2E1B] hover:bg-[#F7E6CA] rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shadow-sm"
            >
              <span>📱 Xem mã QR trang web</span>
            </button>
          </div>

        </div>

        {/* Center: ARTISTIC SIGNATURE & CREDITS */}
        <div className="py-12 text-center space-y-3">
          {/* Handwritten Signature: Font 'Alex Brush' - Rõ chữ, tinh tế, vừa vặn */}
          <div className="group cursor-pointer inline-block" onClick={scrollToTop}>
            <p className="font-signature text-4xl sm:text-5xl lg:text-6xl text-[#F7E6CA] tracking-wide transform hover:scale-105 transition-transform duration-300 drop-shadow-sm select-none">
              Signature: AURACOCO
            </p>
            <p className="font-signature text-2xl sm:text-3xl text-[#F7E6CA]/90 italic mt-1 tracking-wider select-none">
              Since 2026
            </p>
          </div>

          {/* Proud Class & Team Credit */}
          <div className="pt-2">
            <div className="inline-block px-5 py-2 rounded-full bg-[#FFFCF7]/10 backdrop-blur-sm border border-[#FFFCF7]/15">
              <p className="font-sans text-xs sm:text-sm font-medium tracking-wide text-[#FFFCF7]">
                ✨ Dự án thực hiện bởi: <strong className="text-[#F7E6CA] font-bold">Nhóm 1 - Tổ 3 đến từ 12A10</strong>
              </p>
            </div>
          </div>

          <p className="text-[11px] text-[#FFFCF7]/60 font-sans">
            Mỹ phẩm dừa thủ công • Tinh hoa Bến Tre • Phong cách Eco-Chic
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-[#FFFCF7]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FFFCF7]/60 font-sans gap-4">
          <p>© 2026 The ViéCOCO. Tất cả các quyền được bảo lưu.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-[#F7E6CA] transition-colors"
          >
            <span>Lên đầu trang</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
