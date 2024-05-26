import Link from 'next/link';

function Page() {
  return (
    <div className=''>
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
      <div className='w-[720px] mx-auto space-y-6 mt-32'>
        <h1 className='text-2xl'>Chính Sách Bảo Mật của Ứng Dụng Invoy</h1>
        <h2 className='text-xl'>1. Sự chấp thuận</h2>
        <p>
          Bằng việc sử dụng ứng dụng Invoy, bạn đồng ý với việc thu thập, sử
          dụng và tiết lộ thông tin cá nhân của bạn theo mô tả trong Chính sách
          bảo mật này. Nếu bạn không đồng ý với Chính sách bảo mật này, bạn
          không được cung cấp cho chúng tôi bất kỳ thông tin cá nhân nào.
        </p>
        <p>
          Chúng tôi có quyền sửa đổi, bổ sung hoặc thay đổi Chính sách bảo mật
          này bất kỳ lúc nào. Chúng tôi khuyến khích bạn thường xuyên xem lại
          Chính sách bảo mật này để đảm bảo bạn biết và hiểu cách chúng tôi quản
          lý thông tin cá nhân của bạn.
        </p>

        <h2 className='text-xl'>2. Mục Đích Thu Thập Thông Tin</h2>

        <p>
          Chúng tôi không thu thập thông tin cá nhân của người dùng dưới bất kỳ
          hình thức nào.
        </p>

        <h2 className='text-xl'>3. Phạm Vi Thu Thập Thông Tin</h2>

        <p>
          Chúng tôi không thu thập thông tin cá nhân của người dùng dưới bất kỳ
          hình thức nào.
        </p>

        <h2 className='text-xl'>4. Thời Gian Lưu Trữ Dữ Liệu</h2>

        <p>
          Chúng tôi không thu thập thông tin cá nhân của người dùng dưới bất kỳ
          hình thức nào.
        </p>

        <h2 className='text-xl'>
          5. Không Chia Sẻ Thông Tin Cá Nhân Khách Hàng
        </h2>

        <p>
          Chúng tôi không thu thập thông tin cá nhân của người dùng dưới bất kỳ
          hình thức nào.
        </p>

        <h2 className='text-xl'>6. Thông tin liên hệ</h2>

        <p>
          Nếu bạn có câu hỏi hoặc bất kỳ thắc mắc nào về Chính Sách này hoặc
          thực tế việc thu thập, quản ly thông tin cá nhân của chúng tôi, xin
          vui lòng liên hệ với chúng tôi bằng cách:
        </p>
        <p>
          • Gửi thư điện tử đến địa chỉ email:{' '}
          <a
            href='mailto:isling.me@gmail.com'
            className='text-blue-400 font-semibold'
          >
            isling.me@gmail.com
          </a>
        </p>
        <p>
          • Liên hệ trực tiếp{' '}
          <Link href='/#contact-us' className='text-blue-400 font-semibold'>
            tại đây
          </Link>
        </p>
      </div>
      <div className='h-24' />
    </div>
  );
}

export default Page;
