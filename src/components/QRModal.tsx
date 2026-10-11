import React, { useState, useEffect } from 'react';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUrl?: string;
}

export const QRModal: React.FC<QRModalProps> = ({
  isOpen,
  onClose,
  currentUrl,
}) => {
  const [activeTab, setActiveTab] = useState<'website' | 'payment'>('website');
  const [copied, setCopied] = useState(false);
  const DEFAULT_LAN_URL = 'http://192.168.123.7:8080';
  const isFileProtocol = typeof window !== 'undefined' && window.location.protocol === 'file:';

  const [targetUrl, setTargetUrl] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.protocol === 'file:' ? DEFAULT_LAN_URL : (currentUrl || window.location.href);
    }
    return DEFAULT_LAN_URL;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.protocol === 'file:') {
        setTargetUrl(DEFAULT_LAN_URL);
      } else {
        setTargetUrl(currentUrl || window.location.href);
      }
    }
  }, [currentUrl, isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Safe QR API URL for crisp rendering
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    targetUrl
  )}&bgcolor=FFFCF7&color=4A2E1B&margin=10`;

  const vietQrPaymentUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    '2|99|0988234567|THEVIECOCO NHOM1 TO3 12A10|contact@theviecoco.vn|0|0|Thanh toan The VieCOCO'
  )}&bgcolor=FFFCF7&color=4A2E1B&margin=10`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A2E1B]/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#FFFCF7] border border-[#4A2E1B]/20 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F7E6CA]/60 hover:bg-[#F7E6CA] text-[#4A2E1B] flex items-center justify-center font-bold text-sm transition-colors"
        >
          ✕
        </button>

        {/* Brand Header */}
        <div className="mb-3">
          <div className="inline-block p-2 bg-[#F7E6CA] rounded-2xl mb-1.5">
            <span className="font-serif font-bold text-lg text-[#4A2E1B]">The ViéCOCO</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-[#4A2E1B]">
            {activeTab === 'website' ? 'Quét Mã Vào Website Trên Điện Thoại' : 'Mã QR Đặt Hàng / Chuyển Khoản'}
          </h3>
          <p className="text-xs text-[#7A5230] mt-1 font-sans">
            Mở camera điện thoại quét để truy cập tức thì
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex bg-[#F7E6CA]/50 p-1 rounded-2xl mb-4 max-w-xs mx-auto border border-[#4A2E1B]/10">
          <button
            onClick={() => setActiveTab('website')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'website'
                ? 'bg-[#4A2E1B] text-[#FFFCF7] shadow-sm'
                : 'text-[#4A2E1B] hover:text-black'
            }`}
          >
            Vào Trang Web
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'payment'
                ? 'bg-[#4A2E1B] text-[#FFFCF7] shadow-sm'
                : 'text-[#4A2E1B] hover:text-black'
            }`}
          >
            VietQR Dự Án
          </button>
        </div>

        {/* Local Wi-Fi notice */}
        {isFileProtocol && activeTab === 'website' && (
          <div className="mb-3 p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-left text-[11px] text-[#4A2E1B] leading-tight">
            <p className="font-bold text-amber-900 mb-0.5">⚠️ Hướng dẫn quét bằng điện thoại:</p>
            <p>1. Điện thoại và máy tính cần <strong>bắt chung một mạng Wi-Fi</strong>.</p>
            <p>2. Trên máy tính, nhấp đúp file <strong>run.bat</strong> để phát sóng web.</p>
            <p>3. Quét mã QR bên dưới để điện thoại tự mở <strong>{DEFAULT_LAN_URL}</strong>.</p>
          </div>
        )}

        {/* QR Code Container with Luxury Border */}
        <div className="relative inline-block p-4 rounded-3xl bg-[#F7E6CA]/40 border-2 border-dashed border-[#7A5230]/40 shadow-inner my-1">
          <div className="w-56 h-56 bg-[#FFFCF7] rounded-2xl p-3 shadow-md flex items-center justify-center relative overflow-hidden">
            <img
              src={activeTab === 'website' ? qrCodeUrl : vietQrPaymentUrl}
              alt="Mã QR The ViéCOCO"
              className="w-full h-full object-contain"
            />
            {/* Center Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-[#FFFCF7] border border-[#4A2E1B] shadow-lg flex items-center justify-center">
                <span className="font-serif font-bold text-[#4A2E1B] text-xs">V</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-center space-x-1.5 text-[11px] text-[#7A5230] font-sans font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C9A7B]"></span>
            <span>Mã định danh bảo mật • Chuẩn Eco-Chic</span>
          </div>
        </div>

        {/* Link & Copy Area */}
        <div className="mt-4 space-y-2.5">
          <div className="flex items-center space-x-2 bg-[#F7E6CA]/30 px-3 py-2 rounded-xl border border-[#4A2E1B]/15 text-left">
            <input
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="http://192.168.123.7:8080"
              className="w-full bg-transparent text-xs text-[#4A2E1B] font-mono outline-none"
            />
            <button
              onClick={handleCopyLink}
              className="px-3 py-1 bg-[#4A2E1B] hover:bg-[#341f12] text-[#FFFCF7] text-xs rounded-lg font-medium whitespace-nowrap transition-colors"
            >
              {copied ? '✓ Đã chép' : 'Sao chép'}
            </button>
          </div>

          <p className="text-[11px] text-[#4A2E1B]/70 italic">
            Thực hiện bởi: Nhóm 1 - Tổ 3 • 12A10 | Signature: AURACOCO
          </p>
        </div>

      </div>
    </div>
  );
};
