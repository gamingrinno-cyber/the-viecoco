import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
  onOpenQR: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenQR }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Subtle organic ambient background gradients */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8C9A7B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#7A5230]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Small Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFCF7] border border-[#4A2E1B]/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8C9A7B] animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-[#7A5230] font-sans font-semibold">
                Mỹ phẩm dừa thủ công thượng hạng
              </span>
            </div>

            {/* Main Brand Title */}
            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#4A2E1B] leading-[1.08]">
                The ViéCOCO
              </h1>

              {/* Slogan */}
              <div className="pt-1">
                <p className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-medium text-[#7A5230] uppercase">
                  PURE NATURE — PURE YOU
                </p>
                <p className="font-sans text-base sm:text-lg text-[#4A2E1B]/80 font-normal italic mt-2">
                  "Thuần khiết từ thiên nhiên, trọn vẹn là chính bạn"
                </p>
              </div>
            </div>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base text-[#4A2E1B]/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              Khởi nguồn từ những rặng dừa Bến Tre trĩu quả được nuôi dưỡng bởi phù sa sông Tiền. 
              Mỗi sản phẩm là sự kết tinh của phương pháp ép lạnh thủ công chuẩn organic, 
              mang lại giải pháp dưỡng lành dịu nhẹ, thuần khiết và an toàn tuyệt đối cho làn da thanh xuân.
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#4A2E1B] hover:bg-[#321c0e] text-[#FFFCF7] rounded-full font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-3 group"
              >
                <span>Khám phá bộ sưu tập</span>
                <span className="group-hover:translate-x-1 transition-transform">↓</span>
              </button>

              <button
                onClick={onOpenQR}
                className="w-full sm:w-auto px-6 py-4 bg-[#FFFCF7] hover:bg-white text-[#4A2E1B] border border-[#4A2E1B]/20 rounded-full font-sans font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-sm group"
              >
                <svg className="w-4 h-4 text-[#7A5230] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                  <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
                  <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
                  <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 19h2v2h-2z" strokeWidth="2" />
                </svg>
                <span>Quét QR mở trên điện thoại</span>
              </button>
            </div>

            {/* Trust Mini Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#4A2E1B]/15 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block font-serif font-bold text-xl text-[#4A2E1B]">100%</span>
                <span className="text-[11px] text-[#7A5230] uppercase font-sans">Thuần thực vật</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-serif font-bold text-xl text-[#4A2E1B]">Ép lạnh</span>
                <span className="text-[11px] text-[#7A5230] uppercase font-sans">Giữ dưỡng chất</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-serif font-bold text-xl text-[#4A2E1B]">0% Paraben</span>
                <span className="text-[11px] text-[#7A5230] uppercase font-sans">Lành tính tối đa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute inset-0 border border-[#4A2E1B]/20 rounded-3xl translate-x-3 translate-y-3 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 group">
                <img
                  src="assets/viecoco_hero_luxury.jpg"
                  alt="The ViéCOCO Mỹ phẩm dừa thủ công"
                  className="w-full h-[430px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to high-res organic coconut flatlay if local file isn't loaded
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80";
                  }}
                />

                {/* Subtle Image Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1B]/60 via-transparent to-transparent opacity-60" />

                {/* Floating Eco-Chic Tag on Image */}
                <div className="absolute top-4 left-4 bg-[#FFFCF7]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#4A2E1B]/10 shadow-sm flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#8C9A7B]"></span>
                  <span className="text-xs font-serif font-bold text-[#4A2E1B]">Organic Edition</span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif text-lg font-medium text-[#FFFCF7] drop-shadow-sm">
                    Dừa Bến Tre Tuyển Chọn
                  </p>
                  <p className="text-xs text-[#F7E6CA] opacity-90 font-sans">
                    Thu hoạch đúng thời vụ • Ép lạnh tinh khiết
                  </p>
                </div>
              </div>

              {/* Small Floating Seal Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#FFFCF7] border border-[#4A2E1B]/15 p-4 rounded-2xl shadow-xl hidden sm:flex items-center space-x-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-full bg-[#F7E6CA] flex items-center justify-center text-[#4A2E1B] font-serif font-bold text-lg border border-[#4A2E1B]/20">
                  🥥
                </div>
                <div>
                  <p className="text-xs font-bold text-[#4A2E1B] font-serif">Cold-Pressed</p>
                  <p className="text-[10px] text-[#7A5230] font-sans">100% Natural Coconut</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
