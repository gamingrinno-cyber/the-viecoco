import React, { useState } from 'react';
import { CartItem } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenQR: () => void;
  onTriggerTestingNotice: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenQR,
  onTriggerTestingNotice,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee = subtotal > 200000 || subtotal === 0 ? 0 : 25000;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'VIECOCO10' || promoCode.trim().toUpperCase() === '12A10') {
      setDiscountPercent(10);
      setPromoMessage('Áp dụng thành công mã ưu đãi 10% từ 12A10!');
    } else {
      setPromoMessage('Mã không hợp lệ. Thử: 12A10 hoặc VIECOCO10');
    }
  };

  // KHI NHẤN VÀO MỤC THANH TOÁN -> KÍCH HOẠT THÔNG BÁO THỬ NGHIỆM
  const handleProceedCheckout = () => {
    onTriggerTestingNotice();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#4A2E1B]/50 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFCF7] shadow-2xl flex flex-col justify-between border-l border-[#4A2E1B]/15">
          
          {/* Header */}
          <div className="p-6 border-b border-[#4A2E1B]/15 flex items-center justify-between bg-[#F7E6CA]/40">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🛍️</span>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#4A2E1B]">
                  Giỏ Hàng Của Bạn
                </h3>
                <p className="text-[11px] text-[#7A5230]">
                  {items.length} mặt hàng được chọn
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#FFFCF7] text-[#4A2E1B] hover:bg-[#4A2E1B] hover:text-[#FFFCF7] flex items-center justify-center font-bold text-sm transition-colors border border-[#4A2E1B]/20"
            >
              ✕
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <span className="text-4xl block">🥥</span>
                <p className="font-serif text-lg font-bold text-[#4A2E1B]">
                  Giỏ hàng của bạn đang trống
                </p>
                <p className="text-xs text-[#7A5230]">
                  Hãy chọn những sản phẩm dừa thiên nhiên cao cấp để nâng niu làn da nhé!
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-[#4A2E1B] text-[#FFFCF7] rounded-full text-xs font-semibold"
                >
                  Khám phá sản phẩm
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 rounded-2xl bg-[#F7E6CA]/30 border border-[#4A2E1B]/15 flex items-center space-x-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover border border-[#4A2E1B]/10"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#4A2E1B] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#7A5230] font-bold">
                        {FORMAT_CURRENCY(item.product.price)}
                      </p>
                      
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center border border-[#4A2E1B]/20 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#4A2E1B] hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#4A2E1B] hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[10px] text-red-600 hover:underline"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Mã giảm giá (ví dụ: 12A10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white border border-[#4A2E1B]/20 rounded-xl text-xs uppercase"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-[#7A5230] text-white text-xs font-semibold rounded-xl hover:bg-[#4A2E1B]"
                    >
                      Áp dụng
                    </button>
                  </div>
                  {promoMessage && (
                    <p className="text-[11px] text-[#7A5230] mt-1 italic">
                      {promoMessage}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer Totals & Checkout Button */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#4A2E1B]/15 bg-[#F7E6CA]/30 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#4A2E1B]/80">
                  <span>Tạm tính:</span>
                  <span>{FORMAT_CURRENCY(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Ưu đãi (10%):</span>
                    <span>-{FORMAT_CURRENCY(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#4A2E1B]/80">
                  <span>Phí vận chuyển:</span>
                  <span>{shippingFee === 0 ? 'Miễn phí' : FORMAT_CURRENCY(shippingFee)}</span>
                </div>
                <div className="pt-2 border-t border-[#4A2E1B]/15 flex justify-between font-serif text-base font-bold text-[#4A2E1B]">
                  <span>Tổng thanh toán:</span>
                  <span>{FORMAT_CURRENCY(grandTotal)}</span>
                </div>
              </div>

              {/* Bấm thanh toán gọi thông báo thử nghiệm! */}
              <button
                onClick={handleProceedCheckout}
                className="w-full py-3.5 bg-[#4A2E1B] hover:bg-[#321c0e] text-[#FFFCF7] rounded-xl font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Tiến hành thanh toán</span>
                <span>→</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
