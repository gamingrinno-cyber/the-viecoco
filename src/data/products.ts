import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'lip-balm',
    name: 'Son dưỡng dừa ẩm mịn',
    enName: 'Coconut Hydrating Lip Balm',
    price: 79000,
    originalPrice: 95000,
    volume: '10g',
    packaging: 'Hũ thủy tinh mờ nắp gỗ mộc',
    tag: 'Bán chạy nhất',
    tagType: 'bestseller',
    rating: 4.9,
    reviewCount: 142,
    shortDesc: 'Dưỡng môi ẩm mượt 24h, làm mờ rãnh môi và hồng môi tự nhiên từ dầu dừa tinh khiết Bến Tre.',
    description: 'Chắt lọc từ những giọt dầu dừa Bến Tre ép lạnh nguyên chất kết hợp cùng sáp ong hữu cơ và tinh dầu hạt mỡ. Son dưỡng mang lại cảm giác mỏng nhẹ như sương, tan chảy ngay khi chạm vào môi, tạo lớp màng khóa ẩm vượt trội suốt cả ngày dài.',
    ingredients: ['100% Dầu dừa Bến Tre ép lạnh', 'Sáp ong rừng tự nhiên', 'Bơ hạt mỡ hữu cơ', 'Vitamin E tinh khiết'],
    benefits: ['Khóa ẩm sâu 24 giờ liên tục', 'Cải thiện sắc tố môi, ngăn ngừa thâm sạm', 'Làm mờ vân rãnh môi, cho môi căng bóng'],
    usage: 'Thoa trực tiếp lên môi bất cứ khi nào cảm thấy khô, hoặc dùng một lớp dày trước khi đi ngủ như mặt nạ ngủ cho môi.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'lip-scrub',
    name: 'Tẩy tế bào chết môi chiết xuất dừa & đường mía',
    enName: 'Coconut Sugar Lip Scrub',
    price: 129000,
    originalPrice: 149000,
    volume: '20g',
    packaging: 'Hũ thủy tinh cao cấp viền Champagne',
    tag: 'Thuần chay 100%',
    tagType: 'organic',
    rating: 4.95,
    reviewCount: 98,
    shortDesc: 'Lấy đi tế bào chết nhẹ nhàng với tinh thể đường mía vàng và dầu dừa hữu cơ thơm ngát.',
    description: 'Bí quyết cho đôi môi mịn màng như cánh hoa. Tinh thể đường mía nâu được nghiền siêu mịn theo tỉ lệ vàng, nhẹ nhàng cuốn trôi lớp da chết bong tróc mà không gây tổn thương hay rát môi, đồng thời tinh dầu dừa thẩm thấu nuôi dưỡng biểu bì ngay trong khi tẩy.',
    ingredients: ['Tinh thể đường mía nâu tự nhiên', 'Dầu dừa nguyên chất ép lạnh', 'Dầu Jojoba hữu cơ', 'Chiết xuất vani Madagascar'],
    benefits: ['Tẩy sạch tế bào chết dịu nhẹ', 'Kích thích tuần hoàn máu cho môi hồng hào', 'Tăng độ bám và lên màu chuẩn cho son môi'],
    usage: 'Lấy một lượng nhỏ thoa lên môi ẩm, massage nhẹ nhàng theo hình xoắn ốc trong 1-2 phút, sau đó rửa lại bằng nước ấm.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'body-polish',
    name: 'Tẩy tế bào chết body dầu dừa & bã cà phê hữu cơ',
    enName: 'Organic Coconut Body Polish',
    price: 159000,
    originalPrice: 189000,
    volume: '200g',
    packaging: 'Hũ Spa sang trọng nắp vân gỗ nâu',
    tag: 'Liệu trình Spa',
    tagType: 'new',
    rating: 5.0,
    reviewCount: 186,
    shortDesc: 'Cà phê Robusta Đắk Lắk rang mộc quyện cùng dầu dừa dưỡng da mướt mịn, sáng khỏe toàn thân.',
    description: 'Sự hòa quyện tuyệt đỉnh giữa bã cà phê Robusta tuyển chọn từ cao nguyên Đắk Lắk và dầu dừa Bến Tre trứ danh. Hạt cà phê được sàng lọc với kích thước hoàn hảo, giàu chất chống oxy hóa tự nhiên giúp đánh bay tế bào già cỗi, giảm thô ráp vùng khuỷu tay, đầu gối và cải thiện tình trạng viêm nang lông.',
    ingredients: ['Bã cà phê Robusta Đắk Lắk mộc 100%', 'Dầu dừa nguyên chất ép lạnh', 'Dầu hạnh nhân ngọt', 'Tinh dầu vỏ cam ngọt tự nhiên'],
    benefits: ['Làm sáng mịn và đều màu da toàn thân', 'Hỗ trợ cải thiện viêm nang lông và mụn lưng', 'Lưu lại hương thơm cà phê dừa ấm áp, quyến rũ'],
    usage: 'Làm ướt cơ thể, lấy lượng vừa đủ massage toàn thân từ 3-5 phút (tập trung vùng da thô ráp), sau đó xả sạch với nước ấm. Dùng 2-3 lần/tuần.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    inStock: true
  }
];

export const BRAND_VALUES = [
  {
    id: 'vegan',
    title: '100% Thuần chay',
    subtitle: '100% Vegan & Cruelty-Free',
    desc: 'Cam kết nguồn gốc hoàn toàn từ thực vật nhiệt đới, lành tính với mọi làn da học đường và nhạy cảm.'
  },
  {
    id: 'cold-pressed',
    title: 'Dầu dừa ép lạnh thủ công',
    subtitle: 'Handcrafted Cold-Pressed',
    desc: 'Phương pháp ép lạnh truyền thống giữ lại trọn vẹn 100% axit lauric và vitamin E quý giá của dừa Bến Tre.'
  },
  {
    id: 'eco-friendly',
    title: 'Bao bì thân thiện sinh thái',
    subtitle: 'Sustainable Packaging',
    desc: 'Sử dụng hũ thủy tinh tái sinh và nắp gỗ tự nhiên, giảm thiểu tối đa rác thải nhựa vì một hành tinh xanh.'
  },
  {
    id: 'fresh-batch',
    title: 'Mẻ nhỏ tươi mới mỗi tuần',
    subtitle: 'Fresh Small Batches',
    desc: 'Sản xuất thủ công từng mẻ nhỏ dưới sự giám sát tỉ mỉ, không chất bảo quản công nghiệp hay hóa chất tạo mùi.'
  }
];

export const FORMAT_CURRENCY = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' ₫';
};
