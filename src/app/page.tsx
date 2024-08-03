'use client'

import Image from "next/image";
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const introRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const locationsRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const brandStoryRef = useRef<HTMLElement>(null);

  const sectionRefs = [introRef, menuRef, locationsRef, galleryRef, brandStoryRef];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#F5F5F5] text-[#333333] font-sans">
      <header className="bg-[#F0EDE9] py-6 px-4 md:px-8 lg:px-12 fixed w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.jpg" alt="소소정" width={32} height={32} className="h-8 mr-4" />
            <h1 className="text-2xl font-bold">소소정</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection(introRef)} className="text-[#333333] hover:text-[#8B4513]">소개</button>
            <button onClick={() => scrollToSection(menuRef)} className="text-[#333333] hover:text-[#8B4513]">메뉴</button>
            <button onClick={() => scrollToSection(galleryRef)} className="text-[#333333] hover:text-[#8B4513]">갤러리</button>
            <button onClick={() => scrollToSection(locationsRef)} className="text-[#333333] hover:text-[#8B4513]">지점</button>
            <button onClick={() => scrollToSection(brandStoryRef)} className="text-[#333333] hover:text-[#8B4513]">이야기</button>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      {isMenuOpen && (
        <div className="md:hidden bg-[#F0EDE9] py-4 fixed w-full z-10 top-20">
          <nav className="flex flex-col items-center space-y-4">
            <button onClick={() => scrollToSection(introRef)} className="text-[#333333] hover:text-[#8B4513]">소개</button>
            <button onClick={() => scrollToSection(menuRef)} className="text-[#333333] hover:text-[#8B4513]">메뉴</button>
            <button onClick={() => scrollToSection(locationsRef)} className="text-[#333333] hover:text-[#8B4513]">지점</button>
            <button onClick={() => scrollToSection(galleryRef)} className="text-[#333333] hover:text-[#8B4513]">갤러리</button>
            <button onClick={() => scrollToSection(brandStoryRef)} className="text-[#333333] hover:text-[#8B4513]">브랜드 이야기</button>
          </nav>
        </div>
      )}

      <main className="pt-20">
        <section ref={introRef} className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">소소정의 따뜻함을 경험하세요</h2>
                <p className="text-[#666666] mb-6">
                  우리의 전통 한식 육수 - 곰탕, 갈비탕, 설렁탕의 풍부하고 위안을 주는 맛을 즐겨보세요. 정성과 열정으로 만든 우리의 요리는 한국의 진정한 맛을 선사합니다.
                </p>
                <button
                  onClick={() => scrollToSection(menuRef)}
                  className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-md hover:bg-[#6A3608] transition-colors"
                >
                  메뉴 살펴보기
                </button>
              </div>
              <div>
                <img src="https://t3.ftcdn.net/jpg/04/18/10/94/240_F_418109480_615hftVuE0CTBMvPwaFfcu4iZygBeC4a.jpg" alt="소소정 육수" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section ref={menuRef} className="bg-[#F0EDE9] py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">대표 메뉴</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://t3.ftcdn.net/jpg/06/41/50/24/240_F_641502436_KoygMowjPVtkReJZpjGX2PTx4V7wTR90.jpg" alt="곰탕" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">곰탕</h3>
                  <p className="text-[#666666] mb-4">
                    우리의 시그니처 곰탕은 완벽하게 끓여낸 풍부하고 감칠맛 나는 소고기 뼈 육수로, 부드러운 소고기와 고명과 함께 제공됩니다.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-[#6A3608] transition-colors"
                  >
                    자세히 보기
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://t4.ftcdn.net/jpg/06/30/62/21/240_F_630622142_qKTe2HlTVzdxT7u9GVo0RtgacyqYPxaS.jpg" alt="갈비탕" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">갈비탕</h3>
                  <p className="text-[#666666] mb-4">
                    향긋한 채소와 향신료와 함께 끓인 진한 소갈비 육수, 갈비탕의 깊은 맛을 느껴보세요.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-[#6A3608] transition-colors"
                  >
                    자세히 보기
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://t4.ftcdn.net/jpg/06/24/58/95/240_F_624589557_EnI9rX9sXLoUz2ORmUi3hnp5cy2Hm76M.jpg" alt="설렁탕" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">설렁탕</h3>
                  <p className="text-[#666666] mb-4">
                    우리의 설렁탕은 부드러운 소고기와 고명이 들어간 전통 한국식 소뼈 육수로, 섬세하고 우유빛 국물이 특징입니다.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-[#6A3608] transition-colors"
                  >
                    자세히 보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section ref={galleryRef} className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">갤러리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <video src="/boiled.mp4" controls className="w-full rounded-lg shadow-lg" />
              </div>
              <div>
                <p className="text-[#666666] mb-6">
                  소소정에서는 전통 한식 조리법에 큰 자부심을 가지고 있습니다. 우리의 셰프들은 각 요리를 정성스럽게 준비하며, 가장 맛있고 영양가 있는 육수를 추출하기 위해 수 시간 동안 끓입니다.
                </p>
                <p className="text-[#666666] mb-6">
                  최고급 식재료 선별부터 시간을 들여 완성하는 기법까지, 모든 과정은 여러분께 진정한 맛의 경험을 전달하기 위해 세심하게 만들어집니다.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-md hover:bg-[#6A3608] transition-colors"
                >
                  우리의 이야기 보기
                </a>
              </div>
            </div>
          </div>
        </section>
        <section ref={locationsRef} className=" bg-[#F0EDE9] py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">아늑한 식당을 방문해보세요</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/placeholder.svg" alt="명동점" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">소소정 명동점</h3>
                  <p className="text-[#666666] mb-4">
                    서울 명동의 중심에 위치한 우리의 플래그십 레스토랑에서 따뜻함과 편안함을 경험해보세요.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-[#6A3608] transition-colors"
                  >
                    방문하기
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/placeholder.svg" alt="강남점" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">소소정 강남점</h3>
                  <p className="text-[#666666] mb-4">
                    활기찬 강남 지역에 위치한 모던하고 세련된 우리 레스토랑에서 품격 있는 식사를 즐겨보세요.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-[#6A3608] transition-colors"
                  >
                    방문하기
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/restaurant3.jpg" alt="동래점" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">소소정 동래점</h3>
                  <p className="text-[#666666] mb-4">
                    동래 지점의 평화로운 분위기에서 바다를 바라보며 우리의 시그니처 요리를 즐겨보세요.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#8B4513] text-white px-4 py-2 rounded-md hover:bg-[#6A3608] transition-colors"
                  >
                    방문하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={brandStoryRef} className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">소소옥 이란?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-[#666666] mb-6">
                  소소정은 50년 이상 정통 한식을 제공해온 유명 한식당입니다. 우리의 이야기는 서울의 중심에서 시작되었습니다. 창립자인 김씨 부부가 한국의 전통 맛을 보존하고자 하는 열정으로 작은 가족 식당을 열면서 시작되었습니다.
                </p>
                <p className="text-[#666666] mb-6">
                  수십 년 동안 소소정은 품질에 대한 약속, 세심한 주의, 한식 조리 예술에 대한 흔들림 없는 헌신으로 사랑받는 브랜드로 성장했습니다. 우리의 셰프들은 각 요리를 정성스럽게 준비하며, 가장 맛있고 영양가 있는 육수를 추출하기 위해 수 시간 동안 끓입니다.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-md hover:bg-[#6A3608] transition-colors"
                >
                  Learn More
                </a>
              </div>
              <div>
                <img src="/placeholder.svg" alt="Sosojeong Brand Story" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F0EDE9] py-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Image src="/placeholder.svg" alt="소소정" width={32} height={32} className="h-8 mr-4" />
            <p className="text-[#333333]">&copy; 2024 소소정. All rights reserved.</p>
          </div>
          <nav className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#333333] hover:text-[#8B4513]">개인정보 처리방침</a>
            <a href="#" className="text-[#333333] hover:text-[#8B4513]">이용약관</a>
            <a href="#" className="text-[#333333] hover:text-[#8B4513]">문의하기</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}