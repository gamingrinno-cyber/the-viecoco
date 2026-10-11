import React from 'react';
import { Product } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A2E1B]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FFFCF7] border border-[#4A2E1B]/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F7E6CA]/60 hover:bg-[#F7E6CA] text-[#4A2E1B] flex items-center justify-center font-bold text-sm transition-colors z-10"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden aspect-square bg-[#F7E6CA]/30 border border-[#4A2E1B]/15">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C9A7B] bg-[#8C9A7B]/15 px-2.5 py-1 rounded-full">
                {product.tag}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#4A2E1B] mt-2 leading-tight">
                {product.name}
              </h3>
              <p className="text-xs text-[#7A5230] italic font-sans">{product.enName}</p>
              
              <div className="mt-2 text-2xl font-serif font-bold text-[#4A2E1B]">
                {FORMAT_CURRENCY(product.price)}
              </div>
            </div>

            <p className="text-xs text-[#4A2E1B]/80 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Ingredients */}
            <div>
              <h4 className="text-xs font-bold text-[#4A2E1B] uppercase tracking-wider mb-1.5">
                Thành phần chính:
              </h4>
              <ul className="text-xs text-[#4A2E1B]/75 space-y-1">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center space-x-1.5">
                    <span className="text-[#8C9A7B]">✓</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="text-xs font-bold text-[#4A2E1B] uppercase tracking-wider mb-1.5">
                Công dụng vượt trội:
              </h4>
              <ul className="text-xs text-[#4A2E1B]/75 space-y-1">
                {product.benefits.map((ben, idx) => (
                  <li key={idx} className="flex items-center space-x-1.5">
                    <span className="text-[#7A5230]">★</span>
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="p-3 bg-[#F7E6CA]/30 rounded-xl border border-[#4A2E1B]/10 text-xs text-[#4A2E1B]/80">
              <strong>Hướng dẫn sử dụng:</strong> {product.usage}
            </div>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full py-3.5 bg-[#4A2E1B] hover:bg-[#321c0e] text-[#FFFCF7] rounded-xl font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              Thêm vào giỏ hàng ({FORMAT_CURRENCY(product.price)})
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
