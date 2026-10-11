import React, { useState } from 'react';
import { Product } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface ProductCardProps {
  product: Product;
  isEditPriceMode: boolean;
  onUpdatePrice: (productId: string, newPrice: number) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isEditPriceMode,
  onUpdatePrice,
  onAddToCart,
  onQuickView,
}) => {
  const [isEditingInline, setIsEditingInline] = useState(false);
  const [editedPriceStr, setEditedPriceStr] = useState(product.price.toString());
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Handle saving inline price
  const handleSavePrice = () => {
    // Strip non-digits
    const cleanNum = parseInt(editedPriceStr.replace(/\D/g, ''), 10);
    if (!isNaN(cleanNum) && cleanNum > 0) {
      onUpdatePrice(product.id, cleanNum);
      setIsEditingInline(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  const handleCancelPrice = () => {
    setEditedPriceStr(product.price.toString());
    setIsEditingInline(false);
  };

  return (
    <div className="group bg-[#FFFCF7] rounded-3xl border border-[#4A2E1B]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between relative hover:-translate-y-1">
      {/* Top Media Header */}
      <div className="relative aspect-square overflow-hidden bg-[#F7E6CA]/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Floating Tag */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          <span className="bg-[#4A2E1B] text-[#FFFCF7] text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-sm">
            {product.tag}
          </span>
          <span className="bg-[#FFFCF7]/90 backdrop-blur-md text-[#7A5230] text-[10px] font-sans font-medium px-2.5 py-0.5 rounded-full border border-[#4A2E1B]/10 w-fit">
            {product.volume}
          </span>
        </div>

        {/* Quick View Floating Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFFCF7]/90 backdrop-blur-md text-[#4A2E1B] hover:bg-[#4A2E1B] hover:text-[#FFFCF7] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
          title="Xem chi tiết công dụng & thành phần"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1B]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating & Review */}
          <div className="flex items-center space-x-2 text-xs text-[#7A5230] mb-1.5">
            <div className="flex text-amber-500">
              {'★'.repeat(5)}
            </div>
            <span className="font-semibold">{product.rating}</span>
            <span className="text-[#4A2E1B]/40">({product.reviewCount} đánh giá)</span>
          </div>

          {/* Product Titles */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-xl font-bold text-[#4A2E1B] group-hover:text-[#7A5230] transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#7A5230] font-sans font-medium italic mt-0.5">
            {product.enName}
          </p>

          {/* Short Description */}
          <p className="text-xs text-[#4A2E1B]/75 line-clamp-2 mt-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        {/* Packaging note */}
        <div className="pt-2 border-t border-[#4A2E1B]/10 flex items-center justify-between text-[11px] text-[#7A5230]">
          <span>Quy cách: {product.packaging}</span>
          <span className="text-[#8C9A7B] font-medium">● Còn hàng</span>
        </div>

        {/* Price & Action Area */}
        <div className="pt-2">
          {/* ================= EDIT PRICE MODE ACTIVE ================= */}
          {isEditPriceMode ? (
            <div className="p-3 rounded-2xl bg-[#F7E6CA]/60 border border-[#7A5230]/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase font-bold text-[#7A5230] flex items-center gap-1">
                  <span>⚙️ Giá bán niêm yết:</span>
                </span>
                {saveSuccess && (
                  <span className="text-[10px] text-emerald-700 font-bold animate-bounce">
                    ✓ Đã lưu!
                  </span>
                )}
              </div>

              {isEditingInline ? (
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={editedPriceStr}
                      onChange={(e) => setEditedPriceStr(e.target.value)}
                      placeholder="Nhập giá mới..."
                      className="w-full px-2.5 py-1.5 text-sm font-bold text-[#4A2E1B] bg-white border border-[#4A2E1B]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A5230]"
                      autoFocus
                    />
                    <span className="absolute right-2 top-2 text-xs text-[#7A5230]">₫</span>
                  </div>
                  <button
                    onClick={handleSavePrice}
                    className="px-3 py-1.5 bg-[#4A2E1B] text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors"
                  >
                    Lưu
                  </button>
                  <button
                    onClick={handleCancelPrice}
                    className="px-2.5 py-1.5 bg-gray-200 text-gray-700 text-xs rounded-lg hover:bg-gray-300"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <div 
                  onClick={() => setIsEditingInline(true)}
                  className="flex items-center justify-between p-2 bg-[#FFFCF7] rounded-xl border border-dashed border-[#7A5230]/60 hover:border-[#4A2E1B] cursor-pointer group/price transition-all"
                  title="Nhấp vào đây để chỉnh sửa giá trực tiếp"
                >
                  <div>
                    <span className="font-serif text-xl font-bold text-[#4A2E1B]">
                      {FORMAT_CURRENCY(product.price)}
                    </span>
                    <span className="block text-[10px] text-[#7A5230]">
                      Nhấp để sửa giá ✎
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-[#7A5230] text-white rounded font-medium group-hover/price:scale-105 transition-transform">
                    Chỉnh sửa
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* ================= NORMAL PUBLIC STOREFRONT MODE ================= */
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-serif text-2xl font-bold text-[#4A2E1B]">
                    {FORMAT_CURRENCY(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="ml-2 text-xs line-through text-[#4A2E1B]/40 font-sans">
                      {FORMAT_CURRENCY(product.originalPrice)}
                    </span>
                  )}
                </div>
                <span className="text-[10px] uppercase text-[#8C9A7B] font-bold tracking-wider">
                  Organic
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onQuickView(product)}
                  className="w-full py-2.5 px-3 rounded-xl border border-[#4A2E1B]/20 text-[#4A2E1B] hover:bg-[#F7E6CA]/50 text-xs font-medium transition-all"
                >
                  Chi tiết
                </button>
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#4A2E1B] hover:bg-[#321c0e] text-[#FFFCF7] text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-1"
                >
                  <span>Thêm giỏ</span>
                  <span>+</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
