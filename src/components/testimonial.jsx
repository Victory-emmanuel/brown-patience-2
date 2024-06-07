import Slider from "react-slick";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id="testimonial">
        <section className="py-16 bg-extraClr dark:bg-secondary xx:px-0 md:px-12">
          <div className=" m-auto  text-secondary dark:text-gray-300 xx:px-6 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                What Our Customers Have To Say
              </h2>
            </div>
            
            <div className=" slider-container">
              <Slider {...settings}>
                <div className="aspect-auto p-8 border h-[25rem] border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/cJ3tbP4S/2151100226-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Oluwakemi O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “I read 'Love, the Way to Victory' by Kenneth E. Hagin and
                    it taught me what love really means. I learnt that Love is a
                    person and I can become that person. It changed my
                    perspective on how I see people. It taught me that there's a
                    better way to dispense love to people—including people who
                    have hurt me.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/t4wVD9bk/41044-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Brown P.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Content Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “It took reading 'Created to be His Helpmeet' by Debi Pearl
                    for me to see and understand God's instruction on the role
                    of wives in marriage. It's a big book; it sent me to the
                    Bible. And through that book, God prepared me for the next
                    phase of my life—which I didn't even know was around the
                    corner!”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/hv7m702S/2151100149-1-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Omodolapo L.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Author
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “In reading 'Atomic Habits' by James Clear, I was able to
                    learn about bad behaviors and principle steps to adopting
                    good ones. I got to understand why small habits can make a
                    big difference. I got to learn the importance of habit
                    tracking and how to build healthy habits. I also learnt the
                    importance of accountability. This particular one was an
                    amazing reminder for me.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Timilehin Oshinowo
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “One of the books I really love is Francine Rivers' 'The
                    Scarlet Thread'. It's a combination of two stories that are
                    somehow linked but I only read one. I learned how to let go.
                    Ah! I'm still learning it, but that's where l started the
                    learning process from. The woman had to let her cheating
                    husband go for God to fix her and fix their marriage. She
                    really grew, as she went through God's dealings with her. I
                    think about her sometimes when it's difficult for me to let
                    something go. If Sierra 'that's her name' can do it, I can.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
                <div className="aspect-auto p-8 border h-[25rem]  border-extraCrl bg-transparent dark:bg-secondary dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
                  <div className="flex gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.postimg.cc/bYGVTcMv/2151033973-1.jpg"
                      alt=""
                      width=""
                      height=""
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                        Clementina O.
                      </h6>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Writer
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 bg-white dark:bg-secondary p-8 rounded-lg   ">
                    “Reading 'Chimamanda' by Brown Patience, I have seen that I
                    might have developed walls around my heart, and how the Lord
                    tenderly brings down those bricks one after the other.
                    Without these walls being brought down, I definitely cannot
                    enjoy the many blessings around me. I have seen that closing
                    my heart to pain means closing my heart to healing and
                    beauty.”
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonial;
