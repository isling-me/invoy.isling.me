/* eslint-disable @next/next/no-img-element */
'use client';

import { Button, Carousel, Form, Input, message } from 'antd';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const benefits = [
    {
      title: 'Quản lý số lượng sản phẩm',
      description: 'Theo dõi số lượng sản phẩm nhập về một cách trực quan',
    },
    ,
    {
      title: 'Tạo hoá đơn dễ dàng',
      description: 'Tạo hoá đơn thanh toán công nợ chỉ bằng 1 thao tác',
    },
    {
      title: 'Theo dõi công nợ & thanh toán',
      description:
        'Theo dõi công nợ tránh bỏ lỡ kỳ thanh toán - tạo niềm tin với nhà cung cấp',
    },
  ];

  const guideContent = `
  Cảm ơn bạn đã tin tưởng Invoy, một ứng dụng giúp bạn tối ưu hoá quy trình nhập hàng và thanh toán công nợ! Làm theo hướng dẫn sau để bắt đầu sử dụng ứng dụng.
  <br><br/>
  1. **Tải ứng dụng từ App Store:**
      Mở App Store, tìm kiếm và tải ứng dụng Invoy.

  2. **Tạo Nhà cung cấp:**
      Mở ứng dụng và tạo các nhà cung cấp là đối tác của bạn.

  3. **Thêm sản phẩm cho các Nhà cung cấp:**
      Sản phẩm bao gồm tên, giá mua, ảnh. App cung cấp tính năng tạo sản phẩm liên tiếp khi bạn cần nhập số lượng lớn.

  4. **Thêm thông tin nhận hàng:**
      Khi bạn nhận được hàng từ Nhà cung cấp, hãy tạo một đơn nhập hàng bằng cách: Xem chi tiết một sản phẩm > Bấm nút Thêm ở mục Lịch sử trả hàng.

  5. **Tạo hoá đơn:**
      Mở màn hình Nhà cung cấp, bấm nút Xuất h.đơn. Tại màn hình Tạo hoá đơn, bấm nút Thanh toán. Bạn có thể chụp màn hình rồi chia sẻ hoá đơn đến Nhà cung cấp.
  <br><br/>
  Chúng tôi hi vọng bạn có trải nghiệm tuyệt vời với Invoy! Nếu bạn có bất kỳ thắc mắc nào, hãy liên hệ với chúng tôi ở mục "Liên hệ" ở website.
  `;

  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      // Implement logic to send contact form data (e.g., email API)
      console.log('Contact form submitted:', values);
      message.success('Tin nhắn của bạn được gửi thành công!');
      form.resetFields();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      message.error('Xảy ra lỗi. Hãy thử lại.');
    }
  };

  return (
    <main className='bg-gray-100'>
      <section className='relative hero min-h-screen flex flex-col justify-center items-center'>
        <div className='absolute w-full top-0 h-14 z-30'>
          <div className='w-[720px] mx-auto h-full flex'>
            <Link
              href='/'
              className='pr-4 h-full flex items-center hover:text-gray-600'
            >
              Trang chủ
            </Link>
            <Link
              href='#contact-us'
              className='px-4 h-full flex items-center hover:text-gray-600'
            >
              Liên lạc
            </Link>
            <Link
              href='/privacy-policy'
              className='px-4 h-full flex items-center hover:text-gray-600'
            >
              Chính sách bảo mật
            </Link>
          </div>
        </div>
        <div className='absolute w-full h-screen z-0 opacity-35'>
          <Image src='/icon.png' alt='Invoy App' fill />
        </div>
        <div className='w-screen h-screen z-10 backdrop-blur-3xl'>
          <div className='w-[720px] mx-auto mt-32'>
            <div className='flex'>
              <Image
                className='rounded-lg'
                src='/icon.png'
                alt='supplier'
                width={240}
                height={240}
              />
              <div className='ml-6'>
                <div className='text-xl'>
                  <span className='text-2xl font-semibold'>Invoy</span> - Trợ
                  thủ đắc lực cho việc quản lý nhập hàng hoá của bạn
                </div>
                <div className='mt-6 text-md'>Với Invoy, bạn có thể</div>
                <div className='space-y-2 mt-2'>
                  <div className='text-base'>
                    • Quản lý danh sách nhà cung cấp sản phẩm; quản lý sản phẩm
                    trên từng nhà cung cấp
                  </div>
                  <div className='text-base'>
                    • Quản lý việc nhập sản phẩm, quản lý công nợ cho từng nhà
                    quản lý
                  </div>
                  <div className='text-base'>
                    • Tạo hoá đơn thanh toán các sản phẩm đã nhập
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-xl font-bold text-center mb-4 mt-16'>
            Tải xuống Invoy ngay hôm nay và bắt đầu quản lý hóa đơn như một
            chuyên gia!
          </h1>
          <div className='flex justify-center'>
            <Link href='https://apps.apple.com/app'>
              <Image
                className='object-cover'
                src='/download-app-store.png'
                alt='download on app store'
                width={240}
                height={72}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className='py-16 bg-black'>
        <div className='w-[720px] mx-auto'>
          <Carousel autoplay>
            <div className='h-[512px]'>
              <div className='h-full flex justify-center'>
                <img className='h-full' src='/carosel/1.png' alt='carosel' />
              </div>
            </div>
            <div className='h-[512px]'>
              <div className='h-full flex justify-center'>
                <img className='h-full' src='/carosel/2.png' alt='carosel' />
              </div>
            </div>
            <div className='h-[512px]'>
              <div className='h-full flex justify-center'>
                <img className='h-full' src='/carosel/3.png' alt='carosel' />
              </div>
            </div>
            <div className='h-[512px]'>
              <div className='h-full flex justify-center'>
                <img className='h-full' src='/carosel/4.png' alt='carosel' />
              </div>
            </div>
            <div className='h-[512px]'>
              <div className='h-full flex justify-center'>
                <img className='h-full' src='/carosel/5.png' alt='carosel' />
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section className='w-[720px] mx-auto pt-16'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Nhập hàng hoá dễ dàng hơn bao giờ hết
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-4 bg-white rounded-lg shadow-md'
            >
              <h3 className='text-xl font-bold mb-2'>{benefit?.title}</h3>
              <p className='text-gray-700'>{benefit?.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='w-[720px] mx-auto guide mt-16'>
        <h2 className='text-2xl font-bold mb-4'>Hướng dẫn sử dụng app</h2>
        <Markdown>{guideContent}</Markdown>
      </section>

      <section className='w-[720px] mx-auto contact mt-16' id='contact-us'>
        <h2 className='text-2xl font-bold mb-4'>Liên hệ</h2>
        <Form form={form} layout='vertical' onFinish={handleSubmit}>
          <Form.Item label='Họ tên' name='name' required>
            <Input />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            required
            rules={[{ type: 'email', message: 'Nhập địa chỉ thư điện tử' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label='Tin nhắn' name='message' required>
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Gửi tin nhắn
            </Button>
          </Form.Item>
        </Form>
      </section>
      <div className='h-24' />
    </main>
  );
}
