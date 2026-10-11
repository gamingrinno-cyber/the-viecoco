import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng điền Họ tên và Số điện thoại!');
      return;
    }
    setIsSent(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFCF7] border border-[#4A2E1B]/15">
            <span className="text-[11px] uppercase tracking-widest text-[#7A5230] font-sans font-semibold">
              Kết nối cùng chúng tôi
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E1B]">
            Thông Tin Liên Hệ & Giao Lưu
          </h2>
          <div className="w-16 h-0.5 bg-[#4A2E1B]/30 mx-auto" />
          <p className="font-sans text-sm sm:text-base text-[#4A2E1B]/75 leading-relaxed">
            Bạn có câu hỏi về bảng thành phần, muốn trải nghiệm thử mẫu thử hoặc đặt hàng số lượng lớn cho sự kiện? 
            Hãy nhắn ngay cho Nhóm 1 - Tổ 3 nhé!
          </p>
        </div>

        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Fast Information Box & Project Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FFFCF7] border border-[#4A2E1B]/15 shadow-sm space-y-6">
              <div>
                <span className="font-signature text-3xl text-[#7A5230] block">
                  The ViéCOCO Studio
                </span>
                <p className="font-serif text-xl font-bold text-[#4A2E1B] mt-1">
                  Dự án Khởi Nghiệp Mỹ Phẩm Dừa Xanh
                </p>
                <p className="text-xs text-[#7A5230] font-sans mt-0.5">
                  Đơn vị chủ trì: Nhóm 1 - Tổ 3 (Tập thể 12A10)
                </p>
              </div>

              <div className="space-y-4 text-xs font-sans border-t border-[#4A2E1B]/10 pt-6">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7E6CA] text-[#4A2E1B] flex items-center justify-center shrink-0">
                    📍
                  </div>
                  <div>
                    <strong className="block text-sm text-[#4A2E1B] font-serif">Địa Điểm Dự Án:</strong>
                    <span className="text-[#4A2E1B]/80 leading-relaxed">
                      Phòng học Lớp 12A10 • Trường THPT (Khu vực trưng bày sản phẩm & trải nghiệm thử)
                    </span>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7E6CA] text-[#4A2E1B] flex items-center justify-center shrink-0">
                    📞
                  </div>
                  <div>
                    <strong className="block text-sm text-[#4A2E1B] font-serif">Hotline / Zalo Dự Án:</strong>
                    <span className="text-[#4A2E1B]/80 font-mono">0988 234 567 (Đại diện Tổ 3)</span>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#F7E6CA] text-[#4A2E1B] flex items-center justify-center shrink-0">
                    🥥
                  </div>
                  <div>
                    <strong className="block text-sm text-[#4A2E1B] font-serif">Kênh Mạng Xã Hội:</strong>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-[#F7E6CA]/60 text-[#4A2E1B] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Instagram: @theviecoco.official
                      </span>
                      <span className="bg-[#F7E6CA]/60 text-[#4A2E1B] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        TikTok: @auracoco.12a10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eco Commitment Stamp */}
              <div className="p-4 rounded-2xl bg-[#8C9A7B]/15 border border-[#8C9A7B]/30 flex items-center space-x-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="text-xs font-bold text-[#4A2E1B] font-serif">Cam kết 100% tự nhiên</p>
                  <p className="text-[11px] text-[#7A5230]">
                    Không chất hóa học • An toàn học đường • Bao bì thân thiện
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Friendly Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFCF7] border border-[#4A2E1B]/15 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#4A2E1B] mb-2">
                Gửi Tin Nhắn Cho Nhóm 1 - Tổ 3
              </h3>
              <p className="text-xs text-[#7A5230] mb-6 font-sans">
                Điền thông tin bên dưới, các thành viên Tổ 3 sẽ hồi đáp ngay trong giờ giải lao!
              </p>

              {isSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-2 animate-fadeIn">
                  <span className="text-3xl block">💌</span>
                  <h4 className="font-serif font-bold text-lg text-emerald-800">
                    Đã Gửi Lời Nhắn Thành Công!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Cảm ơn bạn đã quan tâm đến The ViéCOCO. Nhóm sẽ liên lạc với bạn sớm nhất có thể.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                        Họ và tên của bạn *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ví dụ: Hoàng Mai Chi"
                        className="w-full px-4 py-3 bg-[#F7E6CA]/20 border border-[#4A2E1B]/20 rounded-xl text-xs text-[#4A2E1B] focus:bg-white focus:ring-2 focus:ring-[#7A5230] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                        Số điện thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ví dụ: 0912 345 678"
                        className="w-full px-4 py-3 bg-[#F7E6CA]/20 border border-[#4A2E1B]/20 rounded-xl text-xs text-[#4A2E1B] focus:bg-white focus:ring-2 focus:ring-[#7A5230] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                      Email (Không bắt buộc)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ban@example.com"
                      className="w-full px-4 py-3 bg-[#F7E6CA]/20 border border-[#4A2E1B]/20 rounded-xl text-xs text-[#4A2E1B] focus:bg-white focus:ring-2 focus:ring-[#7A5230] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4A2E1B] mb-1.5">
                      Lời nhắn / Yêu cầu đặt thử *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Bạn muốn hỏi về sản phẩm nào hay muốn đặt hàng số lượng bao nhiêu?..."
                      className="w-full px-4 py-3 bg-[#F7E6CA]/20 border border-[#4A2E1B]/20 rounded-xl text-xs text-[#4A2E1B] focus:bg-white focus:ring-2 focus:ring-[#7A5230] outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#4A2E1B] hover:bg-[#321c0e] text-[#FFFCF7] rounded-xl font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    Gửi thư cho Tổ 3 ✉
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
