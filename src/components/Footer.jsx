import { BackToTop } from "../svg/BackToTop";
import Image from "next/image";
import { RightArrowButton } from "../svg/RightArrowButton";

export default function Footer() {
  return (
    <>
      <footer className="px-6 py-14 pb-36 bg-[#08060C] ">
        <div className="md:max-w-screen-lg lg:max-w-screen-xl md:mx-auto md:flex md:flex-wrap md:justify-between">
          <div className="flex items center gap-4 md:flex-1">
            <Image
              src="/img/lastCtaPic.png"
              className="rounded-lg h-32 md:h-full object-cover"
              alt="Foto souza"
              width={`177`}
              height={`229`}
            />
            <div>
              <h4 className="text-4xl md:text-7xl uppercase md:w-1/2">
                Vamos conversar?
              </h4>
              {/* TO DO: LINK DO WHATSAPP */}
              <a href="">
                <button className="w-full md:w-auto px-12 py-4 gradient-button flex items-center justify-center gap-3 rounded-full mt-2 md:mt-2 group transition-all duration-300 maskButtonAnim">
                  <div className="mask-button-text">
                    <p className="text-[#08060C] first-text">
                      Entrar em contato
                    </p>
                    <p className="text-[#08060C] second-text">
                      Entrar em contato
                    </p>
                  </div>
                  <RightArrowButton className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2" />
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-col md:items-start justify-between items-center gap-4 mt-20 md:mt-0 md:flex-auto md:flex-grow-0 md:w-auto">
            <div className="order-2 md:order-1">
              <p className="text-sm">Email</p>
              <a href="mailto:Hello@davidsonsouza.com">
                <button className="transition-all duration-300 maskButtonAnim">
                  <div className="mask-button-text mt-2">
                    <p className="text-[#828282] first-text">
                      Hello@davidsonsouza.com
                    </p>
                    <p className="text-[#828282] second-text">
                      Hello@davidsonsouza.com
                    </p>
                  </div>
                </button>
              </a>
            </div>
            <div className="order-2 md:order-1">
              <p className="text-sm">Telefone:</p>
              <a href="tel:+5531975053019">
                <button className="transition-all duration-300 maskButtonAnim">
                  <div className="mask-button-text mt-2">
                    <p className="text-[#828282] first-text">(31) 97505-3019</p>
                    <p className="text-[#828282] second-text">
                      (31) 97505-3019
                    </p>
                  </div>
                </button>
              </a>
            </div>
            <div className="w-full flex justify-center items-center order-1 md:order-2 md:w-auto">
              <a href="#hero" onclick="lenis.scrollTo('#hero')">
                <button className="flex items-center gap-2 pb-1 border-solid border-b border-b-[#0E0D1A] group transition-all duration-300 maskButtonAnim">
                  <div className="mask-button-text">
                    <p className="first-text">Voltar ao topo</p>
                    <p className="second-text">Voltar ao topo</p>
                  </div>
                  <BackToTop className="w-3 h-3" />
                </button>
              </a>
            </div>
          </div>
          <div className="flex md:w-full items-center justify-between mt-7 md:mt-24 pt-4 md:pt-8 border-t border-t-white">
            {/* TO DO: LINKS DO FOOTER */}
            <p className="text-sm text-[#828282]">Solucoes</p>
            <p className="text-sm text-[#828282]">Solucoes</p>
            <p className="text-sm text-[#828282]">Solucoes</p>
            <p className="text-sm text-[#828282]">Solucoes</p>
          </div>
        </div>
      </footer>
    </>
  );
}
