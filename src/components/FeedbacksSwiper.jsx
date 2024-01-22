"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// icons
import { QuoteTestimonial } from "../svg/QuoteTestimonial";

// hooks
import useBlurredImageLoader from "../hooks/usePreload";

export default function FeedbacksSwiper() {
  useBlurredImageLoader(".blurred-img");

  const testimonials = [
    {
      name: "Adriel Araujo",
      role: "Lançamento completo",
      image: "/img/feedbackPhoto01.jpg",
      smallImage: "/img/feedbackPhoto01-small.jpg",
      description:
        "Já trabalho com o Souza em vários projetos. Fizemos 3 projetos neste tempo juntos. Ele é um cara incrível, super cumpre prazos, o pra mim é essencial. Já entreguei diversos desafios nas mãos dele, e eu tenho uma certa exigência visual, e ele sempre consegue me surpreender e entregar além daquilo que foi combinado, que é excelente, né? Eu sempre acredito e acredito muito, defendo muito que o visual vende e vende muito, então pra mim é sempre muito importante ter algo de extrema qualidade e é extremamente isso que o Souza entrega.Eu super recomendo ele para todos que conheço. Um cara extremamente capaz.",
    },
    {
      name: "Levi",
      role: "Key Visual",
      image: "/img/feedbackPhotoLevi.jpg",
      smallImage: "/img/feedbackPhotoLevi-small.jpg",
      description:
        "O Trabalho do Davidson, porr@. A gente aqui na na Motion Insider curtiu muito o resultado. A gente fez duas páginas com ele, atendimento, entrega, foi muito foda. Conseguimos ter os resultados que tanto queriamos. As páginas, a galera sempre chega elogiando, pô quem fez o site de voces, e tal? Então parabens ai por tudo.",
    },
    {
      name: "Gabi Cervantes",
      role: "Equipe de Designer",
      image: "/img/feedbackPhotoGabi.jpg",
      smallImage: "/img/feedbackPhotoGabi-small.jpg",
      description:
        "O Souza fez parte da minha equipe como designer por quase 2 anos. Ele, que criava todo material visual das minhas redes sociais, Youtube, ADS. Só tenho elogios para o trabalho dele. Ele é muito talentoso, é um dos melhores designers com quem eu já trabalhei e também é muito pontual, porque toda vez que eu precisei de alguma demanda, ele nunca atrasou, sempre entregou.",
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      className="mySwiper"
      pagination={pagination}
      modules={[Pagination]}
      slidesPerView={1}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="md:flex md:items-center md:justify-between md:gap-8">
            <div className="flex flex-col md:w-[520px] w-full h-[400px] md:h-[502px]">
              <div
                className="blurred-img w-full h-full overflow-hidden"
                style={{ backgroundImage: `url(${testimonial.smallImage})` }}
              >
                <img src={testimonial.image} className="rounded" alt="" />
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-sm opacity-80">{testimonial.role}</p>
              </div>
            </div>
            <div className="mt-8 md:flex-1 md:mt-0">
              <QuoteTestimonial className="w-8 h-8" />
              <p className="text-base md:text-2xl mt-8">
                {testimonial.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
