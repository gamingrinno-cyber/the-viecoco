import React from 'react';
import { BRAND_VALUES } from '../data/products';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFCF7] border border-[#4A2E1B]/15">
            <span className="text-[11px] uppercase tracking-widest text-[#7A5230] font-sans font-semibold">
              Câu chuyện thương hiệu
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E1B]">
            Hồn Dừa Bến Tre — Nét Đẹp Tự Nhiên Thuần Khiết
          </h2>
          <div className="w-16 h-0.5 bg-[#4A2E1B]/30 mx-auto" />
          <p className="font-sans text-sm sm:text-base text-[#4A2E1B]/75 leading-relaxed">
            Sinh ra từ niềm say mê nét đẹp mộc mạc của xứ sở dừa, The ViéCOCO ra đời với khát khao định nghĩa lại 
            chuẩn mực mỹ phẩm thiên nhiên: lành tính, tinh tế và trân quý từng giọt tinh hoa của đất mẹ.
          </p>
        </div>

        {/* Narrative Grid with 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#FFFCF7] border border-[#4A2E1B]/15">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                alt="Quy trình ép lạnh dầu dừa thủ công Bến Tre"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1B]/70 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#F7E6CA] font-semibold">Artisanal Craft</span>
                <p className="font-serif text-xl font-bold mt-1 text-[#FFFCF7]">100% Ép Lạnh Không Qua Xử Lý Nhiệt</p>
                <p className="text-xs text-white/80 font-sans mt-0.5">Bảo toàn vẹn nguyên dưỡng chất sinh học tự nhiên</p>
              </div>
            </div>

            {/* Decorative organic stamp */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#8C9A7B] text-[#FFFCF7] flex flex-col items-center justify-center p-2 text-center shadow-lg border-2 border-[#FFFCF7] rotate-12">
              <span className="text-[9px] uppercase tracking-tighter font-bold">Chứng nhận</span>
              <span className="font-serif text-xs font-bold">100% Eco</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A2E1B] leading-snug">
              Nuôi dưỡng thanh xuân bằng sự dịu lành của thiên nhiên
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#4A2E1B]/80 leading-relaxed">
              Mỗi trái dừa được chúng tôi tuyển chọn từ những cây dừa già trên 20 năm tuổi tại Bến Tre, nơi có nồng độ dầu 
              và hàm lượng Axit Lauric cao nhất. Thay vì sử dụng phương pháp nấu sôi truyền thống dễ làm biến tính vitamin, 
              The ViéCOCO áp dụng công nghệ <strong>ép lạnh phân đoạn ly tâm</strong> khép kín.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#4A2E1B]/80 leading-relaxed">
              Dầu dừa thu được trong suốt như pha lê, thơm ngát mùi dừa tươi tự nhiên dịu ngọt, thẩm thấu nhanh vào biểu bì 
              mà không gây bết dính. Đây là giải pháp chăm sóc làn da môi và cơ thể lý tưởng, hoàn toàn lành tính cho các bạn học sinh, 
              sinh viên và cả những làn da nhạy cảm nhất.
            </p>

            {/* 3 Core Commitments Badges */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 text-center shadow-sm">
                <span className="text-2xl mb-1 block">🌱</span>
                <h4 className="font-serif font-bold text-[#4A2E1B] text-sm">100% Thuần chay</h4>
                <p className="text-[11px] text-[#7A5230] mt-1 font-sans">Nguồn gốc thực vật tự nhiên</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 text-center shadow-sm">
                <span className="text-2xl mb-1 block">🐇</span>
                <h4 className="font-serif font-bold text-[#4A2E1B] text-sm">Không thử nghiệm thú</h4>
                <p className="text-[11px] text-[#7A5230] mt-1 font-sans">Cam kết bảo vệ động vật</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 text-center shadow-sm">
                <span className="text-2xl mb-1 block">✨</span>
                <h4 className="font-serif font-bold text-[#4A2E1B] text-sm">Thủ công tỉ mỉ</h4>
                <p className="text-[11px] text-[#7A5230] mt-1 font-sans">Từng mẻ nhỏ chu đáo</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Brand Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_VALUES.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#8C9A7B] font-bold block mb-2">0{index + 1}</span>
                <h4 className="font-serif font-bold text-lg text-[#4A2E1B] mb-1">{item.title}</h4>
                <p className="text-[11px] uppercase tracking-wider text-[#7A5230] font-sans font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs text-[#4A2E1B]/75 leading-relaxed font-sans">{item.desc}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-[#4A2E1B]/10 flex items-center justify-between text-xs text-[#8C9A7B] font-medium">
                <span>The ViéCOCO Standard</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
