import React, { useState } from 'react';
import { Product } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onBatchUpdatePrices: (updatedPrices: Record<string, number>) => void;
  onResetDefaults: () => void;
}

export const PriceModal: React.FC<PriceModalProps> = ({
  isOpen,
  onClose,
  products,
  onBatchUpdatePrices,
  onResetDefaults,
}) => {
  const [tempPrices, setTempPrices] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    products.forEach((p) => {
      initial[p.id] = p.price.toString();
    });
    return initial;
  });

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePriceChange = (id: string, value: string) => {
    setTempPrices((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSaveAll = () => {
    const parsed: Record<string, number> = {};
    Object.entries(tempPrices).forEach(([id, val]) => {
      const clean = parseInt(val.replace(/\D/g, ''), 10);
      if (!isNaN(clean) && clean > 0) {
        parsed[id] = clean;
      }
    });

    onBatchUpdatePrices(parsed);
    setNotification('Đã lưu thành công toàn bộ giá bán vào hệ thống!');
    setTimeout(() => {
      setNotification(null);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Bạn có chắc muốn khôi phục giá niêm yết ban đầu của 3 sản phẩm?')) {
      onResetDefaults();
      setNotification('Đã khôi phục giá mặc định thành công!');
      setTimeout(() => {
        setNotification(null);
        onClose();
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A2E1B]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFCF7] border border-[#4A2E1B]/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#4A2E1B]/15">
          <div className="flex items-center space-x-3">
            <span className="p-2.5 bg-[#F7E6CA] rounded-2xl text-xl">⚙️</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#4A2E1B]">
                Bảng Quản Lý Giá Bán Động
              </h3>
              <p className="text-xs text-[#7A5230] font-sans">
                Dành riêng cho Tổ 3 - 12A10 điều chỉnh nhanh giá sản phẩm
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F7E6CA]/60 hover:bg-[#F7E6CA] text-[#4A2E1B] flex items-center justify-center font-bold"
          >
            ✕
          </button>
        </div>

        {/* Notification pill */}
        {notification && (
          <div className="mt-4 p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-semibold text-center animate-fadeIn">
            ✓ {notification}
          </div>
        )}

        {/* Product Price List */}
        <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {products.map((p) => (
            <div
              key={p.id}
              className="p-4 rounded-2xl bg-[#F7E6CA]/30 border border-[#4A2E1B]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-12 h-12 rounded-xl object-cover border border-[#4A2E1B]/15"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#4A2E1B]">{p.name}</h4>
                  <p className="text-[11px] text-[#7A5230]">{p.volume} • {p.tag}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative w-32">
                  <input
                    type="text"
                    value={tempPrices[p.id] || ''}
                    onChange={(e) => handlePriceChange(p.id, e.target.value)}
                    className="w-full pl-3 pr-7 py-2 bg-white border border-[#4A2E1B]/20 rounded-xl text-sm font-bold text-[#4A2E1B] focus:outline-none focus:ring-2 focus:ring-[#7A5230]"
                    placeholder="79000"
                  />
                  <span className="absolute right-2.5 top-2.5 text-xs text-[#7A5230] font-bold">₫</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-[#4A2E1B]/15 flex items-center justify-between gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl border border-red-300 text-red-700 hover:bg-red-50 text-xs font-semibold transition-colors"
          >
            ↺ Khôi phục gốc
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#4A2E1B]/20 text-[#4A2E1B] hover:bg-gray-100 text-xs font-medium"
            >
              Đóng
            </button>
            <button
              onClick={handleSaveAll}
              className="px-5 py-2.5 rounded-xl bg-[#4A2E1B] hover:bg-[#321c0e] text-[#FFFCF7] text-xs font-bold shadow-md hover:shadow-lg transition-all"
            >
              Lưu toàn bộ thay đổi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
