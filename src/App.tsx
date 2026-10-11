import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { INITIAL_PRODUCTS } from './data/products';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductCard } from './components/ProductCard';
import { PriceModal } from './components/PriceModal';
import { QRModal } from './components/QRModal';
import { CartDrawer } from './components/CartDrawer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  // Load products from LocalStorage if previously customized
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('viecoco_products_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    return INITIAL_PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem('viecoco_cart_v1');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
    }
    return [];
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [isEditPriceMode, setIsEditPriceMode] = useState(false);
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync products to LocalStorage
  const saveProductsToStorage = (updatedList: Product[]) => {
    setProducts(updatedList);
    try {
      localStorage.setItem('viecoco_products_v1', JSON.stringify(updatedList));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  // Sync Cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('viecoco_cart_v1', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart', e);
    }
  }, [cart]);

  // Update price of a single product
  const handleUpdatePrice = (productId: string, newPrice: number) => {
    const updated = products.map((p) => (p.id === productId ? { ...p, price: newPrice } : p));
    saveProductsToStorage(updated);

    // Also update price in existing cart items if present
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, product: { ...item.product, price: newPrice } }
          : item
      )
    );

    setToastMessage(`Đã cập nhật giá mới: ${new Intl.NumberFormat('vi-VN').format(newPrice)} ₫`);
  };

  // Batch update prices from admin modal
  const handleBatchUpdatePrices = (updatedPrices: Record<string, number>) => {
    const updated = products.map((p) => {
      if (updatedPrices[p.id] !== undefined) {
        return { ...p, price: updatedPrices[p.id] };
      }
      return p;
    });
    saveProductsToStorage(updated);

    setCart((prevCart) =>
      prevCart.map((item) =>
        updatedPrices[item.product.id] !== undefined
          ? { ...item, product: { ...item.product, price: updatedPrices[item.product.id] } }
          : item
      )
    );

    setToastMessage('Đã lưu thành công tất cả giá mới vào hệ thống!');
  };

  // Reset to factory defaults
  const handleResetDefaults = () => {
    saveProductsToStorage(INITIAL_PRODUCTS);
    setCart((prevCart) =>
      prevCart.map((item) => {
        const defaultProd = INITIAL_PRODUCTS.find((p) => p.id === item.product.id);
        return defaultProd ? { ...item, product: defaultProd } : item;
      })
    );
    setToastMessage('Đã khôi phục bảng giá chuẩn của The ViéCOCO!');
  };

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setToastMessage(`Đã thêm "${product.name}" vào giỏ hàng`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
    setToastMessage('Đã bỏ sản phẩm khỏi giỏ');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Smooth navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section spy on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'products', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F7E6CA] text-[#4A2E1B] font-sans antialiased selection:bg-[#7A5230] selection:text-[#FFFCF7]">
      {/* Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQR={() => setIsQRModalOpen(true)}
        isEditPriceMode={isEditPriceMode}
        onToggleEditPriceMode={() => {
          const next = !isEditPriceMode;
          setIsEditPriceMode(next);
          setToastMessage(
            next
              ? '⚙️ Đã bật Chế độ chỉnh sửa giá bán. Nhấp vào giá từng sản phẩm để sửa!'
              : 'Đã tắt chế độ sửa giá. Chuyển sang giao diện bán lẻ.'
          );
        }}
      />

      {/* Main Content Area: Offset on Desktop for Left Sidebar (w-72) */}
      <main className="lg:pl-72 transition-all duration-300">
        
        {/* Hero Section */}
        <Hero
          onExploreClick={() => handleNavigate('products')}
          onOpenQR={() => setIsQRModalOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* ================= PRODUCT SHOWCASE SECTION ================= */}
        <section id="products" className="py-20 lg:py-28 relative bg-[#FFFCF7]/40 border-y border-[#4A2E1B]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header with Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFCF7] border border-[#4A2E1B]/15 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C9A7B]"></span>
                  <span className="text-[11px] uppercase tracking-widest text-[#7A5230] font-sans font-semibold">
                    Danh mục sản phẩm cốt lõi
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A2E1B]">
                  Bộ Sưu Tập Dừa Thủ Công
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#4A2E1B]/75 mt-2 max-w-xl">
                  Chắt lọc từ tinh chất dừa sáp Bến Tre, dịu nhẹ nâng niu làn môi và làn da với các dưỡng chất tự nhiên thuần khiết nhất.
                </p>
              </div>

              {/* Price Mode Toggle & Admin Hub Button */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const next = !isEditPriceMode;
                    setIsEditPriceMode(next);
                    setToastMessage(
                      next
                        ? '⚙️ Đã bật Chế độ chỉnh sửa giá bán'
                        : 'Đã tắt chế độ sửa giá'
                    );
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm ${
                    isEditPriceMode
                      ? 'bg-[#7A5230] text-[#FFFCF7] ring-2 ring-[#7A5230]/40'
                      : 'bg-[#FFFCF7] text-[#4A2E1B] border border-[#4A2E1B]/20 hover:border-[#4A2E1B]'
                  }`}
                  title="Bật/Tắt chế độ nhấp vào giá để sửa nhanh"
                >
                  <span>⚙️ Chế độ chỉnh sửa giá:</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isEditPriceMode ? 'bg-[#FFFCF7] text-[#4A2E1B]' : 'bg-[#4A2E1B]/10 text-[#4A2E1B]'
                  }`}>
                    {isEditPriceMode ? 'BẬT' : 'TẮT'}
                  </span>
                </button>

                <button
                  onClick={() => setIsPriceModalOpen(true)}
                  className="px-4 py-2.5 rounded-2xl bg-[#FFFCF7] text-[#4A2E1B] border border-[#4A2E1B]/20 hover:bg-[#F7E6CA] text-xs font-semibold transition-all shadow-sm flex items-center space-x-1.5"
                  title="Mở bảng tổng hợp sửa tất cả giá cùng lúc"
                >
                  <span>📋 Bảng quản lý giá</span>
                </button>
              </div>
            </div>

            {/* Price Edit Helper Notice if active */}
            {isEditPriceMode && (
              <div className="mb-8 p-4 rounded-2xl bg-[#7A5230]/15 border border-[#7A5230]/30 flex items-center justify-between animate-fadeIn">
                <div className="flex items-center space-x-2 text-xs text-[#4A2E1B]">
                  <span className="text-lg">💡</span>
                  <span>
                    <strong>Chế độ chỉnh sửa giá đang BẬT:</strong> Bạn có thể nhấp trực tiếp vào khung giá của từng sản phẩm bên dưới để nhập số tiền mới và nhấn <strong>"Lưu"</strong>.
                  </span>
                </div>
                <button
                  onClick={() => setIsPriceModalOpen(true)}
                  className="text-xs font-bold text-[#7A5230] underline hover:text-[#4A2E1B] shrink-0 ml-4"
                >
                  Sửa hàng loạt →
                </button>
              </div>
            )}

            {/* Product Cards Grid: 1 col Mobile, 2 cols Tablet, 3 cols Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isEditPriceMode={isEditPriceMode}
                  onUpdatePrice={handleUpdatePrice}
                  onAddToCart={handleAddToCart}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>

            {/* Testimonials / Community Feedback */}
            <div className="mt-20 pt-16 border-t border-[#4A2E1B]/15">
              <div className="text-center mb-10">
                <span className="text-[11px] uppercase tracking-widest text-[#7A5230] font-sans font-semibold">
                  Cảm nhận chân thực
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A2E1B] mt-1">
                  Được Yêu Thích Bởi Lứa Tuổi Học Đường & Giới Trẻ
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 shadow-sm space-y-3">
                  <div className="flex text-amber-500 text-xs">★★★★★</div>
                  <p className="text-xs text-[#4A2E1B]/80 italic leading-relaxed">
                    "Son dưỡng dừa mùi thơm nhẹ tênh như kẹo dừa non, thoa buổi tối ngủ dậy môi căng mọng cực thích. Đi học thoa không hề bị bóng nhẫy hay bết dính!"
                  </p>
                  <div className="pt-2 border-t border-[#4A2E1B]/10 flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full bg-[#F7E6CA] flex items-center justify-center text-xs font-bold text-[#4A2E1B]">
                      M
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4A2E1B]">Minh Anh</p>
                      <p className="text-[10px] text-[#7A5230]">Học sinh 12A10</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 shadow-sm space-y-3">
                  <div className="flex text-amber-500 text-xs">★★★★★</div>
                  <p className="text-xs text-[#4A2E1B]/80 italic leading-relaxed">
                    "Hũ scrub môi đường mía dừa dùng xong thoa son lên màu siêu mướt. Bao bì hũ thủy tinh cầm rất chắc tay và sang trọng, không nghĩ là sản phẩm thủ công của các bạn học sinh làm!"
                  </p>
                  <div className="pt-2 border-t border-[#4A2E1B]/10 flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full bg-[#F7E6CA] flex items-center justify-center text-xs font-bold text-[#4A2E1B]">
                      K
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4A2E1B]">Khánh Linh</p>
                      <p className="text-[10px] text-[#7A5230]">Thành viên CLB Khởi Nghiệp</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFCF7] border border-[#4A2E1B]/15 shadow-sm space-y-3">
                  <div className="flex text-amber-500 text-xs">★★★★★</div>
                  <p className="text-xs text-[#4A2E1B]/80 italic leading-relaxed">
                    "Tẩy da chết body cà phê dừa thơm nức mũi mùi Robusta rang mộc. Tắm xong da mịn như lụa, đỡ hẳn sần sùi vùng bắp tay. Rất tự hào về dự án của Tổ 3!"
                  </p>
                  <div className="pt-2 border-t border-[#4A2E1B]/10 flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full bg-[#F7E6CA] flex items-center justify-center text-xs font-bold text-[#4A2E1B]">
                      H
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4A2E1B]">Hoàng Nam</p>
                      <p className="text-[10px] text-[#7A5230]">Bí thư Chi đoàn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer
          onOpenQR={() => setIsQRModalOpen(true)}
          onNavigate={handleNavigate}
        />

      </main>

      {/* Floating QR Launcher Button for easy access on any device */}
      <div className="fixed bottom-6 left-6 z-30 lg:hidden">
        <button
          onClick={() => setIsQRModalOpen(true)}
          className="p-3 bg-[#4A2E1B] text-[#FFFCF7] rounded-full shadow-2xl flex items-center justify-center border border-[#F7E6CA]/30 active:scale-95 transition-transform"
          title="Mở mã QR"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth="2" />
            <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth="2" />
            <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth="2" />
            <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 19h2v2h-2z" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* Modals & Overlays */}
      <PriceModal
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
        products={products}
        onBatchUpdatePrices={handleBatchUpdatePrices}
        onResetDefaults={handleResetDefaults}
      />

      <QRModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenQR={() => {
          setIsCartOpen(false);
          setIsQRModalOpen(true);
        }}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};
export default App;
